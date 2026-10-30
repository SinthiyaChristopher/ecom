import {Link}
from "react-router-dom";

import {useCart}
from "../context/CartContext";

export default function ProductCard({
product
}){

const {addToCart}=useCart();

return(

<div className="shadow p-4 rounded bg-white">

<img
src={product.image}
alt={product.name}
className="h-52 w-full object-cover"
/>

<h2 className="font-bold mt-2">
{product.name}
</h2>

<p>₹ {product.price}</p>

<p>
⭐ {product.rating}
</p>

<div className="flex gap-2 mt-3">

<button
onClick={()=>addToCart(product)}
className="bg-green-500 text-white px-3 py-1 rounded"
>
Add Cart
</button>

<Link
to={`/product/${product.id}`}
className="bg-blue-500 text-white px-3 py-1 rounded"
>
View
</Link>

</div>

</div>
);
}