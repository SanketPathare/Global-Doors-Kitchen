import Hero from "@/components/Hero";
import ProductsGallery from "@/components/ProjectsGallery";
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
      <div className=" ">
        <Hero />
        <div className="container mx-auto  max-w-8xl">
          <ProductsGallery />
          <KitchenServices />
          <DoorServices />
          <MaterialShowcase />
           <AcrylicDesign/>
          <ProcessTimeline />
           <FAQSection/>
          {/* <ContactForm /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
