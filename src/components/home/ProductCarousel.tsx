
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
    <section className="py-12 animate-fade-in">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 md:-ml-2">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-1 md:pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-auto -left-0 translate-y-0 rounded-full" />
            <CarouselNext className="relative inset-auto -right-0 translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
