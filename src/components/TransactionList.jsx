import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const { transactions, deleteAll } = useContext(GlobalContext);

  return (
    <>
      <h3>
        History <button onClick={deleteAll}>Delete all</button>
      </h3>
      <ul className="list">
        {transactions.length === 0
          ? 'No Transactions'
          : transactions.map((tx) => <Transaction key={tx.id} tx={tx} />)}

        {/* <li className="plus">
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
        </li> */}
      </ul>
    </>
  );
}

export default TransactionList;
