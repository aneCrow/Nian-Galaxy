import React from "react";
import App,{Container} from "next/app";
import NianAPI from "../components/lib/NianAPI";

import style_Layout from "../components/style/Layout";
import style_BG from "../components/style/bgColor";
class Loading extends React.Component {
    state={
        showInfo:['start load'],
        tick: '',
        allDone:false
    };
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            300
        );
        this.setState({isReady:true});
        this.state.showInfo.push('ready');
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.dir();
        //this.state.showInfo.push('update');
    }
    tick=()=>{
        if(!this.tickNum)this.tickNum=0;
        const tick=['|','/','--','\\'];
        this.setState({tick:tick[this.tickNum]});
        this.tickNum++;
        if(this.tickNum===4)this.tickNum=0;
    };
    render() {
        const {loaded}=this.props;
        const {isReady,allDone,showInfo,tick}=this.state;
        if(allDone) loaded();
        return (
            <div>
                <h1>loading</h1>
                <p className="border flex_center">{tick}</p>
                {showInfo.map((item,index)=><p key={index}>{item}</p>)}
            </div>
        );
    }
}
class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isReady:false
        };
        this.onLoaded = this.onLoaded.bind(this);
    }
    onLoaded(){
        this.setState({isReady:true})
    }
    render() {
        const {children}=this.props;
        const {isReady}=this.state;
        return (
            <div id="nian-layout" className= "root flex_center">
                <div className="border flex_center">
                    {isReady?children:<Loading loaded={this.onLoaded}/>}
                </div>
                <style jsx>{`.border{border:5px solid white}`}</style>
                {style_BG()}
                {style_Layout()}
            </div>
        );
    }
}
const injectProps = {
};
export default class app extends App {
    render() {
        const {Component, pageProps}=this.props;
        return (
            <Container>
                <Layout>
                    <Component {...pageProps}{...injectProps}/>
                </Layout>
            </Container>
        );
    }
}