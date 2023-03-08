import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseInput/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2018");
  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </li>
  );
}
