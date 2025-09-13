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

  const handleContactClick = () => {
    window.location.href = "mailto:c.lewis.pws@hotmail.com";
  }

  const menuItems = [
    {title: "GET A QUOTE", onClick: navigateToQuoteForm},
    {title: "CONTACT US", onClick: handleContactClick},
    {
        title: "SERVICES", 
        items: [
            {title: "PRESSURE WASHING", href: "/pressure-washing"},
            {title: "ROOF CLEANING & MOSS REMOVAL", href: "/roof-cleaning"},
            {title: "GUTTERS & FASCIAS", href: "/gutter-cleaning"},
            {title: "WINDOW CLEANING", href: "/window-cleaning"},
            {title: "CONSERVATORIES & SOLAR PANELS", href: "/conservatory-and-solar-panel-cleaning"},
        ],
    },
    {title: "PORTFOLIO", href: "/portfolio"},
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
          className={`transition-all duration-300 ease-in-out object-contain ${
            isScrolled 
              ? "w-22 sm:w-26 md:w-36 lg:w-40 brightness-0" 
              : "w-24 sm:w-30 md:w-40 lg:w-44 brightness-0 invert"
          } cursor-pointer hover:scale-105`}
          alt="C-Lewis Exterior Cleaning Logo"
          onClick={navigateToTop}
        />
      </div>
    
      <NavigationMenuList className={`flex items-center pr-2 sm:pr-4 ${isScrolled ? "text-black [&>li>a]:text-black" 
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
                                            className={`hover:bg-sky-400/30 hover:text-black ${isScrolled ? "data-[active=true]:bg-sky-400/30 data-[active=true]:text-black" : ""}`}
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
