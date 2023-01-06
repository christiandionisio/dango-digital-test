import { FC, useEffect, useReducer, useState } from 'react';
import { IProduct } from '../../interfaces/product';
import { CartContext } from './CartContext';
import { cartReducer } from './cartReducer';


export interface CartState {
    isLoaded: boolean;
    cart: IProduct[];
    numberOfItems: number;
    total: number;
}



const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    total: 0,
}

interface Props {
  children?: React.ReactNode;
}

export const CartProvider:FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const [isActionDispached, setIsActionDispached] = useState(false);


  useEffect(() => {

    const numberOfItems = state.cart.reduce((previous, current) => current.quantity + previous, 0 );
    const total = state.cart.reduce((previous, current) => (current.price * current.quantity) + previous, 0 );

    const orderSummary = {
      numberOfItems,
      total
    }
    dispatch({type: '[Cart] - Update order summary', payload: orderSummary});
  }, [state.cart])
  

  const addProductToCart = (product: IProduct) => {

    setIsActionDispached(true);

    const productInCart = state.cart.some(p => p._id === product._id);
    if (!productInCart) return dispatch({type: '[Cart] - Update products in cart', payload: [...state.cart, product]});

    const productInCartButDifferentSize = state.cart.some(p => p._id === product._id);
    if (!productInCartButDifferentSize) return dispatch({type: '[Cart] - Update products in cart', payload: [...state.cart, product]});

    const updatedProducts = state.cart.map(p => {
      if (p._id !== product._id) return p;

      // Update quantity
      p.quantity += product.quantity;

      return p;
    });

    dispatch({type: '[Cart] - Update products in cart', payload: updatedProducts});

  }

  const updateCartQuantity = (product: IProduct) => {
    setIsActionDispached(true);
    dispatch({type: '[Cart] - Change cart quantity', payload: product});
  }

  

   
  return (
    <CartContext.Provider value={{
      ...state,

      //Methods
      addProductToCart,
      updateCartQuantity,
    }}>
      {children}
    </CartContext.Provider>
  )
}