"use client";
import { useState } from "react";
import siteContent from "./content/siteContent";
import Container from "./components/ui/Container";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  const [locale, setLocale] = useState("en");
  const content = siteContent[locale];

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors">
      <Container>
        <NavBar
          navLinks={content.navLinks}
          locale={locale}
          onLocaleChange={setLocale}
        />
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <ProjectsSection
          header={content.servicesHeader}
          projects={content.projects}
        />
      </Container>
      <Footer content={content.footer} />
    </main>
  );
}
