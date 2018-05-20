import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserAccount from "../user/UserAccount";
import NotFound from "./NotFound";
import ProductsList from "../products/ProductsList";

class Main extends React.Component {

    render() {
        return (
            <div style={{margin: '50px'}}>
                <Switch>
                    <Route path="/(|products)/" component={ProductsList}/>
                    <Route exac path="/account" component={UserAccount}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>

        );
    }
}

export default Main;
