import assert from "assert";
import {getLocalStorage, pushArrayItemWithDiffKey, removeLocalStorage, setLocalStorage} from "./util";

export default class LibNianUserAPI {
    constructor(lib){
        this.lib = lib;
        //bind
        this.setProfile = this.setProfile.bind(this);
        this.addNote = this.addNote.bind(this);
        this.addNoteWithSelect = this.addNoteWithSelect.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }
    getProfile(){
        return getLocalStorage('nian-userProfiles')
    }
    async updateProfile(profile){
        const newNotes =[];
        for(let item of profile.notes){
            if(item){
                await this.lib.note.loadArchive(await this.lib.DatArchive.load(item.url));
                console.log();
                const info = await this.lib.note.getInfo();
                item.title = info.title;
                newNotes.push(item)
            }
        }
        profile.notes = newNotes;
        setLocalStorage('nian-userProfiles',profile)
    }
    removeProfile(){
        removeLocalStorage('nian-userProfiles');
    }
    setProfile(profile={name,notes:[]}){
        const validate=profile=>{
            assert(profile && typeof profile === 'object', 'The userProfiles is required and must be an object');
            assert(typeof profile.name === 'string', 'The .name attribute is required and must be a string');
            if(profile.bio)assert(typeof profile.bio === 'string', 'The .bio attribute must be a string');
            if(profile.avatar)assert(typeof profile.avatar === 'string', 'The .avatar attribute must be a string');
            if(profile.contact)assert(typeof profile.contact === 'string', 'The .contact attribute must be a string');
            if(profile.notes){
                assert(Array.isArray(profile.notes) , 'The .notes attribute must be an array');
                profile.notes.forEach(item=>{
                    assert(item && typeof item === 'object', 'Every value in the .notes array must be an object');
                    assert(typeof item.url === 'string', 'Every object in the .notes array must include a .url string');
                    if (item.title) assert(typeof item.title === 'string', 'Every .title in the .notes objects must be a string');
                })
            }
            return true;
        };
        if(validate(profile)){
            if(!profile.notes)profile.notes=[];
            this.updateProfile(profile);
        }
    }
    async addNote(archive){
        if(!this.lib.note.archive)return;
        const noteProfile = await this.lib.note.getInfo();
        const userProfile = this.getProfile();
        const newItem = {
            title: noteProfile.title,
            url: noteProfile.url
        };
        userProfile.notes = pushArrayItemWithDiffKey(newItem, userProfile.notes, 'url');
        this.updateProfile(userProfile);
    }
    async addNoteWithSelect(){
        await this.lib.note.loadArchiveWithSelect();
        if(!this.lib.note.archive)return;
        const noteProfile = await this.lib.note.getInfo();
        const userProfile = this.getProfile();
        const newItem = {
            title: noteProfile.title,
            url: noteProfile.url
        };
        userProfile.notes = pushArrayItemWithDiffKey(newItem, userProfile.notes, 'url');
        this.updateProfile(userProfile);
    }
    removeNote(url){

    }
    cleanNotes(){
        const userProfile = this.getProfile();
        userProfile.notes = [];
        this.updateProfile(userProfile);
    }
}