
import { Product } from "../lib/types";

export const products: Product[] = [
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
    image: "/placeholder.svg",
    tag: "Off-Road",
    category: "electric-rides",
    description: "All-terrain electric vehicle with 4-wheel drive and 40-mile range.",
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
    id: "se-002",
    name: "EcoCharge Station",
    price: 149.99,
    image: "/placeholder.svg",
    tag: "Multi-Device",
    category: "solar-eco",
    description: "Solar-powered charging station for multiple devices with battery storage.",
    featured: false
  },
  {
    id: "se-003",
    name: "WindMini Generator",
    price: 199.99,
    image: "/placeholder.svg",
    tag: "Portable",
    category: "solar-eco",
    description: "Compact wind turbine generator for outdoor and emergency power.",
    featured: true
  },
  {
    id: "cw-001",
    name: "Holographic Display Cube",
    price: 129.99,
    image: "/placeholder.svg",
    tag: "Mind-Blowing",
    category: "cool-weird",
    description: "3D holographic display cube for photos and animations.",
    featured: true
  },
  {
    id: "cw-002",
    name: "Levitating Speaker",
    price: 89.99,
    image: "/placeholder.svg",
    tag: "Anti-Gravity",
    category: "cool-weird",
    description: "Bluetooth speaker that levitates and rotates while playing music.",
    featured: false
  },
  {
    id: "cw-003",
    name: "Quantum Dice",
    price: 49.99,
    image: "/placeholder.svg",
    tag: "Truly Random",
    category: "cool-weird",
    description: "Electronic dice powered by quantum random number generation.",
    featured: true
  },
  // {
  //   id: "dr-003",
  //   name: "NanoDrone Explorer",
  //   price: 149.99,
  //   image: "public/nano.jpg",
  //   tag: "Pocket-Size",
  //   category: "drones-robots",
  //   description: "Ultra-compact drone with HD camera and 15-minute flight time.",
  //   featured: true
  // },
  // {
  //   id: "se-001",
  //   name: "SolarFlex Power Bank",
  //   price: 79.99,
  //   image: "/placeholder.svg",
  //   tag: "Sustainable",
  //   category: "solar-eco",
  //   description: "Flexible solar panel power bank with 20,000mAh capacity.",
  //   featured: true
  // }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
