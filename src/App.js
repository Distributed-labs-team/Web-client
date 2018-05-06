import React, {Component} from 'react';
import './App.css';
import Login from "./component/Login";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Page from "./component/Page";
import Test from "./component/Test";
import {auth} from "./security/auth";

class App extends Component {

    render() {
        console.log("TOKEN");
        console.log(localStorage.getItem('token'));
        return (
            <div>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            {/*<AuthButton/>*/}
                            <Route path="/test" component={Test}/>
                            <Route path="/login" component={Login}/>
                            <PrivateRoute component={Page}/>
                        </Switch>
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

// const AuthButton = withRouter(({ history }) => (
//     auth.isAuthenticated ? (
//         <p>
//             Welcome! <button onClick={() => {
//             auth.logout(() => history.push('/'))
//         }}>Sign out</button>
//         </p>
//     ) : (
//         <p>You are not logged in.</p>
//     )
// ));

export default App;
