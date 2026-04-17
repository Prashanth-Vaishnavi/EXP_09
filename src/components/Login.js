import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const token = btoa(username + ":" + password);

      const res = await axios.get("http://localhost:8080/api/user/profile", {
        headers: {
          Authorization: "Basic " + token,
        },
      });

      if (res.status === 200) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);

        if (username === "admin1") {
          sessionStorage.setItem("role", "ADMIN");
          window.location.href = "/admin";
        } else {
          sessionStorage.setItem("role", "USER");
          window.location.href = "/user";
        }
      }
    } catch {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <Card style={{ width: 350, padding: 20 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            RBAC Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={login}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;