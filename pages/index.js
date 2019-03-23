import React from 'react';
import Router from "next/router";

import Link from 'next/link';

import NoteBookList from "../components/page/NoteList";

export default class extends React.Component {
    // componentDidMount(){
    //     if(!window.NianLib) window.NianLib = new NianLibAPI(DatArchive);
    //     this.setState({isReady: true});
    // }
    componentWillMount() {
        Router.push('/test')}
    render() {
        return <div className="">
            <h1>Nian-Galaxy</h1>
            {/*<NoteBookList />*/}
            <Link href="/create-note"><a><br/>设置记本</a></Link>
            <Link href="/create-user"><a><br/>用户设置</a></Link>
        </div>
    }
}