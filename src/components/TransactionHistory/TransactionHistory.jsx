import PropTypes from 'prop-types';
import Transaction from './Transaction';
import css from "./TransactionHistory.module.css";

const TransactionHistory=({items})=>{


return(
    <>
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
items.map(trans =>(

    <Transaction key={trans.id}
    type={trans.type}
    amount={trans.amount}
    currency={trans.currency}
    
    ></Transaction>
))
    }
  </tbody>
</table>
    </>
)
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
export default TransactionHistory