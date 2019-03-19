import {createdAt} from "./util";

export default class LibNianNoteAPI {
    constructor(lib){
        this.lib = lib;

        this.loadArchive = this.loadArchive.bind(this);
        this.loadArchiveWithSelect = this.loadArchiveWithSelect.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }
    async loadArchive(archive){
        this.archive = archive;
    }
    async loadArchiveWithSelect(){
        let archive;
        try{
            archive = await this.lib.DatArchive.selectArchive({
                filters: {type: ["profile", "nian-notebook-profile"], isOwner: true}
            });
            await this.lib.webDB.indexArchive(archive);
            this.archive = archive;
        }catch (e) {
            console.warn(e);
        }
    }
    async getInfo(){
        if(this.archive){
            let profile=await this.lib.webDB.noteProfile.get(this.archive.url + '/data/noteProfile.json');
            if(!profile){
                await this.archive.mkdir('/data');
                await this.lib.webDB.noteProfile.put(this.archive.url + '/data/noteProfile.json',{
                    url:this.archive.url,
                    author:this.lib.user.getProfile().name,
                    createdAt:createdAt()
                });
                profile = await this.lib.webDB.noteProfile.get(this.archive.url + '/data/noteProfile.json');
            }
            return profile
        }
        else console.warn('should run loadArchive() first',this.archive);
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