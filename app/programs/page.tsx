import Link from 'next/link';
import siteContent from '../../content/site-content.json';

interface Program {
  name: string;
  description: string;
}

export default function ProgramsPage() {
  const { programs } = siteContent;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {programs.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {programs.hero.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              {programs.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Three-Pillar Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work across three interconnected areas to create sustainable change in education and address education mortality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{programs.activatingExisting.name}</h3>
              <p className="text-sm text-brand-primary font-medium mb-4">{programs.activatingExisting.tagline}</p>
              <p className="text-gray-600 mb-6">{programs.activatingExisting.description}</p>
              <div className="space-y-3">
                {programs.activatingExisting.programs.map((program: Program, index: number) => (
                  <div key={index} className="border-l-3 border-brand-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{program.name}</h4>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Target: {programs.activatingExisting.targetAudience}</p>
                <p className="text-sm font-medium text-brand-primary">{programs.activatingExisting.callToAction}</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{programs.buildingOriginal.name}</h3>
              <p className="text-sm text-brand-secondary font-medium mb-4">{programs.buildingOriginal.tagline}</p>
              <p className="text-gray-600 mb-6">{programs.buildingOriginal.description}</p>
              <div className="space-y-3">
                {programs.buildingOriginal.programs.map((program: Program, index: number) => (
                  <div key={index} className="border-l-3 border-brand-secondary pl-4">
                    <h4 className="font-semibold text-gray-900">{program.name}</h4>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Target: {programs.buildingOriginal.targetAudience}</p>
                <p className="text-sm font-medium text-brand-secondary">{programs.buildingOriginal.callToAction}</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{programs.catalysingConversations.name}</h3>
              <p className="text-sm text-gray-800 font-medium mb-4">{programs.catalysingConversations.tagline}</p>
              <p className="text-gray-600 mb-6">{programs.catalysingConversations.description}</p>
              <div className="space-y-3">
                {programs.catalysingConversations.programs.map((program: Program, index: number) => (
                  <div key={index} className="border-l-3 border-gray-800 pl-4">
                    <h4 className="font-semibold text-gray-900">{program.name}</h4>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Target: {programs.catalysingConversations.targetAudience}</p>
                <p className="text-sm font-medium text-gray-800">{programs.catalysingConversations.callToAction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Through our three-pillar approach, we address education mortality by opening doors to learning and opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Access</h3>
              <p className="text-gray-600">Breaking down barriers that prevent children from accessing quality education</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Developing creative solutions for persistent educational challenges</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Engagement</h3>
              <p className="text-gray-600">Building sustainable change through civic conversations and community involvement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}