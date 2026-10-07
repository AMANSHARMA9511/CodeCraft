import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "CodeCraft | Web Development & Digital Solutions",
  description:
    "CodeCraft designs and develops fast, modern websites, web applications and digital solutions for ambitious businesses.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedProjects />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
