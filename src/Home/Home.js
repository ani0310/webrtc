import React from 'react'
import style from './Home.module.css';
import { Link,useNavigate } from 'react-router-dom';
import Card from '../components/shared/card/Card';
import  Button  from '../components/shared/button/Button';
const Home = () => {
  const navigate=useNavigate()
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
};

const startRegister=()=>{
  navigate("/authenticate")
  //console.log('button clicked');
}
  return (
   <div className={style.cardWrapper}>
    <Card title='Welcome To Codershome!' logo='logo'>

    <p className={style.text}>
      We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches,
       we’re adding people gradually to make sure nothing breaks :
      </p>
      <Button onClick={startRegister} text='Get your username!'/>
      <div className={style.signinWrapper}>
        <span className={style.hasInvite}>
          Have an invite text?
        </span>
        <Link to='/login' style={signInLinkStyle}>
        Sign in
        </Link>
      </div>
    </Card>
  
   </div>
 
  )
}

export default Home