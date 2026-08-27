import Mark from "../icons/mark";
import { Link } from "react-router-dom";
export default function PriceCardCustom({
  name = "no-name",
  modules = [
    "25 products",
    "Up to 10,000 subscribers",
    "Advanced analytics",
    "24-hour support response time",
  ],
  modules2 = [
    "25 products",
    "Up to 10,000 subscribers",
    "Advanced analytics",
    "24-hour support response time",
  ],
  path = "/contact",
  button = "Contact with sales",
}) {
  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="
            rounded-3xl bg-white p-8
            ring-1 ring-white/10
            border border-[#1e40af]
            transition-all duration-300 ease-in-out
            hover:z-10 hover:scale-105
            hover:shadow-2xl
            sm:p-10
            lg:col-span-3
             "
      >
        <div
          className="
          sm:flex lg:items-center lg:justify-between relative "
        >
          <h3 className="text-xl font-semibold text-white bg-[#1e40af] p-2 rounded w-50 text-center absolute -top-15">
            {name}
          </h3>

          <ul
            className="grid grid-cols-1
                 sm:grid-cols-1 text-sm/6"
          >
            {modules.map((module, index) => (
              <li key={index} className="flex gap-x-3">
                <Mark color="text-yellow-500" />
                {module}
              </li>
            ))}
            {modules2.map((module, index) => (
              <li key={index} className="flex gap-x-3 px-5">
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
                 lg:shrink-0 w-60 my-5"
            >
              {button}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
