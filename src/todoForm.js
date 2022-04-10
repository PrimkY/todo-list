import { useState } from 'react';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    // remove previous input
    setUserInput("");
  }

// функция сохранения поля ввода по клике на интер.

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Write what need to do..."
      />
      <button>Save</button>
    </form>
  )
}

export default ToDoForm;