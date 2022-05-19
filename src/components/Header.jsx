import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import image from '../asset/image1.png'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Header = () => {

  //component level state

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(true);
  //eslint-disable-next-line

  //Error message state

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPassword2, setErrorPassword2] = useState('');
  const [errorText, setErrorText] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  //initialization for the navigation between pages

  const navigate = useNavigate();

  //submit function for the form

  const handleSubmit = (e) =>{
    e.preventDefault();

    validateForm()
    
    //clear all fields
    setEmail('');
    setPassword('');
    setPassword2('');
    setText('');
    setPhone('');
  }

  //validation function for the form

  const validateForm = () =>{

    const space = /^\s|\s$/;
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    //email validation
    if(email === ''){
      setErrorEmail('Please enter a valid email');
      setTimeout(()=>{
        setErrorEmail('');
      }, 2000);
      toast.error('Invalid email');
    }

    //password validation
    if(password === '' && password2 === ''){
      setErrorPassword('Password must not be empty');
      setErrorPassword2('Password must not be empty');
      setTimeout(()=>{
        setErrorPassword('')
        setErrorPassword2('')
      }, 2000);
      toast.error('Password field must not be empty')
    } else if(password.length < 10 && space.test(password)){
      setErrorPassword('Password must be atleast 10 characters');
      setErrorPassword2('Password must be atleast 10 characters');
      setTimeout(()=>{
        setErrorPassword('');
        setErrorPassword2('');
      }, 2000);
      toast.error('Password must be atleast 10 characters');
    } else if(password.length > 12 && space.test(password)){
      setErrorPassword('Password must not exceed 12 characters');
      setErrorPassword2('Password must not exceed 12 characters');
      setTimeout(()=>{
        setErrorPassword('')
        setErrorPassword2('')
      }, 2000);
      toast.error('Password must not exceed 12 characters')
    } else if(password !== password2){
      setErrorPassword('Password does not match');
      setErrorPassword2('Password does not match');
      setTimeout(()=>{
        setErrorPassword('');
        setErrorPassword2('');
      }, 2000);
      toast.error('Password does not match');
    }

    //Name validation
    if(text === ''){
      setErrorText('Please enter a valid name');
      setTimeout(()=>{
        setErrorText('');
      }, 2000);
      toast.error('Name field must not be empty');
    } else if(text.length <= 4 || space.test(text)){
      setErrorText('Please enter a valid name');
      setTimeout(()=>{
        setErrorText('');
      }, 2000);
      toast.error('Name field must not be empty');
    }

    //Phone validation
    if(!regex.test(phone)){
      setErrorPhone('Phone number is invalid');
      setTimeout(()=>{
        setErrorPhone('');
      }, 2000);
    }
    else{
      navigate('/barChart');
    }
  }
  
  return (
    <div className='header'>
      <div className="header__text">
        <div className='header__text--bg'>
          <img src={image} alt="bg" className='header__text--img'/>
        </div>
        <div className="header__text--align">
          <h2 className='font'>Choose a date range</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit enim saepe asperiores commodi, harum sequi vel recusandae itaque.
          </span>
        </div>
      </div>

      <div className="header__form">
        <form action="#" onSubmit={handleSubmit}>
          <div className="form">
            <h2 className='form__text'>Create an account</h2>
            <div className="form__group">
              <label htmlFor="email">Your email address</label>
              <input 
                type="email" 
                id='email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                className='form__group--input'
              />
              <span className='error'>{errorEmail}</span>
            </div>

            <div className="form__group">
              <label htmlFor="password">Your password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className='form__group--input'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <span className='error'>{errorPassword}</span>
            </div>

            <div className="form__group">
              <label htmlFor="password-2">Confirm your password</label>
              <input 
                type="password" 
                name="password" 
                id="password-2" 
                className='form__group--input' 
                value={password2}
                onChange={(e)=>setPassword2(e.target.value)}
              />
              <span className='error'>{errorPassword2}</span>
            </div>

            <div className="form__group">
              <label htmlFor="name">Your full name</label>
              <input 
                type="text" 
                id="name" 
                className='form__group--input'
                value={text}
                onChange={(e)=>setText(e.target.value)}
              />
              <span className='error'>{errorText}</span>
            </div>

            <div className="form__group">
              <label htmlFor="phone">Your phone number</label>
              <input 
                type="text" 
                id="phone" 
                className='form__group--input'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
              <span className='error'>{errorPhone}</span>
            </div>

            <div className="form__group--check">
              <input 
                type="checkbox" 
                name="password" 
                id="box"
                value={checked}
                onChange={(e)=>setChecked(checked)}
                checked={checked}
              />
              <label htmlFor="box">I read and agree Terms and Condition</label>
            </div>

            <input 
              type="submit" 
              value="Create account"  
              className='form__group--btn btn'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header