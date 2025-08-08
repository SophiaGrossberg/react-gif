import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  
const {images, isLoading} = useFetchGifs(category);
console.log(isLoading)

  return (
    <>
    <h2>{category}</h2>
    {isLoading && (<h2>Cargando...</h2>)}
    <div className='card-greed'>
      {
      images.map((image)=>(
        <GifItem 
          key={image.id} 
          {...image}
        />
      ))
      }
    </div>
    </>

  )
}

