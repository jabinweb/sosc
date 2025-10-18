export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              School of Social Change
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Important information about our services, content, and limitations of liability.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> October 17, 2025
            </p>

            <div className="space-y-8">
              {/* General Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The information provided by School of Social Change (&quot;SOSC,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
                  on our website and through our services is for general informational and educational purposes only. 
                  All information is provided in good faith, however, we make no representation or warranty of any kind, 
                  express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness 
                  of any information.
                </p>
              </section>

              {/* Educational Content */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Educational Content Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our educational programs, research, and content related to addressing education mortality are provided 
                  for informational and educational purposes. Please note:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Educational outcomes may vary based on individual circumstances</li>
                  <li>Our programs do not guarantee specific results or improvements</li>
                  <li>Professional educational advice should be sought for specific situations</li>
                  <li>Research findings are subject to ongoing study and validation</li>
                  <li>Implementation of our methodologies should be adapted to local contexts</li>
                </ul>
              </section>

              {/* Professional Advice */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Advice Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The content provided through SOSC should not be considered as professional educational, psychological, 
                  or legal advice. While our team includes qualified professionals, our services are not a substitute 
                  for professional consultation. Always seek the advice of qualified professionals regarding specific 
                  educational, mental health, or legal matters.
                </p>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. External Links Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to external sites that are not operated by us. Please be aware that:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We have no control over the content and practices of these sites</li>
                  <li>We cannot and do not assume responsibility for their content or privacy policies</li>
                  <li>The inclusion of any links does not imply endorsement by us</li>
                  <li>You should review the terms and privacy policies of external sites</li>
                </ul>
              </section>

              {/* Research and Data */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Research and Data Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SOSC conducts research on education mortality and related topics. Regarding our research:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Research findings are preliminary until peer-reviewed and published</li>
                  <li>Data interpretation may vary among different experts</li>
                  <li>Local variations may affect the applicability of findings</li>
                  <li>Ongoing research may modify or contradict previous conclusions</li>
                  <li>Statistical data should be interpreted within proper contexts</li>
                </ul>
              </section>

              {/* Technology and Website */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Technology and Website Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to keep our website running smoothly:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We cannot guarantee uninterrupted availability of our services</li>
                  <li>Technical issues may occasionally affect website functionality</li>
                  <li>We are not responsible for losses due to technical problems</li>
                  <li>Website content may be updated without notice</li>
                  <li>Compatibility with all devices and browsers is not guaranteed</li>
                </ul>
              </section>

              {/* Financial Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Financial and Donation Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Regarding donations and financial matters:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Donation impact estimates are projections and may vary</li>
                  <li>Financial transparency reports are prepared in good faith</li>
                  <li>Tax deductibility depends on applicable tax laws and individual circumstances</li>
                  <li>We recommend consulting tax professionals for donation-related advice</li>
                  <li>Currency exchange rates may affect international donations</li>
                </ul>
              </section>

              {/* Partnership Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Partnership and Collaboration Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  Information about our partners and collaborators is provided for transparency. 
                  However, partnership arrangements may change, and we are not responsible for 
                  the independent actions or policies of partner organizations. Each partnership 
                  operates under specific agreements that may not be fully detailed on our website.
                </p>
              </section>

              {/* Accessibility */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Accessibility Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to make our website accessible to all users, including those with disabilities. 
                  However, we cannot guarantee complete accessibility compliance at all times. 
                  If you experience accessibility issues, please contact us, and we will work to 
                  address them promptly.
                </p>
              </section>

              {/* Translation and Language */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Translation and Language Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  If content is provided in multiple languages, the English version shall be considered 
                  authoritative in case of any discrepancies. Translations are provided for convenience 
                  and may not capture all nuances of the original content.
                </p>
              </section>

              {/* Changes and Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes and Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  This disclaimer may be updated periodically to reflect changes in our services, 
                  legal requirements, or organizational policies. Continued use of our services 
                  after such modifications constitutes acceptance of the updated disclaimer.
                </p>
              </section>

              {/* Contact for Clarifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact for Clarifications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this disclaimer or need clarification on any aspect 
                  of our services, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>School of Social Change</strong><br />
                    H14, Parkview Apartments<br />
                    Mogappair ERI, Chennai 600 037<br />
                    Tamil Nadu, India<br />
                    Email: dexter@schoolofsocialchange.org<br />
                    Phone: +91 8010032343
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}