import React from 'react'
import Task from './Task'
import './Tasks.css'

const Tasks = ({tasks, onDelete, onUpdate}) => {
  return (
    <div className="tasks">
        <h2>Task Lists</h2>
        <hr />
        {
          tasks.map((task)=>
          <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
          )
        }
    </div>
  )
}

export default Tasks
