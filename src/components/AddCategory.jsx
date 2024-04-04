import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const inputChange = ({target}) => {
        setInputValue(target.value)
    }

    const submitForm = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() )

        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => submitForm(event) }>
            <input 
                type="text" 
                placeholder="Buscar gif"
                value={ inputValue }
                onChange={ inputChange }
            />
        </form>
    )
}
