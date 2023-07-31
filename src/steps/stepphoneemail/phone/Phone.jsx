import React ,{useState} from 'react'
import Card from '../../../components/shared/card/Card'
import Button from '../../../components/shared/button/Button'
import TextInput from '../../../components/shared/textinput/TextInput'
import styles from '../StepPhoneEmail.module.css'
const Phone = () => {
  const [phoneNumber,setPhoneNumber]=useState("");
  
  return (
    <div> 
       <Card title='Welcome To Codershome!' logo='phone'>

<TextInput value={phoneNumber} onChage={(e)=>{setPhoneNumber(e?.target?.value)}}></TextInput>
<div>
<div className={styles.actionButton}>
<Button  text='Next'/>
</div>
 <p className={styles.bottomParagraph}>By entering your number your agreing to terms and conditions</p>
</div>
</Card>


    </div>
  )
}

export default Phone