"use client";

import { Task } from "../page";
import { useState } from "react";

const TodoItem = ({task, ToggleTask, deleteTask, editTask} : {
  task: Task, 
  ToggleTask: (id: number) => void,
  deleteTask: (id: number) => void,
  editTask: (id: number, newTitle: string) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleSave = () => {
    if (editTitle.trim() !== "") {
      editTask(task.id, editTitle.trim());
      setIsEditing(false);
    }
  }

  const handleCancel = () => {
    setEditTitle(task.title); 
    setIsEditing(false);
  }

  return (
    <li className="w-full flex justify-between items-center p-4 border-b border-gray-200">
        {isEditing ? (
          <div className="flex-1 flex items-center gap-3 mr-6">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="flex-1 border border-gray-300 p-1 rounded"
              autoFocus
            />
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        ) : (
          <span className={`flex-1 mr-6 ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
          </span>
        )}
        
        <div className="flex items-center gap-3">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => ToggleTask(task.id)}
            />
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 min-w-[50px]"
              >
                Edit
              </button>
            )}
            <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 min-w-[60px]"
            >
                Delete
            </button>
        </div>
    </li>
  )
}

export default TodoItem