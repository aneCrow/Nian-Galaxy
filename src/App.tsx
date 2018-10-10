import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import {stylesApp as styles} from "./styles";

class App extends React.Component<WithStyles<typeof styles>>{
    state = {};

    render(){
        return(
            <div>
                <p>aaaaa</p>
                <p>aaaaa</p>
                <p>aaaaa</p>
                <p>aaaaa</p>
            </div>
        );
    }
}
export default withStyles(styles)(App);