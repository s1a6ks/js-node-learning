# Session 1: JavaScript Basics for a C# Backend Developer

## Focus

Перша сесія створює фундамент для подальшого переходу в `TypeScript` і `Node.js`.

Теми:

- `JavaScript` у контексті `Node.js`
- `use strict`
- `let`, `const`, `var`
- базові типи
- `typeof`
- `const` з об'єктами

## JavaScript in Backend Context

Для backend-розробника важливо дивитись на `JavaScript` як на мову, яку виконує `Node.js`.

Ключова різниця з `C#`:

- `C#` має сильнішу compile-time перевірку
- `JavaScript` динамічно типізований
- багато помилок проявляються тільки в runtime
- `TypeScript` додає типи, але runtime все одно залишається `JavaScript`

## use strict

`use strict` вмикає строгіший режим виконання.

```js
"use strict";

x = 10; // ReferenceError
```

У сучасних `ES modules` strict mode вже увімкнений автоматично, але його важливо розуміти для старішого коду і навчальних матеріалів.

## let, const, var

`const` використовується за замовчуванням, якщо змінну не треба переприсвоювати.

```js
const userName = "max";
```

`let` використовується, якщо значення буде змінюватись.

```js
let age = 22;
age = 23;
```

`var` є старим способом оголошення змінних. У сучасному коді його краще не використовувати, але треба знати для читання старого коду.

## const Does Not Mean Immutable Object

```js
const user = {
  name: "max",
  stack: "c#",
};

user.stack = "Node.js"; // valid
```

`const` захищає binding змінної, але не робить об'єкт immutable.

Не можна:

```js
user = { name: "another user" };
```

Можна:

```js
user.stack = "Node.js";
```

## Block Scope

`let` і `const` мають block scope.

`var` має function scope.

```js
if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

console.log(c); // 3
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
```

## Primitive Types

Основні primitive types:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`

Приклад:

```js
const userName = "max";
let age = 22;
const isBackendDeveloper = true;
let notAssigned;
const emptyValue = null;
```

## typeof

```js
typeof "hello"; // "string"
typeof 123; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"
```

`typeof null === "object"` є історичною особливістю `JavaScript`. Це треба просто запам'ятати.

## User Practice

Користувач написав:

```js
const userName = "max";
let age = 22;
const isBackendDeveloper = true;

age = 23;

const user = {
  name: "max",
  stack: "c#",
};

user.stack = "Node.js";
```

Оцінка:

- код правильний
- `age` правильно оголошено через `let`
- `userName` і `isBackendDeveloper` правильно оголошені через `const`
- зміна `user.stack` валідна, бо об'єкт mutable

## Result

`Session 1` завершена.

Наступна тема:

- `null`
- `undefined`
- type conversion
- truthy/falsy
- `==` vs `===`
