import { Product } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  return (
    <section className="py-16 bg-muted/30 animate-fade-in relative">
      <div className="container relative">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-3 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="p-4 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Fully visible buttons */}
            <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-background shadow-md hover:bg-muted rounded-full" />
            <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-background shadow-md hover:bg-muted rounded-full" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
