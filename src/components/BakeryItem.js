// TODO: create a component that displays a single bakery item
import { useState } from 'react';

export default function BakeryItem(props) {
    const [count, setCount] = useState(0); 
    const item = props.itm; 
    const index = props.idx; 

    return (
        <div key={index}>
            <img src={item.image} alt=""></ img>
            <button onClick={() => props.addToCart(item)}>Add to cart</button>
            <h2>{item.name} {item.price}</h2>
        </div>
    )
}