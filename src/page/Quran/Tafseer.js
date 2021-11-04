import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
// http://api.quran-tafseer.com/tafseer/10/112/2

function Tafseer() {
  async function TafseerApi() {
    const data = await fetch(`http://api.quran-tafseer.com/tafseer/10/`);
  }
  return (
    <div>
      <Nav />
      <div>Tafseer Page</div>
      <Footer />
    </div>
  );
}

export default Tafseer;
