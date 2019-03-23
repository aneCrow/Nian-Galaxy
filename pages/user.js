import React from "react";
import PropTypes from "prop-types";
import {LoadConsumer} from "../components/page/Loading";

class User extends React.Component {
    static propTypes = {
        allDone: PropTypes.bool.isRequired,
        setDone: PropTypes.func.isRequired,
        logInfo: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        const {allDone} = this.props;
        return (
            <div>

            </div>
        );
    }
}

export default LoadConsumer(User);