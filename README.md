# Task-Manager-API
Task manager API with JWT authorization build using Node.js.

Most of the source code is part of [The Complete Node.js Developer Course](https://www.udemy.com/the-complete-nodejs-developer-course-2) by [Andrew Mead](https://github.com/andrewjmead)

## Config
The application expects the following environment variables:

```
PORT
MONGODB_URL
JWT_SECRET
SENDGRID_API_KEY
```

The develompent variables should be placed into the following file:
 * Development - `/config/dev.env`

## Endpoints

\* - Requires a valid JWT token as an HTTP request header (`Authorization: Bearer <jwt_token>`), which is sent from the authorization endpoints in the response body.

* Authorization
  * Create user                     - `POST /users`
  * Login user                      - `POST /users/login`
* User actions *
  * Logout user                     - `POST /users/logout`
  * Logout all users                - `POST /users/logout-all`
  * Read profile                    - `GET /users/me`
  * Update user                     - `PATCH /users/me`
  * Delete user                     - `DELETE /users/me`
  * Upload avatar                   - `POST /users/me/avatar`
  * Delete avatar                   - `DELETE /users/me/avatar`
  * Get user avatar                 - `GET /users/:id/avatar`
* Task management *
  * Create task                     - `POST /tasks`
  * Read tasks                      - `GET /tasks`
    * completed       - `Boolean`
    * sortBy          - `<field_name>:asc|desc`
    * limit           - `Number`
    * skip            - `Number`
  * Read task                       - `GET /tasks/:id`
  * Update task                     - `PATCH /tasks/:id`
  * Delete task                     - `DELETE /tasks/:id`

---
I've also deployed it on heroku : [URL](https://krunal-task-manager.herokuapp.com)
