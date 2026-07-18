# JavaScript Topic Tracker

Це велика таблиця тем по `JavaScript`, схожа на структуру навчального сайту, який ми брали як орієнтир.

Позначки:

- `Done` - пройдено і закріплено
- `In progress` - почали, але ще не закрили
- `Next` - найближча тема
- `Later` - пройдемо пізніше
- `Skip for now` - не потрібно для backend-старту

## Core JavaScript

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 1 | Вступ | Вступ до JavaScript | High | Done | Розібрали JS як мову, яку виконує `Node.js` |
| 2 | Вступ | Довідники й специфікації | Low | Later | Достатньо знати, що існують MDN і специфікація |
| 3 | Вступ | Редактори коду | Low | Later | Повернемось при налаштуванні проєкту |
| 4 | Вступ | Інструменти розробника | Medium | Later | Корисно, але не критично для першого backend-етапу |
| 5 | Основи | Привіт, світ | Low | Done | Базовий запуск коду зрозумілий |
| 6 | Основи | Структура коду | High | Done | Пройшли в першій сесії |
| 7 | Основи | `use strict` | Medium | Done | Знаємо навіщо потрібен strict mode |
| 8 | Основи | Змінні | High | Done | `let`, `const`, `var` |
| 9 | Основи | Типи даних | High | Done | Базовий огляд primitive types |
| 10 | Основи | `alert`, `prompt`, `confirm` | Low | Skip for now | Браузерна тема, для backend зараз не потрібна |
| 11 | Основи | Перетворення типів | High | Done | Session 2 |
| 12 | Основи | Базові оператори, математика | Medium | Done | Session 3 |
| 13 | Основи | Оператори порівняння | High | Done | Session 2, особливо `==` vs `===` |
| 14 | Основи | Умовні розгалуження: `if`, `?` | Medium | Done | Session 3 |
| 15 | Основи | Логічні оператори | High | Done | Session 2: truthy/falsy, `||`, `&&` basics |
| 16 | Основи | Nullish coalescing `??` | High | Done | Session 2: різниця між `||` і `??` |
| 17 | Основи | Цикли: `while`, `for` | Medium | Done | Session 3 |
| 18 | Основи | `switch` | Low | Done | Session 3 |
| 19 | Основи | Функції | High | Done | Session 4 |
| 20 | Основи | Функціональні вирази | High | Done | Session 4 |
| 21 | Основи | Стрілкові функції | High | In progress | Базово побачили синтаксис у Session 4, окремо повернемось у Unit 8 |
| 22 | Основи | Особливості JavaScript | Medium | Later | Підсумуємо після основ |

## Code Quality

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 23 | Якість коду | Налагодження в браузері | Low | Skip for now | Backend-фокус, повернемось при frontend/debug потребі |
| 24 | Якість коду | Стандарт оформлення коду | Medium | Later | Підключимо з ESLint/Prettier |
| 25 | Якість коду | Коментарі | Medium | Later | Коротко, на практиці |
| 26 | Якість коду | Ніндзя-код | Low | Later | Корисно як анти-приклад |
| 27 | Якість коду | Автоматичне тестування з Mocha | Medium | Later | Можемо взяти пізніше або замінити на сучасний test runner |
| 28 | Якість коду | Поліфіли та транспілятори | Low | Later | Більше потрібно для frontend/bundling |

## Objects and Data

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 29 | Об'єкти | Об'єкти | High | Done | Session 5: база, вкладені об'єкти, масиви в об'єктах |
| 30 | Об'єкти | Копіювання об'єктів та посилання | High | Done | Розібрали `=` vs shallow copy через spread |
| 31 | Об'єкти | Збирання сміття | Low | Later | Оглядово |
| 32 | Об'єкти | Методи об'єкта, `this` | High | In progress | Базу по `this` пройшли, глибші кейси підуть у Unit 8 |
| 33 | Об'єкти | Конструктори, `new` | Medium | Later | Потрібно розуміти, але без занурення |
| 34 | Об'єкти | Optional chaining `?.` | High | Done | Session 2: безпечний доступ до optional fields |
| 35 | Об'єкти | `Symbol` | Low | Later | Не першочергово |
| 36 | Об'єкти | Перетворення об'єктів у примітиви | Medium | Later | Корисно для розуміння дивної поведінки |
| 37 | Типи даних | Методи примітивів | Medium | Later | Оглядово |
| 38 | Типи даних | Числа | Medium | Later | Важливо для нюансів `number` |
| 39 | Типи даних | Рядки | Medium | Later | Практично потрібно |
| 40 | Типи даних | Масиви | High | Done | Session 5: базові операції, вкладені дані, `push/pop/includes/indexOf` |
| 41 | Типи даних | Методи масивів | High | Next | `for...of`, `map`, `filter`, `find`, `reduce` |
| 42 | Типи даних | Ітеровані об'єкти | Medium | Later | Потрібно для `for...of`, Map/Set |
| 43 | Типи даних | `Map` та `Set` | High | Later | Корисно в backend |
| 44 | Типи даних | `WeakMap` та `WeakSet` | Low | Later | Не на старті |
| 45 | Типи даних | `Object.keys`, `values`, `entries` | High | Later | Часто використовується |
| 46 | Типи даних | Деструктуризація | High | Later | Постійно зустрічається |
| 47 | Типи даних | Дата і час | Medium | Later | Практично важливо, але окремо |
| 48 | Типи даних | JSON methods | High | Later | Дуже важливо для API |

## Functions and Execution

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 49 | Функції | Рекурсія та стек | Medium | Later | Оглядово |
| 50 | Функції | Rest parameters and spread syntax | High | Later | Часто використовується |
| 51 | Функції | Scope and closures | High | Later | Одна з головних JS-тем |
| 52 | Функції | Старе ключове слово `var` | Medium | Done | Базово розібрали в Session 1, повернемось при scope |
| 53 | Функції | Глобальний об'єкт | Medium | Later | Потрібно для Node/browser різниці |
| 54 | Функції | Function object, NFE | Low | Later | Не першочергово |
| 55 | Функції | `new Function` | Low | Skip for now | Для backend-старту не потрібно |
| 56 | Функції | `setTimeout`, `setInterval` | Medium | Later | Корисно для event loop |
| 57 | Функції | Decorators, `call`, `apply` | Medium | Later | Оглядово |
| 58 | Функції | `bind` | High | Later | Важливо разом із `this` |
| 59 | Функції | Повторення стрілкових функцій | Medium | Later | Після першого блоку функцій |

## Prototypes and Classes

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 60 | Properties | Property flags and descriptors | Low | Later | Оглядово |
| 61 | Properties | Getters and setters | Medium | Later | Корисно, але не старт |
| 62 | Prototypes | Prototype inheritance | Medium | Later | Треба розуміти JS модель |
| 63 | Prototypes | `F.prototype` | Low | Later | Пізніше |
| 64 | Prototypes | Built-in prototypes | Low | Later | Оглядово |
| 65 | Prototypes | Prototype methods, objects without `__proto__` | Low | Later | Пізніше |
| 66 | Classes | Class syntax | Medium | Later | Після об'єктів |
| 67 | Classes | Class inheritance | Medium | Later | Оглядово |
| 68 | Classes | Static properties and methods | Medium | Later | Знадобиться в TS/Nest |
| 69 | Classes | Private/protected properties | Medium | Later | Важливо для TS-переходу |
| 70 | Classes | Extending built-in classes | Low | Later | Рідко потрібно |
| 71 | Classes | `instanceof` | Medium | Later | Корисно для errors/classes |
| 72 | Classes | Mixins | Low | Skip for now | Не потрібно для старту |

## Errors and Async

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 73 | Errors | `try...catch` | High | Later | Важливо для backend |
| 74 | Errors | Custom errors | High | Later | Потрібно для API |
| 75 | Async | Callbacks | Medium | Later | Оглядово, щоб розуміти історію |
| 76 | Async | Promises | High | Later | Ключова тема |
| 77 | Async | Promise chaining | High | Later | Практика обов'язкова |
| 78 | Async | Promise error handling | High | Later | Практика обов'язкова |
| 79 | Async | Promise API | High | Later | `all`, `race`, `allSettled` |
| 80 | Async | Promisification | Medium | Later | Корисно для Node callbacks |
| 81 | Async | Microtasks | High | Later | Для event loop |
| 82 | Async | `async/await` | High | Later | Ключова тема |

## Iteration and Modules

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 83 | Generators | Generators | Low | Later | Не на старті |
| 84 | Generators | Async iterators and generators | Low | Later | Пізніше, якщо буде потреба |
| 85 | Modules | Вступ до модулів | High | Later | Важливо для Node |
| 86 | Modules | Export and import | High | Later | Ключова тема |
| 87 | Modules | Dynamic imports | Medium | Later | Оглядово |

## Extra and Browser Topics

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 88 | Extra | Proxy and Reflect | Low | Later | Не потрібно на старті |
| 89 | Extra | Eval | Low | Skip for now | Уникати в реальному коді |
| 90 | Extra | Currying | Low | Later | Цікаво, але не критично |
| 91 | Extra | Reference type | Low | Later | Пізніше, якщо буде потреба |
| 92 | Extra | BigInt | Low | Later | Оглядово |
| 93 | Extra | Unicode and strings internals | Low | Later | Не першочергово |
| 94 | Extra | WeakRef and FinalizationRegistry | Low | Skip for now | Не потрібно для старту |
| 95 | Browser | DOM | Low | Skip for now | Frontend/browser тема |
| 96 | Browser | Browser events | Low | Skip for now | Frontend/browser тема |
| 97 | Browser | Forms | Low | Skip for now | Frontend/browser тема |
| 98 | Browser | Loading document/resources | Low | Skip for now | Frontend/browser тема |
| 99 | Browser | Fetch | Medium | Later | Корисно знати для API calls, але backend має свої HTTP-клієнти |
| 100 | Browser | WebSocket | Medium | Later | Може знадобитись у реальному проєкті |
| 101 | Browser | LocalStorage/sessionStorage | Low | Skip for now | Frontend/browser тема |
| 102 | Browser | IndexedDB | Low | Skip for now | Frontend/browser тема |
| 103 | Browser | Animations | Low | Skip for now | Frontend/browser тема |
| 104 | Browser | Web components | Low | Skip for now | Frontend/browser тема |
| 105 | Regex | Regular expressions | Medium | Later | Корисно, але окремим блоком |

## Current Position

Ми завершили:

- `Session 1`
- `Session 2`
- `Session 3`
- `Session 4`
- `Session 5`
- теми `1`, `5`, `6`, `7`, `8`, `9`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`
- теми `19`, `20`
- тему `21` базово
- теми `29`, `30`, `34`, `40`
- тему `32` базово
- тему `52` частково, на базовому рівні

Зараз:

- завершуємо `Unit 3: Objects`
- наступна практична тема: `for...of` і `методи масивів`

Далі:

- `Unit 4: Arrays and Iterable Data`
- теми `41`, `42`, `43`
