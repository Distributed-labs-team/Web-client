import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {AppBar, Tab, Tabs, Typography} from "material-ui";
import ProductsList from "../products/ProductsList";
import AddProduct from "../products/AddProduct";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class UserAccount extends React.Component {

    state = {
        user : null,
        value: 0,
    };

    handleChangeTab = (event, value) => {
        this.setState({ value });
    };

    componentWillMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem("user")),
        })
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                Welcome, {this.state.user.email}
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChangeTab}>
                        <Tab label="Account Info" />
                        <Tab label="My Products" />
                        <Tab label="Add Product" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <p>User Account</p>
                    <div><p>Email: {this.state.user.email}</p></div>
                </TabContainer>}
                {value === 1 && <ProductsList isOwner={true} userEmail={this.state.user.email}/>}
                {value === 2 && <AddProduct user={this.state.user}/>}
            </div>
        );
    }
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 2 }}>
            {props.children}
        </Typography>
    );
}

UserAccount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAccount);
