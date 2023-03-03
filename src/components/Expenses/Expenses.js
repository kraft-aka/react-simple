import React, {useState} from 'react'
import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseInput/ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses(props) {

  const [year, setYear] = useState('2018')
  const expenseFilterHandler = (selectedYear) => {
    setYear(selectedYear)
  }
  //console.log(props)
  return (
    <div>
    <Card className='expenses'>
      <ExpenseFilter selected = {year} onExpenseFilter={expenseFilterHandler} />
      <ExpenseItem
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
    />
    <ExpenseItem
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
    />
    <ExpenseItem
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
    />
    <ExpenseItem
      title={props.expenses[3].title}
      amount={props.expenses[3].amount}
      date={props.expenses[3].date}
    />
   </Card>
   </div>
 )
}
