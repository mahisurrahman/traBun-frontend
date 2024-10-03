import React from "react";
import SideBar from "../../components/sidebar/SIdeBar";

function HomeLayout() {
  return (
    <div
      className="relative w-full h-[100vh] px-[1vw] py-[3vh]"
      style={{
        backgroundImage: "url('../../../public/bannerImg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"
        style={{
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="relative h-full w-full border-2 border-white rounded-3xl px-[0.5vw] py-[1vh] z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <div
          className="h-full w-full rounded-3xl px-5 py-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            webkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="w-full h-full grid grid-cols-12">
            <div className="col-span-2 h-full">
              <SideBar />
            </div>
            <div className="col-span-10 h-full">{/* Add your content here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
