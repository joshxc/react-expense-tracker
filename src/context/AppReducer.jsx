export default function (state, action) {
  switch (action.type) {
    // refer to GlobalState.jsx to action methods
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((tx) => tx.id !== action.payload),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'DELETE_ALL':
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  }
}
