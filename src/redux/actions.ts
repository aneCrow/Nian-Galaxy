import {appTheme,appPalette} from "./initialState";

export const THEME_SET = 'THEME_SET';
export const setTheme=(theme:appTheme)=> {
    return {type: THEME_SET,theme};
};
export const THEME_SETPALETTE = 'THEME_SETPALETTE';
export const setPalette=(theme:appTheme)=> {
    return {type: THEME_SETPALETTE,theme};
};