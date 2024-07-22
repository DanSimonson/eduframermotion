import React from "react";
import { Types } from "../utils/Type";
import { Example, AdvancedBanner } from "../components/AdvancedBanner";

function FourthExample() {
  let type = Types();
  return (
    <>
      <div
      // style={{
      //   width: "25vw",
      //   display: "flex",
      //   justifyContent: "center",
      //   marginTop: "4rem",
      //   border: "5xp solid green",
      // }}
      >
        {/* <Example /> */}
        <AdvancedBanner />
        {/* <AnimatedBanner typeIn={type.overthetopIn} typeOut={type.overthetopOut} /> */}
      </div>
    </>
  );
}

export default FourthExample;
