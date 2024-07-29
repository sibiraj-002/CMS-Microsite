'use client'
import React, { useRef } from 'react'
import Header from '../../components/BusinessCatalyst/Header'
import Footer from '../../components/BusinessCatalyst/Footer'
import BusinessContact from '../../components/BusinessCatalyst/BusinessContact'

export default function page() {
  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  const title = 'E-Commerce-Contact - CMS.ORG.IN'
  const desc =
    'Through Business Catalyst, we partner with MSMEs to address their challenges regarding growth and profitability by following a 4A delivery model of Advisory, Adoption, Access and Adherance'
  const image =
    'https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/business-catalyst/business-catalysts-banner.png'

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link
          rel="canonical"
          href="https://cms.org.in/business-catalyst-contact/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://cms.org.in/business-catalyst-contact/"
        />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <Header onClick={scrollToSection1} />
      <BusinessContact />
      <Footer />
    </>
  )
}
