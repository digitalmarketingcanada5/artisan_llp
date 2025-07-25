import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
// import { Testimonials } from '../components/sections/Testimonials';
import { Team } from "../components/sections/Team";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { FloatingActionButton } from "../components/ui/FloatingActionButton";

export default function Home() {
  return (
    <div
      className="relative bg-black text-white font-sans min-h-screen"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/40">
        <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <FloatingActionButton />
            <Hero />
            <Services />
            {/* <Testimonials /> */}
            <Team />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
