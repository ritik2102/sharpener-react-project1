import NewExpenses from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState([
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        LocationOfExpenditure: 'California',
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
        LocationOfExpenditure: 'New York',
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        LocationOfExpenditure: 'Atlanta',
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
        LocationOfExpenditure: 'Ikea',
    },
]);

  const addExpenseHandler=expense=>{
    console.log('In app.js');
    // Copy the data of expenses into a new array
    const updatedExpenses=[...expenses];
    // Change the format of new expense date
    expense.date=new Date(expense.date);
    // Push new expense inside updated expenses and set updatedExpenses as expenses
    updatedExpenses.push(expense);
    setExpenses(updatedExpenses);
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
