import React from "react";
import ReactDOM from "react-dom";
import * as reactRedux from "react-redux";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MaterialUI from "./MaterialUI";
import storeRedux from "./redux/store";
import App from "./view/AppIndex";
import Dev from "./view/DevIndex";
import Intro from "./view/Intro";

const Index: any = ({ store }: any) => (
    <reactRedux.Provider store={store}>{/*容器：提供所有子组件redux的store*/}
        {/*TODO 更换BrowserRouter basename={docUrl}*/}
        <HashRouter>{/*容器: 路由*/}
            <MaterialUI appTheme={}>{/*容器：提供所有ui组件theme*/}
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path="/home" component={App} />
                    <Route path="/dev" component={Dev} />
                    <Redirect to="/" />
                </Switch>
            </MaterialUI>
        </HashRouter>
    </reactRedux.Provider>
);
ReactDOM.render(<Index store={storeRedux} />, document.getElementById("root"));
