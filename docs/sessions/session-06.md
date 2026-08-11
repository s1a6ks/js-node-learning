# Session 6: `for...of` and array methods

## Focus

Ця сесія переводить нас від "я можу пройтись по масиву" до "я можу нормально обробляти колекції даних так, як це роблять у реальному `JavaScript` і `Node.js` коді".

Теми:

- `for...of`
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`

## Why this matters for backend

У backend-коді ми постійно працюємо з масивами:

- списки користувачів
- результати запитів з бази
- масиви DTO
- валідація наборів даних
- агрегація значень

Тому важливо не тільки вміти писати звичайний `for`, а й швидко бачити, який саме інструмент підходить під задачу.

## `for...of`

`for...of` бере значення елементів по черзі.

```js
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

Коли зручно:

- пройтись по масиву без індексу
- прочитати кожен елемент
- накопичити результат вручну

## `map`

`map` створює новий масив тієї ж довжини.

Він бере кожен елемент і перетворює його у щось інше.

```js
const prices = [100, 250, 80];
const doubledPrices = prices.map((price) => price * 2);

console.log(doubledPrices); // [200, 500, 160]
```

Добре підходить для:

- перетворення даних
- витягування одного поля
- підготовки DTO

## `filter`

`filter` створює новий масив лише з тими елементами, які пройшли умову.

```js
const ages = [14, 18, 25, 12];
const adults = ages.filter((age) => age >= 18);

console.log(adults); // [18, 25]
```

## `find`

`find` повертає перший елемент, який підходить під умову.

Якщо нічого не знайдено, результат буде `undefined`.

```js
const users = [
  { id: 1, name: "Max" },
  { id: 2, name: "Anna" },
];

const user = users.find((item) => item.id === 2);

console.log(user); // { id: 2, name: "Anna" }
```

## `some`

`some` відповідає на питання: "чи є хоча б один елемент, який підходить?"

Результат завжди `true` або `false`.

```js
const numbers = [3, 7, 12];

console.log(numbers.some((number) => number > 10)); // true
```

## `every`

`every` відповідає на питання: "чи всі елементи підходять?"

```js
const scores = [80, 91, 77];

console.log(scores.every((score) => score >= 70)); // true
```

## `reduce`

`reduce` зводить масив до одного значення.

Це може бути:

- число
- рядок
- об'єкт
- інший масив

```js
const numbers = [2, 4, 6];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total); // 12
```

Тут:

- `sum` - накопичувач
- `number` - поточний елемент
- `0` - початкове значення накопичувача

## Quick mental model

- `for...of` - пройтись
- `map` - перетворити кожен елемент
- `filter` - залишити тільки потрібні
- `find` - знайти перший підходящий
- `some` - перевірити, чи є хоча б один
- `every` - перевірити, чи всі підходять
- `reduce` - зібрати все в один результат

## Common mistakes

- чекати, що `map` змінює старий масив, хоча він повертає новий
- використовувати `filter`, коли потрібен один елемент, а не масив
- забувати, що `find` може повернути `undefined`
- писати надто складний `reduce` там, де простіше взяти `map` + `filter`

## Small C# comparison

Найближча аналогія:

- `map` схожий на `Select`
- `filter` схожий на `Where`
- `find` схожий на `FirstOrDefault`
- `some` схожий на `Any`
- `every` схожий на `All`

Але в `JavaScript` ці методи дуже часто використовуються прямо в повсякденному коді, тому важливо звикнути читати їх швидко.

## Practice for this session

Практика для користувача знаходиться у файлі `session-06-practice.js`.
