import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import withNian from "../components/test";

class Index extends React.Component {
    static propTypes = {
    };
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        console.log('%s in ComponentDidMount',this.constructor.name);
    }

    render() {
        const {}=this.props;
        return <div className="flex_center">
            <div className="border">
                <h2>YourHomePage</h2>
            </div>
        </div>
    }
}
export default withNian(Index);