import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from 'react';
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    
    const[filteredYear,setFilteredyear] =useState('2020');

    const filterChangeHandler= selectedYear=>{
        setFilteredyear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <h2>Let's get started!</h2>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((item,index) => {
                return <ExpenseItem 
                id={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
                LocationOfExpenditure={item.LocationOfExpenditure}
                />
            })}
            {/* <ExpenseItem 
                id={expenses[0].id}
                title={expenses[0].title}
                date={expenses[0].date}
                amount={expenses[0].amount}
                LocationOfExpenditure={expenses[0].LocationOfExpenditure}
                onDeleteExpense={handleDeleteExpense}
            />

            <ExpenseItem 
                id={expenses[1].id}
                title={expenses[1].title}
                date={expenses[1].date}
                amount={expenses[1].amount}
                LocationOfExpenditure={expenses[1].LocationOfExpenditure}
                onDeleteExpense={handleDeleteExpense}
            />

            <ExpenseItem 
                id={expenses[2].id}
                title={expenses[2].title}
                date={expenses[2].date}
                amount={expenses[2].amount}
                LocationOfExpenditure={expenses[2].LocationOfExpenditure}
                onDeleteExpense={handleDeleteExpense}
            />
            <ExpenseItem 
                id={expenses[3].id}
                title={expenses[3].title}
                date={expenses[3].date}
                amount={expenses[3].amount}
                LocationOfExpenditure={expenses[3].LocationOfExpenditure}
                onDeleteExpense={handleDeleteExpense}
            /> */}

        </Card>
    );
}

export default Expenses;