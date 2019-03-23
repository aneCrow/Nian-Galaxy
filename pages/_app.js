import React from "react";
import App, {Container} from "next/app";

import Loading from "../components/page/Loading";
import StateContainer from "../components/page/StateContainer";


export default class app extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return <Container>
            <StateContainer>
                <Component {...pageProps} />
            </StateContainer>
        </Container>
    }
}