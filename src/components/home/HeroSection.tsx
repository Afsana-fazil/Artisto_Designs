
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Designs That <span className="text-gradient">Speak</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-inter mb-8 max-w-xl">
              Crafting visuals that connect brands with people.
            </p>
            <p className="mb-8 text-lg text-muted-foreground max-w-lg">
              At Artisto Designs, we believe in the power of visual storytelling. 
              Our creative team turns ideas into captivating designs that resonate 
              with your audience and elevate your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="button-primary flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/works" 
                className="px-6 py-3 rounded-lg font-medium border border-artisto-royalblue text-artisto-royalblue hover:bg-artisto-royalblue hover:text-white transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="lg:flex justify-center hidden animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-artisto-skyblue/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Creative workspace with designer"
                className="relative z-10 rounded-2xl object-cover shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
