import Aos from "aos"
import 'aos/dist/aos.css';
import Hero from "./components/Hero"
import About from "./components/About";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CtaSection from "./components/CtaSection";

function App() {
  Aos.init({
    duration:1800,
    offset:0,
  })
  return (
    <>
      <div className="overflow-hidden">
      <Hero/>
      <About/>
      <Features/>
      <Testimonial/>
      <CtaSection/>
      </div>
    </>
  )
}

export default App
