import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Global Gourmet Guide",
  description: "Privacy Policy for Global Gourmet Guide - How we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div style={{backgroundColor: '#b07968'}}>
      {/* Clean divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Hero Content Section */}
      <section className="py-14" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
              PRIVACY
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
              POLICY
            </h2>
            <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide">
              How we protect and use<br />
              your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div style={{color: '#5a453e', lineHeight: '1.8'}} className="text-base md:text-lg">
              
              <div className="mb-12">
                <p className="text-sm text-gray-500 mb-8">
                  <strong>Last Updated:</strong> January 26, 2025
                </p>
                
                <p className="mb-6">
                  At Global Gourmet Guide ("we," "our," or "us"), we are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding your data when you visit our website at restaurantsnearme.tech (the "Service").
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  INFORMATION WE COLLECT
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Information You Provide</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Contact information when you reach out to us</li>
                  <li>Feedback, comments, or reviews you submit</li>
                  <li>Newsletter subscription information (if applicable)</li>
                </ul>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Information Automatically Collected</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance your browsing experience</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, and navigation behavior</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  HOW WE USE YOUR INFORMATION
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our Service</li>
                  <li>Improve and personalize your experience</li>
                  <li>Analyze usage patterns and site performance</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send newsletters or updates (only with your consent)</li>
                  <li>Detect and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  COOKIES AND TRACKING
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">We use the following types of cookies:</p>
                
                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Essential Cookies</h3>
                <p className="mb-4">Required for basic site functionality and cannot be disabled.</p>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Analytics Cookies</h3>
                <p className="mb-4">Help us understand how visitors interact with our site through Google Analytics and Vercel Analytics.</p>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Advertising Cookies</h3>
                <p className="mb-6">Used by Google AdSense to display relevant advertisements.</p>

                <p className="mb-4">
                  You can manage your cookie preferences through our consent banner or your browser settings. Note that disabling certain cookies may affect site functionality.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  THIRD-PARTY SERVICES
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Google Analytics</h3>
                <p className="mb-4">We use Google Analytics to analyze website usage. Google may use this data as described in their Privacy Policy.</p>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Google AdSense</h3>
                <p className="mb-4">We display advertisements through Google AdSense, which may use cookies to show relevant ads.</p>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Vercel Analytics</h3>
                <p className="mb-6">We use Vercel Analytics for privacy-friendly website analytics.</p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  DATA SHARING AND DISCLOSURE
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who help us operate our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  YOUR RIGHTS (GDPR)
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">If you are in the European Economic Area, you have the following rights:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to processing of your data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  DATA SECURITY
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  DATA RETENTION
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Analytics data is typically retained for 26 months.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  INTERNATIONAL TRANSFERS
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  CHILDREN'S PRIVACY
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  Our Service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  CHANGES TO THIS POLICY
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  CONTACT US
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-none border-l-4" style={{borderColor: '#b07968'}}>
                  <p className="mb-2"><strong>Global Gourmet Guide</strong></p>
                  <p className="mb-2">Email: privacy@restaurantsnearme.tech</p>
                  <p>Website: https://restaurantsnearme.tech</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white" style={{backgroundColor: '#8b6355'}}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tight">
            QUESTIONS ABOUT<br />
            YOUR PRIVACY?
          </h2>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto uppercase tracking-wide leading-relaxed">
            WE'RE HERE TO HELP AND ENSURE<br />
            YOUR DATA IS PROTECTED
          </p>
        </div>
      </section>
    </div>
  )
}