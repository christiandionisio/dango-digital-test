import { createContext } from 'react';
import { IProduct } from '../../interfaces/product';

interface ContextProps {
    isLoaded: boolean;
    cart: IProduct[];
    numberOfItems: number;
    total: number;

    //Methods
    addProductToCart: (product: IProduct) => void;
    updateCartQuantity: (product: IProduct) => void;
} 

export const CartContext = createContext({} as ContextProps);