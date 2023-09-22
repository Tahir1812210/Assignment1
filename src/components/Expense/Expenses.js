import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseSelect = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={expenseSelect}
        />
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
