import React from "react";
import {ThemeContext,UserContext,LogContext} from "./withNian";

const withConsumer =(Context,Component)=>{
    return props => {
        return<Context.Consumer>
            {data=>
                <Component {...props} {...data}/>
            }
        </Context.Consumer>
    }
};
export const ThemeConsumer = Component => withConsumer(ThemeContext, Component);
export const UserConsumer = Component => withConsumer(UserContext, Component);
export const LogConsumer = Component => withConsumer(LogContext, Component);