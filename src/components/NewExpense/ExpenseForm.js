import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {

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
        const userInput={
            "title":enteredTitle,
            "amount":enteredAmount,
            "date":enteredDate,
        }
        console.log(userInput);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleHandler} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateHandler} type='date' min='2019-01-01' max='2022-12-31' />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;