'use client';

import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <>
         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Contact Us
      </h2>
        <section className="py-24 bg-white dark:bg-gray-900" id='contact'>
           
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Contact Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Section - Image & Info */}
                    <div className="relative w-full h-full">
                        <div className="relative h-full w-full">
                            <Image
                                src="https://pagedone.io/asset/uploads/1696488602.png"
                                alt="ContactUs"
                                width={700}
                                height={600}
                                className="object-cover w-full h-full rounded-2xl lg:rounded-l-2xl"
                            />
                            <h1 className="absolute top-10 left-10 text-white text-4xl font-bold leading-tight z-10">
                                Contact us
                            </h1>
                            <div className="absolute bottom-0 w-full p-5 lg:p-11 z-10">
                                <div className="bg-white rounded-lg p-6 space-y-6">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 17h10a1 1 0 001-1V6H6" />
                                        </svg>
                                        <p className="ml-4 text-gray-800 text-base">074 243 7049</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                                        </svg>
                                        <p className="ml-4 text-gray-800 text-base">ontimegrpsolu@gmail.com</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.757L10.586 12 6.343 16.243" />
                                        </svg>
                                        <p className="ml-4 text-gray-800 text-base">Serving Gauteng & Surrounding Areas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="bg-gray-50 p-6 lg:p-11 rounded-2xl lg:rounded-r-2xl shadow-md">
                        <h2 className="text-green-600 text-3xl font-semibold mb-8">Send Us A Message</h2>
                        <form className="space-y-6">
                            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            <div className="space-y-6">
                                    <p className="text-gray-700 font-semibold mb-2">Service Required</p>
                                <div className="flex space-x-6">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="contact-method" className="form-radio text-indigo-600" />
                                        <span className="text-gray-600">Email</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="contact-method" className="form-radio text-indigo-600" />
                                        <span className="text-gray-600">Phone</span>
                                    </label>


                                </div>
                                {/* service required checkbox */}
                                <div className="space-y-3">
                                    <p className="text-gray-700 font-semibold mb-2">Service Required</p>
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                name="services"
                                                value="Property Renovations & Installations"
                                                className="form-checkbox text-indigo-600"
                                            />
                                            <span>Property Renovations & Installations</span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                name="services"
                                                value="Outdoor & Garden Services"
                                                className="form-checkbox text-indigo-600"
                                            />
                                            <span>Outdoor & Garden Services</span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                name="services"
                                                value="General & Specialized Clean-Up Services"
                                                className="form-checkbox text-indigo-600"
                                            />
                                            <span>General & Specialized Clean-Up Services</span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <textarea placeholder="Let us know your requirements" className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-32" />
                            <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Company Info Cards */}

            </div>
        </section>
        </>
    );
};

export default Contact;
