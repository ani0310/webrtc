import React,{useState} from 'react'
import StepPhoneEmail from '../steps/stepphoneemail/StepPhoneEmail'
import StepOtp from '../steps/stepotp/StepOtp';
const steps={
    1:StepPhoneEmail,
    2:StepOtp,
   
}
const Login = () => {
    const [step,setstep]=useState(1);
    const Step=steps[step];

    const onNext=()=>{
        console.log("jj")
        setstep(step+1)
    }
  return (
    <div>
        <Step onNext={onNext}/>
    </div>
  )
}

export default Login