'use client'

import React, { useLayoutEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton } from '@/components';
import { useShoppingCart } from '@/utilities/CartContext';
import { useUserContext } from '@/utilities/UserContext';
import { redirect, useRouter } from 'next/navigation';
import { urlfor } from '@/app/lib/sanity';
import { PaystackButton } from 'react-paystack';



const page = () => {

    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState('Store pickup');
    const [selectedPaymentOption, setSelectedPaymentOption] = useState("Debit/credit card");

    const { totalPrice, cartItems, products, clearCart } = useShoppingCart();
    const { currentUser } = useUserContext();
    const navigate = useRouter();

    const getProductsInCart = () => {
        const productsInCart: any = cartItems?.map((item) => {
            const product = products.find((p) => p._id === item.id);
            if (product) {
                return {
                    ...product,
                    quantity: item.quantity,
                };
            }
            return null;
        });

        return productsInCart?.filter((product: any) => product !== null);
    };

    const productsInCart: any = getProductsInCart();

    useLayoutEffect(() => {
        const userExist = currentUser;

        if (userExist === "") {
            redirect("/login");
        }
    }, []);

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePaymentMethodChange = (event: any) => {
        setSelectedPaymentOption(event.target.value);
    }

    const config: any = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: totalPrice * 100,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PK,
    };

    const handlePaystackSuccessAction = (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        clearCart();
        navigate.push("/shop");
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps: any = {
        ...config,        
        text: 'Pay',
        onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };


    return (
        <section className='md:mt-0 grid grid-cols-1 mt-10 md:grid px-3 md:px-0 md:grid-cols-2 md:space-x-20 mx-auto md:w-5/6 md:py-8 py-10'>
            <div className='md:order-1 order-2'>
                <div>
                    <div className='md:block hidden'>
                        <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Cart {">"} Checkout </p>
                    </div>

                    <div className='mt-4'>
                        <h3 className='font-bold'> DELIVERY INFORMATION</h3>

                        <p className='text-sm mt-4'> Choose delivery method </p>

                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 20,
                                    },
                                }}
                                defaultValue={selectedOption}
                                // value={selectedOption}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value={"Store pickup"}
                                    control={<Radio />}
                                    label={<span className='text-sm'>Store pickup</span>}
                                />

                                <FormControlLabel
                                    value="Home delivery"
                                    control={<Radio />}
                                    label={<span className='text-sm'>Home delivery</span>}
                                />
                            </RadioGroup>
                        </FormControl>

                    </div>

                    {selectedOption === 'Store pickup'
                        && <div className='space-y-2 mt-4'>
                            <p className="text-xs"> To pickup directly from the store, visit the following address: </p>

                            <div className='text-sm font-bold'>
                                <p>PharmaBolt Pharmaceuticals</p>
                                <p> 15, Park Lane Avenue, G.R.A</p>
                                <p>Enugu, Enugu state</p>
                            </div>

                            <p className='text-xs'> Please come with a valid reciept of your payment or transaction ID during pickup. </p>
                        </div>
                    }

                    {selectedOption === 'Home delivery' &&
                        <Box
                            component="form"
                            className='mt-6 space-y-6'
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="outlined-required name"
                                    label={<span className='text-sm'>Full Name</span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    type="email"
                                    id="outlined-required email"
                                    label={<span className='text-sm'>Email address</span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    type="tel"
                                    id="outlined-required phone"
                                    label={<span className='text-sm'>Phone number</span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <TextField
                                    type="text"
                                    required
                                    id="outlined-required address"
                                    label={<span className='text-sm'>Delivery address</span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    type="text"
                                    id="outlined-required city"
                                    label={<span className='text-sm'>City </span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    id="outlined-required state"
                                    type="text"
                                    label={<span className='text-sm'> State </span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>
                        </Box>
                    }


                </div>

                <div className='mt-10'>
                    <div className="mt-2">
                        <h3 className='font-bold'> PAYMENT/BILLING</h3>

                        <p className='text-sm mt-4'> Choose a payment method </p>
                    </div>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 20,
                                },
                            }}
                            defaultValue={selectedPaymentOption}
                            onChange={handlePaymentMethodChange}
                        >
                            <FormControlLabel
                                value="Debit/credit card"
                                control={<Radio />}
                                label={<span className='text-sm'>Online payment</span>}
                            />
                            <FormControlLabel
                                value="Bank transfer"
                                control={<Radio />}
                                label={<span className='text-sm'>Bank transfer</span>}
                            />
                        </RadioGroup>
                    </FormControl>

                    {
                        selectedPaymentOption === 'Debit/credit card' &&
                        <div className='mt-6'>
                            <Box
                                component="form"
                                className='space-y-6'
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        required
                                        id="outlined-password-input email"
                                        label="email"
                                        type="email"
                                        size="small"
                                        className='w-full'
                                        onChange={handleEmailChange}
                                    />
                                    <p className='text-xs'>
                                        Your transaction reciept will be sent to this email*
                                    </p>
                                </div>
                            </Box>

                            <PaystackButton {...componentProps} className='rounded-lg bg-blue-700 text-sm text-white py-3 w-full mt-8' />
                        </div>
                    }

                    {
                        selectedPaymentOption === 'Bank transfer' &&
                        <div>
                            <div className='space-y-2 mt-4'>
                                <p className="text-xs"> Make your payment directly into the bank account: </p>

                                <div className='text-sm font-bold'>
                                    <p>PharmaBolt Pharmaceuticals</p>
                                    <p> GT Bank </p>
                                    <p>Account number: 0983452671</p>
                                </div>

                                <p className='text-sm'>
                                    Please use your transaction ID as a payment reference.
                                    Your transaction ID will be generated once you
                                    select "Bank Transfer" and click on "Checkout".
                                </p>

                                <p className='pt-4 text-sm'>
                                    Your order will only be shipped once payment is confirmed.
                                    Contact +234-814-626-5074 to confirm your order
                                </p>
                            </div>

                            <CustomButton title="Confirm order" className='py-3 w-full mt-8' />
                        </div>
                    }
                </div>
            </div>

            <aside className='md:order-2 order-1 pb-20 md:pb-0 md:mt-0 mt-10 space-y-2'>
                <div className='block md:hidden'>
                    <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Cart {">"} Checkout </p>
                </div>


                {
                    productsInCart?.map((item: any) => (
                        <section key={item?._id} className='flex border-b pb-10 h-fit justify-between space-x-10'>
                            <div className='flex space-x-3'>
                                <div className='border rounded-md'>
                                    <img style={{ width: "66px", height: "66px" }} src={urlfor(item?.image.asset._ref).url()} alt={item?.image.alt} />
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <h3 className='text-sm'> {item?.name} </h3>
                                        <p className='text-xs font-semibold'> NGN {item?.price} </p>
                                    </div>
                                </div>
                            </div>


                        </section>
                    ))
                }

                <div className='text-xs mt-2'>
                    <div className='flex justify-between'>
                        <p>Products: </p>
                        <p className='font-semibold'>NGN {totalPrice}</p>
                    </div>

                    <div className='mt-2 flex justify-between'>
                        <p>VAT: </p>
                        <p className='font-semibold'>NGN 0.00</p>
                    </div>

                    <div className='border-t border-b md:border-none pb-3 md:pb-0 pt-3 mt-6 flex justify-between'>
                        <p>Total: </p>
                        <p className='font-semibold'>NGN {totalPrice}</p>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default page