import Hero from "@/components/hero";
import performanceSrc from "@/public/performance.jpg";
import { Metadata } from "next";

export const metadata :Metadata = {
  title: "Performance",
};
export default function Home() {
  return (
    <Hero imgUrl={performanceSrc} altTxt="Performance"  content="Performance" /> 
   
  );
}
