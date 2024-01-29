import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    // const handleDeleteExpense = () => {
    //     // Call the callback function to delete the expense
    //     props.onDeleteExpense(props.id);
    // };
    const [amount,setAmount]=useState(props.amount);

    const handleAmount =()=>{
        setAmount('100');
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={amount}
            location={props.LocationOfExpenditure}
            title={props.title}/>
            <button onClick={handleAmount}>Change Expense Value</button>
        </Card>
    );
}

export default ExpenseItem;
