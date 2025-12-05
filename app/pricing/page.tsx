"use client";


export default function PricingSection() {
  const plans = [
    {
      title: "Single User, Yearly",
      price: "2,999",
      users: "1 User",
      features: [
        "Full Rights",
        "Free Support",
        "Free Backup",
        "Unlimited Companies"
      ]
    },
    {
      title: "2 Users, Yearly",
      price: "4,999",
      users: "2 Users, Yearly",
      features: [
        "Role Based Access",
        "Free Support",
        "Free Sync",
        "Unlimited Companies"
      ]
    },
    {
      title: "3 Users, Yearly",
      price: "9,999",
      users: "3 Users, Yearly",
      features: [
        "Role Based Access",
        "Free Support",
        "Free Sync",
        "Unlimited Companies"
      ]
    },
    {
      title: "5 Users, Yearly",
      price: "9,999",
      users: "5 Users, Yearly",
      features: [
        "Role Based Access",
        "Free Support",
        "Free Sync",
        "Unlimited Companies"
      ]
    }
  ];

  return (
    <div className=" bg-green-50 py-20 px-6 sm:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg shadow-green-600 p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header */}
              <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                <span className="text-emerald-500">{plan.title.split(' ')[0]}</span>
                {' ' + plan.title.split(' ').slice(1).join(' ')}
              </h3>

              {/* Price */}
              <div className="mb-8 px-2 py-2">
                <p className="text-3xl font-bold text-emerald-500">
                  RS.{plan.price}
                </p>
              </div>

              {/* Users */}
              <p className="text-lg font-semibold text-gray-700 mb-6">
                <span className="text-emerald-500">{plan.users.split(' ')[0]}</span>
                {' ' + plan.users.split(' ').slice(1).join(' ')}
              </p>

              {/* Features */}
              <div className="grow w-full space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="text-gray-700 font-medium text-center">
                    {feature}
                  </p>
                ))}
              </div>

              {/* Button */}
              <button className="w-full py-3 px-8 border-2 border-emerald-500 text-emerald-600 font-bold rounded-full hover:bg-emerald-500 hover:text-white transition-colors duration-300">
                Buy Now
              </button>
            </div>


          ))}
        </div>
      </div>
    </div>
  );
}