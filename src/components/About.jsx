import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
            <p className="py-4">somthing</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <img src="" alt="" />
          </div>
          <div>
            <p>
              I am a computer science undergraduate at the Informatics Institute
              of Technology (IIT), where I am honing my skills and expanding my
              knowledge in the field. My academic journey began at St. Joseph's
              Girls' School Nugegoda, where I developed a strong foundation in
              various disciplines. I have a keen interest in Java development,
              and I am enthusiastic about leveraging this technology to create
              innovative and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
