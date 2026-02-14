# ClassNova Backend

Node.js/Express backend API for the ClassNova student management system.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file in the backend directory using `.env.example` as a template.

```bash
cp .env.example .env
```

Update the database credentials in `.env`.

### Run Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

### Run Production Server

```bash
npm start
```

## Project Structure

- `routes/` - API route definitions
- `controllers/` - Business logic and request handlers
- `models/` - Database models and queries
- `middleware/` - Custom middleware functions
- `config/` - Configuration files (database, etc.)

## API Routes

Routes will be defined in the `routes/` directory.
