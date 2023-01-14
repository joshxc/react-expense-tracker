import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction({ tx }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={tx.amount > 0 ? 'plus' : 'minus'}>
      {tx.description}
      <span>
        {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(tx.id)}>
        X
      </button>
    </li>
  );
}

export default Transaction;
