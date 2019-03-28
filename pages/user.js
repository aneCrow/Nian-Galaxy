import React from "react";

import PropTypes from "prop-types";
import withNian from "../components/test";
import NianAPI from "../components/lib/NianAPI";

class User extends React.Component {
    static propTypes = {};
    state = {
        subPage: 'profile',
        editor: '',
        editValue: {}
    };

    openEditor = (mode = '', value = {}) => this.setState({editor: mode, editValue: value});

    render() {
        const {} = this.props;
        const {editor, editValue, subPage} = this.state;
        const pageList = ['profile', 'users'];
        return <React.Fragment>
            <div className="flex_center">
                <h2>User Profile</h2>
                {pageList.map((title, index) =>
                                  <PageIndex
                                      key={index}
                                      title={title}
                                      currentTitle={subPage}
                                      changePage={title => this.setState({subPage: title})}
                                  />)
                }
                {editor === ''
                 ? <SubPage subPage={subPage} openEditor={this.openEditor}/>
                 : <Editor mode={editor} editData={editValue} closeEditor={() => this.openEditor()}/>
                }
                {/*<UserList/>*/}
            </div>
        </React.Fragment>

    }
}

export default withNian(User);

function PageIndex(props) {
    const {title, currentTitle, changePage} = props;
    const getStyle = () => {
        const styles = {margin: '0 4px'};
        if (currentTitle === title) Object.assign(styles, {color: 'grey'});
        return styles;
    };
    return (
        <a
            style={getStyle()}
            onClick={() => changePage(title)}>
            {title}
        </a>
    )
}

class SubPage extends React.Component {
    constructor(props) {
        super(props);
        this.lib = NianAPI.instance;
    }

    render() {
        const {subPage, openEditor} = this.props;
        const userApi = this.lib.user;
        return (
            <React.Fragment>
                {subPage === 'profile'
                 ? <React.Fragment>
                     {userApi.isGuest
                      ? <p style={{color: 'red'}}>create user first</p>
                      : <React.Fragment>
                          {(() => {
                              const active = userApi.getActive();
                              const {name, bio, avatar, contact} = active.profile;
                              return (
                                  <React.Fragment>
                                      <p>name: {name}</p>
                                      <p>bio: {bio}</p>
                                      <p>avatar: {avatar}</p>
                                      <p>contact: {contact}</p>
                                      <button onClick={() => openEditor(
                                          'edit',
                                          {
                                              profile: active.profile,
                                              index: active.index
                                          }
                                      )}>
                                          edit
                                      </button>
                                  </React.Fragment>
                              )
                          })()}
                      </React.Fragment>
                     }
                 </React.Fragment>
                 : null}
                {subPage === 'users'
                 ? <React.Fragment>
                     <ul>
                         {userApi.isGuest
                          ? null
                          : userApi.getProfiles()
                                   .map((user, index) =>
                                            <li key={index}>
                                                {index === userApi.getActive().index
                                                 ? <span>[*]</span>
                                                 : null}
                                                <a onClick={() => {
                                                    userApi.selectActive(index);
                                                    this.forceUpdate();
                                                }}>
                                                    {user.name}
                                                </a>
                                                {index !== userApi.getActive().index
                                                 ? <a style={{color: 'red'}} onClick={() => {
                                                        userApi.removeProfile(index);
                                                        this.forceUpdate();
                                                    }}> X</a>
                                                 : null}
                                            </li>
                                   )
                         }
                         <li>
                             <button onClick={() => openEditor('create')}>
                                 +
                             </button>
                         </li>
                     </ul>
                 </React.Fragment>
                 : null
                }
            </React.Fragment>
        );
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.lib = NianAPI.instance;
        const userApi = this.lib.user;
        switch (props.mode) {
            case 'create':
                this.state = userApi.defaultProfile;
                break;
            case 'edit':
                this.state = props.editData.profile;
        }
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     const userApi = this.lib.user;
    //     switch (this.props.mode) {
    //         case 'create':
    //             this.setState(userApi.defaultProfile);
    //             break;
    //         case 'edit':
    //             this.setState(this.props.editData.profile);
    //     }
    // }

    onChange = e => {
        const current = e.currentTarget;
        this.setState({[current.name]: current.value});
    };
    setProfile = () => {
        const userApi = this.lib.user;
        switch (this.props.mode) {
            case 'create':
                userApi.addProfile(this.state);
                break;
            case 'edit':
                userApi.editProfile(this.state, this.props.editData.index)
        }
        this.props.closeEditor()
    };

    render() {
        const {mode} = this.props;
        const {name, bio, avatar, contact} = this.state;
        const {onChange, setProfile} = this;
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
                <button onClick={setProfile}>{mode}</button>
            </React.Fragment>
        );
    }
}

