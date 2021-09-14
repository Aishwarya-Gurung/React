import { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { 
    register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);
  const [userInfo, setUserInfo] = useState();
  
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div className='container'>
      <pre>{ JSON.stringify(userInfo, undefined, 2) }</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>

        <div className='ui form'>
          <div className='field'>
            <label>First Name</label>
            <input type="text" {...register("firstname", { required:"This is required" })} placeholder="firstname"/>
          </div>
          { errors.firstname && <p>{ errors.firstname.message }</p> }

          <div className='field'>
            <label>Last Name</label>
            <input type="text" {...register("lastname", { required:"This is required" })} placeholder="lastname"/>
          </div>
          { errors.lastname && <p>{ errors.lastname.message }</p> }

          <div className='field'>
            <label>Email</label>
            <input type="email" {...register("email", { required:"This is required", pattern:{value:/^\S+@\S+$/i} })} placeholder="email" />
          </div>
          { errors.email && <p>{ errors.email.message }</p> }

          <div className='field'>
            <label>Password</label>
            <input type="password" {...register("password", { required:"This is required", maxLength:{ value:8, message:"max lenght is 8" }, minLength:{ value:4, message:"min lenght is 4" }})} placeholder="password" />
          </div>
          { errors.password && <p>{ errors.password.message }</p> }

          <button className='fluid ui button blue'>Register</button>
       </div>
       
      </form>
    </div>
  );
}

export default App;
