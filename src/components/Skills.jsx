import React from "react";

const skills = [
  { name: "Java", icon: "assets/javas.png" },
  { name: "HTML", icon: "assets/html.png" },
  { name: "CSS", icon: "assets/css.png" },
  { name: "React", icon: "assets/react.png" },
  { name: "Flutter", icon: "assets/flutter.png" },
  { name: "Node js", icon: "assets/nodejs.png" },
  { name: "Github", icon: "assets/github.png" },
  { name: "Mongo DB", icon: "assets/mongo.png" },
  { name: "Jira", icon: "assets/jiras.png" },
  { name: "Postman", icon: "assets/postman.png" },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 min-h-[calc(100vh-64px)] md:pt-[calc(100px+1rem)]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-full">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="300"

        >
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration={300}

            >
              <img className="w-20 mx-auto" src={skill.icon} alt={`${skill.name} icon`} />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
