import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter,HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import MaterialUI from './MaterialUI';
import storeRedux from './redux/store';
import App from './view/AppIndex';
import Dev from './view/DevIndex';
import Intro from './view/Intro';

// @ts-ignore
const docUrl:string = window.docUrl?window.docUrl:'';
const Index = () => (
    <Provider store={storeRedux} /*容器：提供所有子组件redux的store*/>
        {/*TODO 希望使用BrowserRouter*/}
        <HashRouter basename={docUrl}/*路由容器*/>
            <MaterialUI /*容器：提供所有ui组件theme*/>
                <Switch>
                    <Route exact path="/" component={Intro}/>
                    <Route path="/home" component={App}/>
                    <Route path="/dev" component={Dev}/>
                    <Redirect to="/"/>
                </Switch>
            </MaterialUI>
        </HashRouter>
    </Provider>
);
ReactDOM.render(<Index/>, document.getElementById('root'));
