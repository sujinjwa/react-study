import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
