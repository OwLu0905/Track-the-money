import React from "react";
import "./AddNewExpense.css";
const AddNewExpense = ({ onAdd }) => {
  return (
    <div className="new-expense__addNew">
      <button onClick={onAdd}>Add New Expense</button>
    </div>
  );
};

export default AddNewExpense;
