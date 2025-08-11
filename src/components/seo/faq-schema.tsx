import Script from 'next/script'

interface FAQSchemaProps {
  cityName?: string
  restaurantName?: string
  type: 'homepage' | 'city' | 'restaurant'
}

export function FAQSchema({ cityName, restaurantName, type }: FAQSchemaProps) {
  const generateFAQSchema = () => {
    const baseQuestions = [
      {
        question: "How do I find the best restaurants near me?",
        answer: "Use our restaurant finder to discover top-rated dining spots in your area. We curate restaurants based on ratings, reviews, cuisine type, and location to help you find the perfect dining experience."
      },
      {
        question: "What types of cuisine can I find on Restaurants Near Me?",
        answer: "Our platform features diverse cuisines including fine dining, casual dining, Asian, European, Mediterranean, Indian, American, and local specialties from around the world."
      },
      {
        question: "Are restaurant ratings and reviews reliable?",
        answer: "Yes, our ratings are based on verified reviews and comprehensive evaluations including food quality, service, atmosphere, and value for money from trusted sources."
      }
    ]

    if (type === 'city' && cityName) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          ...baseQuestions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })),
          {
            "@type": "Question",
            "name": `What are the best restaurants in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${cityName} offers an incredible dining scene with top-rated restaurants featuring both local specialties and international cuisines. Our curated list includes fine dining establishments, casual eateries, and hidden gems that showcase the best of ${cityName}'s culinary landscape.`
            }
          },
          {
            "@type": "Question",
            "name": `How many restaurants are featured in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We feature carefully selected restaurants in ${cityName}, focusing on quality over quantity. Each restaurant is chosen based on exceptional food, service, and overall dining experience to ensure you discover the very best ${cityName} has to offer.`
            }
          },
          {
            "@type": "Question",
            "name": `What types of cuisine are available in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${cityName} boasts a diverse culinary scene with restaurants serving everything from traditional local dishes to international cuisines. You'll find fine dining, casual restaurants, ethnic specialties, and innovative fusion concepts that reflect ${cityName}'s cosmopolitan dining culture.`
            }
          }
        ]
      }
    }

    if (type === 'restaurant' && restaurantName && cityName) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What type of cuisine does ${restaurantName} serve?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${restaurantName} is known for its exceptional cuisine and unique dining experience. Check our detailed restaurant profile for specific cuisine types, signature dishes, and what makes this ${cityName} restaurant special.`
            }
          },
          {
            "@type": "Question",
            "name": `Is ${restaurantName} highly rated?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${restaurantName} is featured on our platform because it meets our high standards for food quality, service, and overall dining experience. You can find detailed ratings and reviews in our restaurant profile.`
            }
          },
          {
            "@type": "Question",
            "name": `How do I make a reservation at ${restaurantName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Contact information for ${restaurantName} including phone number and website are available on our restaurant profile page. We recommend calling ahead or checking their website for reservation policies and availability.`
            }
          }
        ]
      }
    }

    // Homepage FAQ
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ...baseQuestions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        })),
        {
          "@type": "Question",
          "name": "Which cities are covered by Restaurants Near Me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover 21 major cities worldwide including New York, London, Paris, Tokyo, Sydney, Dubai, Mumbai, Bangkok, Singapore, Hong Kong, Toronto, Berlin, Rome, Barcelona, Amsterdam, Lahore, Oxford, Cambridge, Edinburgh, Istanbul, and Cape Town."
          }
        },
        {
          "@type": "Question",
          "name": "How often is restaurant information updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We regularly update our restaurant database to ensure accuracy of information including ratings, contact details, and menu highlights. Our team continuously reviews and adds new restaurants to keep our listings current."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find restaurants for special occasions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our curated selection includes restaurants perfect for romantic dinners, business meals, celebrations, casual dining, and special occasions. Use our detailed descriptions to find the perfect atmosphere for your needs."
          }
        }
      ]
    }
  }

  const schema = generateFAQSchema()

  return (
    <Script
      id={`faq-schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}