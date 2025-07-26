'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            className="h-8 w-8 border-2 border-white rounded-full"
            src="/images/LOG.png"
            alt="Flowbite Logo"
            width={32} height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            OSG
          </span>
        </Link>

        {/* Right-side buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"

            className="mt-6 px-6 py-2 text-sm text-white bg-green-600 hover:bg-green-700 
              focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg font-semibold 
              transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
          >
            Get Quote
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                       rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
                       focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
                       dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'
            }`}
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                       md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white 
                       dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-white bg-green-700 rounded-sm 
                           md:bg-transparent md:text-green-700 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#servies"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
