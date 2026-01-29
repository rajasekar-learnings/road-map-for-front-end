/*
🧭 𝗥𝗘𝗔𝗖𝗧.𝗝𝗦 𝗥𝗢𝗔𝗗𝗠𝗔𝗣 (Every Concept from Beginner → Advanced)

🟢 1. Prerequisites
    Before learning React, you must be strong in:
    HTML5 (semantic tags, forms, attributes)
     CSS3 (flexbox, grid, animations)
     JavaScript (ES6+)
    ✅  Destructuring, Spread/Rest
    ✅  Arrow functions
        Modules (import/export)
        Promises, async/await
        Classes & OOP basics
        DOM manipulation
     Basic Git & npm knowledge
     Node.js & npm installed

🟩 2. React Fundamentals
    What is React? Why use it?
    SPA (Single Page Application) concept
    Virtual DOM & reconciliation
    React rendering flow
    Declarative vs Imperative UI
    JSX (JavaScript XML)
    Components — the building blocks

🟢 3. Setting Up React
    Using Vite, CRA, or Next.js
    Folder structure best practices
    JSX Rules (single parent, expressions, fragments)
    Embedding expressions in JSX
    Babel and transpilation basics

🟩 4. Components Deep Dive
    Functional components (most used)
    Class components (legacy understanding)
    Component naming conventions
    Props (data passing)
        Props destructuring
        Default props
        Prop drilling problem
    Children prop
    Conditional rendering
        &&, ternary, early return patterns
    Lists & keys (.map() rendering)

🟢 5. State Management (Local State)
    useState hook
    Updating state correctly (functional updates)
    State batching
    Lifting state up
    Controlled vs uncontrolled components
    Common patterns (toggle, counter, form input handling)

🟩 6. Handling Events
    onClick, onChange, onSubmit
    Event object in React
    Synthetic events
    Passing arguments to event handlers
    Preventing default actions

🟢 7. Conditional Rendering & Lists
    Inline if with logical &&
    Conditional component rendering
    Rendering lists using .map()
    Keys importance & re-rendering issues
    Empty / fallback UI

🟩 8. Styling in React
    Inline styles
    CSS Modules
    Styled Components
    Tailwind CSS
    Emotion / Sass
    Dynamic classNames (classnames library)
    Responsive & dark mode styling

🟢 9. React Hooks (Core Concepts)
    ⚡ The most critical part of modern React

    Hook	                            Description

    useState	                        State management
    useEffect	                        Side effects, fetching, cleanup
    useContext	                        Global state using Context API
    useRef	                            Accessing DOM elements, persisting values
    useMemo	                            Memoizing expensive computations
    useCallback	                        Preventing unnecessary re-renders
    useReducer	                        Complex state logic (Redux alternative)
    useLayoutEffect	                    Synchronous DOM mutations
    useImperativeHandle	                Customizing refs
    useId	                            Unique IDs for accessibility
    useTransition, useDeferredValue	    Concurrent features (React 18+)

🟩 10. useEffect Deep Dive
    Dependency array
    Cleanup functions
    Common pitfalls (infinite loops)
    useEffect for fetching data
    Difference between useEffect and useLayoutEffect

🟢 11. Forms & Inputs
    Controlled components
    Uncontrolled components (Refs)
    Multiple inputs handling
    Form validation
        Manual validation
        Using libraries: Formik / React Hook Form / Yup
    File inputs

🟩 12. Refs & DOM Manipulation
    useRef for accessing DOM elements
    Persisting mutable values across renders
    Forwarding refs (React.forwardRef)
    Using refs for animations and focus

🟢 13. Component Communication
    Parent → Child (props)
    Child → Parent (callbacks)
    Sibling → Sibling (lifting state up)
    Global state (Context API / Redux)

🟩 14. Context API (Global State)
    CreateContext & useContext
    Context Provider / Consumer
    Nested context providers
    Avoiding re-renders with memoization
    Context + useReducer combo

🟢 15. Performance Optimization
    React.memo
    useMemo, useCallback
    Lazy loading (React.lazy, Suspense)
    Code splitting
    Dynamic imports
    Avoiding re-renders with key usage
    Profiler API

🟩 16. React Router (Navigation)
    react-router-dom setup
    <BrowserRouter>, <Routes>, <Route>
    Dynamic routes & params
    useNavigate, useParams, useLocation
    Nested routes
    Protected routes (auth check)
    Redirection

🟢 17. Fetching Data
    Fetch API / Axios
    Data fetching with useEffect
    Error & loading states
    AbortController for cancelling requests
    React Query / TanStack Query (for caching)
    Handling multiple API calls

🟩 18. Custom Hooks
    What are custom hooks?
    Creating reusable hooks (e.g. useFetch, useForm, useToggle)
    Rules of hooks (naming, call order)
    Sharing logic across components

🟢 19. Error Handling
    try/catch in async code
    Error boundaries (componentDidCatch)
    Fallback UI for errors
    Using libraries like react-error-boundary

🟩 20. State Management (Advanced)
    When local state isn’t enough
    Redux Toolkit
        Store, reducer, actions, slices
        Async Thunks
        Selectors & memoization
    Zustand / Jotai / Recoil (lightweight alternatives)
    Context vs Redux — when to choose which

🟢 21. Advanced Patterns
    Compound components
    Render props
    Higher Order Components (HOC)
    Controlled vs uncontrolled components pattern
    Prop drilling solutions (Context / Redux)
    Hooks composition pattern

🟩 22. Authentication in React
    Login, Register, Logout flows
    JWT-based authentication
    Token storage (localStorage / cookies)
    Protecting routes
    Auto login / refresh tokens
    Role-based access

🟢 23. Animations & UX
    CSS transitions
    Framer Motion (powerful animation lib)
    React Spring basics
    Loading spinners, skeleton loaders
    Toasts & notifications

🟩 24. File Upload & Forms
    File input + preview
    Uploading to backend / Cloudinary
    Handling multiple files
    Progress bars

🟢 25. Testing in React
    Unit testing with Jest
    Component testing with React Testing Library
    Mocking fetch & API calls
    Snapshot testing
    E2E testing (Cypress / Playwright)

🟩 26. Accessibility (a11y)
    ARIA attributes
    Keyboard navigation
    Focus management
    Screen reader testing

🟢 27. Project Architecture
    Folder structure (feature-based / atomic design)
    Separation of concerns (UI vs Logic)
    Reusable components & hooks
    Config & constants management
    Environment variables

🟩 28. Deployment
    Build & optimize React app
    Deployment platforms:
        Vercel
        Netlify
        Render
        GitHub Pages
    Environment variables in production
    CI/CD integration

🟢 29. Advanced React (React 18+)
    Concurrent rendering
    Suspense for Data Fetching
    useTransition
    useDeferredValue
    Server Components (Next.js 13+)
    Streaming SSR concepts

🟩 30. Integrations
    APIs (REST, GraphQL)
    Payment gateways (Stripe, Razorpay)
    Firebase integration (auth, DB, hosting)
    Socket.io for real-time apps
    Chart libraries (Recharts, Chart.js)
    Map libraries (Leaflet, Google Maps)

🟢 31. Real-World Project Ideas
    ✅ Portfolio website (responsive, animated)
    ✅ Todo App (CRUD, localStorage)
    ✅ Weather App (API integration)
    ✅ E-commerce frontend (cart, filters, checkout)
    ✅ Blog platform (Markdown + CRUD + auth)
    ✅ Dashboard (charts + tables + filters)
    ✅ Chat app (Socket.io + React)
    ✅ Notes app with drag & drop
    ✅ URL shortener frontend
    ✅ React + Node full-stack project

🟩 32. Bonus Topics
    Progressive Web Apps (PWA)
    Offline caching with Service Workers
    Next.js fundamentals
    React Native (mobile apps)
    Micro frontends concept
*/

/*
🟢 React Basics & Setup

    1. Introduction to React JS
    2. React JS Roadmap for Beginners
    3. Create React App (CRA)
    4. React Folder Structure
    5. JSX Basics
    6. Components in React (Functional & Class)
    7. Import & Export Components
    8. JSX Attributes & Expressions
    9. Styling Components in React

🟢 Props, State & Core Concepts

    10. Props in React
    11. Rendering Lists using map()
    12. Functional Components – Different Ways
    13. Children Props
    14. React Fragments
    15. Event Handling in React
    16. State in React (Class Components)
    17. setState & Binding
    18. useState Hook
    19. Background Color Changer App
    20. Counter App using React
    21. Props Destructuring

🟢 Small Apps & UI Logic

    22. Todo App using React
    23. Two-Way Data Binding
    24. Calculator App using React
    25. Virtual DOM & Reconciliation
    26. Conditional Rendering

🟢 Hooks Deep Dive

    27. useEffect Hook
    28. API Calls using useEffect
    29. Using Static Images in React
    30. useRef Hook – Part 1
    31. useRef Hook – Part 2
    32. Custom Hooks
    33. Props Drilling
    34. Context API (useContext)
    35. useMemo Hook – Part 1
    36. useMemo Hook – Part 2
    37. Child to Parent Data Communication

🟢 Routing & Navigation

    38. React Routing Basics
    39. Nested Routing
    40. Query Parameters in React Router
    41. Link vs Anchor Tag
    42. Error Handling in React Routing

🟢 Lifecycle, Forms & Optimization

    43. Component Lifecycle Methods – Part 1
    44. Component Lifecycle Methods – Part 2
    45. Installing Bootstrap in React
    46. Form Handling in React
    47. Form Validation in React
    48. API Integration in React
    49. Axios in React
    50. Lazy Loading in React
    51. Lazy Loading with Routing
    52. Higher Order Components (HOC)
    53. PropTypes in React
    54. Default Props
    55. JSX Rules
    56. React Portals
    57. React Portals Example

🟢 CRUD & Reducer

    58. CRUD Operations – Part 1
    59. CRUD Operations – Part 2 (with Validation)
    60. useReducer Hook – Part 1
    61. useReducer Hook – Part 2

🟢 Redux & State Management

    62. Introduction to Redux
    63. Redux Implementation
    64. Using Redux in React
    65. Action Creators in Redux
    66. Combine Reducers
    67. Todo App using Redux
    68. Redux Thunk (Middleware)

🟢 Modern Tooling & Deployment

    69. Vite + React Setup
    70. Redux Toolkit Introduction
    71. Redux Toolkit with Example
    72. Multiple Slices in Redux Toolkit
    73. API Handling with Redux Toolkit
    74. Deploy React Application
    75. Host React App on Netlify
*/
