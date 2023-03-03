import React from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {

  const yearFilterHandler = (e) => {
    props.onExpenseFilter(e.target.value)
  }

  return 
    <div className='expenses-filter' >
      <label for="filter-expenses"> Filter by year</label>
      <select value={props.selected} id="filter" name="expenses-years" onChange={yearFilterHandler}>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
    </div>
}
