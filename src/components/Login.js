import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await axios.get("https://vcommerce-by-mbd-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
        setUserData(Object.values(res.data))
    }
    const history = useHistory()
    const [userData, setUserData] = useState([{}])
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const formSubmit = (e) => {
        let valid = false
        e.preventDefault()
        if ((data.email.length !== 0) && (data.password.length !== 0)) {
            userData.map((res) => {
                if ((res.email === data.email) && (res.password === data.password)) {
                    toast.success("Login Success")
                    history.push("/store")
                    valid = true
                }
            })
            if (!valid) {
                toast.error("Invalid Credentials")
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
                <div style={{ marginTop: "15%", width: "50%", height: "60%", margin: "12% auto", border: "1px solid black", boxShadow: "2px 2px 6px gray", borderRadius: 15 }}>
                    <div className="text-center text-2xl mb-6">Login</div>
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

                        <div
                            onClick={(e) => formSubmit(e)}
                            style={{ background: "#303031", width: "50%", margin: "5% 0 0 25% " }}
                            className="font-medium px-4 py-2 text-white text-center cursor-pointer"
                        >
                            Login
                        </div>
                        <h4 style={{ textAlign: "center", marginBottom: "5%" }}>Don't have an account? <b onClick={() => history.push("/sign-up")} style={{ cursor: "pointer", marginBottom: "2%" }}>Signup</b></h4>

                    </form>
                </div>

            </div>

        </Fragment>
    );
};

export default Login;
