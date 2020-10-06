# Template Engine

  - [Conteúdo Estático e Dinâmico](#conteúdo-estático-e-dinâmico)
  - [Local da Renderização](#local-da-renderização)
  - [Arquitetura do MVC](#arquitetura-do-mvc)
  - [Aplicação com MVC](#aplicação-com-mvc)
    - [Estrutura de Código](#estrutura-de-código)
    - [Loader](#loader)
    - [Seed](#seed)
    - [Model](#model)
    - [Router](#router)
    - [Controller](#controller)
    - [View](#view)

## Conteúdo Estático e Dinâmico

---

![](assets/client-server.png)

## Local da Renderização

---

| Client Side Rendering (CSR) | Server Side Rendering (SSR) |
| --------------------------- | --------------------------- |
| ![](assets/csr.png)         | ![](assets/ssr.png)         |

## Arquitetura do MVC

---

- Model View Controller (MVC)

![](assets/mvc.png)

## Aplicação com MVC

---

### Estrutura de Código

```
foods-app
├── .gitignore
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   └── bootstrap.min.css
│   ├── foods.html
│   ├── imgs
│   │   ├── hamburguer.jpg
│   │   ├── salada.jpg
│   │   └── sanduiche.jpg
│   └── js
│       ├── bootstrap.min.js
│       ├── jquery.min.js
│       └── popper.min.js
└── src
    ├── controllers
    │   └── foodsController.js
    ├── index.js
    ├── models
    │   └── Food.js
    ├── routes
    │   └── index.js
    ├── seeders
    │   └── index.js
    └── views
        ├── foods
        │   └── index.njk
        └── layout.njk
```

[![Edit express-foods-app-simple](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/express-foods-app-simple-c7jpe?fontsize=14&hidenavigation=1&theme=dark)

### Loader

src/index.js:

```js
{% include_relative codes/foods-app-simple/src/index.js %}
```

```bash
$ npm install express nunjucks
```

### Seed

src/seeders/index.js:

```js
{% include_relative codes/foods-app-simple/src/seeders/index.js %}
```

### Model

src/models/Food.js:

```js
{% include_relative codes/foods-app-simple/src/models/Food.js %}
```

### Router

src/routes/index.js:

```js
{% include_relative codes/foods-app-simple/src/routes/index.js %}
```

### Controller

src/controllers/foodsController.js:

```js
{% include_relative codes/foods-app-simple/src/controllers/foodsController.js %}
```

### View

![](assets/template-engine.png)

![](assets/nunjucks.png)

src/views/foods/index.njk ([VScode Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)):

```html
{% raw %}
{% extends "layout.njk" %}

{% set title = "Menu" %}

{% block content %}
<h1 class="my-5 text-center">{{ title }}</h1>

<section class="card-deck">
  {% for food in foods %}
  <div class="card">
    <div class="card-header text-center font-weight-bold">
      {{ food.name }}
    </div>
    <div class="card-body p-0">
      <img src="{{ food.image }}" alt="{{ food.name }}" class="w-100" />
    </div>
    <div class="card-footer text-right">
      {{ food.price }}
    </div>
  </div>
  {% endfor %}
</section>
{% endblock %}

{% block script %}
<script>
  const prices = document.querySelectorAll('.card-footer');
  prices.forEach((price) => {
    price.innerHTML = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.innerHTML);
  });
</script>
{% endblock %} {% endraw %}
```

src/views/layout.njk:

```html
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <title>{{ title }}</title>
</head>
<body>
  <div class="container">
    {% block content %}
    {% endblock %}
  <div>
  <script src="/js/jquery.min.js"></script>
  <script src="/js/popper.min.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  {% block script %}
  {% endblock %}
</body>
</html>
{% endraw %}
```

<img src="assets/preview.png" alt="Preview" width="100%">
