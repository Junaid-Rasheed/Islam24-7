import React from "react";
import { Link } from "react-router-dom";
function LoginMain() {
  return (
    <div className="">
      {/* <img src="/bkground.jpg" /> */}
      {/* <span className="example2 MIcontainer">
        <img
          src="/bkground.jpg"
          alt="imagewe"
          width="full"
          height="full"
        />

        <div
          className="centered text-5xl lg:pr-40 lg:pb-12 md:pr-36 md:pb-12 sm:pb-6 sm:pr-16"
          style={{
            fontFamily: "candleScript",
          }}
        >
          java
        </div>
        <br />
      </span>{" "} */}
      {/* sfsd cxz */}
      <img
        className="object-center mx-auto pt-6 pr-20"
        src="/Black.png"
        alt="login-logo"
      />
      <div className="">
        <div className="container flex justify-center py-10">
          <div className="p-8 bg-white rounded-lg max-w-md pb-10">
            <button
              style={{ backgroundColor: "#ee92ac" }}
              className=" lgnbtn hover:text-black uppercase h-12 mt-3 font-bold w-full rounded tracking-widest "
            >
              <i className="fa fa-facebook mr-2"></i>Register
            </button>{" "}
            <div className="flex justify-between items-center mt-3">
              <hr className="w-full" />{" "}
              <span className="p-2 text-gray-400 mb-1">OR</span>
              <hr className="w-full" />
            </div>{" "}
            <button className=" lgnbtn hover:text-black uppercase h-12 mt-3 font-bold w-full rounded tracking-widest ">
              <i className="fa fa-facebook mr-2"></i>Login as Head
            </button>{" "}
            <button className="lgnbtn hover:text-black uppercase h-12 font-bold mt-3  w-full rounded  tracking-widest">
              <i className="fa fa-facebook mr-2"></i>Login as Member
            </button>{" "}
            <Link to="/Home">
              <button className="lgnbtn hover:text-black uppercase h-12 mt-3 font-bold  w-full rounded  tracking-widest">
                <i className="fa fa-facebook mr-2"></i>Use as a Guest
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
