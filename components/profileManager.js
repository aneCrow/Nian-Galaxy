// import {feed, followgraph} from 'dat://unwalled.garden'
class dataCenter{
    static prefab = {
        notebook:{
            preTitle:'nian-notebook : ',
            type: ["profile", "nian-notebook-profile"],
            storage: {
                mainName:'nian-notebook',
                listName:'notes'
            }
        },

    };
    static getNoteListLS = () => JSON.parse(window.localStorage.getItem(dataCenter.prefab.notebook.storage.mainName));
    static setNoteListLS = (newList)=> window.localStorage.setItem(
        dataCenter.prefab.notebook.storage.mainName,
        JSON.stringify({
            [dataCenter.prefab.notebook.storage.listName]: newList
        })
    );
    static cleanNoteListLS =()=> window.localStorage.removeItem(dataCenter.prefab.notebook.storage.mainName);
    static noteListAdd = async (archive)=>{
        const info = await archive.getInfo();
        const newItem = {title: info.title, url: info.url};
        const lastStorage = dataCenter.getNoteListLS();
        const newList = new Array(newItem);
        //补充已有列表
        const key = dataCenter.prefab.notebook.storage.listName;
        if (lastStorage && lastStorage[key]) {
            for (let item of lastStorage[key]) {
                if (item.url!==newItem.url) {
                    newList.push(item);
                }
            }
        }
        return newList;
    };
    static noteListRemove = async (archive)=>{
        const info = await archive.getInfo();
        const lastStorage = dataCenter.getNoteListLS();
        let newList = [];
        //补充已有列表
        const key = dataCenter.prefab.notebook.storage.listName;
        if (lastStorage && lastStorage[key]) {
            newList = lastStorage[key].map(item=>{
                if(item.url !== info.url)return item;
            });
        }
        return newList;
    };
    static noteCheck = (archive) => {
        return true;
    };
}
export default class profileManager {
    //记本create方法，创建成功会同时加入记本列表，并返回archive对象
    static getNoteList = ()=> dataCenter.getNoteListLS();
    static noteCreate = async (data) => {
        let archive;
        try {
            if(data.title==='') data.title = 'NewNote';
            const _archive = await window.DatArchive.create({
                title: dataCenter.prefab.notebook.preTitle + data.title,
                description: data.bio,
                type: dataCenter.prefab.notebook.type,
                prompt: false
            });
            if (dataCenter.noteCheck(_archive)) {
                archive = _archive;
                await profileManager.noteLoad(archive.url);
            }
        } catch (e) {
            console.warn('onCreate note failed');
        }
        return archive;
    };
    //记本load方法，加入记本列表，并返回archive对象
    static noteLoad = async (url) => {
        let archive;
        try {
            const _archive = await window.DatArchive.load(url);
            if(dataCenter.noteCheck(_archive)){
                archive = _archive;
                dataCenter.setNoteListLS(await dataCenter.noteListAdd(archive));
            }
        } catch (e) {
            console.warn('load note failed');
        }
        return archive;
    };
    //记本select方法，使用beakerAPI选择记本，并返回archive对象
    static noteSelect = async () => {
        let archive;
        try {
            const _archive = await window.DatArchive.selectArchive({

            });
            if(dataCenter.noteCheck(_archive)){
                archive = _archive;
                dataCenter.setNoteListLS(await dataCenter.noteListAdd(archive));
            }
        } catch (e) {
            console.warn('select note failed');
        }
        return archive;
    };
    //记本remove方法，移除单个记本
    static noteRemove = async (url) => {
        try {
            const archive = await window.DatArchive.load(url);
            dataCenter.setNoteListLS(await dataCenter.noteListRemove(archive));
        } catch (e) {
            console.warn('remove note failed');
        }
    };
    //记本clean方法,清理所有
    static noteClean = () => {
        dataCenter.cleanNoteListLS();
    };
    static test = () => {
    };
}