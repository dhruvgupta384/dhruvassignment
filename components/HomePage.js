import React from 'react'
import styles from './homepage.module.scss'
import { useRouter } from 'next/router';
function home() {
  const router=useRouter();
  return (
    <>
    <div className={styles.container}>
      <div className={styles.container__contain}>
        <div className={styles.containerWrapper}>
        <div className={styles.selectBox}>
        <div>
         <p style={{marginTop:'0px'}}>
          Where You Want To Go?
         </p>
         <select className={styles.select}>
            <option>
              Chapter Kings Cross
            </option>
         </select>
         
        </div>
        <div>
         <p style={{marginTop:'0px'}}>
          When Would You Like To Go?
         </p>
         <select className={styles.select}>
            <option>
            SEP 24 - AUG 25 (51 WEEKS)
            </option>
         </select>
         
        </div>
        </div>
        <div style={{paddingTop:'20px'}}>
          <button className={styles.btn} onClick={()=>router.push('/book-room')}>
              Book a Room
          </button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default home