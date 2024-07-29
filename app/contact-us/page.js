"use client"

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image"
import React, { useState } from "react"

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }
  return (
    <>
      <div className="bg-[url('/contactUs/banner.png')] h-[420px] md:h-[480px] bg-cover bg-center pt-5 pb-14">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px]">
        <div className="bg-cms-primary w-full lg:w-1/2 flex flex-col text-white py-12 lg:py-24 px-6 lg:px-20">
          <h3 className="text-xl lg:text-2xl font-semibold">Head Office</h3>
          <p className="text-base lg:text-lg mt-4">
            Catalyst Management Services Pvt. Ltd.,
          </p>

          <p className="text-base lg:text-lg mt-8">
            Catalyst Management Services Pvt. Ltd., #25, 4th Floor, AECS Layout,
            RMV 2nd Stage, Ashwathnagar, Bangalore – 560 094
          </p>
          {/* <p className="text-base lg:text-lg mt-5">
            Email: contactus@catalysts.org
          </p>
          <p className="text-base lg:text-lg">Phone: 0123456789</p> */}
        </div>

        <div className="bg-cms-secondary-green w-full lg:w-1/2 flex flex-col text-white py-12 lg:py-24 px-6 lg:px-20">
          <h3 className="text-xl lg:text-2xl font-semibold text-cms-primary">
            Leave us a message <br /> and we’ll get in touch with you
          </h3>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mt-8 lg:mt-10 text-black"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              />
            </div>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 mt-2"
              />
              <label className="text-base lg:text-lg text-[#404040]">
                I consent to having this website store my submitted information
                so they can respond to my enquiry.
                <br />
                See our privacy policy to learn more about how we use data.
              </label>
            </div>
            <button
              type="submit"
              className="px-6 lg:px-10 py-2 lg:py-3 border border-[#646464] text-[#404040] rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
