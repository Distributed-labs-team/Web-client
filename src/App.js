import React, {Component} from 'react';
import './App.css';
import Login from "./component/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page from "./component/Page";
import Test from "./component/Test";

class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        {/*<Route exact path="/" component={Page}/>*/}
                        {/*<Route path="/page" component={Page}/>*/}
                        {/*<Route path="/test" component={Test}/>*/}
                        {/*<Route path="/login" component={Login}/>*/}
                        <Route component={Login}/>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
