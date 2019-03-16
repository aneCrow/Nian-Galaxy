import WebDB from "@beaker/webdb";
import assert from "assert";
import LibNianUserAPI from "./user";

import {getLocalStorage, createdAt, setLocalStorage} from "./util";

export default class {
    constructor(DatArchive) {
        this.DatArchive = DatArchive;
        this.webDB = new WebDB('NianGalaxy',DatArchive);
        this.user = new LibNianUserAPI(this);
        //
        defineTables (this.webDB);
        //setHooks(this);
        window.NianLib = this;
    }


    async index(archive){
        const {webDB} = this;
        const path = archive.url;
        await webDB.indexArchive(archive);
        //检查文件结构
    }
}
//WebDB定义模板
function defineTables (webDB){
    // /data/noteProfiles.json
    webDB.define('noteProfiles', {
        // validate required attributes before indexing
        validate(record) {
            assert(typeof record.createdAt === 'number', 'The .createdAt attribute is required and must be a number');
            if (record.title) assert(record.title && typeof record.title === 'string', 'The .title attribute must be a string');
            if (record.author) assert(record.author && typeof record.author === 'string', 'The .author attribute must be a string');
            if (record.description) assert(record.description && typeof record.description === 'string', 'The .description attribute must be a string');
            return true
        },
        // secondary indexes for fast queries (optional)
        index: ['title', 'author'],
        // files to index
        filePattern: [
            '/data/noteProfiles.json'
        ],
        serialize (record) {
            return {
                title: record.title,
                author: record.author,
                description: record.description,
                createdAt: record.createdAt
            }
        }
    });
    // /data/feed/*.json
    webDB.define('feed', {
        // validate required attributes before indexing
        validate(record) {
            assert(typeof record.content.body === 'string', 'The .content.body attribute is required and must be a string');
            assert(typeof record.createdAt === 'number', 'The .createdAt attribute is required and must be a number');
            return true
        },
        // secondary indexes for fast queries (optional)
        index: ['createdAt'],
        // files to index
        filePattern: [
            '/data/feed/*.json'
        ]
    });
}
//WebDB消息钩子
function setHooks(lib) {
    const db = lib.db;
    const consoleDebug = console.debug || console.log;
    db.on('open-failed', err => console.error('Database failed to open.', err));
    db.on('indexes-reset', () => consoleDebug('Rebuilding indexes.'));
}