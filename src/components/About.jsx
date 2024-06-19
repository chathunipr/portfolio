import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Chathuni, nice to meet you. Please look around</p>
          </div>
          <div>
            <p>
              I'm an ambitious second-year undergraduate, I am deeply passionate
              about pursuing a career in the IT industry. With a keen eye for
              detail and a natural aptitude for problem-solving, leadership
              skills, and the ability to work effectively both independently and
              as part of a team I thrive in dynamic and challenging
              environments. I am adapt at managing multiple tasks and deadlines,
              ensuring that projects are completed efficiently and to the
              highest standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
