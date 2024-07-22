
import Link from "next/link";
import developer from "../../src/images/developer.svg"
import About from "./about/page"
import Projects from "./projects/page"
import Contact from "./Contact/page"
export default function Home() {
  return (
    <>
   <div className="container  px-20 py-5 ">
    
        <div className="mt-48 max-w-xl">
            <h2 className="text-6xl font-semibold leading-normal">HELLO,IAM <span className="font-light">MOHAMED</span></h2>
            <p>A Web-Developer & Design Enthusiast</p>
            
     <Link href={"/projects"} className="bg-blue-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent
                 hover:border-yellow-300  duration-300 hover:border border border-transparent mt-4">Read more</Link>

        </div>
        <img src={developer.src} alt="img" className="w-full xl:w-1/2 xl:absolute top-16  right-10"/>
    </div>
       
    <About/>
    <Projects/>
    <Contact/>
    </>
  
  );
}
