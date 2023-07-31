import React,{useState} from 'react'
import StepPhoneEmail from '../steps/stepphoneemail/StepPhoneEmail'
import StepOtp from '../steps/stepotp/StepOtp';
const steps={
    1:StepPhoneEmail,
    2:StepOtp,
   
}
const Authentcate = () => {
    const [step,setstep]=useState(2);
    const Step=steps[step];

    const onNext=()=>{
       
        setstep(step+1)
    }
  return (
    <div>
        <Step onNext={onNext}/>
    </div>
  )
}

export default Authentcate