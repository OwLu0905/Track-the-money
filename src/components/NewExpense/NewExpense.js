import React, { useState } from "react";
import AddNewExpense from "./AddNewExpense";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = ({ data, onAddExpense }) => {
  const [newItem, setNewItem] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // use the "on-"" like function
    // Child to Parent Component
    const expenseData = {
      id: `e${parseInt(data[data.length - 1].id.slice(1)) + 1}`,
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);

    setNewItem(false);
    console.log(newItem);
  };

  const editCheckHandler = () => {
    setNewItem((prevEvent) => {
      return !prevEvent;
    });
    console.log(newItem);
  };

  return (
    <>
      {/* pass around a pointer at this 'on-' function to the ExpenseForm Component  */}
      {newItem && (
        <div className={classes["new-expense"]}>
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={editCheckHandler}
          />
        </div>
      )}
      {!newItem && <AddNewExpense onAdd={editCheckHandler} />}
    </>
  );
};

export default NewExpense;
