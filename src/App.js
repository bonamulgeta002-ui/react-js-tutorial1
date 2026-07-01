import { useState } from "react";

function ExpenseTracker() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };

  const balance = transactions.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className="expense-app">
      <h1>Expense Tracker</h1>

      <h2>Balance: ${balance}</h2>

      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (+ income, - expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addTransaction}>
        Add Transaction
      </button>

      <ul>
        {transactions.map((item) => (
          <li key={item.id}>
            {item.text} (${item.amount})

            <button
              onClick={() => deleteTransaction(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;