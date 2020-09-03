# Revisão

## Sintase do Javascript

---

### [Tipos de dados](https://ifpb.github.io/javascript-guide/ecma/values-and-types/)

![JavaScript’s type hierarchy](http://exploringjs.com/impatient-js/img-book/b8c834a3420a3b2d2df0d90dfa0c1dfd1f2ffbc9.svg)<br>
[JavaScript for impatient programmers (Book)](http://exploringjs.com/impatient-js/ch_values.html)

| Category  | Types                               | Values                                                                                            |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| Primitive | [Undefined](../undefined/syntax.md) | `undefined`                                                                                       |
| Primitive | [Null](../null/syntax.md)           | `null`                                                                                            |
| Primitive | [Boolean](../boolean/syntax.md)     | `true`, `false`                                                                                   |
| Primitive | [Number](../number/syntax.md)       | `-15`<br>`15`, `0b1111`, `0o17`, `0xf`<br>`-1234.5`<br>`1234.5`, `1.2345e3`<br>`0.0012`, `1.2E-3` |
| Primitive | [String](../string/syntax.md)       | `'Hello'`, `"Hello"`, `` `Hello` ``                                                               |
| Object    | [Array](../array/syntax.md)         | `[]`<br>`[1, 2, 3]`<br>`[1, '2', true]`                                                           |
| Object    | [Object](../object/syntax.md)       | `{name: Alice, email: alice@ifpb.edu}`                                                            |

### [Declaração de variáveis](https://ifpb.github.io/javascript-guide/ecma/variable/)

```js
var number = 10;
console.log(number); //=> 10
```

```js
let number = 10;
console.log(number); //=> 10
```

```js
let number = 10;
console.log(number); //=> 10
```

### [Expressões e operadores](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/)

| Operator type            | Operators                                     |
| ------------------------ | --------------------------------------------- |
| Increment and decrement  | `A++`, `A--`, `++A`, `--A`                    |
| Arithmetic operators     | `+`, `-`, `*`, `/`, `%`, `**`                 |
| Relational operators     | `<`, `<=`, `>`, `>=`                          |
| Equality operators       | `==`, `!=`, `===`, `!==`                      |
| Binary logical operators | `&&`, `|| `                                   |
| Assignment operators     | `=`, `*=`, `/=`, `%=`, `+=`, `-=`, `&=`, `^=` |

### [Estruturas de decisão e repetição](https://ifpb.github.io/javascript-guide/ecma/statements-and-declarations/)

**if**

```js
const number = 10;
let result;

if (number < 0) {
  result = 'less than zero';
} else if (number > 0) {
  result = 'greater than zero';
} else {
  result = 'equal to zero';
}

console.log(result); //=> greater than zero
```

**switch**

```js
const number1 = 10;
const number2 = 10;
const operator = '+'; // (+, -, *, /)
let result;

// strict comparison
switch (operator) {
  case 'add':
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
  default:
    result = 0;
}

console.log(result); //=> 20
```

**while**

```js
let result = '';

while (result.length < 4) {
  result += 'x';
  console.log(result);
}
//=>
// x
// xx
// xxx
// xxxx
```

**for**

```js
for (let flag = 0; flag < 100; flag += 1) {
  console.log(flag);
}
//=>
// 0
// 1
// 2
// ...
// 97
// 98
// 99
```

### [Declaração de funções](https://ifpb.github.io/javascript-guide/ecma/function/)

```js
function addition(param1, param2) {
  return param1 + param2;
}

// Calling functions
console.log(addition(1, 2)); //=> 3
```

```js
const addition = function (param1, param2) {
  return param1 + param2;
};

// Calling functions
console.log(addition(1, 2)); //=> 3
```

```js
const addition = (param1, param2) => param1 + param2;

// Calling functions
console.log(addition(1, 2)); //=> 3
```

### [Módulos](https://ifpb.github.io/javascript-guide/ecma/modules/)

**CENÁRIO 1**

```
src
├── lib.js
└── main.js
```

[Common Javascript - CJS](https://nodejs.org/api/modules.html)

src/lib.js:

```js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

src/main.js:

```js
const sum = require('./lib.js');

console.log(sum(1, 2)); //=> 3
```

[ECMAScript Modules - ESM](https://nodejs.org/api/esm.html)

src/lib.js:

```js
function sum(a, b) {
  return a + b;
}

export default sum;
```

src/main.js:

```js
import sum from './lib.js';

console.log(sum(1, 2)); //=> 3
```

**CENÁRIO 2**

```
src
├── lib.js
└── main.js
```

[Common Javascript - CJS](https://nodejs.org/api/modules.html)


src/lib.js:

```js
function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

module.exports = { sum, minus };
```

src/main.js:

```js
const { sum, minus } = require('./lib.js');

console.log(sum(1, 2)); //=> 3
console.log(minus(2, 1)); //=> 1
```

[ECMAScript Modules - ESM](https://nodejs.org/api/esm.html)

src/lib.js:

```js
function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

export { sum, minus };
```

src/main.js:

```js
import { sum, minus } from './lib.js';

console.log(sum(1, 2)); //=> 3
console.log(minus(2, 1)); //=> 1
```

**RESUMO**

| CJS                                          | ESM                                     |
| -------------------------------------------- | --------------------------------------- |
| `module.exports = sum`                       | `export default sum;`                   |
| `module.exports = { sum, minus }`            | `export { sum, minus }`                 |
| `const sum = require('./lib.js')`            | `import sum from './lib.js'`            |
| `const { sum, minus } = require('./lib.js')` | `import { sum, minus } from './lib.js'` |

## Aplicação Web (Back-end)

---

### Arquitetura

![](client-server.png)

### Node.JS (http)

app.js:

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

```
$ node app.js
```
