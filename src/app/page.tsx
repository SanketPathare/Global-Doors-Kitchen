import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import DoorServices from "@/components/DoorServices";
import KitchenServices from "@/components/KitchenServices";
import ContactForm from "@/components/ContactForm";
import MaterialShowcase from "@/components/MaterialShowcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcrylicDesign from "@/components/AcrylicDesign";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <ProjectsGallery />
        <KitchenServices />
        <DoorServices />
        <MaterialShowcase />
        <AcrylicDesign />
        <ProcessTimeline />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
