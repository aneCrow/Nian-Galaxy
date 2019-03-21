import React from "react";
import PropTypes from "prop-types";

export default class Loading extends React.Component {
    // propTypes = {
    //     // loaded: PropTypes.func.isRequired,
    //     children: PropTypes.element.isRequired,
    // };
    constructor(props){
        super(props);
        this.state={
            showInfo:['start load']
        };
    }
    componentDidMount(){
        //建立定时器
        this.timerID = setInterval(
            this.loadingIcon,
            300
        );
        const show = new Array(this.state.showInfo);
        show.push('ready');
        this.setState({isReady:true,showInfo:show});
    }
    componentWillUnmount() {
        clearInterval(this.timerID);//卸载定时器
    }
    loadingIcon=()=>{//会转的小玩意
        if(!this.tickCount)this.tickCount=0;
        const icon=['|','/','--','\\'];
        this.setState({loadingIcon:icon[this.tickCount]});
        (this.tickCount===3)?this.tickCount=0:this.tickCount++;
    };
    loaded=()=>this.setState({allDone: true});
    render() {
        const {isReady,allDone,showInfo,loadingIcon}=this.state;
        const {children}=this.props;

        return allDone ? children :  <div>
                <h1>loading</h1>
                <p className="border flex_center">{loadingIcon}</p>
                {isReady?showInfo.map((item,index)=><p key={index}>{item}</p>):null}
                {/*手动结束载入画面*/}
                <br/><button onClick={this.loaded}>确认</button>
            </div>
    }
}
