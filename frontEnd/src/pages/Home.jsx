import React from 'react';
import About from '../components/About/About';
import heroImg00 from '../assets/images/Doctors-bro (Custom).png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      {/*This is the Hero Section starts*/}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/*==========Hero section starts========*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[30px] leading-[46px] text-headingColor font-[700] md:text-[60px] md:leading-[70px]">
                    We're here to support people in staying strong and healthier
                    lives.
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut ?
                  </p>
                  <button className="btn">Request for an Appointment</button>
                </div>
                {/*==========Hero Counter=======*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      20+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      40+
                    </h2>
                    <span className="w-[100px] h-2 bg-purple-400 rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Locations</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-blue-500 rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/*============Hero Content======*/}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg00} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==========Hero section ends========*/}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text__para text-center">
                Exceptional care for all. Our healthcare system provides
                unparalleled, expert medical services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                  {/*========Find a doctor======*/}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Out health system offers
                    unmatched, expert health care. Form the lab to the clinic.
                  </p>

                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              {/*========Find a location======*/}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Out health system offers
                    unmatched, expert health care. Form the lab to the clinic.
                  </p>

                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-indigo-600 hover:border-none"
                  >
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              {/*========Book Appointment======*/}
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book an Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Out health system offers
                    unmatched, expert health care. Form the lab to the clinic.
                  </p>

                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-purple-500 hover:border-none"
                  >
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*========Starting About section======*/}
        <About/>
      </>
    </>
  );
};

export default Home;
