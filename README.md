# Тестовое задание Ficnh
## Игра «Гослото „8 из 19“»


### Правила игры
У игры есть два поля, в первом поле будет девятнадцать клеток, во втором две клетки. 
От участника лотереи требуется отметить в первом поле восемь цифр, во втором одну цифру. 
При вычисление результата потребуется сравнить отмеченные участником числа с двумя случайно сгенерированными, в соответствиями с правилами игры (восемь чисел в первом массиве, одно во втором массиве), массивами чисел. В случае совпадения четырех и более цифр в первом поле, либо трех и более чисел в первом поле и одного во втором, пользователь считается победителем лотереи и получает причитающиеся ему лавры (ничего не получает).

В тестовом заднии пошел немного дальше, решил сделать так, чтобы можно было создавать сразу несколько полей, просто добавляя их в конфиг, также в конфиге можно указывать условия при котором пользователь выигрывает
```ts
const GAME_OPTIONS = {
  fields: [
    { label: 'Поле 1', count: 19, maxSelection: 8, name: 'firstNumber' },
    { label: 'Поле 2', count: 2, maxSelection: 1, name: 'secondNumber' },
    { label: 'Поле 3', count: 45, maxSelection: 20, name: 'thirdNumber' },
  ],
  winningConditions: [
    // Rule 1.
    {
      firstNumber: {
        minCount: 4,
      },
      secondNumber: {
        minCount: 0,
      },
    },
    // Rule 2.
    {
      firstNumber: {
        minCount: 3,
      },
      secondNumber: {
        minCount: 1,
      },
    },
  ],
};
```

### Как запустить проект
1. Клонирование репозитория
```bash
git clone https://github.com/vwsode/finch-test/
```
2. Установка зависимостей
```bash
npm install
```

3. Запуск проекта
```bash
npm start
```

4. Сделать билд проекта
```bash
npm run build
```
