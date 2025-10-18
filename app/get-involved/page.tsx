'use client';

import Link from 'next/link';
import { useState } from 'react';
import siteContent from '../../content/site-content.json';

export default function GetInvolvedPage() {
  const { getInvolved } = siteContent;
  const [donationAmount, setDonationAmount] = useState('1000');

  const handleDonationClick = (amount: string) => {
    setDonationAmount(amount);
    // Integration with payment gateway would go here
    alert(`Thank you for your interest in donating ₹${amount}. Payment integration will be implemented.`);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {getInvolved.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {getInvolved.hero.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              {getInvolved.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-brand-primary-50 via-white to-brand-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Together, we&apos;re making real changes in addressing education mortality across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">25+</div>
              <div className="text-sm md:text-base text-gray-600">Schools Transformed</div>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-brand-secondary mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Students Reached</div>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-brand-primary-600 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-600">Innovative Programs</div>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-brand-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-brand-secondary-600 mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-600">Civic Conversations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getInvolved.donate.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {getInvolved.donate.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getInvolved.donate.donationTiers.map((tier, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-brand-secondary hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary bg-opacity-10 rounded-full mb-6">
                  {index === 0 && (
                    <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                </div>
                <div className="text-4xl font-bold text-brand-secondary mb-4">
                  ₹{tier.amount.toLocaleString()}
                </div>
                <p className="text-gray-700 mb-6 min-h-[3rem] flex items-center justify-center">{tier.impact}</p>
                <button
                  onClick={() => handleDonationClick(tier.amount.toString())}
                  className="w-full bg-brand-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Donate Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Or choose your own amount:</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center bg-gray-50 rounded-lg p-3">
                <span className="text-xl mr-2 text-gray-700">₹</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-32 px-3 py-2 border-0 bg-transparent focus:outline-none focus:ring-0 text-lg font-semibold text-gray-900"
                  min="100"
                  placeholder="1000"
                />
              </div>
              <button
                onClick={() => handleDonationClick(donationAmount)}
                className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-800 transition-colors shadow-md hover:shadow-lg"
              >
                Donate Custom Amount
              </button>
            </div>
            <p className="text-sm text-gray-500">
              * All donations are tax-deductible. You will receive a receipt for tax purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getInvolved.volunteer.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {getInvolved.volunteer.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getInvolved.volunteer.opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {index === 0 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {opportunity.role}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium text-gray-900">Commitment:</span>
                        </p>
                        <p className="text-sm text-gray-700">{opportunity.commitment}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium text-gray-900">Skills Needed:</span>
                        </p>
                        <p className="text-sm text-gray-700">{opportunity.skills}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/volunteer/${opportunity.role.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-800 transition-colors block text-center"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Work With Us Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getInvolved.workWithUs.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {getInvolved.workWithUs.description}
            </p>
          </div>

          <div className="bg-brand-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Current Openings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getInvolved.workWithUs.currentOpenings.map((position, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {position}
                  </h4>
                  <Link
                    href={`/careers/${position.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-brand-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-secondary-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/careers"
                className="bg-brand-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-secondary-700 transition-colors"
              >
                View All Openings
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partnership Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary-50 to-brand-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Collaborate with School of Social Change to create systemic impact in addressing education mortality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Educational Institutions
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Transform your school or institution through our three-pillar approach
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                  Comprehensive transformation projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                  Teacher capacity building programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                  Student mental health initiatives
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-secondary rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Government & NGOs
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Policy collaboration and systemic change initiatives
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Policy research and advocacy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Community engagement programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Impact measurement frameworks
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-primary-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Corporate Partners
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                CSR partnerships for sustainable education impact
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary-700 rounded-full mr-3"></span>
                  Innovation lab collaborations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary-700 rounded-full mr-3"></span>
                  Employee volunteer programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary-700 rounded-full mr-3"></span>
                  Technology and resource support
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to create meaningful change together?
            </p>
            <a
              href="mailto:partnerships@schoolofsocialchange.org"
              className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-800 transition-colors inline-block"
            >
              Start a Partnership
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;d love to hear from you. Get in touch to learn more about how you can be part of addressing education mortality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-primary-800 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:dexter@schoolofsocialchange.org"
              className="border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
