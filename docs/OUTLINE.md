# Roteiro das Aulas

## \# 01 - Apresentação da Disciplina

---

**Conteúdo:**

- Apresentação da disciplina:
  - Objetivo, conteúdo, avaliação, comunicação, bibliografia e ferramentas

**Reflexão:**

- O que você vai aprender em DW?
- Qual o nome e utilidade das tecnologias você irá aprender nesta disciplina?

**Exercício:**

- Analise o [site da discplina](https://ifpb.github.io/lp2/) e se inscreva no [telegram da disciplina](https://t.me/joinchat/ifpblp22020).
- Configure seu computador com essas [ferramentas](TOOLS.md).

## \# 02 - Introdução ao git e github

---

**Conteúdo:**

- Como criar um [Pull Request](https://github.com/ifpb/pull-request-guide)

**Reflexão:**

- Para que server o Pull Request?
- Quais são as etapas para construir um Pull Request?

**Exercício:**

- No repositório [ifpb/ls-solutions](https://github.com/ifpb/ls-solutions/) crie o arquivo `students/numero_matricula.txt` contento o seu nome completo.

## \# 03 - Revisão de Javascript

---

**Conteúdo:**

- [Executando Javascript](https://ifpb.github.io/javascript-exercises/ecma/running-javascript.html): prompt do Node.js
- Editando Javascript com [Visual Studio Code (vscode)](http://code.visualstudio.com) e executando com o [Node.js](https://nodejs.org/en/)
- [Sintaxe do Javascript](https://ifpb.github.io/javascript-guide/ecma/)
  - [Declaração de variáveis](https://ifpb.github.io/javascript-guide/ecma/variable/): var, let e const
  - [Valores e Tipos](https://ifpb.github.io/javascript-guide/ecma/values-and-types/): Number, String e Boolean
  - [Expressões e Operadores](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/)
  - [Tabela de Precedência](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

**Reflexão:**

- Como executamos código Javascript? Que ferramentas podemos usar para programar em Javascript?
- Como declaramos variáveis no Javascript?
- Quais são os tipos primitivos e objetos do Javascript?
- Quais são os operadores do Javascript? Como podemos montar expressões?
- Como saber se um operador é unário, binário ou ternário?

**Exercício:**

- Compare a sintaxe de declaração de variáveis, expressões e operadores do Javascript com alguma outra linguagem. Detalhe, utilize o prompt do node para testar a sintaxe do Javascript.
- Crie um exemplo de [Hello World em JS (ecma/basic-hello/)](https://ifpb.github.io/exercises/problems/algorithms/basic-hello/) para rodar no node usando o vscode.
- Através de `x = 10` crie um script para as seguintes expressões:

| Expressão   | Resultado |
| ----------- | --------- |
| `x+2`       | 12        |
| `x²`        | 100       |
| `3x²+12x-4` | 416       |
| `x+3 > √x`  | true      |

- Verificar se `const x = 8` é par usando operadores binários.
- Qual é a diferença entre `1 == "1a"`, `1 == "1"` e `1 === "1"`?
- Qual é o resultado data expressão `10 > x < 20` para `const x = 15`? Explique.
- Considerando que cor no formato ARGB (8 bits para Alfa, Vermelho, Verde e Azul, nessa ordem) seja guardado em `const color = 0x74C365`, então qual seria a intensidade da cor vermelha?

## \# 04 - Revisão de Javascript

---

**Conteúdo:**

- Sintaxe do Javascript
  - [Expressões e Operadores](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/)
  - [Estruturas de Decisão e Repetição](https://ifpb.github.io/javascript-guide/ecma/statements-and-declarations/): if, switch, for, while, do-while

**Reflexão:**

- Quais são as estruturas de decisão do Javascript?
- Quais são as estruturas de repetição do Javascript?

**Exercício:**

- Crie o algoritmo de [Body Mass Index (BMI) (ecma/basic-bmi)](https://ifpb.github.io/exercises/problems/algorithms/basic-bmi/) usando `if` e `switch`;
- Crie o algoritmo para exibir a séria de [00 até 99 (ecma/basic-numbers-series)](https://ifpb.github.io/javascript-exercises/ecma/basic/numbers/) de dez em dez usando `for`, `while` e `do-while`;
- Crie os algoritmos:
  - [IRRF 2017 (ecma/basic-irrf/)](https://ifpb.github.io/exercises/problems/algorithms/basic-irrf/)
  - [Numbers series (ecma/basic-numbers-series/)](https://ifpb.github.io/exercises/problems/algorithms/basic-numbers-series/)
  - [Harmonic series (ecma/basic-harmonic-series/)](https://ifpb.github.io/exercises/problems/algorithms/basic-harmonic-series/)

## \# 05 - Revisão de Javascript

---

**Conteúdo:**

- [Função em Javascript](https://ifpb.github.io/javascript-guide/ecma/function/)
  - [Definição e chamada](https://ifpb.github.io/javascript-guide/ecma/function/#defining-functions--function-statement)
  - [Escopo](https://ifpb.github.io/javascript-guide/ecma/function/#scope)
  - [Case sensitive](https://ifpb.github.io/javascript-guide/ecma/function/#case-sensitive)
  - [Parâmetro Default](https://ifpb.github.io/javascript-guide/ecma/function/#default-parameters)
- [CommonJS (CJS) Modules](https://ifpb.github.io/javascript-guide/ecma/modules/#node-modules---cjs)
- [ECMAScript Modules (ESM): Named uniq exports](https://ifpb.github.io/javascript-guide/ecma/modules/#named-uniq-export)

**Reflexão:**

- Como declaramos e chamamos uma função em JS?
- O que acontece quando passamos uma quantidade de argumentos diferente do total de parâmetros?
- Para chamar uma função é necessário declará-la antes de sua chamada?
- É possível declarar uma variável dentro da função com o mesmo nome de uma variável fora da função?
- O que são parâmetros default?

**Exercício:**

- Crie um script para:
  - [Somar (ecma/function-sum)](https://ifpb.github.io/exercises/problems/algorithms/function-sum/)
  - [Calcular a área do círculo (ecma/function-area-of-circle)](https://ifpb.github.io/exercises/problems/algorithms/function-area-of-circle/)
  - [Calcular operações aritméticas básicas (ecma/function-calc)](https://ifpb.github.io/exercises/problems/algorithms/function-calc/)
  - [Calcular o fatorial (ecma/function-factorial)](https://ifpb.github.io/exercises/problems/algorithms/function-factorial/)
  - [Verificar o tipo de triângulo (ecma/function-triangle-checker)](https://ifpb.github.io/exercises/problems/algorithms/function-triangle-checker/)
- Crie estes outros [scritps envolvendo função (ecma/function-\*)](https://ifpb.github.io/exercises/problems/algorithms/).

## \# 06 - Node.js

---

**Conteúdo:**

- [Node.js](https://nodejs.org/)
  - [About](https://nodejs.org/en/about/)
  - [Releases](https://nodejs.org/en/about/releases/)
  - [Getting Started Guide](https://nodejs.org/en/docs/guides/getting-started-guide/)
  - [API](https://nodejs.org/api/)

**Reflexão:**

- O que é e qual a utilidade do Node.js?
- Como o Node.js é utilizado para criar um servidor Web?
- Como se gera conteúdo específico por rotas no servidor Web Node.js?

**Exercício:**

- Execute este exemplo de aplicação Node.js (web/node-hello-lang):

  ```js
  const http = require("http");

  const hostname = "127.0.0.1";
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  ```

  para isto é necessário:

  ```
  $ mkdir node-hello-lang
  $ cd node-hello-lang
  $ node app.js
  ```

  - Execute este exemplo (web/node-hello-lang).

## \# 07 - Express.js

---

**Conteúdo:**

- [Express.js](https://expressjs.com)
  - [Installing](https://expressjs.com/en/starter/installing.html)
  - [Hello World example](https://expressjs.com/en/starter/hello-world.html)
  - [Express generator](https://expressjs.com/en/starter/generator.html)

**Reflexão:**

- O que são e quais as utilidades do Node.js e Express.js?
- Para que devemos usar o npm para desenvolver em Express.js?
- Por que devemos ignorar do git os arquivos `node_modules` e `package-lock.json`?

**Exercício:**

- Execute este exemplo de Express.js (web/express-hello-simple):

  ```js
  const express = require("express");
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => res.send("Hello World!"));

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  ```

  para isto é necessário:

  ```
  $ mkdir myapp
  $ cd myapp
  $ npm init -y
  $ npm install express --save
  $ node app.js
  ```

- Execute estes exemplos:
  - web/express-hello-lang
  - web/express-hello-name
  - web/express-bmi

<!--
## \# 08 - Express generator

---

## \# 09 -

---

## \# 10 -

---

## \# 11 -

---

## \# 12 -

---

## \# 13 -

---

## \# 14 -

---

## \# 15 -

---

## \# 16 -

---

## \# 17 -

---

## \# 18 -

---

## \# 19 -

---

## \# 20 -

---

## \# 21 -

---

## \# 22 -

---

## \# 23 -

---

## \# 24 -

---

## \# 25 -

---

## \# 26 -

---

## \# 27 -

---

## \# 28 -

---

## \# 29 -

---

## \# 30 -

---

## \# 31 -

---

## \# 32 -

---

## \# 33 -

---

## \# 34 -

---

## \# 35 -

---

## \# 36 -

---

## \# 37 -

---

## \# 38 -

---

## \# 39 -

---

## \# 40 - Projeto Final

---
-->

<script src="js/dates.js"></script>
<script src="js/load-summary.js"></script>
<script src="js/load-target-blank.js"></script>
