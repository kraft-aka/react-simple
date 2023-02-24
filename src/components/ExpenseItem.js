import React from 'react'

export default function ExpenseItem() {

  const date = Date.now();
  return (
    <div>
      <h2>{date}</h2>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  )
}
