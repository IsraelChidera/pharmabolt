'use client'

import React, { useState, useContext, useEffect } from 'react'
import { Product as Prod } from '../lib/interface';
import { groq } from 'next-sanity';
import client from '../lib/sanity';
import Link from "next/link";
import Product from '@/components/widget/Product';

const page = () => {

    const queryAllProducts = groq`*[_type == "product"]`;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | any>("");
    const [allDrugProduct, setAllDrugProduct] = useState<Prod[]>([]);


    const fetchData = async () => {
        try {
            const allProducts = await client.fetch(queryAllProducts) as Prod[];
            setAllDrugProduct(allProducts);
            setLoading(false);

        } catch (error) {
            console.log("Error: ", error)
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const categories = allDrugProduct.map(product => product.categories);

    const category = [...new Set(categories.flat())]

    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

    const categoryProducts = selectedCategory ? allDrugProduct.filter(product => product.categories.includes(selectedCategory)) : allDrugProduct;

    const [open, setOpen] = useState(false);

    const handleCategoryChange = (categorySelect: string) => {
        setSelectedCategory(categorySelect)
    }


    return (
        <section className='relative md:flex'>
            <aside
                style={{ background: "#fafafa" }}
                className='w-72 h-screen md:flex hidden justify-center'
            >
                <div className='pt-12'>
                    <div>
                        <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Shop {">"}</p>
                    </div>

                    <div>
                        <h2 style={{ color: "#5E5E5E" }} className='text-sm mt-6 font-bold'>CATEGORIES</h2>
                        <ul style={{ color: "#A0A0A0" }} className='mt-4 space-y-4 text-sm'>
                            {/* <li onClick={() => handleCategoryChange(selectedCategory)}>
                                <span>All</span>
                            </li> */}

                            {
                                category.map((item) => (

                                    <li
                                        key={item}
                                        onClick={() => handleCategoryChange(item)}
                                        className='cursor-pointer'
                                    >
                                        <span className={selectedCategory === item ? `text-primary ` : ``}> {item} </span>
                                    </li>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </aside>

            <main className='mt-20 md:mt-0 p-4 relative'>
                <div className='md:hidden block px-3 absolute top-0 left-0 z-50 w-full'>
                    <ul>
                        <li
                            style={{
                                border: "1px solid #008BFF",
                                borderRadius: "5px",
                            }}
                            className='w-full border px-2 py-3'
                            onClick={() => setOpen(prev => !prev)}
                        >
                            {
                                selectedCategory
                            }
                        </li>


                        <div>
                            {
                                open &&
                                <div className='rectangle'>
                                    {
                                        category.map((item) => (

                                            <div key={item} className='flex items-center justify-center text-center '>

                                                <li
                                                    onClick={() => {
                                                        handleCategoryChange(item);
                                                        setOpen(false);
                                                    }}
                                                    className='cursor-pointer pb-4'
                                                >
                                                    <span className={selectedCategory === item ? `text-primary ` : ``}> {item} </span>
                                                </li>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </ul>
                </div>

                {
                    error &&
                    <div className='pt-4 flex h-screen items-center justify-center text-center w-full text-sm'>
                        <p>
                            There was an error loading the products. Click{" "}
                            <span
                                onClick={() => location.reload()}
                                className="underline cursor-pointer"
                            >
                                here
                            </span>{" "}
                            to refresh or return to{" "}
                            <Link href="/" className="underline">
                                {" "}
                                Home{" "}
                            </Link>
                        </p>
                    </div>
                }

                {
                    loading && <div>
                        <p className='text-sm pt-4 text-center w-full'>
                            Loading products  . . .
                        </p>
                    </div>
                }

                <div className='pt-6 pb-10 mt-20 md:mt-10 grid-container2 '>
                    {
                        !loading &&
                        categoryProducts.map((item) => (
                            <Product
                                {...item}
                            />
                        ))
                    }
                </div>


            </main>
        </section>
    )
}

export default page