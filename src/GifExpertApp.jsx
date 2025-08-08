import React from 'react'
import { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Fern'])
  const onAddCategory = (newCategory) =>{
    if (categories.includes(newCategory)) {
      return alert('Ya existe');
    }else{
    setCategories([newCategory, ...categories])
  }
}
  return (
    <>
    <h1>Gifs de Frieren</h1>
    <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>
    <button onClick={onAddCategory}>Agregar</button>

      {
      categories.map(category =>{
        return <GifGrid key = {category}
        category={category}
        />
      })
      }
    </>
  )
}
