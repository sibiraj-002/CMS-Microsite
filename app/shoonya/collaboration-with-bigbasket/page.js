'use client'
import React, { useRef, useEffect } from 'react'
import BigBasketContent from '../../../components/BigBasketComponent/BigBasketContent'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Page() {
  const title = 'Collaboration With Bigbasket - CMS.ORG.IN'
  const desc =
    'Shoonya &#038; bigbasket initiative Growing Green Together Shoonya NetZero: Transforming Tomorrow, One Tree at a Time Welcome to the heart of sustainability at CMS – the Shoonya Initiative. In collaboration with bigbasket, we are excited to share how every star you redeem contributes to our mission of a greener and more sustainable future.'
  const image =
    'https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/health-care.png'

  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease',
    })
  })

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link
          rel="canonical"
          href="https://cms.org.in/shoonya/collab-orationwith-bigbasket/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://cms.org.in/shoonya/collab-orationwith-bigbasket/"
        />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      {/* <Banner /> */}
      {/* <Shoonya /> */}
      <BigBasketContent />
      {/* <AccordionPage /> */}
      {/* <Accordion /> */}
    </>
  )
}
