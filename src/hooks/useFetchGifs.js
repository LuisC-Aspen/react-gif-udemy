import React from 'react'
import { useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=> {
        getImages();
    }, [])

    return {
        images: images, //En ecmascript6 si tienes una propiedad con una variable del mismo nombre se puede dejar simplemente el nombre común, es decir, en este caso quedaría simplemente como: images
        isLoading: isLoading
    }

}
