


export const getGifs = async( category ) =>{
  //  EL encodeURI SOLO BORRA ESPACIOS EN BLANCOS QUE SE ESCRIBIERON Y SE MANDARON DE ESA FORMA
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=fxHF3ZqRhMfUVR9crvf6zrTdpoGUtdFX`;

  const resp = await fetch( url );

  const {data} = await resp.json();

  const gifs = data.map( img =>{
    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
  
}