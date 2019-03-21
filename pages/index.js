import React from 'react';
import Link from 'next/link';

import NoteBookList from "../components/page/NoteList";

export default class extends React.Component {
    state={isReady: false};
    // componentDidMount(){
    //     if(!window.NianLib) window.NianLib = new NianLibAPI(DatArchive);
    //     this.setState({isReady: true});
    // }
    render() {
        const {...props}=this;
        console.dir(this.props);
        if(!this.state.isReady) return <div>loading</div>;
        return <div className="div position-mid">
            <h1>Nian-Galaxy</h1>
            <NoteBookList />
            <Link href="/create-note"><a><br/>设置记本</a></Link>
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
        </div>
    }
}