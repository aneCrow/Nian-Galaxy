import React from "react";
import App, {Container} from "next/app";

import Loading from "../components/page/Loading";
import StateProvider from "../components/page/StateProvider";


export default class app extends App {
    static async getInitialProps({Component, router, ctx}) {//TODO:官方给的这个部分不是很理解是干嘛的
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }
    render() {
        const {Component, pageProps} = this.props;
        return <Container>
            <StateProvider>
                <Loading>{/*做了渲染拦截，这个组件是第一次render的终点*/}
                    <Component {...pageProps} />
                </Loading>
            </StateProvider>
        </Container>
    }
}