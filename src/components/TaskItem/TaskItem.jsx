import React from 'react';

const TaskItem = ({ task }) => {
  const { title, description, status } = task;

  return (
    <tr>
      < td className='fw-bold'>{title}</td>
      <td>{description}</td>
      < td className='fw-bold'>{status}</td>
      <td className='text-center'>
        <button className='btn btn-success ' onClick={() => updateStatus(task.id)}>Update Status</button>
      </td>
      <td className='text-center'>
        <button className='btn btn-danger' onClick={() => deleteTask(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
