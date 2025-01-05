import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Whoweare";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>    
      <Whoweare/>
      <Intro/>
    </>
  );
}
