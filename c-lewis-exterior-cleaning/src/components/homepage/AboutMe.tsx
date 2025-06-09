import React from "react";
import {
  Bubbles,
  TreeDeciduous,
  ThumbsUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { SocialIcons } from "../shared/SocialIcons";

export const AboutMe = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl">
              <video
                src={"/src/assets/vid.mp4"}
                className="w-full h-full object-cover"
                controls
                playsInline
              />
            </div>
          </div>
          <div className="order-2 space-y-8">
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                With over 10 years of experience in exterior cleaning, I've
                dedicated my career to transforming homes and businesses
                across Perton, Shifnal, and surrounding areas. My passion for
                cleanliness and attention to detail has made me a trusted name
                in the community.
              </p>
              <p>
                I believe in providing more than just a cleaning service – I
                deliver peace of mind. Every project is approached with the
                same level of care and professionalism, whether it's a small
                residential job or a large commercial property.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center group">
                <div className="flex justify-center">
                  <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm sm:text-base text-gray-600 p-1">Fully Insured</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center">
                  <Bubbles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm sm:text-base text-gray-600 p-1">Mark Guarantee</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center">
                  <TreeDeciduous className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-sm sm:text-base text-gray-600 p-1">Eco-Friendly</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <div className="flex gap-4">
                <SocialIcons title="facebook" />
                <SocialIcons title="instagram" />
                <SocialIcons title="twitter" />
              </div>
              <Button className="bg-primary hover:bg-primary/90 hover:scale-105 text-lg px-8 transition-all duration-300">
                GET A FREE QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
