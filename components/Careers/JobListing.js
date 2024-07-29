import Link from "next/link"
import React from "react"

const JobListing = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((job) => (
        <div
          key={job.id}
          className="flex flex-col md:flex-row bg-white shadow-lg m-4 w-full md:w-5/6 lg:w-3/4"
        >
          <div
            className={`${job.bgColor} text-white p-6 w-full md:w-1/3 relative`}
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[10px] border-l-current"></div>
          </div>
          <div className="flex px-8 py-10 flex-col gap-4 w-full md:w-2/3">
            <div className="flex flex-wrap">
              {job.points.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start space-y-2 w-full md:w-1/3 p-2"
                >
                  <div className="w-7 border-b-2 border-cms-primary-green" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <Link href={job.link} target="_blank">
              <button className="mt-4 px-4 py-2 self-start border border-cms-primary text-cms-primary hover:bg-purple-100">
                More Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobListing
