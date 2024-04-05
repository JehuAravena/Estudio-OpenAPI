// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import { getTasks, addTask } from './task/TaskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleLoadTasks = async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  const handleAddTask = async () => {
    if (newTask.trim()) {
      const updatedTasks = await addTask(newTask);
      setTasks(updatedTasks);
      setNewTask('');
    }

  console.log('informacion para debuggear');
  console.log('tasks', tasks);
  console.log('newTask', newTask);
  
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <button onClick={handleLoadTasks}>Cargar Tareas</button>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;