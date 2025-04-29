
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutSection from "../components/about/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-artisto-lightblue py-20">
          <div className="container text-center">
            <h1 className="font-poppins font-bold text-5xl mb-4">Who We Are</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The story behind Artisto Designs and our creative journey
            </p>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
