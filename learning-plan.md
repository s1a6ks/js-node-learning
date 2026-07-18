# JavaScript to Node.js Learning Plan

## Goal

Move into practical `JavaScript`, then `TypeScript`, then `Node.js` backend work with enough understanding to build a real project with a teammate.

The user has previous `C#` backend experience, but some programming basics may be rusty. Because of that, we explain `JavaScript` directly and simply first. `C#` comparisons are used only when they make a concept easier to understand.

## Why This Plan Exists

This file keeps our shared learning context in one place so we can continue later without rebuilding the plan from scratch.

## Working Principles

We do not study all of JavaScript just for the sake of it.

We study JavaScript at the level needed to:

- understand runtime behavior in `Node.js`
- avoid common `JavaScript` mistakes
- feel comfortable moving into `TypeScript`
- build backend APIs with confidence

We will use the user's JavaScript resource as a reference, but we will not follow it blindly from top to bottom.

We will focus on backend-relevant topics first and skip or delay browser-heavy topics.

## How We Work Together

Our workflow:

1. Codex chooses the next topic in the right order for moving to `Node.js`.
2. The topic is explained in simple terms first.
3. If useful, Codex adds a short comparison with `C#`.
4. Practice is added where the topic needs real reinforcement.
5. If a programming basic is rusty, we briefly refresh it before moving on.
6. The user can still send an article or excerpt at any time if they want that specific material explained.

## Practice Rules

We use more practice for:

- `null` vs `undefined`
- type coercion
- `==` vs `===`
- object behavior
- arrays and array methods
- `this`
- closures
- promises
- `async/await`
- modules
- event loop basics

We use less practice for:

- simple conditionals
- loops
- basic operators
- syntax that already maps closely to `C#`

## Unit Roadmap

We will keep one normal course flow without splitting each topic into separate `core` and `advanced` passes.

If a topic is large, we can spend several sessions inside the same `unit`, but the goal is still to finish that unit properly before moving on.

The roadmap below is backend-focused.

That means:

- browser-heavy topics are not part of the main route
- rare or low-value language corners are skipped for now
- the goal is strong practical `JavaScript` for `TypeScript` and `Node.js`

### Unit 1: JavaScript Basics

Goal: understand the language base and how `JavaScript` code is read and executed.

Topics:

- intro to `JavaScript`
- code structure
- `use strict`
- variables: `let`, `const`, `var`
- primitive types
- type conversion
- operators
- comparisons
- conditionals
- logical operators
- nullish coalescing `??`
- loops
- `switch`
- basic language quirks summary

Tracker coverage:

- topics `1-22`

### Unit 2: Functions

Goal: become comfortable writing and reading functions in normal modern `JavaScript`.

Topics:

- function declarations
- function expressions
- arrow functions
- parameters and arguments
- `return`
- default parameters
- rest parameters
- recursion and call stack
- function object basics

Tracker coverage:

- topics `19-21`, `49-50`, `54`, `59`

### Unit 3: Objects

Goal: understand how objects behave in memory and how object-oriented patterns look in `JavaScript`.

Topics:

- object creation and property access
- references and copying
- garbage collection overview
- object methods
- `this`
- constructors and `new`
- optional chaining `?.`
- object-to-primitive conversion
- getters and setters overview

Tracker coverage:

- topics `29-36`, `61`

### Unit 4: Arrays and Iterable Data

Goal: work confidently with collections and data transformation.

Topics:

- arrays
- array mutation
- array methods
- `for...of`
- iterables
- `Map`
- `Set`

Tracker coverage:

- topics `40-43`

### Unit 5: Strings, Numbers, Dates, and JSON

Goal: handle the most common built-in data formats used in backend work.

Topics:

- primitive wrapper methods
- numbers
- strings
- dates and time
- JSON methods

Tracker coverage:

- topics `37-39`, `47-48`

### Unit 6: Object Utilities and Data Reshaping

Goal: learn the syntax and helpers used all over modern `JavaScript` codebases.

Topics:

- `Object.keys`
- `Object.values`
- `Object.entries`
- destructuring
- spread syntax

Tracker coverage:

- topics `45-46`, `50`

### Unit 7: Scope, Closures, and Execution Context

Goal: understand the runtime mental model that often feels unusual compared to `C#`.

Topics:

- scope
- closures
- deeper `var` behavior
- global object
- timers: `setTimeout`, `setInterval`

Tracker coverage:

- topics `51-53`, `56`

### Unit 8: Function Context and Invocation Control

Goal: understand how function context works and how it is controlled manually.

Topics:

- deeper `this`
- `call`
- `apply`
- `bind`

Tracker coverage:

- topics `57-59`

### Unit 9: Prototypes and Classes

Goal: understand the object model under the surface and the class syntax built on top of it.

Topics:

- class syntax
- class inheritance
- static members
- private and protected fields
- `instanceof`
- prototype inheritance overview
- built-in prototypes overview

Tracker coverage:

- topics `62`, `64`, `66-69`, `71`

### Unit 10: Error Handling

Goal: write safer code and understand failure paths clearly.

Topics:

- `try...catch`
- custom errors
- error propagation basics

Tracker coverage:

- topics `73-74`

### Unit 11: Async JavaScript

Goal: understand asynchronous control flow from old to modern patterns.

Topics:

- callbacks
- promises
- chaining
- promise error handling
- `Promise` API
- promisification
- microtasks
- `async/await`

Tracker coverage:

- topics `75-82`

### Unit 12: Iteration Internals and Advanced Flow

Goal: cover less common but important language mechanisms around iteration.

Topics:

- generators overview
- async iterators overview
- async generators overview

Tracker coverage:

- topics `83-84`

### Unit 13: Modules

Goal: understand how `JavaScript` code is split across files and loaded in real projects.

Topics:

- modules introduction
- export and import
- dynamic imports
- `CommonJS` vs `ESM`

Tracker coverage:

- topics `85-87`

### Unit 14: Advanced Language Features

Goal: close the remaining language topics that are useful for completeness and deeper understanding.

Topics:

- `Symbol`
- regular expressions

Tracker coverage:

- topics `35`, `105`

### Unit 15: Tooling, Quality, and Project Readiness

Goal: finish the `JavaScript` course in a way that prepares us for team development.

Topics:

- code editors
- developer tools
- code style
- comments
- anti-pattern examples
- tests
- polyfills and transpilers

Tracker coverage:

- topics `2-4`, `24-28`

### Unit 16: TypeScript Transition

Goal: move into typed backend development without losing understanding of runtime behavior.

Topics:

- basic `TypeScript` types
- typing functions
- interfaces
- type aliases
- unions
- generics
- narrowing
- utility types
- strict mode
- DTO-style modeling

### Unit 17: Node.js Backend Foundation

Goal: build practical backend services and prepare for a real team project.

Topics:

- what `Node.js` is
- `npm`
- project structure
- environment variables
- HTTP basics
- routing
- middleware
- validation
- error handling
- CRUD API design

## Resource Strategy

We will use the user's JavaScript learning site as a base reference, but the active learning route is filtered for backend value.

That means:

- browser-heavy topics are removed from the main path
- some rare advanced language topics are postponed or skipped
- the focus is what gives the strongest return for `Node.js` and `TypeScript`

## Session Format

Most sessions should look like this:

1. Short explanation of the topic in simple language.
2. Why the topic matters for backend work.
3. Short `C#` comparison only if it helps.
4. A few key gotchas.
5. Small practice task when needed.
6. Quick review of the answer.
7. Update the topic tracker.
8. Move to the next topic.

## Order After Current Point

We have already covered most of `Unit 1`, `Unit 2`, and the first practical part of objects and arrays.

The next units in normal order should be:

1. finish `Unit 3: Objects`
2. finish `Unit 4: Arrays and Iterable Data`
3. `Unit 6: Object Utilities and Data Reshaping`
4. `Unit 5: Strings, Numbers, Dates, and JSON`
5. `Unit 7: Scope, Closures, and Execution Context`
6. `Unit 8: Function Context and Invocation Control`
7. `Unit 9: Prototypes and Classes`
8. `Unit 10: Error Handling`
9. `Unit 11: Async JavaScript`
10. `Unit 12: Iteration Internals and Advanced Flow`
11. `Unit 13: Modules`
12. `Unit 14: Advanced Language Features`
13. `Unit 15: Tooling, Quality, and Project Readiness`
14. `Unit 16: TypeScript Transition`
15. `Unit 17: Node.js Backend Foundation`

## Notes

- We are still optimizing the order for real backend progress, but the tracker remains complete.
- Browser topics and low-value extras are intentionally not in the main path now.
- We will not assume every programming basic is still fresh.
- We will move faster only when the topic is actually clear.
- We will slow down on topics where `JavaScript` has surprising runtime behavior.
- Detailed JavaScript progress is tracked in `docs/js-topic-tracker.md`.
