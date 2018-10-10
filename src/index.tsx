import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import MaterialUI from './MaterialUI';
import store from './redux/store';
import App from  './App';
import Intro from './Intro';

const Index = () => (
    <Provider store={store}/*redux组件*/>
        <BrowserRouter/*路由组件*/>
            <MaterialUI/*UI组件*/>
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path="/home" component={App} />
                    <Route path="/dev" component={App} />
                </Switch>
            </MaterialUI>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
