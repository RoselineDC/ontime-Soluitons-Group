import Image from "next/image";
import Navbar from "./navbar";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-gray-300">
      <header>
        <Navbar/>
       
      </header>
      <main>
        
        <About />
        <Services />
        <Contact />
      </main>

       
      
      <footer>
        <Footer />

    
      </footer>
    </div>
  );
}

