import React from "react";

const projects = [
  {
    name: "Flappy Bird",
    description:
      "Developed using Java and Swing, showcasing proficiency in object-oriented programming and GUI development.",
    // demoLink: "https://github.com/chathunipr/FlappyBird.git",
    codeLink: "https://github.com/chathunipr/FlappyBird.git",
    backgroundImage: "url('/assets/Flappy.png')",
  },
  {
    name: "Rumble Guard",
    description:
      "Elephant detecting system using seismic waves and alerting app to reduce human-elephant conflict. ",
    demoLink: "www.rumbleguard.com",
    // codeLink: "/",
    backgroundImage: "url('/assets/rg11.png')",
  },
  {
    name: "Artify Web Application",
    description:
      "Technologies used: HTML, JavaScript, CSS, Git, Visual Studio Code",
    // demoLink: "",
    codeLink: "https://github.com/RavisaraHasaranga/Artify.git",
    backgroundImage: "url('/assets/Artify.png')",
  },
  // {
  //   name: "Theatre Ticket Reservation System",
  //   demoLink: "/",
  //   codeLink: "/",
  //   backgroundImage: "url('/assets/Ticket.png')",
  // },
  // {
  //   name: "Theatre Ticket Reservation System",
  //   demoLink: "/",
  //   codeLink: "/",
  //   backgroundImage: "url('/assets/rg.jpg')",
  // },
  // {
  //   name: "Theatre Ticket Reservation System",
  //   demoLink: "/",
  //   codeLink: "/",
  //   backgroundImage: "url('/assets/rg.jpg')",
  // },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div
          className="pb-8"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="300"
        >
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check some of my recent works</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: project.backgroundImage }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration={300}
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 text-center hover:bg-[#000000c7] h-full w-full flex flex-col justify-between items-center transform transition-all duration-300 ease-in-out">
                <span className="p-4 text-xl font-bold text-white tracking-wider">
                  {project.name}
                </span>
                <div>{project.description}</div>
                <div className="pt-8 text-center">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-sm  hover:bg-pink-600 hover:border-pink-600">
                        Details
                      </button>
                    </a>
                  )}
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-sm  hover:bg-pink-600 hover:border-pink-600">
                        GitHub Link
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
