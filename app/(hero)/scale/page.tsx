import Hero from "@/components/hero";
import scaleSrc from "@/public/scale.jpg";
import { Metadata } from "next";

export const metadata :Metadata = {
  title: "Scale",
};
export default function Home() {
  return (
    <Hero imgUrl={scaleSrc} altTxt="Scale"  content="Scale" /> 
   
  );
}
