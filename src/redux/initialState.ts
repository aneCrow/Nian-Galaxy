import {Color, PaletteType,Theme, createMuiTheme} from "@material-ui/core";
import * as colors from "@material-ui/core/colors";
import {TypeBackground, TypeDivider, TypeText} from "@material-ui/core/styles/createPalette";
import {Spacing} from "@material-ui/core/styles/spacing";
import {Shape} from "@material-ui/core/styles/shape";

export type appPalette = {
    type?: PaletteType,
    primary?: Color,
    secondary?: Color,
    error?: Color,
    background?: TypeBackground,
    divider?: TypeDivider;
    text?: TypeText;
    contrastThreshold?: number;
    tonalOffset?: number;
}
export type appTheme = {
    palette?: appPalette,
    spacing?: Spacing,
    shape?: Shape,
}

export interface StoryState {
    theme: appTheme
}

export const initialState: StoryState = {
    theme: {
        palette: {
            primary: colors.brown,
            secondary: colors.amber,
            type: 'dark',
        }
    },
};