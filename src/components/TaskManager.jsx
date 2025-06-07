import { useState } from "react"
import AddTask from "./addTask";
import './TaskManager.css'
import TaskList from "./TaskList";

export default function TaskManager(){
    const [tasks,setTasks]=useState([]);

    const addTask=(text)=>{
        const newTask={id:Date.now(),text,completed:false};
        setTasks([...tasks,newTask]);
    }

    const toggelTask=(id)=>{
        setTasks(tasks.map((task)=>{
            return task.id==id?{...task,completed:!task.completed}:task;
        }))
    }

    const deleteTask=(id)=>{
        const newTasks=tasks.filter((task)=>task.id!=id);
        setTasks(newTasks);
    }

    return (
        <div className="taskManager">
        <h2>Task Manager</h2>
        <AddTask addTask={addTask}/>
        <TaskList tasks={tasks} toggleTask={toggelTask} deleteTask={deleteTask}/>
        <p>Tasks:{tasks.length}</p>
        </div>
    )
}