import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import {stylesApp as styles} from "./styles";

class App extends React.Component<WithStyles<typeof styles>>{
    state = {};

    render(){
        return(
            <div>
                <p>施工中</p>
                <p>Under construction
                </p>
                <p>施工中</p>
                <p>Under construction
                </p>
            </div>
        );
    }
}
export default withStyles(styles)(App);