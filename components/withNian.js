import React from "react";
import {getLocalStorage, setLocalStorage, isObjectEQual} from "./lib/util"

const defaultTheme = {
    type: 'dark',
    primary: '',
    secondary: '',
    background: '#555555'
};
const defaultUser = {
    isGuest: true,
    name: 'user',
    bio: '',
    avatar: '',
    notes: []
};
const defaultLog = {
    info: 'default log',
    isPageDone: false,
    isLoadDone: false,
    isShowLoadPage: true
};
export const ThemeContext = React.createContext({theme: defaultTheme});
export const UserContext = React.createContext({user: [defaultUser]});
export const LogContext = React.createContext({
                                                  log: defaultLog,
                                                  setPageDone: () => {},
                                                  setLoadDone: () => {}
                                              });

class Theme extends React.Component {
    componentDidMount() {
        const {key, data, changeData} = this.props.nianContext;
        const storage = getLocalStorage(key);
        if (storage) changeData(storage);
    }

    render() {
        const {children,nianContext} = this.props;
        const theme = nianContext.data;
        return (
            <React.Fragment>
                <ThemeContext.Provider value={{
                    theme: theme
                }}>
                    {children}
                </ThemeContext.Provider>
                <style jsx global>{`
                    body,html,#__next,#nian-layout {
                            width: 100%;
                            height: 100%;
                            margin: 0;
                        }
                `}</style>
                <style jsx global>{`
                    html {
                        background:${theme.background}
                    }
                `}</style>
                <style jsx global>{`
                        .flex_center {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;
                            align-items: center;
                        }
                        .border {
                            border:5px solid white;
                        }
    `}</style>
            </React.Fragment>
        )
    }
}

class User extends React.Component {
    componentDidMount() {
        const {key, data, changeData} = this.props.nianContext;
        const storage = getLocalStorage(key);
        if (storage) changeData(storage);
    }

    render() {
        const {key, data, changeData} = this.props.nianContext;
        return (
            <React.Fragment>
                <UserContext.Provider value={{
                    user: data
                }}>
                    {this.props.children}
                </UserContext.Provider>
            </React.Fragment>
        )
    }
}

class Loading extends React.Component {
    state = {
        forceDone: false
    };

    componentDidMount() {
        const {setLoadDone} = this.props;
        this.setState({isReady: true});
        setTimeout(setLoadDone, 1000);
    }

    render() {
        const {log, children} = this.props;
        const {isReady, forceDone} = this.state;
        const allDone = (log.isLoadDone && log.isPageDone) || forceDone;
        return (
            <React.Fragment>
                {isReady ? children : null}
                {allDone ? null :
                 <div className="flex_center">
                     <h1>LOADING</h1>
                     <a onClick={() => this.setState({forceDone: true})}>forceDone</a>
                 </div>
                }
            </React.Fragment>
        )
    }
}

class LoadingWithLog extends React.Component {
    render() {
        return <LogContext.Consumer>
            {logContext =>
                <Loading {...this.props} {...logContext}/>
            }
        </LogContext.Consumer>
    }


}


class Log extends React.Component {
    setPageDone = () => {
        const {data, changeData} = this.props.nianContext;
        data.isPageDone = true;
        changeData(data);
    };
    setLoadDone = () => {
        const {data, changeData} = this.props.nianContext;
        data.isLoadDone = true;
        changeData(data);
    };

    render() {
        const {key, data, changeData} = this.props.nianContext;
        return (
            <React.Fragment>
                <LogContext.Provider value={{
                    log: data,
                    setPageDone: this.setPageDone,
                    setLoadDone: this.setLoadDone
                }}>
                    <LoadingWithLog>
                        {this.props.children}
                    </LoadingWithLog>
                </LogContext.Provider>
            </React.Fragment>
        )
    }
}

export default function withNian(Page) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                theme: defaultTheme,
                user: [defaultUser],
                log: defaultLog
            };
            this.stateChangeHandle = (data, key) => {
                console.log('StateChange:%s,%o', key, data);
                this.setState({[key]: data});
            };
        }

        render() {
            const createSheet = key => {
                return {
                    key: 'Nian-' + key,
                    data: this.state[key],
                    changeData: data => this.stateChangeHandle(data, key)
                }
            };
            const themeObj = createSheet('theme');
            const userObj = createSheet('user');
            const logObj = createSheet('log');
            return (
                <React.Fragment>
                    <Theme nianContext={themeObj}>
                        <User nianContext={userObj}>
                            <Log nianContext={logObj}>
                                <LogContext.Consumer>
                                    {({setPageDone}) =>
                                        <Page
                                            {...this.props}
                                            isPageDone={this.state.log.isPageDone}
                                            setPageDone={setPageDone}
                                        />
                                    }
                                </LogContext.Consumer>
                            </Log>
                        </User>
                    </Theme>
                </React.Fragment>
            )
        }
    }
}