import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Route, Switch} from "react-router-dom";
import ProductsList from "./products/ProductsList";
import UserAccount from "./user/UserAccount";
import Test from "./Test";

const styles = theme => ({});

class Main extends React.Component {

    render() {
        return (
            <div style={{margin: '50px'}}>
                <Switch>
                    <Route exac path="/products" component={ProductsList}/>
                    <Route exac path="/account" component={UserAccount}/>
                    <Route component={Test}/>
                </Switch>
            </div>

        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
