'use client'

import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomButton } from '@/components';
import product1 from '../../../public/assets/product.png';
import Image from "next/image";

const page = () => {
    return (
        <section className='md:mt-0 grid grid-cols-1 mt-10 md:grid px-3 md:px-0 md:grid-cols-2 md:space-x-20 mx-auto md:w-5/6 md:py-8 py-10'>
            <div className='order-2'>
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
                            >
                                <FormControlLabel
                                    value={<span>Store pickup</span>}
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

                    <div className='space-y-2 mt-4'>
                        <p className="text-xs"> To pickup directly from the store, visit the following address: </p>

                        <div className='text-sm font-bold'>
                            <p>PharmaBolt Pharmaceuticals</p>
                            <p> 15, Park Lane Avenue, G.R.A</p>
                            <p>Enugu, Enugu state</p>
                        </div>

                        <p className='text-xs'> Please come with a valid reciept of your payment or transaction ID during pickup. </p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className="mt-2">
                        <h3 className='font-bold'> PAYMEENT/BILLING</h3>

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
                        >
                            <FormControlLabel
                                value={<span>Debit/credit card</span>}
                                control={<Radio />}
                                label={<span className='text-sm'>Debit/credit card</span>}
                            />
                            <FormControlLabel
                                value="Bank transfer"
                                control={<Radio />}
                                label={<span className='text-sm'>Bank transfer</span>}
                            />
                        </RadioGroup>
                    </FormControl>

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
                                    id="outlined-required"
                                    label={<span className='text-sm'>Card number</span>}
                                    size="small"
                                    className='w-full'
                                />
                            </div>

                            <div className='md:grid grid-cols-2 md:gap-x-2 space-y-4'>
                                <div>
                                    <TextField
                                        required
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        size="small"
                                        className='w-full'
                                    />
                                </div>

                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label={<span className='text-sm'>Card number</span>}
                                        size="small"
                                        className='w-full'
                                    />
                                </div>
                            </div>

                            <div>
                                <TextField
                                    required
                                    id="outlined-password-input"
                                    label="email"
                                    type="email"
                                    size="small"
                                    className='w-full'
                                />
                                <p className='text-xs'>
                                    Your transaction reciept will be sent to this email*
                                </p>
                            </div>
                        </Box>

                        <CustomButton title="Proceed to summary" className='py-3 w-full mt-8' />
                    </div>
                </div>
            </div>

            <aside className='order-1 pb-20 md:pb-0 md:mt-0 mt-10 space-y-2'>
                <div className='block md:hidden'>
                    <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Cart {">"} Checkout </p>
                </div>

                <section className='flex pb-10 h-fit justify-between space-x-10'>
                    <div className='flex space-x-3'>
                        <div className='border rounded-md'>
                            <Image style={{ width: "66px", height: "66px" }} src={product1} alt="product in cart" />
                        </div>

                        <div className='flex flex-col justify-between'>
                            <div>
                                <h3 className='text-sm'> Blood Test Strip </h3>
                                <p className='text-xs font-semibold'> NGN 7 950 </p>
                            </div>
                        </div>
                    </div>


                </section>

                <section className='flex border-b pb-10 h-fit justify-between space-x-10'>
                    <div className='flex space-x-3'>
                        <div className='border rounded-md'>
                            <Image style={{ width: "66px", height: "66px" }} src={product1} alt="product in cart" />
                        </div>

                        <div className='flex flex-col justify-between'>
                            <div>
                                <h3 className='text-sm'> Blood Test Strip </h3>
                                <p className='text-xs font-semibold'> NGN 7 950 </p>
                            </div>
                        </div>
                    </div>


                </section>

                <div className='text-xs mt-2'>
                    <div className='flex justify-between'>
                        <p>Products: </p>
                        <p className='font-semibold'>NGN 13 738</p>
                    </div>

                    <div className='mt-2 flex justify-between'>
                        <p>Delivery: </p>
                        <p className='font-semibold'>NGN 0.00</p>
                    </div>

                    <div className='border-t pt-2 mt-6 flex justify-between'>
                        <p>Total: </p>
                        <p className='font-semibold'>NGN 13 738</p>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default page