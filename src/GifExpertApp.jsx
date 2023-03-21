import {useState} from 'react'
import { AddCategory } from './components/AddCategory.jsx';
import { GifGrid } from './components/GifGrid.jsx';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "Foxes" ]);
    
    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) )return;

        setCategories([ newCategory, ...categories ])
        //setCategories( cat=> [...cat, "Ciervos"] ) //Otra forma de hacerlo
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

                { 
                    categories.map( category => (
                        <GifGrid key={category} category={category} />
                        ))
                }
        </>
    )
}