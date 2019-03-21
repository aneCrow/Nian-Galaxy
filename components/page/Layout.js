import React from "react";

import Loading from "../page/Loading";

import style_Layout from "../style/Layout";
import style_Theme from "../style/Theme";

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        };
    }
    onLoaded=()=>{
        this.setState({isReady:true})
    };
    render() {
        const {children}=this.props;
        const {isReady}=this.state;
        return (
            <div id="nian-layout" className= "root flex_center">
                <div className="border flex_center">
                    {isReady?children:<Loading loaded={this.onLoaded}/>}
                </div>
                <style jsx>{`.border{border:5px solid white;}`}</style>
                {style_Layout()}
                {style_Theme()}
            </div>
        );
    }
}