import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className='grid  md:grid-cols-2 h-[70vh] items-center'>
            <div className='py-12 '>
                <h1 className='text-5xl font-semibold'>Todo
                    <br />
                    es mejor
                    <br />
                    con una {' '} <span className='text-primary'>pizza</span></h1>
                <p className='my-4 text-gray-500'>
                    La pizza es la pieza que falta para completar cada día,
                    un placer sencillo pero delicioso, que une a las personas.
                </p>
                <div className='flex gap-4 text-sm'>
                    <button className='bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2'>
                        Ordenar ahora
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button className='flex gap-2 items-center py-2 text-gray-600 font-semibold'>
                        Aprende ahora
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='relative'>
                <Image
                    src={'/assets/pizza.png'}
                    width={500}
                    height={500}
                    alt='image pizza'
                />
            </div>
        </section>
    )
}
