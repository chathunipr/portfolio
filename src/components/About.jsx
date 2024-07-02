import React, { useState } from "react";

function About() {
  const [tab, setTab] = useState("education");
  const updateTab = (tab) => {
    setTab(tab);
  };

  return (
    <div
      name="about"
      className="w-full text-gray-300 bg-[#0a192f] overflow-hidden min-h-[calc(100vh)] flex justify-center  items-start py-5 pt-[calc(64px+1rem)] md:pt-[calc(100px+1rem)]"
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
              About
            </p>
            <p className="py-4">My Qualifications and Skills</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="">
            <div
              className="flex justify-center gap-4 py-4"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div
                className={`qualification__button ${
                  tab === "education" ? "qualification__active" : ""
                }`}
                onClick={() => updateTab("education")}
              >
                <i className="uil uil-graduation-cap qualification__icon" />
                Education
              </div>
              <div
                className={`qualification__button ${
                  tab === "other" ? "qualification__active" : ""
                }`}
                onClick={() => updateTab("other")}
              >
                <i className="uil uil-briefcase-alt qualification__icon" />
                Others
              </div>
            </div>
            <div className="flex justify-center">
              {/*==================== QUALIFICATION CONTENT 1====================*/}
              {tab === "education" && (
                <div
                  className="qualification__content"
                  data-content
                  id="education"
                >
                  {/*==================== QUALIFICATION 1 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title">Computer Science</h3>
                      <span className="qualification__subtitle">
                        IIT - University
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2022 - 2024
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 2 ====================*/}
                  <div className="qualification__data">
                    <div />
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration={1200}>
                      <h3 className="qualification__title">IT Diploma</h3>
                      <span className="qualification__subtitle">
                        Esoft Metro Campus
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2019 completed
                      </div>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 3 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        St. Joseph's Girls' School Nugegoda
                      </h3>
                      <span className="qualification__subtitle">
                        High School
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2007-2021
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder" />
                      {/* <span className="qualification__line" /> */}
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 4 ====================*/}
                  {/* <div className="qualification__data">
                      <div />
                      <div>
                        <span className="qualification__rounder" />
                        <span className="qualification__line" />
                      </div>
                      <div data-aos="zoom-in-left" data-aos-duration={1200}>
                      <h3 className="qualification__title">Surge Global</h3>
                      <span className="qualification__subtitle">
                        Software Engineer Internship
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2022-03-01 to 2022-08-31
                      </div>
                    </div>
                    </div> */}
                  {/*==================== QUALIFICATION 5 ====================*/}
                  {/* <div className="qualification__data">
                      <div data-aos="zoom-in-left" data-aos-duration={1200}>
                        <h3 className="qualification__title">S P Solutions</h3>
                        <span className="qualification__subtitle">
                        Associate Software Engineer
                      </span>
                        <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2022-11-01 to Current
                      </div>
                      </div>
                      <div>
                        <span className="qualification__rounder" />
                        <span class="qualification__line"></span>
                      </div>
                    </div> */}
                </div>
              )}
              {/*==================== QUALIFICATION CONTENT 2====================*/}
              {tab === "other" && (
                <div className="qualification__content" data-content id="other">
                  {/*==================== QUALIFICATION 1 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Strong Communication
                      </h3>
                    </div>
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 2 ====================*/}
                  <div className="qualification__data">
                    <div />
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Creativity & organized
                      </h3>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 3 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title"> Leadership</h3>
                    </div>
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 4 ====================*/}
                  <div className="qualification__data">
                    <div />
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Ability to work Independantly
                      </h3>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 5 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Works well under supervision, teamwork
                      </h3>
                    </div>
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 6 ====================*/}
                  <div className="qualification__data">
                    <div />
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Problem-solving abilities.
                      </h3>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 7 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title"> Open Mind</h3>
                    </div>
                    <div>
                      <span className="qualification__rounder" />
                      <span className="qualification__line" />
                    </div>
                  </div>
                  {/* ==================== QUALIFICATION 8 ==================== */}
                  <div className="qualification__data">
                    <div />
                    <div>
                      <span className="qualification__rounder" />
                      {/* <span class="qualification__line"></span> */}
                    </div>
                    <div data-aos="zoom-in-left" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Self-confidence &amp; Decision-Making
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
