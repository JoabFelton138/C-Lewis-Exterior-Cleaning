import React from "react";
import { Mail, Phone } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    const hasBackground = true;
    return (
        <footer className="bg-slate-50 text-black">
            <div className="max-w-2xl mx-auto px-4 py-12">
                <div className="space-y-4 text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        C. Lewis Exterior Cleaning
                    </h3>
                    <p className="text-sm">
                        Professional exterior cleaning services for your home and business.
                        Serving the local community with excellence.
                    </p>
                </div>
                <div className="space-y-6 text-center mt-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Contact
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2 justify-center">
                                <Phone className="h-5 w-5"/>
                                <span>07391 853 506</span>
                            </div>
                            <div className="flex item-center space-x-2 justify-center">
                                <Mail className="h-5 w-5"/>
                                <span>c.lewis.wcs@hotmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4 justify-center">
                            <SocialIcons background={hasBackground} title="facebook" />
                            <SocialIcons background={hasBackground} title="instagram" />
                            <SocialIcons background={hasBackground} title="twitter" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm">
                    <p>
                        &copy; 2025 C.Lewis Exterior Cleaning. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}