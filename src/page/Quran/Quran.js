import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Listbox } from "@headlessui/react";
import SurahList from "../../components/SurahList";
import SurahDetail from "../../components/SurahDetail";
function Quran() {
  const [surahName, setSurahName] = useState([]);
  const [surahId, setSurahId] = useState("1");

  // console.log("ssxs", surahId);
  async function QuranApi() {
    const data = await fetch("https://quran-endpoint.vercel.app/quran");

    const res = await data.json();
    setSurahName(res);
    console.log("full api", res);
  }
  useEffect(() => {
    QuranApi();
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex">
        <div>
          <SurahList surahName={surahName} setSurahId={setSurahId} />
        </div>
        <div className=" pl-16 pt-16">
          <SurahDetail surahId={surahId} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quran;
