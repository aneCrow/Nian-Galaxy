import {combineReducers} from "redux";
import {Theme} from "@material-ui/core";

import * as actions from './actions';
import {initialState, appTheme, appPalette} from './initialState';
import {extendObj} from "./util";

const theme = (state:appTheme = initialState.theme,action:any)=> {
    switch (action.type) {
        case actions.THEME_SET:{
            return extendObj({},state,action.theme)//TODO 抄的函数不工作，assign只能合并第一层
        }
        case actions.THEME_SETPALETTE:{
            const _palette = Object.assign({},state.palette,action.theme.palette);
            return Object.assign({},state,{palette:_palette})
        }
        default : return state;
    }
};

const reducer = combineReducers({
    theme
});
export default reducer;