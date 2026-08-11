# Learning Progress

## Загальна ціль

Перейти з `C#` backend experience до практичного backend-стеку:

- `JavaScript`
- `TypeScript`
- `Node.js`
- REST API
- GitHub workflow
- командна розробка з frontend-розробником

## Обговорений контекст

Користувач і друг хочуть провести симуляцію реальної розробки додатку:

- користувач бере backend
- друг бере frontend
- проєкт планується вести через GitHub
- GitHub має виконувати роль легкої альтернативи Jira
- задачі планується оформлювати через issues, project board, milestones і pull requests

Для backend користувач хоче писати на `Node.js`, але має основний досвід у `C#`.

Було вирішено:

- не вчити весь `JavaScript` з нуля
- пройти потрібну backend-базу `JavaScript`
- після цього перейти до `TypeScript`
- потім до `Node.js`
- далі вже організовувати реальний навчальний проєкт

## Оновлення підходу

Користувач уточнив, що хоча досвід у `C#` є, програмування могло частково підзабутись.

Тому далі:

- пояснюємо `JavaScript` простими словами
- не робимо великий акцент на `C#`
- `C#` використовуємо тільки як допоміжне порівняння
- якщо базова тема підзабулась, коротко освіжаємо її
- не перескакуємо через фундамент тільки тому, що він колись був знайомий

## Обраний підхід

Навчання ведеться через короткі сесії.

Кожна сесія містить:

- тему
- просте пояснення
- коротке порівняння з `C#`, якщо воно корисне
- важливі відмінності `JavaScript`
- маленьку практику
- перевірку відповіді
- оновлення таблиці тем у `docs/js-topic-tracker.md`

## JavaScript Timeline

Основний варіант:

- `8-10` сесій
- `60-120` хвилин кожна
- приблизно `3-4` тижні при `2-3` сесіях на тиждень

Стиснений варіант:

- `6-7` сесій
- приблизно `2-3` тижні
- підходить, бо користувач уже має досвід програмування на `C#`

## Session 1: Completed

Дата: `2026-06-14` / `2026-06-16` context continuation.

Теми:

- що таке `JavaScript` для backend у контексті `Node.js`
- `use strict`
- `let`
- `const`
- `var`
- block scope vs function scope
- базові primitive types
- `typeof`
- чому `typeof null` повертає `"object"`
- чому `const` не робить об'єкт immutable

Практика користувача:

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

Результат:

- рішення правильне
- користувач зрозумів, що `const user` забороняє переприсвоїти саму змінну, але не забороняє змінювати властивості об'єкта
- для простих вправ можна писати код прямо в чаті без окремих файлів

## Session 2: Completed

Дата: `2026-06-16`.

Теми:

- `null`
- `undefined`
- `typeof null`
- truthy/falsy values
- `==` vs `===`
- basic type conversion
- `||` vs `??`
- optional chaining `?.`

Ключові висновки:

- `undefined` означає, що значення не задане.
- `null` означає спеціально порожнє значення.
- `typeof null` повертає `"object"` через історичну особливість мови.
- `===` безпечніше за `==`, бо не робить неявного перетворення типів.
- `||` використовує fallback для всіх falsy values.
- `??` використовує fallback тільки для `null` і `undefined`.
- `?.` дозволяє безпечно читати поля, якщо проміжне значення може бути `null` або `undefined`.

Фінальна практика користувача:

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

Результат:

- `Session 2` завершена.
- Наступна тема: `Session 3`.

## Session 3: Completed

Дата: `2026-06` continuation across the same learning block.

Теми:

- базові оператори
- `if / else`
- ternary operator
- `for`
- `continue`
- `break`
- `switch`
- block scope для `let` і `const`
- чому `var` поводиться інакше

Ключові висновки:

- `break` зупиняє цикл або `switch`.
- `continue` пропускає поточну ітерацію та йде далі.
- ternary зручний для коротких умов, але не для великої логіки.
- `let` і `const` мають block scope.
- `switch` варто писати обережно через fallthrough.

Результат:

- `Session 3` завершена.
- Користувач нормально пише цикли та умови руками.
- Наступна тема: `Session 4`.

## Session 4: Completed

Дата: `2026-06` continuation.

Теми:

- function declaration
- function expression
- `return`
- різниця між `console.log` і `return`
- default parameters
- early return
- базове знайомство зі стрілковими функціями

Ключові висновки:

- функція без `return` повертає `undefined`
- `return` завершує функцію
- early return часто робить код чистішим
- function declaration і expression відрізняються поведінкою при hoisting

Результат:

- `Session 4` завершена.
- Користувач почав нормально будувати власні функції.
- Наступна тема: `Session 5`.

## Session 5: Completed

Дата: `2026-07` continuation.

Теми:

- об'єкти
- масиви
- доступ до властивостей та елементів
- вкладені дані
- `push`, `pop`
- `includes`, `indexOf`
- копіювання через посилання
- shallow copy через spread
- методи об'єкта
- базовий `this`

Ключові висновки:

- відсутня властивість або елемент масиву в `JavaScript` часто дає `undefined`, а не помилку
- об'єкти через `=` не копіюються, а розділяють одне посилання
- spread робить тільки поверхневу копію
- `this` залежить від способу виклику функції

Результат:

- `Session 5` по базі завершена.
- Об'єкти та масиви вже зрозумілі на робочому рівні.
- `this` розібраний на базовому рівні, глибші кейси винесені далі.

## Current Stage

Зараз ми:

- завершили `Session 1-5`
- майже закрили `Unit 3: Objects`
- перейшли до `Unit 4: Arrays and Iterable Data`

Найближча наступна тема:

- `for...of`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`

## Session 6: Started

Дата: `2026-07-24`.

Теми поточної сесії:

- `for...of`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`

Поточний фокус:

- навчитися підбирати правильний метод під конкретну задачу
- перестати тягнути звичайний `for` у всі випадки
- звикнути до стилю читання масивів, який часто зустрічається в `Node.js` коді

Практика:

- підготовлено файл `session-06-practice.js`
- після розв'язання зафіксуємо результат і завершимо сесію
