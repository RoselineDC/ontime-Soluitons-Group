import Image from "next/image";
import Navbar from "./navbar";
import About from "./about";

export default function Home() {
  return (
    <div className="bg-gray-300">
      <header>
        <Navbar/>
       
      </header>
      <main>
        
        <About />
      </main>

       
      
      <footer>
    
      </footer>
    </div>
  );
}
