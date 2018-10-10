import {createStyles, Theme} from "@material-ui/core";

export const stylesIntro = (theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontWeight: 700,
            color: theme.palette.primary.main,
        },
        buttons: {
            margin: theme.spacing.unit * 4,
            position:'static',
        },
        buttonEnter: {
            width: theme.spacing.unit * 20,
        },
        buttonDev: {
            width: theme.spacing.unit * 20,
            color: theme.palette.background.default,
        }
    });
export const stylesApp = (theme: Theme) =>
    createStyles({
        root:{

        }
    });