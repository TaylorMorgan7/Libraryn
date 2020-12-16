import React from 'react';
import axios from 'axios';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const options = {
      method: 'GET',
      url: 'http://localhost:8080/api/',
      data: { username, password },
    };
    console.log(options);
    axios
      .request(options)
      .then(function (response) {
        setBookInfo(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div className="Login component">
      <h1>Managing your library is just a few clicks away!</h1>
      <form onSubmit={handleSubmit}>
        <p>Login to your account</p>
        <label forhtml="username">Username</label>
        <input name="username" />
        <label forhtml="username">Password</label>
        <input name="password" type="password" />
        <input type="submit" value="Log In" />
        <h4>
          Don't have an account? <br />
          Click below!
        </h4>
      </form>
    </div>
  );
}

export default Login;
