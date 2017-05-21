import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import Product from '../components/Product';

class Products extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            products: []
        }
    }
    
    componentDidMount = () => {
        ProductService.getProducts().then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        const {products} = this.state;

        const headerStyle = {
            marginTop: '1rem',
            marginBottom: '1rem'
        }

        return (
            <div className="container">
                <h1 style={headerStyle}>Products</h1>
                <div className="row">
                    {products.length ? products.map((product, id) => 
                        <div key={id} className="col-lg-3 col-md-4 col-sm-6">
                            <Product data={product} />
                        </div>
                    ) : <h6 className="col">No products found</h6>}
                </div>
            </div>
        )
    }
}

export default Products;