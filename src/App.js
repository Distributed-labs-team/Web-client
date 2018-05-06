import React, {Component} from 'react';
import './App.css';
import Login from "./component/Login";
import {BrowserRouter, NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Main from "./component/Main";
import Test from "./component/Test";
import {auth} from "./security/auth";
import MainMenu from "./component/MainMenu";

class App extends Component {

    render() {
        console.log("TOKEN");
        console.log(localStorage.getItem('token'));
        return (
            <div>
                <div className="App">
                    <BrowserRouter>
                        <div>
                            <div>
                                <MainMenu/>
                            </div>
                            <Switch>
                                <Route path="/test" component={Test}/>
                                <Route path="/login" component={Login}/>
                                <PrivateRoute component={Main}/>
                            </Switch>
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
