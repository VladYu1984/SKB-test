import { Hero } from "@/components/Hero";
import { Methodology } from "@/components/Methodology";
import { Nav } from "@/components/Nav";
import { WhatWeTeach } from "@/components/WhatWeTeach";

export default function IndexPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhatWeTeach />
      <Methodology />
    </main>
  );
}
