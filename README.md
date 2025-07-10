Angular Authentication Task

This is a simple Angular standalone application with authentication and list fetching functionality. 
It demonstrates:
Login with mock API
Cookie/token-based authentication
Protected routes
Lazy-loaded modules
Signal-based state management
Mock backend via HTTP interceptor
Loading spinner UI
Angular Reactive Forms

Setup Instructions

1. Clone the Repository
https://github.com/AishuJoshi4/angular-auth-task.git

cd angular-auth-task

2. Install Dependencies

npm install

3. Run the App

ng serve

App will be live at: http://localhost:4200

Valid Login Credentials

Use the following to login:

Email: test@gmail.com

Password: password123

Architecture and Approach

This app uses Angular standalone components and Signal Store for lightweight state management. Routes are protected using guards, and modules are lazy-loaded for better performance. A mock interceptor simulates login and data APIs. The list page fetches items with a loading spinner. Signals manage UI state reactively without external state libraries.