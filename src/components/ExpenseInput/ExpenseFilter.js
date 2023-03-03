import React, {useState} from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {

  const [year, setYear] = useState('2018')

  const yearFilterHandler = (e) => {
    setYear(e.target.value);
    props.onExpenseFilter(year)
  }
  return 
    <form className='expenses-filter' onChange={yearFilterHandler}>
      <label for="filter-expenses"> Filter by year</label>
      <select id="filter" name= "expenses-years">
        <option value={year}>2018</option>
        <option value={year}>2019</option>
        <option value={year}>2020</option>
        <option value={year}>2021</option>
        <option value={year}>2022</option>
      </select>
    </form>


  
}
