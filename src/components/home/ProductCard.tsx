
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
    "er-001": "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Electric Scooter
    "er-002": "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // E-Bike
    "dr-001": "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Drone
    "dr-003": "https://images.unsplash.com/photo-1579829366248-204ca7f50fbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Mini Drone
    "rt-001": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Gaming Console
    "se-001": "https://images.unsplash.com/photo-1611488006001-eb993c1a9f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Solar Power Bank
    "se-003": "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Wind Generator
    "cw-001": "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Holographic Display
    "cw-003": "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Tech Device
  };
  
  return imageMap[id] || "/placeholder.svg";
}
