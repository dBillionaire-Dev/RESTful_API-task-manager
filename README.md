````
# RESTful Task Manager API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

A **RESTful backend API** built with **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates clean backend architecture, authentication, database modeling, and API best practices — suitable for portfolio and real-world use.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Example Requests](#example-requests)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 📌 Overview

The **RESTful Task Manager API** allows users to:

- Register and log in securely
- Manage tasks using standard CRUD operations
- Authenticate requests using JSON Web Tokens (JWT)
- Store data persistently in MongoDB

This API follows **REST principles**, modular design, and clean separation of concerns.

---

## ✨ Features

- User registration & login
- JWT-based authentication
- Password hashing with bcrypt
- Task CRUD operations
- Centralized error handling
- Environment variable configuration
- Clean, scalable folder structure

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **dotenv**

---

## 🗂 Project Structure

```text
RESTful_API-task-manager/
├─ config/
│  └─ db.js
├─ controllers/
│  ├─ authController.js
│  └─ taskController.js
├─ models/
│  ├─ userModel.js
│  └─ taskModel.js
├─ routes/
│  ├─ authRoutes.js
│  └─ taskRoutes.js
├─ middleware/
│  ├─ authMiddleware.js
│  └─ errorMiddleware.js
├─ server.js
├─ .env
├─ .gitignore
└─ README.md
````

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/dBillionaire-Dev/RESTful_API-task-manager.git
cd RESTful_API-task-manager
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Start the server

```
npm run dev
```

The server will start on the port defined in `.env`.

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=1d
```

> ⚠️ Never commit `.env` files to version control.

---

## 📚 API Endpoints

### 🔑 Authentication

#### Register User

```
POST /auth/register
```

**Body**

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

#### Login User

```
POST /auth/login
```

**Body**

```
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### ✅ Tasks (Protected Routes)

> Requires `Authorization: Bearer <token>`

#### Get All Tasks

```
GET /tasks
```

#### Create Task

```
POST /tasks
```

```
{
  "title": "Finish project",
  "description": "Write backend README"
}
```

#### Update Task

```
PUT /tasks/:id
```

#### Delete Task

```
DELETE /tasks/:id
```

---

## 🔐 Authentication

* Passwords are hashed using **bcrypt**
* JWT tokens are issued on login/register
* Protected routes require valid JWT tokens
* Tokens expire based on environment configuration

---

## 🧪 Example Usage

Use **Postman**, **Insomnia**, or **Thunder Client** to test endpoints.

Set headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

---

## 🚧 Future Improvements

* Role-based access control (Admin/User)
* Pagination & filtering
* Input validation with Joi/Zod
* Automated tests (Jest + Supertest)

---

## 📄 License

This project is licensed under the **MIT License**.

---

### 👨‍💻 Author

Built with ❤️ for backend engineering growth and portfolio demonstration.

Just say the word.
```
