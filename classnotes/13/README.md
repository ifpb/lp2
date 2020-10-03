# Banco de Dados

  - [Relacionamento de Entidades](#relacionamento-de-entidades)
  - [Aplicação com SQLite](#aplicação-com-sqlite)
    - [Estrutura de Código](#estrutura-de-código)
    - [Migration](#migration)
    - [Model](#model)
    - [View](#view)

## Relacionamento de Entidades

---

![](assets/mvc.png)

## Aplicação com SQLite

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
│   │   ├── milkshake.jpg
│   │   ├── sanduiche.jpg
│   │   └── suco.jpg
│   └── js
│       ├── bootstrap.min.js
│       ├── jquery.slim.min.js
│       └── popper.min.js
└── src
    ├── controllers
    │   └── foodsController.js
    ├── db
    │   ├── database.sqlite
    │   └── index.js
    ├── index.js
    ├── migrations
    │   └── index.js
    ├── models
    │   ├── Category.js
    │   └── Food.js
    ├── routes
    │   └── index.js
    ├── seeders
    │   ├── data.json
    │   └── index.js
    └── views
        ├── foods
        │   └── index.njk
        └── layout.njk
```

[![Edit express-foods-app-sqlite-has-many](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/express-foods-app-sqlite-has-many-2c981?fontsize=14&hidenavigation=1&theme=dark)

### Migration

![](assets/database.png)

src/migrations/index.js:

```js
{% include_relative codes/foods-app-sqlite-simple/src/migrations/index.js %}
```

### Model

src/models/Food.js:

```js
{% include_relative codes/foods-app-sqlite-simple/src/models/Food.js %}
```

src/models/Category.js:

```js
{% include_relative codes/foods-app-sqlite-simple/src/models/Category.js %}
```

### View

src/views/foods/index.njk:

```html
{% raw %}
{% extends "layout.njk" %}

{% set title = "Menu" %}

{% block content %}
<h1 class="my-5 text-center">{{ title }}</h1>

<section class="card-deck">
  {% for food in foods %}
  <div class="col-sm-6 col-lg-4 col-xl-3 mb-3">
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        {{ food.name }}
      </div>
      <div class="card-body p-0">
        <img src="{{ food.image }}" alt="{{ food.name }}" class="w-100">
      </div>
      <div class="card-footer text-right">
        <span class="food-category float-left badge badge-secondary">{{ food.category }}</span>
        <span class="food-price">{{ food.price }}</span>
      </div>
    </div>
  </div>
  {% endfor %}
</section>
{% endblock %}

{% block script %}
<script>
  const prices = document.querySelectorAll('.card-footer .food-price');
  prices.forEach((price) => {
    price.innerHTML = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.innerHTML)
  });
</script>
{% endblock %}
{% endraw %}
```

<img src="assets/preview.png" alt="Preview" width="100%">
