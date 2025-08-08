import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');
  const onChange =({target}) => {
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    onNewCategory(inputValue.trim())
    setInputValue('');
    
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  )
}

