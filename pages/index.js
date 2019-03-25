import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import withNian from "../components/withNian";

class Index extends React.Component {
    static propTypes = {
    };
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        console.log('%s in ComponentDidMount',this.constructor.name);
        setTimeout(this.props.setPageDone,1000);
    }

    render() {
        const {isPageDone}=this.props;
        return isPageDone?<div className="flex_center">
            <div className="border">
                <h1>NianGalaxy</h1>
                <Link href="/user"><a>用户资料</a></Link>
            </div>
        </div>:null
    }
}
export default withNian(Index);