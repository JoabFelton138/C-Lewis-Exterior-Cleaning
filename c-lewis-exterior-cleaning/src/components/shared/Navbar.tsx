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
import { MobileMenuTrigger } from "./MobileMenuTrigger";
import { useLogoNavigation, useQuoteNavigation } from "../utils/navigation";


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateToQuoteForm = useQuoteNavigation();
  const navigateToTop = useLogoNavigation();

  const menuItems = [
    {title: "GET A QUOTE", onClick: navigateToQuoteForm},
    {title: "CONTACT US", href: "/"},
    {
        title: "SERVICES", 
        items: [
            {title: "DRIVEWAYS & PATIOS", href: "/"},
            {title: "ROOF CLEANING & MOSS REMOVAL", href: "/"},
            {title: "GUTTERS & FASCIAS", href: "/"},
            {title: "WINDOW CLEANING", href: "/"},
            {title: "CONSERVATORIES & SOLAR PANELS", href: "/"},
        ],
    },
    {title: "PORTFOLIO", href: "/"},
    {title: "TESTIMONIALS", href: "/testimonials"},
  ];

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
      <div className="ml-[1px]">
        <img
          src={logo}
          className={`transition-all duration-300 ${isScrolled ? "w-36 md:w-44 brightness-0" : "w-40 md:w-52 brightness-0 invert"} cursor-pointer`}
          alt="logo"
          onClick={navigateToTop}
        />
      </div>
    
      <NavigationMenuList className={`flex items-center pr-4 ${isScrolled ? "text-black [&>li>a]:text-black" 
                                       : "text-white [&>li>a]:text-white"}`}>
       
       <MobileMenuTrigger menuItems={menuItems} isScrolled={isScrolled} />


        {menuItems.map((item, index) => (
            <NavigationMenuItem key={index} className="hidden md:block"> 
                {item.items ? (
                    <>
                        <NavigationMenuTrigger 
                            className={`font-normal ${isScrolled ? "text-black sky-hover" : "text-white"}`}
                        >
                            {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className={`!w-[200px] ${isScrolled ? "text-black" : "text-white"}`}>
                            <ul>
                                {item.items.map((subItem, index) => (
                                    <li key={index}>
                                        <NavigationMenuLink 
                                            href={subItem.href}
                                            className={`${isScrolled ? "hover:bg-sky-400/30 data-[active=true]:bg-sky-400/30 data-[active=true]:text-black" : ""}`}
                                        >
                                            {subItem.title}
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </>
                ) : (
                    <NavigationMenuLink 
                        href={item.href} 
                        onClick={item.onClick}
                        className={`${isScrolled ? "hover:bg-sky-400/30 !data-[active=true]:bg-sky-400/30 !data-[active=true]:text-black" : ""}`}
                    >
                        {item.title}
                    </NavigationMenuLink>
                )}
            </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
