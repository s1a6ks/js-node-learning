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

## Learning Stages

### Stage 1: JavaScript Core for Backend

Goal: understand how `JavaScript` behaves at runtime.

Topics:

- intro to `JavaScript`
- code structure
- `use strict`
- `let`, `const`, `var`
- primitive types
- `null` and `undefined`
- type conversion
- operators
- comparisons
- `if`, ternary operator
- logical operators
- nullish coalescing `??`
- loops
- functions
- function expressions
- arrow functions

### Stage 2: Data and Object Model

Goal: become comfortable with the data structures and object behavior used in backend code.

Topics:

- objects
- object references and copying
- optional chaining `?.`
- arrays
- array methods
- `Map` and `Set`
- `Object.keys`, `Object.values`, `Object.entries`
- destructuring
- rest/spread
- JSON methods

### Stage 3: Functions and Execution Model

Goal: understand the parts of JavaScript that most often surprise developers coming from `C#`.

Topics:

- scope
- closures
- old `var` behavior
- global object
- `this`
- `call`, `apply`, `bind`
- timers
- recursion and stack

### Stage 4: Error Handling and Async

Goal: write real backend control flow safely.

Topics:

- `try/catch`
- custom errors
- callbacks at a high level
- promises
- promise chaining
- promise error handling
- `Promise` API
- microtasks
- `async/await`
- event loop basics

### Stage 5: Modules and Project Structure

Goal: understand how backend code is organized in real `Node.js` projects.

Topics:

- modules introduction
- `export` and `import`
- dynamic imports
- `CommonJS` vs `ESM`
- environment-based project structure basics

### Stage 6: TypeScript Transition

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

### Stage 7: Node.js Backend Foundation

Goal: build practical backend services.

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

We will use the user's JavaScript learning site as a base reference.

Priority topics from that resource:

- fundamentals
- objects
- arrays
- functions
- closures
- `this`
- errors
- promises
- `async/await`
- modules

Lower priority for now:

- `alert`, `prompt`, `confirm`
- most `DOM` topics
- browser events
- browser storage
- animations
- web components

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

## First Topics Queue

This is the current recommended start order:

1. `let`, `const`, `var`
2. primitive types
3. `null` and `undefined`
4. type conversion
5. `==` vs `===`
6. functions
7. arrow functions
8. objects
9. arrays and array methods
10. destructuring and spread
11. scope and closures
12. `this`
13. promises
14. `async/await`
15. modules

## JavaScript Timeline

Below is a short session-based plan only for the `JavaScript` part.

Assumption:

- `2-3` sessions per week
- each session is about `60-120` minutes
- small self-study or reading between sessions is optional, but helpful

Estimated total for the `JavaScript` stage:

- `8-10` sessions for solid backend-oriented fundamentals
- `10-12` sessions if we go slower and add more practice

### Session 1

Focus:

- what `JavaScript` is in the context of `Node.js`
- code structure
- `use strict`
- `let`, `const`, `var`
- primitive types overview

Outcome:

- understand variable declaration rules
- understand basic type model
- see where `JavaScript` differs from `C#`

### Session 2

Focus:

- `null`
- `undefined`
- type conversion
- truthy and falsy values
- `==` vs `===`

Outcome:

- understand the biggest beginner/runtime pitfalls
- know which comparisons are safe in backend code

### Session 3

Focus:

- operators
- conditionals
- nullish coalescing `??`
- optional chaining `?.`
- loops

Outcome:

- confidently read and write control flow
- distinguish `||` and `??`

### Session 4

Focus:

- function declarations
- function expressions
- arrow functions
- default parameters
- rest parameters

Outcome:

- understand function syntax used in real backend code
- see where arrow functions behave differently

### Session 5

Focus:

- objects
- object references
- copying objects
- object methods
- `this` introduction

Outcome:

- understand how objects actually behave in memory
- avoid common mistakes with method context

### Session 6

Focus:

- arrays
- array methods
- `map`, `filter`, `find`, `some`, `every`, `reduce`
- destructuring
- spread syntax

Outcome:

- become comfortable with data transformation patterns common in `Node.js`

### Session 7

Focus:

- scope
- closures
- old `var` behavior
- timers
- practical closure examples

Outcome:

- understand one of the most important `JavaScript` mental model shifts from `C#`

### Session 8

Focus:

- error handling
- `try/catch`
- custom errors
- JSON basics
- `Map` and `Set`

Outcome:

- be ready to write safer backend code and work with real data structures

### Session 9

Focus:

- callbacks overview
- promises
- promise chaining
- promise error handling
- `async/await`

Outcome:

- understand modern async flow in backend code

### Session 10

Focus:

- microtasks and event loop basics
- modules
- `import` / `export`
- `CommonJS` vs `ESM`
- practical wrap-up

Outcome:

- be ready to move from raw `JavaScript` into `TypeScript` and `Node.js` projects

## Compressed Option

If some topics feel obvious because of the user's `C#` background, we can compress this into about `6-7` sessions:

1. variables, types, `null`/`undefined`, conversion
2. comparisons, conditionals, loops, `??`, `?.`
3. functions, arrow functions, rest/default params
4. objects, arrays, destructuring, spread
5. scope, closures, `this`
6. errors, promises, `async/await`
7. modules and event loop basics

## Notes

- We are optimizing for real backend work, not for covering every part of the language.
- We will not assume every programming basic is still fresh.
- We will move faster only when the topic is actually clear.
- We will slow down on topics where `JavaScript` has surprising runtime behavior.
- Detailed JavaScript progress is tracked in `docs/js-topic-tracker.md`.
