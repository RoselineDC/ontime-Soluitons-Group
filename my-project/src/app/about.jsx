'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";



const images = [
  '/images/LOG.png',
  '/images/LOGO.png',
  '/images/LOG.png',
  '/images/LOGO.png',
  '/images/LOG.png',
];

const About = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 24000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 w-full" id='about'>
      {/* Carousel - Left Side */}
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg">
        <div className="relative h-56 md:h-96">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${current === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-gray-400'
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text - Right Side */}
      <div className="w-full md:w-1/2 p-18 mt-0">
        <h5 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to Ontime Group Solutions
        </h5>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Your trusted partner in outdoor and property care — from tree felling to garden maintenance, rubble removal, and more. We’re fast, reliable, and always on time. Whether you're a homeowner, business, or contractor, we offer efficient, affordable solutions tailored to your needs.
          <br />
          <br />
          Serving Gauteng & Surrounding Areas
          <br />
          ✅ Reliable • ✅ Affordable • ✅ Always On Time
        </p>
        <Link href="/about-us">
          <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300">
            Read More 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
