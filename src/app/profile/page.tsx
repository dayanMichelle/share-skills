import AccountSettingsMenu from "@/components/accountSettingsMenu/AccountSettingsMenu";
import InfoProfile from "@/components/infoProfile/InfoProfile";
import React from "react";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-100 justify-between">
      <InfoProfile />
      <AccountSettingsMenu />
    </div>
  );
};

export default Profile;
