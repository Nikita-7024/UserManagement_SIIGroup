# NestJS Users Assessment

## Project Overview
- NestJS project implementing a **Users module** with full **CRUD operations**.
- Includes **role-based permission guard**.
- Uses predefined **users, roles, and groups**.

## Features
- CRUD Endpoints for Users:
  - `POST /users` – Create a user
  - `PATCH /users/:id` – Update a user
  - `GET /users` – Retrieve all users
  - `DELETE /users/:id` – Delete a user
  - `GET /users/managed/:id` – Retrieve users managed by a given user
- Permission Guard ensures only authorized roles can perform actions.
- DTO validation for all input data.

## How to Run
1. Clone the repository :
```bash
git clone https://github.com/Nikita-7024/UserManagement_SIIGroup
Install dependencies: npm install 
npm run start:dev
Import the collection: users-assessment.postman_collection.json
Test endpoints using Postman:
Server runs at http://localhost:3000 and and set header `Authorization` with user id (e.g., 1)


ZIP File
Attached ZIP: nestjs-users-assessment-complete.zip
