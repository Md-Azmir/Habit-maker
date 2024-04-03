import React from 'react'
import styles from './Display.module.css'
export default function Display({arr,deleted}) {
  // console.log({arr})
  if(arr.length !==0){
    return (
      <div className={styles.containt}>
        {arr.map((task, index) => (
          
        <tr className={styles.row} key={index}>
          <td className={styles.data}>{task.what}</td>
          <td className={styles.data}>{task.where}</td>
          <td className={styles.data}>{task.why}</td>
          <td className={styles.data}>{task.date}</td>
          <td ><button className={styles.btn} onClick={()=>deleted(index)}>delete</button></td>
        </tr>
          
      ))}
      </div>
    )
  }
  else {
      return (
        <div className={styles.display}>
          <h3>You Have No Tasks</h3>
        </div>
      )
  }
  
}
