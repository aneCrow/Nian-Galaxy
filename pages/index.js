import React from 'react';
import Link from 'next/link';

export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            bgColor: this.color()
        }
    }

    color = () => {
        const colorList = [ '#EEAB46', '#EFDCC8', '#EEAFAB', '#6D9F99', '#EC666A' ];
        const random = Math.floor(Math.random()*(colorList.length+1));
        return colorList[ random ];
    };
    BeakerArchive = async () => {
        try {
            // if(!beaker)throw '';
            const ownArchives = await beaker.archives.list({//TODO: can't get archive list.似乎只能在library页面上获得这个api组件
                                                               isOwner: true,
                                                               isSaved: true
                                                           });
            console.dir(ownArchives);
            return <div><ul>{ownArchives.map((item) =>
                                            <li>
                                                <button>{item.title}</button>
                                                <p>{item.url}</p>
                                            </li>
            )}</ul></div>;
        }
        catch(e) {
            return null;
        }
    };
    createHandle = async () => {
        const archive = await DatArchive.selectArchive()
    };

    render(){
        return (
            <div className="div position-mid">
                <h1>Nian-Galaxy</h1>
                {/*{this.BeakerArchive()}*/}
                <button onClick={this.createHandle}>create new note</button>
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
                <style jsx global>{
                    `
                        body {
                            background: ${this.state.bgColor}
                        }
                    `
                }</style>
            </div>
        )
    }
}
