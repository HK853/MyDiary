import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aboutus from "./Aboutus";
import Features from "./Features";
import Footer from "./Footer";

const Insight = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-white flex items-center justify-between px-6 py-2 drop-shadow fixed top-0 left-0">
        <h2
          className="text-2xl font-medium text-black py-2 cursor-pointer"
          onClick={() => scrollToSection(section1Ref)}
        >
          MyDiary
        </h2>
        <ul className="w-50% flex">
          <li
            className="mx-4 py-1 cursor-pointer"
            onClick={() => scrollToSection(section1Ref)}
          >
            Home
          </li>
          <li
            className="mx-4 py-1 cursor-pointer"
            onClick={() => scrollToSection(section2Ref)}
          >
            About us
          </li>
          <li
            className="mx-4 py-1 cursor-pointer"
            onClick={() => scrollToSection(section3Ref)}
          >
            Features
          </li>
          <li className="mx-3 w-40 h-9 text-center bg-slate-500 shadow-lg shadow-slate-500/50 rounded py-1">
            <Link
              to="/login"
              className="text-center text-base font-medium text-white"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="bg-gradient-to-r from-[#0F172A] to-[#142841]"
        ref={section1Ref}
      >
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="text-4xl font-medium mb-5 p-2 text-white">
            Welcome to My Diary
          </h1>
          <p className="text-lg p-2 mb-5 text-white">
            The perfect place to capture every moment of your life. Whether it's
            a significant event, a friend's birthday, or a memorable day, keep
            your memories safe and accessible. Start documenting your journey
            today!
          </p>
          <button
            className="bg-slate-200 w-[200px] rounded-md font-medium my-6 mx-auto py-3"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </div>

      <Aboutus section2Ref={section2Ref} />
      <Features section3Ref={section3Ref} />
      <Footer />
    </>
  );
};

export default Insight;
