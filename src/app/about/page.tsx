import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About us | Global Gourmet Guide - A Food Blogger's Journey",
  description: "Discover the story behind Global Gourmet Guide - from a world-traveling food blogger's childhood adventures to curating 160 exceptional restaurants across 18 cities worldwide.",
  keywords: "about us, food blogger, restaurant guide, culinary journey, global cuisine, travel experiences",
}

export default function AboutPage() {
  return (
    <div style={{backgroundColor: '#b07968'}}>
      {/* Clean divider line */}
      <div className="w-full h-px bg-white opacity-30"></div>

      {/* Hero Content Section */}
      <section className="py-20" style={{backgroundColor: '#b07968'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Massive Typography Treatment */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
              ABOUT US
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
              OUR STORY
            </h2>
            <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed uppercase tracking-wide">
              A food blogger's journey<br />
              from childhood travels to global dining
            </p>
          </div>
        </div>
      </section>

      {/* Food Blogger Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              MY CULINARY JOURNEY
            </h2>
            <div className="w-24 h-px mx-auto mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
            <p className="text-lg max-w-xl mx-auto uppercase tracking-wide" style={{color: '#8b6355'}}>
              FROM CHILDHOOD WANDERER TO GLOBAL GOURMET GUIDE
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <div style={{color: '#5a453e', lineHeight: '1.8'}} className="text-base md:text-lg">
              <p className="mb-8">
                My love affair with food began before I could even properly hold a fork. Born to parents whose wanderlust was matched only by their curiosity for authentic flavors, I spent my childhood as a reluctant but fortunate nomad, traversing continents and collecting taste memories that would shape my entire life's work.
              </p>

              <p className="mb-8">
                By the age of eight, I had already experienced the smoky char of street-side satay in Jakarta's bustling Jalan Alor, where vendors worked their magic over glowing charcoal while motorcycles weaved between plastic stools. I remember my small hands struggling to master chopsticks in a tiny Tokyo ramen shop, where the owner—a elderly man with flour-dusted apron—would beam with pride every time I managed to slurp the noodles properly, understanding even then that food was more than sustenance; it was a language of love, tradition, and connection.
              </p>

              <p className="mb-8">
                Those formative years were a masterclass in global cuisine, though I didn't realize it at the time. In Morocco, I learned to appreciate the patience required for a proper tagine, watching steam rise from clay pots in Marrakech's medina while the call to prayer echoed across terracotta rooftops. In Mumbai, my taste buds were awakened by the explosive complexity of street chaat, where sweet, sour, spicy, and umami converged in ways that made my young palate dance with confusion and delight.
              </p>

              <p className="mb-8">
                The real transformation happened during a three-month stay in Lyon, France, when I was twelve. My family had rented a small apartment above a boulangerie, and every morning I would wake to the intoxicating aroma of freshly baked croissants and pain au chocolat. The baker, Monsieur Laurent, took pity on this curious foreign child and began teaching me about the alchemy of bread-making. It was in his warm, flour-dusted kitchen that I first understood food as an art form—the precision, the passion, the way a simple combination of flour, water, and time could create something that brought joy to an entire neighborhood.
              </p>

              <p className="mb-8">
                As I grew older, my travels became more intentional. University breaks were spent not on beaches or party destinations, but in places like Istanbul's Grand Bazaar, learning to distinguish between different grades of saffron from spice merchants who had inherited their knowledge through generations. I spent a summer working in a family-run trattoria in Tuscany, where Nonna Isabella taught me that the best carbonara requires only five ingredients but a lifetime of understanding. In Bangkok, I navigated floating markets at dawn, watching vendors prepare som tam with mortars and pestles worn smooth by decades of use.
              </p>

              <p className="mb-8">
                Each destination added layers to my understanding of what makes a truly exceptional dining experience. It wasn't just about the food—though that was paramount—but about the stories, the traditions, the sense of place that a great restaurant could capture and share. I began to realize that the best meals were often found not in guidebooks, but through conversations with taxi drivers, recommendations from hotel housekeepers, and that magical moment when you stumble upon a place that locals whisper about with reverence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Curate Section */}
      <section className="py-24" style={{backgroundColor: '#f5f0ed'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
              OUR CURATION PROCESS
            </h2>
            <div className="w-24 h-px mx-auto mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
            <p className="text-lg max-w-2xl mx-auto uppercase tracking-wide" style={{color: '#8b6355'}}>
              FROM DISCOVERY TO RECOMMENDATION
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <div style={{color: '#5a453e', lineHeight: '1.8'}} className="text-base md:text-lg">
              <p className="mb-8">
                After decades of eating my way across the globe, I realized that my greatest joy came not just from discovering exceptional restaurants, but from sharing those discoveries with fellow food enthusiasts. This realization birthed Global Gourmet Guide—not as a business venture, but as a passion project born from countless conversations with frustrated travelers who had suffered through mediocre meals because they didn't know where to find the good stuff.
              </p>

              <p className="mb-8">
                Our recommendation process is intensely personal and rigorously systematic. Every restaurant in our guide must pass what I call the "memory test"—would this meal create a lasting memory? Would you find yourself describing it to friends weeks later? Would you make a detour on your next visit to this city just to return here? If the answer to any of these questions is no, it doesn't make the cut.
              </p>

              <p className="mb-8">
                I start with extensive research, combing through thousands of reviews across multiple platforms—Google Reviews, TripAdvisor, local food blogs, and social media. But numbers alone don't tell the whole story. I look for patterns in the language reviewers use. Do they talk about the food with genuine enthusiasm? Do they mention specific dishes that made an impression? Are there recurring mentions of exceptional service, unique atmosphere, or that indefinable quality that makes a meal special?
              </p>

              <p className="mb-8">
                Local expertise is crucial to our process. In every city we cover, I've cultivated relationships with food writers, chefs, longtime residents, and fellow travelers whose palates I trust. These connections often lead to discoveries that would never appear in mainstream guidebooks—the family-run Pakistani restaurant in London's East End that serves the best karahi outside of Lahore, or the tiny Parisian bistro that has been perfecting the same six dishes for three generations.
              </p>

              <p className="mb-8">
                Quality assurance extends beyond just great food. We consider the complete dining experience: Is the restaurant consistently good, or was it just having a stellar night when the reviews were written? How do they handle busy periods? Are they treating their staff well? Is the establishment financially stable and likely to still be operating when our readers visit? These practical considerations ensure that our recommendations remain reliable over time.
              </p>

              <p className="mb-8">
                Diversity and inclusivity are fundamental to our curation philosophy. A great city's food scene cannot be captured by featuring only fine dining establishments or only budget-friendly options. Our selections deliberately span price points, cuisines, neighborhoods, and dining styles. Whether you're celebrating a special occasion with a tasting menu or looking for the best late-night bite after a long day of exploring, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion and Numbers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight" style={{color: '#8b6355'}}>
              OUR GROWING NETWORK
            </h2>
            <div className="w-24 h-px mx-auto mb-6" style={{backgroundColor: '#e6d1c9'}}></div>
            <p className="text-lg max-w-2xl mx-auto uppercase tracking-wide" style={{color: '#8b6355'}}>
              CONNECTING FOOD LOVERS WORLDWIDE
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#b07968'}}>160</div>
              <div className="text-sm uppercase tracking-wide" style={{color: '#8b6355'}}>Curated Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#b07968'}}>18</div>
              <div className="text-sm uppercase tracking-wide" style={{color: '#8b6355'}}>Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#b07968'}}>5</div>
              <div className="text-sm uppercase tracking-wide" style={{color: '#8b6355'}}>Countries Explored</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-4" style={{color: '#b07968'}}>4.5+</div>
              <div className="text-sm uppercase tracking-wide" style={{color: '#8b6355'}}>Average Rating</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <div style={{color: '#5a453e', lineHeight: '1.8'}} className="text-base md:text-lg">
              <p className="mb-8">
                What started as a personal project has evolved into a comprehensive guide featuring 160 exceptional restaurants across 18 cities and 5 countries. From the Michelin-starred temples of gastronomy in Paris to the vibrant street food scenes of Karachi, from the innovative fusion restaurants of Los Angeles to the traditional BBQ joints of Peshawar, our guide represents the full spectrum of global dining excellence.
              </p>

              <p className="mb-8">
                Our expansion strategy is driven by both opportunity and demand. We prioritize cities with rich culinary traditions, diverse food scenes, and strong communities of food enthusiasts. Currently, we're deep in research for upcoming coverage of Istanbul, Mexico City, and Singapore—three cities that consistently appear on food lovers' bucket lists and deserve the thorough treatment we're known for.
              </p>

              <p className="mb-8">
                Each new city addition requires months of preparation. I typically spend 3-4 weeks on the ground, eating multiple meals per day, building relationships with local food communities, and understanding the cultural context that makes each destination's cuisine unique. It's an intensive process, but it's the only way to ensure the depth and authenticity that our readers expect.
              </p>

              <p className="mb-8">
                The response from travelers and food enthusiasts has been overwhelmingly positive. We regularly receive messages from readers who discovered their new favorite restaurant through our recommendations, or who credit us with helping them navigate unfamiliar cities with confidence. These connections—between our guide and grateful travelers, between restaurants and new customers, between food cultures and curious palates—are what make this work meaningful.
              </p>

              <p className="mb-8">
                Looking ahead, we're committed to maintaining the personal touch and rigorous standards that have defined Global Gourmet Guide while expanding our reach to serve food lovers in even more destinations. Whether you're planning a culinary pilgrimage or simply looking for a great meal in your own city, our goal remains the same: to connect you with dining experiences that will become lasting memories.
              </p>

              <p className="mb-8">
                Food, after all, is one of humanity's greatest shared pleasures. It transcends language barriers, cultural differences, and geographical boundaries. When you bite into perfectly prepared dish, whether it's at a roadside stall or a world-renowned restaurant, you're participating in a tradition that connects us all. This is the magic I discovered as a wandering child, and it's the magic I hope to share with every reader of Global Gourmet Guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-white" style={{backgroundColor: '#8b6355'}}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
            JOIN THE<br />
            JOURNEY
          </h2>
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto mb-16 uppercase tracking-wide leading-relaxed">
            DISCOVER YOUR NEXT UNFORGETTABLE MEAL<br />
            WITH GLOBAL GOURMET GUIDE
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-none p-8 max-w-3xl mx-auto">
            <p className="text-white mb-6 text-lg leading-relaxed">
              Have a restaurant recommendation? Want to suggest a city for our next expansion? 
              Share your culinary discoveries with our community of food lovers.
            </p>
            <p className="text-white opacity-80 text-base">
              Every great restaurant in our guide started as someone's personal discovery. 
              Help us continue building the world's most trusted culinary resource.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}