# Test task (frontend + backend)

## How to Run

1. Create and fill all .env files. These files are:

- frontend/.env
- backend/.env

You should use .env.example folder as a reference.

1. Install dependencies: `npm install`.

2. Install pre-commit hooks: `npx simple-git-hooks`. This hook is used to verify code style on commit.

3. Apply migrations: `npm run migrate:dev -w backend`

4. Run backend: `npm run start:dev -w backend`

5. Run frontend: `npm run start:dev -w frontend`

### Frontend

#### 1 Technologies

1. [React](https://react.dev/) — a frontend library
2. [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) — a state manager

#### 2 Folder Structure

1. assets - static assets (images, global styles)
2. libs - shared libraries and utilities

   2.1 components - plain react components

   2.2 enums

   2.3 helpers

   2.4 hooks

   2.5 packages - separate features or functionalities

   2.6 types

3. packages - separate app features or functionalities
4. pages - app pages
5. slices - redux slices

### Backend

#### 1 Technologies

1. [Fastify](https://fastify.dev/) — a backend framework
2. [Knex](https://knexjs.org/) — a query builder
3. [Objection](https://vincit.github.io/objection.js/) — an ORM

#### 2 Folder Structure

1. db - database data (migrations, seeds)
2. libs - shared libraries and utilities

   2.1 enums

   2.2 exceptions

   2.3 helpers

   2.4 packages - separate features or functionalities

   2.5 types

3. packages - separate app features or functionalities
