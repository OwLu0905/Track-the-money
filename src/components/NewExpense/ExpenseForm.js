import React, { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  // my method to set state for each input --
  // 3 useState 1 function
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // const titleChangeHandler = (event) => {
  //     switch (event.target.id) {
  //         case 'title':
  //             setEnteredTitle(event.target.value);
  //             break;
  //         case 'amount':
  //             setEnteredAmount(event.target.value);
  //             break;
  //         case 'date':
  //             setEnteredDate(event.target.value);
  //             break;
  //     }
  // }

  // however, we could set multi-state in on useState called --
  // 1 useState 3 function
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // if (event.target.value)

    // this wasn't good way to set up new state although sometimes it would work.
    // Notice: the React schedules state update doesn't perform them instantly
    // if you schedule a lot of state updates at the same time,
    // you could be depdending on an outdated or incorrect state snapshot if you
    // use this approach

    // setUserInput({
    //     ...userInput,
    //     // override the state
    //     enteredTitle: event.target.value,
    // })

    // this is the safer way to ensure that you always operate on the latest state snapshot.
    // You should use this function syntax here whenever your state update depends
    // on the previous state.
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      //  id: `e${parseInt(data[data.length - 1].id.slice(1)) + 1}`,
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    if (Boolean(userInput.enteredTitle)) {
      console.log("save");
      onSaveExpenseData(expenseData);
    }

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler} id="form1">
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="New Item"
            autoFocus
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            placeholder="Add Amount"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes["new-expense__actions"]}>
          <button type="submit" form="form1">
            Add Expense
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
