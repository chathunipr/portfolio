import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-[#0a192f] min-h-[calc(100vh)] flex justify-center items-center pb-10 pt-[calc(100px+1rem)] md:pt-[calc(0px+1rem)]"
    >
      {/* Container */}
      <div className="max-w-[1000px] gap-10 mx-auto px-8 flex flex-col md:flex-row md:items-center justify-center h-full">
        <div
          className="order-2 md:order-1"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <p className="text-pink-600">Hello, I am</p>
          <h1 className="text-4xl sm:text 7xl font-bold text-[#ccd6f6]">
            Chathuni Perera
          </h1>
          <h2 className="text-4xl sm:text 7xl font-bold text-[#8892b0]">
            An Undergraduate
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            A passionate computer science undergraduate at the Informatics
            Institute of Technology (IIT). With a strong interest for Java, I
            love exploring new technologies and building innovative projects.
            I'm eager to continue learning, growing, and contributing to
            exciting tech ventures.
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
        <div
          className="order-1 md:order-2 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="300"
        >
          <div className="home__img w-[250px] md:w-[300px] md:mb-10">
            <svg
              className="home__blob"
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
                  alt="Chathuni Perera"
                  className="home__blob-img"
                  x={0}
                  y={18}
                  xlinkHref="assets/chathuninew.png"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
