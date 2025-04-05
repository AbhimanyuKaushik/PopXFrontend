import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex flex-col items-start border bg-[#F7F8F9] h-[680px] w-[375px] font-sans">
      <h2 className="w-full h-[68px] bg-white text-[18px] font-medium flex items-center px-4">
        Account Settings
      </h2>

      <div className="w-full flex flex-col px-4 py-6 gap-4 border-t border-gray-200">
        <div className="flex flex-row items-center gap-4">
          <div className="relative w-16 h-16">
            <img
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="profile"
              className="rounded-full w-16 h-16 object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full">
              <FaCamera className="text-white text-xs" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">
              {user ? user.fullName : "Loading..."}
            </h2>
            <p className="text-sm text-gray-500">
              {user ? user.email : "Loading..."}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;
