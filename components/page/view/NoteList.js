import React from "react";
import Link from "next/link";


export default class NoteList extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.onAdd = this.onAdd.bind(this);
        this.onClean = this.onClean.bind(this);
    }
    componentWillMount() {
        this.lib = window.NianLib;
        const profile = this.lib.user.getProfile();
        this.setState({
            notes: profile?profile.notes:[]
        });
    }
    async onAdd() {
        await this.lib.user.addNoteWithSelect();
        const profile = this.lib.user.getProfile();
        this.setState({
            notes: profile?profile.notes:[]
        });
    }
    onClean(){
        this.lib.user.cleanNotes();
        this.setState({
            notes: []
        });
    }

    domItem(data, key) {
        return <li key={key}>
            <Link href={data.url}>
                <a>{data.title ? data.title : 'notebook'}</a>
            </Link>
        </li>;
    }

    render() {
        const {notes} = this.state;
            return <div>
                <ul>
                    {notes.length===0?'nothing here':notes.map((item, index) => this.domItem(item, index))}
                    <li><button onClick={this.onAdd}>添加已有记本</button></li>
                    <li><button onClick={this.onClean}>清除所有</button></li>
                </ul>
            </div>

    }
}
