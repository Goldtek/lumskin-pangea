import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../actions/cart';
import './style.css';

const Product = (props) => {
    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.Cart);
    const currency = Cart.currency;

    const add = (item) => {
      item.quantity = 1;
      dispatch(addItemToCart(item));
    }
 
    return (
        <div className="col-md-4 col-sm-6 mb-4">
        <div className="view zoom overlay rounded">
          <img 
              src={props.item.image_url} className="item-image"/>
        </div>
  
        <div className="text-center pt-4">
          <h5>{props.item.title}</h5>
            <h6 className="mb-3"> From {currency} {props.item.price} </h6>
          <button type="button" className="btn btn-primary btn-md mr-1 mb-2" onClick={() => add(props.item)}><i className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
        </div>
      </div>
    );
}


export default Product;