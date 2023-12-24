import { currentUser } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Advantages from "../components/Advantages";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import data from '@/app/constants/data'

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Our Services Section */}
      <Services services={data.services} />
      {/* Advantages */}
      {/* <Advantages /> */}
      {/* To do - Carousel */}
      {/* <Testimonials testimonials={data.testimonial as unknown as any[]} /> */}
      {/* Articles */}
      <Articles articles={data.articles} />
      {/* Footer */}
      <Footer />
    </>
  );
}
