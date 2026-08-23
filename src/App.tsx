import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Studio } from "@/components/sections/Studio/Studio";
import { Capabilities } from "@/components/sections/Capabilities/Capabilities";
import { Work } from "@/components/sections/Work/Work";
import { OriginalIp } from "@/components/sections/Work/OriginalIp";
import { Founder } from "@/components/sections/Founder/Founder";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/sections/Footer/Footer";

function App() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        <Hero />
        <Studio />
        <Capabilities />
        <Work />
        <OriginalIp />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

export default App;
