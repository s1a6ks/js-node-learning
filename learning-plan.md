# TypeScript Learning Plan

## Основні ресурси

**Основний курс:**  
[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

**Практика:**  
[Total TypeScript — Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)

**Довідник:**  
[TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## Правила проходження

- TypeScript вивчається після JavaScript.
- Основою курсу є TypeScript Handbook.
- Не потрібно механічно завчати синтаксис. Важливо розуміти систему типів і вміти її застосовувати.
- Важливі теми закріплюємо практикою.
- Рідкісні та advanced-фічі не вчимо заради галочки.
- Постійно порівнюємо TypeScript із JavaScript.
- Частину тем будемо додатково закріплювати вже під час Node.js/backend розробки.
- Не намагаємося вивчити весь TypeScript до переходу на Node.js.

---

# Unit 1 — TypeScript Basics

- [ ] Що таке TypeScript
- [ ] TypeScript як надмножина JavaScript
- [ ] Static typing vs dynamic typing
- [ ] Compile-time vs runtime
- [ ] TypeScript compiler
- [ ] `.ts` → `.js`
- [ ] Основний workflow TypeScript
- [ ] Встановлення TypeScript
- [ ] `tsc`
- [ ] `tsconfig.json`
- [ ] `target`
- [ ] `module`
- [ ] `strict`

### Практика

- Створити маленький TS-проєкт.
- Скомпілювати його в JavaScript.
- Створити кілька навмисних type errors.
- Подивитися, що відбувається після компіляції.

---

# Unit 2 — Everyday Types

[Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

- [ ] `string`
- [ ] `number`
- [ ] `boolean`
- [ ] `null`
- [ ] `undefined`
- [ ] Arrays
- [ ] Objects
- [ ] Type annotations
- [ ] Type inference
- [ ] Optional properties
- [ ] Union types
- [ ] Type aliases
- [ ] Interfaces
- [ ] Literal types
- [ ] `readonly`
- [ ] `any`
- [ ] `unknown`
- [ ] `never`
- [ ] `void`
- [ ] `enum`

### Особливо розібрати

- [ ] Type inference vs explicit annotation
- [ ] `any` vs `unknown`
- [ ] `type` vs `interface`

### Практика

- Типізувати об'єкти.
- Типізувати масиви.
- Створити власні `type` та `interface`.
- Використати unions та optional properties.

---

# Unit 3 — Narrowing

[Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

- [ ] Що таке narrowing
- [ ] `typeof`
- [ ] Truthiness narrowing
- [ ] Equality narrowing
- [ ] `in`
- [ ] `instanceof`
- [ ] Control flow analysis
- [ ] Discriminated unions
- [ ] Type predicates
- [ ] Custom type guards

### Практика

- Працювати з `string | number`.
- Працювати з кількома типами об'єктів.
- Створити власний type guard.
- Розібрати discriminated union.

---

# Unit 4 — Functions

[More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

- [ ] Type annotations for parameters
- [ ] Return types
- [ ] Function types
- [ ] Anonymous functions
- [ ] Contextual typing
- [ ] Optional parameters
- [ ] Default parameters
- [ ] Rest parameters
- [ ] Call signatures
- [ ] Construct signatures
- [ ] Function overloads
- [ ] Generic functions

### Практика

- Типізувати звичайні функції.
- Типізувати callbacks.
- Створити функції з optional/default параметрами.
- Розібрати overloads.

---

# Unit 5 — Object Types

[Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

- [ ] Object type syntax
- [ ] Optional properties
- [ ] `readonly`
- [ ] Index signatures
- [ ] Extending object types
- [ ] Intersection types
- [ ] Interfaces
- [ ] Type aliases
- [ ] Structural typing
- [ ] Excess property checks

### Особливо

- [ ] Structural typing
- [ ] `interface` vs `type`
- [ ] Index signatures

### Практика

- Описати складніші об'єкти.
- Комбінувати типи.
- Створити dictionary/index signature.
- Розібрати structural typing на прикладах.

---

# Unit 6 — Generics

[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

- [ ] Що таке generics
- [ ] Generic functions
- [ ] Generic types
- [ ] Generic interfaces
- [ ] Generic classes
- [ ] Generic constraints
- [ ] `keyof`
- [ ] Using type parameters in constraints
- [ ] Generic defaults

### Практика

- Generic function.
- Generic array/object helpers.
- Constraints.
- Робота з `keyof`.
- Практичні задачі.

---

# Unit 7 — Keyof, Indexed Access & Type Operators

- [ ] `keyof`
- [ ] Indexed access types
- [ ] `typeof` у type position
- [ ] Conditional types — базове розуміння
- [ ] Mapped types — базове розуміння
- [ ] Template literal types — базове розуміння

### Мета

Зрозуміти, як TypeScript може працювати з типами програмно.

Не потрібно одразу вчити складний type-level programming.

---

# Unit 8 — Utility Types

[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

- [ ] `Partial`
- [ ] `Required`
- [ ] `Readonly`
- [ ] `Record`
- [ ] `Pick`
- [ ] `Omit`
- [ ] `Exclude`
- [ ] `Extract`
- [ ] `NonNullable`
- [ ] `Parameters`
- [ ] `ReturnType`
- [ ] `InstanceType`

### Практика

- Перетворення існуючих типів.
- Створення DTO-подібних типів.
- Використання utility types у реальних сценаріях.

---

# Unit 9 — Classes

[Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

- [ ] Class syntax
- [ ] Fields
- [ ] Constructors
- [ ] Methods
- [ ] `public`
- [ ] `private`
- [ ] `protected`
- [ ] `readonly`
- [ ] `static`
- [ ] Getters / setters
- [ ] Inheritance
- [ ] `implements`
- [ ] Abstract classes

### Примітка

Не перетворюємо цей блок на окремий курс OOP.

Основи OOP вже знайомі з JavaScript/C#.

Мета — зрозуміти, як TypeScript типізує класи та яку роль вони можуть відігравати в backend-коді.

---

# Unit 10 — Modules

[Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)

- [ ] `import`
- [ ] `export`
- [ ] Default exports
- [ ] Named exports
- [ ] Type-only imports
- [ ] Type-only exports
- [ ] Module resolution
- [ ] CommonJS vs ES Modules
- [ ] `module` у `tsconfig`

### Особливо

- [ ] `import type`
- [ ] TS modules vs runtime modules

Цей блок пов'язує TypeScript із модульною системою JavaScript, яку вже проходили.

---

# Unit 11 — Type Manipulation

- [ ] Conditional types
- [ ] `infer`
- [ ] Mapped types
- [ ] Template literal types
- [ ] Recursive types — ознайомлення
- [ ] Combining type operators

### Мета

Розуміти складний type-level код і вміти його читати.

Не потрібно ставати type-level програмістом.

Практику даємо лише там, де вона має реальну користь.

---

# Unit 12 — Async TypeScript

- [ ] `Promise<T>`
- [ ] Async functions
- [ ] Return types of async functions
- [ ] Generic promises
- [ ] Typed API responses
- [ ] `Promise.all`
- [ ] Error handling in async code

Особливо важливо розуміти:

`User`

і

`Promise<User>`

Цей блок безпосередньо знадобиться в Node.js.

---

# Unit 13 — Error Handling

- [ ] `try/catch`
- [ ] `unknown` у catch
- [ ] Custom error types
- [ ] Error narrowing
- [ ] Safe error handling
- [ ] Runtime errors vs TypeScript errors

### Особливо

- [ ] Чому `catch (error)` не можна бездумно вважати `Error`.
- [ ] Як безпечно працювати з невідомою помилкою.

---

# Unit 14 — External Data & Runtime Validation

Це міст між TypeScript і backend.

- [ ] TypeScript types vs runtime data
- [ ] JSON
- [ ] HTTP responses
- [ ] External APIs
- [ ] `unknown`
- [ ] Runtime validation
- [ ] Schema validation
- [ ] Zod — базове ознайомлення

### Ключова концепція

TypeScript:

`→` перевіряє код під час розробки.

Runtime validation:

`→` перевіряє реальні дані під час виконання.

### Практика

- Отримати `unknown`.
- Безпечно перевірити його.
- Описати runtime schema.
- Перетворити валідовані дані на типізовані дані.

---

# Unit 15 — Declaration Files & Type Definitions

- [ ] `.d.ts`
- [ ] Declaration files
- [ ] `@types/*`
- [ ] Typing JavaScript libraries
- [ ] `declare`
- [ ] Ambient declarations
- [ ] `@types/node`

### Мета

Розуміти, звідки TypeScript отримує типи бібліотек, які ми встановлюємо через npm.

---

# Unit 16 — TypeScript Project Configuration

[TSConfig Reference](https://www.typescriptlang.org/tsconfig/)

- [ ] `tsconfig.json`
- [ ] `compilerOptions`
- [ ] `target`
- [ ] `module`
- [ ] `moduleResolution`
- [ ] `strict`
- [ ] `noImplicitAny`
- [ ] `strictNullChecks`
- [ ] `esModuleInterop`
- [ ] `allowJs`
- [ ] `rootDir`
- [ ] `outDir`
- [ ] `include`
- [ ] `exclude`
- [ ] Source maps
- [ ] Build vs development workflow

### Практика

Створити нормальний TypeScript project:

```text
project/
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
Налаштувати:
.ts
 ↓
tsc
 ↓
dist/
 ↓
.js
Unit 17 — TypeScript + npm

TypeScript installation

Local vs global installation

typescript

tsc

npm scripts

@types/node

TypeScript dependencies

Development dependencies

Build scripts

Running compiled code
Мета
Підготувати структуру, яку потім використаємо для Node.js.
Unit 18 — TypeScript Patterns for Backend
Це вже не чистий Handbook, а практичний міст до Node.js.

DTO concept

Service types

Repository types

API response types

Request/response typing

Generic repository concepts

Error types

Configuration typing

Environment variables

Dependency typing
Мета
Побачити, як TypeScript використовується не в абстрактних задачах, а в backend-коді.
Unit 19 — TypeScript Review
Повторюємо ключові концепції:

Type inference

Type annotations

type

interface

Union

Intersection

Literal types

Narrowing

Type guards

Generics

keyof

Utility types

Classes

Modules

Promise<T>

unknown

Runtime validation

tsconfig
Без зубріння.
Мета
Переконатися, що ми можемо читати та писати нормальний TypeScript-код.
Unit 20 — TypeScript → Node.js
Фінальний перехід.

Створити Node.js + TypeScript project

Налаштувати package.json

Налаштувати tsconfig

Node.js types

Environment variables

HTTP server

Express

Typed request/response

Routing

Controllers

Services

Validation

Database

Authentication
Після цього TypeScript foundation вважається завершеним.
Далі:
TypeScript
    ↓
Node.js runtime
    ↓
npm ecosystem
    ↓
HTTP
    ↓
Express
    ↓
REST API
    ↓
Database
    ↓
Authentication
    ↓
Testing
    ↓
Architecture
    ↓
Real project