import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/loginForm/logo.svg';
import './registerform.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isEmailInputActive, setIsEmailInputActive] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
  const [isRepeatedPasswordInputActive, setIsRepeatedPasswordInputActive] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const onEmailChange = (e) => setEmail(e.target.value);

  const onPasswordChange = (e) => setPassword(e.target.value);

  const onRepeatedPasswordChange = (e) => setRepeatedPassword(e.target.value);

  const onEmailFocus = () => setIsEmailInputActive(true);

  const onPasswordFocus = () => setIsPasswordInputActive(true);

  const onRepeatedPasswordFocus = () => setIsRepeatedPasswordInputActive(true);

  const onEmailBlur = () => setIsEmailInputActive(false);

  const onPasswordBlur = () => setIsPasswordInputActive(false);

  const onRepeatedPasswordBlur = () => setIsRepeatedPasswordInputActive(false);

  useEffect(() => {
    if (email.length || password.length || repeatedPassword.length) {
      setIsBtnActive(true);
    }
    if (!email.length && !password.length && !repeatedPassword.length) {
      setIsBtnActive(false);
    }
  }, [email, password, repeatedPassword])




  return (
    <form>
      <div className="image"><img className='register-image' src={logo} alt="logo" /></div>
      <div className="inputs">
        <div className="input-wrapper">
          <input
            className={email.length ? 'input-active input-register' : 'input-register'}
            type="email"
            placeholder="Адрес электронной почты"
            value={email}
            onChange={onEmailChange}
            onFocus={onEmailFocus}
            onBlur={onEmailBlur}
          />
          <span 
            className={isEmailInputActive && email.length ? 'cross-icon' : ''} 
            onClick={() => setEmail('')}
            onMouseDown={(e) => e.preventDefault()}
          />
        </div>
        <div className="input-wrapper">
          <input 
            className={password.length ? 'input-active input-register' : 'input-register'}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={onPasswordChange}
            onFocus={onPasswordFocus}
            onBlur={onPasswordBlur}
          />
          <span 
            className={isPasswordInputActive && password.length ? 'cross-icon' : ''} 
            onClick={() => setPassword('')}
            onMouseDown={(e) => e.preventDefault()}  
          />
        </div>
        <div className="input-wrapper">
          <input 
            className={repeatedPassword.length ? 'input-active input-register' : 'input-register'}
            type="password"
            placeholder="Повторите пароль"
            value={repeatedPassword}
            onChange={onRepeatedPasswordChange}
            onFocus={onRepeatedPasswordFocus}
            onBlur={onRepeatedPasswordBlur}
          />
          <span 
            className={isRepeatedPasswordInputActive && repeatedPassword.length ? 'cross-icon' : ''} 
            onClick={() => setRepeatedPassword('')}
            onMouseDown={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className="button-wrapper">
        <button className={isBtnActive ? 'btn-active btn-register' : 'btn-register'}>Регистрация</button>
      </div>
      <footer>
        <p className='register-text'>Есть логин для входа? <Link to="/login">Войти</Link></p>
      </footer>
    </form>
  );
};

export default RegisterForm;