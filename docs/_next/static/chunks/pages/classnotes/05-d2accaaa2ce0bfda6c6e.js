(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{8153:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(1717);function a(e,n,t,s,a,r,o){try{var l=e[r](o),d=l.value}catch(m){return void t(m)}l.done?n(d):Promise.resolve(d).then(s,a)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var o=e.apply(n,t);function l(e){a(o,s,r,l,d,"next",e)}function d(e){a(o,s,r,l,d,"throw",e)}l(void 0)}))}}var o=t(8742),l=t.n(o),d=t(7378),m=t(2541),i=t(6171),c=t(4246);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=e.src,t=e.code,s=e.lang,a=(0,d.useState)(""),o=a[0],p=a[1];return(0,d.useEffect)((function(){function e(){return(e=r(l().mark((function e(){var t,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.text();case 5:s=e.sent,p(s.trim());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?p(t.trim()):function(){e.apply(this,arguments)}()}),[]),(0,c.jsx)(m.default,u(u({},m.defaultProps),{},{code:o,language:s,theme:i.default,children:function(e){var n=e.className,t=e.style,s=e.tokens,a=e.getLineProps,r=e.getTokenProps;return(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:n,style:t,children:s.map((function(e,n){return(0,c.jsx)("div",u(u({},a({line:e,key:n})),{},{children:e.map((function(e,n){return(0,c.jsx)("span",u({},r({token:e,key:n})))}))}))}))})})}}))}},2237:function(e,n,t){"use strict";t.r(n);var s=t(7397),a=t(1750),r=(t(7378),t(5318)),o=t(4955),l=t.n(o),d=t(7913),m=t(5979),i=(t(8579),t(8153)),c=["components"],p=function(e){return(0,d.withSSG)(l()({filename:"index.mdx",route:"/classnotes/05",meta:{},pageMap:[{name:"classnote",route:"/classnote"},{name:"classnotes",children:[{name:"01",children:[{name:"index",route:"/classnotes/01"},{name:"meta.json",meta:{index:"Aula 01"}}],route:"/classnotes/01"},{name:"02",children:[{name:"index",route:"/classnotes/02"},{name:"meta.json",meta:{index:"Aula 02"}}],route:"/classnotes/02"},{name:"03",children:[{name:"index",route:"/classnotes/03"},{name:"meta.json",meta:{index:"Aula 03"}}],route:"/classnotes/03"},{name:"04",children:[{name:"index",route:"/classnotes/04"},{name:"meta.json",meta:{index:"Aula 04"}}],route:"/classnotes/04"},{name:"05",children:[{name:"index",route:"/classnotes/05"},{name:"meta.json",meta:{index:"Aula 05"}}],route:"/classnotes/05"},{name:"06",children:[{name:"index",route:"/classnotes/06"},{name:"meta.json",meta:{index:"Aula 06"}}],route:"/classnotes/06"},{name:"07",children:[{name:"index",route:"/classnotes/07"},{name:"meta.json",meta:{index:"Aula 07"}}],route:"/classnotes/07"},{name:"08",children:[{name:"index",route:"/classnotes/08"},{name:"meta.json",meta:{index:"Aula 08"}}],route:"/classnotes/08"},{name:"meta.json",meta:{"01":{title:"Aula 01",type:"nav",hidden:!0},"02":{title:"Aula 02",type:"nav",hidden:!0},"03":{title:"Aula 03",type:"nav",hidden:!0},"04":{title:"Aula 04",type:"nav",hidden:!0},"05":{title:"Aula 05",type:"nav",hidden:!0},"06":{title:"Aula 06",type:"nav",hidden:!0},"07":{title:"Aula 07",type:"nav",hidden:!0},"08":{title:"Aula 08",type:"nav",hidden:!0}}}],route:"/classnotes"},{name:"content",route:"/content"},{name:"exams",children:[{name:"meta.json",meta:{projeto:"Projeto"}},{name:"projeto",route:"/exams/projeto"}],route:"/exams"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Disciplina",classnote:"Aulas",classnotes:{title:"Aulas",type:"nav",hidden:!0},content:"Conte\xfado",tools:"Ferramentas",exams:{title:"Exames",type:"nav",hidden:!0}}},{name:"tools",route:"/tools"}]},m.Z))(e)};function u(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.mdx)(p,(0,s.Z)({components:n},t),(0,r.mdx)("h1",null,"Integra\xe7\xe3o com Front-end"),(0,r.mdx)("h2",null,"Conte\xfado Est\xe1tico e Din\xe2mico"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/front-end/client-server.png",alt:"",parentName:"p"})),(0,r.mdx)("h2",null,"Local da Renderiza\xe7\xe3o"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr"},"Client Side Rendering (CSR)"),(0,r.mdx)("th",{parentName:"tr"},"Server Side Rendering (SSR)"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr"},(0,r.mdx)("img",{src:"/lp2/imgs/front-end/csr.png",alt:"",parentName:"td"})),(0,r.mdx)("td",{parentName:"tr"},(0,r.mdx)("img",{src:"/lp2/imgs/front-end/ssr.png",alt:"",parentName:"td"}))))),(0,r.mdx)("h2",null,"Client Side Rendering (CSR)"),(0,r.mdx)("h3",null,"Arquitetura do MVC"),(0,r.mdx)("p",null,"Model View Controller (MVC)"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/front-end/mvc-csr.png",alt:"",parentName:"p"})),(0,r.mdx)("h3",null,"Estrutura de C\xf3digo"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-txt",parentName:"pre"},"foods-app\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 bootstrap.min.css\n\u2502   \u251c\u2500\u2500 foods.html\n\u2502   \u251c\u2500\u2500 imgs\n\u2502   \u2502   \u251c\u2500\u2500 hamburguer.jpg\n\u2502   \u2502   \u251c\u2500\u2500 salada.jpg\n\u2502   \u2502   \u2514\u2500\u2500 sanduiche.jpg\n\u2502   \u2514\u2500\u2500 js\n\u2502       \u251c\u2500\u2500 bootstrap.min.js\n\u2502       \u251c\u2500\u2500 jquery.min.js\n\u2502       \u2514\u2500\u2500 popper.min.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 controllers\n    \u2502   \u2514\u2500\u2500 foodsController.js\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 models\n    \u2502   \u2514\u2500\u2500 Food.js\n    \u251c\u2500\u2500 routes\n    \u2502   \u2514\u2500\u2500 index.js\n    \u251c\u2500\u2500 seeders\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 views\n        \u251c\u2500\u2500 foods\n        \u2502   \u2514\u2500\u2500 index.njk\n        \u2514\u2500\u2500 layout.njk\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://codesandbox.io/s/express-foods-app-simple-c7jpe?fontsize=14&hidenavigation=1&theme=dark",parentName:"p"},(0,r.mdx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit express-foods-app-simple",parentName:"a"}))),(0,r.mdx)("h3",null,"Loader"),(0,r.mdx)("p",null,"src/index.js:"),(0,r.mdx)(i.Z,{src:"/lp2/codes/foods-app-simple/src/index.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-bash",parentName:"pre"},"$ npm install express nunjucks\n")),(0,r.mdx)("h3",null,"Seed"),(0,r.mdx)("p",null,"src/seeders/index.js:"),(0,r.mdx)(i.Z,{src:"/lp2/codes/foods-app-simple/src/seeders/index.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("h3",null,"Model"),(0,r.mdx)("p",null,"src/models/Food.js:"),(0,r.mdx)(i.Z,{src:"/lp2/codes/foods-app-simple/src/models/Food.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("h3",null,"Router"),(0,r.mdx)("p",null,"src/routes/index.js:"),(0,r.mdx)(i.Z,{src:"/lp2/codes/foods-app-simple/src/routes/index.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("h3",null,"Controller"),(0,r.mdx)("p",null,"src/controllers/foodsController.js:"),(0,r.mdx)(i.Z,{src:"/lp2/codes/foods-app-simple/src/controllers/foodsController.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("h3",null,"View"),(0,r.mdx)(i.Z,{src:"/lp2/codes/foods-app-simple/public/foods.html",lang:"html",mdxType:"Code"}),"\n",(0,r.mdx)("img",{src:"/lp2/imgs/front-end/preview.png",alt:"Preview",width:"100%"}),(0,r.mdx)("h2",null,"Server Side Rendering (SSR)"),(0,r.mdx)("h3",null,"Arquitetura do MVC"),(0,r.mdx)("p",null,"Model View Controller (MVC)"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/front-end/mvc-ssr.png",alt:"",parentName:"p"})),(0,r.mdx)("h3",null,"Estrutura de C\xf3digo"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-txt",parentName:"pre"},"foods-app\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 bootstrap.min.css\n\u2502   \u251c\u2500\u2500 foods.html\n\u2502   \u251c\u2500\u2500 imgs\n\u2502   \u2502   \u251c\u2500\u2500 hamburguer.jpg\n\u2502   \u2502   \u251c\u2500\u2500 salada.jpg\n\u2502   \u2502   \u2514\u2500\u2500 sanduiche.jpg\n\u2502   \u2514\u2500\u2500 js\n\u2502       \u251c\u2500\u2500 bootstrap.min.js\n\u2502       \u251c\u2500\u2500 jquery.min.js\n\u2502       \u2514\u2500\u2500 popper.min.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 controllers\n    \u2502   \u2514\u2500\u2500 foodsController.js\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 models\n    \u2502   \u2514\u2500\u2500 Food.js\n    \u251c\u2500\u2500 routes\n    \u2502   \u2514\u2500\u2500 index.js\n    \u251c\u2500\u2500 seeders\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 views\n        \u251c\u2500\u2500 foods\n        \u2502   \u2514\u2500\u2500 index.njk\n        \u2514\u2500\u2500 layout.njk\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://codesandbox.io/s/express-foods-app-simple-c7jpe?fontsize=14&hidenavigation=1&theme=dark",parentName:"p"},(0,r.mdx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit express-foods-app-simple",parentName:"a"}))),(0,r.mdx)("h3",null,"View"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Bibliotecas:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{href:"https://github.com/mozilla/nunjucks",parentName:"li"},"Nunjucks")),(0,r.mdx)("li",{parentName:"ul"},"Handlebars: ",(0,r.mdx)("a",{href:"https://github.com/pillarjs/hbs",parentName:"li"},"hbs"),", ",(0,r.mdx)("a",{href:"https://github.com/TryGhost/express-hbs",parentName:"li"},"express-hbs")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{href:"https://github.com/mde/ejs",parentName:"li"},"EJS")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{href:"https://github.com/marko-js/marko",parentName:"li"},"Macro"))))),(0,r.mdx)("h4",null,"Fluxo do Nunjucks"),(0,r.mdx)("p",null,"Elementos:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/front-end/template-engine.png",alt:"",parentName:"p"})),(0,r.mdx)("p",null,"Exemplo:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/front-end/nunjucks.png",alt:"",parentName:"p"})),(0,r.mdx)("h4",null,"C\xf3digo"),(0,r.mdx)("p",null,"src/views/foods/index.njk (",(0,r.mdx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks",parentName:"p"},"VScode Nunjucks"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-html",parentName:"pre"},'{% extends "layout.njk" %}\n\n{% set title = "Menu" %}\n\n{% block content %}\n<h1 class="my-5 text-center">{{ title }}</h1>\n\n<section class="card-deck">\n  {% for food in foods %}\n  <div class="card">\n    <div class="card-header text-center font-weight-bold">\n      {{ food.name }}\n    </div>\n    <div class="card-body p-0">\n      <img src="{{ food.image }}" alt="{{ food.name }}" class="w-100" />\n    </div>\n    <div class="card-footer text-right">\n      {{ food.price }}\n    </div>\n  </div>\n  {% endfor %}\n</section>\n{% endblock %}\n\n{% block script %}\n<script>\n  const prices = document.querySelectorAll(\'.card-footer\');\n  prices.forEach((price) => {\n    price.innerHTML = Intl.NumberFormat(\'pt-BR\', {\n      style: \'currency\',\n      currency: \'BRL\',\n    }).format(price.innerHTML);\n  });\n<\/script>\n{% endblock %}\n')),(0,r.mdx)("p",null,"src/views/layout.njk:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-html",parentName:"pre"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n  <link rel="stylesheet" href="/css/bootstrap.min.css">\n  <title>{{ title }}</title>\n</head>\n<body>\n  <div class="container">\n    {% block content %}\n    {% endblock %}\n  <div>\n  <script src="/js/jquery.min.js"><\/script>\n  <script src="/js/popper.min.js"><\/script>\n  <script src="/js/bootstrap.min.js"><\/script>\n  {% block script %}\n  {% endblock %}\n</body>\n</html>\n')),(0,r.mdx)("img",{src:"/lp2/imgs/front-end/preview.png",alt:"Preview",width:"100%"}))}u.isMDXComponent=!0,n.default=u},3129:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classnotes/05",function(){return t(2237)}])}},function(e){e.O(0,[734,36,774,888,179],(function(){return n=3129,e(e.s=n);var n}));var n=e.O();_N_E=n}]);