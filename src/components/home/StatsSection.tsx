
import React from "react";
import Counter from "../ui/Counter";
import { CheckCircle, Calendar, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { 
      icon: CheckCircle, 
      count: 3, 
      suffix: "+", 
      label: "Country Clients", 
      delay: 0,
      color: "text-artisto-royalblue",
    },
    { 
      icon: Calendar, 
      count: 500, 
      suffix: "+", 
      label: "Designs Delivered", 
      delay: 200,
      color: "text-artisto-skyblue", 
    },
    { 
      icon: Award, 
      count: 1, 
      suffix: "+", 
      label: "Year of Experience", 
      delay: 400,
      color: "text-blue-800", 
    },
  ];

  return (
    <section className="py-16 bg-artisto-lightblue">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className={`${stat.color} text-center mb-4`}>
                <stat.icon size={40} className="mx-auto" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                <Counter end={stat.count} suffix={stat.suffix} delay={stat.delay} />
              </h3>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
