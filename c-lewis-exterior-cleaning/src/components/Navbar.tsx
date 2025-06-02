import * as React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import logo from "../assets/Transparent Logo.png";

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
    return (
        <NavigationMenu viewport={false}>
            <div>
                <img src={logo} className="w-50 brightness-0 invert" alt="logo" />
            </div>
            <NavigationMenuList>
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
                        <NavigationMenuTrigger className="font-normal">SERVICES</NavigationMenuTrigger>
                        <NavigationMenuContent>
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