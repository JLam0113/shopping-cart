import { useState } from 'react' 

function Cards({ id, title, price, description, image, onClick }) {

    const [quantity, setQuantity] = useState('')

    const handleButton = () => {
        onClick(id, quantity);
    }

    return <>
        <li className="card" >
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>${price}</h4>
            <img src={image}></img>
            <div>
                <label>Quantity</label>
                <input type="number" min="0" max="3" onChange={e => setQuantity(e.target.value)}></input>
            <button onClick={handleButton}>Add to Cart</button>
            </div>
        </li >
    </>
}

export default Cards