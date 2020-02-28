import React , {useEffect,useState} from 'react'
export const ShowExpense = ({expense}) => {
 
  const [data,setData]= useState([])
  const [sort,setSort]= useState(false)
  const [amountSort,setAmount]= useState(false)
  const [filterList,Setfilter]= useState([])

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

  const search=(e)=>{
    if (e.target.value !== "") {
     const newdata = data.filter(item => {
       debugger
        const lc = item.date.toLowerCase() + item.amount.toLowerCase() ;
        const filter = e.target.value.toLowerCase();
               return lc.includes(filter);
      });
      debugger
     Setfilter(newdata) 
    }
    else
    {
      Setfilter([])
    }
  }

  return (
    <>
    
    <h3>expenses</h3>
    <input type='text' name='search' placeholder="Search" onChange={(e)=>search(e)} />
    <button onClick={()=>SortByDate()}>Sort By Dates</button>
    <button onClick={()=>SortByAmount()}>Sort By Amount</button>
    
    
    {filterList.length !==0 &&
    <ul className="list">
      {filterList.map(item=>{
        return<li key={item.id} className='plus'>Date : {item.date}   Ammount : {item.amount} <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button></li>      })
        }
      </ul>
      }
    <hr />
    <ul className="list">
      {data.map(item=>{
       return (<li key={item.id} className='plus'>Date : {item.date}   Ammount : {item.amount} <button onClick={() => deleteTransaction(item.id)} className="delete-btn">x</button></li>)
      })}
 
    </ul>
  </>
  )
}
