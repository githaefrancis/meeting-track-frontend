import react, { useEffect, useState } from "react";
import { getTasks } from "../services/task";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
    console.log(tasks);
  }, []);

  return (
    <div>
      I am a task
      {console.log(tasks)}
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} className="text-danger">
              {task.content}
            </li>
          );
        })}
      </ul>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Min No.</th>
            <th scope="col">Deliberation</th>
            <th scope="col">Who</th>
            <th scope="col">Initial Target Date</th>
            <th scope="col">New Target Date</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">%</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <tr>
              <th scope="row">{task.task_ref}</th>
              <td>{task.content}</td>
              <td>{task.assigned_to}</td>
              <td>{task.initial_date}</td>
              <td>{task.new_target_date}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>{task.progress}</td>
              <td>{task.comment}</td>





            </tr>;
          })}


        </tbody>
      </table>
    </div>
  );
};

export default Task;
