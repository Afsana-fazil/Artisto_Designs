
import React from "react";
import { PenTool, Image, LayoutDashboard, Smartphone, Package, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: PenTool,
      title: "Logo Design",
      description: "We create memorable, distinctive logos that capture your brand's essence and leave a lasting impression.",
      color: "bg-blue-50 text-artisto-royalblue",
    },
    {
      icon: Image,
      title: "Posters & Social Media Creatives",
      description: "Eye-catching visuals optimized for various platforms to boost your social media presence and engagement.",
      color: "bg-blue-50 text-artisto-skyblue",
    },
    {
      icon: LayoutDashboard,
      title: "Website Design",
      description: "Stunning, responsive websites that provide seamless user experiences and effectively showcase your brand.",
      color: "bg-blue-50 text-blue-800",
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Intuitive, user-centered digital experiences that guide users through your product with ease and delight.",
      color: "bg-blue-50 text-artisto-royalblue",
    },
    {
      icon: Package,
      title: "Branding & Packaging",
      description: "Comprehensive brand identity systems and packaging designs that help your products stand out on shelves.",
      color: "bg-blue-50 text-artisto-skyblue",
    },
    {
      icon: Instagram,
      title: "Social Media Handling",
      description: "Complete social media management to build and maintain your brand's online presence and engagement.",
      color: "bg-blue-50 text-blue-800",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`${service.color} inline-flex p-3 rounded-lg mb-4`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-semibold font-poppins mb-3">{service.title}</h4>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link 
                to="/contact" 
                className="text-artisto-royalblue hover:underline inline-flex items-center font-medium"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="button-primary inline-block"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
