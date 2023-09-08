'use client'

import React, { useState, useContext, useEffect } from 'react'
import { Product } from '../lib/interface';
import { groq } from 'next-sanity';
import client from '../lib/sanity';
import products from '@/sanity/schemas/products';

const page = () => {
    const [allDrugProduct, setAllDrugProduct] = useState<Product[]>([]);
    const queryAllProducts = groq`*[_type == "product"]`;
    // *[_type == 'product' && categories == 'Others']
    const fetchData = async() => {
        const allProducts = await client.fetch(queryAllProducts) as Product[];
        setAllDrugProduct(allProducts);
    }

    useEffect(() => {        
        fetchData();
    }, [allDrugProduct])

    const categories = allDrugProduct.map(product => product.categories);

    const category = [...new Set(categories.flat())]

    const categoryProducts = allDrugProduct.filter(product => product.categories === "Others");
    // console.log("cate: ", categoryProducts);

    const [selectedCategory, setSelectedCategory] = useState(category[0]);

    const handleCategoryChange = (category: any) => {
        setSelectedCategory(category)
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
                            {
                                category.map((item, index) => (

                                    <li 
                                        key={index} 
                                        onClick={handleCategoryChange(item)}
                                        >
                                        <span> {item} </span>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                </div>
            </aside>

            <main className='pl-4'>
                main
            </main>
        </section>
    )
}

export default page