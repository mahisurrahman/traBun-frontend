import React from "react";

function LoginCompo() {
  return (
    <div className="px-[5vw] py-[4vh]">
      <h1 className="mt-[5vh] text-center font-extrabold text-5xl leading-snug text-primary">
        Login with your Credenstials
      </h1>
      <form action="" className="mt-[5vh] px-[3vw]">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-[1vh] bg-transparent py-[2vh] px-[1vw] border-2 border-primary rounded-2xl focus:outline-none placeholder:text-primary"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mt-[5vh] flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-[1vh] bg-transparent py-[2vh] px-[1vw] border-2 border-primary rounded-2xl focus:outline-none placeholder:text-primary"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mt-[5vh] w-full flex items-center justify-center">
          <input type="submit" value="Login" className="font-semibold px-[4vw] py-[2vh] bg-primary text-white rounded-xl border-2 border-primary duration-200 hover:duration-200 hover:cursor-pointer hover:bg-white hover:bg-opacity-10 hover:text-primary" />
        </div>
      </form>
    </div>
  );
}

export default LoginCompo;
