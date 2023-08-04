import React from 'react';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'; // Add this line to import axios

const TaskItem = ({ task, onDelete }) => {
  const { title, description, status, _id } = task;


  return (
    <tr>
      <td className='fw-bold'>{title}</td>
      <td>{description}</td>
      <td className='fw-bold'>{status}</td>
      <td className='text-center'>
        <button className='btn btn-secondary ' onClick={() => updateStatus(task.id)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </td>
      <td className='text-center'>
        <button className='btn btn-danger' >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
