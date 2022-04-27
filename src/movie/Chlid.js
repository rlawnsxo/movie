import React, { useState } from "react";

const Chlid = ({ item }) => {
  const [chlid, setChild] = useState("");
  const onClick = () => {
    item(chlid);
  };
  const onChange = (e) => {
    setChild(e.target.value);
  };
  return (
    <div>
      <input value={chlid} onChange={onChange} />
      <button onClick={onClick}> test</button>
    </div>
  );
};

export default Chlid;
