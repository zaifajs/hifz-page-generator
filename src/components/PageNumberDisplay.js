import React from 'react';
import { FONT_SIZES } from '../constants';

const PageNumberDisplay = ({
  isRunning,
  animatedCounter,
  resultPageNumbers,
  selectedCount
}) => {
  const generateSets = (count) => {
    if (count < 1) {
      return "";
    }
    const setsArray = Array(count).fill("000");
    return setsArray.join(", ");
  };

  const addSpaceAfterComma = (str) => {
    return str.replace(/,/g, ', ');
  };

  const getFontSize = () => {
    return FONT_SIZES[selectedCount] || FONT_SIZES.default;
  };

  return (
    <div className="numbers-wrapper">
      <div className="number-title">Page number</div>
      {isRunning ? (
        <div className={`counter-wrapper ${isRunning ? "" : "hide"}`}>
          <p className="number-display">
            {animatedCounter.join(', ')}
          </p>
        </div>
      ) : (
        <div className={`counter-wrapper ${isRunning ? "hide" : ""}`}>
          <p className="number-display" style={{ fontSize: getFontSize() }}>
            {resultPageNumbers && resultPageNumbers.length > 0 ? (
              addSpaceAfterComma(resultPageNumbers.join(', '))
            ) : (
              generateSets(selectedCount)
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageNumberDisplay;


