import { useState, useEffect } from 'react';
import { ANIMATION_INTERVAL, RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX } from '../constants';

/**
 * Custom hook for animating random numbers
 * @param {boolean} isRunning - Whether animation should run
 * @param {number} count - Number of random numbers to generate
 * @param {boolean} outOfPageNumbers - Whether to disable animation
 * @returns {Array} - Array of animated random numbers
 */
export const useAnimation = (isRunning, count, outOfPageNumbers) => {
  const [animatedCounter, setAnimatedCounter] = useState([]);

  const generateRandomNumbers = (numCount) => {
    const numbers = [];
    for (let i = 0; i < numCount; i++) {
      numbers.push(
        Math.floor(Math.random() * (RANDOM_NUMBER_MAX - RANDOM_NUMBER_MIN + 1)) + RANDOM_NUMBER_MIN
      );
    }
    return numbers;
  };

  useEffect(() => {
    if (!outOfPageNumbers && isRunning) {
      const timer = setInterval(() => {
        setAnimatedCounter(generateRandomNumbers(count));
      }, ANIMATION_INTERVAL);

      return () => clearInterval(timer);
    }
  }, [isRunning, outOfPageNumbers, count]);

  return animatedCounter;
};


