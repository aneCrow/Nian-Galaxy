import React from "react";
import Link from "next/link";

import * as withConsumer from "../withConsumer";

class UserList extends React.Component{
    render() {
        const {users, removeUserWithIndex, cleanUsers} = this.props;
        const linkItem = (name, key) => {
            return <li key={key}>
                <Link
                    href={{
                        pathname: '/user',
                        query: {type:'edit',name: name,key:key}
                    }}>
                    <a onClick={this.forceUpdate}>{name} {key}</a>
                </Link>
                <button onClick={() => removeUserWithIndex(key)}>X</button>
            </li>
        };
        return (
            <ul>
                {users.map((item, index) => linkItem(item.name, index))}
                <button onClick={cleanUsers}>clean all list</button>
            </ul>
        )
    }
}
export default withConsumer.UserConsumer(UserList);