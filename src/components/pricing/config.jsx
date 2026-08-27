import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const data_1 = {
  name: "الباقة الأساسية",
  monthlyPrice: "71",
  yearlyPrice: "61",
  currency: "ر.س",
  descript: "Perfect for small businesses and startups",

  modules: [
    {
      Clients: 200,
      Suppliers: 200,
      Sales: 1000,
      Purchases: 1000,
      Warehousing: 1000,
      "Financial Management": 1500,
    },
  ],
};

const data_2 = {
  name: "الباقة القياسية",
  monthlyPrice: "120",
  yearlyPrice: "105",
  currency: "ر.س",
  descript: "Perfect for small businesses and startups",

  modules: [
    {
      CRM: 1000,
      Sales: 1000,
      POS: 1500,
      Purchases: 1000,
      Warehousing: 1000,
      "Fixed Assets": 1500,
      "Financial Management": 1500,
      HR: 1500,
      "Project Manager": 1500,
      Manufacturing: 2000,
      "Reports & Analytics": 1000,
    },
  ],
};

const data_3 = {
  name: "الباقة المؤسسية",
  monthlyPrice: "190",
  yearlyPrice: "173",
  currency: "ر.س",
  descript: "Perfect for small businesses and startups",

  modules: [
    {
      CRM: 1000,
      Sales: 1000,
      POS: 1500,
      Purchases: 1000,
      Warehousing: 1000,
      "Fixed Assets": 1500,
      "Financial Management": 1500,
      HR: 1500,
      "Project Manager": 1500,
      Manufacturing: 2000,
      "Reports & Analytics": 1000,
      "e-commerce": 2000,
      Maintenance: 2000,
    },
  ],

  successpack: true,
};

// جميع الموديولات الموجودة في النظام
const modules = [
  { id: 1, name: "Clients", price: 200 },
  { id: 2, name: "Suppliers", price: 200 },
  { id: 3, name: "CRM", price: 1000 },
  { id: 4, name: "Sales", price: 1000 },
  { id: 5, name: "POS", price: 1500 },
  { id: 6, name: "Purchases", price: 1000 },
  { id: 7, name: "Warehousing", price: 1000 },
  { id: 8, name: "Fixed Assets", price: 1500 },
  { id: 9, name: "Financial Management", price: 1500 },
  { id: 10, name: "HR", price: 1500 },
  { id: 11, name: "Project Manager", price: 1500 },
  { id: 12, name: "Manufacturing", price: 2000 },
  { id: 13, name: "Reports & Analytics", price: 1000 },
  { id: 14, name: "e-commerce", price: 2000 },
  { id: 15, name: "Maintenance", price: 2000 },
];

export default function PriceConfig() {
  const [service, setService] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [isYearly, setIsYearly] = useState(true);
  const [users, setUsers] = useState(1);

  // هنا بنحفظ ID الموديولات المختارة
  const [selectedModules, setSelectedModules] = useState([]);

  // Service Schedule (الخدمة الاستشارية للتهيئة - اون لاين)
  const [showServiceSchedule, setShowServiceSchedule] = useState(false);
  const [consultingHours, setConsultingHours] = useState(0);

  // Hosting Type
  const [hosting, setHosting] = useState("cloud");

  // Cloud Platform extras (عدد المواقع + التخزين بالجيجابيت)
  const [cloudWebsites, setCloudWebsites] = useState(0);
  const [cloudStorage, setCloudStorage] = useState(0);

  const { id } = useParams();

  const data = {
    1: data_1,
    2: data_2,
    3: data_3,
  }[id];

  /*
   * استخراج الموديولات الخاصة بالباقة الحالية
   *
   * data.modules عندك عبارة عن:
   *
   * [
   *   {
   *     CRM: 1000,
   *     Sales: 1000
   *   }
   * ]
   *
   * لذلك نستخدم Object.entries()
   */
  const availableModules = Object.entries(data?.modules?.[0] || {}).map(
    ([name, price]) => ({
      name,
      price,
    })
  );

  /*
   * تغيير حالة Checkbox
   */
  const handleModuleChange = (e, moduleId) => {
    if (e.target.checked) {
      // إضافة ID فقط
      setSelectedModules((prev) => {
        if (prev.includes(moduleId)) {
          return prev;
        }

        return [...prev, moduleId];
      });
    } else {
      // حذف ID
      setSelectedModules((prev) =>
        prev.filter((id) => id !== moduleId)
      );
    }
  };

  /*
   * حساب السعر النهائي للموديولات المختارة
   *
   * بنجيب الـ module من modules عن طريق الـ ID
   */
  const totalPrice = selectedModules.reduce((total, moduleId) => {
    const module = modules.find((item) => item.id === moduleId);

    return total + (module?.price || 0);
  }, 0);

  /*
   * عدد المستخدمين (لا يقل عن 1)
   */
  const usersCount = Number(users) || 1;

  /*
   * سعر الاشتراك الأساسي في الشهر (بدون الإضافات)
   * = عدد المستخدمين × سعر الفرد في الشهر (حسب الفئة المختارة شهري/سنوي)
   */
  const pricePerUser = isYearly
    ? Number(data.yearlyPrice)
    : Number(data.monthlyPrice);

  const basePrice = pricePerUser * usersCount;

  /*
   * تكلفة الخدمة الاستشارية للتهيئة (اون لاين)
   * ١٠٠ ريال / الساعة
   */
  const CONSULTING_HOURLY_RATE = 100;
  const consultingCost =
    (Number(consultingHours) || 0) * CONSULTING_HOURLY_RATE;

  /*
   * تكلفة Cloud Platform
   * عدد المواقع: ١٠ ريال شهري / ١٢٠ ريال سنوي
   * التخزين (جيجابيت): ١ ريال شهري / ١٢ ريال سنوي
   */
  const CLOUD_WEBSITE_MONTHLY_RATE = 10;
  const CLOUD_WEBSITE_YEARLY_RATE = 120;
  const CLOUD_STORAGE_MONTHLY_RATE = 1;
  const CLOUD_STORAGE_YEARLY_RATE = 12;

  const cloudHostingCost =
    hosting === "cloud-platform"
      ? isYearly
        ? (Number(cloudWebsites) || 0) * CLOUD_WEBSITE_YEARLY_RATE +
          (Number(cloudStorage) || 0) * CLOUD_STORAGE_YEARLY_RATE
        : (Number(cloudWebsites) || 0) * CLOUD_WEBSITE_MONTHLY_RATE +
          (Number(cloudStorage) || 0) * CLOUD_STORAGE_MONTHLY_RATE
      : 0;

  // إجمالي كل الإضافات (الموديولات + الاستشارة + الاستضافة)
  const combinedExtras = totalPrice + consultingCost + cloudHostingCost;

  // المجموع قبل الضريبة (الاشتراك + الإضافات)
  // السنوي: السعر الشهري × 12 + الإضافات | الشهري: السعر الشهري + الإضافات
  const subtotal = (isYearly ? basePrice * 12 : basePrice) + combinedExtras;

  /*
   * ضريبة القيمة المضافة 15%
   */
  const VAT_RATE = 0.15;
  const vatAmount = subtotal * VAT_RATE;
  const totalWithVat = subtotal + vatAmount;

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
            <span className="text-[#1e40af] font-semibold">
              {data.name}
            </span>
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
                value={users}
                min="1"
                onChange={(e) =>
                  setUsers(
                    e.target.value === "" ? 1 : Number(e.target.value)
                  )
                }
                className="w-24 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-center text-gray-700"
              />

            </div>

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

                <span className="text-gray-700">
                  Self Service
                </span>

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

                {service === "success_pack" && (
                  <div
                    id="successBox"
                    className="ml-7 p-4 bg-[#e6f4f8] border border-[#cbe7f0] rounded-lg space-y-4"
                  >

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Through the "Future" consulting package, an expert is
                      assigned to provide training and guidance, helping you
                      implement your system and configure workflows as part of
                      the initial rollout. This service covers a specific
                      number of hours—determined by the chosen package—and remains
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

                      {/* Service Schedule */}
                      <button
                        type="button"
                        onClick={() =>
                          setShowServiceSchedule((prev) => !prev)
                        }
                        className="px-4 py-2 bg-white text-sm font-medium rounded border border-gray-200 transition hover:bg-[#1e40af] hover:text-white"
                      >
                        Service Schedule
                      </button>

                    </div>

                    {/* لوحة الخدمة الاستشارية للتهيئة (اون لاين) */}
                    {showServiceSchedule && (
                      <div
                        id="serviceScheduleBox"
                        className="p-4 bg-white border border-[#cbe7f0] rounded-lg space-y-3"
                        dir="rtl"
                      >
                        <div className="flex items-center justify-between gap-4 flex-wrap">

                          <span className="text-sm text-gray-700 font-medium">
                            الخدمة الاستشارية للتهيئة ١٠٠ ريال / الساعة (اون لاين)
                          </span>

                          <div className="flex items-center gap-2">

                            <input
                              type="number"
                              min="0"
                              value={consultingHours}
                              onChange={(e) =>
                                setConsultingHours(
                                  e.target.value === ""
                                    ? 0
                                    : Number(e.target.value)
                                )
                              }
                              className="w-20 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#1e40af] text-center text-gray-700"
                            />

                            <span className="text-sm text-gray-600">
                              ساعة
                            </span>

                          </div>

                        </div>

                        {consultingCost > 0 && (
                          <div className="flex justify-between items-center text-sm text-gray-700 border-t border-gray-100 pt-2">
                            <span>إجمالي تكلفة الاستشارة</span>
                            <span className="font-semibold text-[#1e40af]">
                              {data.currency}
                              {consultingCost.toFixed(2)}
                            </span>
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                )}

              </div>
            </div>

            {/* Hosting Type */}
            {data.successpack === true && (
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
                      checked={hosting === "cloud"}
                      onChange={(e) => setHosting(e.target.value)}
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
                      checked={hosting === "self"}
                      onChange={(e) => setHosting(e.target.value)}
                      className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                    />

                    <span className="text-gray-500">
                      Self Hosting - Free
                    </span>

                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">

                    <input
                      type="radio"
                      name="hosting"
                      value="cloud-platform"
                      checked={hosting === "cloud-platform"}
                      onChange={(e) => setHosting(e.target.value)}
                      className="w-4 h-4 accent-[#1e40af] cursor-pointer"
                    />

                    <span className="text-gray-500">
                      Cloud Platform
                    </span>

                  </label>

                  {hosting === "cloud-platform" && (
                    <div
                      id="cloudPlatformBox"
                      className="ml-7 p-4 bg-[#e6f4f8] border border-[#cbe7f0] rounded-lg space-y-4"
                      dir="rtl"
                    >

                      {/* عدد المواقع الإلكترونية */}
                      <div className="flex items-center justify-between gap-4 flex-wrap">

                        <span className="text-gray-700">
                          عدد موقع إلكتروني ١٠ ريال شهري / ١٢٠ ريال سنوي
                        </span>

                        <input
                          type="number"
                          min="0"
                          value={cloudWebsites}
                          onChange={(e) =>
                            setCloudWebsites(
                              e.target.value === ""
                                ? 0
                                : Number(e.target.value)
                            )
                          }
                          className="w-20 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#1e40af] text-center text-gray-700"
                        />

                      </div>

                      {/* التخزين (جيجابيت) */}
                      <div className="flex items-center justify-between gap-4 flex-wrap">

                        <span className="text-gray-700">
                          التخزين (جيجابيت) ١ ريال شهري / ١٢ ريال سنوي
                        </span>

                        <input
                          type="number"
                          min="0"
                          value={cloudStorage}
                          onChange={(e) =>
                            setCloudStorage(
                              e.target.value === ""
                                ? 0
                                : Number(e.target.value)
                            )
                          }
                          className="w-20 px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-[#1e40af] text-center text-gray-700"
                        />

                      </div>

                      {cloudHostingCost > 0 && (
                        <div className="flex justify-between items-center text-gray-700 border-t border-gray-100 pt-2">
                          <span>
                            إجمالي الاستضافة / {isYearly ? "سنوي" : "شهري"}
                          </span>
                          <span className="font-semibold text-[#1e40af]">
                            {data.currency}
                            {cloudHostingCost.toFixed(2)}
                          </span>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              </div>
            )}

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm space-y-6">

              {/* Yearly / Monthly */}

              <div className="flex items-center justify-center gap-3 border-b border-gray-100 pb-4 text-sm font-medium">

                <span className="text-gray-700">
                  Monthly
                </span>

                <label className="relative inline-flex items-center cursor-pointer">

                  <input
                    type="checkbox"
                    checked={isYearly}
                    onChange={(e) =>
                      setIsYearly(e.target.checked)
                    }
                    className="sr-only peer"
                  />

                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1e40af]" />

                </label>

                <span className="text-gray-700">
                  Yearly{" "}
                  <span className="text-emerald-600 text-xs font-semibold">
                    (خصم 15%)
                  </span>
                </span>

              </div>

              {/* Price */}

              <div className="space-y-3 text-sm">

                <div className="flex justify-between items-center text-gray-700">

                  <span>

                    <strong className="text-[#1e40af]">
                      {usersCount}
                    </strong>{" "}
                    Users,{" "}

                    <strong className="text-[#1e40af]">
                      {data.modules?.[0]
                        ? Object.keys(data.modules[0]).length
                        : 0}
                    </strong>{" "}
                    Apps

                  </span>

                  <span>
                    {data.currency}
                    {basePrice.toFixed(2)}
                  </span>

                </div>

                {data.modules?.[0] &&
                  Object.keys(data.modules[0]).length > 11 && (
                    <div>

                      <div className="flex justify-between items-center text-gray-700">

                        <span>
                          With{" "}
                          <strong className="text-red-500">
                            website e-commerce
                          </strong>
                        </span>

                      </div>

                      <div className="flex justify-between items-center text-gray-700">

                        <span>
                          And{" "}
                          <strong className="text-red-500">
                            Maintenance
                          </strong>
                        </span>

                      </div>

                    </div>
                  )}

                {consultingCost > 0 && (
                  <div className="flex justify-between items-center text-gray-700" dir="rtl">

                    <span>
                      الخدمة الاستشارية للتهيئة ({consultingHours} ساعة)
                    </span>

                    <span>
                      {data.currency}
                      {consultingCost.toFixed(2)}
                    </span>

                  </div>
                )}

                {cloudHostingCost > 0 && (
                  <div className="flex justify-between items-center text-gray-700" dir="rtl">

                    <span>
                      استضافة Cloud Platform ({isYearly ? "سنوي" : "شهري"})
                    </span>

                    <span>
                      {data.currency}
                      {cloudHostingCost.toFixed(2)}
                    </span>

                  </div>
                )}

                <div className="flex justify-between items-center text-gray-700 border-b border-gray-100 pb-3">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    {data.currency}
                    {subtotal.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between items-center text-gray-700 border-b border-gray-100 pb-3">

                  <span>
                    VAT (15%)
                  </span>

                  <span>
                    {data.currency}
                    {vatAmount.toFixed(2)}
                  </span>

                </div>

                {isYearly ? (

                  <div className="flex justify-between items-center pt-1 font-semibold text-gray-800">

                    <span>
                      Total / Year <sup>(*)</sup>
                    </span>

                    <span>
                      {data.currency}
                      {totalWithVat.toFixed(2)}
                    </span>

                  </div>

                ) : (

                  <div className="flex justify-between items-center pt-1 font-semibold text-gray-800">

                    <span>
                      Total / month <sup>(*)</sup>
                    </span>

                    <span>
                      {data.currency}
                      {totalWithVat.toFixed(2)}
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

                  <span>
                    Your company Size
                  </span>

                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-16 rounded border border-gray-300 px-2 py-1 text-center font-medium text-gray-800 focus:border-cyan-600 focus:outline-none"
                  />

                  <span>
                    employees.
                  </span>

                </div>

                {/* Modules */}

                <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">

                  {availableModules.map((module) => {

                    /*
                     * نجيب الـ module الأصلي من modules
                     * عشان ناخد الـ ID
                     */
                    const originalModule = modules.find(
                      (item) => item.name === module.name
                    );

                    if (!originalModule) {
                      return null;
                    }

                    const moduleId = originalModule.id;

                    const isChecked =
                      selectedModules.includes(moduleId);

                    return (

                      <label
                        key={moduleId}
                        className="flex items-start gap-3 cursor-pointer"
                      >

                        <input
                          type="checkbox"
                          value={moduleId}
                          checked={isChecked}
                          onChange={(e) =>
                            handleModuleChange(e, moduleId)
                          }
                          className="mt-1 size-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />

                        <div className="flex items-center justify-between w-full">

                          <div className="text-sm font-bold text-gray-800">
                            {module.name}
                          </div>

                          <div className="text-sm font-bold text-gray-800 pr-20">
                            {module.price} SR
                          </div>

                        </div>

                      </label>

                    );
                  })}

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