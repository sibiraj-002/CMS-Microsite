import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-[#7F3F97] flex flex-col lg:flex-row gap-4 text-white p-6 items-center justify-center">
      <div className="text-lg font-light">For more details contact:</div>
      <div className="flex gap-2 items-center justify-center">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/phone.svg" />
        <Link className="text-xl" href="tel:+919590245050">
          +91-9590245050
        </Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <img src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/envelope.svg" />
        <Link className="text-xl" href="mailto:esg@catalysts.org">
          esg@catalysts.org
        </Link>
      </div>
    </div>
  )
}
