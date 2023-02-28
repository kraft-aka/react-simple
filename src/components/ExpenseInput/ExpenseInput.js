import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseInput.css";

export default function ExpenseInput() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}
