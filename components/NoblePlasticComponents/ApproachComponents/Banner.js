import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/approach/approach-banner.png')] bg-[#7F3F97] lg:min-h-[480px] bg-center bg-cover bg-no-repeat flex justify-center">
                <div className='lg:w-[1140px] w-full p-0 flex flex-col justify-center items-center'>
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='lg:col-span-5 lg:pr-6 col-span-6 lg:order-1 order-2 flex flex-col justify-center lg:p-0 p-5'>
                            <h1 className="lg:text-[40px] text-[30px] text-white leading-10">
                                The Noble Plastics Approach
                            </h1>
                            <p className="lg:text-[18px] mt-4 leading-6 text-white">
                                The Noble Plastics Approach Successful action stems from innovative approaches, and Noble Plastics is a proof of that. We work to provide practical solutions that are backed by quantifiable results.
                            </p>
                        </div>

                        <div className='lg:col-span-7 col-span-6 lg:order-2 order-1'>
                            <img src='https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/approach/approach-mobile-banner.png' className='lg:hidden flex' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner
