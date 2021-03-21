# Email

- [Email](#email)
  - [Foods App](#foods-app)
  - [Arquitetura do Código](#arquitetura-do-código)
  - [Load](#load)
  - [Controller](#controller)

## Foods App

---

<img src="assets/preview.png" alt="Preview" width="100%">

## Arquitetura do Código

---

![](assets/mvc.png)


```
foods-app-email
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   ├── bootstrap.min.css
│   │   └── bootstrap.min.css.map
│   ├── foods.html
│   ├── imgs
│   │   ├── batatafrita.jpg
│   │   ├── hamburguer.jpg
│   │   ├── milkshake.jpg
│   │   ├── sanduiche.jpg
│   │   └── suco.jpg
│   └── js
│       ├── bootstrap.min.js
│       ├── bootstrap.min.js.map
│       ├── jquery.min.js
│       ├── popper.min.js
│       ├── popper.min.js.map
│       └── services
│           └── api.js
├── requests.http
├── sessions
└── src
    ├── config
    │   └── mail.js
    ├── controllers
    │   ├── authController.js
    │   ├── categoriesController.js
    │   ├── foodsController.js
    │   ├── mailController.js
    │   └── usersController.js
    ├── db
    │   ├── database.sqlite
    │   ├── index.js
    │   ├── migration.js
    │   └── seed.js
    ├── index.js
    ├── middleware
    │   └── auth.js
    ├── migrations
    │   └── index.js
    ├── models
    │   ├── Category.js
    │   ├── Food.js
    │   └── User.js
    ├── routes
    │   └── index.js
    ├── seeders
    │   ├── data.json
    │   └── index.js
    └── views
        ├── _menu.njk
        ├── auth
        │   └── create.njk
        ├── foods
        │   ├── _delete.njk
        │   ├── _form.njk
        │   └── index.njk
        ├── layout.njk
        └── users
            └── create.njk
```

[![Edit foods-app-email](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dazzling-bohr-2jb83?fontsize=14&hidenavigation=1&theme=dark)

## Load

---

.env:

```js
{% include_relative codes/foods-app-auth/.env %}
```

src/ìndex.js:

```js
require('dotenv').config();
const fs = require('fs');
const express = require('express');
...
```

```
$ npm i nodemailer dotenv
```

src/config/mail.js:

```js
{% include_relative codes/foods-app-auth/src/config/mail.js %}
```

## Controller

---

src/controllers/mailController.js:

```js
{% include_relative codes/foods-app-auth/src/controllers/mailController.js %}
```

src/controllers/usersController.js:

```js
{% include_relative codes/foods-app-auth/src/controllers/usersController.js %}
```

```
Send email: https://ethereal.email/message/YFeYRLypNQPVnimlYFeYSPKgtgZN.SfxAAAAAciukP6BiWVxTD0koWBy59A
```
