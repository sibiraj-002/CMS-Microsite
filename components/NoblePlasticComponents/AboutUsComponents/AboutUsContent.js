import React from 'react'

const AboutUsContent = () => {
    return (
        <>
            <div className="flex justify-center py-10">
                <div className="lg:w-[1140px] w-full lg:p-0 px-4 flex flex-col justify-center items-center">
                    <h1 className="lg:text-[40px] text-[30px] text-[#7F3F97]">
                        Our Journey
                    </h1>
                    <p className="lg:text-[18px] mt-4 leading-6 text-center">
                        We-Noble Plastics-were incepted as an eco-social initiative by the Catalyst Group which champions the <br className='lg:flex hidden' />
                        effective use of plastic waste, while promoting the well-being of people and the planet.
                    </p>

                    <div className='grid lg:grid-cols-12 grid-cols-1 py-10 lg:gap-10 gap-4 '>
                        <div className='lg:col-span-7 col-span-6 lg:order-1 order-2'>
                            <p className="lg:text-[18px] leading-6">
                                Piloted in 2018 along with apparel sector in India, our core business is to repurpose and recycle apparel plastics, including used hangers, sizers, plaques and other plastics from corporations in the apparel industry, and ensure that they enter the apparel space again. Our operations are currently spread out across two major sites in India—Delhi and Bengaluru
                            </p>
                            <p className="lg:text-[18px] mt-4 leading-6">
                                The repurposing of hangers is undertaken mainly by women and members of marginalised communities, who are hired, trained and empowered to work by our organisation. Recycling of hangers and other plastics is handled by our partner recycling organisations, which ensures that the plastics we work with are handled safely throughout the process.
                            </p>
                            <p className="lg:text-[18px] mt-4 leading-6">
                                Noble Plastics also works with partners to convert non-recyclable plastics into oil via pyrolysis. We aim to pyrolyse 1,000 tonnes of plastics and channel them into more productive uses over the next 2 years.
                            </p>
                            <p className="lg:text-[18px] mt-4 leading-6">
                                We also measure the carbon footprint that our operations generate and plant an equivalent number of trees to ensure carbon neutrality.
                            </p>
                        </div>

                        <div className='lg:col-span-5 col-span-6 flex justify-center items-center lg:order-2 order-1'>
                            <img src='https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/about/our-journey.png' className='w-[80%] lg:w-[90%]' />
                        </div>
                    </div>

                    <p className="lg:text-[40px] text-[30px] text-[#7F3F97]">
                        <span className='text-[#05AC8D]'> Mission </span> & Vision
                    </p>

                    <div className='grid lg:grid-cols-12 grid-cols-1 py-3'>
                        <div className='col-span-6 flex flex-col gap-8 bg-[#05AC8D] p-6'>
                            <p className="lg:text-[18px] text-white leading-6">
                                At Noble Plastics, we aim to achieve 10,000 tonne reduction in plastics entering landfills & waterways by 2025. We hope to accomplish this through partnership with private companies and emerging social enterprises, and propelling them forward with:
                            </p>
                            <p className="lg:text-[18px] text-white leading-6 border-b border-dashed border-black">
                                Their circular economy commitments and zero waste targets
                            </p>
                            <p className="lg:text-[18px] text-white leading-6 border-b border-dashed border-black">
                                Access to people and skills required to achieve circularity
                            </p>
                            <p className="lg:text-[18px] text-white leading-6">
                                Partnership development through good practices, good deeds, and blossoming outcomes for people and the planet
                            </p>
                        </div>
                        <div className='col-span-6 bg-[#7F3F97] p-6 flex flex-col gap-8'>
                            <p className="lg:text-[18px] text-white leading-6">
                                Our ongoing success with hanger repurposing has also inspired us to experiment with the recycling of dead-end plastics in our Pyrolysis project, which focuses on the conversion of dead-end, non-recyclable plastics into oil for energy generation.
                            </p>
                            <p className="lg:text-[18px] text-white leading-6">
                                Noble Plastics intends to expand beyond the apparel industry, integrating sustainability and social responsibility into supply chains in a variety of industries.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsContent
