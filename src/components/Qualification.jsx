import React from "react";

function Qualification() {
  return (
    <div
      name="qualification"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Qualification
            </p>
            <p className="py-4">somthing</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
              <div
                className="qualification__tabs"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                <div
                  className="qualification__button button--flex qualification__active"
                  data-target="#education"
                >
                  <i className="uil uil-graduation-cap qualification__icon" />
                  Education
                </div>
                <div
                  className="qualification__button button--flex"
                  data-target="#other"
                >
                  <i className="uil uil-briefcase-alt qualification__icon" />
                  Others
                </div>
              </div>
              <div className="qualification__sections">
                {/*==================== QUALIFICATION CONTENT 1====================*/}
                <div
                  className="qualification__content qualification__active"
                  data-content
                  id="education"
                >
                  {/*==================== QUALIFICATION 1 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title">
                        Software Engineer
                      </h3>
                      <span className="qualification__subtitle">
                        SLIIT - University
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2024 Graduated
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
                      <h3 className="qualification__title">Ananda College</h3>
                      <span className="qualification__subtitle">
                        High School
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2005-2018
                      </div>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 3 ====================*/}
                  <div className="qualification__data">
                    <div data-aos="zoom-in-right" data-aos-duration={1200}>
                      <h3 className="qualification__title">Web Development</h3>
                      <span className="qualification__subtitle">
                        SLIIT - University
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2019 started
                      </div>
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
                      <h3 className="qualification__title">Surge Global</h3>
                      <span className="qualification__subtitle">
                        Software Engineer Internship
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt" />
                        2022-03-01 to 2022-08-31
                      </div>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 5 ====================*/}
                  <div className="qualification__data">
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
                      {/* <span class="qualification__line"></span> */}
                    </div>
                  </div>
                </div>
                {/*==================== QUALIFICATION CONTENT 2====================*/}
                <div className="qualification__content" data-content id="other">
                  {/*==================== QUALIFICATION 1 ====================*/}
                  <div className="qualification__data">
                    <div>
                      <h3 className="qualification__title">Leadership</h3>
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
                    <div>
                      <h3 className="qualification__title">Time Management</h3>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 3 ====================*/}
                  <div className="qualification__data">
                    <div>
                      <h3 className="qualification__title">
                        {" "}
                        Communication Skills
                      </h3>
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
                    <div>
                      <h3 className="qualification__title">
                        Knowlade about softwares.
                      </h3>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 5 ====================*/}
                  <div className="qualification__data">
                    <div>
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
                    <div>
                      <h3 className="qualification__title">
                        Problem-solving abilities.
                      </h3>
                    </div>
                  </div>
                  {/*==================== QUALIFICATION 7 ====================*/}
                  <div className="qualification__data">
                    <div>
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
                    <div>
                      <h3 className="qualification__title">
                        Self-confidence &amp; Decision-Making
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
