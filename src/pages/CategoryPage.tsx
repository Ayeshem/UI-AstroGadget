
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProductCard } from "@/components/home/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { ProductCategoryLabels } from "@/lib/types";
import { Bike, Cpu, Laptop, CloudSun, Battery, Sun } from "lucide-react";
import { useEffect } from "react";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const products = getProductsByCategory(categoryId || "").slice(0, 12); // Ensure only 12 shown
  const categoryName = categoryId
    ? ProductCategoryLabels[categoryId as keyof typeof ProductCategoryLabels]
    : "";

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const categoryIcons: Record<string, JSX.Element> = {
    "electric-rides": <Bike className="h-8 w-8" />,
    "drones-robots": <Cpu className="h-8 w-8" />,
    "retro-tech": <Laptop className="h-8 w-8" />,
    "solar-eco": <CloudSun className="h-8 w-8" />,
    "cool-weird": <Battery className="h-8 w-8" />,
    "wearable-devices": <Sun className="h-8 w-8" />,
  };

  const categoryBanners: Record<string, string> = {
    "electric-rides":
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=1500&auto=format&fit=crop&q=80",
    "drones-robots":
      "https://images.unsplash.com/photo-1581092160607-ee22731cc40d?w=1500&auto=format&fit=crop&q=80",
    "retro-tech":
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1500&auto=format&fit=crop&q=80",
    "solar-eco":
      "https://images.unsplash.com/photo-1497440001374-f21e130f5ff2?w=1500&auto=format&fit=crop&q=80",
    "cool-weird":
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1500&auto=format&fit=crop&q=80",
    "wearable-devices":
       "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1500&auto=format&fit=crop&q=80",
    };

  return (
    <div className="min-h-screen dark:bg-background transition-colors duration-300">
      <Navbar />
      <Sidebar />

      <main className="pt-16 lg:pl-56">
        {/* Category Banner */}
        <section
          className="h-64 md:h-80 bg-cover bg-center relative overflow-hidden animate-fade-in"
          style={{
            backgroundImage: `url(${
              categoryId && categoryBanners[categoryId]
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container h-full flex flex-col justify-center items-center text-center relative z-10">
            <div className="bg-background/20 backdrop-blur-sm p-4 rounded-full mb-4">
              {categoryId && categoryIcons[categoryId]}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {categoryName}
            </h1>
            <p className="text-white/80 max-w-xl">
              Explore our collection of cutting-edge{" "}
              {categoryName.toLowerCase()}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 container">
          <h2 className="text-2xl font-bold mb-8">
            All {categoryName} Products
          </h2>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </section>

        {/* Related Categories */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(ProductCategoryLabels)
                .filter(([key]) => key !== categoryId) // ✅ this is critical
                .slice(0, 4)
                .map(([key, label]) => (
                  <a
                    key={key}
                    href={`/category/${key}`}
                    className="bg-background border hover:shadow-lg transition-all rounded-lg p-6 text-center hover:scale-105"
                  >
                    <div className="flex justify-center mb-4">
                      {categoryIcons[key as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="font-medium">{label}</h3>
                  </a>
                ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 container">
          <div className="bg-gradient-to-br from-blue/10 via-cyan/10 to-teal/10 dark:from-blue/20 dark:via-cyan/20 dark:to-teal/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get notified when we add new {categoryName} to our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border w-full dark:bg-background/70"
              />
              <button className="bg-cyan text-white px-4 py-2 rounded-md transition hover:bg-cyan/90">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;
