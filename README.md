# 🔐 Secrets Access Project (Node.js + Express)

A simple password-protected web application built using Express.js. Users can enter a password to access a hidden “secret” page — a great beginner project to understand form handling and basic authentication logic.

---

## 📖 About

This project demonstrates how to:

* Handle form submissions in Express
* Process user input securely
* Control access to protected routes
* Serve static files efficiently

It’s a foundational step toward building real-world authentication systems.

---

## 🚀 Features

* Password-protected route
* Form handling with POST requests
* Static file serving
* Basic access control logic
* Clean and minimal setup

---

## 🛠 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)

* **Runtime:** Node.js
* **Framework:** Express.js
* **Modules Used:**

  * `path` (built-in)
  * `url` (for ES module compatibility)

---

## 📁 Project Structure

```
Secrets-Access-Project/
│
├── public/
│   ├── index.html      ← Login form
│   └── secret.html     ← Protected page
│
├── index.js            ← Main server file
├── package.json        ← Dependencies & metadata
└── README.md           ← You are here
```

---

## ⚙️ Prerequisites

Make sure Node.js is installed:

```bash
node --version   # v14+ recommended
```

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/KunalGuhagarkar/Secrets-Access-Project.git
cd Secrets-Access-Project
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the server**

```bash
node index.js
```

---

## 🌐 Usage

1. Open your browser:

```
http://localhost:3000
```

2. Enter the password:

```
Kunal
```

3. If correct → access granted to secret page
4. If incorrect → redirected back to login page

---

## 💻 Source Code

```javascript
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/secrets", (req, res) => {
  const secretPassword = req.body.password;

  if (secretPassword === "Kunal") {
    res.sendFile(path.join(__dirname, "public/secret.html"));
  } else {
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000/");
});
```

---

## 🔍 Code Breakdown

| Code                   | What It Does                      |
| ---------------------- | --------------------------------- |
| `express.static()`     | Serves files from `public` folder |
| `express.urlencoded()` | Parses form data                  |
| `req.body`             | Accesses user input               |
| `res.sendFile()`       | Sends HTML file                   |
| `res.redirect()`       | Redirects user                    |

---

## 📌 Concepts Covered

* ✅ Express middleware
* ✅ Handling POST requests
* ✅ Form data processing
* ✅ Serving static files
* ✅ Basic authentication logic

---

## ⚠️ Important Note

This project uses a **hardcoded password**, which is **not secure** for production.

👉 In real applications:

* Use hashed passwords (bcrypt)
* Store credentials in a database
* Implement sessions or authentication systems

---

## 🗺️ Roadmap

```
✅ Basic Password Protection   ← You are here
      ↓
   Sessions (Login System)
      ↓
   Password Hashing (bcrypt)
      ↓
   Database Integration
      ↓
   Full Authentication System 🚀
```

---

## 👨‍💻 Author

**Kunal Guhagarkar**
GitHub: https://github.com/KunalGuhagarkar

---

⭐ If you like this project, consider giving it a star!

---

> "Security starts simple. Master the basics, then build the fortress." 🔐
