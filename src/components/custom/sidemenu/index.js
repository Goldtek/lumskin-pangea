import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import CartItem from '../cartitem';
import './style.css'

const GET_CURRENCIES= gql`
  query {
    currency
  }
`


const MenuContent = () => {

    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.Cart);
    const sidebarOpen  = Cart.openCart;
    const items = Cart.cart.items;
    const totalPrice = Cart.totalPrice;
    let currencies = [];


    const  closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
    }

    const _onSelect = (currency) => {
        dispatch({ type: 'SET_CURRENCY', currency: currency.value });
    }
  
    let drawerClasses = 'side-drawer'
    if(sidebarOpen) {
        drawerClasses = 'side-drawer open'
    }
    return(

        <div className={drawerClasses} style={{backgroundColor: '#eee'}}>
            <section>
                <div className='cartContainer'>
                    <div className="row">
                        <div className="col-sm-2">
                            <button className="back" onClick={closeCart}> <img src="back.png" /></button>
                        </div>
                        <div className="col-sm-8"></div>
                        <div className="col-sm-2">
                            <Query query={GET_CURRENCIES}>
                                {({ error, data }) => {
                                    if (error) {
                                        console.log('error', error);
                                    }

                                    if(data){
                                         currencies = data.currency;
                                    }

                                    return (
                                        <Dropdown options={currencies} onChange={_onSelect} value={'USD'} placeholder="Select an option" />
                                    )
                                }}
                                </Query>
                        </div>
                    </div>
                   
                    {items.map((item) => 
                        <CartItem item={item} key={item.id} />
                    )}
                   
    
                    <div style={{ height: '120px' , backgroundColor: '#E2E6E3'}}></div>
            </div>
            </section>
            <div style={{ position: 'absolute', bottom: 10, width: '90%', marginLeft: '2%' }}>
                <hr />
                <div className="subtotal">
                    <div className="row">
                        <div className="col-md-6">
                            Subtotal
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-2">
                            {Cart.currency} {totalPrice}
                        </div>
                    </div>
                    
                </div>
                <button type="button" className="btn btn-light btn-block sub" > MAKE THIS A SUBSCRIPTION </button>
                <button type="button" className="btn btn-primary btn-block" > PROCEED TO CHECKOUT</button>
            </div>
        
        </div>
    )
}


export default MenuContent
