import {createStyles, Theme} from "@material-ui/core";

export const stylesIntro = (theme: Theme) =>
    createStyles({
        root: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        title: {
            fontWeight: 700,
            color: theme.palette.primary.main,
        },
        caption:{
            paddingLeft:theme.spacing.unit,
            marginTop:-theme.spacing.unit,
            letterSpacing:theme.spacing.unit/2,
        },
        buttons: {
            marginTop: theme.spacing.unit * 4,
        },
        buttonEnter: {
            width: theme.spacing.unit * 20,
        },
        buttonDev: {
            width: theme.spacing.unit * 20,
            color: theme.palette.background.default,
        },
        buttonDevPosition:{
            position: 'absolute',
            top: 8,
            right: 8
        }
    });
export const stylesApp = (theme: Theme) =>
    createStyles({
        root:{

        }
    });
export const stylesDev = (theme: Theme) =>
    createStyles({
        root: {
            // margin: 'auto',
            height: 'calc(100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    });