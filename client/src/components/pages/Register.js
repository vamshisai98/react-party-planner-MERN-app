import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const handlChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('password not matching');
    } else {
      console.log({ name, email, password });
    }
  };

  return (
    <div className='register'>
      <h1>Sign Up</h1>
      <form onSubmit={submit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={handlChange}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={handlChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={handlChange}
        />
        <input
          type='password'
          name='password2'
          placeholder='confirm password'
          value={password2}
          onChange={handlChange}
        />
        <input type='submit' value='Sign Up' className='btn' />
        <div className='question'>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
