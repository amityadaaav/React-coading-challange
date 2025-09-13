Day 5 React Interview Coding Question

Problem Statement:
Create a GitHub user search component that:

Takes a text input (with debounce of 500ms to minimize API calls).
Fetches and displays users from the GitHub API (https://api.github.com/search/users?q={query}).
Shows a loading state during API calls.
Handles and displays API errors (e.g., rate limits, network issues).
Display the results in a list format showing at least the username and avatar. Implement this using functional components and hooks.

What to Submit:
Your React component code (including CSS-in-JS or inline styles if needed).



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
