## About The Project

This project is a Single Page Application (SPA) built as an administrator portal for an e-commerce store ("Coffee R Us"). It demonstrates modern frontend development practices, including advanced state management with custom hooks, full simulated backend CRUD operations, client-side routing, and a comprehensive testing suite.

### Key Features

- **Full CRUD Operations:** Add new products (POST), view products (GET), edit prices inline (PATCH), and delete products (DELETE).
- **Dynamic Search & Filter:** Instantly search products by name/description and filter by origin using `useState`.
- **Client-Side Routing:** Seamless navigation between Home, Shop, Product Details, and Admin pages using React Router.
- **State Management:** Global store data handled via Context API, and custom data-fetching logic abstracted into a `useProducts` custom hook.
- **Responsive Design:** Fully styled to match the mock-up, adapting smoothly from desktop to mobile screens.
- **Tested:** 100% passing test suite covering routing, form submissions, search filtering, and UI interactions using Vitest and React Testing Library.

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
