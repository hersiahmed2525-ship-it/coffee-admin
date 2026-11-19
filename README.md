# Coffee Admin Portal

## Setup

npm install
npm run server # terminal 1 (json-server on :3001)
npm run dev # terminal 2 (vite on :5173)

## Testing

npm test

## Features

- Landing page (store info via Context)
- Shop with live search + origin filter
- Product detail route
- Admin CRUD (create, edit price, delete)

## Tech

React 18, React Router v6, JSON Server, Vitest, React Testing Library

## Known Limitations

- No auth on /admin
- JSON Server is a mock backend (data resets if db.json replaced)
- No image support

