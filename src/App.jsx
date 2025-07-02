import './App.css'
import Task from './components/task'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/about'
import Navbar from './components/navbar'

function App() {
    return (
      <>
      <BrowserRouter>
        <div className='App'>
         <header>
          <h1>To-Do List</h1>
         </header>
         <Navbar></Navbar>
         <main>
          <Routes>
            <Route path="/" element={<Task></Task>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
         </main>
        </div>  
      </BrowserRouter>     
      </>
    );
  }
  
  export default App