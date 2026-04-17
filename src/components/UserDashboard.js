import React from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography } from "@mui/material";

function UserDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");

  if (!role) window.location.href = "/";

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });
      alert(res.data);
    } catch {
      alert("Unauthorized!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <Card style={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5">User Dashboard</Typography>
          <Typography color="textSecondary">Role: USER</Typography>

          <Button
            variant="contained"
            color="success"
            fullWidth
            style={{ marginTop: 20 }}
            onClick={fetchData}
          >
            Get Profile
          </Button>

          <Button
            variant="outlined"
            color="error"
            fullWidth
            style={{ marginTop: 20 }}
            onClick={() => {
              sessionStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDashboard;