import React, { useState } from "react";
import { useEffect } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Hadees() {
  const [hadeesTitle, setHadeesTitle] = useState([]);
  const [loading, setLoading] = useState(true);

  async function HadeesApi() {
    const data = await fetch(
      "https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/showall/ur/ur/1/25/json"
    );

    const res = await data.json();
    setHadeesTitle(res);
    setLoading(false);
    console.log("Hadees api", res);
  }
  useEffect(() => {
    HadeesApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Nav />

      <div>
        {hadeesTitle &&
          hadeesTitle.data &&
          hadeesTitle.data.map((obj) => {
            // {
            //   console.log("ssss", obj.attachments[0].url);
            // }
            return (
              <div
                className="text-center cursor-pointer hover:text-red-900  w-11/12 pl-24 text-2xl "
                // onClick={obj.attachments[0].url}
              >
                <a href={obj.attachments[0].url} className="leading-loose">
                  {obj.description}
                </a>
                <br />
              </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Hadees;
