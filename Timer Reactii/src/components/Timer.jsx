import { useState, useEffect, useRef } from "react";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [logs, setLogs] = useState([]);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  function toggleTimer() {}

  function reset() {}

  function logTime() {}

  function formatTime() {
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div>
      <h1 data-testid="Timer">{formatTime()}</h1>
      <button data-testid="toggle-button" onClick={toggleTimer}></button>
      <button data-testid="reset-button" onClick={reset}>
        Reset
      </button>
      <button data-testid="log-button" onClick={logTime}>
        Log Time
      </button>
      <h3>Logged Times:</h3>
      <button data-testid="delete-logs" className="delete">
        delete logs
      </button>
      <ul></ul>
    </div>
  );
}

export default Timer;
