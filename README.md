# Feedback Widget
<img src="https://github.com/raiane-honorato/impulse-monorepo/blob/main/web-mobile-mocks.png" width="450" alt="application phone frame">

## project
Feedback widget to be implemented in a website to recieve feedbacks about problems, ideas or others.

## repository
This is a monorepo repository containing the back-end (server) and front-end (mobile and web).

## Technologies
**Front-end web**
- React
- Typescript
- Vite
- Tailwind
- Headless UI
- Axios

**Front-end mobile**
- React native
- Typescript
- Axios

**Back-end**
- Node.js
- Express
- Prisma
- Jest
- Nodemailer

## Running the project

### back-end
- install node.js
- setup postgresql and define `.env` variable
 ```cl
DATABASE_URL=
```
- `npm install` to install dependencies
- `npm run dev` to run the project
- `npm run test` to run the application unit tests

### front-end web
- setup `.env.local` variable for API
 ```cl
VITE_API_URL=
```
- `npm install` to install dependencies
- `npm run dev` to run the project

## front-end mobile
- setup `expo`
- `expo start` to run the project
