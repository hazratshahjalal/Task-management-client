import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import TaskForm from './components/TaskForm/TaskForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <TaskList />
      },
      {
        path: '/addTask',
        element: <TaskForm />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
