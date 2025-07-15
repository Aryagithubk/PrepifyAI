'use client'
import { useState } from 'react'
import { 
  Users, 
  Target, 
  Award, 
  Briefcase, 
  BookOpen, 
  Rocket 
} from 'lucide-react'

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission')

  const tabContent = {
    mission: {
      icon: <Target className="mr-2 text-indigo-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg">PrepifyAI is on a mission to revolutionize interview preparation by providing personalized, intelligent AI coaching tailored to individual career aspirations.</p>
          <p className="text-base md:text-lg">With PrepifyAI, the goal is to bridge the gap between preparation and success, empowering users to unlock their full potential.</p>
        </div>
      )
    },
    story: {
      icon: <BookOpen className="mr-2 text-indigo-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg">The idea for PrepifyAI was born from firsthand experiences with the challenges of interview preparation. As a solo developer, I wanted to create a platform that simplifies the process and builds confidence in individuals.</p>
          <p className="text-base md:text-lg">This journey has been a testament to the power of passion and innovation, leading to the creation of an impactful tool for career growth.</p>
        </div>
      )
    },
    approach: {
      icon: <Rocket className="mr-2 text-indigo-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg">PrepifyAI leverages advanced AI algorithms to generate dynamic, contextually relevant interview questions based on your professional background and goals.</p>
          <p className="text-base md:text-lg">Through real-time analysis and feedback, the platform provides actionable insights, enabling users to improve with every mock interview attempt.</p>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            About Prepify AI
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Empowering professionals to ace interviews through intelligent, personalized AI coaching
          </p>
        </div>

        {/* Tabs Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row border-b">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center 
                  ${activeTab === tab 
                    ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' 
                    : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {tabContent[tab].icon}
                <span className="hidden sm:inline">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </button>
            ))}
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            {tabContent[activeTab].content}
          </div>
        </div>  
        </div>
      </div>
  )
}

export default AboutUsPage