import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const stepsData = [
  { label: "Chọn rạp", completed: true },
  { label: "Chọn ghế", completed: false },
  { label: "Chọn bắp nước", completed: false },
  { label: "Thanh toán", completed: false },
];

const ProgressBar = ({Progress}) => {
  const [steps, setSteps] = useState(stepsData);

  const MinhUpdate = (index) => {
    const updatedSteps = steps.map((step, i) => ({
      ...step,
      completed: i === index ? true : false
    }));
    setSteps(updatedSteps);
  };

  useEffect(() => {
    MinhUpdate(Progress);
  }, []);

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyItems:'center', paddingTop:'20px'}}>
            <div className={`circle ${step.completed ? "active" : ""}`}></div>
            <p className={`label ${step.completed ? "active-text" : ""}`}>{step.label}</p>
          </div>
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
