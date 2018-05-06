import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Login from "./Login";
import Test from "./Test";

const styles = theme => ({});

class Page extends React.Component {

    render() {
        return (
            <div>
                Hello, page
                <BrowserRouter>
                    <Switch>
                        <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route path="/" component={Test}/>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

Page.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
