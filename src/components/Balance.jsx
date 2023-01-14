import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((tx) => tx.amount);
  const total =
    amounts.length === 0 ? 0 : amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
      {/* <h1 className={total > 0 ? 'plus' : 'minus'}>${total}</h1> */}
    </>
  );
}

export default Balance;
