# NoteForge

NoteForge is a basic MERN stack (MongoDB, Express.js, React, Node.js) application that allows users to create, read, update, and delete (CRUD) notes. The frontend is built using Vite and deployed on Netlify, while the backend is deployed as serverless functions using AWS Lambda.

## Features
- User authentication 
- Create, Read, Update, and Delete (CRUD) operations on notes
- Responsive UI with React and Tailwind CSS
- API integration with Express.js and MongoDB
- Serverless deployment for scalability and cost efficiency

## Tech Stack
### Frontend:
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios for API requests
- Netlify for deployment

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- AWS Lambda (Serverless deployment)
- dotenv for environment variables

## Folder Structure
```plaintext
NoteForge/
├── frontend/         # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components (Dashboard, Login, etc.)
│   │   ├── App.jsx       # Main application component
│   │   ├── main.jsx      # Entry point
│   ├── public/
│   │   ├── _redirects    # Netlify redirect file
│   ├── vite.config.js    # Vite configuration
│   ├── package.json      # Dependencies & scripts
│   ├── netlify.toml      # Netlify configuration
│
├── backend/          # Backend (Node.js + Express)
│   ├── src/
│   │   ├── routes/       # API routes (notes, users, etc.)
│   │   ├── controllers/  # Business logic for routes
│   │   ├── models/       # Mongoose models
│   ├── package.json      # Dependencies & scripts
│   ├── server.js         # Express server setup (for local dev)
│
├── README.md         # Project documentation
```

## Deployment
### Frontend Deployment (Netlify)
```sh
netlify deploy --prod
```
Make sure the frontend is built before deployment:
```sh
npm run build
```

### Backend Deployment (Serverless - AWS Lambda)
Install `serverless` if not installed:
```sh
npm install -g serverless
```
Deploy backend using:
```sh
serverless deploy
```

## How to Run Locally
### Backend (Express API)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the local server:
   ```sh
   npm run dev
   ```

### Frontend (Vite React App)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```


## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to branch (`git push origin feature-name`)
5. Open a pull request


