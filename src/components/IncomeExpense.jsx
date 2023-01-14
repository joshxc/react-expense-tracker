import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((tx) => tx.amount);
  let expenses, income;

  if (amounts.length === 0) {
    expenses = 0;
    income = 0;
  } else {
    expenses = amounts
      .filter((tx) => tx < 0)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2);

    income = amounts
      .filter((tx) => tx > 0)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2);
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${Math.abs(expenses)}</p>
      </div>
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
