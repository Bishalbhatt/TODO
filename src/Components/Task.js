import React from 'react'
import './Task.css'

const Task = ({task, onDelete, onUpdate}) => {

  return (
    <div className="task">
        <p>{task.name}, {task.day}</p>
        <div className="buttons">
        <i className="fa-sharp fa-solid fa-trash fa-3x" onClick={()=>onDelete(task.id)}></i>
        <button type="button" id="update" onClick={()=>onUpdate(task.id)}>Update</button>
        </div>
    </div>
  )
}

export default Task
