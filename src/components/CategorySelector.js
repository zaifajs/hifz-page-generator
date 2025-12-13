import React from 'react';
import { sets } from '../constants';
import Logo from '../logo.svg';

const CategorySelector = ({ setSelected, selectedCount, onSetChange, onCountChange }) => {
  return (
    <div className="logo">
      <div className="div">
        <img width={200} alt="logo" src={Logo} />
      </div>
      <div className="dropdown left-auto">
        <label>
          <span>Select From:</span>
          <select
            className="minimal"
            value={setSelected}
            onChange={onSetChange}
            aria-label="Select category"
          >
            <option value="">-- Select Category --</option>
            {Object.entries(sets).map(([key, value]) => (
              <option key={key} value={key}>
                {`${key}: ${value.ajza}`}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="dropdown">
        <span>Number of pages:</span>
        <select
          className="minimal"
          value={selectedCount}
          onChange={onCountChange}
          aria-label="Number of pages"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default CategorySelector;


