import Hero from "@/components/Hero";
import Branding from "@/components/Branding";

export default function Home() {
  return (
    <>
      {/* <header className="bg-[#007B8A] px-16 py-8">
        <h1 className="text-white font-extrabold text-xl">CHARTERNOW</h1>
      </header> */}
      <main>
        <Hero/>
        <Branding/>
      </main>
    </>
  );
}
