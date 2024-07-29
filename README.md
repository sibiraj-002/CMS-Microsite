This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<nav className="" data-aos="fade-down">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-0">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            width={80}
            height={30}
            alt="logo"
            className="ps-2"
          />
        </Link>
        <div className="flex md:order-2">
          <div className="relative md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <div className="search-container relative me-1 w-12 h-12 bg-white border-4 border-white rounded-full p-1 transform transition-all duration-1000 ease-in-out hover:w-[200px] cursor-pointer group">
              <span className="search-icon absolute top-0 right-0 w-10 h-10 text-cms-primary flex items-center justify-center rounded-full text-2xl transition-all duration-1000 ease-in-out group-hover:bg-purple-700 group-hover:text-white">
                {searchIcon}
              </span>
              <input
                type="text"
                id="search-navbar"
                className="search-input border absolute top-0 left-0 w-full h-10 text-sm text-gray-900 rounded-full p-0 pl-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white hidden"
                placeholder="Search..."
              />
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:border-x-2 md:px-36 md:py-4`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0">
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={() => toggleDropdown(setDropdownAbout)}
                className="flex items-center justify-between w-full py-2 px-3 text-black md:p-0 md:w-auto"
              >
                About Us
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                    dropdownAbout ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownAbout ? "block" : "hidden"
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                  onClick={closeAllDropdowns}
                >
                  <li>
                    <Link
                      href="/about-us/vision"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/team"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/incubatees"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Incubatees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/partners"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/scale-accelerators"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              >
                Scale Accelerators
              </Link>
            </li>

            <li>
              <Link
                href="/domain-areas"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              >
                Domain Areas
              </Link>
            </li>

            <li>
              <Link
                href="/social-businesses"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              >
                Social Businesses
              </Link>
            </li>
            <li>
              <Link
                href="/collaborative-initiatives"
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0"
              >
                Collaborative Initiatives
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

{
/_ <Image
          src="/socialBusinesses/banner.png"
          width={1366}
          height={340}
          className="w-full"
        /> _/
}
{
/\_ <div className="search-container relative me-1 w-12 h-12 bg-white border-4 border-white rounded-full p-1 transform transition-all duration-1000 ease-in-out hover:w-[200px] cursor-pointer group">
<span className="search-icon absolute top-0 right-0 w-10 h-10 text-cms-primary flex items-center justify-center rounded-full text-2xl transition-all duration-1000 ease-in-out group-hover:bg-purple-700 group-hover:text-white">
{searchIcon}
</span>
<input
            type="text"
            id="search-navbar"
            className="search-input border absolute top-0 left-0 w-full h-10 text-sm text-gray-900 rounded-full p-0 pl-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white hidden"
            placeholder="Search..."
          />

</div> _/
}

{/\_ <div
className={`absolute ${
                      item.id % 2 === 0 ? '-left-16' : '-right-16'
                    } top-1/2 bottom-1/2 flex justify-center items-center shadow bg-white`} >
<Image src={item.logoUrl} width={125} height={30} alt="" />

</div> _/}

<div className="max-w-screen-xl mx-auto hidden md:flex justify-end w-full py-3">
        <ul className="flex items-center md:space-x-8">
          <li>
            <Link
              href="/insights"
              className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
            >
              Insights
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
            >
              Contact Us
            </Link>
          </li>
          {/* <div className="search-container relative me-1 w-10 h-10 rounded-full p-1 transform transition-all duration-1000 ease-in-out hover:w-[200px] cursor-pointer group">
            <span className="search-icon absolute top-0 right-0 w-10 h-10 text-white flex items-center justify-center rounded-full text-2xl transition-all duration-1000 ease-in-out group-hover:bg-purple-700 group-hover:text-white">
              {searchIcon}
            </span>
            <input
              type="text"
              id="search-navbar"
              className="search-input border absolute top-0 left-0 w-full h-10 text-sm text-gray-900 rounded-full p-0 pl-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white hidden"
              placeholder="Search..."
            />
          </div> */}
        </ul>
      </div>
