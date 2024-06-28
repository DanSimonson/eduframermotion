import React from "react";
import { AnimatedBanner } from "../components/BannerVar";
import Types from "../utils/Type";

function SecondExample() {
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
        <AnimatedBanner typeIn={type.overthetopIn} typeOut={type.overthetopOut} />
      </div>
    </>
  );
}

export default SecondExample;
