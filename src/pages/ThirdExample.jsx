import React from "react";
import { AnimatedBanner } from "../components/BannerVar";
import Types from "../utils/Type";

function ThirdExample() {
  let type = Types();
  return (
    <>
      <div
        style={{
          width: "25vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
          border: "5xp solid green",
        }}
      >
        <AnimatedBanner typeIn={type.subtleIn} typeOut={type.sublteOut} />
      </div>
    </>
      
  );
}

export default ThirdExample;
