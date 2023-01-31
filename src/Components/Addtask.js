import { useState } from 'react';
import './Addtask.css';

const AddTask=({onAdd})=>{
    const [name, setName]=useState('');
    const [day, setDay]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!name)
        {
        alert("You should write some text in name box");
        return
        }
        onAdd({name,day});
        setName('');
        setDay('');
    }
    return(
        <form onSubmit={onSubmit}>
            <label id="name">Task Name:</label><br />
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input><br />
            <label id="day">Task Day:</label><br />
            <input type="text" name="day" id="day" value={day} onChange={(e)=>setDay(e.target.value)}></input><br /><br />
            <input type="submit" name="submit" value="Save" />
        </form>
    )
}

export default AddTask