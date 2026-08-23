import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [appsOpen, setAppsOpen] = useState(false);

  return (
    <>
      <nav className="h-[70px] border-b border-gray-100 bg-white flex sticky top-0 z-10">
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-3 items-center px-8 w-full">
          {/* Logo */}
          <div>
            <Link to="/">
              <button className="text-[24px] font-bold text-[#1e40af]">
                odoo
              </button>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-9">
            {/* Apps */}
            <button
              type="button"
              onClick={() => setAppsOpen(!appsOpen)}
              className="text-sm font-semibold text-gray-700"
            >
              <span>Apps</span>
            </button>

            <button className="text-sm font-semibold text-gray-700">
              Industries
            </button>

            <button href="#" className="text-sm font-semibold text-gray-700">
              Community
            </button>

            <Link to="/pricing">
              <button className="text-sm font-semibold text-gray-700">
                Pricing
              </button>
            </Link>
            <Link to="/help">
            <button className="text-sm font-semibold text-gray-700">
              Help
            </button>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex justify-end items-center gap-5">
            <button className="text-sm font-semibold text-gray-700">
              Sign in
            </button>

            <a
              href="#"
              className="rounded-md bg-[#1e40af] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Try it free
            </a>
          </div>
        </div>

        {/* Apps Popover */}
        {appsOpen && (
          <div
            className="
              absolute top-[70px] left-0 right-0
              w-full
              bg-gray-800
              text-sm/6
              shadow-lg
            "
          >
            <div className="mx-auto max-w-[1400px] flex overflow-hidden">
              {/* Column 1 */}
              <div className="p-10 px-10 group w-[300px]">
                <div className="group relative flex py-5 border-b-4 border-b-gray-700">
                  <p className="font-semibold text-white text-xl">Title 1</p>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 1
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 2
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 3
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 4
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div className="p-10 px-10 group w-[300px]">
                <div className="group relative flex py-5 border-b-4 border-b-gray-700">
                  <p className="font-semibold text-white text-xl">Title 2</p>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 1
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 2
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 3
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 4
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 5
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 6
                  </a>
                </div>
              </div>

              {/* Column 3 */}
              <div className="p-10 px-10 group w-[300px]">
                <div className="group relative flex py-5 border-b-4 border-b-gray-700">
                  <p className="font-semibold text-white text-xl">Title 3</p>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 1
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 2
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 3
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 4
                  </a>
                </div>
              </div>

              {/* Column 4 */}
              <div className="p-10 px-10 group w-[300px]">
                <div className="group relative flex py-5 border-b-4 border-b-gray-700">
                  <p className="font-semibold text-white text-xl">Title 4</p>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 1
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 2
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 3
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 4
                  </a>
                </div>
              </div>

              {/* Column 5 */}
              <div className="p-10 px-10 group w-[300px]">
                <div className="group relative flex py-5 border-b-4 border-b-gray-700">
                  <p className="font-semibold text-white text-xl">Title 5</p>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 1
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 2
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 3
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 4
                  </a>
                </div>

                <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-white/5">
                  <a href="#" className="font-semibold text-white">
                    Testing 5
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
