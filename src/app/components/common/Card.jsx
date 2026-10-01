import React from 'react'
import Product1 from '../.././product1.jpg'


export default function Card() {
    return (
        <figure className='bg-white rounded-lg shadow-2xl p-4 max-w-[22%] mb-10' >
            <img src={Product1.src} alt="Product" />
            <h3 className='font-semibold text-xl pt-5 pb-1'>Product One</h3>
            <p className='pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, accusantium?</p>
            <button className="bg-blue-700 text-white hover:bg-blue-600 py-1 px-8 rounded-xl my-3 ">
                Read More
            </button>

        </figure>
    )
}
