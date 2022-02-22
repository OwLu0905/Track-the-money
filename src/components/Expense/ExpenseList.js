import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = ({results}) => {
    if (results.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expense</h2>
    }

    return (
        <ul className='expense-list'>
            {results.map((item) => (
                <ExpenseItem key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default ExpenseList;
