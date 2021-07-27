import React from 'react';
import './RegisterForm.css';

function RegisterForm(){
    return(
        <form>
            
            <div className="form-inner">
                <h2>Register Here!</h2>
                <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" id="firstname" placeholder="enter your first Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" id="lastname" placeholder="enter your last Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Mobile:</label>
                    <input type="number" name="number" id="number" placeholder="Phone number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">UserName:</label>
                    <input type="username" name="username" id="username" placeholder=" username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" name="dob" id="dob" min="1997-01-01" max="2021-12-31"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pin code:</label>
                    <input type="number"  name="pincode" id="pincode" placeholder="Your pincode"/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Gender:</label>
                    <input type="radio" name="gender" id="gender"/>
                    &nbsp;&nbsp;
                    <span id="male">Male</span>
                    <input type="radio" name="gender" id="gender"/>
                    &nbsp;&nbsp;
                    <span id="male">Female</span> 
                    
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea name="address" id="address" placeholder="Your address"/>
                </div>
               <input type="submit" value="SUBMIT" name="submit" id="submit"></input>
            </div>

        </form>
    )
}

export default RegisterForm;