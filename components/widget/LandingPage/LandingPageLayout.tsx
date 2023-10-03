import React from 'react'
import { BookConsultation, CreateAccount, Hero, Newsletter, Products, Testimonials, } from '@/components'

import client from '../../../app/lib/sanity';
import { groq } from 'next-sanity';
import { Product } from '../../../app/lib/interface';

const query = groq`*[_type == "product"]`;

const LandingPageLayout = async () => {
    const products: Product[] = await client.fetch(query);


    return (
        <div>
            <Hero />
            <Products products={products} />
            <BookConsultation />
            <CreateAccount />
            <Testimonials />
            <Newsletter />
        </div>
    )
}

export default LandingPageLayout