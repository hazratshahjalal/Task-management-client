import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('./tasks.json') // Fetch the tasks.json file from the same directory as the component
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="task-list container">
      <h1 className="my-4 text-center">Manage All Tasks From Here</h1>
      <h3 className="my-2 text-center">Task List</h3>
      <div className="table-responsive">
        <table className="table table-bordered border border-1 border-info table-striped">
          <thead>
            <tr>
              <th className="bg-primary text-white text-center">Title</th>
              <th className="bg-primary text-white">Description</th>
              <th className="bg-primary text-white text-center">Status</th>
              <th className="bg-primary text-white text-center">Update</th>
              <th className="bg-primary text-white text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
