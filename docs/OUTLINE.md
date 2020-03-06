# Roteiro das Aulas

[\# 01 - Apresentação da Disciplina (14/02 SEX)](#-01---apresentação-da-disciplina-1402-sex)<br>
[\# 02 - Introdução ao git e github (15/02 SAB)](#-02---introdução-ao-git-e-github-1502-sab)<br>
[\# 03 - Revisão de Javascript (21/02 SEX)](#-03---revisão-de-javascript-2102-sex)<br>
[\# 04 - Revisão de Javascript (28/02 SEX)](#-04---revisão-de-javascript-2802-sex)<br>
[\# 05 - Revisão de Javascript (06/03 SEX)](#-05---revisão-de-javascript-0603-sex)<br>

## \# 01 - Apresentação da Disciplina (14/02 SEX)

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

## \# 02 - Introdução ao git e github (15/02 SAB)

---

**Conteúdo:**

- Como criar um [Pull Request](https://github.com/ifpb/pull-request-guide)

**Reflexão:**

- Para que server o Pull Request?
- Quais são as etapas para construir um Pull Request?

**Exercício:**

- No repositório [ifpb/ls-solutions](https://github.com/ifpb/ls-solutions/) crie o arquivo `students/numero_matricula.txt` contento o seu nome completo.

## \# 03 - Revisão de Javascript (21/02 SEX)

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

## \# 04 - Revisão de Javascript (28/02 SEX)

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

## \# 05 - Revisão de Javascript (06/03 SEX)

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

<!--

## \# 06 - Node (13/03 SEX)

---

## \# 07 - (20/03 SEX)

---

## \# 08 - (27/03 SEX)

---

## \# 09 - (03/04 SEX)

---

## \# 10 - (17/04 SEX)

---

## \# 11 - (18/04 SAB)

---

## \# 12 - (24/04 SEX)

---

## \# 13 - (08/05 SEX)

---

## \# 14 - (15/05 SEX)

---

## \# 15 - (22/05 SEX)

---

## \# 16 - (29/05 SEX)

---

## \# 17 - (05/06 SEX)

---

## \# 18 - (12/06 SEX)

---

## \# 19 - (19/06 SEX)

---

## \# 20 - (20/06 SAB)

---

## \# 21 - (26/06 SEX)

---

## \# 22 - (31/07 SEX)

---

## \# 23 - (07/08 SEX)

---

## \# 24 - (14/08 SEX)

---

## \# 25 - (21/08 SEX)

---

## \# 26 - (28/08 SEX)

---

## \# 27 - (04/09 SEX)

---

## \# 28 - (11/09 SEX)

---

## \# 29 - (18/09 SEX)

---

## \# 30 - (25/09 SEX)

---

## \# 31 - (02/10 SEX)

---

## \# 32 - (09/10 SEX)

---

## \# 33 - (16/10 SEX)

---

## \# 34 - (23/10 SEX)

---

## \# 35 - (30/10 SEX)

---

## \# 36 - (06/11 SEX)

---

## \# 37 - (13/11 SEX)

---

## \# 38 - (20/11 SEX)

---

## \# 39 - (27/11 SEX)

---

## \# 40 - (04/12 SEX) Projeto Final

---
-->
