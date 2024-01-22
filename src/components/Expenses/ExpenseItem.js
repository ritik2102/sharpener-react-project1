import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    const handleDeleteExpense = () => {
        // Call the callback function to delete the expense
        props.onDeleteExpense(props.id);
    };
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount}
            location={props.LocationOfExpenditure}
            title={props.title}/>
            <button onClick={()=> {console.log('Clicked!')}}>Change Title</button>
            <button onClick={handleDeleteExpense}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;
