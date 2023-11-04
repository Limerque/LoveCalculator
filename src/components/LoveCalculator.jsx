import React, { useState } from "react";
import "./LoveCalculator.css";

export default function LoveCalculator() {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [lovePercentage, setLovePercentage] = useState(null);

  const calculateLovePercentage = () => {
    if ((yourName === "Limerique" && partnerName === "Ross") || (yourName === "Ross" && partnerName === "Limerique") || (yourName === "limerique" && partnerName === "ross") || (yourName === "ross" && partnerName === "limerique")) {
      setLovePercentage(100);
    } else {
      const randomPercentage = Math.floor(Math.random() * 101);
      setLovePercentage(randomPercentage);
    }
  };

  return (
    <div className="love-calculator">
      <h1>Love Compatibility Calculator</h1>
      <label>
        Your Name:
        <input
          type="text"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
        />
      </label>
      <label>
        Partner's Name:
        <input
          type="text"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
        />
      </label>
      <button onClick={calculateLovePercentage}>Calculate</button>
      {lovePercentage !== null && (
        <p className="love-percentage">
          Your Love Percentage is: {lovePercentage}%
        </p>
      )}
    </div>
  );
}
