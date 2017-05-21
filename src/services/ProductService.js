import axios from 'axios';
import {config} from '../config';

class ProductService {
    static getProducts = () =>
        axios.get(config.apiUri + '/products');
}

export default ProductService;