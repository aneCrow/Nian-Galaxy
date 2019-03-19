import React from "react";
import {createdAt} from "../components/lib/util";

import Link from "next/link";
import NoteList from "../components/page/NoteList";
import NianLibAPI from "../components/lib/nian-lib";

export default class extends React.Component{
    constructor() {
        super();
        this.state = {
            profile:{},
            isReady:false,
            hasUser:false
        };
        this.onCreate = this.onCreate.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount(){
        if(window&&!window.NianLib) window.NianLib = new NianLibAPI(DatArchive);
        const user = window.NianLib.user.getProfile();
        const hasUser= (user!==null);

        if(!hasUser){
            this.setState({hasUser:hasUser});
            return;
        }

        this.preProfile = () => {return{
            title: 'New Note',
            author: '',
            description: '',
            createdAt:''
        }};
        this.lib = window.NianLib;
        this.setState({
            profile:this.preProfile(),
            user:user,
            hasUser:hasUser,
            isReady:true
        });
    }

    onInputChange(e){
        const current = e.currentTarget;
        const profile = this.state.profile;
        profile[current.name]=current.value;
        this.setState({profile:profile});
    }
    async onCreate () {
        const profile = this.state.profile;
        profile.author = this.state.user.name;
        profile.createdAt = createdAt();
        console.dir(profile);

        this.setState({profile:this.preProfile()});
    };

    render(){
        const {isReady,hasUser,profile} = this.state;
        if(!hasUser)return<div>you haven't <Link href="/create-user"><a>set user</a></Link> yet.</div>;
        if(!isReady)return<div>loading...</div>;

        return <div className="div position-mid">
            <label>
                <br/>标题:<input type="text" name="title" value={profile.title} onChange={this.onInputChange}/>
            </label><label>
                <br/>注言:<input type="text" name="description" value={profile.description} onChange={this.onInputChange}/>
            </label>
            <br/><button onClick={this.onCreate}>创建新记本</button>
            <NoteList />
            <style jsx>{
            `
                    .div {
                        width: 300px;
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