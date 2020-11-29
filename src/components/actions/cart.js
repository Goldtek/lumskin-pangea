import _ from "underscore";
import { UPDATE_CART } from "./types";

    const updateCart = cart => ({
        type: UPDATE_CART,
        cart,
    });
  
    export const addItemToCart = cartItem => (dispatch, getState) => {
      const { Cart: { cart } } = getState();
      const newC = {};
    
      const index = _.findIndex(cart.items, item => item.id === cartItem.id);

      if (index !== -1) {
        cart.items[index].quantity += cartItem.quantity;
        newC.items = [...cart.items];
      } else {
        newC.items = [...cart.items, cartItem];
      }

      newC.totalPrice = _.reduce(newC.items, (memo, item) => memo + (item.price * item.quantity), 0);
      dispatch(updateCart(newC));
    };

    export const incrementQty = cartItem => (dispatch, getState) => {
      const { Cart: { cart } } = getState();
      const newC = {};
      const index = _.findIndex(cart.items, item => item.id === cartItem.id);
      cart.items[index].quantity += 1;
      newC.items = [...cart.items];
      newC.totalPrice = _.reduce(newC.items, (memo, item) => memo + (item.price * item.quantity), 0);
      dispatch(updateCart(newC));
    };
    
    export const decreaseQty = cartItem => (dispatch, getState) => {
      const { Cart: { cart } } = getState();
      const newC = {};
      const index = _.findIndex(cart.items, item => item.id === cartItem.id);
      if (cart.items[index].quantity > 1) {
        cart.items[index].quantity -= 1;
        newC.items = [...cart.items];
      } else if (cart.items[index].quantity === 1) {
        newC.items =  cart.items.filter(item => item.id !== cartItem.id)
      }
      newC.totalPrice = _.reduce(newC.items, (memo, item) => memo + (item.price * item.quantity), 0);
      dispatch(updateCart(newC));
    };

    