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
