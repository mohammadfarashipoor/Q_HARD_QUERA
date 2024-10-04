import { useState, useEffect, useRef } from "react";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [logs, setLogs] = useState([]);
  const intervalIdRef = useRef(null);

  function toggleTimer() {
    if (isRunning) {
      clearInterval(intervalIdRef.current);
      setIsRunning(false);
    } else {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 10);
      }, 10);
      setIsRunning(true);
    }
  }

  function reset() {
    clearInterval(intervalIdRef.current);
    setElapsedTime(0);
    setIsRunning(false);
    setLogs([]);
  }

  function logTime() {
    setLogs((prevLogs) => [...prevLogs, formatTime()]);
  }

  function deleteLogs() {
    setLogs([]);
  }

  function formatTime() {
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((elapsedTime / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((elapsedTime % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${milliseconds}:${seconds}:${minutes}`;
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        toggleTimer();
        ر;
      } else {
        toggleTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalIdRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      <h1 data-testid="Timer">{formatTime()}</h1>
      <button data-testid="toggle-button" onClick={toggleTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button data-testid="reset-button" onClick={reset}>
        Reset
      </button>
      <button data-testid="log-button" onClick={logTime}>
        Log Time
      </button>
      {logs.length ? (
        <button
          data-testid="delete-logs"
          className="delete"
          onClick={deleteLogs}
        >
          Delete Logs
        </button>
      ) : null}
      <h3>Logged Times:</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default Timer;
