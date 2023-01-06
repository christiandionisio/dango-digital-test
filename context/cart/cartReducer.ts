import { IProduct } from "../../interfaces/product";
import { CartState } from "./CartProvider";


type CartActionType = 
| { type: '[Cart] - Update products in cart', payload: IProduct[]}
| { type: '[Cart] - Change cart quantity', payload: IProduct}
| { 
    type: '[Cart] - Update order summary', 
    payload: {
        numberOfItems: number;
        total: number;
    }
}
| { type: '[Cart] - Order complete' }


export const cartReducer = (state: CartState, action: CartActionType): CartState => {
    
    switch (action.type) {
        case '[Cart] - Update products in cart':
            return {
                ...state,
                cart: [...action.payload]
            }

        case '[Cart] - Change cart quantity':
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product._id !== action.payload._id) return product;
                    return action.payload;
                })
            }
            
        case '[Cart] - Update order summary':
            return {
                ...state,
                ...action.payload
            }
        case '[Cart] - Order complete':
            return {
                ...state,
                cart: [],
                numberOfItems: 0,
                total: 0
            }
    
        default:
            return state;
    }

}