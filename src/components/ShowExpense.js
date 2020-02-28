import React , {useEffect,useState} from 'react'



export const ShowExpense = ({expense}) => {
 
  const [data,setData]= useState([])

  function deleteTransaction(id){
  
    setData(data.filter(exp => exp.id !== id))
  }
  useEffect(()=>{
    setData(data=>[...data,expense]);
    console.log(data,"data")
  },[expense])
  return (
    <>
    
    <h3>expenses</h3>
    <ul className="list">
      {data.map(item=>{
       return (  <li key={item.id} className='plus'>Date : {item.date}   Ammount : {item.amount} <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button></li>)
      })}
 
    </ul>
  </>
  )
}
