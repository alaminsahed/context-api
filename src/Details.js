import React from 'react';
import { useContext } from 'react';
import {CategoryContext} from './App';
const Details = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>I am details:{category}</h1>
        </div>
    );
};

export default Details;