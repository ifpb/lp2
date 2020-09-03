# Revisão

- [Sintase do Javascript](#sintase-do-javascript)
  - [Tipos de dados](#tipos-de-dados)
  - [Declaração de variáveis](#declaração-de-variáveis)
  - [Expressões e operadores](#expressões-e-operadores)
  - [Estruturas de decisão e repetição](#estruturas-de-decisão-e-repetição)
  - [Declaração de funções](#declaração-de-funções)
  - [Definição de Módulos](#definição-de-módulos)
- [Aplicação Web (Back-end)](#aplicação-web-back-end)
  - [Arquitetura](#arquitetura)
  - [Node.JS (http)](#nodejs-http)
- [Exercícios](#exercícios)

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
const number = 10;
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
| Assignment operators     | `=`, `*=`, `/=`, `%=`, `+=`, `-=` |

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

### [Definição de Módulos](https://ifpb.github.io/javascript-guide/ecma/modules/)

**CENÁRIO 1**

```
src
├── lib.js
└── main.js
```

[Common Javascript - CJS](https://nodejs.org/api/modules.html)

src/lib.js:

```js
{% include_relative code/module-cjs-default/lib.js %}
```

src/main.js:

```js
{% include_relative code/module-cjs-default/main.js %}
```

[ECMAScript Modules - ESM](https://nodejs.org/api/esm.html)

src/lib.js:

```js
{% include_relative code/module-esm-default/lib.js %}
```

src/main.js:

```js
{% include_relative code/module-esm-default/main.js %}
```

> **Warning:** To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

```json
{% include_relative code/module-esm-default/package.json %}
```

**CENÁRIO 2**

```
src
├── lib.js
└── main.js
```

[Common Javascript - CJS](https://nodejs.org/api/modules.html)


```js
{% include_relative code/module-cjs-named/lib.js %}
```

src/main.js:

```js
{% include_relative code/module-cjs-named/main.js %}
```

[ECMAScript Modules - ESM](https://nodejs.org/api/esm.html)

src/lib.js:

```js
{% include_relative code/module-esm-named/lib.js %}
```

src/main.js:

```js
{% include_relative code/module-esm-named/main.js %}
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

![](assets/client-server.png)

### Node.JS (http)

app.js:

```js
{% include_relative code/node-hello-simple/app.js %}
```

```
$ node app.js
```

![](assets/hello-http.png)

## Exercícios

---

- [ecma/basic-hello](https://ifpb.github.io/exercises/problems/algorithms/basic-hello/)
- [ecma/basic-bmi](https://ifpb.github.io/exercises/problems/algorithms/basic-bmi/)
- [ecma/basic-harmonic-series](https://ifpb.github.io/exercises/problems/algorithms/basic-harmonic-series/)
- [ecma/function-area-of-circle](https://ifpb.github.io/exercises/problems/algorithms/function-area-of-circle/)
- [web/node-hello-simple](https://ifpb.github.io/exercises/problems/web/back-end/api-basic-hello/)
