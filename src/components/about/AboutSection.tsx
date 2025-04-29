
import React from "react";

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
              alt="Creative team workspace"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <h2 className="section-title">Our Story</h2>
            <h3 className="section-subtitle">The story behind Artisto Designs</h3>
            
            <div className="space-y-6 text-lg">
              <p>
                Founded in 2024, Artisto Designs emerged from a shared passion for creating 
                meaningful visual experiences. Our journey began when a group of design 
                enthusiasts came together with a vision to transform how brands communicate 
                through design.
              </p>
              <p>
                Today, we're a diverse team of creative professionals who blend artistic vision 
                with strategic thinking. We believe that great design isn't just about aesthetics—it's 
                about solving problems, telling stories, and creating connections.
              </p>
              <p>
                Our values center around creativity, client collaboration, attention to detail, 
                and continuous innovation. We're committed to understanding your unique needs 
                and translating them into visual solutions that elevate your brand and 
                resonate with your audience.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-artisto-lightblue p-6 rounded-xl">
                <h4 className="text-xl font-poppins font-semibold mb-2">Our Mission</h4>
                <p>To empower brands through thoughtful, impactful design that drives results.</p>
              </div>
              <div className="bg-artisto-lightblue p-6 rounded-xl">
                <h4 className="text-xl font-poppins font-semibold mb-2">Our Vision</h4>
                <p>To be the creative partner that transforms how brands connect with their audience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
