import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/javas.png"
              alt="Java icon"
            />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/html.png"
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img className="w-20 mx-auto" src="assets/css.png" alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/react.png"
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/flutter.png"
              alt="Flutter icon"
            />
            <p className="my-4">Flutter</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/nodejs.png"
              alt="Nodejs icon"
            />
            <p className="my-4">Node js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/github.png"
              alt="Github icon"
            />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/mongo.png"
              alt="Mongodb icon"
            />
            <p className="my-4">Mongo DB</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/jiras.png"
              alt="Jira icon"
            />
            <p className="my-4">Jira</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg">
            <img
              className="w-20 mx-auto"
              src="assets/postman.png"
              alt="postman icon"
            />
            <p className="my-4">Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
