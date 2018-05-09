import React from 'react';
import Button from 'material-ui/Button';
import {auth} from "../security/auth";
import {NavLink} from "react-router-dom";
import {Menu, MenuItem} from "material-ui";

class MainMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleProducts = () => {
        this.closeMenu();
    };

    handleAccount = () => {
        this.closeMenu();
    };

    handleLogout = () => {
        auth.logout();
        localStorage.clear();
        this.closeMenu();
    };

    closeMenu() {
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => this.closeMenu()}
                >
                    <NavLink to="/products" style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={this.handleProducts}>Products</MenuItem>
                    </NavLink>
                    <NavLink to="/account" style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={this.handleAccount}>My account</MenuItem>
                    </NavLink>
                    <NavLink to="/" onClick={this.handleLogout} style={{ textDecoration: 'none' }}>
                        <MenuItem>Logout</MenuItem>
                    </NavLink>

                </Menu>
            </div>
        );
    }
}

export default MainMenu;