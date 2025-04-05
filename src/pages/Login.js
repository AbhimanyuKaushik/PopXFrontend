import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://popxbackend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        navigate("/Profile"); 
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center border bg-[#F7F8F9] h-[680px] w-[375px] px-4 py-8"
    >
      <h1 className="text-2xl font-semibold text-left w-full">
        Sign in to your <br /> PopX account
      </h1>
      <p className="w-full text-left text-md text-[#1D2226] opacity-[0.6]">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit.
      </p>

      <div className="relative">
        <input
          name="email"
          placeholder="Email Address"
          className="w-[335px] p-2 h-[40px] border border-[#CBCBCB] rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <span className="absolute mx-2 gap-1 font-sans bg-[#F7F8F9] w-[90px] text-[#6C25FF] left-[2px] text-[12px] flex">
          Email Address<p className="text-red-600">*</p>
        </span>
      </div>

      <div className="relative">
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-[335px] p-2 h-[40px] border border-[#CBCBCB] rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <span className="absolute mx-2 gap-1 font-sans bg-[#F7F8F9] w-[90px] text-[#6C25FF] left-[2px] text-[12px] flex">
          Password<p className="text-red-600">*</p>
        </span>
      </div>

      <button
        type="submit"
        className="bg-[#6C25FF] text-white rounded-md font-sans font-normal w-[335px] h-[46px]"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
