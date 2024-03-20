import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import Card from './Card'
import './Shopping.css'

const Shopping = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async (url) => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setItems(items => [...items, {
            id: data.id,
            title: data.title,
            price: data.price,
            category: data.category,
            description: data.description,
            image: data.image
          }])
        })
    }
    getItems('https://fakestoreapi.com/products/1')
    getItems('https://fakestoreapi.com/products/2')
    getItems('https://fakestoreapi.com/products/3')
    getItems('https://fakestoreapi.com/products/4')
    getItems('https://fakestoreapi.com/products/5')
    getItems('https://fakestoreapi.com/products/6')
  }, []);

  function addtoCart(id, quantity){
    console.log(quantity)
  }

  return (
    <div>
      <Navigation/>
      <h1>Shopping page!</h1>
      <ol className="cardsContainer">
        {items.map(element => (
          <Card id={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
            key={element.id}
            image={element.image}
            onClick={addtoCart} />
        ))}
      </ol>
    </div>
  );
};

export default Shopping;
