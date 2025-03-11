import React, { useEffect, useState } from "react";

const Loader = ({ loading }) => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loaderStyle = {
    top: loading ? "-100%" : "0",
  };

  return (
    <>
      {
        <div
        style={{
          display: !hideLoader ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-full h-full bg-black fixed z-50 transition-all duration-500 ease-linear top-0 text-white text-3xl font-extrabold uppercase flex flex-col items-center"
        id="loader"
      >
          <h1 className="absolute opacity-0 bg-gradient-to-r from-l_primary to-d_primary text-transparent bg-clip-text">
            Creative
          </h1>
          <h1 className="absolute opacity-0 bg-gradient-to-r from-l_primary to-d_primary text-transparent bg-clip-text">
            Collaborative
          </h1>
          <h1 className="absolute opacity-0 bg-gradient-to-r from-l_primary to-d_primary text-transparent bg-clip-text">
            Ambitious
          </h1>
        </div>
      }
      <div
        style={{ display: !hideLoader ? "none" : "flex" }}
        className="w-full h-full bg-black fixed z-50  ease-linear top-0 text-white text-3xl font-extrabold uppercase flex justify-center place-items-center"
        id="loader"
        // style={loaderStyle}
      >
        <h1>Loading.....</h1>
      </div>
    </>
  );
};

export default Loader;
