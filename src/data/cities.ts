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
    id: "tokyo-japan",
    name: "Tokyo",
    country: "Japan",
    description: "The world's greatest dining city, with more Michelin stars than any other on the planet. From legendary sushi counters in Ginza to bustling ramen shops, yakitori alleys, and three-star kaiseki temples, Tokyo offers an unmatched depth and breadth of culinary experience across every price point.",
    tagline: "The world's most Michelin-starred city — where sushi, ramen, and kaiseki reach perfection.",
    heroImage: "/images/cities/tokyo-hero.jpg",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    seoTitle: "Best Restaurants in Tokyo | Top Dining Guide 2025",
    seoDescription: "Discover Tokyo's best restaurants — from Michelin-starred sushi counters to legendary ramen shops. Your complete guide to eating in the world's greatest food city.",
    seoKeywords: [
      "restaurants Tokyo",
      "best restaurants Tokyo",
      "Tokyo dining guide",
      "Michelin restaurants Tokyo",
      "sushi Tokyo",
      "ramen Tokyo",
      "omakase Tokyo",
      "where to eat Tokyo"
    ],
    featuredRestaurants: ["tokyo-sukiyabashi-jiro", "tokyo-narisawa"],
    totalRestaurants: 10
  },
  {
    id: "bangkok-thailand",
    name: "Bangkok",
    country: "Thailand",
    description: "Asia's most exciting food city — home to the world's greatest street food, Michelin-starred Thai restaurants, and the progressive Indian cuisine of Gaggan Anand. Bangkok's food scene spans from $1 pad thai at Thip Samai to 25-course immersive tasting menus, all within the same frenetic, flavour-packed metropolis.",
    tagline: "Asia's most electrifying food city — where street stalls and Michelin stars share the same block.",
    heroImage: "/images/cities/bangkok-hero.jpg",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    seoTitle: "Best Restaurants in Bangkok | Top Thailand Dining Guide 2025",
    seoDescription: "Discover Bangkok's best restaurants — from Michelin-starred Thai cuisine to legendary street food. Your complete guide to eating in Thailand's most exciting food city.",
    seoKeywords: [
      "restaurants Bangkok",
      "best restaurants Bangkok",
      "Bangkok street food",
      "Thai food Bangkok",
      "Michelin restaurants Bangkok",
      "where to eat Bangkok",
      "Bangkok food guide",
      "best pad thai Bangkok"
    ],
    featuredRestaurants: ["bangkok-gaggan-anand", "bangkok-jay-fai"],
    totalRestaurants: 10
  },
  {
    id: "singapore-singapore",
    name: "Singapore",
    country: "Singapore",
    description: "A city-state that punches far above its weight in global gastronomy — home to multiple Michelin three-star restaurants, the world's most affordable Michelin meal ($3 chicken rice), and a hawker culture recognised by UNESCO as Intangible Cultural Heritage. Singapore's dining scene is one of Asia's densest and most diverse.",
    tagline: "Where Michelin stars and UNESCO hawker culture coexist in Asia's most concentrated food scene.",
    heroImage: "/images/cities/singapore-hero.jpg",
    coordinates: { lat: 1.3521, lng: 103.8198 },
    seoTitle: "Best Restaurants in Singapore | Top Dining Guide 2025",
    seoDescription: "Discover Singapore's best restaurants — from Odette's three Michelin stars to Hawker Chan's $3 chicken rice. Your complete guide to eating in Asia's most celebrated food city.",
    seoKeywords: [
      "restaurants Singapore",
      "best restaurants Singapore",
      "Michelin restaurants Singapore",
      "hawker food Singapore",
      "where to eat Singapore",
      "Singapore dining guide",
      "chicken rice Singapore",
      "fine dining Singapore"
    ],
    featuredRestaurants: ["singapore-odette", "singapore-hawker-chan"],
    totalRestaurants: 10
  },
  {
    id: "seoul-south-korea",
    name: "Seoul",
    country: "South Korea",
    description: "South Korea's capital has emerged as one of Asia's most dynamic food cities — the birthplace of Korean BBQ culture, home to three-Michelin-starred Korean fine dining, and a city where fermentation tradition and contemporary gastronomy meet at the highest level. Seoul's food scene reflects the country's extraordinary confidence in its own culinary identity.",
    tagline: "Where Korean BBQ tradition meets Michelin-starred fine dining in Asia's most dynamic food capital.",
    heroImage: "/images/cities/seoul-hero.jpg",
    coordinates: { lat: 37.5665, lng: 126.9780 },
    seoTitle: "Best Restaurants in Seoul | Top Korean Dining Guide 2025",
    seoDescription: "Discover Seoul's best restaurants — from Korean BBQ to Michelin-starred fine dining. Your complete guide to eating in South Korea's extraordinary food capital.",
    seoKeywords: [
      "restaurants Seoul",
      "best restaurants Seoul",
      "Korean BBQ Seoul",
      "Michelin restaurants Korea",
      "where to eat Seoul",
      "Seoul food guide",
      "Korean fine dining",
      "best food Seoul 2025"
    ],
    featuredRestaurants: ["seoul-mingles", "seoul-gaon"],
    totalRestaurants: 10
  },
  {
    id: "hong-kong-china",
    name: "Hong Kong",
    country: "Hong Kong",
    description: "The Cantonese culinary capital of the world — home to the world's first Chinese Michelin three-star restaurant, the most refined dim sum tradition anywhere, and a food culture of extraordinary depth that spans $3 wonton noodles and haute Cantonese fine dining with equal confidence. Hong Kong's food scene is dense, diverse, and unmissable.",
    tagline: "The Cantonese culinary capital — where the world's finest dim sum meets Michelin-starred Chinese fine dining.",
    heroImage: "/images/cities/hong-kong-hero.jpg",
    coordinates: { lat: 22.3193, lng: 114.1694 },
    seoTitle: "Best Restaurants in Hong Kong | Top Cantonese Dining Guide 2025",
    seoDescription: "Discover Hong Kong's best restaurants — from Lung King Heen's Michelin three stars to Tim Ho Wan's legendary dim sum. Your complete guide to eating in the world's Cantonese capital.",
    seoKeywords: [
      "restaurants Hong Kong",
      "best restaurants Hong Kong",
      "dim sum Hong Kong",
      "Cantonese restaurant Hong Kong",
      "Michelin Hong Kong",
      "where to eat Hong Kong",
      "Hong Kong food guide",
      "wonton noodles Hong Kong"
    ],
    featuredRestaurants: ["hk-tim-ho-wan", "hk-lung-king-heen"],
    totalRestaurants: 10
  },
  {
    id: "kuala-lumpur-malaysia",
    name: "Kuala Lumpur",
    country: "Malaysia",
    description: "Malaysia's capital offers one of Southeast Asia's most diverse and underrated food scenes — a city where Malay, Chinese, Indian, and Peranakan culinary traditions have evolved side by side for centuries, producing the extraordinary multi-cultural food culture that gave the world nasi lemak, char kway teow, and roti canai. Modern KL adds ambitious fine dining to this incomparable street food foundation.",
    tagline: "Southeast Asia's most diverse food city — where Malay, Chinese, and Indian traditions unite on one plate.",
    heroImage: "/images/cities/kuala-lumpur-hero.jpg",
    coordinates: { lat: 3.1390, lng: 101.6869 },
    seoTitle: "Best Restaurants in Kuala Lumpur | Top Malaysian Food Guide 2025",
    seoDescription: "Discover Kuala Lumpur's best restaurants — from Dewakan's Asia's 50 Best fine dining to legendary nasi kandar and Jalan Alor street food. Your complete guide to eating in Malaysia's most exciting city.",
    seoKeywords: [
      "restaurants Kuala Lumpur",
      "best restaurants KL",
      "Malaysian food KL",
      "nasi lemak KL",
      "where to eat Kuala Lumpur",
      "KL food guide",
      "street food KL",
      "fine dining Kuala Lumpur"
    ],
    featuredRestaurants: ["kl-dewakan", "kl-jalan-alor"],
    totalRestaurants: 10
  },
  {
    id: "osaka-japan",
    name: "Osaka",
    country: "Japan",
    description: "Japan's 'Kitchen City' — a place where eating well is treated as a civic virtue and where the phrase kuidaore ('eat until you drop') is a proud local motto. Osaka is home to three-Michelin-starred kaiseki and philosophical fine dining at Hajime, the world's most famous kushikatsu, the definitive takoyaki, and a BBQ culture that rivals Tokyo's in depth and passion.",
    tagline: "Japan's Kitchen City — where takoyaki, kushikatsu, and three-Michelin-starred kaiseki define the art of eating.",
    heroImage: "/images/cities/osaka-hero.jpg",
    coordinates: { lat: 34.6937, lng: 135.5023 },
    seoTitle: "Best Restaurants in Osaka | Top Japan Dining Guide 2025",
    seoDescription: "Discover Osaka's best restaurants — from Michelin-starred Hajime to legendary takoyaki and kushikatsu. Your complete guide to eating in Japan's Kitchen City.",
    seoKeywords: [
      "restaurants Osaka",
      "best restaurants Osaka",
      "takoyaki Osaka",
      "kushikatsu Osaka",
      "Michelin Osaka",
      "where to eat Osaka",
      "Osaka food guide",
      "kaiseki Osaka"
    ],
    featuredRestaurants: ["osaka-hajime", "osaka-kushikatsu-daruma"],
    totalRestaurants: 10
  },
  {
    id: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    description: "Bali's food scene has evolved from tourist-facing beach cafés to one of Southeast Asia's most compelling culinary destinations — anchored by Locavore's Asia's 50 Best-ranked farm-to-table Indonesian fine dining, complemented by Mozaic's tropical garden cuisine, and underpinned by the island's own extraordinary food culture of babi guling, bebek betutu, and the endless variety of warungs serving authentic Balinese cooking.",
    tagline: "From Asia's 50 Best farm-to-table dining to ceremonial babi guling — Bali's food scene is extraordinary.",
    heroImage: "/images/cities/bali-hero.jpg",
    coordinates: { lat: -8.3405, lng: 115.0920 },
    seoTitle: "Best Restaurants in Bali | Top Indonesia Dining Guide 2025",
    seoDescription: "Discover Bali's best restaurants — from Locavore's Asia's 50 Best fine dining in Ubud to legendary babi guling and Jimbaran seafood. Your complete guide to eating in Bali.",
    seoKeywords: [
      "restaurants Bali",
      "best restaurants Bali",
      "Ubud restaurants",
      "Seminyak restaurants",
      "where to eat Bali",
      "Bali food guide",
      "babi guling Bali",
      "fine dining Bali"
    ],
    featuredRestaurants: ["bali-locavore", "bali-warung-babi-guling-ibu-oka"],
    totalRestaurants: 10
  },
  {
    id: "shanghai-china",
    name: "Shanghai",
    country: "China",
    description: "China's most cosmopolitan and gastronomically diverse city — home to Ultraviolet's ten-seat immersive dining experience (the most radical restaurant concept in the world), the finest xiao long bao at Din Tai Fung's original counters, classical Shanghainese cuisine in 1920s French Concession mansions, and one of Asia's most dynamic contemporary dining scenes where Bund-view restaurants compete with lane-house neighbourhood gems.",
    tagline: "China's culinary capital — where immersive fine dining, soup dumplings, and the Bund converge.",
    heroImage: "/images/cities/shanghai-hero.jpg",
    coordinates: { lat: 31.2304, lng: 121.4737 },
    seoTitle: "Best Restaurants in Shanghai | Top China Dining Guide 2025",
    seoDescription: "Discover Shanghai's best restaurants — from Ultraviolet's immersive dining to Din Tai Fung's soup dumplings and Bund-view fine dining. Your complete guide to eating in China's most exciting food city.",
    seoKeywords: [
      "restaurants Shanghai",
      "best restaurants Shanghai",
      "xiao long bao Shanghai",
      "Bund restaurants",
      "where to eat Shanghai",
      "Shanghai food guide",
      "fine dining Shanghai",
      "soup dumplings China"
    ],
    featuredRestaurants: ["shanghai-ultraviolet", "shanghai-din-tai-fung"],
    totalRestaurants: 10
  },
  {
    id: "taipei-taiwan",
    name: "Taipei",
    country: "Taiwan",
    description: "Taiwan's capital has established itself as one of Asia's most compelling food destinations — home to three-Michelin-starred Cantonese dining at Le Palais, the original Din Tai Fung soup dumpling counters, RAW's internationally celebrated seasonal Taiwanese tasting menus, and Asia's greatest night market food culture. Taipei's food scene is a rare combination of technical excellence and democratic accessibility.",
    tagline: "Asia's greatest night markets, the original Din Tai Fung, and Michelin-starred Taiwanese fine dining.",
    heroImage: "/images/cities/taipei-hero.jpg",
    coordinates: { lat: 25.0330, lng: 121.5654 },
    seoTitle: "Best Restaurants in Taipei | Top Taiwan Dining Guide 2025",
    seoDescription: "Discover Taipei's best restaurants — from RAW's Asia's 50 Best fine dining to the original Din Tai Fung dumplings and legendary night markets. Your complete guide to eating in Taiwan's extraordinary food capital.",
    seoKeywords: [
      "restaurants Taipei",
      "best restaurants Taipei",
      "Din Tai Fung Taipei",
      "night market Taipei",
      "where to eat Taipei",
      "Taipei food guide",
      "Taiwanese fine dining",
      "xiao long bao Taipei"
    ],
    featuredRestaurants: ["taipei-raw", "taipei-din-tai-fung-xinyi"],
    totalRestaurants: 10
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