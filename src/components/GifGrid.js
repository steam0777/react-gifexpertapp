import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( {category} ) => {
  
  // const [count, setCount] = useState(0); 
  // const [images, setImages] = useState([]) 
  //  2
  // useEffect( () =>{
  //   getGifs( category )
  //       .then( imgs =>{
  //         setImages( imgs )
  //       })
  //       //  ESTA category ES SOLO PARA DECIR A useEffect QUE TIENE QUE CAMBIAR PARA QUE SE EJECUTE LA FUNCION QUE ESTA DENTRO   
  // }, [ category ])
  //  1
  // const getGifs = async() =>{

  //   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=fxHF3ZqRhMfUVR9crvf6zrTdpoGUtdFX`;

  //   const resp = await fetch( url );

  //   const {data} = await resp.json();

  //   const gifs = data.map( img =>{
  //     return{
  //       id: img.id,
  //       title: img.title,
  //       url: img.images?.downsized_medium.url
  //     }
  //   })

  //   console.log(gifs);

  //   setImages( gifs );

  // }
  //  1
  // getGifs();

  //  3
  const { data: images, loading } = useFetchGifs( category );

  console.log(loading);

  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>

    { loading && <p className="animate__animated animate__flash">Loading...</p> }

    <div className="card-grid">
      {/* <h2>{ count }</h2> */}
      {/* <button onClick={ () => {setCount( count + 1 )} }>Send</button> */}
      
      {/* <ol>
        {
          images.map( ({ id, title }) => (
            <li key={ id }>{ title }</li>
          ))
        }
      </ol> */}
      {/* {
        images.map( img => (
          <GifGridItem
            key={img.id}
            { ...img } 
          />
        ))
      } */}

      {
        images.map( img => (
          <GifGridItem
            key={img.id}
            { ...img } 
          />
        ))
      }
    </div>
    </>
  )
}
