import React, { useEffect, useState } from "react";

function SurahDetail({ surahId }) {
  const [surahDetails, setSurahDetails] = useState("");
  async function SurahExplain() {
    const data = await fetch(
      `https://quran-endpoint.vercel.app/quran/${surahId}`
    );
    const res = await data.json();
    setSurahDetails(res);
  }

  useEffect(() => {
    SurahExplain();
  }, [surahId]);

  console.log("surahID", surahId);
  console.log("surahDetails", surahDetails.data);

  return (
    <div>
      <div className="text-2xl text-center leading-relaxed">
        {surahDetails &&
          surahDetails.data &&
          surahDetails.data.ayahs &&
          surahDetails.data.ayahs.map((id) => {
            return <div>{id.text.ar}</div>;
          })}
      </div>
    </div>
  );
}

export default SurahDetail;
