import React from 'react'
export default function BannerSection() {
    let enquiryForm = () => {
            console.log("Enquire Clicked")
        }



    return (
        
        <div>
            <section className="w-full h-screen bg-cover bg-center bg-[url(./bg.jpg)] "
            >

                <div className='text-center py-40'>
                    <h1 className="text-white font-bold text-5xl my-3">
                        Building Better. Living Better.
                    </h1>
                    <h2 className='text-white font-bold text-3xl'> Build Your Future <span className='text-blue-800'>With Confidence</span></h2>
                    <p className="text-slate-100 text-xl my-3">
                        Professional solutions designed for modern businesses.
                    </p>
                    <button className="bg-blue-800 text-white hover:bg-blue-700 py-4 px-8 rounded-4xl">
                        Enquire Now
                    </button>
                </div>

            </section>
        </div >
    )
}
