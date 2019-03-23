import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import NianAPI from "../lib/NianAPI"
import {getLocalStorage, setLocalStorage} from "../lib/util"

export default class Loading extends React.Component {
    static propTypes = {
        setTheme: PropTypes.func.isRequired,
        setUser: PropTypes.func.isRequired,
        stateData: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            allDone: false,
            loadInfo: 'test'
        };
        console.log('constructor %s',this.constructor.name);
    }

    componentWillUnmount() {
        console.log('WillUnmount %s',this.constructor.name);
        const {stateData} = this.props;
        setLocalStorage("Nian-theme", stateData.theme);
        setLocalStorage("Nian-user", stateData.user);
    }

    componentDidMount() {
        console.log('DidMount %s',this.constructor.name);
        //组件初始化
        const api = new NianAPI(window.DatArchive);
        api.setLoadDone = this.setDone;
        //载入数据
        const {setTheme, setUser} = this.props;
        const theme = getLocalStorage("Nian-theme");
        if (theme) setTheme(theme);
        const user = getLocalStorage("Nian-user");
        if (user) setUser(user);
        //查验
        // if(this.props.stateData.user.isGuest) {
        //     setTimeout(() => Router.push({
        //                                      pathname: '/user',
        //                                      query: {name: 'create'}
        //                                  }, '创建用户'), 5000);
        //     this.setState({loadInfo:'尚未设置账户，5秒后跳转'})
        // }
        this.setState({isReady: true});
    }

    setDone = () => this.setState({allDone: true});
    logInfo = even => this.setState({loadInfo: even.info});

    render() {
        const {isReady, allDone, loadInfo} = this.state;
        const {children} = this.props;
        const logProvider = {
            allDone: allDone,
            setDone: this.setDone,
            logInfo: this.logInfo
        };
        //TODO:做是否存在用户和记本判断并给出快捷Link到目标url
        return <LoadContext.Provider value={logProvider}>
            {/*isReady之后载入页面模块以保证api正常载入*/}
            {isReady ? children : null}
            {allDone ? null : <div className="flex_center">
                <h1>loading</h1>
                {/*<p className="border flex_center">{loadingIcon}</p>*/}
                <p>{loadInfo}</p>
                <br/>
                <button onClick={this.setDone}>确认</button>
                {/*手动结束载入画面*/}
            </div>}
        </LoadContext.Provider>
    }
}
const LoadContext = React.createContext({
                                            allDone: false,
                                            setDone: () => {},
                                            logInfo: () => {}
                                        }
);

export function LoadConsumer(Page) {
    return class extends React.Component {
        render() {
            return <LoadContext.Consumer>{
                ({allDone, setDone, logInfo}) =>
                    <Page {...this.props}
                          allDone={allDone}
                          setDone={setDone}
                          logInfo={logInfo}
                    />
            }</LoadContext.Consumer>
        }
    }
}