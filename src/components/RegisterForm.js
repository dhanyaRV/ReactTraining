import React, { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [firstname, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastname, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [username, setUserName] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [pincode, setPinCode] = useState("");
  const [pincodeError, setPinCodeError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [succMsg, setSuccMsg] = useState("");

  const fisrtnameChangeHandler = (e) => {
    setSuccMsg("");
    setFirstNameError("");
    setFirstName(e.target.value);
  };

  const lastnameChangeHandler = (e) => {
    setSuccMsg("");
    setLastNameError("");
    setLastName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setSuccMsg("");
    setEmailError("");
    setEmail(e.target.value);
  };
  const mobileChangeHandler = (e) => {
    setSuccMsg("");
    setMobileError("");
    setMobile(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setSuccMsg("");
    setUserNameError("");
    setUserName(e.target.value);
  };
  const dobChangeHandler = (e) => {
    setSuccMsg("");
    setDobError("");
    setDob(e.target.value);
  };
  const pincodeChangeHandler = (e) => {
    setSuccMsg("");
    setPinCodeError("");
    setPinCode(e.target.value);
  };
  const genderChangeHandler = (e) => {
    setSuccMsg("");
    setGenderError("");
    setGender(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setSuccMsg("");
    setAddressError("");
    setAddress(e.target.value);
  };
  const submitTimeHandler = (e) => {
    e.preventDefault();
    if (firstname !== "") {
      if (lastname !== "") {
        if (email !== "") {
          const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          if (emailRegex.test(email)) {
            if (mobile !== "") {
              if (mobile.trim().length === 10) {
                if (username !== "") {
                  const userRegex = /^[a-zA-Z0-9]+$/;
                  if (userRegex.test(username)) {
                    if (dob !== "") {
                      if (pincode !== "") {
                        if (address !== "") {
                          setSuccMsg("you are successfully logged in!!");
                        } else {
                          setAddressError("address required");
                        }
                      } else {
                        setPinCodeError("pincode required");
                      }
                    } else {
                      setDobError(" DOB required");
                    }
                  } else {
                    setUserNameError("not a valid useranme");
                  }
                } else {
                  setUserNameError(" username required");
                }
              } else {
                setMobileError("Invalid Mobile Number");
              }
            } else {
              setMobileError("Mobile number required");
            }
          } else {
            setEmailError("not a valid email id");
          }
        } else {
          setLastNameError("email required");
        }
      } else {
        setLastNameError("lastname required");
      }
    } else {
      setFirstNameError("firstname required");
    }
    const registerData = {
      fname: firstname,
      lname: lastname,
      emailId: email,
      mobilenum: mobile,
      userName: username,
      DateOfBirth: dob,
      pin: pincode,
      Gender: gender,
      Address: address,
    };
    console.log(registerData);
  };

  return (
    <form onSubmit={submitTimeHandler}>
      <div className="form-inner">
        <h2>Register Here!</h2>
        {succMsg && <div className="success-msg">{succMsg}</div>}
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="enter your first Name"
            value={firstname}
            onChange={fisrtnameChangeHandler}
          />
          <br></br>
          {firstNameError && <div className="error-msg">{firstNameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="enter your last Name"
            value={lastname}
            onChange={lastnameChangeHandler}
          />
          <br></br>
          {lastNameError && <div className="error-msg">{lastNameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={emailChangeHandler}
          />
          <br></br>
          {emailError && <div className="error-msg">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="number">Mobile:</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Phone number"
            value={mobile}
            onChange={mobileChangeHandler}
          />
          <br></br>
          {mobileError && <div className="error-msg">{mobileError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="username">UserName:</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder=" username"
            value={username}
            onChange={usernameChangeHandler}
          />
          <br></br>
          {usernameError && <div className="error-msg">{usernameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            min="1997-01-01"
            max="2021-12-31"
            value={dob}
            onChange={dobChangeHandler}
          />
          <br></br>
          {dobError && <div className="error-msg">{dobError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin code:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            placeholder="Your pincode"
            value={pincode}
            onChange={pincodeChangeHandler}
          />
          <br></br>
          {pincodeError && <div className="error-msg">{pincodeError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="number">Gender:</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onChange={genderChangeHandler}
          />
          &nbsp;&nbsp;
          <span id="male">Male</span>
          <input
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onChange={genderChangeHandler}
          />
          &nbsp;&nbsp;
          <span id="male">Female</span>
          <br></br>
          {genderError && <div className="error-msg">{genderError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            placeholder="Your address"
            value={address}
            onChange={addressChangeHandler}
          />
          <br></br>
          {addressError && <div className="error-msg">{addressError}</div>}
        </div>
        <input type="submit" value="SUBMIT" name="submit" id="submit"></input>
      </div>
    </form>
  );
}

export default RegisterForm;
