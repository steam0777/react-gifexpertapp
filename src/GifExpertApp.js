import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GigExpertApp = () =>{
  
  // const categorias = ['one puch', 'Samurai X', 'Iroman'];
  const [categories, setCategories] = useState(['One Puch']);
  
  // const handleAdd = () =>{
  //   // setCategories( cats =>[ ...cats, 'Thor' ])

  //   setCategories([
  //     'Thor',
  //     ...categories
  //   ]);
  // }

  
  return(
    <>
    <h2>GigExpertApp</h2>
    <AddCategory setCategories={setCategories} />
    <hr />

    {/* <button onClick={ handleAdd }>Agregar</button>   */}

    <ol>
      {
        categories.map( ( category ) => (
          // return <li key={ category }>{category} </li>
          <GifGrid 
            key={category}
            category={category} 
          />
        ))
      }
    </ol>  
    </>
  ) 
};

export default GigExpertApp;