import React from "react";
import NianLibAPI from "../components/lib/nian-lib";
import Style_bgColor from '../components/style/bgColor';
import Link from "./index";

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            isReady:false,
            profile :{}
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    componentDidMount(){
        if(window&&!window.NianLib) window.NianLib = new NianLibAPI(DatArchive);
        if(this.state.isReady){
            return;
        }
        this.lib = window.NianLib;
        this.setState({profile:loadUserProfile(),isReady:true});
    }
    onInputChange(e){
        const current = e.currentTarget;
        const profile = this.state.profile;
        profile[current.name]=current.value;
        this.setState({profile:profile});
    }
    onCreate(){
        this.lib.user.setProfile(this.state.profile);
        this.forceUpdate();
    }

    onDelete() {
        this.lib.user.removeProfile();
        this.setState({profile:loadUserProfile()});
    }

    render(){
        const {state}=this;
        if(!state.isReady)return<div>loading...</div>;
        const hadUser = (window.NianLib.user.getProfile() !== null);
        return <div className="div position-mid">
            <label>
                <br/>name:<input type="text" name="name" value={state.profile.name} onChange={this.onInputChange}/>
            </label>
            <label>
                <br/>bio:<input type="text" name="bio" value={state.profile.bio} onChange={this.onInputChange}/>
            </label>
            <label>
                <br/>avatar:<input type="text" name="avatar" value={state.profile.avatar} onChange={this.onInputChange}/>
            </label>
            <label>
                <br/>contact:<input type="text" name="contact" value={state.profile.contact} onChange={this.onInputChange}/>
            </label>
            <br/><button onClick={this.onCreate}>{hadUser?'设置':'创建'}用户</button>
            <br/>{hadUser?<button onClick={this.onDelete}>清除用户</button>:null}
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
            <Style_bgColor/>
        </div>
    }
}
function loadUserProfile(){
    const defaultUserProfile = {
        name:'New User',
        bio:'',
        avatar: '',
        contact: '',
        notes:[]
    };
    const lastUserProfile = window.NianLib.user.getProfile();
    return (lastUserProfile?lastUserProfile:defaultUserProfile)
}