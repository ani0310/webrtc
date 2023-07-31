import React ,{useState} from 'react'
import style from './Register.module.css';
import StepPhoneEmail from '../steps/stepphoneemail/StepPhoneEmail'
import StepOtp from '../steps/stepotp/StepOtp';
import StepName from '../steps/stepname/StepName';
import StepAvatar from '../steps/stepavatar/StepAvatar';
import StepUsername from '../steps/stepusername/SteapUsername';
const steps={
    1:StepPhoneEmail,
    2:StepOtp,
    3:StepName,
    4:StepAvatar,
    5:StepUsername
}
const Register = () => {
    const [step,setstep]=useState(1);
    const Step=steps[step];

    const onNext=()=>{
        console.log("jj")
        setstep(step+1)
    }

  return (
    <div>
        <Step  onNext={onNext}/>
    </div>
  )
}

export default Register