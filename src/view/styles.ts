import { createStyles, Theme } from "@material-ui/core";

export const stylesDefault = (theme: Theme) =>
    createStyles({
        root: {}
    });
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
            overflow: 'visible'
        },
        title: {
            fontWeight: 700,
            color: theme.palette.primary.main,
        },
        key: {
            position: 'absolute',
            top: theme.spacing.unit * 1.2,
            fontWeight: 500,
        },
        key1: {
            left: theme.spacing.unit * 12,
            letterSpacing: theme.spacing.unit * 0.25,
        },
        key2: {
            right: theme.spacing.unit * 12,
            letterSpacing: theme.spacing.unit / 2,
            color: theme.palette.primary.light,
        },
        key3: {
            right: -theme.spacing.unit * 0.7,
            letterSpacing: theme.spacing.unit * 0.4,
        },
        caption: {
            // paddingLeft:theme.spacing.unit,
            // marginTop:-theme.spacing.unit,
            position: 'absolute',
            bottom: -theme.spacing.unit * 1.6,
            left: theme.spacing.unit,
            fontWeight: 300,
            letterSpacing: -theme.spacing.unit / 9,
            color: theme.palette.primary.light,
            fontSize: '1rem'
        },
        buttons: {
            marginTop: theme.spacing.unit * 4,
        },
        buttonEnter: {
            width: theme.spacing.unit * 50,
            height: theme.spacing.unit * 8
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
        errorCard: {
            margin: 'auto',
        }
    });
export const stylesDevNavBar = (theme: Theme) =>
    createStyles({
        root: {
            // margin: 'auto',
            height: 'calc(100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        menu: {
            paddingRight: theme.spacing.unit * 2.5,
            marginRight: theme.spacing.unit * 2,
            minWidth: 150,
            borderRight: 'thin solid',
        }
    });
export const styleSetTheme = (theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.up('sm')]: {
                maxWidth: 600
            }
        },
        card: {
            
        },
        headerAvatar: {
            fontSize: 'xx-large',
            color: theme.palette.text.secondary
        },
        colors_colors: {
            display: 'inline-flex',
            width: theme.spacing.unit * 4 * 5 + 20,
        },
        colors_colorsCaption: {
            display: 'inline-block',
            position: 'relative',
            top: theme.spacing.unit * 8,
            whiteSpace: 'nowrap',
            width: theme.spacing.unit * 6,
            transform: 'rotate(-90deg)',
        },
        colors_colorCell: {
            padding: 0,
            minWidth: theme.spacing.unit * 4,
            minHeight: theme.spacing.unit * 4,
            width: theme.spacing.unit * 4,
            height: theme.spacing.unit * 4,
        },
        options_firstControlLabel: {
            marginLeft: 0
        },
        expands_expandStartButton: {
            marginLeft: 0
        },
        expands_expand: {
            marginRight: theme.spacing.unit * 1.5,
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expands_expandOpen: {
            transform: 'rotate(180deg)',
        },
        divider: {
            // marginTop: theme.spacing.unit * 2
        },
        leftButton: {
            marginLeft: 'auto'
        },
    });