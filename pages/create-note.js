import React from "react";
import PMG from "../components/profileManager";

import NoteList from "../components/page/NoteList";

export default class extends React.Component{
    constructor() {
        super();
        this.state = {
            title: 'New Note',
            bio: '',
            done: false
        };
        this.create = this.create.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange (event) {
        const current = event.currentTarget;
        this.setState({[current.name] : current.value});
    };
    async create (event) {
        try {
            await PMG.noteCreate({title:this.state.title,bio:this.state.bio})
        } catch (e) {
            console.warn(e);
            this.setState({done:false});
        }
        this.setState({done:true});
    };

    render(){
        const {title,bio,done} = this.state;
        return <div>
            <div>
                <p>标题</p>
                <input type="text" name="title" value={title} onChange={this.onChange}/>
                <p>注言</p>
                <input type="text" name="bio" value={bio} onChange={this.onChange}/>
            </div>
            <button disabled={done} onClick={this.create}>提交</button>
            <NoteList />
        </div>
    }
}