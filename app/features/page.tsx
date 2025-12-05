"use client";
import Image from "next/image";

const features = [
  {
    title: "Invoicing",
    icon: "/icons/invoice.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "Purchase",
    icon: "/icons/purchase.svg",
    desc: "Create professional Purchase invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "Expenses",
    icon: "/icons/expenses.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "Vat and Tax",
    icon: "/icons/vat.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "Inventory",
    icon: "/icons/inventory.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "SMS/Email",
    icon: "/icons/sms.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "Dashboard Reporting",
    icon: "/icons/dashboard.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
  {
    title: "Mobile app",
    icon: "/icons/mobile.svg",
    desc: "Create professional custom invoices, send payment reminders, and match payments to invoices, automatically."
  },
];
    
export default function FeaturesGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-green-600 mb-14">
          Our Features
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 text-center">
          {features.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
            <Image
                src={item.icon}
                alt={item.title}
                width={90}            
                height={90}
                quality={100}      
                className="mb-4 contrast-125 saturate-150"
                priority
                />

              
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
