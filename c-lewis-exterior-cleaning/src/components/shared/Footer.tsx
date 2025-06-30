import React from "react";
import { Mail, Phone } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    const hasBackground = true;
    return (
        <footer className="bg-slate-50 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto px-4 py-12 text-center gap-8">

                <div className="space-y-4">
                    <h3 className="text-2xl sm:text-lg font-bold sm:font-semibold">
                        C. Lewis Exterior Cleaning
                    </h3>
                    <p className="text-sm">
                        Professional exterior cleaning services for your home and business.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold ">
                        Contact
                    </h4>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 justify-center">
                            <Phone className="h-4 w-4"/>
                            <span>07391 853 506</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <Mail className="h-4 w-4"/>
                            <span>c.lewis.pws@hotmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Follow Us</h4>
                    <div className="flex space-x-4 justify-center">
                        <SocialIcons background={hasBackground} title="facebook" />
                        <SocialIcons background={hasBackground} title="instagram" />
                        <SocialIcons background={hasBackground} title="tiktok" />
                    </div>
                </div>                
                </div>
            
            <div>
                <div className="border-t border-gray-200 p-6 text-center text-sm">
                    <p>
                        &copy; 2025 C.Lewis Exterior Cleaning. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}