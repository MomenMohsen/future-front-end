import Mark from "../icons/mark";
import { Link } from "react-router-dom";
export default function PriceCard({
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
  button = "Buy now",
  button2 = "Start free trial",
  tag,
}) {
  return (
    <>
      <div
        className="h-full flex flex-col
         rounded-3xl bg-white p-8
         ring-1 ring-white/10
         border border-[#1e40af]
         transition-all duration-300 ease-in-out
         hover:z-10 hover:scale-105
         hover:shadow-2xl
         sm:p-10 relative"
      >
        {tag ? (
          <div class="mb-4 inline-block self-start rounded-full bg-[#1e40af] px-10 py-3 font-semibold whitespace-nowrap text-white shadow-md absolute -top-5 text-md">
            {tag}
          </div>
        ) : (
          ""
        )}

        <h3 className="text-xl font-bold text-white text-center bg-[#1e40af] rounded p-2">{name}</h3>

        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight text-gray-900">
            {currency + price}
          </span>

          <span className="text-base text-gray-400">/month</span>
        </p>

        <p className="mt-6 text-base/7 text-gray-600">{descript}</p>

        <ul className="mt-8 space-y-3 text-sm/6 sm:mt-10 mb-10 pb-20">
          {modules.map((module, index) => (
            <li key={index} className="flex gap-x-3">
              <Mark />
              {module}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-10">
          <Link to={path}>
            <button
              className="mt-auto block rounded-md bg-[#1e40af] px-3.5 py-2.5
            text-center text-sm font-semibold text-white
            transition-colors duration-200
            hover:bg-indigo-400 w-70"
            >
              {button}
            </button>
            <button
              className="mt-2 block rounded-md bg-gray-500 px-3.5 py-2.5
            text-center text-sm font-semibold text-white
            transition-colors duration-200
            hover:bg-gray-400 w-70"
            >
              {button2}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
