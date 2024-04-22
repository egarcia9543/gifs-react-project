import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
            <AddCategory onNewCategory = { (event) => onAddCategory(event) } />

            {categories.map((category) => 
                <GifGrid key = { category } category = { category } />
            )}
        </>
    )
}
