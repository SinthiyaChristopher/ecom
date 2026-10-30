import { useEffect, useState } from "react";
 
export default function Orders() {
const [orders, setOrders] = useState([]);
 
useEffect(() => {
const savedOrders =
JSON.parse(localStorage.getItem("orders")) || [];
 
setOrders(savedOrders);
}, []);
 
return (
<div className="container mx-auto p-5">
<h1 className="text-3xl font-bold mb-6">
Order History
</h1>
 
{orders.length === 0 ? (
<p className="text-gray-500">
No Orders Found
</p>
) : (
<div className="space-y-6">
{orders.map((order) => (
<div
key={order.id}
className="bg-white shadow rounded-lg p-5"
>
<div className="flex justify-between mb-4">
<h2 className="font-bold text-lg">
Order #{order.id}
</h2>
 
<span className="text-gray-500">
{order.date}
</span>
</div>
 
<div className="mb-3">
<p>
<strong>Name:</strong>{" "}
{order.customer.name}
</p>
 
<p>
<strong>Email:</strong>{" "}
{order.customer.email}
</p>
</div>
 
<h3 className="font-semibold mb-2">
Products
</h3>
 
{order.items.map((item) => (
<div
key={item.id}
className="flex justify-between border-b py-2"
>
<span>
{item.name} × {item.quantity}
</span>
 
<span>
₹
{item.price * item.quantity}
</span>
</div>
))}
 
<div className="mt-4 text-right">
<h3 className="text-xl font-bold">
Total: ₹{order.total}
</h3>
</div>
</div>
))}
</div>
)}
</div>
);
}