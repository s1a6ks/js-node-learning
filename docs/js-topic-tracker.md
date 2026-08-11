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
| 21 | Основи | Стрілкові функції | High | In progress | Базово побачили синтаксис, ще окремо повернемось до стилю використання |
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
| 32 | Об'єкти | Методи об'єкта, `this` | High | Done | Базу по `this` пройшли, ручне керування через `call/apply/bind` також закрили |
| 33 | Об'єкти | Конструктори, `new` | Medium | Done | Пройшли в `Unit 9` |
| 34 | Об'єкти | Optional chaining `?.` | High | Done | Session 2: безпечний доступ до optional fields |
| 35 | Об'єкти | `Symbol` | Low | Later | Не першочергово |
| 36 | Об'єкти | Перетворення об'єктів у примітиви | Medium | Later | Корисно для розуміння дивної поведінки |
| 37 | Типи даних | Методи примітивів | Medium | Later | Оглядово |
| 38 | Типи даних | Числа | Medium | Later | Важливо для нюансів `number` |
| 39 | Типи даних | Рядки | Medium | Later | Практично потрібно |
| 40 | Типи даних | Масиви | High | Done | Session 5: базові операції, вкладені дані, `push/pop/includes/indexOf` |
| 41 | Типи даних | Методи масивів | High | Done | `Session 6`: `for...of`, `map`, `filter`, `find`, `some`, `every`, `reduce` |
| 42 | Типи даних | Ітеровані об'єкти | Medium | Done | Базово пройшли через `for...of` |
| 43 | Типи даних | `Map` та `Set` | High | Done | Базове знайомство пройшли, для старту достатньо |
| 44 | Типи даних | `WeakMap` та `WeakSet` | Low | Later | Не на старті |
| 45 | Типи даних | `Object.keys`, `values`, `entries` | High | Done | Пройшли в блоці `Unit 6` |
| 46 | Типи даних | Деструктуризація | High | Done | Пройшли в блоці `Unit 6` |
| 47 | Типи даних | Дата і час | Medium | Later | Практично важливо, але окремо |
| 48 | Типи даних | JSON methods | High | Later | Дуже важливо для API |

## Functions and Execution

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 49 | Функції | Рекурсія та стек | Medium | Later | Оглядово |
| 50 | Функції | Rest parameters and spread syntax | High | In progress | Spread для масивів і об'єктів уже бачили, rest залишився далі |
| 51 | Функції | Scope and closures | High | Done | Пройшли базу по scope, lexical scope і closure |
| 52 | Функції | Старе ключове слово `var` | Medium | Done | Розібрали scope, hoisting і різницю з `let` |
| 53 | Функції | Глобальний об'єкт | Medium | Done | Базово пройшли через `globalThis` |
| 54 | Функції | Function object, NFE | Low | Later | Не першочергово |
| 55 | Функції | `new Function` | Low | Skip for now | Для backend-старту не потрібно |
| 56 | Функції | `setTimeout`, `setInterval` | Medium | Done | Базово пройшли, до event loop повернемось глибше пізніше |
| 57 | Функції | Decorators, `call`, `apply` | Medium | Done | `call` і `apply` пройшли на робочому рівні, decorators лишаються later |
| 58 | Функції | `bind` | High | Done | Пройшли на робочому рівні |
| 59 | Функції | Повторення стрілкових функцій | Medium | Later | Ще повернемось окремо, коли будемо добивати стиль і нюанси `this` |

## Prototypes and Classes

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 60 | Properties | Property flags and descriptors | Low | Later | Оглядово |
| 61 | Properties | Getters and setters | Medium | Later | Корисно, але не старт |
| 62 | Prototypes | Prototype inheritance | Medium | Done | `prototype`, `Object.create`, ланцюжок прототипів |
| 63 | Prototypes | `F.prototype` | Low | Later | Пізніше |
| 64 | Prototypes | Built-in prototypes | Low | Later | Оглядово |
| 65 | Prototypes | Prototype methods, objects without `__proto__` | Low | Later | Пізніше |
| 66 | Classes | Class syntax | Medium | Done | Пройшли в `Unit 9` |
| 67 | Classes | Class inheritance | Medium | Done | `extends` і `super` |
| 68 | Classes | Static properties and methods | Medium | Done | Базово пройшли |
| 69 | Classes | Private/protected properties | Medium | Later | Важливо для TS-переходу |
| 70 | Classes | Extending built-in classes | Low | Later | Рідко потрібно |
| 71 | Classes | `instanceof` | Medium | Done | Пройшли в `Unit 9` |
| 72 | Classes | Mixins | Low | Skip for now | Не потрібно для старту |

## Errors and Async

| # | Розділ | Тема | Пріоритет | Статус | Нотатка |
|---|---|---|---|---|---|
| 73 | Errors | `try...catch` | High | Done | Пройшли в `Unit 10` |
| 74 | Errors | Custom errors | High | Done | Пройшли в `Unit 10` |
| 75 | Async | Callbacks | Medium | Done | Оглядово, щоб розуміти історію |
| 76 | Async | Promises | High | Done | Ключова тема |
| 77 | Async | Promise chaining | High | Done | Практика обов'язкова |
| 78 | Async | Promise error handling | High | Done | Практика обов'язкова |
| 79 | Async | Promise API | High | Done | `all`, `race`, `allSettled` |
| 80 | Async | Promisification | Medium | Later | Корисно для Node callbacks |
| 81 | Async | Microtasks | High | Next | Для event loop |
| 82 | Async | `async/await` | High | Done | Ключова тема |

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
- теми `41`, `42`, `43`
- теми `45`, `46`
- теми `51`, `53`, `56`
- тему `32` глибше
- теми `57`, `58`
- теми `62`, `66`, `67`, `68`, `71`
- теми `73`, `74`
- теми `75`, `76`, `77`, `78`, `79`, `82`

Зараз:

- завершили `Unit 3: Objects` на базовому робочому рівні
- завершили основний практичний блок `Unit 4: Arrays and Iterable Data`
- пройшли базовий блок `Unit 6: Object Utilities and Data Reshaping`
- пройшли базовий блок `Unit 7: Scope, Closures, and Execution Context`
- пройшли базовий блок `Unit 8: Function Context and Invocation Control`
- пройшли базовий блок `Unit 9: Prototypes and Classes`
- пройшли базовий блок `Unit 10: Error Handling`
- почали `Unit 11: Async JavaScript`

Далі:

- `Unit 11: Async JavaScript`
- теми `81`
