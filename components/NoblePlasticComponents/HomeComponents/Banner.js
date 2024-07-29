import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="w-full bg-[#7F3F97]" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="p-8 flex flex-col justify-center items-center">
            <div data-aos="fade-right">
              <h1 className="text-[40px] text-white">Noble Plastics</h1>
              <p className="lg:text-[18px] text-white pt-8 text-lg">
                An eco-social initiative by the Catalyst Group that
                <br className="lg:flex hidden" />
                champions the effective use of plastic waste, while
                <br className="lg:flex hidden" />
                promoting the well-being of people and the planet.
              </p>
            </div>
          </div>
          <div className="p-0 lg:flex hidden" data-aos="fade-left">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/home-banner.png"
              alt="banner-img"
              className="object-cover bg-no-repeat w-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
