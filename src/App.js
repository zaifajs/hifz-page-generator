import React, { useState } from "react";
import "./style.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useAnimation } from "./hooks/useAnimation";
import { usePageNumberGenerator } from "./hooks/usePageNumberGenerator";
import { STORAGE_KEYS } from "./constants";
import CategorySelector from "./components/CategorySelector";
import PageNumberDisplay from "./components/PageNumberDisplay";
import ControlButtons, { GeneratedNumbersControls } from "./components/ControlButtons";
import GeneratedNumbersList from "./components/GeneratedNumbersList";

const App = () => {
  const [setSelected, setSetSelected] = useState("A28");
  const [outOfPageNumbers, setOutOfPageNumbers] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showGenerated, setShowGenerated] = useState(false);
  const [selectedCount, setSelectedCount] = useState(1);

  // Use custom hook for localStorage with error handling
  const [generatedPageNumbers, setGeneratedPageNumbers, removeGeneratedPageNumbers] = useLocalStorage(
    STORAGE_KEYS.GENERATED_PAGE_NUMBERS,
    []
  );

  // Use custom hook for page number generation
  const { resultPageNumbers, generatePageNumbers } = usePageNumberGenerator(
    setSelected,
    selectedCount,
    generatedPageNumbers,
    setGeneratedPageNumbers,
    setOutOfPageNumbers
  );

  // Use custom hook for animation
  const animatedCounter = useAnimation(isRunning, selectedCount, outOfPageNumbers);

  const handleDropdownChange = (event) => {
    setShowGenerated(false);
    const { value } = event.target;
    setSelectedCount(parseInt(value, 10));
  };

  const handleStartStop = () => {
    if (!setSelected) {
      alert("No Category Selected");
      return;
    }

    setShowGenerated(false);

    if (!outOfPageNumbers) {
      setIsRunning(!isRunning);
      if (!isRunning) {
        const generated = generatePageNumbers();
        if (!generated) {
          setIsRunning(false);
        }
      }
    }
  };

  const handleSetChange = (e) => {
    setSetSelected(e.target.value);
    setShowGenerated(false);
  };

  const resetPageNumbers = () => {
    removeGeneratedPageNumbers();
    setOutOfPageNumbers(false);
    setIsRunning(false);
    setShowGenerated(false);
  };

  const toggleShowGenerated = () => {
    if (!isRunning || outOfPageNumbers) {
      setShowGenerated(!showGenerated);
    }
  };

  return (
    <>
      <CategorySelector
        setSelected={setSelected}
        selectedCount={selectedCount}
        onSetChange={handleSetChange}
        onCountChange={handleDropdownChange}
      />
      <div className="App">
        <PageNumberDisplay
          isRunning={isRunning}
          animatedCounter={animatedCounter}
          resultPageNumbers={resultPageNumbers}
          selectedCount={selectedCount}
        />
        <ControlButtons
          isRunning={isRunning}
          outOfPageNumbers={outOfPageNumbers}
          onStartStop={handleStartStop}
        />
        <GeneratedNumbersList
          generatedPageNumbers={generatedPageNumbers}
          showGenerated={showGenerated}
          controls={
            <GeneratedNumbersControls
              isRunning={isRunning}
              outOfPageNumbers={outOfPageNumbers}
              onReset={resetPageNumbers}
              onToggleList={toggleShowGenerated}
              showGenerated={showGenerated}
            />
          }
        />
      </div>
    </>
  );
};

export default App;
