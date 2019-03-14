import React from 'react';
import Link from 'next/link';

import NoteBookList from "../components/NoteList";
import Style_bgColor from '../components/style/bgColor';

export default ()=> <div className="div position-mid">
        <h1>Nian-Galaxy</h1>
        <NoteBookList />
        <button onClick={()=>DatArchive.selectArchives()}>load note</button>{/*TODO:添加已有记本*/}
        <Link href="/create-note">
            <button>new note</button>
        </Link>
        <Link href="/test"><a><br/>test</a></Link>
        <style jsx>{
            `
                    .div {
                        width: 200px;
                        height: 100px;
                    }
                    .position-mid {
                        margin: auto
                    }
                `
        }</style>
        <Style_bgColor/>
    </div>
