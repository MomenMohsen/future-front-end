import Mark from "../icons/mark";
import { Link } from "react-router-dom";
export default function PriceCardCustom({
  name = "no-name",
  price = "no-price",
  currency = "$",
  descript = "no-descript",
  modules = [
    "25 products",
    "Up to 10,000 subscribers",
    "Advanced analytics",
    "24-hour support response time",
  ],
  path = "/pricing-config",
  button = "Get started today",
}) {
  return (
    <>
      <div
        className="col-span-1 rounded-3xl bg-white p-8
             ring-1 ring-white/10
             border border-[#1e40af]
             transition-all duration-300 ease-in-out
             hover:z-10 hover:scale-105
             hover:shadow-2xl
             sm:p-10
             lg:col-span-3"
      >
        <div
          className="flex flex-col gap-8
               lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="lg:max-w-sm">
            <h3 className="text-base/7 font-semibold text-gray-900">{name}</h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">
                {currency + price}
              </span>

              <span className="text-base text-gray-400">/month</span>
            </p>

            <p className="mt-6 text-base/7 text-gray-600">{descript}</p>
          </div>

          <ul
            className="grid grid-cols-1 gap-3 text-sm/6
                 sm:grid-cols-2 lg:flex-1 lg:max-w-2xl"
          >
            {modules.map((module, index) => (
              <li key={index} className="flex gap-x-3">
                <Mark />
                {module}
              </li>
            ))}
          </ul>
          <Link to={path}>
            <button
              className="rounded-md bg-[#1e40af] px-6 py-3
                 text-center text-sm font-semibold text-white
                 transition-colors duration-200
                 hover:bg-indigo-400
                 lg:shrink-0"
            >
              {button}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
