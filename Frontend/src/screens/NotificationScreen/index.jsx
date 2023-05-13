import React from "react";
import NotificationCard from "./components/NotificationCardComponent/NotificationCard";
import SideNavBar from "./../FeedScreen/components/SideNavBar/SideNavbar";

function NotificationScreen() {
  return (
    <div className="mx-4">
      {/* <SideNavBar /> */}
      <NotificationCard />
    </div>
  );
}

export default NotificationScreen;
