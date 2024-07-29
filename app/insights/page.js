"use client"
import Header from "@/components/Header/Header"
import { rightArrow } from "@/utils/icon"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Footer from "@/components/Footer/Footer"

const page = () => {
  const [activeTab, setActiveTab] = useState("Blog")
  const [insightsData, setInsightsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchData = async (pageNumber = 1) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=16&status=publish&page=${pageNumber}`
      )
      console.log("Fetched data:", response.data)

      if (response.data.length === 0) {
        console.log("No more posts to fetch")
        setHasMore(false)
      } else {
        const formattedData = response.data.map((item) => ({
          id: item.id,
          imageUrl: item._embedded["wp:featuredmedia"][0].source_url,
          category: item.categories.includes(1) ? "Blog" : "Blog", // Adjust based on actual categories
          title: item.title.rendered,
          slug: item.slug,
          desc: item.excerpt.rendered.replace(/<[^>]+>/g, ""), // Remove HTML tags
        }))
        setInsightsData((prevData) => [...prevData, ...formattedData])
        if (response.data.length < 10) {
          // Assuming 10 posts per page
          console.log("Less than 10 posts fetched, no more posts available")
          setHasMore(false)
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(page)
  }, [page])

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      <div className="bg-[url('/insights/banner.png')] h-[420px] md:h-[480px] bg-cover bg-center pt-5 pb-14">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Insights
          </h1>
        </div>
      </div>
      <div className="bg-cms-secondary-green">
        <div className="py-7 flex flex-col justify-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {insightsData.map((item) => {
              return (
                <li key={item.id} className="h-full">
                  <div className="w-full sm:w-auto flex flex-col gap-3 bg-white h-full">
                    <Image
                      src={item.imageUrl}
                      width={450}
                      height={260}
                      alt=""
                      className="flex-shrink-0 w-full sm:w-[450px] h-[260px]"
                    />

                    <p className="px-2">{item.category}</p>
                    <hr className="border-t border-gray-200" />

                    <div className="p-2 space-y-3 flex-grow flex flex-col">
                      <h1
                        className="text-lg text-cms-primary"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p className="text-lg text-[#1A1A1A] flex-grow">
                        {item.desc}
                      </p>
                      <Link
                        href={`insights/${item.slug}`}
                        className="underline text-lg text-cms-primary self-start flex items-center gap-2"
                      >
                        Learn more{" "}
                        <span className="text-sm text-[#1A1A1A]">
                          {rightArrow}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          {loading && (
            <div
              role="status"
              className="flex flex-col justify-center items-center py-12"
            >
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
              Loading...
            </div>
          )}
          {hasMore && !loading && (
            <button
              onClick={loadMore}
              className="mt-5 mx-auto px-4 py-2 bg-cms-primary text-white rounded"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
