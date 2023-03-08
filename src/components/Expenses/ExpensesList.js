import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  // if it has items in it, it overrides the content
  console.log(props);
  //  if (props.items.length === 0) {
  //    return (<h2 className="expenses-list__fallback">No Expenses found!</h2>);
  //  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id || expense.date}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
