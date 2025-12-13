import React from 'react';

const ControlButtons = ({
  isRunning,
  outOfPageNumbers,
  onStartStop,
  onReset,
  onToggleList,
  showGenerated
}) => {
  return (
    <>
      <div className="button-wrapper">
        <button
          onClick={onStartStop}
          className={`button-82-pushable ${outOfPageNumbers ? 'disabled' : ''}`}
          disabled={outOfPageNumbers}
          aria-label={isRunning ? 'Stop generation' : 'Start generation'}
        >
          <span
            className="button-82-front text"
            style={{ backgroundColor: isRunning ? '#978E8E' : '#717171' }}
          >
            {outOfPageNumbers ? 'Start' : (isRunning ? 'Stop' : 'Start')}
          </span>
        </button>
        <br />
        <br />
      </div>
      {outOfPageNumbers && (
        <p>Please reset to regenerate new page numbers.</p>
      )}
    </>
  );
};

export const GeneratedNumbersControls = ({
  isRunning,
  outOfPageNumbers,
  onReset,
  onToggleList,
  showGenerated
}) => {
  return (
    <div className="gen-numbers-btns">
      <button
        className="reset"
        disabled={isRunning && !outOfPageNumbers}
        onClick={onToggleList}
        aria-label={showGenerated ? 'Hide generated numbers' : 'Show generated numbers'}
      >
        {showGenerated ? 'Hide' : 'List'}
      </button>
      <button
        className="reset"
        onClick={onReset}
        aria-label="Reset all page numbers"
      >
        Reset all
      </button>
    </div>
  );
};

export default ControlButtons;

