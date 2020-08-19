import React, {useState} from 'react'
import {ShowExpense} from './ShowExpense'

export const AddTransaction = () => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);

  const [AllTransctions , setTransctions]= useState()

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      date:date,
      amount: amount
    }

    //AllTransctions.push(newTransaction)
    setTransctions(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction on new Team and reply</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Date </label>
          <input type="Date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter your Date..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount 
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add new transaction</button>
      </form>
      {AllTransctions && <ShowExpense expense={AllTransctions}/>}
      
    </>
  )
}
