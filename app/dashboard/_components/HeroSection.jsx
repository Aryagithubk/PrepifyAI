'use client'

import { useState } from 'react'

export default function HeroSection() {
  return (
    <div className="relative bg-white min-h-screen flex items-center overflow-hidden">
      
      {/* Image Background */}
      <img
        src="/your-image.jpg" // <-- Replace this with your image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      <div className="relative isolate px-6 pt-14 lg:px-8 w-full z-10">
        
        {/* Top Gradient */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#7F56D9] to-[#FF66C4] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[75rem]"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-200 ring-1 ring-gray-300 bg-white/10 backdrop-blur-md hover:ring-gray-400 transition-all duration-200 ease-in-out">
              Unlock the full power of AI-based mock interviews.
              <a href="/how-it-works" className="font-semibold text-indigo-200 ml-2 hover:text-indigo-300">
                Read how it works <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-md">
              Practice Bold. Perform Brilliant. Land the Job.
            </h1>
            <p className="mt-6 text-lg text-white sm:text-xl drop-shadow">
              Prepare for your dream role with confidence. Our AI-powered mock interviews help you polish answers, refine delivery, and elevate your chances.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/dashboard"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-pink-600 transition-all"
              >
                Start Your Practice
              </a>
              <a
                href="/dashboard"
                className="text-sm font-semibold leading-6 text-white hover:text-indigo-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath: 'polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#FF66C4] to-[#7F56D9] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[75rem]"
          />
        </div>
      </div>
    </div>
  )
}
