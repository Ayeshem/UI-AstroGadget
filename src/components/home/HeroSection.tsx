import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background gradients */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue via-cyan to-teal opacity-10 dark:opacity-20"
        style={{
          backgroundSize: "200% 200%",
          animation: "shimmer 10s linear infinite"
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan rounded-full blur-3xl opacity-10 animate-pulse-glow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue rounded-full blur-3xl opacity-10 animate-pulse-glow"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Future Tech, <br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan via-blue to-teal">
                Available Now
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Discover the most innovative, quirky, and cutting-edge gadgets from around the world. Curated for the tech enthusiast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cyan hover:bg-cyan/90 text-white">
                Shop Latest <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Categories
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative hidden lg:block">
            <div className="w-full h-[26rem] relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div 
                  className="rounded-full bg-gradient-to-br from-blue via-cyan to-teal p-1 animate-float shadow-2xl" 
                  style={{ width: '26rem', height: '26rem' }}
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://img.freepik.com/free-vector/gradient-metaverse-background_23-2149263788.jpg?ga=GA1.1.362751196.1745830034&semt=ais_hybrid&w=740" 
                      alt="Featured Product" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tags */}
              <div className="absolute top-10 right-0 w-32 h-32 rounded-full bg-teal/20 backdrop-blur-md p-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-full rounded-full bg-background/50 flex items-center justify-center">
                  <span className="font-bold">Hover Tech</span>
                </div>
              </div>
              <div className="absolute bottom-10 left-0 w-28 h-28 rounded-full bg-blue/20 backdrop-blur-md p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-full h-full rounded-full bg-background/50 flex items-center justify-center">
                  <span className="font-bold">Eco Power</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
