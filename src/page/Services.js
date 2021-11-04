import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      <Nav />
      {/* <div className="flex sm:mx-8 sm:my-8 mx-16 my-16 services text-2xl">
        <div className="flex-none md:flex-1 sm:flex-0">
          <h1 className="font-bold tracking-widest mb-4">QURAN</h1>
          <div>Listen</div>
          <div>Read</div>
        </div>
        <div className="flex-none md:flex-1 ">
          <h1 className="font-bold tracking-widest mb-4">HADEES</h1>
          <div>Read</div>
          <div>sssap</div>
        </div>
        <div className="flex-none md:flex-1">
          <h1 className="font-bold tracking-widest mb-4">MAGZINE</h1>
          <div>Latest</div>
          <div>Old</div>
        </div>
        <div className="bg-teal-400 p-4 m-2">Magzine</div>
        <div className="bg-teal-400 p-4 m-2">Hadees</div>
      </div> */}
      <div class="flex flex-wrap py-12">
        <div class="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 mb-4  pl-24">
          <h1 className="font-bold tracking-widest mb-4">QURAN</h1>

          <h2>Listen</h2>

          <h2>Read</h2>
        </div>
        <div class="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 mb-4  pl-24">
          <h1 className="font-bold tracking-widest mb-4">HADEES</h1>
          <h2>Read</h2>
          <h2>Books</h2>
        </div>
        <div class="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 mb-4  pl-24">
          <h1 className="font-bold tracking-widest mb-4">MAGZINE</h1>
          <h2>Latest</h2>
          <h2>Old</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
