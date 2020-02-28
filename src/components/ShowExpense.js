import React from 'react'


export const ShowExpense = ({expense}) => {
  
  console.log(expense,"edd")
  return (
    <>
    
    <h3>expenses</h3>
    <ul className="list">
  <li key={expense.id}>Date : {expense.date}   Ammount : {expense.amount}</li>
    </ul>
  </>
  )
}
