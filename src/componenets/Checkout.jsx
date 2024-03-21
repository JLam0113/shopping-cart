import Navigation from './Navigation';
import CheckoutCard from './CheckoutCard';

function Checkout ({ total, items}) {

    return (
        <div>
         <Navigation total={total}/>
          <h1>Checkout</h1>
          <ol className="checkoutContainer">
        {items.map(element => (
          <CheckoutCard 
            key={element.id}
            title={element.title}
            price={element.price}
            quantity={element.quantity}
            image={element.image} />
        ))}
      </ol>
        </div>
      );
};

export default Checkout;
