import React from "react"

const EmpoweringChange = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full mb-12">
      <div className="bg-[url('/home/empoweringChange/banner.png')] bg-cover w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] flex items-center">
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 space-y-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
            Empowering <br className="hidden sm:block" /> Change Agents
          </h1>
          <div className="border-b border-cms-primary-green w-8" />
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
            We work with change agents to solve problems{" "}
            <br className="hidden sm:block" /> through strategic partnerships
            and advisory services. <br className="hidden sm:block" /> We
            understand their plans and pain points and work{" "}
            <br className="hidden sm:block" /> closely in co-solving, using CMS’
            three decades of <br className="hidden sm:block" /> experience,
            assets, and networks.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmpoweringChange
