import React from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography } from "@mui/material";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("username");
  const password = sessionStorage.getItem("password");

  if (role !== "ADMIN") {
    alert("Access Denied");
    window.location.href = "/";
  }

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: { username, password }
      });
      alert(res.data);
    } catch {
      alert("Forbidden!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
      <Card style={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5">Admin Dashboard</Typography>
          <Typography color="textSecondary">Role: ADMIN</Typography>

          <Button
            variant="contained"
            color="error"
            fullWidth
            style={{ marginTop: 20 }}
            onClick={fetchAdmin}
          >
            Get Admin Data
          </Button>

          <Button
            variant="outlined"
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

export default AdminDashboard;