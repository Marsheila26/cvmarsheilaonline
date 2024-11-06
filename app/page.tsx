import Hero from "./components/hero";
import Personal from "./components/personal";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import Skill from "./components/skill";
import Gallery from "./components/gallery";
import ContactForm from "./components/contactform";
import "./sheila-style.css";

export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <Personal/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
      <Skill/> 
      <Gallery/>
      <ContactForm/>
    </section>
  );
}