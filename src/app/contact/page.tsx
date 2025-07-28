import { Metadata } from "next"
import { Mail, MessageSquare, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Global Gourmet Guide",
  description: "Get in touch with Global Gourmet Guide - Contact us for restaurant recommendations, partnerships, or general inquiries.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div style={{backgroundColor: '#b07968'}}>
      {/* Clean divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Hero Content Section */}
      <section className="py-14" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
              CONTACT
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
              US
            </h2>
            <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide">
              We'd love to hear from you<br />
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              GET IN TOUCH
            </h2>
            <div className="w-24 h-px mx-auto mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
            <p className="text-lg max-w-xl mx-auto uppercase tracking-wide" style={{color: '#8b6355'}}>
              MULTIPLE WAYS TO REACH OUR TEAM
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-black mb-8 tracking-tight" style={{color: '#8b6355'}}>
                CONTACT INFORMATION
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" style={{color: '#b07968'}} />
                  <div>
                    <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Email Us</h4>
                    <p className="text-gray-600 mb-2">
                      General Inquiries: <a href="mailto:hello@restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">hello@restaurantsnearme.tech</a>
                    </p>
                    <p className="text-gray-600 mb-2">
                      Restaurant Submissions: <a href="mailto:submit@restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">submit@restaurantsnearme.tech</a>
                    </p>
                    <p className="text-gray-600 mb-2">
                      Partnership Opportunities: <a href="mailto:partners@restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">partners@restaurantsnearme.tech</a>
                    </p>
                    <p className="text-gray-600 mb-2">
                      Privacy Concerns: <a href="mailto:privacy@restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">privacy@restaurantsnearme.tech</a>
                    </p>
                    <p className="text-gray-600">
                      Legal Matters: <a href="mailto:legal@restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">legal@restaurantsnearme.tech</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" style={{color: '#b07968'}} />
                  <div>
                    <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Response Time</h4>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24-48 hours during business days. 
                      Restaurant submissions and partnership proposals may take up to 5 business days for review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 mt-1" style={{color: '#b07968'}} />
                  <div>
                    <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Website</h4>
                    <p className="text-gray-600">
                      <a href="https://restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">https://restaurantsnearme.tech</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Inquiries */}
            <div>
              <h3 className="text-2xl font-black mb-8 tracking-tight" style={{color: '#8b6355'}}>
                HOW WE CAN HELP
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 border-l-4" style={{borderColor: '#b07968'}}>
                  <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Restaurant Recommendations</h4>
                  <p className="text-gray-600">
                    Looking for specific cuisine or dining experience? Need recommendations for special dietary requirements? 
                    We're happy to provide personalized suggestions based on your preferences.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border-l-4" style={{borderColor: '#b07968'}}>
                  <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Submit a Restaurant</h4>
                  <p className="text-gray-600">
                    Know an exceptional restaurant that should be featured? We carefully review all submissions. 
                    Please include the restaurant name, location, and what makes it special.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border-l-4" style={{borderColor: '#b07968'}}>
                  <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Partnership Opportunities</h4>
                  <p className="text-gray-600">
                    Interested in collaborating? We work with restaurants, food brands, and tourism boards 
                    to showcase the best dining experiences worldwide.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border-l-4" style={{borderColor: '#b07968'}}>
                  <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Feedback & Suggestions</h4>
                  <p className="text-gray-600">
                    Your input helps us improve. Whether it's about website functionality, content accuracy, 
                    or new features you'd like to see, we value your feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="bg-gray-50 p-8 mt-12">
            <h3 className="text-2xl font-black mb-6 tracking-tight text-center" style={{color: '#8b6355'}}>
              BUSINESS INFORMATION
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              <p className="mb-4 text-gray-600">
                <strong style={{color: '#8b6355'}}>Global Gourmet Guide</strong><br />
                A Culinary Discovery Platform
              </p>
              <p className="mb-4 text-gray-600">
                Operating globally with a focus on curating exceptional dining experiences<br />
                Based in the United States
              </p>
              <p className="text-sm text-gray-500">
                For media inquiries, please contact: <a href="mailto:media@restaurantsnearme.tech" className="hover:text-[#b07968] transition-colors">media@restaurantsnearme.tech</a>
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h3 className="text-2xl font-black mb-8 tracking-tight text-center" style={{color: '#8b6355'}}>
              FREQUENTLY ASKED QUESTIONS
            </h3>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="border-b pb-6" style={{borderColor: '#e6d1c9'}}>
                <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>How are restaurants selected for your guide?</h4>
                <p className="text-gray-600">
                  Our curation process involves extensive research, local expertise, and personal visits. 
                  We look for restaurants that offer exceptional food, memorable experiences, and consistent quality.
                </p>
              </div>

              <div className="border-b pb-6" style={{borderColor: '#e6d1c9'}}>
                <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Can I advertise my restaurant on your platform?</h4>
                <p className="text-gray-600">
                  We maintain editorial independence in our recommendations. For partnership opportunities, 
                  please contact our partnerships team at partners@restaurantsnearme.tech.
                </p>
              </div>

              <div className="border-b pb-6" style={{borderColor: '#e6d1c9'}}>
                <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>How often is restaurant information updated?</h4>
                <p className="text-gray-600">
                  We regularly review and update our listings. However, we recommend contacting restaurants 
                  directly to confirm current hours, prices, and availability.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2" style={{color: '#8b6355'}}>Do you accept guest posts or sponsored content?</h4>
                <p className="text-gray-600">
                  We occasionally feature guest contributors who share our passion for exceptional dining. 
                  For content collaboration inquiries, please email us with your proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white" style={{backgroundColor: '#8b6355'}}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <MessageSquare className="w-16 h-16 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tight">
            WE'RE HERE<br />
            TO HELP
          </h2>
          <p className="text-lg text-white opacity-90 max-w-xl mx-auto uppercase tracking-wide leading-relaxed">
            YOUR CULINARY JOURNEY STARTS<br />
            WITH A SIMPLE CONVERSATION
          </p>
        </div>
      </section>
    </div>
  )
}