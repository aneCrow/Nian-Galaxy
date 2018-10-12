import {createStyles, Theme} from "@material-ui/core";

export const stylesIntro = (theme: Theme) =>
    createStyles({
        root: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        titles: {
            position: 'relative',
            overflow:'visible'
        },
        title: {
            fontWeight: 700,
            color: theme.palette.primary.main,
        },
        key:{
            position: 'absolute',
            top: theme.spacing.unit *1.2,
            fontWeight: 500,
        },
        key1:{
            left: theme.spacing.unit*12,
            letterSpacing: theme.spacing.unit*0.7,
        },
        key2:{
            right: theme.spacing.unit*12,
            letterSpacing: theme.spacing.unit/2,
            color: theme.palette.primary.light,
        },
        key3:{
            right: -theme.spacing.unit*0.7,
            letterSpacing: theme.spacing.unit*0.4,
        },
        caption: {
            // paddingLeft:theme.spacing.unit,
            // marginTop:-theme.spacing.unit,
            position: 'absolute',
            bottom: -theme.spacing.unit*1.6,
            left: theme.spacing.unit,
            fontWeight: 300,
            letterSpacing: -theme.spacing.unit/9 ,
            color: theme.palette.primary.light,
            fontSize: '1rem'
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
        buttonDevPosition: {
            position: 'absolute',
            top: 8,
            right: 8
        }
    });
export const stylesApp = (theme: Theme) =>
    createStyles({
        root: {}
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