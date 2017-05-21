import axios from 'axios';
import qs from 'qs';
import {config} from '../config';

class Auth {
    loginRequest = (username, password) =>
        axios.post(config.apiUri + '/jwt', qs.stringify({username, password}));
        
    login = (username, password) => {
        if(!username || !password){
            return;
        }
        
        return this.loginRequest(username, password).then(response => {
            localStorage.setItem('appToken', response.data.access_token);
            axios.defaults.headers.common['Authorization'] = response.data.access_token;
        }).catch(err => {throw err});
    }
    
    logout = () => {
        localStorage.removeItem('appToken');
    }
}

export default Auth;