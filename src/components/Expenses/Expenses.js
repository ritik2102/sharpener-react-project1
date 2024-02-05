// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filteredExpenses, setFilteredExpenses] = useState(props.items);
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)

        const filtered = props.items.filter(component => {
            return Number(component.date.getFullYear()) === Number(selectedYear);
        });
        setFilteredExpenses(filtered);
    }

    

    return (
        <Card className='expenses'>
            <h2>Let's get started!</h2>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses}/>

        </Card>
    );
}

export default Expenses;