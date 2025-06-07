import { useState } from "react";

export default function AddTask({addTask}){
    const[value,setValue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value.trim()){
            addTask(value);
            setValue("");
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="flex">
                    <input className="inputBox" type="text" placeholder="Enter the Task" 
                    onChange={(e)=>setValue(e.target.value)} value={value}/>
                    <button className="addButton">Add</button>
            </div>
        </form>
    )
}