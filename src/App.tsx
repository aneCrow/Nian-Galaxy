import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import Test from './TestComponent';
import {stylesApp as styles} from "./styles";

class App extends React.Component<WithStyles<typeof styles>>{
    state = {};

    render(){
        return(
            <div>
                <Test classes={undefined}/>
            </div>
        );
    }
}
export default withStyles(styles)(App);