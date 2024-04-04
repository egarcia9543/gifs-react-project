import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //Se trae el estado actual o anterior del array y se inserta el valor
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory 
                onNewCategory = { (event) => onAddCategory(event) }    
            />

            <ol>
                {categories.map((category) => {
                    return <li key={category}>{ category }</li>
                })}
            </ol>
        </>
    )
}
