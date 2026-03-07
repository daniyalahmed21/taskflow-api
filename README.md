# TaskFlow API

TaskFlow is a comprehensive task management system built with NestJS and PostgreSQL. It provides a robust backend for managing projects, tasks, and users with secure authentication and role-based access control.

## Features

- **User Management**: Create, retrieve, and delete users.
- **Authentication**: Secure login with JWT tokens.
- **Authorization**: Role-based access control (Admin, User).
- **Project Management**: Create and manage projects.
- **Task Management**: Create and manage tasks with status tracking.
- **Profile Management**: Users can view their own profile.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Authentication**: [JWT](https://jwt.io/)
- **Validation**: [Class-validator](https://github.com/typestack/class-validator)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd taskflow-api
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

   Update the following variables in `.env`:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_username
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=taskflow
   JWT_SECRET=your_secret_key
   ```

## Database Setup

Run database migrations to create tables:

```bash
npm run typeorm:run
# or
pnpm run typeorm:run
```

## Running the Application

Start the development server:

```bash
npm run start:dev
# or
pnpm run start:dev
```

The server will start at `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get JWT token

### Users

- `GET /users` - Get all users (Admin only)
- `GET /users/profile` - Get current user profile
- `DELETE /users/:id` - Delete a user (Admin only)

### Projects

- `GET /projects` - Get all projects
- `GET /projects/:id` - Get a project by ID
- `POST /projects` - Create a new project (Admin only)
- `PUT /projects/:id` - Update a project (Admin only)
- `DELETE /projects/:id` - Delete a project (Admin only)

### Tasks

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a task by ID
- `POST /tasks` - Create a new task (Admin only)
- `PUT /tasks/:id` - Update a task (Admin only)
- `DELETE /tasks/:id` - Delete a task (Admin only)

## Development

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_HOST` | PostgreSQL host | `localhost` |
| `DATABASE_PORT` | PostgreSQL port | `5432` |
| `DATABASE_USERNAME` | PostgreSQL username | `postgres` |
| `DATABASE_PASSWORD` | PostgreSQL password | `password` |
| `DATABASE_NAME` | Database name | `taskflow` |
| `JWT_SECRET` | JWT signing secret | `your_secret_key` |
| `JWT_EXPIRATION_TIME` | Token expiration time | `3600s` |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.