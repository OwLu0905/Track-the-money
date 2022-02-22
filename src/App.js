// import './App.css';
import ItemsList from "./components/Expense/ItemsList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [allExpense, setAllExpense] = useState(expenses);
  // const [filterData, setFilterData] = useState(expenses);
  // const [filterData, setFilterData] = useState([]);

  const addExpenseHandler = (expense) => {
    // this is not good because this variable is depending on the previous state.
    // const totalExpenseData = [
    //   ...allExpense,
    //   expense
    // ]

    // set state
    // setAllExpense(totalExpenseData);

    // this is good!
    setAllExpense((prevExpense) => {
      return [...prevExpense, expense];
    });
  };

  // const addFilterExpenseHandler = (filterItems) => {
  //     setFilterData(filterItems);
  // }

  return (
    <div className="App">
      <NewExpense data={allExpense} onAddExpense={addExpenseHandler} />

      {/* <ItemsList data={allExpense} filter={filterData} onFiltered={addFilterExpenseHandler}/> */}
      <ItemsList data={allExpense} />
    </div>
  );
}

export default App;
