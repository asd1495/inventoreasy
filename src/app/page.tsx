import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  )
}