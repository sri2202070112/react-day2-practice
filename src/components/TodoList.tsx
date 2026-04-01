import React, { useState } from 'react';

/**
 * Lists & Keys Exercise
 *
 * This component demonstrates how React identifies list items.
 * 1. Array of todo objects with 'id' and 'task'.
 * 2. Mapping through them to render a list.
 * 3. Adding an item to the start of the array to see the effect of keys.
 */

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const initialTodos: Todo[] = [
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Practice Lists', completed: false },
    { id: 3, task: 'Master Keys', completed: false },
  ];

  // State for the list of todos
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // Function to reset the list to its initial state
  const resetTodos = () => {
    setTodos(initialTodos);
  };

  // Function to add a brand-new todo to the START of the array
  const addTodoToStart = () => {
    const newTodo: Todo = {
      id: Date.now(), // Generate a unique ID using the current timestamp
      task: '', // Always start with an empty task
      completed: false,
    };
    // Use the spread operator to put the new item first
    setTodos([newTodo, ...todos]);
  };

  // Function to toggle a todo's completion status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to update a todo's task name
  const updateTodoTask = (id: number, newTask: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#d4af37' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '30px', width: '100%', maxWidth: '500px', justifyContent: 'center' }}>
        <button 
          onClick={addTodoToStart}
          style={{ flex: 1, padding: '12px 24px', cursor: 'pointer', backgroundColor: '#d4af37', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)', transition: 'all 0.2s' }}
        >
          Add Todo to Start
        </button>
        <button 
          onClick={resetTodos}
          style={{ padding: '12px 24px', cursor: 'pointer', backgroundColor: 'transparent', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '12px', fontWeight: 'bold', transition: 'all 0.2s' }}
        >
          Reset
        </button>
      </div>

      {/* --- LIST 1: USING UNIQUE ID AS KEY (CORRECT) --- */}
      <h3>List with Unique ID Keys</h3>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', width: '100%' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '600px', backgroundColor: 'rgba(212, 175, 55, 0.05)', padding: '10px', borderRadius: '12px' }}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer', width: '20px', height: '20px', accentColor: '#d4af37', flexShrink: 0 }}
            />
            <span style={{ fontSize: '0.8rem', opacity: 0.5, flexShrink: 0 }}>ID: {todo.id.toString().slice(-4)}</span>
            <input 
              type="text" 
              value={todo.task} 
              autoFocus={todo.task === ''} // Focus if it's empty (likely just added)
              onChange={(e) => updateTodoTask(todo.id, e.target.value)}
              placeholder="Enter new task"
              style={{ 
                flex: 1, 
                padding: '8px 12px', 
                borderRadius: '8px', 
                border: '1px solid rgba(212, 175, 55, 0.2)', 
                backgroundColor: 'transparent', 
                color: '#d4af37', 
                outline: 'none',
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.6 : 1,
                fontSize: '1rem'
              }} 
            />
          </li>
        ))}
      </ul>

      <hr style={{ margin: '40px 0', width: '100%', borderColor: 'rgba(212, 175, 55, 0.2)', borderWidth: '1px', borderStyle: 'solid' }} />

      {/* --- LIST 2: USING INDEX AS KEY (PROBLEMATIC) --- */}
      <h3>List with Index Keys</h3>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', width: '100%' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '600px', backgroundColor: 'rgba(212, 175, 55, 0.05)', padding: '10px', borderRadius: '12px' }}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer', width: '20px', height: '20px', accentColor: '#d4af37', flexShrink: 0 }}
            />
            <span style={{ fontSize: '0.8rem', opacity: 0.5, flexShrink: 0 }}>Idx: {index}</span>
            <input 
              type="text" 
              value={todo.task} 
              autoFocus={todo.task === ''}
              onChange={(e) => updateTodoTask(todo.id, e.target.value)}
              placeholder="Enter new task"
              style={{ 
                flex: 1, 
                padding: '8px 12px', 
                borderRadius: '8px', 
                border: '1px solid rgba(212, 175, 55, 0.2)', 
                backgroundColor: 'transparent', 
                color: '#d4af37', 
                outline: 'none',
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.6 : 1,
                fontSize: '1rem'
              }} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
