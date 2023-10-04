import Image from 'next/image';
import React from 'react';
import product1 from '@/public/assets/product.png';
import deleteIcon from '@/public/assets/delete-icon.png';
import { useShoppingCart } from '@/utilities/CartContext';
import { urlfor } from '@/app/lib/sanity';

const CartItem = ({ id, quantity }: { id: any, quantity: number }) => {

    const { products, removeFromCart, increaseCartQuantity } = useShoppingCart();

    const item: any = products.find(item => item._id === id);


    if (item == null) return null

    return (
        <section className='mt-10 pb-10 border-b flex h-fit justify-between space-x-10'>
            <div className='flex space-x-3'>
                <div className='border rounded-md'>
                    <img style={{ width: "142px", height: "142px" }} src={urlfor(item.image.asset._ref).url()} alt={item.image.alt} />
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        <h3 className='text-sm'> {item.name} </h3>
                        <p className='text-xs mt-2' style={{ color: "#039E00" }}> Available </p>
                    </div>

                    <div className='text-xs w-fit border p-2 flex space-x-4 items-center mt-6 md:mt-4'>
                        <p style={{ color: "#D0D0D0" }}>Quantity</p>
                        <div className='flex items-center space-x-5'>
                            <button className='font-bold'> - </button>
                            <p> {quantity} </p>
                            <button className='font-bold' onClick={() => increaseCartQuantity(item._id)}> + </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' text-sm flex flex-col justify-between'>
                <p> NGN {item.price * quantity} </p>

                <div onClick={() => removeFromCart(item._id)} className='flex space-x-2 items-center text-primary'>
                    <Image src={deleteIcon} alt="delete icon" />
                    <p className='text-xs'>Remove</p>
                </div>
            </div>
        </section>
    )
}

export default CartItem