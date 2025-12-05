
"use client";

import { Calendar } from "lucide-react";

export default function CareersSection() {
  const jobs = [
    {
      category: "Marketing",
      title: "Marketing Officer",
      deadline: "2024-12-10",
      requirements: [
        "Minimum +2 completed; Bachelor’s degree preferred.",
        "Strong communication and interpersonal skills.",
        "Creative thinker with a passion for marketing and technology.",
        "Proficient in MS Office, email tools, and digital marketing platforms.",
        "Familiarity with social media tools & analytics is preferred."
      ]
    },
    {
      category: "Support",
      title: "Support Officer",
      deadline: "2024-12-10",
      requirements: [
        "Knowledge of computer",
        "Knows Account Rules",
        "Experienced from Software Company will get more priority."
      ]
    },
    {
      category: "Finance",
      title: "Account Officer",
      deadline: "2024-12-10",
      requirements: [
        "Bachelor’s degree in Accounting or Finance.",
        "Strong analytical skills",
        "Proficiency with Accounting software",
        "Good communication and reporting skills"
      ]
    }
  ];

  return (
    <section className="bg-white py-12 px-6 sm:px-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Open Roles
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Career Opportunities
      </p>

      {/* Job Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg transition duration-200 h-full"
          >
            {/* Category Badge */}
            <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-700 font-medium mb-4">
              {job.category}
            </span>

            {/* Job Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {job.title}
            </h3>

            {/* Deadline */}
            <p className="flex items-center text-gray-600 mb-4">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              Deadline: {job.deadline}
            </p>

            {/* Requirements */}
            <div className="grow text-gray-700 text-sm leading-relaxed mb-6">
              <p className="font-bold mb-1">REQUIREMENT</p>
              {job.requirements.map((req, idx) => (
                <p key={idx} className="mb-1">
                  {req}
                </p>
              ))}
            </div>

            {/* Button */}
            <button className="mt-auto w-full py-2.5 px-6 border border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
