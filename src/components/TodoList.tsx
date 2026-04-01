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
}

const TodoList: React.FC = () => {
  const initialTodos: Todo[] = [
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Practice Lists' },
    { id: 3, task: 'Master Keys' },
  ];

  // Initial array of todo objects
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // Function to reset the list to its initial state
  const resetTodos = () => {
    setTodos(initialTodos);
  };

  // Function to add a brand-new todo to the START of the array
  const addTodoToStart = () => {
    const newTodo: Todo = {
      id: Date.now(), // Generate a unique ID using the current timestamp
      task: 'New Task at Start',
    };
    // Use the spread operator to put the new item first
    setTodos([newTodo, ...todos]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#d4af37' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
        <button 
          onClick={addTodoToStart}
          style={{ padding: '12px 24px', cursor: 'pointer', backgroundColor: '#d4af37', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)', transition: 'all 0.2s' }}
        >
          Add Todo to Start
        </button>
        <button 
          onClick={resetTodos}
          style={{ padding: '12px 24px', cursor: 'pointer', backgroundColor: 'transparent', color: '#d4af37', border: '2px solid #d4af37', borderRadius: '12px', fontWeight: 'bold', transition: 'all 0.2s' }}
        >
          Reset List
        </button>
      </div>

      {/* --- LIST 1: USING UNIQUE ID AS KEY (CORRECT) --- */}
      <h3>List with Unique ID Keys</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
            <span>{todo.task} (ID: {todo.id.toString().slice(-4)})</span>
            <input type="text" placeholder="Type a note here..." style={{ marginLeft: '10px', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.4)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#d4af37', outline: 'none' }} />
          </li>
        ))}
      </ul>

      <hr style={{ margin: '30px 0', width: '100%', borderColor: 'rgba(212, 175, 55, 0.2)', borderWidth: '1px', borderStyle: 'solid' }} />

      {/* --- LIST 2: USING INDEX AS KEY (PROBLEMATIC) --- */}
      <h3>List with Index Keys</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <span>{todo.task} (Index: {index})</span>
            <input type="text" placeholder="Type a note here..." style={{ marginLeft: '10px', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.4)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#d4af37', outline: 'none' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
