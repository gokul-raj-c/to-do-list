import { useEffect,useState } from "react";
import Card from "./Card";
import Input from "./Input";
const Task=()=>{
    const initial_task=[];

    const[tasks,setTasks]=useState(initial_task);
    const addTaskHandler=async (newTask)=>{
        const newTaskObj={
            task_id:Math.random(),
            task_name:newTask
        };
        const response=await fetch("https://to-do-backend-grtg.onrender.com/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newTaskObj),
        })
        if(response.status==201)
        {
            getTasks();
            alert("New Task Added Successfully!");
        }
        else{
            alert("Failed To Add New Task!")
        }
    };

    const deleteTaskHandler=async (taskId)=>{
        const response=await fetch("https://to-do-backend-grtg.onrender.com/"+taskId,{
            method:"DELETE"
        })
        if(response.status==200)
        {
            getTasks();
            alert("Task Deleted Successfully!");
        }
        else
        {
            alert("Failed To Delete Task!")
        }
    };

    const getTasks=async ()=>{
        const response=await fetch("https://to-do-backend-grtg.onrender.com/");
            const taskList= await response.json();
            console.log(taskList);
            setTasks(taskList)
    }

    useEffect(()=>{
        getTasks()
    },[]);

    return(
        <div id="tasks">
            <Input onAddTask={addTaskHandler}></Input>
            {
                tasks.map((task)=>(
                    <Card task={task} onDeleteTask={deleteTaskHandler}></Card>
                ))
            }
        </div>    
    )
}

export default Task;