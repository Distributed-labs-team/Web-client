import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductsList from "./ProductsList";
import UserAccount from "./UserAccount";
import Test from "./Test";

const styles = theme => ({});

class Main extends React.Component {

    render() {
        return (
            <div>
                Hello, page
                <BrowserRouter>
                    <Switch>
                        <Route path="/products" component={ProductsList}/>
                        <Route path="/account" component={UserAccount}/>
                        <Route component={Test}/>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
