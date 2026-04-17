# 🧪 Experiment 9: Frontend Integration with RBAC

### (React + Session-Based UI)

---

## 📌 Objective

To build a **React frontend** integrated with a Spring Boot RBAC backend and implement:

* User authentication from frontend
* Session-based login handling
* Role-based UI rendering (USER / ADMIN)
* Secure API communication
* Authorization testing through UI

---

## 🧩 Features Implemented

### 🔐 1. Login Page

* Accepts username & password

* Sends request to backend (`/api/user/profile`)

* Uses HTTP Basic Authentication

* Stores credentials in `sessionStorage`:

  * username
  * password
  * role

* Redirects based on role:

  * USER → `/user`
  * ADMIN → `/admin`

---

### 👤 2. USER Dashboard

* Accessible only by USER role
* Calls:

```bash
/api/user/profile
```

* Displays response from backend
* Cannot access admin functionality

---

### 👑 3. ADMIN Dashboard

* Accessible only by ADMIN role
* Calls:

```bash
/api/admin/dashboard
```

* Full access to protected endpoints

---

### 🚫 4. Role-Based UI Control

* USER:

  * Cannot access admin dashboard
  * Blocked with "Access Denied"

* ADMIN:

  * Access to all endpoints

* Unauthorized users:

  * Redirected to login

---

### 🔄 5. Logout Functionality

* Clears session:

```javascript
sessionStorage.clear();
```

* Redirects to login page

---

## 🔐 Role-Based Access Summary

| Role         | Access                      |
| ------------ | --------------------------- |
| USER         | `/api/user/**`              |
| ADMIN        | `/api/admin/**` + USER APIs |
| Unauthorized | No access                   |

---

## 🌐 API Integration

| Endpoint               | Access      |
| ---------------------- | ----------- |
| `/api/public/hello`    | Public      |
| `/api/user/profile`    | USER, ADMIN |
| `/api/admin/dashboard` | ADMIN only  |

---

## 💻 Tech Stack

* React
* Axios
* Bootstrap
* Material UI
* Spring Boot (Backend from Experiment 7)

---

## 📸 Screenshots (Required)

### 1️⃣ Login UI

![Login](screenshots/01-login-page.png)

---

### 2️⃣ USER accessing user endpoint

![User](screenshots/02-user-dashboard.png)

---

### 3️⃣ USER denied access to ADMIN

![Denied](screenshots/03-user-denied-admin.png)

---

### 4️⃣ ADMIN accessing admin endpoint

![Admin](screenshots/04-admin-dashboard.png)

---

### 5️⃣ Session Storage (Role Stored)

![Session](screenshots/05-session-storage.png)

---

## 🧪 Testing

### ✅ USER Login

```bash
username: user1
password: password123
```

* Redirect → `/user`
* Can access user API
* Cannot access admin API

---

### ✅ ADMIN Login

```bash
username: admin1
password: password123
```

* Redirect → `/admin`
* Full access

---

### ❌ Unauthorized Access

* No login → 401 Unauthorized
* USER accessing admin → 403 Forbidden

---

## ⚙️ Project Structure

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── UserDashboard.js
│   │   └── AdminDashboard.js
```

---

## ▶️ How to Run

### Backend (from Experiment 7)

```bash
cd backend
mvn spring-boot:run
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧠 Key Concepts Learned

* Frontend integration with secured backend
* Role-Based Access Control (RBAC)
* Session-based authentication using `sessionStorage`
* Protected API calls using Axios
* UI restriction based on roles

---

## 📘 Conclusion

This experiment demonstrates how a **React frontend can enforce role-based access control** by integrating with a secured Spring Boot backend, ensuring both API-level and UI-level security.

---

## 👨‍💻 Author

**P Vaishnavi**
