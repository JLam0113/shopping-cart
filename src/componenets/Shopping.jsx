import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import Card from './Card'
import './Shopping.css'

function Shopping({total, onClick}){

  const [items, setItems] = useState([])
//  const [total, setTotal] = useState(parseInt(history.state.total) > 0 ? parseInt(history.state.total) : 0)

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

  return (
    <div>
      <Navigation total={total}/>
      <h1>Shopping page!</h1>
      <ol className="cardsContainer">
        {items.map(element => (
          <Card id={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
            key={element.id}
            image={element.image}
            onClick={onClick} />
        ))}
      </ol>
    </div>
  );
};

export default Shopping;
