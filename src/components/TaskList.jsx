export default function TaskList({tasks,toggleTask,deleteTask}){
    return <ul className="tasks">
        {tasks.map((task,index)=><li 
        key={index} 
        className="taskBox">
        <span className={task.completed ? "completed" : ""} onClick={() => toggleTask(task.id)}>{task.text}</span>
        <span className="deleted" onClick={()=>deleteTask(task.id)}>X</span>
        </li>)}
    </ul>
}