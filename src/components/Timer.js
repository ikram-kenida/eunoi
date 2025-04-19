import React, { useState, useEffect, useRef } from "react";

const Timer = ({ tasks, onRemoveTask }) => {
  // State variables
  const [time, setTime] = useState(25 * 60); // Initial time: 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("Pomodoro"); // Track the active tab
  const [selectedTask, setSelectedTask] = useState(null); // Track the selected task
  const [currentTaskTitle, setCurrentTaskTitle] = useState(""); // Track the current task title
  const audioRef = useRef(null); // Reference to the audio element

  // Update timer duration based on active tab
  useEffect(() => {
    if (activeTab === "Pomodoro") {
      setTime(25 * 60); // 25 minutes
    } else if (activeTab === "SHORT BREAK") {
      setTime(5 * 60); // 5 minutes
    } else if (activeTab === "LONG BREAK") {
      setTime(15 * 60); // 15 minutes
    }
  }, [activeTab]);

  // Timer logic
  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && time === 0) {
      setIsRunning(false); // Stop the timer
      playAlarm(); // Play the alarm sound
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Function to play the alarm sound
  const playAlarm = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play(); // Start playing the alarm
      setTimeout(() => {
        audio.pause(); // Stop the alarm after 5 seconds
        audio.currentTime = 0; // Reset the audio to the beginning
      }, 5000);
    }
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle "START" button click
  const handleStart = () => {
    if (selectedTask) {
      onRemoveTask(selectedTask); // Remove the selected task
      setCurrentTaskTitle(selectedTask.title); // Set the task title as the motivational text
      setSelectedTask(null); // Clear the selection
    }
    setIsRunning(true); // Show the overlay "FINISH" button
  };

  // Handle "STOP" button click
  const handleStop = () => {
    setIsRunning(false); // Hide the overlay "FINISH" button

    // Reset the timer to its initial value based on the active tab
    if (activeTab === "Pomodoro") {
      setTime(25 * 60); // 25 minutes
    } else if (activeTab === "SHORT BREAK") {
      setTime(5 * 60); // 5 minutes
    } else if (activeTab === "LONG BREAK") {
      setTime(15 * 60); // 15 minutes
    }

    setCurrentTaskTitle(""); // Reset motivational text to "Time to focus!"
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    if (tab === "SHORT BREAK" || tab === "LONG BREAK") {
      setSelectedTask(null); // Clear the selected task when switching to a break
    }
    setActiveTab(tab); // Update the active tab
    setIsRunning(false); // Reset running state
    setCurrentTaskTitle(""); // Reset motivational text to "Time to focus!"
  };

  // Handle task selection
  const handleTaskSelect = (task) => {
    if (activeTab !== "SHORT BREAK" && activeTab !== "LONG BREAK") {
      setSelectedTask(task); // Set the selected task only if not in a break
      setTime(25 * 60); // Reset timer to 25 minutes for Pomodoro
    }
  };

  // Disable the "-" button when time is at 0
  const isMinusButtonDisabled = time <= 0;

  return (
    <div className="timer">
      {/* Audio Element for Alarm */}
      <audio ref={audioRef} src="/alarm-sound.mp3" />

      {/* Overlay */}
      {isRunning && (
        <div className="overlay">
          {/* Allow interaction with the FINISH button */}
          <button className="finish-button" onClick={handleStop}>
            FINISH
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="tabs">
        <button
          onClick={() => handleTabChange("Pomodoro")}
          className={activeTab === "Pomodoro" ? "active-tab" : ""}
        >
          Pomodoro
        </button>
        <button
          onClick={() => handleTabChange("SHORT BREAK")}
          className={activeTab === "SHORT BREAK" ? "active-tab" : ""}
        >
          SHORT BREAK
        </button>
        <button
          onClick={() => handleTabChange("LONG BREAK")}
          className={activeTab === "LONG BREAK" ? "active-tab" : ""}
        >
          LONG BREAK
        </button>
      </div>

      {/* Timer Controls */}
      <div className="controls">
        <button
          onClick={() => setTime((prevTime) => Math.max(prevTime - 60, 0))} // Prevent negative values
          disabled={isMinusButtonDisabled} // Disable when time is 0
        >
          -
        </button>
        <span>{formatTime(time)}</span>
        <button onClick={() => setTime((prevTime) => prevTime + 60)}>
          +
        </button>
      </div>

      {/* Motivational Text */}
      <p className="text">
        {activeTab === "Pomodoro"
          ? (currentTaskTitle || "Time to focus!")
          : ""}
      </p>

      {/* Start Button */}
      {!isRunning && (
        <button className="start-button" onClick={handleStart}>
          START
        </button>
      )}

      {/* Tasks Section */}
      <div className="tasks-section">
        <p>TASKS</p>
        <div className="line"></div> {/* Horizontal line */}
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={selectedTask === task ? "task-item selected" : "task-item"}
              onClick={() => handleTaskSelect(task)}
            >
              <strong>{task.title}</strong> {task.subject} ({task.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;