import React, {Component} from 'react';
import './App.css';
import Login from "./component/main/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./component/main/Main";
import {auth} from "./security/auth";
import ProductsList from "./component/products/ProductsList";
import NotFound from "./component/main/NotFound";
import NavigationPanel from "./component/main/NavigationPanel";

class App extends Component {

    render() {
        let token = localStorage.getItem('token');
        if (token) {
            auth.authenticate();
        }
        return (
            <div>
                <div className="App">
                    <BrowserRouter>
                        <div>
                            <div>
                                <NavigationPanel/>
                            </div>
                            <main>
                                <Switch>
                                    <Route path="/login" component={Login}/>
                                    <PrivateRoute exac component={Main}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </main>
                        </div>
                    </BrowserRouter>

                </div>
            </div>
        );
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={props => (
        auth.isAuthenticated
            ? (<Component {...props}/>)
            : (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
    )}/>
};

export default App;
