
import {
  UPDATE_CART,
  CLEAR_CART,
  SET_CURRENCY,
  CLOSE_CART,
  OPEN_CART,
} from '../../components/actions/types';

const initialState = {
  cart: {
    items: [],
    totalPrice: 0,
  },
  loading: false,
  openCart: false,
  error: null,
  currency: 'USD'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: action.cart,
        totalPrice: action.totalPrice,
        openCart: true,
      };
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.currency,
      };
   
    case CLOSE_CART:
      return {
        ...state,
        openCart: false,
      }

    case OPEN_CART: 
    return {
      ...state,
        openCart: true,
    }

    case CLEAR_CART: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
