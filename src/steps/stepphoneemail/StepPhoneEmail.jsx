import {useState} from 'react'
import React from 'react'
import Phone from './phone/Phone'
import Email from './email/Email'
import styles from './StepPhoneEmail.module.css'

const phoneemailMap={
  phone:Phone,
  email:Email
}

const StepPhoneEmail = ({onNext}) => {
  const [type,setType]=useState('phone');
    const Component=phoneemailMap[type];

    
  return (
    <>
    <div className={styles.cardWrapper}>
      <div>
      <div className={styles.buttonWrapper}>

      <button className={`${styles.tabButton} ${type==='phone'?styles.active:''}`} onClick={()=>setType('phone')}>
        
        <img  src='/images/phone_android.png' alt="phone"/>
      </button>
    <button className={`${styles.tabButton} ${type==='email'?styles.active:''}`} onClick={()=>setType('email')}>
      
    <img  src='/images/Email.png' alt="phone"/>

    </button>
      </div>
      <Component onNext={onNext}/>
      </div>
    </div>
    

       
    </>
  )
}

export default StepPhoneEmail