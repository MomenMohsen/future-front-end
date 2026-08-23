export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-800">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-400">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white">
                Data to enrichYour Entire Business, Unified in
                <span className="bg-blue-900 text-white p-0.5 rounded-lg">
                  One Platform
                </span>
                .
              </h1>
              <h5 className="mx-auto max-w-7xl font-display text-3xl font-medium tracking-tight text-gray-300">
                <span className="inline-block">
                  Drive High Efficiency and Lower Operational
                  <span className="relative whitespace-nowrap">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                      preserveAspectRatio="none"
                    >
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="relative">Costs with Ease.</span>
                  </span>
                </span>
              </h5>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get Start now - It's free
                </a>
                <a
                  href="#"
                  className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-dark shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                  Meet an advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deploy faster */}
      <div className="overflow-hidden bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-400">
                  Deploy faster
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      >
                        <path
                          d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        />
                      </svg>
                      Push to deploy.
                    </dt>
                    <dd className="inline">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      >
                        <path
                          d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        />
                      </svg>
                      SSL certificates.
                    </dt>
                    <dd className="inline">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      >
                        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                        <path
                          d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        />
                      </svg>
                      Database backups.
                    </dt>
                    <dd className="inline">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              width="2432"
              height="1442"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:ml-0"
            />
          </div>
        </div>
      </div>
      {/* Discover the power ofcreative inspiration online */}
      <div className="bg-gray-800">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-12 md:py-16">
          <h1 className="text-3xl leading-[52px] font-semibold md:text-4xl  text-white">
            Discover the power of
            <span className="bg-blue-900 text-white p-0.5 rounded-lg">
              creative inspiration
            </span>{" "}
            online
            <br />
            <div className="sm:mt-2">
              <span className="underline decoration-blue-900 underline-offset-4">
                Explore a world of design possibilities
              </span>
            </div>
          </h1>
          <p className="mt-4 text-lg font-medium  text-gray-300 md:text-sm">
            Unleash your creativity with access to a vast collection of website
            screenshots, code snippets, and more at UI Shots.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <a href="/pages">
              <button className="text-md rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 px-4 py-[10px] font-semibold text-white hover:bg-gradient-to-tl hover:from-blue-900 hover:to-blue-700 ">
                <div className="flex items-center justify-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                    </svg>
                  </div>
                  Browse Inspiration | 1000+
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Winding Mountain Road */}
      <div className="bg-[#212e40] rounded-tl-[40vw] relative flex flex-col items-center lg:flex-row-reverse">
        <div className="w-full h-64 lg:w-1/2 lg:h-150">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://picsum.photos/id/1018/2000"
            alt="Winding mountain road"
          />
        </div>

        <div className="rounded-lg max-w-lg bg-gray-800 md:max-w-2xl md:z-2 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-100">
          <div className="flex flex-col p-12">
            <h2 className="text-2xl font-medium uppercase text-white lg:text-4xl">
              Winding Mountain Road
            </h2>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-[#1e40af] border-solid py-4 px-10 hover:bg-[#173083] hover:shadow-md md:w-48 rounded-lg"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome toXYZ */}
      <div className="bg-[#212e40] px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-200 sm:mt-6">
          Welcome to
          <span className="border-b border-dotted border-slate-300">XYZ</span>
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
          <span className="inline-block">
            Your
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Personal</span>
            </span>
          </span>
          <span className="inline-block">App Store</span>
        </h1>

        <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-200 sm:mt-6">
          <span className="inline-block">
            Bring functionalities of other apps
          </span>
          <span className="inline-block">into your Notion workspaces.</span>
        </p>
      </div>
      {/* Testimonials */}
      <div className="bg-linear-to-t from-gray-800 to-[#212e40] px-50 py-24 sm:py-32 ">
        <div className="bg-gray-800 grid grid-cols-1 gap-15 md:grid-cols-3">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-video rounded-lg object-cover"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <h3
                  id="TeamMember1Name"
                  className="text-lg/tight font-semibold text-gray-900 dark:text-white"
                >
                  Eric Johnson
                </h3>

                <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
                  Product Designer
                </p>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[#0072b1] transition-opacity hover:opacity-90 dark:text-white"
                aria-labelledby="TeamMember1Name LinkedInLabel1"
              >
                <span id="LinkedInLabel1" className="sr-only">
                  LinkedIn
                </span>

                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-7"
                  aria-hidden="true"
                >
                  <path
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-video rounded-lg object-cover"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <h3
                  id="TeamMember2Name"
                  className="text-lg/tight font-semibold text-gray-900 dark:text-white"
                >
                  Eric Johnson
                </h3>

                <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
                  Product Designer
                </p>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[#0072b1] transition-opacity hover:opacity-90 dark:text-white"
                aria-labelledby="TeamMember2Name LinkedInLabel2"
              >
                <span id="LinkedInLabel2" className="sr-only">
                  LinkedIn
                </span>

                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-7"
                  aria-hidden="true"
                >
                  <path
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-video rounded-lg object-cover"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <h3
                  id="TeamMember3Name"
                  className="text-lg/tight font-semibold text-gray-900 dark:text-white"
                >
                  Eric Johnson
                </h3>

                <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
                  Product Designer
                </p>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[#0072b1] transition-opacity hover:opacity-90 dark:text-white"
                aria-labelledby="TeamMember3Name LinkedInLabel3"
              >
                <span id="LinkedInLabel3" className="sr-only">
                  LinkedIn
                </span>

                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-7"
                  aria-hidden="true"
                >
                  <path
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Want to partner with design experts in SaaS? */}
      <div className="bg-linear-to-b from-gray-800 to-[#242631] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-clip bg-gray-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-3xl translate-x-3/4 rounded-full bg-pink-500/60 blur-[10rem] lg:-top-[40rem] lg:left-1/2 lg:-translate-x-1/2"
            ></div>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-start">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Want to partner with design experts in SaaS?
              </h2>
              <p className="mt-6 text-base text-gray-300">
                We're excited to talk to you about your project requirements and
                business goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule a call
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Send an email
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 lg:h-auto">
              <img
                width="1920"
                height="1139"
                className="absolute left-0 top-0 w-[58rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 lg:top-14"
                src="https://htmlwind.com/assets/images/dark-dashboard-screenshot.webp"
                alt="dashboard screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
