import React from 'react'
import './search.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const Search=() => {
  const history = useHistory();
  const [userName, setUserName] = useState('');

  const handleOnChange = (e) => {
    let value = e.target.value;
    setUserName(value);
  }

  const submitOnClick = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${userName}`)
    .then(response => {
    history.push("/profile", userName);
    })
  }
  
  return (
    <>
      <div className="main__container">
        <section className="title__sub__container">
          <h1>Github Profile</h1>
          <p>Generate your Github Profile</p>
        </section>
          
        <form className="form__sub__container">
          <label className ="label__form">Github Username</label>
          <div className="input__form">
            <input 
              type="text" 
              className="text__form"
              value = {userName}
              onChange = {handleOnChange} 
            />
            <button type="submit" className="button__form" onClick={submitOnClick}>Generate</button>
          </div>
        </form>
      </div>
    </>   
  )
}

export default Search