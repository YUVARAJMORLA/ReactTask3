import React, { useState } from "react";
import "./App.css";

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setColorListVisible] = useState(false);

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker-container">
      <h1 className="color-picker-heading">Color Picker</h1>
      <div className="selected-color-box" style={{ backgroundColor: selectedColor }}>
        <button onClick={handleButtonClick}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))} 
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
