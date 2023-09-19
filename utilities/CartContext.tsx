'use client'

import React, { createContext, useContext, useState } from "react";

type CartItems = {
    id: number,
    quantity: number,
}

type CartContextType = {
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void
}


const CartContext = createContext({} as CartContextType);

export function useShoppingCart() {
    return useContext(CartContext);
}

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const increaseCartQuantity = (id: number) => {
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

    const decreaseCartQuantity = (id: number) => {
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

    const removeFromCart = (id: number) => {
        setCartItems(cartItems => {
            return cartItems.filter(item => item.id !== id);
        })
    }

    return (
        <CartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}


