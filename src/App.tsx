import './App.css'
import { useState, useEffect } from 'react';

import Header from './components/layouts/Header/Header';
import MainContent from './components/layouts/MainContent/MainContent';
import Footer from './components/layouts/Footer/Footer';

import initialTasks from './data/initialTasks';
import type { Task } from "./types/task";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./utils/localStorage";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storeadTasks = loadTasksFromLocalStorage();

    return storeadTasks ?? initialTasks;
  });

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (title: string, content: string, deadline: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      content,
      deadline,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {...task, completed: !task.completed }
          : task
      )
    );
  };
  
  return (
    <div className='app'>
      <Header />

      <MainContent
        tasks={tasks}
        onAddTask={addTask}
        onToggleTaskCompletion={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />

      <Footer />
    </div>
  )
}

export default App;
