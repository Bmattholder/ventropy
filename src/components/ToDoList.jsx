import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return savedTodos;
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  function handleDelete(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Add a todo'
            className='form-control'
            value={inputValue}
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='btn btn-block'>Add</button>
        </div>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div className='status-open' key={index}>
            <li>
              {todo}
              <button
                className='btn btn-danger'
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
