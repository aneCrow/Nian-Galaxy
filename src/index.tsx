import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import MaterialUI from './MaterialUI';
import storeRedux from './redux/store';
import App from './view/AppIndex';
import Dev from './view/DevIndex';
import Intro from './view/Intro';
import {Button} from "@material-ui/core";

const history:any = createBrowserHistory();
const Index = () => (
    <Provider store={storeRedux} /*容器：提供所有子组件redux的store*/>
        <BrowserRouter /*路由容器*/>
            <MaterialUI /*容器：提供所有ui组件theme*/>
                <Switch>
                    <Route exact path="/" component={Intro}/>
                    <Route path="/home" component={App}/>
                    <Route path="/dev/:id" component={Dev}/>
                    <Route path="/dev" component={Dev}/>
                    <Redirect to={{pathname: "/"}}/>
                </Switch>
            </MaterialUI>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(<Index/>, document.getElementById('root'));
