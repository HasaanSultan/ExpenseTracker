import React , {useEffect,useState} from 'react'
export const ShowExpense = ({expense}) => {
 
  const [data,setData]= useState([])
  const [sort,setSort]= useState(false)
  const [amountSort,setAmount]= useState(false)

  function SortByDate(){
    const newdata=[...data]
    if(!sort){
    setData(newdata.sort((a,b)=>{ var c=new Date(a.date); var d= new Date(b.date);return c-d}))
    setSort(true)
    }else {
    setData(newdata.sort((a,b)=>{ var c=new Date(a.date); var d= new Date(b.date);return d-c}))
    setSort(false)  
    }
   }

   function SortByAmount(){
    const newdata=[...data]
    if(!amountSort){
    setData(newdata.sort((a,b)=>{ return a.amount-b.amount}))
    setAmount(true)
    }else {
    setData(newdata.sort((a,b)=>{return b.amount-a.amount}))
    setAmount(false)
    }
   }

  function deleteTransaction(id){
    setData(data.filter(exp => exp.id !== id))
  }

  useEffect(()=>{
    setData(data=>[...data,expense]);
  },[expense])


  return (
    <>
    
    <h3>expenses</h3>
    <button onClick={()=>SortByDate()}>Sort By Dates</button>
    <button onClick={()=>SortByAmount()}>Sort By Amount</button>
    <ul className="list">
      {data.map(item=>{
       return (<li key={item.id} className='plus'>Date : {item.date}   Ammount : {item.amount} <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button></li>)
      })}
 
    </ul>
  </>
  )
}
