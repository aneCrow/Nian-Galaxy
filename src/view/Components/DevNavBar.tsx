import React from 'react';
import {
    AppBar,
    IconButton,
    Popover,
    MenuList,
    MenuItem,
    Tab,
    Tabs,
    Fade,
    Divider,
    Toolbar,
    withStyles,
    WithStyles
} from "@material-ui/core";
import {stylesDevNavBar as styles} from "../styles";
import {Menu as MenuIcon} from "@material-ui/icons";
import {DevContains} from '../DevIndex';

type tabIndex = number | false;
export type navIndex = {
    barIndex: number,
    tabIndex: tabIndex
};
export type menuItem = {
    name: string,
    component: any
}

interface Props extends WithStyles<typeof styles> {
    selectedIndex: navIndex,

    setBarIndex(index: navIndex): void
}

type State = {
    menuAnchorEl: any | null,
}

class DevNavBar extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuAnchorEl: null,
        };
    }

    handleTabChange = (e: any, i: number) => {
        let index: navIndex = this.props.selectedIndex;
        if (index.tabIndex !== i) index.tabIndex = i;
        else index.tabIndex = false;
        this.props.setBarIndex(index);
    };
    handleMenu = (e: any) => {
        this.setState({menuAnchorEl: e.currentTarget});
    };
    handleMenuItemClick = (e: any, i: number) => {
        let index: navIndex;
        index = {barIndex: i, tabIndex: false};
        this.props.setBarIndex(index);
        this.setState({menuAnchorEl: null})
    };
    handleMenuClose = () => {
        this.setState({menuAnchorEl: null});
    };

    render() {
        const {classes}: any = this.props;
        const {menuAnchorEl}: any = this.state;
        const TabItems = DevContains[this.props.selectedIndex.barIndex].items;
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                    <div className={classes.menu}>
                        <IconButton onClick={this.handleMenu}>
                            <MenuIcon/>
                        </IconButton>
                        {DevContains[this.props.selectedIndex.barIndex].title}
                    </div>
                    <Tabs style={{width: '100%'}}
                          scrollable
                          textColor="secondary"
                          value={this.props.selectedIndex.tabIndex}
                          onChange={this.handleTabChange}>
                        {TabItems.map((item: any, index: number) => (
                            <Tab
                                style={{maxWidth: 100, minWidth: 100}}
                                value={index}
                                key={DevContains[this.props.selectedIndex.barIndex].title + index}
                                label={item.name}
                                disableRipple
                            />
                        ))}
                    </Tabs>
                </Toolbar>
                <Popover
                    id="lock-menu"
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={this.handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    TransitionComponent={Fade}
                >
                    <MenuList>
                        {DevContains.map((contain: any, index: number) => (
                            <MenuItem
                                key={index}
                                selected={index === this.props.selectedIndex.barIndex}
                                onClick={event => this.handleMenuItemClick(event, index)}
                            >
                                {contain.title}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Popover>
            </AppBar>
        )
    }
}

export default withStyles(styles)(DevNavBar);