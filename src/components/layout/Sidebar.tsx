
import { Link } from "react-router-dom";
import { Battery, Bike, Laptop, CloudSun, Cpu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCategoryLabels } from "@/lib/types";
import { useState, useEffect } from "react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  
  const categoryIcons = {
    "electric-rides": <Bike className="h-5 w-5" />,
    "drones-robots": <Cpu className="h-5 w-5" />,
    "retro-tech": <Laptop className="h-5 w-5" />,
    "solar-eco": <CloudSun className="h-5 w-5" />,
    "cool-weird": <Battery className="h-5 w-5" />
  };

  return (
    <div className={cn("hidden lg:block w-56 shrink-0 border-r bg-background h-screen fixed left-0 top-0 z-40 pt-16", className)}>
      <div className="flex flex-col h-full overflow-y-auto py-6 px-3">
        <div className="space-y-2">
          {Object.entries(ProductCategoryLabels).map(([key, label]) => (
            <Link
              key={key}
              to={`/category/${key}`}
              className="flex items-center gap-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted"
            >
              {categoryIcons[key as keyof typeof categoryIcons]}
              <span>{label}</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-5 w-5" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-5 w-5" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
