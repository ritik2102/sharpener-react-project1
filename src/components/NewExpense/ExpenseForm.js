import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {

    const [enteredTitle,updateTitle]= useState();
    const [enteredAmount, updateAmount]=useState();
    const [enteredDate, updateDate]=useState();
    

    const titleHandler=(e)=>{
        e.preventDefault();
        const inputValue=e.target.value;
        updateTitle(inputValue);
        console.log(enteredTitle);
    }
    const amountHandler=(e)=>{
        e.preventDefault();
        const inputValue=e.target.value;
        updateAmount(inputValue);
    }
    const dateHandler=(e)=>{
        e.preventDefault();
        const inputValue=e.target.value;
        updateDate(inputValue);
    }

    return (
        <form>
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