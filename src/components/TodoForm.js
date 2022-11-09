import React, { useState } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      Text: input
    });

    setInput('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Add a todo'
        value={input}
        name="tex"
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'> Add todo</button>
    </form>
  )
}

export default TodoForm