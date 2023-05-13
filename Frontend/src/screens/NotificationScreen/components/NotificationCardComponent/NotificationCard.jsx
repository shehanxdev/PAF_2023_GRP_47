import { Button, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function NotificationCard({ data }) {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="body2">{data.content}</Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
