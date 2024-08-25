# Bajaj Finserv Full Stack Task

This project is a full-stack Next.js application developed for the Bajaj Finserv Full Stack Task. It processes input data and provides filtered results based on user selection.

## Features

- REST API endpoint that handles both GET and POST requests
- Frontend interface for submitting JSON data and viewing filtered results
- TypeScript implementation for improved type safety and developer experience
- Utilizes Next.js App Router for efficient routing and API handling

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for both frontend and API routes
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
```sh
git clone https://github.com/pavank-23/bajaj-finserv-task.git
cd bajaj-finserv task
```
2. Install dependencies
```sh
npm install
```
3. Running the app

For development:
```sh
npm run dev
```

For production:
```sh
npm run build
npm start
```

4. The application will be available at `http://localhost:3000`.

## API Endpoints

### POST /api/bfhl

Processes the input data.

Request body:
```json
{
"data": ["M","1","334","4","B","Z","a"]
}
```

Reponse:
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "numbers": ["1","334","4"],
  "alphabets": ["M","B","Z","a"],
  "highest_lowercase_alphabet": ["a"]
}
```

### GET /api/bfhl
Returns the operation code.

Response:
```json
{
  "operation_code": 1
}
```

Project Structure

- app/: Contains the main application code
- api/: API routes
- page.tsx: Main page component
- layout.tsx: Root layout component
- components/: Reusable React components
- types/: TypeScript type definitions
