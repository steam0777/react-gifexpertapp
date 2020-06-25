import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) =>{
  
  const [ inputValue, setInputValue ] = useState('');  

  const handleInputChange = (e) =>{
    // console.log(e.target.value);

    setInputValue( e.target.value );
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories( categories => [ inputValue, ...categories ] );
      setInputValue('');
    }

  }

  //  NO PUEDES CAMBIAR UN VALOR DE FORMA DIRECTA SIEMPRE TIENES QUE UTILIZAR EL onChange() PORQUE SINO MUESTRA EL INPUT CON EL VALUE PERO NO TE PERMITE CAMBIAR ESTA COMO BLOQUEADO
  return (

    // <h1>{inputValue}</h1>
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>  

  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}