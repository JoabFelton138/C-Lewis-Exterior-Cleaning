import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "../../assets/Transparent Logo.png";
import { useState, useEffect } from "react";

const menuItems = [
    {title: "GET A QUOTE", href: "/"},
    {title: "CONTACT US", href: "/"},
    {title: "PORTFOLIO", href: "/"},
    {
        title: "SERVICES", 
        items: [
            {title: "WINDOW CLEANING", href: "/"},
            {title: "GUTTERS & FASCIAS", href: "/"},
            {title: "PRESSURE WASHING", href: "/"},
            {title: "CONSERVATORIES & SOLAR PANELS", href: "/"},
        ],
    },
    {title: "TESTIMONIALS", href: "/"},
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu
      viewport={false}
      className={`transition-all duration-700 ease-in-out
                    ${
                      isScrolled
                        ? "bg-white/100 shadow-md opacity-100"
                        : "bg-white/0"
                    }`}>
      <div>
        <img
          src={logo}
          className={`transition-all duration-300 ${isScrolled ? "w-42 brightness-0 pl-1" : "w-50 brightness-0 invert"}`}
          alt="logo"
        />
      </div>

      <NavigationMenuList className={`flex items-center ${isScrolled ? "text-black [&>li>a]:text-black" 
                                       : "text-white [&>li>a]:text-white"}`}>
        {/* Mobile Menu Trigger */}
        <NavigationMenuItem className="md:hidden">
            <NavigationMenuTrigger className={`flex items-center ${isScrolled ? "text-black" 
                                       : "text-white"}`}>
                <span className="sr-only">Menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </NavigationMenuTrigger>
            <NavigationMenuContent className={`!w-[150px] !right-0 !left-auto ${isScrolled ? "text-black" : "text-white"}`}>
                    {menuItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            {item.items ? (
                                <>
                                    <NavigationMenuTrigger className={`font-normal ${isScrolled ? "text-black" : "text-white"}`}>
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className={`${isScrolled ? "text-black" : "text-white"}`}>
                                <ul>
                                    {item.items.map((subItem, index) => (
                                        <li key={index}>
                                            <NavigationMenuLink href={subItem.href}>
                                                {subItem.title}
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                                </>
                            ) : (
                                <NavigationMenuLink href={item.href}>
                                    {item.title}
                                </NavigationMenuLink>
                            )}
                        </NavigationMenuItem>
                    ))}
            </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Desktop Menu Items */}
        {menuItems.map((item, index) => (
            <NavigationMenuItem key={index} className="hidden md:block"> 
                {item.items ? (
                    <>
                        <NavigationMenuTrigger className={`font-normal ${isScrolled ? "text-black" : "text-white"}`}>
                            {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className={`${isScrolled ? "text-black" : "text-white"}`}>
                            <ul>
                                {item.items.map((subItem, index) => (
                                    <li key={index}>
                                        <NavigationMenuLink href={subItem.href}>
                                            {subItem.title}
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </>
                ) : (
                    <NavigationMenuLink href={item.href}>
                        {item.title}
                    </NavigationMenuLink>
                )}
            </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
