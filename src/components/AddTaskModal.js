import React, { useState } from "react";

const AddTaskModal = ({ onClose, onAddTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !subject) return;
    onAddTask({ title, date, subject });
  };

  return (
    <div className="add-task-modal">
      <form onSubmit={handleSubmit}>
        <h3>ADD TASK</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="ADD TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            placeholder="ADD A DATE"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">SELECT A SUBJECT</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <div className="buttons">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskModal;