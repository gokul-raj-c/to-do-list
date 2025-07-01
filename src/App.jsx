import './App.css'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  const initial_task=[
    {
      id:10,
      text:"Task 1"
    },
    {
      id:11,
      text:"Task 2"
    },
    {
      
      id:12,
      text:"Task 3"
    }
  ];
  
    return (
      <>
        <div className='App'>
         <header>
          <h1>To-Do List</h1>
         </header>
  
         <main>
          <div id="tasks">
          <Input></Input>
          {
            initial_task.map((task)=>(
            <Card task={task}></Card>
            ))
          }
          </div>
         </main>
        </div>
        
      </>
    )
  }
  
  export default App