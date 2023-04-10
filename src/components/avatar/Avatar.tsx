import React from "react";

const Avatar = ({
  src = "https://images.pexels.com/photos/16039744/pexels-photo-16039744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}) => {
  return (
    <div className="flex items-center justify-center h-24 w-24 rounded-full overflow-hidden">
      <img
        src={src}
        alt="Avatar del usuario"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default Avatar;
