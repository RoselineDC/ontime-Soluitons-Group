'use client';

import React from 'react';

const services = [
  {
    title: '🏠 Property Renovations & Installations',
    focus: 'Construction, Plumbing, and Painting',
    list: [
      'Pool construction, repairs & services',
      'Pool pump & filter installation',
      'Fiberglass & marblelite finishes',
      'All plumbing renovations',
      'Bathroom renovations',
      'House painting & renovations',
      'Tiling & paving',
    ],
  },
  {
    title: '🌿 Outdoor & Garden Services',
    focus: 'Landscaping, Maintenance, and Aesthetics',
    list: [
      'Tree cutting & trimming',
      'Garden maintenance',
      'Landscaping',
      'Garden services',
      'Refuse removal',
      'Drainage unblocking',
      'Rubble removal & clean-up',
    ],
  },
  {
    title: '🚚 General & Specialized Clean-Up Services',
    focus: 'Waste, Furniture, and Site Clearing',
    list: [
      'Furniture removals',
      'Rubble removal & site clean-up',
      'Refuse removal',
      'Drainage unblocking',
      'Bathroom renovation debris clearance',
      'Garden waste and branch removal',
    ],
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-10" id='services'> 
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">OUR SERVICES 
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-medium italic">
                Focus: {service.focus}
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
              >
                Request Service
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
