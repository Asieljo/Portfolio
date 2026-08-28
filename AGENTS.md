## Project Overview

This is my portfolio, it was made with HTML and CSS. But i want to update it, so you will implement the following rules, styles, architecture, conventions and more. Don´t delete the assets, data flow, elements and info already put into the project, just transform the only necessary to acomplish the update.

### Main technologies

- Language: JavaScript
- Framework: React
- Build tool: Vite
- Package manager: yarn
- State management:
- Database: non-existent
- Testing: jest
- Styling: sass
- Routing: react router dom (<BrowserRouter> + <Routes> + <Route> pattern)
- Conventions: BEM methodology
- Base dependencies: react-router-dom, web-vitals, vite-plugin-svgr, react-hot-toast

---

## Project Structure

Component-based architecture with styles co-located, BEM methodology and a centralized Sass architecture for shared resources (variables, mixins and global styles).

```
src/
├── assets/         # Images, icons, svg
├── components/     # Reusable UI components
|	├── component1/
│   │   ├── Component1.jsx
│   │   └── Component1.styles.scss 
│   │
├── pages/          # Application pages
|	├── page1/
│   │   ├── Page1.jsx
│   │   └── Page1.styles.scss 
├── features/       # Feature-specific logic
├── hooks/          # Custom hooks
├── services/       # API and external services
├── utils/          # Utility functions
├── store/          # Redux/ redux toolkit
├── styles/
│   ├── _variables.scss      # global variables
│   ├── _mixins.scss        # reusable tools
│   ├── _functions.scss      # style functions
│   └── index.styles.scss    # global styles
│
├── App.jsx     # root doc
└── main.jsx    # entry point
```

**Component folder naming convention:** each component resides in its own PascalCase folder (e.g., Button/) with the .jsx and .styles.scss files co-located inside.

## Development Commands

If there is no yarn you will install it first, then run the respective command

**Create project:** yarn create vite project-name

**Install dependencies locally:** yarn add dependency

**Install dependencies globally:** yarn global add dependency

**Run development server:** yarn dev

**Build:** yarn build

**Run tests:** yarn test

**Run linting:** yarn lint

---

## Coding Guidelines

### General

- Keep code simple and readable.
- Prefer small, focused functions.
- Avoid unnecessary abstractions.
- Do not duplicate logic when it can reasonably be reused.
- Do not introduce dependencies unless necessary.
- Follow the existing patterns of the project.
- Always use ; at the end of imports, functions and more places where appropiate.

### Naming

- Use descriptive names.
- Use consistent naming conventions already present in the project.
- Avoid unnecessary abbreviations.
- Components in PascalCase, hooks prefixed with "use", utility functions in camelCase.
- The classname´s will use conventions
- For SCSS styles with BEM methodology, avoid encapsulating multiple elements. Its just necessary with one, example: "landing__section" and "landing__btn" not "landing__section" and "landing__section__btn" 

### Comments

- Do not add comments that merely describe obvious code.
- Comment on decisions, non-obvious logic, or significant constraints.

---

## Architecture Rules

- Respect the existing project architecture.
- Do not move or rename files unless necessary.
- Prefer extending existing patterns instead of introducing new ones.
- Keep business logic separate from presentation when applicable.
- Reusable logic should not be unnecessarily duplicated across components.

---

## State Management

Depending on state management

- Advance global state: Redux or Redux Toolkit in store/. You will install the following dependencies to use Redux or Redux Toolkit: redux or redux-toolkit (depending on state management), react-redux, redux-logger, redux-persist (optional, if there is a process related to it, install it)
- Local & global component state  → useState and useContext.
- Do not use Redux state when the state is simple, use useState and useContext instead

---

## File Modification Rules

Before modifying a file:

1. Read the existing implementation.
2. Understand how the file is used.
3. Check for related files that may also need changes.
4. Preserve existing conventions unless there is a clear reason to change them.

Avoid rewriting entire files when a small targeted change is sufficient.

---

## Dependencies

Before adding a new dependency:

1. Check whether the project already has a solution.
2. Prefer built-in platform or framework functionality when appropriate.
3. Avoid adding dependencies for trivial functionality.
4. Update the relevant configuration or documentation if necessary.
5. For the base dependencies mentioned, use them correctly

---

## Assets

- Images or icons you will transform them into components
- Svgs you will also transform them into components (you will need to install the vite-plugin-svgr before if you don´t)

## Testing

When modifying behavior:

- Add or update tests when the project has a testing setup.
- Test important edge cases.
- Do not modify tests simply to make incorrect behavior pass.
- Ensure existing tests still pass.

---

## Error Handling

- Handle expected errors explicitly.
- Do not silently ignore errors.
- Provide useful error messages when appropriate.
- Preserve existing error-handling patterns.

---

## Environment Variables

- Use environment variables prefixed with VITE_*
- Never commit `.env` files containing secrets.

---

## Security

- Never expose secrets, API keys, passwords, or tokens.
- Avoid introducing known security risks.

---

## Before Completing a Task

Before considering a task complete:

1. Check that the code builds successfully.
2. Run relevant tests.
3. Run linting if available.
4. Verify that the requested behavior works.
5. Check for unintended side effects.
6. Remove debugging code and unused imports.
7. Keep the changes focused on the requested task.

---

## Agent Behavior

When working on this project:

- First inspect the relevant files before making changes.
- Do not assume project structure or conventions without checking.
- Prefer minimal, focused changes.
- Ask for clarification only when necessary.
- Do not modify unrelated code.
- Do not perform large refactors unless explicitly requested.
- Explain important architectural decisions when relevant.

---

## Definition of Done

A task is complete when:

- The requested functionality is implemented.
- Existing project conventions are respected.
- Relevant tests pass.
- No obvious regressions were introduced.
- The code is clean and understandable.
- No unrelated changes were made.