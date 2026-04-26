import { CircleUser, Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export default function NavBar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav className="bg-[#f0e4da] shadow">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">SuitUp</div>
          <ul className="flex items-center justify-center space-x-12 w-full">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[#796c63] hover:text-primary transition-colors underline-offset-4 hover:underline "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Button
              className="text-[#796c63] hover:text-primary text-base"
              variant="default"
            >
              <CircleUser className="size-4 text-[#796c63]" />
              Login
            </Button>

            <Search className="size-5 text-[#796c63] mr-4 cursor-pointer hover:text-primary transition-colors" />
            <ShoppingCart className="size-5 text-[#796c63] cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </nav>
    </div>
  );
}
