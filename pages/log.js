import React from 'react';
import PropTypes from 'prop-types';
import withNian from "../components/withNian";

class Log extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        console.log('%s in Constructor',this.constructor.name);
    }

    componentDidMount() {
        console.log('%s in ComponentDidMount',this.constructor.name);
        setTimeout(this.props.setPageDone,1000);
    }

    render() {
        const{isPageDone}=this.props;
        return (
            isPageDone?<div className="flex_center">
                <button onClick={() => console.dir(this)}>
                    log
                </button>
            </div>:null
        );
    }
}
export default withNian(Log);