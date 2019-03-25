import React from "react";
import {withRouter} from "next/router";
import Link from "next/link";
import UserCreate from "../components/view/UserCreate";
import UserList from "../components/view/UserList";

import PropTypes from "prop-types";
import withNian from "../components/withNian";

class User extends React.Component {
    static propTypes = {};
    state = {queryType: ''};

    componentDidMount() {
        const {query} = this.props.router;
        let queryType = '';
        if(query && query.type)queryType=query.type;
        this.setState({queryType: queryType});
        this.props.setPageDone();
    }

    render() {
        const {isPageDone,router} = this.props;
        const {queryType} = this.state;
        return (
            isPageDone ? (
                <div className="flex_center">
                    {queryType==='create' ?
                     <UserCreate type='create'/> : (
                         <Link
                             href={{
                                 pathname: '/user',
                                 query: {type: 'create'}
                             }} replace
                         ><a onClick={this.forceUpdate}>create</a></Link>
                     )}
                    {queryType==='edit' ? <UserCreate type="edit" userKey={router.query.key}/> : null}

                    <UserList />
                </div>
            ) : null
        )
    }
}

export default withNian(withRouter(User));