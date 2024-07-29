import CurrentPath from "@/components/CurrentPath/CurrentPath"
import Header from "@/components/Header/Header"
import EmpoweringChange from "@/components/Home/EmpoweringChange/EmpoweringChange"
import FocusArea from "@/components/Home/FocusArea/FocusArea"
import Impact from "@/components/Home/Impact/Impact"
import Solutions from "@/components/Home/Solutions/Solutions"
import HomePartners from "@/components/Home/HomePartners/HomePartners"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
      <div className="bg-[url('/home/banner.png')] h-[420px] md:[720px] bg-center bg-cover md:py-5 sm:h-[500px] md:h-[600px] lg:h-[720px]">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Scaling Impact for a <br className="hidden sm:block" /> Sustainable
            Future
          </h1>
        </div>
      </div>

      {/* <CurrentPath /> */}

      <div className="py-5 md:py-12">
        <div className="text-center md:mb-5 px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-cms-primary-black text-base sm:text-lg md:text-xl">
            We are a social investment catalyst that partners with change agents
            to solve <br className="hidden sm:block" /> complex societal
            problems, leveraging our 30 years of experience and resources.{" "}
            <br className="hidden sm:block" /> We are committed to transforming
            social enterprises and impactful initiatives{" "}
            <br className="hidden sm:block" /> aligned with Sustainable
            Development Goals.
          </h2>
        </div>
      </div>

      <EmpoweringChange />
      <Solutions />
      <Impact />
      <FocusArea />
      {/* <HomePartners /> */}

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}
