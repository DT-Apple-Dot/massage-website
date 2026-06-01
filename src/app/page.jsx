import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 md:container md:mx-auto md:px-6">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
