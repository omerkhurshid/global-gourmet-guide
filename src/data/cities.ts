import { City } from "./types";

export const cities: City[] = [
  {
    id: "london-uk",
    name: "London",
    country: "United Kingdom",
    description: "A culinary capital offering everything from traditional British fare to innovative international cuisine. Discover Michelin-starred restaurants, historic pubs, and vibrant food markets.",
    heroImage: "/images/cities/london-hero.jpg",
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    },
    seoTitle: "Best Restaurants in London | Top 20 Places to Eat Near You",
    seoDescription: "Discover London's best restaurants. Find top-rated dining spots near you, from fine dining to casual eats. Your guide to where to eat in London.",
    seoKeywords: [
      "restaurants London",
      "best restaurants London",
      "where to eat London",
      "London dining",
      "restaurants near me London",
      "London food guide",
      "top restaurants London",
      "fine dining London"
    ],
    featuredRestaurants: ["london-dishoom", "london-core-by-clare-smyth"],
    totalRestaurants: 10
  },
  {
    id: "lahore-pakistan", 
    name: "Lahore",
    country: "Pakistan",
    description: "The cultural and culinary heart of Pakistan, famous for its rich Mughlai cuisine, traditional BBQ, and vibrant food street culture. Experience authentic flavors and centuries-old recipes.",
    heroImage: "/images/cities/lahore-hero.jpg",
    coordinates: {
      lat: 31.5497,
      lng: 74.3436
    },
    seoTitle: "Best Restaurants in Lahore | Top Pakistani Food Places",
    seoDescription: "Discover Lahore's best restaurants and traditional Pakistani cuisine. Find top-rated karahi, BBQ, and Mughlai food spots in the cultural capital of Pakistan.",
    seoKeywords: [
      "restaurants Lahore",
      "best restaurants Lahore", 
      "Pakistani food Lahore",
      "Lahore dining",
      "karahi restaurants Lahore",
      "BBQ Lahore",
      "Food Street Lahore",
      "traditional food Lahore"
    ],
    featuredRestaurants: ["butt-karahi-lahore", "haveli-restaurant-lahore", "cooco-den-lahore"],
    totalRestaurants: 20
  },
  {
    id: "new-york-usa",
    name: "New York",
    country: "United States",
    description: "The ultimate dining destination with cuisines from every corner of the world. From iconic delis to Michelin-starred establishments, NYC offers unparalleled culinary diversity.",
    heroImage: "/images/cities/new-york-hero.jpg",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    seoTitle: "Best Restaurants in New York | Top NYC Dining Guide",
    seoDescription: "Discover New York's best restaurants. Find top-rated dining spots in NYC, from iconic delis to fine dining. Your guide to where to eat in New York City.",
    seoKeywords: [
      "restaurants New York",
      "best restaurants NYC",
      "where to eat New York",
      "NYC dining",
      "restaurants near me NYC",
      "New York food guide",
      "top restaurants Manhattan",
      "fine dining NYC"
    ],
    featuredRestaurants: ["new-york-semma", "new-york-le-bernardin", "new-york-eleven-madison-park"],
    totalRestaurants: 12
  },
  {
    id: "karachi-pakistan",
    name: "Karachi",
    country: "Pakistan", 
    description: "Pakistan's largest city and commercial hub, offering a diverse food scene with the best biryani, seafood, and street food. Experience the flavors of this vibrant coastal metropolis.",
    heroImage: "/images/cities/karachi-hero.jpg",
    coordinates: {
      lat: 24.8607,
      lng: 67.0011
    },
    seoTitle: "Best Restaurants in Karachi | Top Pakistani Food Places",
    seoDescription: "Discover Karachi's best restaurants and famous biryani spots. Find top-rated Pakistani cuisine, seafood, and street food in Pakistan's largest city.",
    seoKeywords: [
      "restaurants Karachi",
      "best restaurants Karachi",
      "biryani Karachi", 
      "Karachi dining",
      "seafood restaurants Karachi",
      "Pakistani food Karachi",
      "street food Karachi",
      "BBQ Karachi"
    ],
    featuredRestaurants: [],
    totalRestaurants: 20
  },
  {
    id: "paris-france",
    name: "Paris",
    country: "France",
    description: "The world's culinary capital, home to legendary bistros, patisseries, and Michelin-starred restaurants. Experience the art of French dining and discover why Paris sets the global standard for cuisine.",
    heroImage: "/images/cities/paris-hero.jpg",
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    },
    seoTitle: "Best Restaurants in Paris | Top French Dining Guide",
    seoDescription: "Discover Paris's best restaurants and French cuisine. Find top-rated bistros, fine dining, and classic Parisian eateries. Your guide to dining in the City of Light.",
    seoKeywords: [
      "restaurants Paris",
      "best restaurants Paris",
      "French cuisine Paris",
      "Paris dining",
      "bistros Paris",
      "fine dining Paris",
      "where to eat Paris",
      "Parisian restaurants"
    ],
    featuredRestaurants: ["paris-kei", "paris-lambroisie", "paris-guy-savoy"],
    totalRestaurants: 20
  },
  {
    id: "los-angeles-usa",
    name: "Los Angeles",
    country: "United States",
    description: "A dynamic food scene reflecting the city's diversity, from food trucks to celebrity chef restaurants. Experience innovative California cuisine, authentic ethnic foods, and trendy dining spots.",
    heroImage: "/images/cities/los-angeles-hero.jpg",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    },
    seoTitle: "Best Restaurants in Los Angeles | Top LA Dining Guide", 
    seoDescription: "Discover Los Angeles's best restaurants and California cuisine. Find top-rated dining spots in LA, from food trucks to fine dining. Your guide to eating in Los Angeles.",
    seoKeywords: [
      "restaurants Los Angeles",
      "best restaurants LA",
      "California cuisine LA",
      "Los Angeles dining",
      "food trucks LA",
      "celebrity chef restaurants LA",
      "where to eat Los Angeles",
      "LA food scene"
    ],
    featuredRestaurants: ["los-angeles-bestia", "los-angeles-n-naka"],
    totalRestaurants: 2
  },
  {
    id: "mumbai-india",
    name: "Mumbai",
    country: "India",
    description: "India's financial capital offers an incredible street food scene alongside fine dining. From iconic vada pav to upscale restaurants, Mumbai's food culture is diverse and vibrant.",
    heroImage: "/images/cities/mumbai-hero.jpg",
    coordinates: {
      lat: 19.0760,
      lng: 72.8777
    },
    seoTitle: "Best Restaurants in Mumbai | Top Indian Food Places",
    seoDescription: "Discover Mumbai's best restaurants and street food. Find top-rated dining spots in Mumbai, from local favorites to fine dining. Your guide to eating in Mumbai.",
    seoKeywords: [
      "restaurants Mumbai",
      "best restaurants Mumbai",
      "Mumbai street food",
      "Indian cuisine Mumbai",
      "Mumbai dining",
      "where to eat Mumbai",
      "Mumbai food guide",
      "street food Mumbai"
    ],
    featuredRestaurants: [],
    totalRestaurants: 20
  },
  {
    id: "delhi-india",
    name: "Delhi",
    country: "India",
    description: "India's capital is a paradise for food lovers, offering everything from Mughlai cuisine to contemporary Indian fare. Experience the rich culinary heritage of Old Delhi and modern dining in New Delhi.",
    heroImage: "/images/cities/delhi-hero.jpg",
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    },
    seoTitle: "Best Restaurants in Delhi | Top Indian Cuisine Guide",
    seoDescription: "Discover Delhi's best restaurants and traditional Indian cuisine. Find top-rated dining spots in Delhi, from street food to fine dining. Your guide to eating in Delhi.",
    seoKeywords: [
      "restaurants Delhi",
      "best restaurants Delhi",
      "Delhi street food",
      "Mughlai cuisine Delhi",
      "Delhi dining",
      "where to eat Delhi",
      "Delhi food guide",
      "Indian food Delhi"
    ],
    featuredRestaurants: [],
    totalRestaurants: 20
  },
  {
    id: "faisalabad-pakistan",
    name: "Faisalabad",
    country: "Pakistan",
    description: "Pakistan's textile capital offers a growing food scene with traditional Punjabi cuisine, modern restaurants, and family-friendly dining spots. Experience authentic Pakistani flavors in this industrial hub.",
    heroImage: "/images/cities/faisalabad-hero.jpg",
    coordinates: {
      lat: 31.4504,
      lng: 73.1350
    },
    seoTitle: "Best Restaurants in Faisalabad | Top Pakistani Food Places",
    seoDescription: "Discover Faisalabad's best restaurants and traditional Pakistani cuisine. Find top-rated dining spots in Pakistan's textile capital.",
    seoKeywords: [
      "restaurants Faisalabad",
      "best restaurants Faisalabad",
      "Pakistani food Faisalabad",
      "Faisalabad dining",
      "restaurants near me Faisalabad",
      "Punjabi cuisine Faisalabad",
      "BBQ Faisalabad",
      "family restaurants Faisalabad"
    ],
    featuredRestaurants: ["faisalabad-marhaba-mahal", "faisalabad-portobello", "faisalabad-salt-n-pepper-faisalabad"],
    totalRestaurants: 10
  },
  {
    id: "peshawar-pakistan",
    name: "Peshawar",
    country: "Pakistan",
    description: "The historic city of Peshawar offers authentic Pashtun cuisine, famous chappal kebabs, and traditional Afghan-influenced dishes. Experience the rich culinary heritage of Pakistan's ancient city.",
    heroImage: "/images/cities/peshawar-hero.jpg",
    coordinates: {
      lat: 34.0151,
      lng: 71.5249
    },
    seoTitle: "Best Restaurants in Peshawar | Top Pashtun Food Places",
    seoDescription: "Discover Peshawar's best restaurants and authentic Pashtun cuisine. Find top-rated chappal kebab and traditional Afghan-influenced dishes.",
    seoKeywords: [
      "restaurants Peshawar",
      "best restaurants Peshawar",
      "Pashtun food Peshawar",
      "chappal kebab Peshawar",
      "Peshawar dining",
      "Afghan cuisine Peshawar",
      "traditional food Peshawar",
      "Namak Mandi restaurants"
    ],
    featuredRestaurants: ["peshawar-habibi-restaurant", "peshawar-nisar-charsi-tikka", "peshawar-chief-burger"],
    totalRestaurants: 10
  },
  {
    id: "gujranwala-pakistan",
    name: "Gujranwala",
    country: "Pakistan",
    description: "Known as the city of wrestlers, Gujranwala offers hearty Punjabi cuisine, traditional BBQ, and family-style dining. Experience authentic Pakistani flavors in this historic Punjabi city.",
    heroImage: "/images/cities/gujranwala-hero.jpg",
    coordinates: {
      lat: 32.1877,
      lng: 74.1945
    },
    seoTitle: "Best Restaurants in Gujranwala | Top Punjabi Food Places",
    seoDescription: "Discover Gujranwala's best restaurants and traditional Punjabi cuisine. Find top-rated BBQ and family dining spots in the city of wrestlers.",
    seoKeywords: [
      "restaurants Gujranwala",
      "best restaurants Gujranwala",
      "Punjabi food Gujranwala",
      "BBQ Gujranwala",
      "Gujranwala dining",
      "family restaurants Gujranwala",
      "traditional food Gujranwala",
      "GT Road restaurants"
    ],
    featuredRestaurants: ["gujranwala-shahbaz-tikka", "gujranwala-manhattan-bites", "gujranwala-asal-cherry-family-restaurant"],
    totalRestaurants: 10
  },
  {
    id: "chicago-usa",
    name: "Chicago",
    country: "United States",
    description: "America's culinary playground where innovation meets tradition. From molecular gastronomy at Michelin-starred temples to neighborhood gems serving creative fusion, Chicago's diverse food scene reflects the city's immigrant heritage and bold spirit.",
    heroImage: "/images/cities/chicago-hero.jpg",
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    },
    seoTitle: "Best Restaurants in Chicago | Top Dining Guide",
    seoDescription: "Discover Chicago's best restaurants from molecular gastronomy to neighborhood favorites. Find top-rated dining spots in the Windy City's diverse culinary scene.",
    seoKeywords: [
      "restaurants Chicago",
      "best restaurants Chicago",
      "Chicago dining",
      "fine dining Chicago",
      "Chicago food scene",
      "Michelin star Chicago",
      "fusion restaurants Chicago",
      "where to eat Chicago"
    ],
    featuredRestaurants: ["chicago-alinea", "chicago-smyth", "chicago-lula-cafe"],
    totalRestaurants: 5
  },
  {
    id: "houston-usa",
    name: "Houston",
    country: "United States",
    description: "A sprawling culinary landscape where Texas BBQ meets global flavors. Houston's diverse population has created an incredible food scene featuring everything from legendary barbecue joints to upscale Mexican and innovative Asian cuisine.",
    heroImage: "/images/cities/houston-hero.jpg",
    coordinates: {
      lat: 29.7604,
      lng: -95.3698
    },
    seoTitle: "Best Restaurants in Houston | Top Texas Dining Guide",
    seoDescription: "Discover Houston's best restaurants from Texas BBQ to upscale Mexican cuisine. Find top-rated dining spots in America's most diverse culinary city.",
    seoKeywords: [
      "restaurants Houston",
      "best restaurants Houston",
      "Houston dining",
      "Texas BBQ Houston",
      "Mexican restaurants Houston",
      "Houston food scene",
      "fine dining Houston",
      "where to eat Houston"
    ],
    featuredRestaurants: ["houston-hugos", "houston-killens-bbq", "houston-uchi"],
    totalRestaurants: 5
  },
  {
    id: "san-francisco-usa",
    name: "San Francisco",
    country: "United States",
    description: "California's culinary capital where innovation and sustainability drive an extraordinary dining scene. From Michelin-starred temples of gastronomy to experimental communal dining, San Francisco pushes culinary boundaries while celebrating local ingredients.",
    heroImage: "/images/cities/san-francisco-hero.jpg",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    seoTitle: "Best Restaurants in San Francisco | Top California Dining Guide",
    seoDescription: "Discover San Francisco's best restaurants from Michelin-starred fine dining to innovative experimental cuisine. Find top-rated spots in the Bay Area's culinary capital.",
    seoKeywords: [
      "restaurants San Francisco",
      "best restaurants San Francisco",
      "San Francisco dining",
      "Michelin star San Francisco",
      "California cuisine",
      "Bay Area restaurants",
      "fine dining San Francisco",
      "where to eat San Francisco"
    ],
    featuredRestaurants: ["san-francisco-benu", "san-francisco-californios", "san-francisco-kiln"],
    totalRestaurants: 5
  }
];

export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

export function getCitiesByCountry(country: string): City[] {
  return cities.filter(city => city.country === country);
}

export function getAllCountries(): string[] {
  return [...new Set(cities.map(city => city.country))];
}