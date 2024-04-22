import { useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export const GifGrid = ({ category }) => {
    useEffect(() => {
        getGifs(category);

    }, [])


    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
