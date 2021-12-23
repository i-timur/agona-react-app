import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthStore } from './../../stores/AuthStore.js';
import logo from '../../assets/loginForm/logo.svg';
import './loginform.css';

const authStore = new AuthStore();


const LoginForm = () => {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isEmailInputActive, setIsEmailInputActive] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
  const [isFormCorrect, setIsFormCorrect] = useState(true);

  const onEmailChange = (e) => setEmail(e.target.value);

  const onPasswordChange = (e) => setPassword(e.target.value);

  const onEmailFocus = () => setIsEmailInputActive(true);

  const onPasswordFocus = () => setIsPasswordInputActive(true);

  const onEmailBlur = () => setIsEmailInputActive(false);

  const onPasswordBlur = () => setIsPasswordInputActive(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!authStore.login(email, password)) {
      setIsFormCorrect(false);
      return;
    }
    history.push("/");
  };

  useEffect(() => {
    if (email.length || password.length) {
      setIsBtnActive(true);
    }
    if (!email.length && !password.length) {
      setIsBtnActive(false);
    }
  }, [email, password]);

  useEffect(() => {
    if (isEmailInputActive || isPasswordInputActive) {
      setIsFormCorrect(true);
    }
  }, [isEmailInputActive, isPasswordInputActive]);

  return (
    <form onSubmit={onSubmit}>
      <div className="image"><img className='login-image' src={logo} alt="logo" /></div>
      <div className={!isFormCorrect ? 'inputs input-wrapper_incorrect' : 'inputs'}>
        <div className="input-wrapper">
          <input 
            className={email.length ? 'input-active input-login' : 'input-login'}
            type="text"
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
            className={password.length ? 'input-active input-login' : 'input-login'}
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
      </div>
      <p className={!isFormCorrect ? 'form-message form-message_visible' : 'form-message'} >Неверные логин или пароль</p>
      <div className="button-wrapper">
        <button className={isBtnActive ? 'btn-active btn-login' : 'btn-login'}>Войти</button>
      </div>
      <footer>
        <p className='login-text'>Еще не зарегистрированы? <Link to="/register">Регистрация</Link></p>
      </footer>
    </form>
  );
};

export default LoginForm;
