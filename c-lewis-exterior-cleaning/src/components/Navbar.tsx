import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import logo from "../assets/Transparent Logo.png";
import { useState, useEffect } from "react";

const services = [
    {
        title: "WINDOW CLEANING",
        href: "",
        description: "?",
    },
    {
        title: "GUTTERS & FASCIAS",
        href: "",
        description: "",
    },
    {
        title: "CONSERVATORY CLEANING",
        href: "",
        description: "",
    },
    {
        title: "PRESSURE WASHING",
        href: "",
        description: "",
    }, 
    {
        title: "CONSERVATORIES & SOLAR PANELS",
        href: "",
        description: "",
    }
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 25);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <NavigationMenu viewport={false}
                className={`transition-all duration-700 ease-in-out
                    ${isScrolled 
                        ? 'bg-white/100 shadow-md opacity-100' 
                        : 'bg-white/0'
                }`}>
            <div>
                <img src={logo} 
                     className={`transition-all duration-300
                        ${isScrolled 
                        ? 'w-45 brightness-0' 
                        : 'w-50 brightness-0 invert'
                    }`} alt="logo" />
            </div>
            <NavigationMenuList className={` transition-colors duration-300
                        ${isScrolled ? 'text-black [&>li>a]:text-black' : 'text-white [&>li>a]'}`}>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">
                            GET A QUOTE
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">
                            CONTACT US
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={`font-normal ${isScrolled ? 'text-black' : 'text-white'}`}>SERVICES</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <ul className="grid w-[200px]">
                                {services.map((service) => (
                                    <li key={service.title}>
                                        <NavigationMenuLink href={service.href}>
                                            {service.title}
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink href="/">
                        PORTFOLIO
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                        <NavigationMenuLink href="/">
                            TESTIMONIALS
                        </NavigationMenuLink>
                    </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}