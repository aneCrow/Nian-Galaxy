import React from 'react';
import Link from 'next/link';

import Style_bgColor from '../components/style/bgColor';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    BeakerArchive = async () => {
        try {
            // if(!beaker)throw '';
            const ownArchives = await beaker.archives.list({//TODO: can't get archive list.似乎只能在library页面上获得这个api组件
                                                               isOwner: true,
                                                               isSaved: true
                                                           });
            console.dir(ownArchives);
            return <div>
                <ul>{ownArchives.map((item) =>
                                         <li>
                                             <button>{item.title}</button>
                                             <p>{item.url}</p>
                                         </li>
                )}</ul>
            </div>;
        }
        catch(e) {
            return null;
        }
    };

    render(){
        return <div className="div position-mid">
            <h1>Nian-Galaxy</h1>
            {/*{this.BeakerArchive()}*/}
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
    }
}
