Sure! Here’s a **short and clean version** of your `README.md`:

---

# Express + PostgreSQL CRUD API

A simple **CRUD API** built with **Express.js** and **PostgreSQL** using Docker. Follows **service-controller-model pattern**, with **error handling** and **Joi validation**.

---

## Features

* Create, Read, Update, Delete Users
* PostgreSQL DB via Docker
* Standardized API responses
* Error handling middleware
* Joi schema validation

---

## Tech Stack

* Node.js, Express.js
* PostgreSQL, Docker, PGAdmin4
* Joi, Nodemon

---

## Setup

1. Clone the repo

```bash
git clone <repo-url>
cd <project-folder>
npm install
```

2. Add `.env`

```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=express-crud
DB_PASSWORD="your_password"
DB_PORT=5432
```

3. Run Docker and start server

```bash
docker-compose up -d
npm run dev
```

---

## API Endpoints

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| POST   | /api/user     | Create user    |
| GET    | /api/user     | Get all users  |
| GET    | /api/user/:id | Get user by ID |
| PUT    | /api/user/:id | Update user    |
| DELETE | /api/user/:id | Delete user    |

---
hello world from readme dfole 

