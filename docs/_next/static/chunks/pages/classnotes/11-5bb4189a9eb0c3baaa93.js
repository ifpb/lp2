(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{8153:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var o=t(1717);function a(e,n,t,o,a,s,r){try{var l=e[s](r),m=l.value}catch(i){return void t(i)}l.done?n(m):Promise.resolve(m).then(o,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(o,s){var r=e.apply(n,t);function l(e){a(r,o,s,l,m,"next",e)}function m(e){a(r,o,s,l,m,"throw",e)}l(void 0)}))}}var r=t(8742),l=t.n(r),m=t(7378),i=t(2541),d=t(6171),u=t(4246);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){var n=e.src,t=e.code,o=e.lang,a=(0,m.useState)(""),r=a[0],c=a[1];return(0,m.useEffect)((function(){function e(){return(e=s(l().mark((function e(){var t,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.text();case 5:o=e.sent,c(o.trim());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?c(t.trim()):function(){e.apply(this,arguments)}()}),[]),(0,u.jsx)(i.default,p(p({},i.defaultProps),{},{code:r,language:o,theme:d.default,children:function(e){var n=e.className,t=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return(0,u.jsx)("pre",{children:(0,u.jsx)("code",{className:n,style:t,children:o.map((function(e,n){return(0,u.jsx)("div",p(p({},a({line:e,key:n})),{},{children:e.map((function(e,n){return(0,u.jsx)("span",p({},s({token:e,key:n})))}))}))}))})})}}))}},3560:function(e,n,t){"use strict";t.r(n);var o=t(7397),a=t(1750),s=(t(7378),t(5318)),r=t(4955),l=t.n(r),m=t(7913),i=t(5979),d=(t(8579),t(8153)),u=["components"],c=function(e){return(0,m.withSSG)(l()({filename:"index.mdx",route:"/classnotes/11",meta:{},pageMap:[{name:"classnote",route:"/classnote"},{name:"classnotes",children:[{name:"01",children:[{name:"index",route:"/classnotes/01"},{name:"meta.json",meta:{index:"Aula 01"}}],route:"/classnotes/01"},{name:"02",children:[{name:"index",route:"/classnotes/02"},{name:"meta.json",meta:{index:"Aula 02"}}],route:"/classnotes/02"},{name:"03",children:[{name:"index",route:"/classnotes/03"},{name:"meta.json",meta:{index:"Aula 03"}}],route:"/classnotes/03"},{name:"04",children:[{name:"index",route:"/classnotes/04"},{name:"meta.json",meta:{index:"Aula 04"}}],route:"/classnotes/04"},{name:"05",children:[{name:"index",route:"/classnotes/05"},{name:"meta.json",meta:{index:"Aula 05"}}],route:"/classnotes/05"},{name:"06",children:[{name:"index",route:"/classnotes/06"},{name:"meta.json",meta:{index:"Aula 06"}}],route:"/classnotes/06"},{name:"07",children:[{name:"index",route:"/classnotes/07"},{name:"meta.json",meta:{index:"Aula 07"}}],route:"/classnotes/07"},{name:"08",children:[{name:"index",route:"/classnotes/08"},{name:"meta.json",meta:{index:"Aula 08"}}],route:"/classnotes/08"},{name:"09",children:[{name:"index",route:"/classnotes/09"},{name:"meta.json",meta:{index:"Aula 09"}}],route:"/classnotes/09"},{name:"10",children:[{name:"index",route:"/classnotes/10"},{name:"meta.json",meta:{index:"Aula 10"}}],route:"/classnotes/10"},{name:"11",children:[{name:"index",route:"/classnotes/11"},{name:"meta.json",meta:{index:"Aula 11"}}],route:"/classnotes/11"},{name:"12",children:[{name:"index",route:"/classnotes/12"},{name:"meta.json",meta:{index:"Aula 12"}}],route:"/classnotes/12"},{name:"meta.json",meta:{10:{title:"Aula 10",type:"nav",hidden:!0},11:{title:"Aula 11",type:"nav",hidden:!0},12:{title:"Aula 12",type:"nav",hidden:!0},"01":{title:"Aula 01",type:"nav",hidden:!0},"02":{title:"Aula 02",type:"nav",hidden:!0},"03":{title:"Aula 03",type:"nav",hidden:!0},"04":{title:"Aula 04",type:"nav",hidden:!0},"05":{title:"Aula 05",type:"nav",hidden:!0},"06":{title:"Aula 06",type:"nav",hidden:!0},"07":{title:"Aula 07",type:"nav",hidden:!0},"08":{title:"Aula 08",type:"nav",hidden:!0},"09":{title:"Aula 09",type:"nav",hidden:!0}}}],route:"/classnotes"},{name:"content",route:"/content"},{name:"exams",children:[{name:"meta.json",meta:{projeto:"Projeto"}},{name:"projeto",route:"/exams/projeto"}],route:"/exams"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Disciplina",classnote:"Aulas",classnotes:{title:"Aulas",type:"nav",hidden:!0},content:"Conte\xfado",tools:"Ferramentas",exams:{title:"Exames",type:"nav",hidden:!0}}},{name:"tools",route:"/tools"}]},i.Z))(e)};function p(e){var n=e.components,t=(0,a.Z)(e,u);return(0,s.mdx)(c,(0,o.Z)({components:n},t),(0,s.mdx)("h1",null,"Upload de Arquivo"),(0,s.mdx)("p",null,(0,s.mdx)("img",{src:"/lp2/imgs/upload-file/foods-app.png",alt:"",parentName:"p"})),(0,s.mdx)("h2",null,"Database"),(0,s.mdx)("p",null,"src/database/migration.js:"),(0,s.mdx)(d.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/upload-file/src/database/migration.js",lang:"js",mdxType:"Code"}),(0,s.mdx)("p",null,"src/database/seeders.json:"),(0,s.mdx)(d.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/upload-file/src/database/seeders.json",lang:"json",mdxType:"Code"}),(0,s.mdx)("p",null,"src/models/Food.js:"),(0,s.mdx)(d.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/upload-file/src/models/Food.js",lang:"js",mdxType:"Code"}),(0,s.mdx)("h2",null,"Back-end"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{className:"language-txt",parentName:"pre"},"$ npm install multer\n")),(0,s.mdx)("p",null,".env.example:"),(0,s.mdx)(d.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/upload-file/.env.example",lang:"js",mdxType:"Code"}),(0,s.mdx)("p",null,"src/config/multer.js:"),(0,s.mdx)(d.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/upload-file/src/config/multer.js",lang:"js",mdxType:"Code"}),(0,s.mdx)("p",null,"src/routes.js:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{className:"language-js",parentName:"pre"},"import { Router } from 'express';\nimport jwt from 'jsonwebtoken';\nimport bcrypt from 'bcryptjs';\nimport multer from 'multer';\n\nimport uploadConfig from './config/multer.js';\nimport Category from './models/Category.js';\nimport Food from './models/Food.js';\nimport User from './models/User.js';\n\n...\n\nrouter.post(\n  '/foods',\n  isAuthenticated,\n  multer(uploadConfig).single('image'),\n  async (req, res) => {\n    try {\n      const food = req.body;\n\n      const image = req.file\n        ? `/imgs/foods/${req.file.filename}`\n        : '/imgs/foods/placeholder.jpg';\n\n      const newFood = await Food.create({ ...food, image });\n\n      res.json(newFood);\n    } catch (error) {\n      throw new Error('Error in create food');\n    }\n  }\n);\n\nrouter.put(\n  '/foods/:id',\n  isAuthenticated,\n  multer(uploadConfig).single('image'),\n  async (req, res) => {\n    try {\n      const id = Number(req.params.id);\n\n      const food = req.body;\n\n      const image = req.file\n        ? `/imgs/foods/${req.file.filename}`\n        : '/imgs/foods/placeholder.jpg';\n\n      const newFood = await Food.update({ ...food, image }, id);\n\n      if (newFood) {\n        res.json(newFood);\n      } else {\n        res.status(400).json({ error: 'Food not found.' });\n      }\n    } catch (error) {\n      throw new Error('Error in update food');\n    }\n  }\n);\n\n...\n\n")),(0,s.mdx)("p",null,"src/index.js:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{className:"language-js",parentName:"pre"},"...\n\nconst app = express();\n\napp.use(express.json());\n\napp.use(express.urlencoded({ extended: true }));\n\n...\n")),(0,s.mdx)("p",null,"request.http:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{className:"language-js",parentName:"pre"},'...\n\n### Create Food with image\n\nPOST {{host}}/foods\nAuthorization: bearer {{token}}\nContent-Type: multipart/form-data; boundary="boundary"\n\n--boundary\nContent-Disposition: form-data; name="name"\n\nMilkshake\n--boundary\nContent-Disposition: form-data; name="price"\n\n12.5\n--boundary\nContent-Disposition: form-data; name="category_id"\n\n2\n--boundary\nContent-Disposition: form-data; name="image"; filename="milkshake.jpg"\nContent-Type: image/jpeg\n\n< ./public/imgs/foods/milkshake.jpg\n--boundary--\n\n...\n')),(0,s.mdx)("h2",null,"Font-end"),(0,s.mdx)("p",null,(0,s.mdx)("img",{src:"/lp2/imgs/upload-file/food-form.png",alt:"",parentName:"p"})),(0,s.mdx)("p",null,"public/foods.html:"),(0,s.mdx)(d.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/upload-file/public/foods.html",lang:"html",mdxType:"Code"}))}p.isMDXComponent=!0,n.default=p},9339:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classnotes/11",function(){return t(3560)}])}},function(e){e.O(0,[734,36,774,888,179],(function(){return n=9339,e(e.s=n);var n}));var n=e.O();_N_E=n}]);