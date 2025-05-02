import React from 'react'


const Section3 = () => {
  const plans = [
    {
      title: "consultation",
      price: "free",
      features: ["1 User", "5 Projects", "Email Support"],
      highlighted: false,
    },
    {
      title: "Design",
      price: "$1500",
      features: ["5 Users", "50 Projects", "Priority Support"],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$2900",
      features: ["Unlimited Users", "Unlimited Projects", "24/7 Support"],
      highlighted: false,
    },
  ];
  
  return (
    <section className="py-16 bg-[#FDF0E9] epilogue">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className='text-[#EF6D58]'>PRICING</h2>
        <h1 className="text-5xl font-extrabold mb-6">Check Our <br />Pricing Plans</h1>
       

        <div className="grid md:grid-cols-3 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={` shadow-md p-8 border ${
                plan.highlighted
                  ? "bg-white border-[#EF6D58] md:scale-y-125 shadow-lg"
                  : "bg-white "
              } transition-transform`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((feat, i) => (
                  <li key={i}>+ {feat}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-md font-medium ${
                  plan.highlighted
                    ? "bg-[#EF6D58] text-white hover:bg-orange-400"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;