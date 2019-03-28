import React from "react";
import Link from "next/link";
import NianAPI from "./lib/NianAPI";

const Layout = props => {
    const {children} = props;
    return <React.Fragment>
        <h1>Nian</h1>
        <br/><Link href="/"><a>首页</a></Link>
        <br/><Link href="/user"><a>用户资料</a></Link>
        {children}
    </React.Fragment>
};
export default function withNian(Component) {
    return class Nian extends React.Component {
        state = {};

        componentDidMount() {
            this.lib = new NianAPI(window.DatArchive);
            this.setState({isReady: true})
        }

        render() {
            const {isReady} = this.state;
            return <React.Fragment>
                <Layout>
                    {isReady ? <Component {...this.props} /> : <p>loading</p>}
                </Layout>
            </React.Fragment>
        }
    }
}