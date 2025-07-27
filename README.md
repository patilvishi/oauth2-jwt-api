
# 🔐 OAuth2 vs JWT: Demo Project

This project demonstrates the difference between **OAuth2** and **JWT (JSON Web Token)** authentication strategies.

## 📦 Project Structure

```
oauth2-jwt-demo/
├── oauth2-jwt-api/      → Spring Boot backend (OAuth2 Resource Server)
└── oauth2-jwt-ui/       → React frontend using JWT with Axios
```

## 🚀 Technologies Used

| Layer     | Technology             |
|-----------|------------------------|
| Backend   | Java 17, Spring Boot 3 |
| Frontend  | React.js, Axios        |
| Security  | OAuth2 Resource Server, JWT |

## 🛠️ Getting Started

### 1. Clone or Download

```
git clone https://github.com/your-username/oauth2-jwt-demo.git
cd oauth2-jwt-demo
```

---

### 2. Start the Backend

```bash
cd oauth2-jwt-api
mvn spring-boot:run
```

Runs at: `http://localhost:8080`

---

### 3. Start the Frontend

```bash
cd ../oauth2-jwt-ui
npm install
npm start
```

Runs at: `http://localhost:3000`

---

### 4. Use a JWT Token

Replace the placeholder token in `App.js`:

```js
const accessToken = "<Paste_Your_Valid_JWT_Here>";
```

You can generate one from [jwt.io](https://jwt.io/) with this payload:

```json
{
  "sub": "john.doe",
  "iss": "https://demo.auth.com",
  "exp": 1999999999
}
```

> Use a secret like: `my-secret-key` (only for testing)

---

## 🔗 API Endpoints

| Endpoint             | Auth Required | Description         |
|----------------------|---------------|---------------------|
| `/api/public`        | ❌ No          | Public content      |
| `/api/secure`        | ✅ Yes         | JWT-protected route |

---

## ✍️ Blog Post

Read the blog: **OAuth2 vs JWT: When and Why to Use Each** → [Coming Soon]

## 👨‍💻 Author

Made with ❤️ by [Vishwanath Patil]((https://github.com/patilvishi)

