import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://popxbackend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Account created successfully!");
        navigate("/Login");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 items-center border bg-[#F7F8F9] h-[680px] w-[375px] p-4 py-4"
    >
      <h1 className="text-2xl font-semibold text-left w-full">
        Create your <br /> PopX account
      </h1>

      {/* Full Name */}
      <div className="relative">
        <input
          name="fullName"
          placeholder="John Doe"
          className="w-[335px] p-2 h-[40px] border border-[#CBCBCB] rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <span className="absolute mx-2 gap-1 font-sans bg-[#F7F8F9] w-[90px] text-[#6C25FF] left-[2px] text-[12px] flex">
          Full Name<p className="text-red-600">*</p>
        </span>
      </div>

      {/* Phone Number */}
      <div className="relative">
        <input
          name="phone"
          placeholder="Phone Number"
          className="w-[335px] p-2 h-[40px] border border-[#CBCBCB] rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <span className="absolute mx-2 gap-1 font-sans bg-[#F7F8F9] w-[90px] text-[#6C25FF] left-[2px] text-[12px] flex">
          Phone Number<p className="text-red-600">*</p>
        </span>
      </div>

      {/* Email Address */}
      <div className="relative">
        <input
          name="email"
          placeholder="Email address"
          className="w-[335px] p-2 h-[40px] border border-[#CBCBCB] rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <span className="absolute mx-2 gap-1 font-sans bg-[#F7F8F9] w-[90px] text-[#6C25FF] left-[2px] text-[12px] flex">
          Email address<p className="text-red-600">*</p>
        </span>
      </div>

      {/* Password */}
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

      {/* Company Name */}
      <div className="relative">
        <input
          name="company"
          placeholder="Company Name"
          className="w-[335px] p-2 h-[40px] border border-[#CBCBCB] rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <span className="absolute mx-2 gap-1 font-sans bg-[#F7F8F9] w-[90px] text-[#6C25FF] left-[2px] text-[12px] flex">
          Company name
        </span>
      </div>

      {/* Agency Radio Buttons */}
      <div className="relative flex flex-col items-start w-full px-2">
        <p className="flex flex-row gap-1 text-sm">
          Are you an Agency?<span className="text-red-600">*</span>
        </p>
        <div className="flex flex-row gap-4 mt-2 ml-1">
          <label className="flex flex-row gap-2 items-center text-sm">
            <input
              className="accent-[#6C25FF] scale-150"
              type="radio"
              name="isAgency"
              value="Yes"
              checked={formData.isAgency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="flex flex-row gap-2 items-center text-sm">
            <input
              className="accent-[#6C25FF] scale-150"
              type="radio"
              name="isAgency"
              value="No"
              checked={formData.isAgency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#6C25FF] text-white rounded-md font-sans font-normal w-full h-[46px]"
      >
        Create Account
      </button>
    </form>
  );
}

export default SignUp;
