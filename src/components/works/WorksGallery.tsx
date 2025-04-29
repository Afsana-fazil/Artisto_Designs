
import React, { useState } from "react";

const WorksGallery = () => {
  const categories = ["All", "Logo"];
  const [activeCategory, setActiveCategory] = useState("All");

  const works = [
    {
      id: 1,
      title: "Mama Cane Fruit Mixed",
      image: "uploads/MamaCaneFruitJuice.jpeg",
    },
    {
      id: 2,
      title: "Passion Fruit Juice Design",
      image: "uploads/MamaCane.jpeg",
    },
    {
      id: 3,
      title: "AC Service Post",
      image: "uploads/AC-Service-Post.jpeg",
    },
    {
      id: 4,
      title: "Baby Announcement",
      image: "uploads/Baby-Announcement.jpeg",
    },
    {
      id: 5,
      title: "Education Service",
      image: "uploads/Atomus-Edu-Consultancy.jpeg",
    },
    {
      id: 6,
      title: "World Design Day",
      image: "uploads/World-Design-Day.jpeg",
    },
    {
      id: 7,
      title: "Maryam Stores",
      image: "uploads/Maryam-Stores.jpeg",
    },
    {
      id: 8,
      title: "Code Cave Logo",
      category: "Logo",
      image: "uploads/CodeCave.jpeg",
    },
    {
      id: 9,
      title: "BGS MCH Hospital",
      image: "uploads/bc1fe0d1-294e-44b0-9fc0-7e399b1e4d71.jpeg",
    },
    {
      id: 10,
      title: "Education Consultancy Logo",
      category: "Logo",
      image: "uploads/09b608ea-a24e-4949-a496-9fa308292b22.jpeg",
    },
    {
      id: 11,
      title: "PR",
      image: "uploads/1b49daa3-2dd5-4dd0-995c-d0f5310ae2ea.jpeg",
    },
    {
      id: 12,
      title: "PR",
      image: "uploads/7e5a55cf-967e-4d8b-a344-5cd863fec7ce.jpeg",
    },
    {
      id: 13,
      title: "PR",
      image: "uploads/8e145d10-aff9-4486-8450-7a68fefdb8cc.jpeg",
    },
    {
      id: 14,
      title: "PR",
      image: "uploads/8f0a94f4-06f6-4413-82be-0a776f0c2ca2.jpeg",
    },
    {
      id: 15,
      title: "PR",
      image: "uploads/627fd967-d21d-4ad0-ac59-1f22148fbab8.jpeg",
    },
    {
      id: 16,
      title: "PR",
      image: "uploads/730c5bc7-f86a-4982-857b-b17aa1bac968.jpeg",
    },
    {
      id: 17,
      title: "PR",
      image: "uploads/816bf63d-bea3-404d-a0dc-ce7ff4e5ef8d.jpeg",
    },
    {
      id: 18,
      title: "PR",
      image: "uploads/4759a3d0-237e-468b-8f6d-c54198f75e6e.jpeg",
    },
    {
      id: 19,
      title: "PR",
      image: "uploads/6444c734-ffff-4f38-8832-6ad14d5b5375.jpeg",
    },
    {
      id: 20,
      title: "PR",
      image: "uploads/766709b3-670c-4824-9e9e-8346ca6b3d3b.jpeg",
    },
    {
      id: 21,
      title: "PR",
      image: "uploads/08842412-bf09-4a19-99b8-161f102e3db6.jpeg",
    },
    {
      id: 22,
      title: "PR",
      image: "uploads/10647672-d5d5-4c6e-b2b7-b56a92368154.jpeg",
    },
    {
      id: 23,
      title: "PR",
      image: "uploads/a7fd397c-ecab-48eb-9a5e-3aa5b62257ca.jpeg",
    },
    {
      id: 24,
      title: "PR",
      image: "uploads/a6949b0d-bf43-4b19-9b70-84a98c713a31.jpeg",
    },
    {
      id: 25,
      title: "PR",
      image: "uploads/AC-Service.jpeg",
    },
    {
      id: 26,
      title: "PR",
      image: "uploads/b30607e1-2d23-4ba0-84ee-6e690adb80cb.jpeg",
    },
    {
      id: 27,
      title: "PR",
      image: "uploads/b4171bd7-a642-4b07-b766-f5b318065f75.jpeg",
    },
  ];

  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section className="section">
      <div className="container">

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-artisto-royalblue text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <div 
              key={work.id} 
              className="group flex justify-center relative overflow-hidden rounded-xl shadow-md animate-fade-in opacity-0 py-5 bg-gray-100"
              style={{ animationDelay: `${0.2 + (work.id * 0.1)}s` }}
            >
              <img
                src={work.image}
                alt={work.title}
                className=" h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white text-xl font-semibold mb-1">{work.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
