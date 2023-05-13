import React, { useEffect, useState } from "react";
import NotificationCard from "./components/NotificationCardComponent/NotificationCard";
import getUser from "../../util/getUser";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SideNavBar from "../../components/SideNavBar/SideNavbar";
function NotificationScreen() {
  const [notifications, setNotifications] = useState([]);
  const userId = getUser();
  useEffect(() => {
    async function fetchNotifications() {
      axios
        .get("http://localhost:8080/api/notifications/" + userId)
        .then((response) => {
          console.log(response.data);
          setNotifications(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    fetchNotifications();
  }, []);

  const markAsRead = () => {
    if (userId) {
      axios
        .delete("http://localhost:8080/api/notifications/" + userId)
        .then((response) => {
          console.log("Notification Deleted");
          setNotifications([]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  if (notifications.length == 0) {
    return (
      <div>
        <SideNavBar />
        <div className="d-flex justify-content-center align-items-center h-100 gap-4 ">
          <h1 className="text-center my-5 ">You are all caught up with</h1>
          <CelebrationIcon color="success" fontSize="large" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SideNavBar />
        <div className="w-50 m-auto my-5">
          <div className="my-5">
            <span>
              <Button
                onClick={() => {
                  markAsRead();
                }}
                startIcon={<CheckIcon />}
              >
                Mark as read
              </Button>
            </span>
          </div>
          {/* <SideNavBar /> */}
          {notifications.map((notification) => {
            return (
              <div className="py-2">
                <NotificationCard data={notification} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NotificationScreen;
