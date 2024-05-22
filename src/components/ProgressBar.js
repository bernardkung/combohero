import { useState, useEffect } from 'react';

import "./ProgressBar.css";

export var ProgressBar = ({ width, max }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const percent = width/max
    setValue(percent * 700);
  });

  return (
    <div className={"progressComp"}>
      {/* <h1 className="percent-number">{status}</h1> */}
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  );
};