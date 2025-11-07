import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Hero />
    </>
  );
}
