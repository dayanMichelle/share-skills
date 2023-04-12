import React from "react";
import { InfoProfile, AccountSettingsMenu } from "@/components";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100 justify-between">
      <InfoProfile />
      <AccountSettingsMenu />
    </div>
  );
};

export default Profile;
