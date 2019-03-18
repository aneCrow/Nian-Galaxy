import React from 'react';
import Link from 'next/link';

import NoteBookList from "../components/page/NoteList";
import Style_bgColor from '../components/style/bgColor';
import NianLibAPI from "../components/lib/nian-lib";

export default class extends React.Component {
    componentDidMount(){
        if(!window.NianLib) window.NianLib = new NianLibAPI(DatArchive);
    }
    render() {
        return <div className="div position-mid">
            <h1>Nian-Galaxy</h1>
            <NoteBookList />
            <Link href="/create-note">
                <button>new note</button>
            </Link>
            <Link href="/test"><a><br/>test</a></Link>
            <Link href="/create-user"><a><br/>用户设置</a></Link>
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
    }
}