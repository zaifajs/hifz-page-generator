import { useState, useCallback } from 'react';
import { sets } from '../constants';

/**
 * Custom hook for generating page numbers
 * @param {string} setSelected - Selected set key
 * @param {number} selectedCount - Number of pages to generate
 * @param {Array} generatedPageNumbers - Already generated page numbers
 * @param {Function} setGeneratedPageNumbers - Function to update generated page numbers
 * @param {Function} setOutOfPageNumbers - Function to set out of page numbers state
 * @returns {Object} - Generator functions and state
 */
export const usePageNumberGenerator = (
  setSelected,
  selectedCount,
  generatedPageNumbers,
  setGeneratedPageNumbers,
  setOutOfPageNumbers
) => {
  const [resultPageNumbers, setResultPageNumbers] = useState([]);

  const generatePageNumbers = useCallback(() => {
    if (!setSelected || !sets[setSelected]) {
      return null;
    }

    const { startPage, endPage } = sets[setSelected];
    const numbersArray = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    const filteredPageNumbers = numbersArray.filter(
      (number) => !generatedPageNumbers.includes(number)
    );

    const halfIndex = Math.floor(filteredPageNumbers.length / selectedCount);

    setOutOfPageNumbers(halfIndex < 1);
    if (halfIndex < 1) {
      return null;
    }

    const allHalves = [];
    for (let i = 0; i < selectedCount; i++) {
      const start = i * halfIndex;
      const end = i === selectedCount - 1 ? filteredPageNumbers.length : (i + 1) * halfIndex;
      const half = filteredPageNumbers.slice(start, end);
      allHalves.push(half);
    }

    const randomIndexes = allHalves.map(half => Math.floor(Math.random() * half.length));
    const pageNumbers = randomIndexes.map((index, i) => allHalves[i][index]);

    // Store page numbers as flat array for display
    setResultPageNumbers(pageNumbers);

    const updatedGeneratedPageNumbers = [
      ...generatedPageNumbers,
      ...pageNumbers
    ];

    setGeneratedPageNumbers(updatedGeneratedPageNumbers);

    return pageNumbers;
  }, [setSelected, selectedCount, generatedPageNumbers, setGeneratedPageNumbers, setOutOfPageNumbers]);

  return {
    resultPageNumbers,
    generatePageNumbers
  };
};

