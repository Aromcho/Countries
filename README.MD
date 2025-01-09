
```markdown
# Country Info App

This project is a Full-Stack application for displaying information about countries. It includes a backend built with Node.js and a frontend built with React.

## Features

- **List of Countries**: Displays a list of countries with details.
- **Country Details Page**: Provides detailed information about a selected country, including:
  - Population history (graph).
  - Bordering countries.
  - Country flag.

---

## Tech Stack

### Backend:
- Node.js
- Express.js
- Axios

### Frontend:
- React.js
- Material-UI
- React Router
- Chart.js

---

## Installation and Setup

### Prerequisites
1. Node.js and npm installed ([Download](https://nodejs.org/)).
2. Git installed ([Download](https://git-scm.com/)).

---

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variables:
   ```plaintext
   PORT=5000
   BASE_URL_NAGER=https://date.nager.at/api/v3
   BASE_URL_COUNTRIES=https://countriesnow.space/api/v0.1
   ```

4. Start the server:
   ```bash
   npm run start
   ```

   The backend will run on `http://localhost:5000`.

---

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variable:
   ```plaintext
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

   The frontend will run on `http://localhost:3000`.

---

## Running the Application
1. Start both the backend and frontend simultaneously:
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:5173`

2. Open `http://localhost:5173` in your browser to view the application.

---

## Folder Structure

### Backend:
```
backend/
├── routes/
├── controllers/
├── models/
├── middleware/
└── server.js
```

### Frontend:
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   └── index.js
└── public/
```

---

## API Documentation

1. **Get Available Countries**
   - Endpoint: `/api/countries`
   - Description: Fetches a list of available countries.
   
2. **Get Country Info**
   - Endpoint: `/api/country/:code`
   - Description: Fetches details about a specific country, including:
     - Bordering countries.
     - Population history.
     - Country flag.

---

## Additional Notes

1. **Styling**: Uses Material-UI for consistent and modern styling.
2. **Responsive Design**: The application is mobile-friendly.
3. **Error Handling**: Displays appropriate messages when API calls fail.

---

## Future Improvements
1. Add unit tests for the backend and frontend.
2. Optimize performance with caching strategies.

---

### Authors
Developed by [Arom Aguilar](#).
```

---
