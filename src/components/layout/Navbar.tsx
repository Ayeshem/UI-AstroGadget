
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ProductCategoryLabels } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
          <Link to="/" className="text-xl font-bold text-foreground">
            ASTRO<span className="text-cyan">GADGET</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {Object.entries(ProductCategoryLabels).map(([key, label]) => (
            <Link 
              key={key}
              to={`/category/${key}`} 
              className="text-sm font-medium transition-colors hover:text-cyan"
            >
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-cyan text-white text-[10px] flex items-center justify-center rounded-full">3</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden absolute w-full bg-background/95 backdrop-blur-md border-b transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-64 py-3" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <nav className="container flex flex-col px-4 space-y-3 overflow-hidden">
          {Object.entries(ProductCategoryLabels).map(([key, label]) => (
            <Link 
              key={key}
              to={`/category/${key}`} 
              className="text-sm font-medium p-2 transition-colors hover:bg-muted rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
