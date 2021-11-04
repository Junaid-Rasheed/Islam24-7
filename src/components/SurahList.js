import React from "react";

function SurahList({ surahName, setSurahId }) {
  //   console.log("ss", surahId);
  return (
    <div>
      <div class="min-h-screen flex flex-row ">
        <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div class=" flex items-center justify-center h-20 shadow-md">
            <h1 class="list-heading text-3xl uppercase text-indigo-500">
              Surrah List
            </h1>
          </div>
          <ul class="flex flex-col py-4">
            {surahName &&
              surahName.data &&
              surahName.data.map((ch, i) => {
                return (
                  <li className="z-10">
                    <a className=" cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                      <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                      <span
                        className="text-sm font-medium"
                        onClick={() => setSurahId(ch.number)}
                      >
                        {ch.asma.en.long}
                      </span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SurahList;
