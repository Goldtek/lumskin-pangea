import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementQty, decreaseQty } from '../../actions/cart';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.Cart);
    const currency = Cart.currency;

 return (
    <div className="row cart">

        <div className="col-sm-6">
            <div>{props.item.title}</div>
            <div className="number">
                <span className="minus" onClick={() => dispatch(decreaseQty(props.item))}>-</span>
                <input type="text" value={props.item.quantity} className="cartInput"/>
                <span className="plus" onClick={() => dispatch(incrementQty(props.item))}>+</span>
            </div> 
        </div> 

        <div className="col-sm-3">
<div className="total-price">{currency} {props.item.price}</div>
        </div>
        
        <div className="col-sm-3">
            <img src={props.item.image_url} className="cartimg" alt="item"/>
        </div>

    </div>

);
 }


export default CartItem;