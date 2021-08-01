import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [succMsg, setSuccMsg] = useState("");

  const emailChangeHandler = (e) => {
    setSuccMsg("");
    setEmailError("");
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setSuccMsg("");
    setPasswordError("");
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "") {
      const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (emailRegex.test(email)) {
        // setEmailError("");
        if (email === "admin@demo.com") {
          // setEmailError("");
          if (password === "demo") {
            setSuccMsg("you are successfully logged in!!");
          } else {
            setEmailError("Password doesnot match");
          }
        } else {
          setEmailError("email doesnot match");
        }
      } else {
        setEmailError("Invalid Email");
      }
    } else {
      setEmailError("Email Required");
    }
    if (password !== "") {
    } else {
      setPasswordError("Password Required");
    }

    const formData = {
      loggedemail: email,
      loggedpassword: password,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {succMsg && <div className="success-msg">{succMsg}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
          <br></br>
          {emailError && <div className="error-msg">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordChangeHandler}
            value={password}
          />
          <br></br>

          {passwordError && <div className="error-msg">{passwordError}</div>}
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
