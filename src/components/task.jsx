import { useState } from "react";
import Card from "./Card";
import Input from "./Input";
const Task=()=>{
    const initial_task=[
        {
            id:10,
            text:"This Is Task 1"
        },
        {
            id:11,
            text:"This Is Task 2"   
        },
        {
            id:12,
            text:"This Is Task 3"
        }
    ];
    const[tasks,setTasks]=useState(initial_task);
    const addTaskHandler=(newTask)=>{
        const newTaskObj={
            id:Math.random(),
            text:newTask
        };
        setTasks(prev=>[
            ...prev,
            newTaskObj
        ])   
    };
    const deleteTaskHandler=(taskId)=>{
        setTasks(prev=>prev.filter(item=>item.id !== taskId))
    };

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