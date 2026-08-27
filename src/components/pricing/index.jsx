import { useState } from "react";

import PriceCard from "./pricecard";
import PriceCardCustom from "./pricecardcustom";

export default function IndexPrice() {

  // false = Monthly
  // true  = Yearly
  const [isYearly, setIsYearly] = useState(true);

  // Calculate price
  // بيرجع سعر الشهر مباشرة حسب الفئة المختارة (شهري / سنوي)
  // من غير أي حساب خصم تلقائي - الأسعار بتتحدد يدويًا لكل باقة
  const calculatePrice = (monthlyPrice, yearlyPrice) => {
    const price = isYearly ? Number(yearlyPrice) : Number(monthlyPrice);

    return price.toFixed(2);
  };

  // إجمالي السعر في السنة (بيظهر بس لما تكون الفئة سنوي)
  const calculateYearlyTotal = (yearlyPrice) => {
    if (!isYearly) {
      return null;
    }

    return (Number(yearlyPrice) * 12).toFixed(2);
  };

  return (
    <>
      <div className="relative isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="font-semibold text-white text-5xl">
            Pricing
          </h2>

          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Choose the right plan for you
          </p>

        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Choose an affordable plan packed with the best features for your
          business.
        </p>


        {/* Monthly / Yearly Toggle */}
        <div className="flex items-center justify-center gap-3 text-xl font-medium mt-5">

          {/* Monthly */}
          <span
            className={`transition-colors ${
              !isYearly ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            Monthly
          </span>


          {/* Toggle */}
          <label className="relative inline-flex cursor-pointer items-center">

            <input
              type="checkbox"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
              className="sr-only peer"
            />

            <div
              className="
                h-7 w-12 rounded-full
                bg-gray-200
                after:absolute
                after:left-[2px]
                after:top-[2px]
                after:h-6
                after:w-6
                after:rounded-full
                after:border
                after:border-gray-300
                after:bg-white
                after:transition-all
                after:content-['']
                peer-checked:bg-[#1e40af]
                peer-checked:after:translate-x-full
                peer-checked:after:border-white
              "
            />

          </label>


          {/* Yearly */}
          <span
            className={`transition-colors ${
              isYearly ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            Yearly
          </span>


          {/* Discount */}
          {isYearly && (
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-bold text-green-400">
              خصم 15% سنوياً
            </span>
          )}

        </div>


        {/* Pricing Cards */}
        <div
          className="
            mx-auto mt-16 grid max-w-lg grid-cols-1
            items-stretch gap-6
            sm:mt-20
            lg:max-w-6xl lg:grid-cols-3
          "
        >

          {/* Basic */}
          <PriceCard
            name="الباقة الأساسية"
            price={calculatePrice("71", "61")}
            yearlyTotal={calculateYearlyTotal("61")}
            currency="ر.س"
            descript="Perfect for small businesses and startups"
            modules={[
              "Clients",
              "Suppliers",
              "Sales",
              "Purchases",
              "Warehousing",
              "Financial Management",
            ]}
            path="/pricing-config/1"
            isYearly={isYearly}
          />


          {/* Standard */}
          <PriceCard
            name="الباقة القياسية"
            price={calculatePrice("120", "105")}
            yearlyTotal={calculateYearlyTotal("105")}
            currency="ر.س"
            descript="Perfect for small businesses and startups"
            modules={[
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
            ]}
            tag="Most Popular"
            path="/pricing-config/2"
            isYearly={isYearly}
          />


          {/* Enterprise */}
          <PriceCard
            name="الباقة المؤسسية"
            price={calculatePrice("190", "173")}
            yearlyTotal={calculateYearlyTotal("173")}
            currency="ر.س"
            descript="Perfect for small businesses and startups"
            modules={[
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
            ]}
            path="/pricing-config/3"
            isYearly={isYearly}
          />


          {/* Custom */}
          <PriceCardCustom
            name="باقات التخصيص"
            modules={[
              "أنظمة التصنيع الغير نمطي (التصنيع حسب الطلب )",
              "أنظمة التسعير الآلي للمطابع ومصانع الكرتون ووكالات الدعاية والإعلان",
              "أنظمة المقاولات ( مخططات - إنشائي - تشطيب )",
              "أنظمة الصيانة المطورة ( للمصانع )",
              "أنظمة صناعية أخرى !!",
            ]}
            modules2={[
              "شركات بلا حدود",
              "فروع بلا حدود",
              "مستخدمون بلا حدود",
              "فريق استشاري مخصص لتطبيق النظام",
            ]}
          />

        </div>

      </div>
    </>
  );
}