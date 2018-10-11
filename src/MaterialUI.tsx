import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import * as MuiColors from '@material-ui/core/colors';
import {CssBaseline, colors, PaletteType, Color} from '@material-ui/core';
import 'typeface-roboto';

interface State {
    theme: {
        palette?: {
            type?: PaletteType,
            primary?: Color,
            secondary?: Color,
            error?: Color,
            background?: {
                paper?: string,
                default?: string,
            },
        },
        shape?: {
            borderRadius?: number,
        }
    }
}

//Material UI装饰根组件
export default class MaterialUI extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            //TODO 使用redux管理theme
            theme: {
                palette: {
                    primary: colors.brown,
                    secondary: colors.amber,
                    error: colors.red,
                    type: 'dark',
                }
            }
        };
    }

    render() {
        const theme = createMuiTheme(this.state.theme);
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}