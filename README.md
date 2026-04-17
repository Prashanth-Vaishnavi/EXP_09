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

<img width="1919" height="1031" alt="Screenshot 2026-04-17 234732" src="https://github.com/user-attachments/assets/3c4e31c7-2f4e-44be-af68-d343566f66f0" />


---

### 2️⃣ USER accessing user endpoint

<img width="1919" height="532" alt="Screenshot 2026-04-17 234756" src="https://github.com/user-attachments/assets/46aeb893-8f8c-4fd0-a80d-0c25262023a2" />



---

### 3️⃣ USER denied access to ADMIN

<img width="1919" height="435" alt="Screenshot 2026-04-17 234804" src="https://github.com/user-attachments/assets/9686deeb-402c-48ce-b043-d4ef9063a421" />


---

### 4️⃣ ADMIN accessing admin endpoint

<img width="1919" height="496" alt="Screenshot 2026-04-17 234817" src="https://github.com/user-attachments/assets/62e9c2ef-efdb-4865-aefc-01e1c27c00eb" />
<img width="1919" height="415" alt="Screenshot 2026-04-17 234822" src="https://github.com/user-attachments/assets/cddf70f0-a8fb-447d-a515-f608265e7b56" />


---

### 5️⃣ Session Storage (Role Stored)

<img width="692" height="468" alt="Screenshot 2026-04-17 234311" src="https://github.com/user-attachments/assets/1a68eff0-97b1-4c1f-8572-2a34d437b84c" />

<img width="1919" height="548" alt="Screenshot 2026-04-17 234901" src="https://github.com/user-attachments/assets/6d27253d-119d-4f38-a6b9-7d7f07fa71c2" />

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
