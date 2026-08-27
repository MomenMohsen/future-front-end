import { useState } from "react";
import { Link, useParams } from "react-router-dom";
let data_1 = {
  name: "الباقة الأساسية",
  price: "70.50",
  currency: "ر.س",
  descript: "Perfect for small businesses and startups",
  modules: [
    "Clients",
    "Suppliers",
    "Sales",
    "Purchases",
    "Warehousing",
    "Financial Management",
  ],
};
let data_2 = {
  name: "الباقة القياسية",
  price: "120",
  currency: "ر.س",
  descript: "Perfect for small businesses and startups",
  modules: [
    "CRM",
    "Sales",
    "POS",
    "Purchases",
    "Warehousing",
    "Fixed Assets",
    "Financial Management",
    "HR",
    "Project Manager",
    "Manufacturing",
    "Reports & Analytics",
  ],
};
let data_3 = {
  name: "الباقة المؤسسية",
  price: "189.95",
  currency: "ر.س",
  descript: "Perfect for small businesses and startups",
  modules: [
    "CRM",
    "Sales",
    "POS",
    "Purchases",
    "Warehousing",
    "Fixed Assets",
    "Financial Management",
    "HR",
    "Project Manager",
    "Manufacturing",
    "Reports & Analytics",
    "e-commerce",
    "Maintenance",
  ],
  successpack: true,
};

export default function PriceConfig() {
  const [service, setService] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [isYearly, setIsYearly] = useState(true);

  const [selectedModules, setSelectedModules] = useState([]);
  const basePrice = 0;
  const handleModuleChange = (e) => {
    const value = Number(e.target.value);

    if (e.target.checked) {
      setSelectedModules((prev) => [...prev, value]);
    } else {
      setSelectedModules((prev) => prev.filter((item) => item !== value));
    }
  };

  const totalPrice =
    basePrice + selectedModules.reduce((total, value) => total + value, 0);

  const { id } = useParams();
  const data = {
    1: data_1,
    2: data_2,
    3: data_3,
  }[id];
  const priceInYear = (data.price * 12).toFixed(2);
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 font-sans text-gray-800 pt-12 pb-24">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-12">
          <Link to="/pricing">
            <button className="absolute left-0 p-3 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </Link>
          <h1 className="text-3xl tracking-wide">
            <span className="text-[#1e40af] font-semibold">{data.name}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2 space-y-8">
            {/* Number of users */}
            <div className="flex items-center gap-4">
              <label className="text-lg font-medium text-gray-700">
                Number of users
              </label>

              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-24 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-center text-gray-700"
              />
            </div>

            {/* Hosting Type */}

            {/* Implementation Service */}

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-700">
                Implementation Service
              </h2>

              {/* Self Service */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="service"
                  value="self_service"
                  checked={service === "self_service"}
                  onChange={(e) => setService(e.target.value)}
                  className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                />

                <span className="text-gray-700">Self Service</span>
              </label>

              {/* Success Pack */}
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="service"
                    value="success_pack"
                    checked={service === "success_pack"}
                    onChange={(e) => setService(e.target.value)}
                    className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                  />

                  <span className="text-gray-700">
                    Future Advisory Service (subject to service hours)
                  </span>
                </label>

                {/* Success Pack Box */}
                {service === "success_pack" && (
                  <div
                    id="successBox"
                    className="ml-7 p-4 bg-[#e6f4f8] border border-[#cbe7f0] rounded-lg space-y-4"
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Through the "Future" consulting package, an expert is
                      assigned to provide training and guidance, helping you
                      implement your system and configure workflows as part of
                      the initial rollout. This service covers a specific number
                      of hours—determined by the chosen package—and remains
                      valid for a full year.
                    </p>

                    <div className="flex items-center justify-end gap-2 pt-1">
                      {/* Configure */}
                      <button
                        type="button"
                        onClick={() => setShowDialog(true)}
                        className="px-4 py-2 bg-white text-sm font-medium rounded border border-gray-200 transition hover:bg-[#1e40af] hover:text-white"
                      >
                        Service Customization
                      </button>

                      {/* Read More */}
                      <a
                        href="pricing-packs.html"
                        className="px-4 py-2 bg-white text-sm font-medium rounded border border-gray-200 transition hover:bg-[#1e40af] hover:text-white"
                      >
                        Service Schedule
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {data.successpack === true ? (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-700">
                  Hosting Type
                </h2>

                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hosting"
                      value="cloud"
                      defaultChecked
                      className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                    />
                    <span className="text-gray-700">
                      Standard Cloud Hosting - Free
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hosting"
                      value="self"
                      className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                    />
                    <span className="text-gray-500">Self Hosting - Free</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hosting"
                      value="cloud-platform"
                      className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                    />
                    <span className="text-gray-500">Cloud Platform</span>
                  </label>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm space-y-6">
              {/* Yearly / Monthly */}
              <div className="flex items-center justify-center gap-3 border-b border-gray-100 pb-4 text-sm font-medium">
                <span className="text-gray-700">Monthly</span>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isYearly}
                    onChange={(e) => setIsYearly(e.target.checked)}
                    className="sr-only peer"
                  />

                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1e40af]" />
                </label>

                <span className="text-gray-700">Yearly</span>
              </div>

              {/* Price */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-gray-700">
                  <span>
                    <strong className="text-[#1e40af]">1</strong> Users,{" "}
                    <strong className="text-[#1e40af]">
                      {data.modules?.length <= 6 ? data.modules.length : "All"}
                    </strong>{" "}
                    Apps
                  </span>

                  <span>{data.currency + data.price}</span>
                </div>
                {data.modules?.length > 11 ? (
                  <div>
                    <div className="flex justify-between items-center text-gray-700">
                      <span>
                        With{" "}
                        <strong className="text-red-500">
                          website e-commorce
                        </strong>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-700">
                      <span>
                        And{" "}
                        <strong className="text-red-500">Maintenance</strong>
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {isYearly && (
                  <div className="flex justify-between items-center text-emerald-600 font-medium italic border-b border-gray-100 pb-3">
                    <span>First Year Initial Discount</span>
                    <span>
                      {data.currency}
                      {(priceInYear - priceInYear * 0.15).toFixed(2)}
                    </span>
                  </div>
                )}

                {isYearly ? (
                  <div className="flex justify-between items-center pt-1 font-semibold text-gray-800">
                    <span>
                      Total / Year <sup>(*)</sup>
                    </span>
                    <span>
                      {data.currency}
                      {(Number(priceInYear) * 0.85 + totalPrice).toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between items-center pt-1 font-semibold text-gray-800">
                    <span>
                      Total / month <sup>(*)</sup>
                    </span>
                    <span>
                      {data.currency}
                      {Number(data.price + totalPrice).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  className="w-full py-2.5 bg-[#1e40af] hover:bg-[#254fd8] text-white font-medium rounded transition"
                >
                  Buy Now
                </button>

                <button
                  type="button"
                  className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1e40af] font-medium rounded transition"
                >
                  Send / Print the quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROJECT ESTIMATOR MODAL ================= */}
      {showDialog && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setShowDialog(false)}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-md bg-white text-left shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-gray-100 p-6 pb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Project Estimator
                </h2>

                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 p-6 text-gray-600">
                <p className="text-sm leading-relaxed text-gray-600">
                  To ensure a 99% success rate for the setup process, it is
                  necessary to analyze your project requirements, configure the
                  system, train users, import data, and establish the workflow
                  structure. Here, you will find a clear cost breakdown for each
                  of these processes.
                </p>

                {/* Company Size */}
                <div className="flex items-center gap-2 text-sm">
                  <span>Your company Size</span>

                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-16 rounded border border-gray-300 px-2 py-1 text-center font-medium text-gray-800 focus:border-cyan-600 focus:outline-none"
                  />

                  <span>employees.</span>
                </div>

                {/* Modules */}
                <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">CRM</div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Sales
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1500"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">POS</div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1500 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Purchases
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Warehousing
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1500"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Fixed Assets
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1500 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1500"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Financial Management
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1500 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1500"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">HR</div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1500 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1500"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Project Manager
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1500 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="2000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Manufacturing
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        2000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="1000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Reports & Analytics
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        1000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="2000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        e-commerce
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        2000 SR
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      value="2000"
                      onChange={handleModuleChange}
                    />
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm font-bold text-gray-800">
                        Maintenance
                      </div>
                      <div className="text-sm font-bold text-gray-800 pr-20">
                        2000 SR
                      </div>
                    </div>
                  </label>
                </div>

                {/* Project Cost */}
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      The cost of achieving 99% successful configuration. =
                      <span className="border rounded p-3 m-2">
                        <span className="custom-font text-xl text-[#17A2B8]">
                          {data.currency}
                        </span>
                        <span className="text-3xl font-extrabold text-[#17A2B8]">
                          {totalPrice}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-100 p-6 pt-4">
                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="rounded-md bg-[#17A2B8] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#138496] focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
