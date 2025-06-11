# 📦 React Template

A modern React project template powered by **Vite**, **Vitest**, **TypeScript**, **ESLint**, **Prettier**, **Husky**, **Commitizen**, and a **feature-based folder structure**.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## 🧰 Tooling & Features

### ✅ TypeScript

Strongly typed JavaScript for scalable and maintainable code.

### ⚡ Vite

Fast and modern build tool for frontend development.

### 🧹 ESLint

Linting is configured with:

- @eslint/js
- typescript-eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- eslint-plugin-react-x
- eslint-plugin-react-dom
- eslint-plugin-prettier
- eslint-plugin-jsx-a11y
- eslint-plugin-vitest

Rules include:

- Prettier formatting enforcement
- React best practices
- TypeScript type checking

Run linting with:

```bash
npm run lint
```

### 🎨 Prettier

Code formatting is enforced via Prettier. To format all files:

```bash
npm run format
```

### 🐶 Husky + lint-staged

Git hooks are managed with Husky. On commit, lint-staged ensures only staged files are linted and formatted.

### 📝 Commitizen

Commit messages follow the Conventional Commits standard. Use:

```bash
npm run commit
```

This will prompt you with a structured commit message interface.

> ⚠️ Manual commits via an IDE UI are blocked by commitlint if it doesn't follow the Conventional Commits standard.

---

## 🗂️ Project Structure

This template uses a feature-based folder structure:

```
src/
├── components/
├── utils/
├── constants/
├── features/
│   ├── featureA/
│   │   ├── components/
│   │   ├── utils/
│   │   └── ...
```

Each feature contains its own domain-specific logic, components, and utilities. Shared functions or logic should be in the top level directories.

---

## 🧪 Dev-Only Console Wrapper

To avoid logging in production, use the built-in devConsole utility:

```typescript
import { devConsole } from '@/utils/dev-console';

devConsole.log('This will only log in development mode');
```

Supported methods:

- log, warn, error, info, debug, trace
- group, groupCollapsed, groupEnd, table

---

## 👓 Try catch utility

A lightweight utility function for handling asynchronous (or synchronous) operations with a clean, tuple-based error handling pattern.

```typescript
import { tryCatch } from '@/utils/try-catch';

const [error, result] = await tryCatch(someAsyncFunction, arg1, arg2);
```

Why use it?

- Eliminates the need for repetitive try/catch blocks.
- Returns a consistent [Error | null, Result | null] tuple.
- Works with both synchronous and asynchronous functions.
- Improves readability and simplifies error handling logic.

```typescript
const [err, data] = await tryCatch(fetchUser, userId);

if (err) {
    // Do something with error
}

// Do something with data
```

---

## 📦 Scripts Summary

| Script  | Description                         |
| ------- | ----------------------------------- |
| dev     | Start Vite dev server               |
| build   | Type-check and build for production |
| preview | Preview production build            |
| lint    | Run ESLint                          |
| format  | Format code with Prettier           |
| prepare | Install Husky hooks                 |
| commit  | Use Commitizen for commits          |
