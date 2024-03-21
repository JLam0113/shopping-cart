
function CheckoutCard({ title, price, quantity, image }) {

    return <>
        <li className="checkoutCard" >
            <h3>{title}</h3>
            <img src={image}></img>
            <p>Quantity: {quantity}</p>
            <p>Price: ${quantity * price}</p>
        </li >
    </>
}

export default CheckoutCard