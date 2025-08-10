import { City } from "./types";

export const cities: City[] = [
  {
    id: "london-uk",
    name: "London",
    country: "United Kingdom",
    description: "A culinary capital offering everything from traditional British fare to innovative international cuisine. Discover Michelin-starred restaurants, historic pubs, and vibrant food markets.",
    tagline: "From historic pubs to Michelin stars, London's dining scene reigns supreme.",
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
    tagline: "Pakistan's food capital where Mughlai flavors and street food culture thrive.",
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
    featuredRestaurants: ["lahore-haveli-restaurant", "lahore-the-fred", "lahore-gaijin"],
    totalRestaurants: 16
  },
  {
    id: "new-york-usa",
    name: "New York",
    country: "United States",
    description: "The ultimate dining destination with cuisines from every corner of the world. From iconic delis to Michelin-starred establishments, NYC offers unparalleled culinary diversity.",
    tagline: "The world's culinary playground where every cuisine finds its perfect expression.",
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
    totalRestaurants: 22
  },
  {
    id: "karachi-pakistan",
    name: "Karachi",
    country: "Pakistan", 
    description: "Pakistan's largest city and commercial hub, offering a diverse food scene with the best biryani, seafood, and street food. Experience the flavors of this vibrant coastal metropolis.",
    tagline: "Coastal flavors meet legendary biryani in Pakistan's bustling metropolis.",
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
    totalRestaurants: 11
  },
  {
    id: "paris-france",
    name: "Paris",
    country: "France",
    description: "The world's culinary capital, home to legendary bistros, patisseries, and Michelin-starred restaurants. Experience the art of French dining and discover why Paris sets the global standard for cuisine.",
    tagline: "Where culinary artistry was born and continues to set global standards.",
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
    id: "nice-france",
    name: "Nice",
    country: "France",
    description: "The jewel of the French Riviera, where Mediterranean cuisine meets Michelin-starred excellence. From traditional Niçoise specialties to innovative fine dining, discover the culinary treasures of the Côte d'Azur.",
    tagline: "French Riviera elegance meets Mediterranean sunshine on every plate.",
    heroImage: "/images/cities/nice-hero.jpg",
    coordinates: {
      lat: 43.7102,
      lng: 7.2620
    },
    seoTitle: "Best Restaurants in Nice | Top French Riviera Dining Guide",
    seoDescription: "Discover Nice's best restaurants and Mediterranean cuisine. Find top-rated dining spots on the French Riviera, from Michelin stars to local bistros.",
    seoKeywords: [
      "restaurants Nice",
      "best restaurants Nice",
      "French Riviera dining",
      "Mediterranean cuisine Nice",
      "Michelin star Nice",
      "Niçoise cuisine",
      "Côte d'Azur restaurants",
      "fine dining Nice"
    ],
    featuredRestaurants: ["nice-flaveur", "nice-la-petite-maison"],
    totalRestaurants: 10
  },
  {
    id: "lyon-france",
    name: "Lyon",
    country: "France", 
    description: "France's gastronomic capital, where traditional bouchons meet innovative Michelin-starred cuisine. From Paul Bocuse's legendary restaurant to trendy bistros, Lyon offers the complete spectrum of French culinary excellence.",
    tagline: "France's gastronomic capital where bouchon traditions meet culinary innovation.",
    heroImage: "/images/cities/lyon-hero.jpg",
    coordinates: {
      lat: 45.7640,
      lng: 4.8357
    },
    seoTitle: "Best Restaurants in Lyon | France's Gastronomic Capital",
    seoDescription: "Discover Lyon's best restaurants from traditional bouchons to Michelin stars. Your guide to dining in France's gastronomic capital.",
    seoKeywords: [
      "restaurants Lyon",
      "best restaurants Lyon",
      "bouchon Lyon",
      "Lyon gastronomy",
      "Paul Bocuse Lyon",
      "French cuisine Lyon",
      "Michelin star Lyon",
      "traditional French food"
    ],
    featuredRestaurants: ["lyon-paul-bocuse", "lyon-tetedoie"],
    totalRestaurants: 10
  },
  {
    id: "strasbourg-france",
    name: "Strasbourg",
    country: "France",
    description: "Where French finesse meets Germanic heartiness in Alsatian cuisine. Experience traditional winstubs, Michelin-starred innovation, and the unique flavors of this historic crossroads city.",
    tagline: "French elegance meets Germanic tradition in Europe's culinary crossroads.",
    heroImage: "/images/cities/strasbourg-hero.jpg",
    coordinates: {
      lat: 48.5734,
      lng: 7.7521
    },
    seoTitle: "Best Restaurants in Strasbourg | Alsatian Cuisine Guide", 
    seoDescription: "Discover Strasbourg's best restaurants and Alsatian cuisine. From traditional winstubs to Michelin stars, explore the unique flavors of Eastern France.",
    seoKeywords: [
      "restaurants Strasbourg",
      "best restaurants Strasbourg",
      "Alsatian cuisine",
      "winstub Strasbourg",
      "traditional Alsatian food",
      "Strasbourg dining",
      "choucroute Strasbourg",
      "baeckeoffe"
    ],
    featuredRestaurants: ["strasbourg-buerehiesel", "strasbourg-maison-kammerzell"],
    totalRestaurants: 10
  },
  {
    id: "los-angeles-usa",
    name: "Los Angeles",
    country: "United States",
    description: "A dynamic food scene reflecting the city's diversity, from food trucks to celebrity chef restaurants. Experience innovative California cuisine, authentic ethnic foods, and trendy dining spots.",
    tagline: "California's diverse culinary landscape from food trucks to celebrity chefs.",
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
    featuredRestaurants: ["los-angeles-providence", "los-angeles-somni"],
    totalRestaurants: 10
  },
  {
    id: "mumbai-india",
    name: "Mumbai",
    country: "India",
    description: "India's financial capital offers an incredible street food scene alongside fine dining. From iconic vada pav to upscale restaurants, Mumbai's food culture is diverse and vibrant.",
    tagline: "Street food paradise where vada pav meets world-class fine dining.",
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
    featuredRestaurants: ["mumbai-the-table", "mumbai-trishna", "mumbai-bombay-brasserie"],
    totalRestaurants: 6
  },
  {
    id: "delhi-india",
    name: "Delhi",
    country: "India",
    description: "India's capital is a paradise for food lovers, offering everything from Mughlai cuisine to contemporary Indian fare. Experience the rich culinary heritage of Old Delhi and modern dining in New Delhi.",
    tagline: "Where Mughlai heritage meets contemporary Indian culinary innovation.",
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
    featuredRestaurants: ["delhi-bukhara", "delhi-indian-accent", "delhi-rajinder-da-dhaba"],
    totalRestaurants: 5
  },
  {
    id: "faisalabad-pakistan",
    name: "Faisalabad",
    country: "Pakistan",
    description: "Pakistan's textile capital offers a growing food scene with traditional Punjabi cuisine, modern restaurants, and family-friendly dining spots. Experience authentic Pakistani flavors in this industrial hub.",
    tagline: "Traditional Punjabi flavors in Pakistan's bustling industrial heartland.",
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
    tagline: "Ancient Silk Road flavors with legendary chappal kebabs and Afghan influences.",
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
    tagline: "Hearty Punjabi cuisine in the legendary city of champions.",
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
    tagline: "Bold culinary innovation meets deep-dish tradition in the Windy City.",
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
    tagline: "Texas BBQ tradition meets global culinary diversity in Space City.",
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
    tagline: "Where culinary innovation meets sustainability in the Golden State.",
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
  },
  {
    id: "bangalore-india",
    name: "Bangalore",
    country: "India",
    description: "India's Silicon Valley combines tech innovation with incredible culinary diversity. From traditional South Indian breakfast spots to craft breweries and fine dining, Bangalore's food scene reflects its cosmopolitan character and young energy.",
    tagline: "Tech innovation meets South Indian tradition in India's Silicon Valley.",
    heroImage: "/images/cities/bangalore-hero.jpg",
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    seoTitle: "Best Restaurants in Bangalore | Top South Indian Food Guide",
    seoDescription: "Discover Bangalore's best restaurants from traditional South Indian to craft breweries. Find top-rated dining spots in India's Silicon Valley.",
    seoKeywords: [
      "restaurants Bangalore",
      "best restaurants Bangalore",
      "South Indian food Bangalore",
      "Bangalore dining",
      "craft beer Bangalore",
      "fine dining Bangalore",
      "traditional breakfast Bangalore",
      "where to eat Bangalore"
    ],
    featuredRestaurants: ["bangalore-karavalli", "bangalore-mtr", "bangalore-toit"],
    totalRestaurants: 6
  },
  {
    id: "oxford-uk",
    name: "Oxford",
    country: "United Kingdom", 
    description: "The famous university city offers a sophisticated dining scene blending traditional English fare with international cuisines. From historic pubs to modern gastropubs and fine dining establishments, Oxford caters to students, academics, and food lovers alike.",
    tagline: "Academic excellence meets culinary sophistication in England's historic university town.",
    heroImage: "/images/cities/oxford-hero.jpg",
    coordinates: {
      lat: 51.7520,
      lng: -1.2577
    },
    seoTitle: "Best Restaurants in Oxford | Top Dining Spots Near University",
    seoDescription: "Discover Oxford's best restaurants from traditional pubs to fine dining. Find top-rated places to eat near Oxford University and city center.",
    seoKeywords: [
      "restaurants Oxford",
      "best restaurants Oxford",
      "Oxford dining",
      "restaurants near Oxford University",
      "gastropubs Oxford",
      "fine dining Oxford",
      "where to eat Oxford",
      "Oxford food guide"
    ],
    featuredRestaurants: ["oxford-le-manoir-aux-quat-saisons", "oxford-cherwell-boathouse"],
    totalRestaurants: 11
  },
  {
    id: "cambridge-uk", 
    name: "Cambridge",
    country: "United Kingdom",
    description: "Home to one of the world's oldest universities, Cambridge combines academic tradition with a vibrant food scene. Enjoy riverside dining, traditional tea rooms, innovative gastropubs, and restaurants serving cuisine from around the world.",
    tagline: "Where academic tradition meets innovative dining along the River Cam.",
    heroImage: "/images/cities/cambridge-hero.jpg",
    coordinates: {
      lat: 52.2053,
      lng: 0.1218
    },
    seoTitle: "Best Restaurants in Cambridge | Top University City Dining",
    seoDescription: "Discover Cambridge's best restaurants near the university. From traditional tea rooms to modern dining, find top-rated places to eat in this historic city.",
    seoKeywords: [
      "restaurants Cambridge",
      "best restaurants Cambridge", 
      "Cambridge dining",
      "restaurants near Cambridge University",
      "riverside dining Cambridge",
      "tea rooms Cambridge",
      "where to eat Cambridge",
      "Cambridge food guide"
    ],
    featuredRestaurants: ["cambridge-midsummer-house", "cambridge-restaurant-alimentum"],
    totalRestaurants: 11
  },
  {
    id: "edinburgh-uk",
    name: "Edinburgh", 
    country: "United Kingdom",
    description: "Scotland's capital city offers a rich culinary heritage featuring traditional Scottish fare alongside international cuisine. From whisky bars and traditional pubs to Michelin-starred establishments and modern Scottish restaurants, Edinburgh's food scene reflects its historic charm and cultural vibrancy.",
    tagline: "Scotland's capital where traditional Highland cuisine meets modern culinary innovation.",
    heroImage: "/images/cities/edinburgh-hero.jpg", 
    coordinates: {
      lat: 55.9533,
      lng: -3.1883
    },
    seoTitle: "Best Restaurants in Edinburgh | Top Scottish Dining Spots",
    seoDescription: "Discover Edinburgh's best restaurants featuring traditional Scottish cuisine and international dining. Find top-rated places to eat in Scotland's capital.",
    seoKeywords: [
      "restaurants Edinburgh",
      "best restaurants Edinburgh",
      "Edinburgh dining", 
      "Scottish restaurants Edinburgh",
      "whisky bars Edinburgh",
      "fine dining Edinburgh",
      "where to eat Edinburgh",
      "Edinburgh food guide"
    ],
    featuredRestaurants: ["edinburgh-the-witchery", "edinburgh-restaurant-martin-wishart"],
    totalRestaurants: 11
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