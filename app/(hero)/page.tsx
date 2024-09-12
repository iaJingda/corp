import Hero from '@/components/hero'
import React from 'react'
import homeSrc from "@/public/home.jpg"
import { Metadata } from "next";

export const metadata :Metadata = {
  title: "Home",
};
export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home"  content="Home" /> 
    
  )
}
