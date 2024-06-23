import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row md:items-center justify-center h-full">
        <div>
          <p className="text-pink-600">Hello, I am</p>
          <h1 className="text-4xl sm:text 7xl font-bold text-[#ccd6f6]">
            Chathuni Perera
          </h1>
          <h2 className="text-4xl sm:text 7xl font-bold text-[#8892b0]">
            An Undergraduate
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I am deeply passionate about pursuing a career in the IT industry.
            With a keen eye for detail and a natural aptitude for
            problem-solving, leadership skills, and the ability to work
            effectively both independently and as part of a team I thrive in
            dynamic and challenging environments. I am adapt at managing
            multiple tasks and deadlines, ensuring that projects are completed
            efficiently and to the highest standard.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex item-center hover:bg-pink-600 hover:border-pink-600 rounded-md">
              <Link to="projects" smooth={true} duration={500}>
                View projects
                {/* <span className="grouphover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-6 " />
              </span> */}
              </Link>
            </button>
          </div>
        </div>
        <div>
          {/* <img src="assets/chathuninew.png" className="" alt="chathuni.png" />
          <svg
            classname="w-[270px]"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                data-aos="fade-left"
                data-aos-duration={600}
                alt="Pramud Nadula"
                classname="h-[100px] aos-init aos-animate"
                x={12}
                y={8}
                xlinkHref="assets/chathuninew.png"
              />
            </g> */}
          {/* </svg> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
