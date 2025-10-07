# NestJS Users Assessment

## Quick Start
1. npm install
2. npm run start:dev
3. Open Postman, import `users-assessment.postman_collection.json`
4. Use requests with base URL http://localhost:3000 and set header `Authorization` with user id (e.g., 1)

### Endpoints
- POST /users  (CREATE permission)
- PATCH /users/:id (EDIT permission)
- GET /users  (VIEW permission)
- DELETE /users/:id (DELETE permission)
- GET /users/managed/:id (VIEW permission)