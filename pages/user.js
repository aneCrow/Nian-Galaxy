import React from "react";
import {withRouter} from "next/router";
import Link from "next/link";
import UserCreate from "../components/view/UserCreate";
// import UserList from "../components/view/UserList";

import PropTypes from "prop-types";
import withNian from "../components/test";
import NianAPI from "../components/lib/NianAPI";

class User extends React.Component {
    static propTypes = {};
    state = {};

    componentDidMount() {

    }

    render() {
        const {} = this.props;
        return <React.Fragment>
            <div className="flex_center">
                <h2>User Profile</h2>
                <UserSelect/>
                {/*<UserList/>*/}
            </div>
        </React.Fragment>

    }
}

export default withNian(User);
function UserSelect() {
    const lib=NianAPI.instance;
    return lib.user.isGuest?<p style={{color:'red'}}>create a profile first</p>:
           <ul>
               {lib.user.getProfiles().map((user,index)=>
                    <li>
                        {lib.user.getActive().index===index?<p>[*]</p>:null}
                        <a onClick={()=>lib.user.selectActive(index)}>{user.name}</a>
                        <a onClick={()=>lib.user.removeProfile(index)}>X</a>
                    </li>
               )}
           </ul>
}
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            currentProfile: {}
        };
        this.lib = NianAPI.instance;
    }

    onModeChange = (mode, profile) => {
        const{currentProfile}=this.state;
        if(JSON.stringify(currentProfile)===JSON.stringify(profile)) {
            mode = null;
            profile=null;
        }
        this.setState({
                          mode: mode,
                          currentProfile: profile
                      })
    };

    render() {
        const {mode, currentProfile} = this.state;
        const {lib, onModeChange} = this;
        return <React.Fragment>
            <ul>
                {lib.user.getProfiles()
                    .map((user, index) =>
                             <li key={index}>
                                 <a onClick={() => {
                                     user.indexNum = index;
                                     onModeChange('edit', user);
                                 }}>
                                     {user.name}
                                 </a>
                                 <a >X</a>
                             </li>
                    )
                }
                {['create' , 'edit'].includes(mode)
                 ? <UserProfileForm
                     changeMode={onModeChange}
                     mode={mode}
                     profile={currentProfile}/>
                 : <button onClick={() =>
                        onModeChange('create', lib.user.defaultProfile)
                    }>create one</button>
                }
            </ul>
        </React.Fragment>
    }
}
class UserProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.profile};
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({...nextProps.profile});
    }

    onChange = e => {
        const current = e.currentTarget;
        this.setState({[current.name]: current.value});
    };
    setProfile = () => {
        const {mode, changeMode} = this.props;
        const profile = this.state;
        profile.isGuest = false;
        const lib = NianAPI.instance;
        switch (mode) {
            case 'create':
                lib.user.addProfile(profile);
                break;
            case 'edit':
                lib.user.editProfile(profile,profile.indexNum);
                break;
        }
        changeMode();
    };

    render() {
        const {mode} = this.props;
        const {name, bio, avatar, contact} = this.state;
        const {onChange, setProfile} = this;
        return <div>
            <label>
                <br/>name:<input type="text" name="name" value={name} onChange={onChange}/>
            </label>
            <label>
                <br/>bio:<input type="text" name="bio" value={bio} onChange={onChange}/>
            </label>
            <label>
                <br/>avatar:<input type="text" name="avatar" value={avatar}
                                   onChange={onChange}/>
            </label>
            <label>
                <br/>contact:<input type="text" name="contact" value={contact}
                                    onChange={onChange}/>
            </label>
            <br/>
            <button onClick={setProfile}>{mode}</button>
        </div>
    }
}

