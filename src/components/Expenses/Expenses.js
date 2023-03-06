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
    (expense) => expense.date.getFullYear === parseInt(filteredYear)
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
         {props.expenses.filter(expense => expense.date.getFullYear()===parseInt(filteredYear))
          
          .map((expense) => (
          <ExpenseItem
            key={expense.id || expense.date}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {filteredExpenses}
      </Card>
    </div>
  );
}
