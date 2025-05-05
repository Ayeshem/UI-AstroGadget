import { Product } from "../lib/types";

export const products: Product[] = [
  // Electric Rides (12)
  {
    id: "er-001",
    name: "NeoGlide X1 Electric Scooter",
    price: 799.99,
    image: "/placeholder.svg",
    tag: "Eco-Friendly",
    category: "electric-rides",
    description: "Ultra-light carbon fiber frame with 35-mile range and smart connectivity.",
    featured: true
  },
  {
    id: "er-002",
    name: "Volt Cruiser E-Bike",
    price: 1299.99,
    image: "/placeholder.svg",
    tag: "Long Range",
    category: "electric-rides",
    description: "Pedal-assist e-bike with 60-mile range and integrated safety lights.",
    featured: true
  },

  {

    id: "er-003",
    name: "TerraTrek Electric ATV",
    price: 2499.99,
    image: "/placeholder.jpeg",
    tag: "Off-Road",
    category: "electric-rides",
    description: "All-terrain electric vehicle with 4-wheel drive and 40-mile range.",
    featured: false
  },

  {
    id: "er-004",
    name: "SwiftBoard Electric Skateboard",
    price: 499.99,
    image: "public/placeholder.jpg",
    tag: "Urban Ride",
    category: "electric-rides",
    description: "Smooth electric skateboard with regenerative braking and wireless control.",
    featured: false
  },
  {
    id: "er-005",
    name: "HoverX Hoverboard",
    price: 399.99,
    image: "/placeholder.svg",
    tag: "Self-Balancing",
    category: "electric-rides",
    description: "Self-balancing hoverboard with LED wheels and mobile app.",
    featured: false
  },
  {
    id: "er-006",
    name: "VoltCycle Mini",
    price: 699.99,
    image: "/placeholder.svg",
    tag: "Compact",
    category: "electric-rides",
    description: "Compact foldable e-bike perfect for city commutes.",
    featured: false
  },
  {
    id: "er-007",
    name: "EcoRoller One",
    price: 349.99,
    image: "/placeholder.svg",
    tag: "Budget-Friendly",
    category: "electric-rides",
    description: "Entry-level electric scooter with LED display and cruise control.",
    featured: false
  },
  {
    id: "er-008",
    name: "TerrainX Quad",
    price: 1899.99,
    image: "/placeholder.svg",
    tag: "Adventure",
    category: "electric-rides",
    description: "Electric quad bike built for rugged outdoor exploration.",
    featured: true
  },
  {
    id: "er-009",
    name: "Glider Jetpack",
    price: 5999.99,
    image: "/placeholder.svg",
    tag: "Experimental",
    category: "electric-rides",
    description: "Personal flying jetpack using electric thrusters. Use with caution!",
    featured: false
  },
  {
    id: "er-010",
    name: "NeoWheel Solo",
    price: 799.99,
    image: "/placeholder.svg",
    tag: "Gyro-Control",
    category: "electric-rides",
    description: "Single-wheel self-balancing ride with futuristic design.",
    featured: false
  },
  {
    id: "er-011",
    name: "VoltMax Cruiser",
    price: 1399.99,
    image: "/placeholder.svg",
    tag: "Extended Range",
    category: "electric-rides",
    description: "Extended range e-bike with high-capacity battery.",
    featured: false
  },
  {
    id: "er-012",
    name: "RollerZ Hover Kart",
    price: 229.99,
    image: "/placeholder.svg",
    tag: "Fun Ride",
    category: "electric-rides",
    description: "Hoverboard kart attachment for high-speed racing fun.",
    featured: true
  },

  // Drones & Robots (12)
  {
    id: "dr-012",
    name: "MechaBuddy",
    price: 279.99,
    image: "/placeholder.svg",
    tag: "STEM",
    category: "drones-robots",
    description: "DIY robot kit for learning programming and robotics.",
    featured: false
  },
  {
    id: "dr-011",
    name: "AeroScout Drone",
    price: 499.99,
    image: "/placeholder.svg",
    tag: "Mapping",
    category: "drones-robots",
    description: "Survey drone for terrain mapping and aerial analysis.",
    featured: false
  },
  {
    id: "dr-008",
    name: "AutoPilot Cam Drone",
    price: 219.99,
    image: "/placeholder.svg",
    tag: "Follow-Me",
    category: "drones-robots",
    description: "Auto-tracking drone perfect for action shots and vlogging.",
    featured: false
  },
  {
    id: "dr-010",
    name: "BotChef Smart Assistant",
    price: 599.99,
    image: "/placeholder.svg",
    tag: "Kitchen Bot",
    category: "drones-robots",
    description: "AI-powered robot that helps you cook meals hands-free.",
    featured: true
  },
  {
    id: "dr-002",
    name: "RoboCompanion X3",
    price: 299.99,
    image: "/placeholder.svg",
    tag: "Interactive",
    category: "drones-robots",
    description: "Interactive robot companion with voice recognition and learning capabilities.",
    featured: false
  },
  {
    id: "dr-003",
    name: "SkyZoom Nano",
    price: 89.99,
    image: "/placeholder.svg",
    tag: "Portable",
    category: "drones-robots",
    description: "Mini drone with HD camera and gesture control.",
    featured: false
  },
  {
    id: "dr-004",
    name: "GuardianBot Home Assistant",
    price: 399.99,
    image: "/placeholder.svg",
    tag: "Smart Home",
    category: "drones-robots",
    description: "Voice-activated robot for home automation and monitoring.",
    featured: true
  },
  {
    id: "dr-005",
    name: "RoboPet Dino",
    price: 199.99,
    image: "/placeholder.svg",
    tag: "Kids",
    category: "drones-robots",
    description: "Interactive robotic pet with AI learning and fun tricks.",
    featured: false
  },
  {
    id: "dr-006",
    name: "DroneRacer X",
    price: 329.99,
    image: "/placeholder.svg",
    tag: "FPV",
    category: "drones-robots",
    description: "First-person view racing drone with VR headset compatibility.",
    featured: false
  },
  {
    id: "dr-007",
    name: "HoverSpy Surveillance Drone",
    price: 449.99,
    image: "/placeholder.svg",
    tag: "Security",
    category: "drones-robots",
    description: "Drone with night vision and GPS for property monitoring.",
    featured: true
  },

  {
    id: "dr-009",
    name: "FlyLens 360",
    price: 379.99,
    image: "/placeholder.svg",
    tag: "Panorama",
    category: "drones-robots",
    description: "Drone with 360° camera for immersive aerial photography.",
    featured: false
  },

  {
    id: "dr-001",
    name: "SkyView Pro Drone",
    price: 599.99,
    image: "/placeholder.svg",
    tag: "4K Camera",
    category: "drones-robots",
    description: "Professional-grade drone with 4K camera and 30-minute flight time.",
    featured: true
  },
  
  // Retro Tech (12)
  {
    id: "rt-001",
    name: "RetroPi Gaming Console",
    price: 129.99,
    image: "/placeholder.svg",
    tag: "Nostalgic",
    category: "retro-tech",
    description: "Classic gaming console with 2000+ pre-loaded games from the 80s and 90s.",
    featured: true
  },
  {
    id: "rt-002",
    name: "VinylStream Turntable",
    price: 189.99,
    image: "/placeholder.svg",
    tag: "Bluetooth",
    category: "retro-tech",
    description: "Classic vinyl turntable with modern bluetooth streaming capabilities.",
    featured: false
  },
  {
    id: "rt-003",
    name: "PixelVision Camera",
    price: 149.99,
    image: "/placeholder.svg",
    tag: "Digital-Retro",
    category: "retro-tech",
    description: "Digital camera with authentic vintage photo filters and instant printing.",
    featured: false
  },
  {
    id: "rt-004",
    name: "TypeMaster Keyboard",
    price: 89.99,
    image: "/placeholder.svg",
    tag: "Mechanical",
    category: "retro-tech",
    description: "Mechanical keyboard with typewriter-style keys and backlight.",
    featured: true
  },
  {
    id: "rt-005",
    name: "Classic TV Mini",
    price: 59.99,
    image: "/placeholder.svg",
    tag: "Mini",
    category: "retro-tech",
    description: "Mini television with knobs and dials playing classic shows.",
    featured: false
  },
  {
    id: "rt-006",
    name: "BoomBox Vibe",
    price: 109.99,
    image: "/placeholder.svg",
    tag: "Cassette",
    category: "retro-tech",
    description: "Cassette and radio boombox with rechargeable battery.",
    featured: false
  },
  {
    id: "rt-007",
    name: "PocketBoy Handheld",
    price: 69.99,
    image: "/placeholder.svg",
    tag: "Handheld",
    category: "retro-tech",
    description: "Retro handheld game console with pixel display.",
    featured: true
  },
  {
    id: "rt-008",
    name: "NeoPager",
    price: 39.99,
    image: "/placeholder.svg",
    tag: "Throwback",
    category: "retro-tech",
    description: "Fully functional pager with SMS relay support.",
    featured: false
  },
  {
    id: "rt-009",
    name: "AnalogCam 90s",
    price: 99.99,
    image: "/placeholder.svg",
    tag: "Film",
    category: "retro-tech",
    description: "Film camera with built-in flash and auto rewind.",
    featured: false
  },
  {
    id: "rt-010",
    name: "VHS Player Classic",
    price: 149.99,
    image: "/placeholder.svg",
    tag: "Retro Media",
    category: "retro-tech",
    description: "VHS player for nostalgic movie nights.",
    featured: false
  },
  {
    id: "rt-011",
    name: "DiscMan Revival",
    price: 79.99,
    image: "/placeholder.svg",
    tag: "CD",
    category: "retro-tech",
    description: "Portable CD player with anti-skip tech and headphones.",
    featured: true
  },
  {
    id: "rt-012",
    name: "CRT Monitor Lamp",
    price: 59.99,
    image: "/placeholder.svg",
    tag: "Decor",
    category: "retro-tech",
    description: "Lamp made from upcycled CRT screen shell.",
    featured: false
  },


    // Solar & Eco (12)
    {
      id: "se-001",
      name: "SolarCharge Backpack",
      price: 89.99,
      image: "/placeholder.svg",
      tag: "Portable Power",
      category: "solar-eco",
      description: "Backpack with built-in solar panel and USB charging port.",
      featured: true
    },
    {
      id: "se-002",
      name: "EcoBulb Lantern",
      price: 29.99,
      image: "/placeholder.svg",
      tag: "Rechargeable",
      category: "solar-eco",
      description: "Solar-powered LED lantern perfect for camping and emergencies.",
      featured: false
    },
    {
      id: "se-003",
      name: "SunWave Speaker",
      price: 49.99,
      image: "/placeholder.svg",
      tag: "Waterproof",
      category: "solar-eco",
      description: "Bluetooth speaker powered by solar energy with waterproof casing.",
      featured: true
    },
    {
      id: "se-004",
      name: "EcoClock Wall Charger",
      price: 19.99,
      image: "/placeholder.svg",
      tag: "Sustainable",
      category: "solar-eco",
      description: "Wall clock that charges via solar and also powers USB devices.",
      featured: false
    },
    {
      id: "se-005",
      name: "SolarStrap Charger",
      price: 39.99,
      image: "/placeholder.svg",
      tag: "Wearable",
      category: "solar-eco",
      description: "Wearable solar charging band for your wrist or backpack.",
      featured: false
    },
    {
      id: "se-006",
      name: "SunPot Solar Cooker",
      price: 99.99,
      image: "/placeholder.svg",
      tag: "Off-Grid",
      category: "solar-eco",
      description: "Portable solar-powered oven perfect for off-grid meals.",
      featured: true
    },
    {
      id: "se-007",
      name: "SolarMini Fan",
      price: 24.99,
      image: "/placeholder.svg",
      tag: "Desk",
      category: "solar-eco",
      description: "Compact solar desk fan for home or office use.",
      featured: false
    },
    {
      id: "se-008",
      name: "EcoTracker Smartwatch",
      price: 149.99,
      image: "/placeholder.svg",
      tag: "Fitness",
      category: "solar-eco",
      description: "Fitness watch with solar charging and eco materials.",
      featured: true
    },
    {
      id: "se-009",
      name: "SolarCube Lamp",
      price: 34.99,
      image: "/placeholder.svg",
      tag: "Foldable",
      category: "solar-eco",
      description: "Foldable solar light cube for camping or emergencies.",
      featured: false
    },
    {
      id: "se-010",
      name: "SolarTile Powerbank",
      price: 59.99,
      image: "/placeholder.svg",
      tag: "Dual Output",
      category: "solar-eco",
      description: "Solar powerbank with dual USB output and flashlight.",
      featured: false
    },
    {
      id: "se-011",
      name: "LeafPad Wireless Charger",
      price: 39.99,
      image: "/placeholder.svg",
      tag: "Eco Plastic",
      category: "solar-eco",
      description: "Wireless phone charger made from biodegradable materials.",
      featured: false
    },
    {
      id: "se-012",
      name: "EcoBot Garden Sensor",
      price: 89.99,
      image: "/placeholder.svg",
      tag: "Smart Garden",
      category: "solar-eco",
      description: "Solar-powered soil and light monitor with phone alerts.",
      featured: true
    },
  
    // Cool & Weird (12)
    {
      id: "cw-001",
      name: "USB Pet Rock",
      price: 14.99,
      image: "/placeholder.svg",
      tag: "Useless",
      category: "cool-weird",
      description: "A rock with a USB cable. Literally does nothing.",
      featured: true
    },
    {
      id: "cw-002",
      name: "Levitate Speaker Orb",
      price: 129.99,
      image: "/placeholder.svg",
      tag: "Floating",
      category: "cool-weird",
      description: "Bluetooth speaker that floats magnetically and spins.",
      featured: true
    },
    {
      id: "cw-003",
      name: "PixelFlame Lighter",
      price: 24.99,
      image: "/placeholder.svg",
      tag: "Digital",
      category: "cool-weird",
      description: "Electric lighter with retro pixel flame animation.",
      featured: false
    },
    {
      id: "cw-004",
      name: "Sneaker Toaster",
      price: 59.99,
      image: "/placeholder.svg",
      tag: "Collectible",
      category: "cool-weird",
      description: "Toaster that leaves sneaker patterns on your bread.",
      featured: false
    },
    {
      id: "cw-005",
      name: "Talking Plant Pot",
      price: 34.99,
      image: "/placeholder.svg",
      tag: "AI",
      category: "cool-weird",
      description: "Pot that tells you when to water your plant… and insults you.",
      featured: true
    },
    {
      id: "cw-006",
      name: "Burrito Blanket",
      price: 29.99,
      image: "/placeholder.svg",
      tag: "Wrap Yourself",
      category: "cool-weird",
      description: "Giant fleece tortilla blanket to turn yourself into a burrito.",
      featured: false
    },
    {
      id: "cw-007",
      name: "Infinity Mirror Clock",
      price: 79.99,
      image: "/placeholder.svg",
      tag: "Trippy",
      category: "cool-weird",
      description: "LED clock that looks like it disappears into an infinite tunnel.",
      featured: true
    },
    {
      id: "cw-008",
      name: "Keyboard Waffle Maker",
      price: 49.99,
      image: "/placeholder.svg",
      tag: "Breakfast Geek",
      category: "cool-weird",
      description: "Waffle iron shaped like a full QWERTY keyboard.",
      featured: false
    },
    {
      id: "cw-009",
      name: "Giant Earbuds Speaker",
      price: 39.99,
      image: "/placeholder.svg",
      tag: "Prank",
      category: "cool-weird",
      description: "Speakers that look like oversized Apple earbuds.",
      featured: false
    },
    {
      id: "cw-010",
      name: "USB Tentacle",
      price: 19.99,
      image: "/placeholder.svg",
      tag: "Moving",
      category: "cool-weird",
      description: "Fake tentacle wiggles around when plugged in. Why? Why not.",
      featured: false
    },
    {
      id: "cw-011",
      name: "T-Rex Mug",
      price: 18.99,
      image: "/placeholder.svg",
      tag: "Rawr",
      category: "cool-weird",
      description: "Mug with tiny arms and a dinosaur tail. Roars when hot liquid added.",
      featured: true
    },
    {
      id: "cw-012",
      name: "Laser Cat Helmet",
      price: 89.99,
      image: "/placeholder.svg",
      tag: "Cosplay",
      category: "cool-weird",
      description: "Helmet with LED eyes and laser whiskers. Meow to activate.",
      featured: false
    },
    {
      id: "wd-001",
      name: "SmartFit Pro Watch",
      price: 199.99,
      image: "/placeholder.svg",
      tag: "Fitness Tracker",
      category: "wearable-devices",
      description: "Advanced fitness tracking with heart rate, sleep monitoring, and GPS.",
      featured: true
    },
    {
      id: "wd-002",
      name: "SleepWave Smartband",
      price: 99.99,
      image: "/placeholder.svg",
      tag: "Sleep Tracker",
      category: "wearable-devices",
      description: "Monitor your sleep quality and get personalized recommendations.",
      featured: true
    },
    {
      id: "wd-003",
      name: "Xplorer VR Headset",
      price: 299.99,
      image: "/placeholder.svg",
      tag: "Virtual Reality",
      category: "wearable-devices",
      description: "Immersive VR headset for an enhanced gaming and entertainment experience.",
      featured: true
    },
    {
      id: "wd-004",
      name: "PulseFit Smartwatch",
      price: 149.99,
      image: "/placeholder.svg",
      tag: "Health Monitoring",
      category: "wearable-devices",
      description: "Monitor your fitness, track calories, and get fitness insights.",
      featured: false
    },
    {
      id: "wd-005",
      name: "ActivePulse Sports Watch",
      price: 179.99,
      image: "/placeholder.svg",
      tag: "Sports Tracker",
      category: "wearable-devices",
      description: "Track workouts, monitor heart rate, and set personal fitness goals.",
      featured: false
    },
    {
      id: "wd-006",
      name: "FitnessTracker+ Watch",
      price: 159.99,
      image: "/placeholder.svg",
      tag: "Fitness",
      category: "wearable-devices",
      description: "24/7 fitness tracking with continuous heart rate and step tracking.",
      featured: true
    },
    {
      id: "wd-007",
      name: "SoundWave Wireless Earbuds",
      price: 69.99,
      image: "/placeholder.svg",
      tag: "Bluetooth",
      category: "wearable-devices",
      description: "True wireless earbuds with noise-cancellation and long battery life.",
      featured: true
    },
    {
      id: "wd-008",
      name: "SmartBand Plus",
      price: 59.99,
      image: "/placeholder.svg",
      tag: "Activity Tracker",
      category: "wearable-devices",
      description: "Affordable activity tracker with step counting and sleep monitoring.",
      featured: false
    },
    {
      id: "wd-009",
      name: "TechFit GPS Watch",
      price: 229.99,
      image: "/placeholder.svg",
      tag: "GPS",
      category: "wearable-devices",
      description: "GPS-enabled watch for outdoor sports with real-time tracking.",
      featured: false
    },
    {
      id: "wd-010",
      name: "InstaFit Smartband",
      price: 89.99,
      image: "/placeholder.svg",
      tag: "Fitness",
      category: "wearable-devices",
      description: "Simple and easy-to-use smartband for tracking daily activities.",
      featured: true
    },
    {
      id: "wd-011",
      name: "HealthGuard Watch",
      price: 249.99,
      image: "/placeholder.svg",
      tag: "Health",
      category: "wearable-devices",
      description: "A health-focused smartwatch that monitors vital signs and alerts you.",
      featured: true
    },
    {
      id: "wd-012",
      name: "SmartGlasses Vision",
      price: 499.99,
      image: "/placeholder.svg",
      tag: "Augmented Reality",
      category: "wearable-devices",
      description: "Augmented reality glasses for navigation, calls, and entertainment.",
      featured: false
    }
  ];
  


  export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};


