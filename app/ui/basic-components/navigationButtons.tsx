import React from "react";
import "@/app/globals.css"; 

const NavigationButtons: React.FC = () => {
  return (
    <div className="flex justify-between mt-8">
      <button className="navigation-buttons">
        Zpět
      </button>
      <button className="navigation-buttons">
        Další
      </button>
    </div>
  );
};

export default NavigationButtons;
