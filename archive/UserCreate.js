import React from "react";
import * as withConsumer from "../withConsumer";

class UserCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGuest: false,
            name: 'user',
            bio: '',
            contact: '',
            avatar: '',
            notes:[]
        };
    }
    componentWillMount() {
        const {type,users,userKey}=this.props;
        if(type==='edit')this.setState(users[userKey]);
    }

    onChange = e => {
        const current = e.currentTarget;
        this.setState({[current.name]: current.value});
    };

    render() {
        const {addUser,editUserWithIndex,type,userKey} = this.props;
        const {name, bio, avatar, contact} = this.state;
        const {onChange} = this;
        return (
            <React.Fragment>
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
                {type==='edit'?
                 <button onClick={() => {editUserWithIndex(this.state,userKey)}}>edit</button>:
                 <button onClick={() => {addUser(this.state)}}>create</button>
                }
            </React.Fragment>
        )
    }
}

export default withConsumer.UserConsumer(UserCreate);