import React from "react";
import note from "../assets/images/pencil.png";
import security from "../assets/images/security.png";
import ui from "../assets/images/web-interface.png";

const Features = ({ section3Ref }) => {
  return (
    <>
      <div
        className="w-full py-[10rem] px-4 bg-gradient-to-r from-[#0F172A] to-[#1A3252]"
        ref={section3Ref}
      >
        <h1 className="text-center font-medium text-4xl mb-10 text-white">
          Features
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full flex flex-col p-4 my-4 rounded-lg justify-center items-center bg-slate-100 shadow-xl hover:shadow-slate-400/40 hover:scale-105 transition-all ease-in-out">
            <img src={ui} alt="ui" className="w-20 m-5" />
            <h4 className="text-2xl font-bold text-center">
              Easy-to-Use Interface
            </h4>
            <h2 className="text-sm text-center py-8">
              Our platform is designed to be intuitive and user-friendly, making
              it easy for you to record your thoughts and events.
            </h2>
          </div>

          <div className="w-full flex flex-col p-4 my-4 rounded-lg justify-center items-center  bg-slate-100 shadow-xl hover:shadow-slate-400/40 hover:scale-105 transition-all ease-in-out">
            <img src={security} alt="security" className="w-20 m-5" />
            <h4 className="text-2xl font-bold text-center">
              Privacy and Security
            </h4>
            <h2 className="text-sm text-center py-8">
              We prioritize your privacy. All your entries are secure and
              accessible only by you.
            </h2>
          </div>

          <div className="w-full flex flex-col p-4 my-4 rounded-lg justify-center items-center  bg-slate-100 shadow-xl hover:shadow-slate-400/40 hover:scale-105 transition-all ease-in-out">
            <img src={note} alt="note" className="w-20 m-5" />
            <h4 className="text-2xl font-bold text-center">Take Notes</h4>
            <h2 className="text-sm text-center py-8">
              Whether it's birthday of your friend or work-anniversary of your
              colleague, we remember everything.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
