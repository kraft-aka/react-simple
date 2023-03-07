import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseInput/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2018");
  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // Holds the text if length of filteredExpenses is empty
  let expensesContent = <p>No expenses found</p>;

  // if it has items in it, it overrides the content
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id || expense.date}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
