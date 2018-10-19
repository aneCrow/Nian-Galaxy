import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
    Button,
    Avatar, GridList, GridListTile, Divider,
    Radio,
    Typography,
    Paper,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    FormControlLabel,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Switch,
    withStyles,
    WithStyles,
    Color, Theme, createMuiTheme, IconButton
} from "@material-ui/core";
import {FormatPaint as FormatPaintIcon, ExpandMore as ExpandMoreIcon} from '@material-ui/icons'
import * as Colors from '@material-ui/core/colors';
import {styleSetTheme as styles} from "../styles";
import {appPalette, appTheme, StoryState} from "../../redux/initialState";
import {setPalette} from "../../redux/actions";
// @ts-ignore
import classnames from 'classnames';

type States = {
    colorTarget: string;
    expansionMode: boolean;
}

interface Props extends WithStyles<typeof styles> {
    setPalette(theme: appTheme): void;
    appTheme: appTheme;
}

class SetTheme extends React.Component<Props, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            colorTarget: 'primary',
            expansionMode: false,
        };
    }

    handleSetTheme = () => {
        this.props.setPalette({palette: {type: 'light'}});
    };
    handleSetThemeB = () => {
        this.props.setPalette({palette: {type: 'dark'}});
    };
    handleColorTargetChange = (e: any) => {
        this.setState({colorTarget: e.target.value})
    };
    handlePickColorClick = (color: any) => {
        switch (this.state.colorTarget) {
            case 'primary': {
                this.props.setPalette({palette: {primary: color}});
            }
                break;
            case 'secondary': {
                this.props.setPalette({palette: {secondary: color}});
            }
                break;
        }
    };

    render() {
        const {classes}: any = this.props;
        const theme = createMuiTheme(this.props.appTheme);
        return (
            <div className={classes.root}>
                <div>
                    <Link to={'/'}>
                        <Button variant='contained' color='secondary'>
                            Home
                        </Button>
                    </Link>
                    <Button variant='contained' onClick={this.handleSetTheme}>light</Button>
                    <Button variant='contained' onClick={this.handleSetThemeB}>dark</Button>
                    <Button variant='contained' onClick={() => this.setState({})}>update</Button>
                </div>
                <Card className={classes.card}>
                    {/*header*/}
                    <CardHeader
                        avatar={<FormatPaintIcon className={classes.headerAvatar}/>}
                        className={classes.cardHeader}
                        title="Change Theme Style"
                        subheader="set your own style to this app"
                    />
                    <Divider className={classes.divider}/>
                    {/*colors panel*/}
                    <CardContent>
                        <Typography className={classes.colors_colorsCaption}>default colors</Typography>
                        <GridList className={classes.colors_colors} cellHeight={32} cols={5} spacing={4}>
                            {ColorSheet(classes, this.handlePickColorClick)}
                        </GridList>
                    </CardContent>
                    {/*options panel*/}
                    <CardContent>
                        <div>
                            <FormControlLabel
                                className={classes.options_firstControlLabel}
                                control={<Switch
                                    color="default"
                                    checked={theme.palette.type === 'light'}
                                    onChange={() => {
                                        this.props.setPalette({
                                            palette: {
                                                type: theme.palette.type === 'light' ?
                                                    'dark' : 'light'
                                            }
                                        });
                                    }}
                                />}
                                label={theme.palette.type === 'light' ?
                                    'light' : 'dark'}
                                labelPlacement="start"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                className={classes.options_firstControlLabel}
                                control={
                                    <Button className={classes.colors_colorCell}
                                            onClick={() => this.setState({colorTarget: 'primary'})}>
                                        <svg className={classes.colors_colorCell}>
                                            <rect className={classes.colors_colorCell} fill={theme.palette.primary.main}/>
                                        </svg>
                                    </Button>
                                }
                                label="Primary"
                                labelPlacement="start"
                            />
                        </div>
                        <Typography>
                            <Radio
                                className={classes.primary}
                                color="default"
                                value="primary"
                                checked={this.state.colorTarget === 'primary'}
                                onChange={this.handleColorTargetChange}
                            />
                            primery
                        </Typography>
                        <Typography>
                            <Radio
                                className={classes.secondary}
                                color="default"
                                value="secondary"
                                checked={this.state.colorTarget === 'secondary'}
                                onChange={this.handleColorTargetChange}
                            />
                            secondary
                        </Typography>
                    </CardContent>
                    <Divider className={classes.divider}/>
                    {/*footer controls*/}
                    <CardActions>
                        <FormControlLabel
                            className={classes.expands_expandStartButton}
                            control={
                                <IconButton
                                    disableRipple
                                    className={classnames(
                                        classes.expands_expand,
                                        {[classes.expands_expandOpen]: this.state.expansionMode}
                                    )}
                                    onClick={() => this.setState({expansionMode: !this.state.expansionMode})}
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>}
                            label={
                                this.state.expansionMode ?
                                    <Typography variant="caption">less options</Typography>
                                    :
                                    <Typography variant="caption">more options</Typography>
                            }
                            labelPlacement="end"
                        />
                        <Button
                            className={classes.leftButton}
                            color="secondary"
                        >
                            save
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

const ColorSheet = (classes: any, handlePickColor: any) => {
    let _colors: any[] = [];
    for (const value in Colors) {
        // @ts-ignore
        const color:any = Colors[value];
        const classesColorCell=classes.colors_colorCell;
        if (color[500])
            _colors.push(
                <GridListTile key={value} cols={1}>
                    <Button className={classesColorCell} onClick={() => handlePickColor(color)}>
                        <svg className={classesColorCell}>
                            <rect className={classesColorCell} fill={color[500]}/>
                        </svg>
                    </Button>
                </GridListTile>
            )
    }
    return _colors;
};
const mapStateToProps = (state: StoryState) => ({
    appTheme: state.theme
});
const mapDispatchToProps = (dispatch: any) => ({
    setPalette: (theme: appTheme) => dispatch(setPalette(theme))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SetTheme));