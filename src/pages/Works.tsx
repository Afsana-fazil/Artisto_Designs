
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WorksGallery from "../components/works/WorksGallery";

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-artisto-lightblue py-20">
          <div className="container text-center">
            <h1 className="font-poppins font-bold text-5xl mb-4">Our Creations</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our design journey and creative portfolio
            </p>
          </div>
        </section>
        <WorksGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Works;
