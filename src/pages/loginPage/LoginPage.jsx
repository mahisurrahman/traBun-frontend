import React from 'react'
import LoginCompo from '../../components/login/loginCompo/LoginCompo'


function LoginPage() {
  return (
    <div
      className="font-poppins relative w-full h-[100vh] px-[1vw] py-[3vh]"
      style={{
        backgroundImage: "url('../../../public/bannerImg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-primary opacity-50 z-0"
        style={{
          pointerEvents: "none",
        }}
      ></div>

        <div
          className="h-full w-6/12 mx-auto rounded-3xl px-5 py-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.20)",
            backdropFilter: "blur(10px)",
            webkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="w-full h-full mx-auto">
           <LoginCompo/>
          </div>
        </div>
    </div>
  )
}

export default LoginPage