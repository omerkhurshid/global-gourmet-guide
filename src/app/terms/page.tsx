import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Global Gourmet Guide",
  description: "Terms of Service for Global Gourmet Guide - Terms and conditions for using our restaurant discovery platform.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div style={{backgroundColor: '#b07968'}}>
      {/* Clean divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Hero Content Section */}
      <section className="py-14" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
              TERMS OF
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
              SERVICE
            </h2>
            <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide">
              Agreement for using<br />
              Global Gourmet Guide
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div style={{color: '#5a453e', lineHeight: '1.8'}} className="text-base md:text-lg">
              
              <div className="mb-12">
                <p className="text-sm text-gray-500 mb-8">
                  <strong>Effective Date:</strong> January 26, 2025
                </p>
                
                <p className="mb-6">
                  Welcome to Global Gourmet Guide ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website at restaurantsnearme.tech (the "Service"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  1. USE OF SERVICE
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Eligibility</h3>
                <p className="mb-4">
                  You must be at least 13 years old to use our Service. By using our Service, you represent and warrant that you meet this age requirement.
                </p>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Acceptable Use</h3>
                <p className="mb-4">You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to use our Service:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others or that is harmful, threatening, abusive, or discriminatory</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  2. CONTENT
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>Our Content</h3>
                <p className="mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Global Gourmet Guide and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>

                <h3 className="text-lg font-bold mb-4" style={{color: '#8b6355'}}>User Content</h3>
                <p className="mb-4">
                  Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
                </p>
                
                <p className="mb-4">
                  By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  3. INTELLECTUAL PROPERTY
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  The Service and all contents, including but not limited to text, images, graphics, logos, button icons, software, audio files, video files, and data compilations, are the property of Global Gourmet Guide or its content suppliers and are protected by United States and international copyright laws.
                </p>
                
                <p className="mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on our Service, except as follows:
                </p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                  <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
                  <li>You may print or download one copy of a reasonable number of pages of the Service for your own personal, non-commercial use</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  4. RESTAURANT INFORMATION
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  The restaurant information provided on our Service is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
                </p>
                
                <p className="mb-4">
                  Restaurant details including but not limited to hours of operation, menu items, prices, and availability may change without notice. We recommend contacting restaurants directly to confirm current information before visiting.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  5. THIRD-PARTY LINKS
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by Global Gourmet Guide. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
                </p>
                
                <p className="mb-4">
                  You acknowledge and agree that Global Gourmet Guide shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  6. DISCLAIMERS
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, this Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                
                <p className="mb-4">
                  Global Gourmet Guide does not warrant that the Service will function uninterrupted, secure or available at any particular time or location; any errors or defects will be corrected; the Service is free of viruses or other harmful components; or the results of using the Service will meet your requirements.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  7. LIMITATION OF LIABILITY
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  In no event shall Global Gourmet Guide, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  8. INDEMNIFICATION
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless Global Gourmet Guide and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  9. TERMINATION
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                
                <p className="mb-4">
                  Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  10. GOVERNING LAW
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  11. CHANGES TO TERMS
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                
                <p className="mb-4">
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
                  12. CONTACT INFORMATION
                </h2>
                <div className="w-16 h-px mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
                
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-none border-l-4" style={{borderColor: '#b07968'}}>
                  <p className="mb-2"><strong>Global Gourmet Guide</strong></p>
                  <p className="mb-2">Email: legal@restaurantsnearme.tech</p>
                  <p className="mb-2">Website: https://restaurantsnearme.tech</p>
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
            OUR TERMS?
          </h2>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto uppercase tracking-wide leading-relaxed">
            WE'RE HERE TO HELP CLARIFY<br />
            ANY CONCERNS YOU MAY HAVE
          </p>
        </div>
      </section>
    </div>
  )
}