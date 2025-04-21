# 🛍️ Miscellaneous Store – Find everything you might not need

This project is a fictional online store developed as part of the Fullstack Bootcamp at ReDI School Berlin. It simulates an e-commerce platform where users can browse products, search for items, filter by category, and add products to a shopping cart.

## 🚀 Technologies Used

* React – JavaScript library for building user interfaces.
* Vite – Next-generation frontend tooling for fast development.
* Tailwind CSS – Utility-first CSS framework for rapid UI development.
* React Router DOM – Declarative routing for React applications.
* FakeStore API – External API used to populate the store with products.
* Context API – React's built-in state management for global state (e.g., shopping cart).

## 🗂️ Project Structure

The project follows a modular structure for scalability and maintainability:

```miscellaneous-store/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and other media
│   ├── components/         # Reusable UI components (e.g., ProductCard, Navbar)
│   ├── context/            # Global state management (e.g., CartContext)
│   ├── pages/              # Page components (Home, Products, Cart, etc.)
│   ├── App.jsx             # Application root with route definitions
│   └── main.jsx            # Application entry point
├── .eslintrc.js            # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration

## 💡 Features
* 🔍 Real-time product search by name.
* 🛒 Add to cart functionality from product listings and detail pages.
* 🧩 Category filtering from the homepage.
* 🧭 Single Page Application (SPA) navigation with React Router.
* 🧠 Global state management using React's Context API.
* 🛠️ Getting Started

### To run the project locally:
#### Clone the repository:
```
git clone https://github.com/smiosso/miscellaneous-store.git
cd miscellaneous-store
#### Install dependencies:
```
npm install
#### Start the development server:
```
npm run dev
#### Open your browser and navigate to:
http://localhost:5173

## 📚 Credits
This project was developed as part of the web development curriculum at ReDI School of Digital Integration – Berlin.


