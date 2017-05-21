import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props;
        
        if(!data) return false;
        
        const productStyles = {
            marginBottom: '1rem'
        }
        
        return (
            <div className="card" style={productStyles}>
                <div className="card-block">
                    <h4 className="card-title">{data.name} ({data.price})</h4>
                    <p className="card-text">
                        {data.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Product;