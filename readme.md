Rentify
Rentify is a web application for renting properties. Users can register, log in, add properties, view properties, and like properties. This project includes both the frontend and backend components.

Table of Contents
Prerequisites
Installation
Running the Application
Environment Variables
Project Structure
Contributing
License
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14 or later)
npm (v6 or later)
MongoDB Atlas account
Installation
Backend
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/rentify.git
cd rentify/rentify-backend
Install backend dependencies:

bash
Copy code
npm install
Frontend
Navigate to the frontend directory:

bash
Copy code
cd ../rentify-frontend
Install frontend dependencies:

bash
Copy code
npm install
Running the Application
Backend
Create a .env file in the rentify-backend directory with the following contents:

env
Copy code
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
Start the backend server:

bash
Copy code
npm start
Frontend
Navigate to the rentify-frontend directory (if not already there):

bash
Copy code
cd ../rentify-frontend
Start the frontend development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

Environment Variables
The backend uses environment variables to configure the MongoDB connection and JWT secret. Ensure you have a .env file in the rentify-backend directory with the following variables:

MONGO_URI: Your MongoDB connection string.
JWT_SECRET: Your secret key for JWT.
Project Structure
Backend
lua
Copy code
rentify-backend/
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Property.js
├── routes/
│   ├── auth.js
│   └── properties.js
├── .env
├── server.js
└── package.json
Frontend
java
Copy code
rentify-frontend/
├── public/
├── src/
│   ├── actions/
│   ├── components/
│   ├── reducers/
│   ├── store/
│   ├── App.js
│   ├── index.js
│   └── types.js
├── .env
└── package.json
Contributing
Contributions are always welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more information.

This README file provides an overview of the project, including installation instructions, project structure, and contribution guidelines. Adjust the details as necessary to fit your specific project setup and requirements.





#   r e n t i f y  
 