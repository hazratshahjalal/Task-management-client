import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation to ensure all fields are filled
    if (!title || !description || !status) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new task object with user input
    const newTask = {
      title,
      description,
      status,
    };

    // Log the form values for checking
    console.log(newTask);

    // Call the addTask function passed from the parent component to add the new task
    addTask(newTask);

    // Clear the form fields after submission
    setTitle('');
    setDescription('');
    setStatus('');
  };

  return (
    <Container className="my-4 p-4 bg-light">
      <h2 className="mb-4">Add a New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status:</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Control>
        </Form.Group>
        <div className="py-3">
          <Button className='' type="submit" variant="primary">
            Add Task
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default TaskForm;
