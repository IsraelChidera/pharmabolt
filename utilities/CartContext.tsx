'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { groq } from 'next-sanity';
import { PageProps, Product, Product as Prod } from "@/app/lib/interface";
import client from "@/app/lib/sanity";



type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItems = {
    id: any,
    quantity: number,
}

type CartContextType = {
    getItemQuantity: (id: any) => number,
    increaseCartQuantity: (id: any) => void,
    decreaseCartQuantity: (id: any) => void,
    removeFromCart: (id: any) => void,
    cartQuantity: number,
    cartItems: CartItems[],
    products: Product[]
}


const CartContext = createContext({} as CartContextType);

export function useShoppingCart() {
    return useContext(CartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    const getItemQuantity = (id: any) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const increaseCartQuantity = (id: any) => {
        setCartItems(cartItems => {
            if (cartItems.find(item => item.id === id) == null) {
                return [...cartItems, { id, quantity: 1 }]
            } else {
                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: any) => {
        setCartItems(cartItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                return cartItems.filter(item => item.id !== id)
            } else {
                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    const removeFromCart = (id: any) => {
        setCartItems(cartItems => {
            return cartItems.filter(item => item.id !== id);
        })
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const fetchData = async () => {
        const queryAllProducts = groq`*[_type == "product"]`;
        const allProducts: any = await client.fetch(queryAllProducts) as Product[];

        setProducts(allProducts);
    }

 

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                products
            }}
        >
            {children}
        </CartContext.Provider>
    )
}


