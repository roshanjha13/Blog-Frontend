import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (ev) => {
    console.log(email, password);
    ev.preventDefault();
    const result = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(result);
    if (result.ok === true) {
      navigate("/");
    } else {
      alert("enter your correct credentials");
    }
  };

  return (
    <form className="login" onSubmit={login}>
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="enter your email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
      <Link to="/register">Already login ? redireact to register</Link>
    </form>
  );
};

export default LoginPage;
