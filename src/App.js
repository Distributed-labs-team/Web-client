import React, {Component} from 'react';
import './App.css';
import Login from "./component/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./component/Main";
import Test from "./component/Test";
import {auth} from "./security/auth";
import MainMenu from "./component/MainMenu";

class App extends Component {

    render() {
        console.log("TOKEN");
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
                                <MainMenu/>
                            </div>
                            <main>
                                <Switch>
                                    <Route path="/test" component={Test}/>
                                    <Route path="/login" component={Login}/>
                                    <PrivateRoute exac component={Main}/>
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
