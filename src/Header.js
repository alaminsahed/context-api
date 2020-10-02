import React from 'react';
import { useContext } from 'react';
import {CategoryContext} from './App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
           <h1>I am header:{category}</h1>
           <button onClick={()=>setCategory(category+1)}>Set</button> 
        </div>
    );
};

export default Header;