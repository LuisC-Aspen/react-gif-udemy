import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        if (inputValue.trim().length <1) return;
        //setCategories( (categories) => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue("")
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ /*(event) => */ onInputChange/*(event)*/} //Se obvia que siempre se envia un event por lo que lo comentado no es necesario escribirlo
        />
    </form>
  )
}
