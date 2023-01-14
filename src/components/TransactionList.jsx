function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="plus">
          Pay <span>+$500</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="minus">
          Groceries <span>-$140</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="minus">
          Rent <span>-$260</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
