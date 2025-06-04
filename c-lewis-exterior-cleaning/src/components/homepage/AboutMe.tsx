import {
  Bubbles,
  Facebook,
  Instagram,
  TreeDeciduous,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import cLewisImage from "../../assets/images/etc/chad2.png";
import { ThumbsUp } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-68 h-68 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Meet Chad</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg -rotate-6"></div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <img
                  src={cLewisImage}
                  alt="About C. Lewis Exterior Cleaning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
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
                <div className="text-center">
                  <div className="flex justify-center">
                    <ThumbsUp size={48} />
                  </div>
                  <div className="text-gray-600 p-1">Fully Insured</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Bubbles size={48} />
                  </div>
                  <div className="text-gray-600 p-1">Mark Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <TreeDeciduous size={48} />
                  </div>
                  <div className="text-gray-600 p-1">Eco-Friendly</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
                <Button className="bg-primary hover:bg-primary/90 hover:scale-105 text-lg px-8">
                  GET A FREE QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
