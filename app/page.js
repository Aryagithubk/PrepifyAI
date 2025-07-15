'use client'
import { useState } from 'react'
import {
  Book,
  Code,
  PenTool,
  Target,
  FileText,
  Globe,
  Award,
  Brain,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import HeroSection from './dashboard/_components/HeroSection'

const ResourceCard = ({ icon, title, description, links }) => (
  <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 p-6 flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-800 mb-4 flex-grow text-sm leading-relaxed">{description}</p>
    <div className="space-y-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center text-brown-800 hover:text-brown-900 font-medium transition-colors"
        >
          <span className="underline decoration-brown-500 decoration-2 underline-offset-4 group-hover:decoration-4">
            {link.name}
          </span>
          <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  </div>
)


export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('tech')

  const resourceCategories = {
    tech: {
      icon: <Code className="w-5 h-5 mr-2" />,
      resources: [
        {
          title: "Coding Platforms",
          description: "Practice coding and algorithmic problem-solving",
          icon: <Code className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
            { name: "LeetCode", url: "https://leetcode.com/" },
            { name: "HackerRank", url: "https://www.hackerrank.com/" },
            { name: "CodeChef", url: "https://www.codechef.com/" }
          ]
        },
        {
          title: "Technical Interview Preparation",
          description: "Resources for system design and technical interviews",
          icon: <Target className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "InterviewBit", url: "https://www.interviewbit.com/" },
            { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
            { name: "Pramp", url: "https://www.pramp.com/" }
          ]
        }
      ]
    },
    aptitude: {
      icon: <Brain className="w-5 h-5 mr-2" />,
      resources: [
        {
          title: "Aptitude & Reasoning",
          description: "Practice quantitative and logical reasoning skills",
          icon: <PenTool className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "IndiaBix", url: "https://www.indiabix.com/" },
            { name: "Freshersworld Aptitude", url: "https://www.freshersworld.com/aptitude-questions" },
            { name: "MathsGuru Reasoning", url: "https://www.mathsguru.com/reasoning-questions/" }
          ]
        },
        {
          title: "Competitive Exam Prep",
          description: "Resources for competitive and placement exams",
          icon: <Award className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "GATE Overflow", url: "https://gateoverflow.in/" },
            { name: "Career Power", url: "https://careerpower.in/" },
            { name: "Brilliant.org", url: "https://brilliant.org/" }
          ]
        }
      ]
    },
    interview: {
      icon: <FileText className="w-5 h-5 mr-2" />,
      resources: [
        {
          title: "Interview Guides",
          description: "Comprehensive interview preparation resources",
          icon: <Book className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "Insider Tips", url: "https://www.ambitionbox.com/" },
            { name: "InterviewStreet", url: "https://www.interviewstreet.com/" },
            { name: "Career Guidance", url: "https://www.shiksha.com/" }
          ]
        },
        {
          title: "Global Learning Platforms",
          description: "Online courses and learning resources",
          icon: <Globe className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "Coursera", url: "https://www.coursera.org/" },
            { name: "edX", url: "https://www.edx.org/" },
            { name: "Udacity", url: "https://www.udacity.com/" }
          ]
        }
      ]
    },
    softskills: {
      icon: <PenTool className="w-5 h-5 mr-2" />,
      resources: [
        {
          title: "Communication Skills",
          description: "Master verbal, written, and non-verbal communication",
          icon: <Globe className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
            { name: "MindTools", url: "https://www.mindtools.com/" },
            { name: "Toastmasters", url: "https://www.toastmasters.org/" }
          ]
        },
        {
          title: "Leadership & Teamwork",
          description: "Develop leadership and collaboration skills",
          icon: <Award className="w-6 h-6 text-brown-600" />,
          links: [
            { name: "Coursera: Teamwork", url: "https://www.coursera.org/learn/teamwork-skills" },
            { name: "Harvard ManageMentor", url: "https://hbr.org/harvard-managementor" },
            { name: "FutureLearn", url: "https://www.futurelearn.com/" }
          ]
        }
      ]
    }
  }

  const softSkillTips = [
    {
      title: "Emotional Intelligence",
      description: "Enhance your ability to understand and manage emotions",
      icon: <Brain className="w-10 h-10 text-brown-600 mx-auto mb-3" />,
      url: "https://www.skillsyouneed.com/eq/index.html"
    },
    {
      title: "Public Speaking Practice",
      description: "Practice public speaking through interactive activities",
      icon: <Target className="w-10 h-10 text-red-600 mx-auto mb-3" />,
      url: "https://virtualspeech.com/"
    },
    {
      title: "Networking Skills",
      description: "Build strong personal and professional relationships",
      icon: <Globe className="w-10 h-10 text-green-600 mx-auto mb-3" />,
      url: "https://www.mindtools.com/pages/article/networking.htm"
    }
  ]

  const defaultTips = [
    {
      title: "Resume Building",
      description: "Create a standout professional resume",
      icon: <Book className="w-10 h-10 text-brown-600 mx-auto mb-3" />,
      url: "https://www.canva.com/resumes/templates/"
    },
    {
      title: "Mock Interviews",
      description: "Practice with AI-powered interview simulations",
      icon: <Target className="w-10 h-10 text-green-600 mx-auto mb-3" />,
      url: "/dashboard"
    },
    {
      title: "Skill Assessment",
      description: "Identify and improve your key skills",
      icon: <Brain className="w-10 h-10 text-brown-600 mx-auto mb-3" />,
      url: "https://www.skillvalue.com/"
    }
  ]

  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              🚀 The Ultimate Resource Vault
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Your one-stop path to career confidence — sharpen skills, ace aptitude, and conquer interviews.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(resourceCategories).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${activeCategory === key
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white text-gray-900 hover:bg-brown-100 border border-gray-200'}`}
              >
                {val.icon}
                {key.charAt(0).toUpperCase() + key.slice(1)} Resources
              </button>
            ))}
          </div>

          {/* Resource Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
            {resourceCategories[activeCategory].resources.map((resource, idx) => (
              <ResourceCard key={idx} {...resource} />
              // jo v component ya tags hote h usme ek default property hoti h i.e. key jisko hm map use krte waqt use krte h taki jitni bar loop chale utni bar wo component render ho sake
            ))}
          </div>

          {/* Extra Tips */}
          <div className="mt-20 bg-white/50 backdrop-blur-lg border border-white/40 rounded-xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              🌟 Secret Sauce for Success
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              {(activeCategory === 'softskills' ? softSkillTips : defaultTips).map((tip, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all group"
                >
                  {tip.icon}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-3">{tip.description}</p>
                  <a
                    href={tip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-brown-700 font-medium"
                  >
                    Let’s Go <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
