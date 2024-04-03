import React from 'react'
import styles from './Input.module.css'
import { useState } from 'react'
export default function Input({addHabitData}) {
    // const [what,setWhat]=useState('')
    // const [where,setWhere]=useState('')
    // const [why,setWhy]=useState('')
    const [data,setData]=useState({
        what:"",
        where:"",
        why:"",
        date:""
    })
    function handleChange(e){
        let check=e.target.id;
        // if(check==='what'){
        //     setData({...data,[check]:e.target.value})
        // }
        // else if(check==='where'){
        //     setData({...data,[check]:e.target.value})
        // }
        // else if(check==='why'){
        //     setData({...data,[check]:e.target.value})
        // }
        setData({...data,[check]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        addHabitData(data)
        setData({what:"",
        where:"",
        why:""})
    }
  return (
    <div className={styles.body}>
        <form  onSubmit={handleSubmit}>
        <input type="text" className={styles.what} id="what"  placeholder='what to do' onChange={handleChange} value={data.what}/>
        <input type="text" className={styles.where} id="where" placeholder='where to do' onChange={handleChange} value={data.where}/>
        <input type="text" className={styles.why} id="why"  placeholder='why to do' onChange={handleChange} value={data.why}/>
        <input type="date" className={styles.date} id="date"  onChange={handleChange} value={data.date}/>
        <button className={styles.savebtn}>save</button>
        </form>
    </div>
  )
}
