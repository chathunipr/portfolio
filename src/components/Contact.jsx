import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full text-gray-300 bg-[#0a192f]  min-h-[calc(100vh-64px)] flex justify-center items-start"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
          <div
            className="pb-8"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Contact
            </p>
            <p className="py-4">
              Submit the form below or shoot me an email -
              <a
                href="mailto:chathuninperera@gmail.com"
                className="text-pink-600"
              >
                chathuninperera@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <form
            method="POST"
            action="https://getform.io/f/jbwxlwya"
            className="flex flex-col w-full"
          >
            <input
              className="my-4 p-2 bg-[#ccd6f6] rounded-md text-black"
              type="text"
              placeholder="Name"
              name="name"
              required
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6] rounded-md text-black"
              placeholder="Email"
              name="email"
              required
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <textarea
              className="my-4 p-2 bg-[#ccd6f6] rounded-md text-black"
              name="message"
              rows="10"
              placeholder="Message"
              required
              data-aos="fade-up"
              data-aos-delay="300"
            ></textarea>
            <button
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md"
              type="submit"
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
