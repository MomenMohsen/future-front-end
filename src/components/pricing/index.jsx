import PriceCard from "./pricecard";
import PriceCardCustom from "./pricecardcustom";
export default function IndexPrice() {
  return (
    <>
      <div className="relative isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-semibold text-white text-5xl">Pricing</h2>

          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Choose an affordable plan packed with the best features for your
          business.
        </p>

        <div
          className="mx-auto mt-16 grid max-w-lg grid-cols-1
            gap-6 sm:mt-20
            lg:max-w-6xl lg:grid-cols-3
            items-stretch"
        >
          <PriceCard
            name="الباقة الأساسية"
            price="70.50"
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
          />
          <PriceCard
            name="الباقة القياسية"
            price="120"
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
          />
          <PriceCard
            name="الباقة المؤسسية"
            price="189.95"
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
          />

          <PriceCardCustom />
        </div>
      </div>
    </>
  );
}
