import React, {Component} from 'react';

class Product extends Component {
    state = {
        products:[
            {name:'Bicycle', id: 1, price:30, quantitiy:15, desc:'Bicycle is Good'},
            {name:'TV', id: 2, price:40, quantitiy:16, desc:'TV is Good'},
            {name:'Pencil', id: 3, price:50, quantitiy:17, desc:'Pencil is Good'},
        ]
    };
    
  render() {
    return (        
      <div className="Product">
          <br/>
          <h1>Product Details:</h1>
          <p>Name: {this.state.products[this.props.match.params.id-1].name} </p>
          <p>Id:  {this.props.match.params.id}</p>
          <p>Price: {this.state.products[this.props.match.params.id-1].price} </p>
          <p>Quantity: {this.state.products[this.props.match.params.id-1].quantitiy} </p>
          <p>Desc: {this.state.products[this.props.match.params.id-1].desc} </p>
          <p>URL:  {this.props.match.url}</p>
      </div>
    );
  }
}

export default Product;