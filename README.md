# 📦 React Template

A modern React project template powered by **Vite**, **Vitest**, **TypeScript**, **React Router**, **Zod**, **React Query**, **ESLint**, **Prettier**, **Husky**, **Commitizen**, **Commitlint** and a **feature-based folder structure**.

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

### 🧪 Vitest

Blazing fast unit testing powered by Vite. Supports TypeScript out of the box and integrates seamlessly with your development workflow.

Run tests with (watch):

```bash
npm run test
```

Generate a coverage report with:

```bash
npm run test:coverage
```

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

### 📦 Included Libraries

This template includes a few essential libraries to help you build robust and scalable applications:

- @tanstack/react-query – Powerful asynchronous state management and data fetching for React.
- clsx – A tiny utility for conditionally joining classNames.
- zod – Type-safe schema validation with great TypeScript support.

These are ready to use out of the box and commonly used in modern React projects.

---

### 🧭 Routing

This template includes React Router for client-side navigation. The current setup uses declarative routing with components like `<BrowserRouter>`, `<Routes>`, and `<Route>`, making it easy to define and manage application routes in a clean and scalable way.

> ⚠️ Don't forget to use the `<Link>` component for internal linking!

---

## 🧰 Dev-Only Console Wrapper

To avoid logging in production, use the built-in devConsole utility:

```typescript
import { devConsole } from '@/utils/dev-console';

devConsole.log('This will only log in development mode');
```

Supported methods:

- log, warn, error, info, debug, trace
- group, groupCollapsed, groupEnd, table

---

## 🪤 Try catch utility

A lightweight utility function for handling asynchronous (or synchronous) operations with a clean, tuple-based error handling pattern.

```typescript
import { tryCatch } from '@/utils/try-catch';

const [error, result] = await tryCatch(promise);
const [error, result] = await tryCatch(callBack, arg1, arg2);
const [error, result] = await tryCatch(async () => {
    const result1 = await doSomething1();
    const result2 = await doSomething2();

    return [...result1, ...result2];
});
```

Why use it?

- Eliminates the need for repetitive try/catch blocks.
- Returns a consistent [Error | null, Result | null] tuple.
- Works with both synchronous and asynchronous functions.
- Improves readability and simplifies error handling logic.

```typescript
const [err, data] = await tryCatch(fetchUser(userId));

if (err) {
    // Do something with error
}

// Do something with data
```

---

## 📦 Scripts Summary

| Script        | Description                            |
| ------------- | -------------------------------------- |
| dev           | Start Vite dev server                  |
| build         | Type-check and build for production    |
| preview       | Preview production build               |
| lint          | Run ESLint                             |
| lint:fix      | Run ESLint with auto-fix               |
| format        | Format code with Prettier              |
| prepare       | Install Husky hooks                    |
| commit        | Use Commitizen for commits             |
| test          | Use Vitest in watch mode               |
| test:coverage | Use Vitest to generate coverage report |

## 🧭 Project Conventions

To ensure consistency and maintainability across our codebase, we follow a set of conventions agreed upon by the team. Below is an overview of these conventions:

### 📁 Directory Structure: Feature-Based Pattern

We use a feature-based directory structure. This means:

Top-level directories include shared resources (components, types, styles, assets, etc.)
Each feature has its own directory containing all related files.

Example:

```
src/
├── components/
│   └── Button/
│       └── Button.tsx
├── features/
│   └── auth/
│       ├── components/
│       │   ├── login-form.module.scss
│       │   └── login-form.tsx
│       ├── types/
│       │   ├── auth-states.ts
│       │   └── user-details.ts
│       └── utils/
│           ├── login.ts
│           └── logout.ts
```

### 📂 Naming Conventions

#### Folder Names

- Use kebab-case for all folder names.
    - ✅ login-form
    - ❌ LoginForm

#### File Names

- Use kebab-case for all files
    - ✅ login-form.tsx
    - ❌ LoginForm.tsx

Examples:

```
login-form.ts
login-form.tsx
login-form.module.scss
```

### 🌐 Language

- All code (variables, functions, types, etc.) is written in English.
- Dutch (or other languages) is only used for hardcoded user-facing text.

### 📦 Exporting

- Use named exports for all functions, variables, and components:

```typescript
export function MyComponent();
export function myFunction();
```

### 🧩 Props & Component Typing

- Props are defined using Readonly and destructured inside the function body.
- The props type follows the convention: ComponentNameProps.

Example:

```typescript
type MyComponentProps = {
    prop1: string;
    prop2: boolean;
};

export function MyComponent(props: Readonly<MyComponentProps>) {
    const { prop1, prop2 } = props;

    // Component logic
}
```

### 🧠 Naming: Components & Functions

- Components → PascalCase
- Functions → camelCase

Example:

```typescript
export function MyComponent();
export function myFunction();
```

### 🌿 Git Branch Naming

Branches must include the **issue number** and be written in **English**. Use the following format:

`purpose/developername-issuenumber-description`

Examples:

- feature/john-10-add-button-component
- bug/john-11-fix-sass-warning
- refactor/-john-12-rewrite-component-x-according-to-conventions

### 🎨 CSS Class Names & clsx

- All CSS class names use kebab-case.
- Use bracket notation for the styles property access notation.
- Use clsx for conditional or concatenated class names.

Example:

```typescript
import { clsx } from 'clsx';
import styles from './my-component.module.scss';

✅ const className = clsx(styles['button'], isActive && 'button--active');
❌ const className = `${styles.button} ${isActive ? 'button--active' : ''}`;
```

### 🖼️ SVG Usage

- Store SVGs as separate files in the appropriate assets folder (either feature-specific or shared).
- Import SVGs as React components.
- Do not inline SVGs in code.

Example:

```typescript
import Logo from './assets/logo.svg?react';

<Logo />
```

### 🧠 React Query Conventions

To ensure consistency and maintainability across our codebase, we follow a set of conventions when working with React Query for data fetching and mutations.

#### 📁 Directory Structure

Each feature module contains its own query and mutation logic, organized as follows:

- **constants/query-keys.ts or constants/mutation-keys.ts**

    - Stores the primary query or mutation keys used throughout the feature.

- **queries/ or mutations/ directory**
    - Contains the actual query or mutation functions, each in its own file.

#### 🔑 Query & Mutation Keys

Keys are defined as constants in the appropriate query-keys.ts or mutation-keys.ts file.

Naming convention:

```ts
// ../constants/query-keys.ts
export const GET_POSTS_PRIMARY_QUERY_KEY = 'get-posts';

// ../constants/mutation-keys.ts
export const CREATE_POST_PRIMARY_MUTATION_KEY = 'create-post';
```

These keys serve as the first element in the query key array passed to `useQuery` or `useMutation`.

#### 🧪 Query & Mutation Functions

Each query or mutation is placed in a separate file named after its purpose. Example: get-posts.ts for fetching posts.

The function is exported and typed using React Query's built-in types:

```ts
// ../queries/get-posts.ts
import { QueryFunction } from '@tanstack/react-query';

export const getPosts: QueryFunction<Post[]> = async ({ queryKey, signal }) => {
    // implementation
};

// ../mutations/create-post.ts
import { MutationFunction } from '@tanstack/react-query';

export const createPost: MutationFunction<Post, NewPostPayload> = async payload => {
    // implementation
};
```

#### ✅ Usage Example

```ts
import { useQuery } from '@tanstack/react-query';
import { GET_POSTS_PRIMARY_QUERY_KEY } from '@/features/posts/constants/query-keys';
import { getPosts } from '@/features/posts/queries/get-posts';

const query = useQuery({
    queryKey: [GET_POSTS_PRIMARY_QUERY_KEY],
    queryFn: getPosts,
});
```
