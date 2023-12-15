import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthActions.js";

const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
    };
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading);
    const [data, setData] = useState(initialState);
    const [confirmPass, setConfirmPass] = useState(true);

    // Reset Form
    const resetForm = () => {
        setData(initialState);
        setConfirmPass(true);
    };

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Form Submission
    const handleSubmit = (e) => {
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpass
                ? dispatch(signUp(data))
                : setConfirmPass(false);
        } else {
            dispatch(logIn(data));
        }
    };

    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>PostX</h1>
                    <h6>Welcome Folks!!</h6>
                    <h6>Explore the ideas throughout the world..</h6>
                </div>
            </div>

            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign up" : "Login"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                value={data.firstname}
                                onChange={handleChange}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                value={data.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            required
                            type="text"
                            placeholder="Username"
                            className="infoInput"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="password"
                            className="infoInput"
                            placeholder="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        {isSignUp && (
                            <input
                                required
                                type="password"
                                className="infoInput"
                                name="confirmpass"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                        )}
                    </div>

                    <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}
                    >
                        *Confirm password is not same
                    </span>

                    <div>
                        <span style={{
                            fontSize: '12px',
                            cursor: "pointer",
                            textDecoration: "underline",
                        }} onClick={() => {
                            resetForm();
                            setIsSignUp((prev) => !prev);
                        }}>
                            {isSignUp
                                ? "Already have an account Login!"
                                : "Don't have an account Sign up"}</span>
                    </div>
                    <button className="button infoButton" type="submit" disabled={loading}>
                        {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;