export default function Card({
  title,
  image,
  description,
  price,
  children,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-3">
          {description}
        </p>

        {price && (
          <p className="font-bold text-green-600 text-lg mb-2">
            ₹{price}
          </p>
        )}

        {children}
      </div>
    </div>
  );
}