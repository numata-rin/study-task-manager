import './App.css'

import Header from './layouts/Header/Header';
import MainContent from './layouts/MainContent/MainContent';
import Footer from './layouts/Footer/Footer';
import { initialTasks } from './data/initialTasks';

function App() {
  
  return (
    <>
      <Header />
      <MainContent tasks={initialTasks}/>
      <Footer />
    </>
  )
}

export default App
