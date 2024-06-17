import React from "react";

const Aboutus = ({ section2Ref }) => {
  return (
    <>
      <div
        className="flex justify-center items-center m-5 p-5"
        ref={section2Ref}
      >
        <div className="m-5 p-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl m-8 font-medium text-center">About Us</h1>
          <p className="mx-20 mb-5 px-10 text-lg">
            At MyDiary, we believe that every moment in life is worth
            remembering. Our platform provides a seamless and secure way for you
            to capture and revisit your memories. Whether you're writing about
            daily events or significant milestones, MyDiary is here to help you
            cherish every moment.
          </p>

          <div className="flex items-center justify-evenly mx-10 my-5">
            <div className="w-1/4 flex flex-col justify-center items-center border rounded p-4 hover:shadow-xl transition-all ease-in-out">
              <h2 className="font-medium text-xl">Our Mission</h2>
              <p className="text-center my-5">
                To provide a safe, user-friendly space where individuals can
                document and reflect on their life's journey.
              </p>
            </div>

            <div className="w-1/4 flex flex-col justify-center items-center border rounded p-4 hover:shadow-xl transition-all ease-in-out">
              <h2 className="font-medium text-xl">Our Vision</h2>
              <p className="text-center my-5">
                To become the go-to digital diary for people around the world,
                helping them preserve their memories for a lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
