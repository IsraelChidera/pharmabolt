'use client'

import React, { useState, useContext, useEffect } from 'react'
import { Product as Prod } from '../lib/interface';
import { groq } from 'next-sanity';
import client from '../lib/sanity';
import products from '@/sanity/schemas/products';
import Link from "next/link";
import Product from '@/components/widget/Product';

const page = () => {

    const queryAllProducts = groq`*[_type == "product"]`;
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | any>("");
    const [allDrugProduct, setAllDrugProduct] = useState<Prod[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | any>(null);
    // *[_type == 'product' && categories == 'Others']

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

    const categoryProducts = selectedCategory ? allDrugProduct.filter(product => product.categories.includes(selectedCategory)) : allDrugProduct;

    console.log("cate: ", categoryProducts);


    const handleCategoryChange = (categorySelect: string) => {
        setSelectedCategory(categorySelect)
    }


    return (
        <section className='relative flex'>
            <aside
                style={{ background: "#fafafa" }}
                className='w-72 h-screen flex justify-center'
            >
                <div className='pt-12'>
                    <div>
                        <p style={{ color: "#999999" }} className='text-xs'> Home {">"} Shop {">"}</p>
                    </div>

                    <div>
                        <h2 style={{ color: "#5E5E5E" }} className='text-sm mt-6 font-bold'>CATEGORIES</h2>
                        <ul style={{ color: "#A0A0A0" }} className='mt-4 space-y-4 text-sm'>
                            <li onClick={() => handleCategoryChange(selectedCategory)}>
                                <span>All</span>
                            </li>

                            {
                                category.map((item, index) => (

                                    <li
                                        key={index}
                                        onClick={() => handleCategoryChange(item)}
                                    >
                                        <span className={selectedCategory === item ? `text-primary` : ``}> {item} </span>
                                    </li>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </aside>

            <main className='p-4 w-full'>
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

                <div className='pt-6 pb-10 mt-4 md:mt-10 grid-container2 '>
                    {
                        !loading &&
                        categoryProducts.map((item) => (
                            <Product
                                key={item.slug}
                                slug={item.slug}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                description={item.description}
                                popularproducts={item.popularproducts}
                                categories={item.categories}
                            />
                        ))
                    }
                </div>


            </main>
        </section>
    )
}

export default page