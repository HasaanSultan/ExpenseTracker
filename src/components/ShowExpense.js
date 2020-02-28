import React , {useEffect,useState} from 'react'
export const ShowExpense = ({expense}) => {
 
  const [data,setData]= useState([])

  function SortByDate(){
    const newdata=[...data]
    setData(newdata.sort((a,b)=>{ var c=new Date(a.date); var d= new Date(b.date);return c-d}))
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
    <ul className="list">
      {data.map(item=>{
       return (<li key={item.id} className='plus'>Date : {item.date}   Ammount : {item.amount} <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button></li>)
      })}
 
    </ul>
  </>
  )
}
