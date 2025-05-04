
import { Link } from "react-router-dom";
import { ProductCategory, ProductCategoryLabels } from "@/lib/types";
import { Bike, Cpu, Laptop, CloudSun, Zap, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CategorySection() {
  const categories: { 
    id: ProductCategory; 
    name: string; 
    icon: React.ReactNode;
    color: string;
    imageSrc?: string;
  }[] = [
    { 
      id: "electric-rides", 
      name: ProductCategoryLabels["electric-rides"], 
      icon: <Bike className="h-8 w-8" />,
      color: "from-cyan/20 to-cyan/5",
      imageSrc: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=500&auto=format&fit=crop&q=60"
    },
    { 
      id: "drones-robots", 
      name: ProductCategoryLabels["drones-robots"], 
      icon: <Cpu className="h-8 w-8" />,
      color: "from-blue/20 to-blue/5",
      imageSrc: "https://img.freepik.com/free-photo/view-graphic-3d-drone_23-2150849175.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740"
    },
    { 
      id: "retro-tech", 
      name: ProductCategoryLabels["retro-tech"], 
      icon: <Laptop className="h-8 w-8" />,
      color: "from-teal/20 to-teal/5",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60"
    },
    { 
      id: "solar-eco", 
      name: ProductCategoryLabels["solar-eco"], 
      icon: <CloudSun className="h-8 w-8" />,
      color: "from-green-400/20 to-green-400/5",
      imageSrc: "https://img.freepik.com/premium-photo/solar-panel-blue-sky-background-alternative-energy-concept_29332-583.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740"
    },
    { 
      id: "cool-weird", 
      name: ProductCategoryLabels["cool-weird"], 
      icon: <Zap className="h-8 w-8" />,
      color: "from-purple-400/20 to-purple-400/5",
      imageSrc: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Browse By Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="hover-lift"
            >
              <div className={cn(
                "bg-gradient-to-b rounded-lg p-6 h-full flex flex-col items-center justify-center text-center gap-3",
                category.color
              )}>
                <Avatar className="w-16 h-16 mb-2 overflow-hidden">
                  {category.imageSrc && (
                    <AvatarImage 
                      src={category.imageSrc} 
                      alt={category.name} 
                      className="object-cover w-full h-full"
                      style={{ aspectRatio: "1/1" }}
                    />
                  )}
                  <AvatarFallback className="bg-background rounded-full p-3">
                    {category.icon}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-sm md:text-base">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
