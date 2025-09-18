import { ResponsiveButton } from "../shared/ResponsiveButton";
import { SocialIcons } from "../shared/SocialIcons";
import { SectionTitle } from "../shared/SectionTitle";
import { useQuoteNavigation } from "../utils/navigation";
import vid from '../../assets/vid.mp4';
import thumbnail from '../../assets/images/thumbnail.jpg';

export const AboutMe = () => {
  const navigateToQuoteForm = useQuoteNavigation();
  
  return (
    <section id="about" className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Us" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="relative h-[350px] sm:h-[375px] md:h-[400px] lg:h-[425px] rounded-lg overflow-hidden shadow-xl">
              <video
                src={vid}
                className="w-full h-full object-cover"
                autoPlay
                loop
                controls
                muted
                playsInline
                poster={thumbnail}
              />
            </div>
          </div>
          <div className="order-2 space-y-4 sm:space-y-8">
            <div className="space-y-4 text-gray-600 text-sm text-justify sm:text-base xl:text-lg px-4">
              <p>
                Introducing C. Lewis Exterior Cleaning, your trusted pressure washing specialists based in Staffordshire.
                We are dedicated to restoring and enhancing the beauty of your property with professional, high-quality exterior
                cleaning services.
              </p>
              <p>
                Whether it's driveways, patios, or building exteriors, our team is here to deliver sparkling results and keep your
                outdoor spaces looking their best. Trust C. Lewis Exterior Cleaning for a cleaner, brighter, and more inviting property or business!
              </p>
              <p>
                Ready to transform your property? Get in touch with C. Lewis Exterior Cleaning today — simply drop us a message using the form below, 
                reach out via Facebook, give us a call, or send an email. We’ll be happy to provide a free, no-obligation quote and bring your outdoor spaces back to life!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <div className="flex gap-4">
                <SocialIcons title="facebook" />
                <SocialIcons title="instagram" />
                <SocialIcons title="tiktok" />
              </div>
              <ResponsiveButton text="GET A FREE QUOTE" onClick={navigateToQuoteForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
