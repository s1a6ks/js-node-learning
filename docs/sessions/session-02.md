# Session 2: null, undefined, coercion, defaults

## Focus

Друга сесія закриває важливу специфіку `JavaScript`, яка часто дає runtime-помилки в backend-коді.

Теми:

- `null`
- `undefined`
- truthy/falsy
- `==` vs `===`
- type conversion basics
- `||` vs `??`
- optional chaining `?.`

## null and undefined

`undefined` означає, що значення не задане.

```js
let age;
console.log(age); // undefined
```

`null` означає, що значення спеціально задане як порожнє.

```js
let selectedUser = null;
```

Практичне правило:

- `undefined` часто з'являється само
- `null` зазвичай ставимо ми або отримуємо як явне порожнє значення

## typeof null

```js
typeof null; // "object"
```

Це історична особливість JavaScript. `null` краще перевіряти так:

```js
value === null
```

## Truthy and falsy

Falsy values:

- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

Усе інше в більшості випадків truthy.

Важливо:

```js
Boolean("0");     // true
Boolean("false"); // true
Boolean([]);      // true
Boolean({});      // true
```

## == vs ===

`==` може робити неявне перетворення типів.

```js
5 == "5"; // true
```

`===` порівнює без такого перетворення.

```js
5 === "5"; // false
```

Практичне правило: у нормальному коді за замовчуванням використовуємо `===`.

## Type conversion basics

```js
"5" + 1; // "51"
"5" - 1; // 4
```

`+` з рядком часто робить склеювання рядків.

`-` працює з числами, тому JavaScript пробує перетворити рядок у число.

## || vs ??

`||` повертає fallback для будь-якого falsy значення.

```js
0 || 100;  // 100
"" || "x"; // "x"
```

`??` повертає fallback тільки для `null` або `undefined`.

```js
0 ?? 100;  // 0
"" ?? "x"; // ""
```

Для backend default values часто безпечніше використовувати `??`, якщо `0`, `""` або `false` можуть бути валідними значеннями.

## Optional chaining

`?.` дозволяє безпечно звертатись до вкладених полів, якщо проміжне значення може бути `null` або `undefined`.

```js
const user = {};

console.log(user.profile?.name); // undefined
console.log(user.profile.name);  // TypeError
```

Безпечний ланцюжок:

```js
user?.profile?.name
```

## Final Practice

```js
const user = {
  name: "",
  age: 0,
  profile: null,
};

console.log(user.name || "Guest");      // "Guest"
console.log(user.name ?? "Guest");      // ""
console.log(user.age || 18);            // 18
console.log(user.age ?? 18);            // 0
console.log(user.profile?.city);        // undefined
console.log(user.profile.city);         // TypeError
console.log(null == undefined);         // true
console.log(null === undefined);        // false
console.log(Boolean("false"));          // true
console.log(Boolean(""));               // false
```

## Result

`Session 2` завершена.

Наступна тема:

- operators
- conditionals
- loops
- `switch`
