import Hero from "@/components/Hero";
import Branding from "@/components/Branding";
import Services from "@/components/Services";
import Recommendation from "@/components/Recommendation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <Branding/>
        <Services/>
        <Recommendation/>
        <Footer/>
      </main>
    </>
  );
}
