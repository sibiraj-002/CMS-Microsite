'use client'

import Header from '@/components/Header/Header'
import { insightsTabs } from '@/utils/data'
import { rightArrow } from '@/utils/icon'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Page = ({ params }) => {
  const [insightsData, setInsightsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
        )
        console.log(response.data)

        const formattedData = response.data.map((item) => ({
          id: item.id,
          imageUrl: item._embedded['wp:featuredmedia'][0].source_url,
          category: item.categories.includes(1) ? 'Blog' : 'Blog', // Adjust based on actual categories
          title: item.title.rendered,
          content: item.content.rendered,
          desc: item.excerpt.rendered.replace(/<[^>]+>/g, ''), // Remove HTML tags
        }))

        setInsightsData(formattedData) // No need to append, just set the data directly
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [params.slug])

  return (
    <>
      {insightsData.map((item) => {
        return (
          <>
            <div
              className={`h-[420px] md:h-[480px] bg-cover bg-center pt-5 pb-14`}
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            >
              <Header />

              <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            </div>
            <div className="">
              <div className="w-10/12 mx-auto py-12">
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Page
