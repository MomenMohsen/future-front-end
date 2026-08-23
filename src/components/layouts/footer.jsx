import Logo from "../../assets/images/Logo.svg";
export default function Footer() {
  return (
    <>
      <footer class="bg-[#242631] text-white">
        <div class="mx-auto max-w-[1400px] px-8 py-12">
          <div class="mb-12 flex justify-center">
            <a href="#" class="text-4xl font-medium tracking-[-2px]">
                <img src={Logo} alt="Logo" width="150px" />
            </a>
          </div>

          <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div class="mb-7">
                <h3 class="mb-3 text-xl font-semibold">Community</h3>

                <ul class="space-y-1 text-[15px] text-gray-300">
                  <li>
                    <a href="#" class="hover:text-white">
                      Tutorials
                    </a>
                  </li>

                  <li>
                    <a href="#" class="hover:text-white">
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a href="#" class="hover:text-white">
                      Forum
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="mb-3 text-xl font-semibold">Open Source</h3>

                <ul class="space-y-1 text-[15px] text-gray-300">
                  <li>
                    <a href="#" class="hover:text-white">
                      Download
                    </a>
                  </li>

                  <li>
                    <a href="#" class="hover:text-white">
                      Github
                    </a>
                  </li>

                  <li>
                    <a href="#" class="hover:text-white">
                      Runbot
                    </a>
                  </li>

                  <li>
                    <a href="#" class="hover:text-white">
                      Translations
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">Services</h3>

              <ul class="space-y-1 text-[15px] text-gray-300">
                <li>
                  <a href="#" class="hover:text-white">
                    cloud
                  </a>
                </li>

                <li class="pt-3">
                  <a href="#" class="hover:text-white">
                    Support
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Upgrade
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Custom Developments
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Education
                  </a>
                </li>

                <li class="pt-3">
                  <a href="#" class="hover:text-white">
                    Find an Accountant
                  </a>
                </li>

                <li class="pt-3">
                  <a href="#" class="hover:text-white">
                    Find a Partner
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Become a Partner
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="mb-3 text-xl font-semibold">About us</h3>

              <ul class="space-y-1 text-[15px] text-gray-300">
                <li>
                  <a href="#" class="hover:text-white">
                    Our company
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Brand Assets
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Contact us
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Jobs
                  </a>
                </li>

                <li class="pt-3">
                  <a href="#" class="hover:text-white">
                    Events
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Podcast
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Customers
                  </a>
                </li>

                <li class="pt-3">
                  <a href="#" class="hover:text-white">
                    Legal • Privacy
                  </a>
                </li>

                <li>
                  <a href="#" class="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <button class="flex items-center gap-2 text-sm font-medium text-gray-300">
                <span>🇺🇸</span>
                <span>English</span>
                <span class="text-xs">▼</span>
              </button>

              <div class="my-7 h-px bg-gray-500/60"></div>

              <div class="space-y-4 text-[15px] leading-[1.45] text-gray-300">
                <p>
                  future is a suite of open source business apps that cover all
                  your company needs: CRM, eCommerce, accounting, inventory,
                  point of sale, project management, etc.
                </p>

                <p>
                  future's unique value proposition is to be at the same time very
                  easy to use and fully integrated.
                </p>
              </div>

              <div class="mt-7 flex items-center gap-6 text-gray-300">
                <a href="#" class="hover:text-white">
                  f
                </a>

                <a href="#" class="hover:text-white">
                  𝕏
                </a>

                <a href="#" class="hover:text-white">
                  in
                </a>

                <a href="#" class="hover:text-white">
                  ◉
                </a>

                <a href="#" class="hover:text-white">
                  ◎
                </a>

                <a href="#" class="hover:text-white">
                  ♪
                </a>

                <a href="#" class="hover:text-white">
                  ☎
                </a>

                <a href="#" class="hover:text-white">
                  ◉
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#181a22] py-5">
          <div class="flex items-center justify-center gap-2 text-sm text-gray-300">
            <span>Website made with</span>

            <span class="text-xl font-medium text-white">futur</span>
          </div>
        </div>
      </footer>
    </>
  );
}
