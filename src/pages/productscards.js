export default function Productscards() {
  const products = [
    {
      name: "Smart Phone",
      price: 30000,
      description: "High performance phone",
    },
    {
      name: "Laptop",
      price: 80000,
      description: "Best for development",
    },
    {
      name: "Headphones",
      price: 5000,
      description: "Good sound quality",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.map((p, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <p>Description: {p.description}</p>
        </div>
      ))}
    </div>
  );
}