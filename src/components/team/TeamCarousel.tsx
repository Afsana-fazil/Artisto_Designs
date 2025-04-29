
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TeamCarousel = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mukhthar N",
      role: "Founder and CEO",
      image: "images/Mukhthar.jpeg",
    },
    {
      id: 2,
      name: "Nazmal N",
      role: "Project Manager",
      image: "images/Nazmal.jpeg",
    },
    {
      id: 3,
      name: "Afsana Fasil",
      role: "Full Stack Developer",
      image: "images/Afsana.jpeg",
    },
    {
      id: 4,
      name: "Manav",
      role: "Full Stack Developer",
      image: "images/Manav.jpeg",
    },
    {
      id: 5,
      name: "Nihal Muhammed",
      role: "Graphic Designer",
      image: "images/Nihal.jpeg",
    },
    {
      id: 6,
      name: "Fawas Muhammed",
      role: "Graphic Designer",
      image: "images/Fawas.jpeg",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative pt-[100%]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold font-poppins mb-1">{member.name}</h4>
                    <p className="text-artisto-skyblue font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
