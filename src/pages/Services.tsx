
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ServicesSection from "../components/services/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-artisto-lightblue py-20">
          <div className="container text-center">
            <h1 className="font-poppins font-bold text-5xl mb-4">What We Offer</h1>
            <p className="text-lg text-muted-foreground">
              We provide end-to-end design solutions that help businesses stand out,
              connect with their audience, and achieve their goals through strategic visual communication.
            </p>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
