import React, { useState } from "react";
import Timer from "./Timer";
import AddTaskModal from "./AddTaskModal";
import "../css/Task.css";
import CustomNavbar from "./Navbar";
  
function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddTaskModal(false);
  };

  // Function to remove a task
  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="mt-2 mb-5">
   <CustomNavbar />
   
    <div className="app">
    
      {/* Timer Section */}
      <section className="timer-section">
        <Timer tasks={tasks} onRemoveTask={handleRemoveTask} />
      </section>

      {/* Add Task Button */}
      <button className="add-task-button text-center" onClick={() => setShowAddTaskModal(true)}>
        <span className="circle-icon">+</span>
        Add Task
      </button>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <AddTaskModal
          onClose={() => setShowAddTaskModal(false)}
          onAddTask={handleAddTask}
        />
      )}
    </div>
    </div>
  );
}

export default App;
