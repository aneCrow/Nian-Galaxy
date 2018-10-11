import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import MaterialUI from './MaterialUI';
import storeRedux from './redux/store';
import App from './view/AppIndex';
import Dev from './view/DevIndex';
import Intro from './view/Intro';
import {Button} from "@material-ui/core";

const Index = () => (
    <Provider store={storeRedux}/*redux组件*/>
        <BrowserRouter/*路由组件*/>
            <MaterialUI/*UI组件*/>
                <Route exact path="/" component={Intro}/>
                <Route path="/home" component={App}/>
                <Route path="/dev/:topicId?" component={Dev}/>
            </MaterialUI>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(<Index/>, document.getElementById('root'));
