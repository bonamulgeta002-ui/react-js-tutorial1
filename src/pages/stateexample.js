import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(5);

  return (
    <div style={{ padding: "20px" }}>
      <h2>State Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}