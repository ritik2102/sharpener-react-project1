import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses() {
    const expenses = [
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
    ];

    return (
        <Card className='expenses'>
            <h2>Let's get started!</h2>

            <ExpenseItem title={expenses[0].title}
                date={expenses[0].date}
                amount={expenses[0].amount}
                LocationOfExpenditure={expenses[0].LocationOfExpenditure}
            />

            <ExpenseItem title={expenses[1].title}
                date={expenses[1].date}
                amount={expenses[1].amount}
                LocationOfExpenditure={expenses[1].LocationOfExpenditure}
            />

            <ExpenseItem title={expenses[2].title}
                date={expenses[2].date}
                amount={expenses[2].amount}
                LocationOfExpenditure={expenses[2].LocationOfExpenditure}
            />
            <ExpenseItem title={expenses[3].title}
                date={expenses[3].date}
                amount={expenses[3].amount}
                LocationOfExpenditure={expenses[3].LocationOfExpenditure}
            />

        </Card>
    );
}

export default Expenses;