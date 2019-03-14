import React from "react";
import NoteBookList from "../components/NoteList";

export default class extends React.Component{
    constructor() {
        super();
        this.state = {//TODO:组件实例的this会丢失
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
        console.log('1');
    };
    async create (event) {
        this.setState({done:true});
        try {
            const archive = await DatArchive.create({
                title: 'nian-notebook : ' + this.state.title,
                description: this.state.bio,
                type: ["profile", "nian-notebook-profile"],
                prompt: false
            });
            const storageItem = [{title: this.state.title, url: archive.url}];
            // const storageItem = [{title: this.state.title, url: 'test'}];
            const lastItem = JSON.parse(
                localStorage.getItem('nian-notebooks')
            );
            if (lastItem&&lastItem.notebooks) {
                for (let item of lastItem.notebooks) {
                    storageItem.push(item);
                }
            }
            localStorage.setItem('nian-notebooks', JSON.stringify({notebooks: storageItem}));
        } catch (e) {
            console.error(e);
        }
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
            <NoteBookList />
        </div>
    }
}