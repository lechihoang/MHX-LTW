"use client";

import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {

  const [ tasks, setTask ] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: false },
    { id: 3, title: "Deploy the App", completed: true }
  ])

  const [ newTask, setNewTask ] = useState("");

  const ToggleTask = (id: number) => {
    setTask(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  const deleteTask = (id: number) => {
    setTask(tasks.filter(task => task.id !== id))
  }

  const editTask = (id: number, newTitle: string) => {
    setTask(tasks.map(task => 
      task.id === id ? {...task, title: newTitle} : task
    ))
  }

  useEffect(() => {
    const saveTasks = localStorage.getItem('tasks');
    if (saveTasks) {
      setTask(JSON.parse(saveTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);  

  const addTask = () => {
    if (newTask.trim() != "") {
      setTask([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false
        }
      ])
      setNewTask(""); // Clear input after adding
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-bold w-full text-center">TODO LIST</h2>
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            placeholder="Enter your task here"
            className="border border-gray-300 p-2 bg-white text-black rounded-l-md"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="font-bold border border-gray-300 bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
            onClick={addTask}>
            Add
          </button>
        </div>
        <TodoList tasks = { tasks } ToggleTask = { ToggleTask } deleteTask = { deleteTask } editTask = { editTask } /> 
      </main>
    </div>
  );
}
