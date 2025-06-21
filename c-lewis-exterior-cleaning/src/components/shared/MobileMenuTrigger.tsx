import { useState } from "react";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "../ui/navigation-menu";
import { ChevronDown } from "lucide-react";

interface MenuItem {
    title: string;
    href?: string;
    onClick?: () => void;
    items?: {title: string; href: string}[]
}

interface MobileMenuTriggerProps {
    menuItems: MenuItem[];
    isScrolled: boolean;
}

export const MobileMenuTrigger = ({menuItems, isScrolled} : MobileMenuTriggerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavigationMenuItem className="md:hidden">
        <NavigationMenuTrigger className={`flex items-center ${isScrolled ? "text-black sky-hover" : "text-white"}`}>
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </NavigationMenuTrigger>
        <NavigationMenuContent className={`!w-[175px] !right-0 !left-auto ${isScrolled ? "text-black" : "text-white"}`}>
                {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        {item.items ? (
                            <>
                                <span 
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isOpen}
                                    className="cursor-pointer p-2 text-sm block w-full rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors hover:bg-sky-400/30 focus:bg-sky-400/30"
                                    onClick={() => setIsOpen(!isOpen)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setIsOpen(!isOpen);
                                        }
                                    }}
                                >
                                    <div className="flex items-center justify-center gap-1">
                                        {item.title}
                                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}/>
                                    </div>
                                </span>
                                {isOpen && (
                                    <ul>
                                        {item.items.map((subItem, index) => (
                                            <li key={index}>
                                                <NavigationMenuLink 
                                                    href={subItem.href} 
                                                    className="text-xs hover:bg-sky-400/30"
                                                >
                                                    {subItem.title}
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <NavigationMenuLink 
                                href={item.href} 
                                onClick={item.onClick}
                                className="hover:bg-sky-400/30"
                            >
                                {item.title}
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
        </NavigationMenuContent>
    </NavigationMenuItem>
    )
}