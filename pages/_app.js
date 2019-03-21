import React from "react";
import App,{Container} from "next/app";

import Layout from "../components/page/Layout";

const injectProps = {//预留页面props注入对象
};
export default class app extends App {
    render() {
        const {Component, pageProps}=this.props;
        return (
            <Container>
                <Layout>{/*提供UI主题和默认组件*/}
                    <Component {...pageProps}{...injectProps}/>
                </Layout>
            </Container>
        );
    }
}