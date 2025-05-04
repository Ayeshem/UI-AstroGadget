
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { CategorySection } from "@/components/home/CategorySection";
import { getFeaturedProducts } from "@/data/products";
import { useEffect } from "react";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  // Enable dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="min-h-screen dark:bg-background transition-colors duration-300">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 lg:pl-56">
        <HeroSection />
        
        <ProductCarousel title="Featured Products" products={featuredProducts} />
        
        <CategorySection />
        
        <section className="py-16 container animate-fade-in">
          <div className="bg-gradient-to-br from-blue/10 via-cyan/10 to-teal/10 dark:from-blue/20 dark:via-cyan/20 dark:to-teal/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Tech Community</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get early access to new products, exclusive deals, and tech tips from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border flex-1 dark:bg-background/50"
              />
              <button className="bg-cyan hover:bg-cyan/90 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        
        <footer className="bg-muted py-10">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Electric Rides</li>
                <li>Drones & Robots</li>
                <li>Retro Tech</li>
                <li>Solar Products</li>
                <li>Cool & Weird</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <div className="w-8 h-8 bg-foreground/10 rounded-full"></div>
                <div className="w-8 h-8 bg-foreground/10 rounded-full"></div>
                <div className="w-8 h-8 bg-foreground/10 rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 AstroGadget Oasis.<br />All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
