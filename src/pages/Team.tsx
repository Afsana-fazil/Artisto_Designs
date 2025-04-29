
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TeamCarousel from "../components/team/TeamCarousel";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-artisto-lightblue py-20">
          <div className="container text-center">
            <h1 className="font-poppins font-bold text-5xl mb-4">Meet the Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative minds behind the magic at Artisto Designs
            </p>
          </div>
        </section>
        <TeamCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
