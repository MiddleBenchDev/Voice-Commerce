import React, { Fragment, useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const history = useHistory()
    const { isAuth, setIsAuth } = useCart()
    const [data, setData] = useState({
        email: "",
        password: "",
        cPassword: ""
    });

    const formSubmit = async (e) => {
        let valid = false
        e.preventDefault()
        if ((data.email.length !== 0) && (data.password.length !== 0) && (data.cPassword.length !== 0)) {
            if (data.cPassword === data.password) {
                try {
                    const res = await axios.post("https://vcommerce-by-mbd-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", data)
                    console.log(res.data);
                    history.push("/store")
                    toast.success("Account created Successfully")
                }
                catch (Err) {
                    console.log(Err);
                }
            }
            else {
                toast.error("Password and Confirm password must be same!")
            }
        }
        else {
            toast.error("Form should not be Empty!")
        }
    }
    console.log(data);
    return (
        <Fragment>
            <div style={{ height: "100vh" }}>
                <div style={{ marginTop: "15%", width: "50%", height: "73%", margin: "12% auto", border: "1px solid black", boxShadow: "2px 2px 6px gray", borderRadius: 15 }}>
                    <div className="text-center text-2xl mb-6">Register</div>
                    <form style={{ width: "90%", padding: "6%", marginLeft: 25 }} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name">
                                Email Address
                                <span className="text-sm text-gray-600 ml-1">*</span>
                            </label>
                            <input
                                required={true}
                                onChange={(e) => {
                                    setData({ ...data, email: e.target.value });
                                }}
                                value={data.email}
                                type="text"
                                id="name"
                                className={`${!data.error ? "" : "border-red-500"
                                    } px-4 py-2 focus:outline-none border`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">
                                Password<span className="text-sm text-gray-600 ml-1">*</span>
                            </label>
                            <input
                                required={true}
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value });
                                }}
                                value={data.password}
                                type="password"
                                id="password"
                                className={`${!data.error ? "" : "border-red-500"
                                    } px-4 py-2 focus:outline-none border`}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="cPassword">
                                Confirm Password<span className="text-sm text-gray-600 ml-1">*</span>
                            </label>
                            <input
                                required={true}
                                onChange={(e) => {
                                    setData({ ...data, cPassword: e.target.value });
                                }}
                                value={data.cPassword}
                                type="Password"
                                id="cPassword"
                                className={`${!data.error ? "" : "border-red-500"
                                    } px-4 py-2 focus:outline-none border`}
                            />
                        </div>

                        <div
                            onClick={(e) => formSubmit(e)}
                            style={{ background: "#303031", width: "50%", margin: "5% 0 0 25% " }}
                            className="font-medium px-4 py-2 text-white text-center cursor-pointer"
                        >
                            Register
                        </div>
                        <h4 style={{ textAlign: "center" }}>Already having an account? <b onClick={() => history.push("/sign-in")} style={{ cursor: "pointer", marginBottom: "2%" }}>Signin</b></h4>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp;
