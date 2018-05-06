import React, {Component} from 'react';
import './App.css';
import Login from "./component/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Page from "./component/Page";
import Test from "./component/Test";

class App extends Component {

    render() {
        console.log("TOKEN");
        console.log(localStorage.getItem('token'));
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/test" component={Test}/>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute component={Page}/>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? (<Component {...props}/>)
            : (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
    )}/>
};

export default App;
