'use client'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] px-4 pt-6 pb-20 overflow-hidden">
      
      {/* Glass Card Container */}
      <div className="relative z-10 max-w-4xl w-full text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black/20">
        
        <p className="mb-4 text-sm text-gray-300">
          Unlock the full power of AI-based mock interviews.
          <a href="/how-it-works" className="text-indigo-400 ml-1 underline hover:text-pink-400">
            Read how it works →
          </a>
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xl">
          Practice Bold.<br />Perform Brilliant.<br />Land the Job.
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Prepare for your dream role with confidence. Our AI-powered mock interviews help you polish answers, refine delivery, and elevate your chances.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/dashboard"
            className="inline-block rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Start Your Practice
          </a>
          <a
            href="/dashboard"
            className="text-sm font-semibold text-indigo-300 hover:text-pink-400"
          >
            Learn more →
          </a>
        </div>
      </div>

      {/* Animated Gradient Bottom Border */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[8rem] overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="w-[150%] h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse blur-2xl opacity-50" />
      </div>
    </div>
  )
}
