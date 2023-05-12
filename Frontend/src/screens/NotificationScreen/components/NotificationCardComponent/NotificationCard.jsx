import { Button, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function NotificationCard() {
  const notification = {
    title: "Title",
    content: "Content",
  };
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6">{notification.title}</Typography>
        <Typography variant="body2">{notification.content}</Typography>

        <Button
          variant="text"
          startIcon={<DeleteIcon color="error" />}
          onClick={() => {}}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
