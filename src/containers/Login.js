import React, { Component } from 'react';
import Auth from '../services/Auth';
import {
    Redirect
} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.auth = new Auth();
        
        this.state = {
            err: false,
            logged: localStorage.getItem('appToken')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.auth.login(this.username.value, this.password.value)
            .then(() => {
                this.setState({
                    logged: true
                })
            })
            .catch(err => {
                this.setState({
                    err: true
                })
            })
    }
    
    handleFocus = () => {
        this.setState({
            err: false
        })
    }

    render() {
        const {err, logged} = this.state;
        
        const containerStyles = {
            height: '100vh'
        }
        
        return (
            <div className="container d-flex justify-content-center" style={containerStyles}>
                {logged && <Redirect to='/' />}
                <div className="row">
                    <div className="align-self-center">
                        {err ? 'Error occured' : ''}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Username: </label>
                                <input 
                                    className="form-control"
                                    type="text" 
                                    ref={c => this.username = c} 
                                    required
                                    onFocus={this.handleFocus}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    ref={c => this.password = c}
                                    required
                                    onFocus={this.handleFocus}
                                />
                            </div>
                            <button className="btn btn-primary" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;