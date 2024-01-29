import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from 'react';
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    
    const [filteredComponents,setFilteredComponents]=useState(props.items);
    const[filteredYear,setFilteredyear] =useState('2020');

    const filterChangeHandler= selectedYear=>{
        setFilteredyear(selectedYear)
    
        const filtered=props.items.filter(component=>{
            return Number(component.date.getFullYear())===Number(selectedYear);
        });
        setFilteredComponents(filtered);
    }

    return (
        <Card className='expenses'>
            <h2>Let's get started!</h2>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredComponents.map((item,index) => {
                return <ExpenseItem 
                id={item.id}
                title={item.title}
                date={item.date}
                amount={item.amount}
                LocationOfExpenditure={item.LocationOfExpenditure}
                />
            })}

        </Card>
    );
}

export default Expenses;