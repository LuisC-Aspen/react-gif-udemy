import { getGifs } from "../helpers/getGifs.js";
import { useState, useEffect } from 'react'
import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ( {category} ) => {
    
    const {images, isLoading} = useFetchGifs(category);

    console.log(isLoading)

   /* const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect( ()=> {
        getImages();
    }, []) */


    return (
        <>
            <h3> {category} </h3>

            {
                /* isLoading 
                ? (<h2>Está cargandoooooo...</h2>) 
                : null */ //esto es lo mismo que esto de abajo:
                isLoading && (<h2>Está cargandoooooo...</h2>) //El && se entiende como un operador logico if true
            }

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifItem 
                            key={img.id}
                            {...img} //Con el operador spread esparcimos todas sus properties, así solo declaramos las que necesitamos en el funcional component
                            /* title={img.title}
                            url={img.url} */
                        />
                    ))
                }
            </div>

        </>
    )
}
