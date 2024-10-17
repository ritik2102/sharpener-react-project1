import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {

    
    
    const[viewForm,setViewForm]=useState(false);

    const viewFormHandler=()=>{
        setViewForm(true);
    }
    // We are passing this function to the child component
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        setViewForm(false);
        props.onAddExpense(expenseData);
    };
    if(viewForm === false){
        return (
            <div className='new-expense'>
                <button onClick={viewFormHandler}> Add New Expense</button>
            </div>
        );
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;