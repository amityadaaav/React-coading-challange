React Code Challenge - Task 2
Welcome to the React Form Challenge! This challenge is designed to evaluate your proficiency in creating controlled forms, handling form validation, and managing form submissions in a React application.

Challenge Description
Your task is to create a React component named UserRegistrationForm that allows users to input their information for registration. Follow the instructions below to complete the challenge.

Requirements
Create a controlled form with the following fields:
Full Name
Email
Password
Confirm Password
Implement form validation for the following rules:
Full Name: Required, at least 3 characters.
Email: Required, must be a valid email address.
Password: Required, at least 6 characters.
Confirm Password: Required, must match the entered password.
Display error messages for each field if the input does not meet the validation criteria.
Disable the form submission button until all fields are valid.
Upon successful submission, log the user's information to the console.









# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
