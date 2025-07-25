const fs = require('fs');
const path = require('path');

// Function to parse CSV
function parseCSV(csvContent) {
  const lines = csvContent.split('\n').filter(line => line.trim());
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const restaurants = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    // Parse CSV line (handle commas within quotes)
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length < 7) continue; // Skip incomplete rows

    const restaurant = {
      '#': values[0],
      'Name': values[1],
      'Location': values[2],
      'Rating & Reviews': values[3],
      'Summary of Reviews': values[4],
      'Description': values[5],
      'Cuisine': values[6],
      'City': values[7]
    };

    restaurants.push(restaurant);
  }

  return restaurants;
}

// Function to extract rating from text
function extractRating(ratingText) {
  if (!ratingText) return 4.0;
  const match = ratingText.match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 4.0;
}

// Function to extract review count
function extractReviewCount(ratingText) {
  if (!ratingText) return 100;
  const match = ratingText.match(/(\d+\.?\d*[KM]?)\s*(?:Google|reviews?)/i);
  if (match) {
    const count = match[1];
    if (count.includes('K')) {
      return Math.floor(parseFloat(count) * 1000);
    } else if (count.includes('M')) {
      return Math.floor(parseFloat(count) * 1000000);
    } else {
      return parseInt(count) || 100;
    }
  }
  return 100;
}

// Function to determine price level
function determinePriceLevel(description, cuisine) {
  const desc = (description || '').toLowerCase();
  const cuis = (cuisine || '').toLowerCase();
  
  if (desc.includes('fine-dining') || desc.includes('luxury') || desc.includes('upscale') || desc.includes('elegant')) {
    return '$$$';
  } else if (desc.includes('fast food') || desc.includes('café') || desc.includes('snacks') || cuis.includes('fast food')) {
    return '$';
  }
  return '$$';
}

// Function to get emoji based on cuisine
function getCuisineEmoji(cuisine) {
  const c = (cuisine || '').toLowerCase();
  if (c.includes('bbq') || c.includes('kebab') || c.includes('tikka')) return '🍖';
  if (c.includes('chinese') || c.includes('pan-asian') || c.includes('japanese')) return '🥡';
  if (c.includes('italian') || c.includes('pizza')) return '🍝';
  if (c.includes('continental') || c.includes('european')) return '🍽️';
  if (c.includes('café') || c.includes('bakery')) return '☕';
  if (c.includes('seafood')) return '🦐';
  if (c.includes('mediterranean') || c.includes('turkish')) return '🥙';
  if (c.includes('thai')) return '🍜';
  if (c.includes('french')) return '🥖';
  if (c.includes('pakistani') || c.includes('mughlai') || c.includes('karahi')) return '🍲';
  return '🍽️';
}

// Function to convert restaurant data
function convertRestaurant(restaurant, index) {
  const cuisineArray = restaurant.Cuisine ? restaurant.Cuisine.split(',').map(c => c.trim()) : ['Pakistani'];
  const rating = extractRating(restaurant['Rating & Reviews']);
  const reviewCount = extractReviewCount(restaurant['Rating & Reviews']);
  const priceLevel = determinePriceLevel(restaurant.Description, restaurant.Cuisine);
  const emoji = getCuisineEmoji(restaurant.Cuisine);

  return {
    id: `${restaurant.City.toLowerCase().replace(/\s+/g, '-')}-${restaurant.Name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: restaurant.Name,
    description: restaurant.Description || `Popular ${cuisineArray[0]} restaurant in ${restaurant.City}.`,
    cuisine: cuisineArray,
    priceLevel: priceLevel,
    rating: rating,
    reviewCount: reviewCount,
    address: {
      street: restaurant.Location || `${restaurant.City}, Pakistan`,
      city: restaurant.City,
      country: "Pakistan",
      postalCode: ""
    },
    location: {
      lat: getCoordinates(restaurant.City).lat,
      lng: getCoordinates(restaurant.City).lng
    },
    contact: {
      phone: "",
      website: "",
      email: ""
    },
    images: {
      hero: emoji,
      gallery: []
    },
    features: getFeatures(restaurant.Description),
    specialties: getSpecialties(restaurant['Summary of Reviews']),
    lastUpdated: "2024-12-25",
    sources: ["Google Reviews", "Local Research"],
    seoKeywords: [
      `${restaurant.Name} ${restaurant.City}`,
      `best restaurants ${restaurant.City}`,
      `${cuisineArray[0]} restaurant ${restaurant.City}`,
      `restaurants near me ${restaurant.City}`
    ]
  };
}

// Helper function to get coordinates (approximate)
function getCoordinates(city) {
  const coords = {
    'Karachi': { lat: 24.8607, lng: 67.0011 },
    'Lahore': { lat: 31.5497, lng: 74.3436 },
    'Faisalabad': { lat: 31.4504, lng: 73.1350 },
    'Peshawar': { lat: 34.0151, lng: 71.5249 },
    'Gujranwala': { lat: 32.1877, lng: 74.1945 }
  };
  return coords[city] || { lat: 31.5497, lng: 74.3436 };
}

// Helper function to extract features
function getFeatures(description) {
  const features = [];
  const desc = (description || '').toLowerCase();
  
  if (desc.includes('family')) features.push('Family Friendly');
  if (desc.includes('rooftop') || desc.includes('view')) features.push('Scenic Views');
  if (desc.includes('buffet')) features.push('Buffet');
  if (desc.includes('live music') || desc.includes('cultural')) features.push('Live Entertainment');
  if (desc.includes('outdoor')) features.push('Outdoor Seating');
  if (desc.includes('takeaway') || desc.includes('delivery')) features.push('Takeaway');
  
  return features.length > 0 ? features : ['Dine In'];
}

// Helper function to extract specialties
function getSpecialties(summary) {
  if (!summary) return ['House Specials'];
  
  const specialties = [];
  const dishes = summary.match(/\b(?:karahi|biryani|kebab|tikka|nihari|haleem|pulao|mandi|prawns|pizza|steaks?|lamb chops|mezze)\b/gi);
  
  if (dishes) {
    specialties.push(...dishes.slice(0, 4));
  }
  
  return specialties.length > 0 ? specialties : ['House Specials'];
}

// Main function
async function main() {
  try {
    // Read CSV file
    const csvPath = '/Users/omerkhurshid/Downloads/top_10_restaurants_pakistan_all_cities_with_city_column.csv';
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    
    // Parse CSV
    const restaurants = parseCSV(csvContent);
    console.log(`Parsed ${restaurants.length} restaurants`);
    
    // Group by city
    const restaurantsByCity = {};
    restaurants.forEach(restaurant => {
      const city = restaurant.City;
      if (!restaurantsByCity[city]) {
        restaurantsByCity[city] = [];
      }
      restaurantsByCity[city].push(restaurant);
    });
    
    // Convert and save each city's restaurants
    for (const [city, cityRestaurants] of Object.entries(restaurantsByCity)) {
      const convertedRestaurants = cityRestaurants.map((restaurant, index) => 
        convertRestaurant(restaurant, index)
      );
      
      // Determine file path
      const citySlug = city.toLowerCase().replace(/\s+/g, '-');
      const filePath = path.join(__dirname, '..', 'src', 'data', 'restaurants', 'pakistan', `${citySlug}.json`);
      
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Write JSON file
      fs.writeFileSync(filePath, JSON.stringify(convertedRestaurants, null, 2));
      console.log(`Created ${filePath} with ${convertedRestaurants.length} restaurants`);
    }
    
    console.log('✅ CSV conversion completed successfully!');
    
  } catch (error) {
    console.error('❌ Error converting CSV:', error);
  }
}

main();