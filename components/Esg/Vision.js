import React from 'react'

export default function Home() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center w-10/12 pb-12">
      <div data-aos="zoom-in " className="hidden lg:block">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/vision.png" />
      </div>
      <div data-aos="zoom-in" className="lg:hidden">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/vision-mobile.png" />
      </div>
      <div className="text-center lg:w-7/12 py-12">
        <h2
          className="text-ce-purple lg:text-3xl py-6 text-xl"
          data-aos="fade-down"
        >
          Collaborative Efforts for Scalable Impact
        </h2>
        <p className="text-lg font-regular" data-aos="fade-up">
          Our strategy emphasises collaboration with a diverse network of
          stakeholders, including brands, MSMEs, industry associations, and
          governmental bodies. We work together to implement sustainable
          solutions that are impactful, scalable, and beneficial to all parties
          involved.
        </p>
      </div>
      <div className="w-10/12 py-8 hidden lg:block" data-aos="fade-down">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/scalable.png" />
      </div>
      <div className="w-10/12 py-8 lg:hidden" data-aos="fade-down">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/scalable-mobile.png" />
      </div>
      <div className="w-12/12 py-8 lg:hidden" data-aos="fade-down">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/well-being-mobil.png" />
      </div>

      <div className="w-12/12 hidden lg:block" data-aos="fade-up">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/well-being.png" />
      </div>
    </div>
  )
}
