import './App.css'
import { useState } from 'react';

import Header from './layouts/Header/Header';
import MainContent from './layouts/MainContent/MainContent';
import Footer from './layouts/Footer/Footer';

import initialTasks from './data/initialTasks';
import type { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

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
  
  return (
    <div className='app'>
      <Header />

      <MainContent tasks={tasks} onAddTask={addTask} />

      <Footer />
    </div>
  )
}

export default App
