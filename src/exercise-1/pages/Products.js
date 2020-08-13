import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import '../styles/Products.css';
import Product from './Product';


class Products extends Component {
    state = {
        products:[
            {name:'Bicycle', id: 1, price:30, quantitiy:15, desc:'Bicycle is Good'},
            {name:'TV', id: 2, price:40, quantitiy:16, desc:'TV is Good'},
            {name:'Pencil', id: 3, price:50, quantitiy:17, desc:'Pencil is Good'},
        ]
    }
  render() {
    return (
        
      <div className="Products">
          <h3>All Products:</h3>
          {this.state.products.map( (product) => (
              <Link key={product.id} to={`products/${product.id}`} className = {product.name}>
                  {product.name}
              </Link>
          ))} 

      </div>
    );
  }
}

export default Products;