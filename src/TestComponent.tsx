import React from 'react';
import PropTypes from 'prop-types'
import {createStyles, Theme, withStyles, WithStyles} from "@material-ui/core";
import {Paper} from "@material-ui/core";

const styles = (theme:Theme)=>
    createStyles({
        root: {
            backgroundColor:'black',
        },
    });

class TestComponent extends React.Component<WithStyles<typeof styles>>{

    render(){
        return(
          <div className={this.props.classes.root}>
              <Paper> something </Paper>
          </div>
        );
    }
}
export default withStyles(styles)(TestComponent);