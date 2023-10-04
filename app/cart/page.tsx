'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import product1 from '../../public/assets/product.png';
import deleteIcon from '../../public/assets/delete-icon.png';
import { CustomButton } from '@/components';
import { useRouter } from "next/navigation";
import { useShoppingCart } from '@/utilities/CartContext';
import CartItem from '@/components/widget/CartItem';
import EmptyCart from '@/components/widget/EmptyCart';

const page = () => {

    const navigate = useRouter();

    const { cartItems, products, setTotalPrice} = useShoppingCart();

    const totalPrice: any = cartItems?.reduce((total, cartItem) => {
        const item = products?.find(i => i._id === cartItem.id)

        return total + (item?.price || 0) * cartItem.quantity
    }, 0);

    const deliveryPrice = 2100;
    const totalPayment = totalPrice + deliveryPrice;
    setTotalPrice(totalPayment);

    return (
        <div>
            {
                cartItems?.length > 0 ?
                    (<section className="px-3 md:mx-auto md:max-w-6xl mt-20 pb-10">
                        <div className="flex items-end justify-between">
                            <div>
                                <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Cart {">"}</p>
                            </div>


                            <Link prefetch href="/shop" className="text-xs underline underline-offset">
                                Continue shopping
                            </Link>
                        </div>

                        <div className='mt-5 md:grid grid-cols-2 md:space-x-40'>
                            <div>
                                {
                                    cartItems?.map(item => (
                                        <CartItem key={item.id} {...item} />
                                    ))
                                }
                            </div>

                            <aside className='mt-20 md:mt-0 md:mb-0 mb-20'>
                                <ul>
                                    <div className='flex justify-between'>
                                        <p> Products </p>

                                        <p className='font-bold'> NGN {totalPrice} </p>
                                    </div>

                                    <div className='mt-4 flex justify-between'>
                                        <p> Delivery </p>

                                        <p className='font-bold'> NGN {deliveryPrice} </p>
                                    </div>

                                    <p className='mt-3 text-primary border-b text-xs pb-8 underline'>
                                        Tap here to edit delivery address
                                    </p>

                                    <div className='mt-6 flex justify-between'>
                                        <p> Total </p>

                                        <p className='font-bold'> NGN {totalPayment}</p>
                                    </div>

                                    <div className='mt-10'>
                                        <CustomButton
                                            className='w-full py-3'
                                            title="Proceed to Checkout"
                                            onClick={() => navigate.push("/cart/checkout")}
                                        />
                                    </div>
                                </ul>
                            </aside>
                        </div>
                    </section>)
                    :

                    <EmptyCart />
            }
        </div>
    )
}

export default page