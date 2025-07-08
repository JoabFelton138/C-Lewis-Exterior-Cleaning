import React from "react";
import { Mail, Phone } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    const hasBackground = true;
    return (
        <footer className="bg-slate-50 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto px-4 py-12 text-center gap-8">

                <div className="space-y-4">
                <h3 className="text-base sm:text-sm lg:text-lg title-style">
                C. Lewis Exterior Cleaning
                    </h3>
                    <p className="text-xs sm:text-sm">
                        Professional exterior cleaning services for your home and business.
                    </p>
                </div>
                
                <div className="space-y-4">
                <h3 className="text-base sm:text-sm lg:text-lg title-style">
                Contact
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 justify-center">
                            <Phone className="h-3 sm:h-4 w-3 sm:w-4"/>
                            <span className="text-xs sm:text-sm">
                                07391 853 506
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <Mail className="h-3 sm:h-4 w-3 sm:w-4"/>
                            <span className="text-xs sm:text-sm">
                                c.lewis.pws@hotmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-base sm:text-sm lg:text-lg title-style">
                        Follow Us
                    </h3>
                    <div className="flex space-x-4 justify-center">
                        <SocialIcons background={hasBackground} title="facebook" />
                        <SocialIcons background={hasBackground} title="instagram" />
                        <SocialIcons background={hasBackground} title="tiktok" />
                    </div>
                </div>                
                </div>
            
            <div>
                <div className="border-t border-gray-200 p-6 text-center text-xs sm:text-sm">
                    <p>
                        &copy; 2025 C.Lewis Exterior Cleaning. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}