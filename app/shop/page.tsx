import React from 'react'

const page = () => {
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
                            <li>
                                <span> Diabetes </span>
                            </li>

                            <li>
                                <span> Ulcer </span>
                            </li>

                            <li>
                                <span> Asthma </span>
                            </li>

                            <li>
                                <span> Others </span>
                            </li>
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