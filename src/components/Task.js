import react, { useEffect,useState } from 'react'
import { getTasks } from "../services/task"

const Task=()=>{
    const [tasks,setTasks]=useState([]);


    useEffect(()=>{
        getTasks().then(res=>setTasks(res.data))
        console.log(tasks)
    },[])


    return (
        <div>I am a task

            {console.log(tasks)}
            <ul>

                {
                    tasks.map(task=>{
                        return(<li key={task.id}>{task.content}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default Task