import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Feedback() {
  function Alert() {
    alert("Your Feedback Submitted !");
  }
  return (
    <div>
      <Nav />

      <body class="text-gray-100 px-8 py-12">
        <div
          className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto 
        bg-gray-100 text-gray-900 rounded-lg shadow-lg"
        >
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight pb-10">
                Your Suggestions!
              </h2>
            </div>

            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold ">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  onClick={Alert}
                  className="uppercase text-sm font-bold tracking-wide 
                bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Feedback;
