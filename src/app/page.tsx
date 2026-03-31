import {
  AboutSection,
  HeroSection,
  NewsSection,
  ProfessionalsSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProfessionalsSection />
      <NewsSection />
    </main>
  );
}
