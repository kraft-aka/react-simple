import React from 'react'
import './ExpenseItem.css'
export default function ExpenseItem() {

  const date = Date.now();
  return (
    <div className='expense-item'>
      <h2>{date}</h2>
      <div className='expense-item__description'>
        <h2>Title</h2>
        <div className='expense-item__price'>Amount</div>
      </div>
    </div>
  )
}
