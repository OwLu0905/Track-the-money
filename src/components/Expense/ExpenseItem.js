import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(prop) {
  const [title, setTitle] = useState(prop.item.title);

  // 一開始會evaluate所有comepnents, 而useState只會update該特定的instance and therefore for  being re-evaluated
  // reload the page, console would show four times "Expen..." ,
  // when click the buttons, console will only show once. Other instance are not effected.

  // state is sperated on a per component
  // console.log("ExpenseItem evaluated by React")

  const clickHandle = () => {
    setTitle("hahaha");
    // 還是會顯示上一時刻的title, 因為此function還沒有結束，結束後會重新re-evaluate此頁面，所以會更新該component
    // console.log(title)
  };
  // console.log(title)
  return (
    <>
      <li className="expense-item">
        <ExpenseDate prop={prop.item} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${prop.item.amount}</div>
          <button onClick={clickHandle}>Click button!!</button>
        </div>
      </li>
    </>
  );
}

export default ExpenseItem;
