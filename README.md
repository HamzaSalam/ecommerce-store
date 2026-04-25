# Ecommerce Store

A full-stack MERN (MongoDB, Express, React, Node.js) ecommerce application with pnpm workspaces.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB Atlas, Mongoose
- **Frontend**: React, Vite, Tailwind CSS
- **Package Manager**: pnpm (workspaces)
- **Database**: MongoDB Atlas (cloud)

## Project Structure

```
ecommerce-store/
├── pnpm-workspace.yaml
├── backend/              # Express API
│   ├── src/
│   │   ├── config/      # Database connection
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── services/
│   │   └── utils/
│   └── .env.example
└── frontend/           # React app
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── hooks/
    │   └── utils/
    └── tailwind.config.js
```

## Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Configure environment variables**
   
   Copy `.env.example` to `.env` in backend folder and add your MongoDB Atlas connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/ecommerce?retryWrites=true&w=majority
   ```

3. **Run the app**
   ```bash
   # Backend (port 5000)
   cd backend && pnpm dev
   
   # Frontend (port 3000) - in another terminal
   cd frontend && pnpm dev
   ```

   Or run both from root:
   ```bash
   pnpm --filter backend dev
   pnpm --filter frontend dev
   ```

## Scripts

### Backend
- `pnpm run dev` - Development with nodemon
- `pnpm run start` - Production

### Frontend
- `pnpm run dev` - Vite dev server
- `pnpm run build` - Production build
- `pnpm run preview` - Preview production build

## License

MIT