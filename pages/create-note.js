import React from "react";

class create extends React.Component{
    constructor(props){
        super(props);
        this.state = {//TODO:组件实例的this会丢失
            tilel: 'New Book',
            bio: '',
            done: false
        };
        this.onChange = this.onChange.bind(this);
        this.create = this.create.bind(this);
    }

    onChange = (event) => {
        const curren = event.currentTarget;
        this.setState({ [ curren.name ]: curren.value });
    };
    create = async (event) => {
        this.setState({ done: true });
        console.log('test');
        return null;
        try {
            const archive = await DatArchive.create({
                                                        title: 'nian-book '+this.state.titel,
                                                        description: this.state.bio,
                                                        type: [ "profile", "nian-book-profile" ],
                                                        prompt: false
                                                    });
            const session = [{title:this.state.title,url:archive.url}];
            session.push(
                JSON.parse(
                    sessionStorage.getItem('nian-books')
                ).books);
            sessionStorage.setItem('nian-books',JSON.parse({books:session}));
        } catch(e) {
            console.dir(e);
        }
    };

    render(){
        const state = this.state;
        return <div>{/*form表单并不好用...*/}
            <div>
                <p>标题</p>
                <input type="text" name="tilel" value={state.titel} onChange={this.onChange}/>
                <p>注言</p>
                <input type="text" name="bio" value={state.bio} onChange={this.onChange}/>
            </div>
            <button disabled={state.done} onClick={this.create}>提交</button>
        </div>
    }
}

export default create;