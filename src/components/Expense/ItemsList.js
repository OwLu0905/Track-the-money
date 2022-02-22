import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import "./ItemsList.css";

function ItemsList(props) {
  // // props :
  // //      -- data : return the entire expense items
  // //      -- filter : return the specific expense item based on the year

  // const [filteredYear, setFilteredYear] = useState('2020');

  // // Once we select the option, save the selected year and filter prop.data.
  // // After that, set the result state with the onFiltered method.
  // const getYearHandler = (year) => {
  //     setFilteredYear(year);
  //     const results = props.data.filter(item => (
  //         item.date.getFullYear() === Number(year)
  //         ));
  //     props.onFiltered(results);
  //     }

  // ------------------------------------------------------------------
  const [filteredYear, setFilteredYear] = useState("2020");

  // select option will change filteredYear instantly due to setFilteredYear
  const getYearHandler = (year) => {
    setFilteredYear(year);
  };

  // use the filteredYear to filter props.data
  const results = props.data.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectYear={getYearHandler} />

      <ExpensesChart expenses={results} />

      {/* <ul> */}
      <ExpenseList results={results} />

      {/* {props.filter.map((item, index) => (
                    <ExpenseItem key={item.id} item={item} />
                ))} */}
      {/* {results.length === 0 &&
                    <h1>No Expense</h1>
                }

                {results.length > 0 && 
                    results.map((item) => (
                    <ExpenseItem key={item.id} item={item} />
                ))
                } */}

      {/* </ul> */}
    </Card>
  );
}

export default ItemsList;
