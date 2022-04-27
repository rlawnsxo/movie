import React, { useState } from "react";
import Chlid from "./Chlid";

const Test = () => {
  const [test, setTest] = useState("");
  const onClick = (item) => {
    setTest(item);
  };
  return (
    <div>
      <Chlid item={onClick} />
      {test}
    </div>
  );
};

export default Test;
