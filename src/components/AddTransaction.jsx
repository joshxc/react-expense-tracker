import { useState } from 'react';

function AddTransaction() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(null);

  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="enter transaction description"
            autoFocus
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (<span className="minus">-expense </span>
            <span>, </span>
            <span className="plus">+income</span>)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="enter transaction amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
