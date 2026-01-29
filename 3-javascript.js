/*
🧭 𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧 𝗥𝗢𝗔𝗗𝗠𝗔𝗣 (Every Concept from Beginner → Advanced)

🟢 1. Core Foundations
    What is JavaScript
    History & versions (ES5 → ES6 → ESNext)
    How JS runs (JS Engine, Interpreter, JIT)
    Runtime environments (Browser vs Node.js)
    JS vs Java vs TypeScript

🟩 2. Basic Syntax
    Variables — var, let, const
    Data types
        Primitive (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
        Non-primitive (Objects, Arrays, Functions)
    Type conversion (implicit & explicit)
    Template literals
    Comments (single, multi-line)

🟢 3. Operators
    Arithmetic
    Assignment
    Comparison
    Logical (&&, ||, !)
    Bitwise
    Ternary operator
    Nullish coalescing (??)
    Optional chaining (?.)
    Spread (...) and Rest (...) operators

🟩 4. Control Flow
    if, else if, else
    switch statements
    for, while, do…while loops
    Loop control (break, continue)
    for…in vs for…of

🟢 5. Functions
    Function declarations & expressions
    Anonymous functions
    Arrow functions (=>)
    Default parameters
    Return values
    Function hoisting
    Higher-order functions
    Callback functions
    Pure vs impure functions

🟩 6. Scope & Closures
    Global scope
    Function scope
    Block scope
    Lexical scope
    Closure — definition, examples, and use-cases (e.g., data hiding, memoization)
    IIFE (Immediately Invoked Function Expression)

🟢 7. The this Keyword
    this in global, function, arrow, and object context
    this inside event handlers
    Losing context problem
    Fixing this with .bind()
    Arrow function’s lexical this

🟩 8. Objects & Prototypes
    Object creation (literal, constructor, class)
    Property access (dot & bracket notation)
    Object.keys(), Object.values(), Object.entries()
    Object destructuring
    Copying objects — shallow vs deep
    Object.freeze(), Object.seal()
    Prototype chain (__proto__)
    Object.create()
    Inheritance (class, extends, super)

🟢 9. Arrays
    Array creation ([], Array())
    Common methods:
        Add/remove: push, pop, shift, unshift, splice
        Iterate: forEach, map, filter, reduce, some, every, find, findIndex
        Sorting: sort, reverse
        Merging: concat, spread (...)
    Multi-dimensional arrays
    Shallow vs deep array copy
    Array destructuring

🟩 10. Strings
    Template literals
    Common methods: toUpperCase, toLowerCase, trim, split, slice, substring, replace, includes, startsWith, endsWith
    String immutability
    Tagged templates

🟢 11. Numbers, Math, Date
    Number conversions
    Math object methods (floor, ceil, round, random, etc.)
    Working with dates (Date object)
    Formatting time/date
    Timestamps

🟩 12. Type Coercion
    Implicit conversion (e.g., "5" + 2)
    Explicit conversion (Number(), String(), Boolean())
    Truthy & Falsy values
    Loose (==) vs Strict equality (===)

🟢 13. Destructuring & Spread
    Array and object destructuring
    Nested destructuring
    Default values
    Spread operator for merging/cloning
    Rest operator for variable arguments

🟩 14. DOM & Browser (For Frontend)
    DOM Tree (Document Object Model)
    Selecting elements (getElementById, querySelector)
    Modifying elements (innerText, innerHTML, style)
    Creating & removing elements
    Event handling (addEventListener)
    Event bubbling & capturing
    Event delegation
    Forms and input handling
    LocalStorage / SessionStorage / Cookies

🟢 15. Asynchronous JavaScript
    Synchronous vs Asynchronous
    Callbacks & callback hell
    Promises (then, catch, finally)
    async/await
    Promise methods (Promise.all, Promise.race, Promise.allSettled)
    Microtask queue vs macrotask queue
    Event loop & concurrency model

🟩 16. Error Handling
    try, catch, finally
    Throwing custom errors
    Error objects (Error, TypeError, etc.)
    Promise rejection handling (.catch, unhandledRejection)

🟢 17. Advanced Objects
    Property descriptors
    Getters & setters
    Symbols & hidden properties
    Iterators & Generators
    Proxy & Reflect API
    Object cloning & immutability patterns

🟩 18. Functional Programming
    Pure functions
    Immutability
    Higher-order functions
    Currying
    Function composition
    Closures in FP
    Map, filter, reduce patterns

🟢 19. ES6+ Modern Features
    let, const
    Template literals
    Destructuring
    Default & rest parameters
    Arrow functions
    Classes & inheritance
    Modules (import/export)
    Spread operator
    Promise, async/await
    Optional chaining (?.)
    Nullish coalescing (??)
    Dynamic import
    Private fields in classes (#name)

🟩 20. Modules & Bundlers
    CommonJS (require, module.exports)
    ES Modules (import/export)
    Named vs default exports
    Tree-shaking
    Webpack / Vite / Parcel basics

🟢 21. Memory & Performance
    Garbage collection basics
    Memory leaks (closures, timers, global vars)
    Event loop optimization
    Debouncing & throttling
    Async optimization (Promise.all)
    Big-O awareness for arrays/objects

🟩 22. Data Structures in JS
    Arrays, Objects
    Sets, Maps, WeakSet, WeakMap
    Stacks, Queues (implement using arrays)
    Linked lists (manual implementation)
    Trees (BFS, DFS traversal)
    Graph basics

🟢 23. Design Patterns (JS Specific)
    Module Pattern
    Revealing Module Pattern
    Singleton
    Factory
    Observer / Pub-Sub
    Prototype Pattern
    MVC Concept

🟩 24. Event Loop, Call Stack, and Web APIs
    Call stack
    Event queue
    Web APIs (DOM, fetch, timers)
    Microtasks (Promises) vs Macrotasks (setTimeout)
    Execution order visualized

🟢 25. Advanced Browser APIs
    Fetch API & AJAX
    XMLHttpRequest (legacy)
    WebSockets
    Web Workers
    Intersection Observer
    Geolocation API
    Clipboard API

🟩 26. Testing & Debugging
    Debugging with Chrome DevTools
    Breakpoints & call stack
    console methods (console.table, console.group, etc.)
    Unit testing with Jest
    Mocking & spying

🟢 27. TypeScript Fundamentals (Optional but Recommended)
    Why TypeScript
    Types, interfaces
    Enums, generics
    Classes with TS
    Type assertions
    Type narrowing
    Config (tsconfig.json)

🟩 28. JavaScript in Node.js
    Difference between browser JS & Node.js
    Global objects in Node
    CommonJS vs ESM
    Event loop in Node
    Streams, Buffers, File I/O
    Async patterns with Node APIs

🟢 29. Real-World Concepts
    Debounce & Throttle
    Deep vs Shallow copy
    Polyfills
    Shadowing variables
    Hoisting & Temporal Dead Zone
    Call, Apply, Bind
    Event delegation
    Memoization
    Currying

🟩 30. Security & Best Practices
    Avoid eval()
    Use strict mode ('use strict')
    Sanitizing inputs
    Preventing XSS
    Avoid global variable pollution
    Linting & formatting (eslint, prettier)

🟢 31. Projects to Practice
    Todo app (DOM + LocalStorage)
    Calculator (functions, DOM)
    Weather app (fetch API)
    Infinite scroll / lazy load
    Form validation
    Quiz app
    Real-time clock
    Notes app with CRUD
    E-commerce frontend (cart, localstorage)
    Chat UI (WebSockets demo)

🟩 32. Interview-Level Topics
    Event loop explanation
    Hoisting
    this binding
    Prototype inheritance
    Closure behavior
    Difference between == and ===
    Debounce vs Throttle
    Call, Apply, Bind
    Deep copy vs Shallow copy
    Promise chaining
    Microtask queue
    Polyfills for map, filter, bind, etc.
*/

/*

✅ JavaScript Interview Concepts (Master List)

Use this as your final revision checklist.

1. Core JavaScript Fundamentals

🔹 Execution Context
    Creation phase → memory allocation (hoisting)
    Execution phase → code runs line-by-line

🔹 Hoisting
    var → hoisted with undefined
    let and const → hoisted but not initialized (Temporal Dead Zone)
    Function declarations → fully hoisted

🔹 Scopes
    Global scope
    Function scope
    Block scope (let, const)
    Lexical scope

🔹 this Binding
    Depends on how a function is called:
    Implicit binding → obj.method()
    Explicit binding → call, apply, bind
    New binding → new Constructor()
    Default binding → window/global (strict mode → undefined)

2. Functions & Closures

🔹 Closures
    A function remembers variables from its parent scope even after the parent has executed.
    Used for:
        Data privacy
        Function factories
        Currying
        Memoization

🔹 Higher-Order Functions
    Functions that take or return other functions.

🔹 Currying
    sum(1)(2)(3)

🔹 Function Composition
    compose(f, g)(x) = f(g(x))

3. Prototypes & OOP

🔹 Prototype Chain
    Objects inherit from [[Prototype]].

🔹 Classes
    Syntactic sugar over prototypes
    constructor, methods, super, extends

🔹 Inheritance
    Prototype inheritance
    ES6 class inheritance

4. Asynchronous JavaScript

🔹 Event Loop
   Call stack
   Web APIs
   Callback Queue (macrotask queue)
    Microtask Queue (Promises, queueMicrotask)

🔹 Callbacks
    First async pattern, leads to callback hell.

🔹 Promises
    States: pending → fulfilled → rejected
    .then, .catch, .finally

🔹 Async/Await
    Syntactic sugar over promises.

🔹 Promise APIs
    Promise.all
    Promise.race
    Promise.allSettled
    Promise.any

🔹 Debounce vs Throttle
    Debounce → wait until user stops typing
    Throttle → run at fixed interval

5. DOM & Browser Concepts

    DOM tree
    Event bubbling & capturing
    Event delegation
    Web APIs (fetch, setTimeout, localStorage)

6. Event Propagation

🔹 Phases
    Capturing
    Target
    Bubbling

🔹 Stop events
    event.stopPropagation
    event.stopImmediatePropagation

🔹 Event Delegation
    Attach event to parent instead of multiple children.

7. Data Types & Memory

🔹 Primitive vs Reference
    Primitives stored by value; objects by reference.

🔹 Deep Copy vs Shallow Copy
    Shallow: spread, Object.assign
    Deep: JSON.parse(JSON.stringify), structuredClone

8. Modules

🔹 CommonJS
    require
    module.exports

🔹 ES Modules
    import
    export default
    Named export

9. Error Handling

    try/catch
    Custom errors
    Promise rejection handling

10. Performance Concepts

    Repaints & reflows
    requestAnimationFrame
    Minimize DOM manipulation
    Memoization
    Lazy loading

11. Browser Storage

    localStorage
    sessionStorage
    cookies
    IndexedDB

12. Security in JS

    Prevent XSS
    Avoid eval
    Sanitize inputs
    Use strict mode
    Avoid global variables

13. Node.js Concepts

    Event loop in Node
    CommonJS vs ESM
    Streams & buffers
    File I/O
    Middleware

14. Testing Concepts

    Unit tests (Jest)
    Mocking
    Spying
    Snapshots

15. Most Asked Coding Questions

    Implement debounce
    Implement throttle
    Polyfill for map, filter, reduce
    Polyfill for bind
    Flatten array
    Deep clone object
    Promise chaining
    Custom Promise implementation (advanced)

*/

/*
1. Coercion rules
2. let, var, const (TDZ , RefErr , how hoisting works)
3. Hoisting
4. Primitive and non-primitive data types
5. Async execution in JS (Event loop , microtask queue , macrotask queue) → important interview questions
6. Closures (code)
7. Currying — Normal & Infinite (code)
8. IIFE
9. Normal vs Arrow function
10. This keyword (code ex)
11. Prototypes and prototypal inheritance (code)
12. map, reduce, filter, forEach (practice questions)
13. for…of vs for…in
14. Callback hell , Callback ?? HOF??
15. Promises (code , .then , .catch , methods (all, allsettled , race , any))
16. Bubbling , capturing , delegation
17. LS vs SS vs cookies
18. Strict mode
19. Web workers
20. Call, Apply, Bind (code)
21. Shallow vs deep copy (code)
22. Object.freeze , seal
23. Debouncing , Throttling
24. SOLID principles (code)
25. Design patterns (code)
26. array , string , object methods
27. Nullish coalescing operator
28. null vs undefined
29. Ways to write async code
30. Promise vs async-await
31. DOM vs BOM
32. setTimeout , setInterval (code) (how to stop setInterval)
33. Arrow vs normal function
34. Generators , iterators
35. How to increase performance of JS
36. New ES6 features
37. class , constructor , super (ex code)
38. Fetch vs Axios
39. REST API and GraphQL
40. Functional programming and OOP
41. OOP concepts

*/

// this.a = 5;
// const getParam = () => {
//     console.log(this);
// }

// getParam()

// function getParam1() {
//     console.log(this);
// }

// getParam1()

// sum(2)(6)(1)

// function sum(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c)
//         }
//     }
// }

// console.log(sum(2)(6));

function sum(fun) {
  return fun;
}

fun(function () {
  console.log("HOF");
});


