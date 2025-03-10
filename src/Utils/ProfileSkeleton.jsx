// ProfileSkeleton.js (unchanged from previous)
import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const ProfileSkeleton = () => (
  <div>
    <Nav />
    <div className="space-y-6 my-11 mx-20">
      <div className="flex gap-6">
        <div className="w-[200px] h-[200px] bg-gray-200 rounded-[20px]"></div>
        <div className="w-full flex flex-col justify-between space-y-1">
          <div className="h-[48px] w-[300px] bg-gray-200"></div>
          <div className="h-[36px] w-[250px] bg-gray-200"></div>
          <div className="flex gap-4 items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="w-[16px] h-[16px] bg-gray-200"></div>
                <span className="h-[16px] w-[150px] bg-gray-200"></span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-[24px_19px_24px_37px] bg-white rounded-[15px] shadow-lg">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="h-[36px] w-[50px] bg-gray-200"></div>
                <div className="h-[19px] w-[50px] bg-gray-200"></div>
              </div>
            ))}
            <div className="flex gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[40px] h-[40px] bg-gray-200"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-1/3 space-y-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-col gap-[10px] p-[32px_24px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full">
                <div className="h-[24px] w-[100px] bg-gray-200"></div>
                <div className="w-[20px] h-[20px] bg-gray-200"></div>
              </div>
              <div className="w-full h-[100px] bg-gray-200"></div>
            </div>
          ))}
        </div>
        <div className="w-2/3 space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-[10px] p-[24px_23px] rounded-[15px] bg-white shadow-lg">
              <div className="flex justify-between w-full pb-3">
                <div className="h-[24px] w-[150px] bg-gray-200"></div>
                <div className="h-[20px] w-[200px] bg-gray-200"></div>
              </div>
              <div className="w-full h-[100px] bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ProfileSkeleton;