import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <form className="flex flex-col gap-2 items-center border bg-[#F7F8F9] h-[680px] w-[375px] p-4 py-8">
      <span className="flex-1"></span>
      <h1 className="text-2xl font-semibold text-left w-full">
        Welcome to PopX
      </h1>
      <p className="w-full text-left text-sm text-[#1D2226] opacity-[0.6]">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit.
      </p>

      <Link to="/SignUp" className="w-full">
        <button
          type="button"
          className="bg-[#6C25FF] w-full h-[46px] rounded-md text-white font-sans font-semibold"
        >
          Create Account
        </button>
      </Link>

      <Link to="/Login" className="w-full">
        <button
          type="button"
          className="bg-[#6C25FF4B] w-full h-[46px] rounded-md font-semibold"
        >
          Already Registered? Login
        </button>
      </Link>
    </form>
  );
}

export default Form;
