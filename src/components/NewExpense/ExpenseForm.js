import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const amountHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateHandler = (e) => {
        setDate(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            "title":enteredTitle,
            "amount":enteredAmount,
            "date":enteredDate,
        }
        // We are using the function from parent component using props
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleHandler} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateHandler} type='date' min='2019-01-01' max='2022-12-31' />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;