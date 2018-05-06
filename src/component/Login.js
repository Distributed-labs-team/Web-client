import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import logo from '../logo.svg';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Login extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleLogin() {
        var SERVER_URL = "http://localhost:8080";
        console.log(this.state.email + " " + this.state.password);
        var user = {
            email: this.state.email,
            password: this.state.password
        };
        //todo: login

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");

        fetch(SERVER_URL + "/login", {
            method: "POST",
            headers: myHeaders,
            credentials: 'same-origin',
            body: JSON.stringify(user)
        }).then((response) => {
            console.log(response);
            if (response.ok) {
                console.log("login");
                console.log(response.json());
                console.log(response.headers.get('Authorization'));
                localStorage.setItem('token', response.headers.get('Authorization'));
            }
        });

    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />

                <TextField
                    id="password-input"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <Button className={classes.button} onClick={() => this.handleLogin()}>Login</Button>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
