
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-lift transition-all duration-300 bg-card hover:shadow-lg dark:hover:shadow-cyan/5 h-full">
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute top-2 right-2 z-10 bg-cyan/80 text-white text-xs font-medium px-2 py-1 rounded-full">
          {product.tag}
        </div>
        <img
          src={getProductImage(product.id)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1 mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">{product.description}</p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0 gap-3">
        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        <Button className="rounded-full bg-cyan hover:bg-cyan/90 transition-all duration-300 hover:shadow-glow">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

// Function to map product IDs to real images
function getProductImage(id: string): string {
  const imageMap: Record<string, string> = {
    // Electric Rides
    "er-001": "https://img.freepik.com/premium-photo/man-with-scooter-standing-outdoors_274689-3488.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // NeoGlide X1 Electric Scooter
    "er-002": "https://img.freepik.com/free-photo/electric-bike-battery-motor-wheel-with-pedal-rear-shock-absorber_114579-347.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // Volt Cruiser E-Bike
    "er-003": "https://img.freepik.com/free-photo/motorcycle-safety-helmet_23-2151531270.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // TerraTrek Electric ATV
    "er-004": "https://img.freepik.com/free-photo/close-up-foot-longboard_23-2148937651.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // SwiftBoard Electric Skateboard
    "er-005": "https://img.freepik.com/premium-photo/close-up-man-using-hoverboard-onsphalt-road-feet-electrical-scooter-outdoor-front-view_77190-2993.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // HoverX Hoverboard
    "er-006": "https://img.freepik.com/free-photo/electric-bike-battery-motor-wheel-with-pedal-rear-shock-absorber_114579-347.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // VoltCycle Mini
    "er-007": "https://img.freepik.com/free-photo/man-riding-eco-scooter-city_23-2149019532.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // EcoRoller One
    "er-008": "https://img.freepik.com/premium-photo/teen-riding-atv-sand-dunes-making-turn-sand_397897-118.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // TerrainX Quad
    "er-009": "https://media.istockphoto.com/id/968623668/photo/flyboarding.jpg?s=612x612&w=0&k=20&c=6S2VvPcTTFAeRNrM8OU1BEAilVP-42xnLS5GpNb3lt0=", // Glider Jetpack
    "er-010": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4BxbdCBdAe4ipTMIWQ9_h7FWiXeGmQGr5Q&s", // NeoWheel Solo
    "er-011": "https://img.freepik.com/free-photo/steering-wheel-electric-bike-with-monitor-suspension-fork_114579-350.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // VoltMax Cruiser
    "er-012": "https://img.freepik.com/free-photo/man-karting-circuit-with-car_1157-25042.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // RollerZ Hover Kart

    // Drones & Robots
    "dr-001": "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SkyView Pro Drone
    "dr-002": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // RoboCompanion X3
    "dr-003": "https://img.freepik.com/free-photo/closeup-quadcopter-blurred-background_181624-61049.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // SkyZoom Nano
    "dr-004": "https://img.freepik.com/premium-photo/robot-standing-while-looking-books-notebooks-from-table_259150-5723.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // GuardianBot Home Assistant
    "dr-005": "https://img.freepik.com/free-photo/beautiful-love-connection-dogs_23-2151111350.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // RoboPet Dino
    "dr-006": "https://media.istockphoto.com/id/1401444200/photo/drone-white-color-flying-close-up.jpg?b=1&s=612x612&w=0&k=20&c=N97RIL_3HKljHRSMG_xISgYPUYyAcoh9Pc-c_2NVk-w=", // DroneRacer X
    "dr-007": "https://media.istockphoto.com/id/1354157484/photo/close-up-of-drone-with-camera.jpg?b=1&s=612x612&w=0&k=20&c=V2lahunlumVz-1K7h7T4Voorl7R5Kv5VSImn-F6ueHw=", // HoverSpy Surveillance Drone
    "dr-008": "https://media.istockphoto.com/id/492683865/photo/drone-white-cloudy-dusk-sky.jpg?s=612x612&w=0&k=20&c=kzzV_fu9onBArhMKbE4sxRe4K22fpWK-bd1-PMiJ608=", // AutoPilot Cam Drone
    "dr-009": "https://img.freepik.com/premium-photo/close-up-airplane-flying-against-sky_1048944-28764104.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // FlyLens 360
    "dr-010": "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-anthropomorphic-robot_23-2151008365.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // BotChef Smart Assistant
    "dr-011": "https://img.freepik.com/premium-photo/drone-quad-copter-yellow-field_93200-3030.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // AeroScout Drone
    "dr-012": "https://img.freepik.com/free-photo/home-made-robot-desk_23-2148863420.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // MechaBuddy

    // Retro Tech
    "rt-001": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // RetroPi Gaming Console
    "rt-002": "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // VinylStream Turntable
    "rt-003": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // PixelVision Camera
    "rt-004": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // TypeMaster Keyboard
    "rt-005": "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Classic TV Mini
    "rt-006": "https://img.freepik.com/free-photo/musical-button-object-stereo-volume_1172-501.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // BoomBox Vibe
    "rt-007": "https://img.freepik.com/free-photo/closeup-shot-person-driving-drone_181624-56076.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // PocketBoy Handheld
    "rt-008": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // NeoPager
    "rt-009": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // AnalogCam 90s
    "rt-010": "https://img.freepik.com/free-photo/vintage-vhs-packaging-high-angle_23-2149854264.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // VHS Player Classic
    "rt-011": "https://img.freepik.com/free-photo/high-angle-opened-hard-disk_23-2149413359.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // DiscMan Revival
    "rt-012": "https://img.freepik.com/free-photo/view-house-lamp-with-futuristic-design_23-2151037440.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740", // CRT Monitor Lamp

    // Solar & Eco
    "se-001": "https://images.unsplash.com/photo-1611488006001-eb993c1a9f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SolarCharge Backpack
    "se-002": "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // EcoBulb Lantern
    "se-003": "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SunWave Speaker
    "se-004": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // EcoClock Wall Charger
    "se-005": "https://images.unsplash.com/photo-1611488006001-eb993c1a9f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SolarStrap Charger
    "se-006": "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SunPot Solar Cooker
    "se-007": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SolarMini Fan
    "se-008": "https://images.unsplash.com/photo-1611488006001-eb993c1a9f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // EcoTracker Smartwatch
    "se-009": "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SolarCube Lamp
    "se-010": "https://images.unsplash.com/photo-1611488006001-eb993c1a9f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SolarTile Powerbank
    "se-011": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // LeafPad Wireless Charger
    "se-012": "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // EcoBot Garden Sensor

    // Cool & Weird
    "cw-001": "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // USB Pet Rock
    "cw-002": "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Levitate Speaker Orb
    "cw-003": "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // PixelFlame Lighter
    "cw-004": "https://images.unsplash.com/photo-1567721913836-07caa3dacd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Sneaker Toaster
    "cw-005": "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Talking Plant Pot
    "cw-006": "https://images.unsplash.com/photo-1567721913836-07ca3dacd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Burrito Blanket
    "cw-007": "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Infinity Mirror Clock
    "cw-008": "https://images.unsplash.com/photo-1567721913836-07ca3dacd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Keyboard Waffle Maker
    "cw-009": "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Giant Earbuds Speaker
    "cw-010": "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // USB Tentacle
    "cw-011": "https://images.unsplash.com/photo-1567721913836-07ca3dacd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // T-Rex Mug
    "cw-012": "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Laser Cat Helmet

    // Wearable Devices
    "wd-001": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SmartFit Pro Watch
    "wd-002": "https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SleepWave Smartband
    "wd-003": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Xplorer VR Headset
    "wd-004": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // PulseFit Smartwatch
    "wd-005": "https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // ActivePulse Sports Watch
    "wd-006": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // FitnessTracker+ Watch
    "wd-007": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SoundWave Wireless Earbuds
    "wd-008": "https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SmartBand Plus
    "wd-009": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // TechFit GPS Watch
    "wd-010": "https://images.unsplash.com/photo-1558379850-823f103f866a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // InstaFit Smartband
    "wd-011": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // HealthGuard Watch
    "wd-012": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // SmartGlasses Vision
  };
  
  return imageMap[id] || "/placeholder.svg";
}

