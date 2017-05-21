import React, { Component } from 'react';
import Auth from './services/Auth';
import axios from 'axios';

import {
    BrowserRouter as Router, Route, Redirect
} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import Products from './containers/Products';
import Login from './containers/Login';

axios.interceptors.response.use(
    res => res, 
    err => {
    if(err.response.status === 401){
        localStorage.removeItem('appToken');
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        
        const token = localStorage.getItem('appToken');
        if(token) axios.defaults.headers.common['Authorization'] = token;
    }

    render() {
        return (
            <Router>
                <div>
                    <PrivateRoute path="/" component={Products}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        )
    }
}

export default App;