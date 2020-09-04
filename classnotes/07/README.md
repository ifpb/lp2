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
  - [HTTP Request](#http-request)
- [Exercícios](#exercícios)

## Sintase do Javascript

---

### [Tipos de dados](https://ifpb.github.io/javascript-guide/ecma/values-and-types/)

![JavaScript’s type hierarchy](http://exploringjs.com/impatient-js/img-book/b8c834a3420a3b2d2df0d90dfa0c1dfd1f2ffbc9.svg)<br>
[JavaScript for impatient programmers (Book)](http://exploringjs.com/impatient-js/ch_values.html)

| Category  | Types                           | Values                                                                      |
| --------- | ------------------------------- | --------------------------------------------------------------------------- |
| Primitive | [Boolean](../boolean/syntax.md) | `true`, `false`                                                             |
| Primitive | [Number](../number/syntax.md)   | `-15`<br>`15`, `0b1111`, `0o17`, `0xf`<br>`-1234.5`<br>`1234.5`, `1.2345e3` |
| Primitive | [String](../string/syntax.md)   | `'Hello'`, `"Hello"`, `` `Hello` ``                                         |
| Object    | [Array](../array/syntax.md)     | `['Alice', 'alice@ifpb.edu']`                                               |
| Object    | [Object](../object/syntax.md)   | `{name: 'Alice', email: 'alice@ifpb.edu'}`                                  |

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

| Operator type            | Operators                         |
| ------------------------ | --------------------------------- |
| Increment and decrement  | `A++`, `A--`, `++A`, `--A`        |
| Arithmetic operators     | `+`, `-`, `*`, `/`, `%`, `**`     |
| Relational operators     | `<`, `<=`, `>`, `>=`              |
| Equality operators       | `==`, `!=`, `===`, `!==`          |
| Binary logical operators | `&&`, `||`                        |
| Assignment operators     | `=`, `*=`, `/=`, `%=`, `+=`, `-=` |

### [Estruturas de decisão e repetição](https://ifpb.github.io/javascript-guide/ecma/statements-and-declarations/)

**if**

```js
const number = 10;
let result;

if (number % 2 == 0) {
  result = 'par';
} else {
  result = 'ímpar';
}

console.log(result); //=> par
```

**while**

```js
let flag = 1;

while (flag <= 10) {
  console.log(flag);
  flag += 1;
}
//=>
// 1
// 2
// ...
// 9
// 10
```

### [Declaração de funções](https://ifpb.github.io/javascript-guide/ecma/function/)

```js
function sum(param1, param2) {
  return param1 + param2;
}

// Calling functions
console.log(sum(2, 1)); //=> 3
```

```js
const sum = function (param1, param2) {
  return param1 + param2;
};

// Calling functions
console.log(sum(2, 1)); //=> 3
```

```js
const sum = (param1, param2) => param1 + param2;

// Calling functions
console.log(sum(2, 1)); //=> 3
```

### [Definição de Módulos](https://ifpb.github.io/javascript-guide/ecma/modules/)

- [Common Javascript - CJS](https://nodejs.org/api/modules.html)
- [ECMAScript Modules - ESM](https://nodejs.org/api/esm.html)

**CENÁRIOS**

```
src
├── lib.js
└── main.js
```

|     | Uma Função | Várias Funções |
| --- | ---------- | -------------- |
| CJS | 1.1        | 2.1            |
| ESM | 1.2        | 2.2            |

**CENÁRIO 1.1 - Uma função no CJS**

src/lib.js:

```js
{% include_relative codes/module-cjs-default/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-cjs-default/main.js %}
```

**CENÁRIO 1.2 - Uma função no ESM**

src/lib.js:

```js
{% include_relative codes/module-esm-default/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-esm-default/main.js %}
```

**CENÁRIO 2.1 - Várias funções no CJS**

src/lib.js:

```js
{% include_relative codes/module-cjs-named/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-cjs-named/main.js %}
```

**CENÁRIO 2.2 - Várias funções no ESM**

src/lib.js:

```js
{% include_relative codes/module-esm-named/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-esm-named/main.js %}
```

**RESUMO**

|     | Uma Função                                                  | Várias Funções                                                                    |
| --- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| CJS | `module.exports = sum`<br>`const sum = require('./lib.js')` | `module.exports = { sum, minus }`<br>`const { sum, minus } = require('./lib.js')` |
| ESM | `export default sum;`<br>`import sum from './lib.js'`       | `export { sum, minus }`<br>`import { sum, minus } from './lib.js'`                |

> **Warning:** To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

```json
{% include_relative codes/module-esm-default/package.json %}
```

## Aplicação Web (Back-end)

---

### Arquitetura

![](assets/client-server.png)

### Node.JS (http)

app.js:

```js
{% include_relative codes/node-hello-simple/app.js %}
```

```
$ node app.js
```

![](assets/hello-http.png)

### HTTP Request

Visual Studio Code: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

requests.http:

```
{% raw %}
@hostname = 127.0.0.1
@port = 3000
@host = {{hostname}}:{{port}}

### Hello World

GET http://{{host}}/ HTTP/1.1
{% endraw %}
```

```
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Thu, 03 Sep 2020 22:19:08 GMT
Connection: close
Content-Length: 11

Hello World
```

## Exercícios

---

- [ecma/basic-hello](https://ifpb.github.io/exercises/problems/algorithms/basic-hello/)
- [ecma/basic-bmi](https://ifpb.github.io/exercises/problems/algorithms/basic-bmi/)
- [ecma/basic-harmonic-series](https://ifpb.github.io/exercises/problems/algorithms/basic-harmonic-series/)
- [ecma/function-area-of-circle](https://ifpb.github.io/exercises/problems/algorithms/function-area-of-circle/)
- [web/node-hello-simple](https://ifpb.github.io/exercises/problems/web/back-end/api-basic-hello/)
