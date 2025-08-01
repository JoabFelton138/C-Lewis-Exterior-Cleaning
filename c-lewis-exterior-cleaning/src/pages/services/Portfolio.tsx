import { Hero } from "@/components/shared/Hero";
import { MasonryGrid } from "@/components/shared/MasonryGrid";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const Portfolio = () => {
    return (
        <main>
            <Hero title="portfolio" subtitle="Our Work Speaks For Itself"/>
            <section className="py-12 sm:py-16 lg:py-24">
                <SectionTitle title="Why Choose Us" />
                <MasonryGrid isPage={true} />
            </section>
        </main>
    )
}