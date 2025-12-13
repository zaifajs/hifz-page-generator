import React from 'react';

const GeneratedNumbersList = ({ generatedPageNumbers, showGenerated, controls }) => {
  return (
    <div className="gen-numbers-wrapper">
      <div className="gen-numbers-item">
        {showGenerated && (
          generatedPageNumbers.length !== 0 ? (
            generatedPageNumbers.map((number, index) => (
              <span key={index} className="gen-numbers-set">
                {number}
              </span>
            ))
          ) : (
            <span className="gen-numbers-set">
              No page number generated yet
            </span>
          )
        )}
      </div>
      {controls}
    </div>
  );
};

export default GeneratedNumbersList;

