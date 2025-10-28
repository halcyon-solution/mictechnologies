import React from "react";

export default function WebDevTools() {
  const technologies = [
    {
      name: "React",
      category: "Frontend",
      color: "#61DAFB",
      bgColor: "bg-cyan-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      )
    },
    {
      name: "HTML5",
      category: "Frontend",
      color: "#E34F26",
      bgColor: "bg-orange-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M3.5 2L5 21l7 2 7-2 1.5-19H3.5zm14.3 5.5H8.4l.2 2h9l-.6 6.5-4 1.2-4-1.2-.3-3h2l.2 1.5 2.1.6 2.1-.6.2-2.5H7.8l-.5-6h10.2l-.2 2z"/>
        </svg>
      )
    },
    {
      name: "CSS3",
      category: "Frontend",
      color: "#1572B6",
      bgColor: "bg-blue-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M3.5 2L5 21l7 2 7-2 1.5-19H3.5zm14.3 5.5H8.4l.2 2h9l-.6 6.5-4 1.2-4-1.2-.3-3h2l.2 1.5 2.1.6 2.1-.6.2-2.5H7.8l-.5-6h10.2l-.2 2z"/>
        </svg>
      )
    },
    {
      name: "JavaScript",
      category: "Frontend",
      color: "#F7DF1E",
      bgColor: "bg-yellow-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16.5 13.5c0-1.5-1-2.5-2.5-2.5-.5 0-1 .2-1.4.5l-.1-2c.5-.2 1-.3 1.5-.3 2.5 0 4.5 2 4.5 4.5V18h-2v-1.5zm-7 0c0-1.5-1-2.5-2.5-2.5-.5 0-1 .2-1.4.5l-.1-2c.5-.2 1-.3 1.5-.3 2.5 0 4.5 2 4.5 4.5V18h-2v-1.5z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      color: "#06B6D4",
      bgColor: "bg-cyan-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 6c-2.7 0-4.5 1.4-5.4 4.2 1.4-1.4 3-1.9 4.8-1.5.9.2 1.6.9 2.4 1.7 1.2 1.2 2.6 2.6 5.6 2.6 2.7 0 4.5-1.4 5.4-4.2-1.4 1.4-3 1.9-4.8 1.5-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.6-2.6-5.6-2.6zm-5.4 6c-2.7 0-4.5 1.4-5.4 4.2 1.4-1.4 3-1.9 4.8-1.5.9.2 1.6.9 2.4 1.7 1.2 1.2 2.6 2.6 5.6 2.6 2.7 0 4.5-1.4 5.4-4.2-1.4 1.4-3 1.9-4.8 1.5-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.6-2.6-5.6-2.6z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Backend",
      color: "#339933",
      bgColor: "bg-green-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 1.5c-.3 0-.6.1-.8.3L2.7 7.1c-.5.3-.7.7-.7 1.2v7.4c0 .5.2.9.7 1.2l8.5 5.3c.2.2.5.3.8.3.3 0 .6-.1.8-.3l8.5-5.3c.5-.3.7-.7.7-1.2V8.3c0-.5-.2-.9-.7-1.2l-8.5-5.3c-.2-.2-.5-.3-.8-.3zm0 2.7l6.8 4.2v8.4L12 20.8l-6.8-4.1V7.4L12 4.2z"/>
        </svg>
      )
    },
    {
      name: "Express",
      category: "Backend",
      color: "#000000",
      bgColor: "bg-gray-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.641-6.5.817-8.317-1.887C.207 15.38-.025 14.388.002 11.576zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      bgColor: "bg-green-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13v8l-1-4-1 4V7h2z"/>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "Database",
      color: "#4169E1",
      bgColor: "bg-blue-50",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1-13h-2v5h2V7zm0 6h-2v2h2v-2z"/>
        </svg>
      )
    }
  ];

  const categories = ["Frontend", "Backend", "Database"];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Technologies We Master
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Building robust web applications with cutting-edge technologies and modern frameworks
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {category}
                </h3>
                <div className="w-20 h-1 bg-[#FF006E]"></div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className={`${tech.bgColor} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-[#FF006E] min-h-[180px]`}>
                        {/* Logo */}
                        <div 
                          className="transition-transform duration-300 group-hover:scale-110"
                          style={{ color: tech.color }}
                        >
                          {tech.logo}
                        </div>
                        
                        {/* Technology Name */}
                        <h4 className="text-base md:text-lg font-semibold text-black text-center">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}