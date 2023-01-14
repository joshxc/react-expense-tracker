import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
    // focus description input
    e.target[0].focus();
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
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
