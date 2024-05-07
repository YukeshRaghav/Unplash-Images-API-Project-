import React from 'react'
import { useGlobalContext } from './context'

export const SearchForm = () => {
  const {setsearchTerm}= useGlobalContext()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const searchValue= e.target.elements.search.value;
        if(!searchValue) return ;
        setsearchTerm(searchValue)

    }
  return (
    <section>
        <h1 className='title'>Unplash Images</h1>
        <form className='search-form' onSubmit={handleSubmit}>
            <input type='text'
            className='form-input search-input'
            name= 'search'
            placeholder='dog'/>
            <button type='submit' className='btn'>Search</button>
        </form>
    </section>
  )
  
}
