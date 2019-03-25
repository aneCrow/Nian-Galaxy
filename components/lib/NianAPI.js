import WebDB from "@beaker/webdb";
import assert from "assert";

export default class NianAPI {
    constructor(DatArchive) {
        if (NianAPI.instance) return NianAPI.instance;//单例模式
        //初始化
        this.da = DatArchive;
        this.db = new WebDB('NianGalaxy', this.da);
        initWebDB(this.db)
            .then(async db => await db.open())
            .then(() => console.log('WebDB is on.'));
        //输出单例
        NianAPI.instance = this;
        return NianAPI.instance;
    }
}

//WebDB初始化
async function initWebDB(db) {
    defineTables(db);
    setHooks(db);
    return db;
}

//WebDB定义模板
function defineTables(webDB) {
    //记本信息结构/data/noteProfiles.json
    webDB.define('noteProfile', {
        // validate required attributes before indexing
        validate(record) {
            assert(typeof record.createdAt === 'string', 'The .createdAt attribute is required and must be a number');
            assert(typeof record.url === 'string', 'The .url attribute is required and must be a string');
            if (record.title) assert(
                record.title && typeof record.title === 'string', 'The .title attribute must be a string');
            if (record.author) assert(
                record.author && typeof record.author === 'string', 'The .author attribute must be a string');
            if (record.description) assert(
                record.description && typeof record.description === 'string',
                'The .description attribute must be a string'
            );
            return true
        },
        // secondary indexes for fast queries (optional)
        index: ['title', 'author'],
        // files to index
        filePattern: [
            '/data/noteProfile.json'
        ],
        serialize(record) {
            return {
                title: record.title,
                author: record.author,
                description: record.description,
                url: record.url,
                createdAt: record.createdAt
            }
        }
    });
    //内容结构/data/feed/*.json
    webDB.define('feed', {
        // validate required attributes before indexing
        validate(record) {
            assert(
                typeof record.content.body === 'string',
                'The .content.body attribute is required and must be a string'
            );
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
function setHooks(webDB) {
    const consoleDebug = console.debug || console.log;
    webDB.on('open-failed', err => console.error('Database failed to open.', err));
    webDB.on('indexes-reset', () => consoleDebug('Rebuilding indexes.'));
}