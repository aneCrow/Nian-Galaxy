export default class LibNianNoteAPI {
    constructor(lib){
        this.lib = lib;

        this.getNoteProfile = this.getNoteProfile.bind(this);
    }
    async getInfo(url) {
        await this.lib.WebDB.noteProfile.get(url + '/data/noteProfiles.json')
    }
    setProfile(opt){
    }
    addFeed(opt){
    }
    editFeed(opt){
    }
    removeFeed(opt){
    }
}