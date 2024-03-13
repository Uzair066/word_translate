import { Box } from "@mui/material";
import axios from "axios";
import React from "react";;
import { useState, useContext, useEffect } from "react";
import { Message_data } from "../../context/context";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {setUserToken} = useContext(Message_data);


  function login(e) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      axios.post("http://localhost:3000/api/login", {
        username: username,
        password: password,
      })
        .then((result) => {
          console.log("Data: ", result);
          localStorage.setItem("p_u_t", result.data["token"]);
          setUserToken(result.data["token"]);
          router.push(`/admin-dashboard/all-article`);
        })
        .catch((err) => {
          toast(err?.response?.data?.message);
        });
    } else {
      toast("Fields can not be empty!");
    }
  }

  return (
    <div className="login">
      <div className="MobLogo">
        <img src="/BrowseLogo.png" alt="" className="MobLogoImg" />
      </div>
      <Box className="container" id="container">
        <div className="form-container log-in-container">
          <form className="form" onSubmit={login}>
            <h1 style={{color:"#333"}}>Login</h1>
            <input
            className="inputLogin"
              type="username"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />

            <input
             className="inputLogin"
              type= "password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            
            <button className="Submitbutton" type="submit" >
              Log In
            </button>
            {/* <Link to={"/forget-password"}>
              <p className="passwordForget">Forget Password</p>
            </Link> */}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
            <img className="Login-img" src="/BrowseLogo.png" alt="" />
            </div>
          </div>
        </div>
      </Box>
      <Toaster
        toastOptions={{
          className: "custom-toastERR",
          style: {
            fontFamily: '"Nunito", sans-serif',
            color: "orange-green", // Adjust text color as needed
          },
        }}
        position="top-right"
      />
    </div>
  );
}

export default Login;
