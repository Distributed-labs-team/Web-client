import {Component} from "react";
import React from "react";
import {AppBar, Button, Tab, Tabs} from "material-ui";
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";
import {NavLink} from "react-router-dom";
import {auth} from "../../security/auth";


const styles = theme => ({
    panel: {
        width: '100%',
        backgroundColor: '#3f51b5',
        display: 'flex',
        height: '50px'
    },
    button: {
        color: '#FFF',
        margin: '5px'
    },
});

class NavigationPanel extends Component {


    handleLogout = () => {
        auth.logout();
        localStorage.clear();
    };

    render() {
        const {classes} = this.props;

        return <div>
            {auth.isAuthenticated && <div className={classes.panel}>
                <div style={{width: '85%'}}>
                    <div style={{float: 'left'}}>
                        <NavLink to="/products" style={{textDecoration: 'none'}}>
                            <Button className={classes.button} style={{float: 'left'}}>Products</Button>
                        </NavLink>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '150px'}}>
                        <NavLink to="/account" style={{textDecoration: 'none'}}>
                            <Button className={classes.button}>My Account</Button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/" onClick={this.handleLogout} style={{textDecoration: 'none'}}>
                            <Button className={classes.button}>Logout</Button>
                        </NavLink>
                    </div>
                </div>
            </div>}
        </div>
    }

}

NavigationPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationPanel)