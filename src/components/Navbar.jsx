import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // whwn open the mobile menu, the background is not scrollable
  if (nav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300 z-[1]">
        {/* menu   */}
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 cursor-pointer hover:text-[#db2777]"
        >
          {!nav ? <FaBars /> : null}
        </div>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/chathuniperera/"
              >
                LinkedIn <FaLinkedin size={30} />{" "}
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/chathunipr"
              >
                Github <FaGithub size={30} />{" "}
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#388b58]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:chathuninperera@gmail.com"
              >
                Email <HiOutlineMail size={30} />{" "}
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/assets/documents/Chathuni Perera - Resume.pdf"
                download
              >
                Resume <BsFillPersonLinesFill size={30} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-[100vh] bg-[#0a192f] flex flex-col text-white justify-center items-center z-[1]"
        }
      >
        <div
          onClick={handleClick}
          // ceter top
          className="absolute top-4 hover:text-[#db2777] cursor-pointer right-4 left-0 flex justify-center items-center p-4"
        >
          {nav ? <FaTimes /> : null}
        </div>
        <li className="py-6 text-4xl hover:text-[#db2777]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#db2777]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#db2777]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#db2777]">
          <Link
            onClick={handleClick}
            to="qualification"
            smooth={true}
            duration={500}
          >
            Qualification
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#db2777]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
