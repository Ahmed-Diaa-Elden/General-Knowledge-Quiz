(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(19),n(1)),i=n(6),l=n.n(i),u=n(7),f=n.n(u);function m(e){return a.a.createElement("div",{className:"firstPage"},a.a.createElement("h2",null,"Quiz"),a.a.createElement("p",null,"Test your general knowledge"),a.a.createElement("button",{type:"button",onClick:e.onClick},"Start quiz"))}var d={results:[{correct_answer:"Adi\xf3s",incorrect_answers:["Hola","Au Revoir","Salir"],question:"How would one say goodbye in Spanish?"},{correct_answer:"Care Bears",incorrect_answers:["Cabbage Patch Kids","Transformers","Rubik\u2019s Cube"],question:"Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?"},{correct_answer:"Venus",incorrect_answers:["Mercury","Mars","Saturn"],question:"What is the hottest planet in our Solar System?"},{correct_answer:"Mexico",incorrect_answers:["Italy","Portugal","France"],question:"In which country was the caesar salad invented?"},{correct_answer:"Three",incorrect_answers:["One","Two","Four"],question:"How Many Hearts Does An Octopus Have?"}]},h=n(9),y=n(2),b=n(3);function w(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw c}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){var t=e.quiz,n=e.questionNum,r=e.question,c=e.correctAnswer,o=e.incorrectAnswers,i=e.setAnsweredQuestions,l=e.checkAnswersIsClicked,u=a.a.useState({choosed:""}),f=Object(s.a)(u,2),m=f[0],d=f[1],p=a.a.useState([]),v=Object(s.a)(p,2),g=v[0],E=v[1];function k(e){d({choosed:e.currentTarget.textContent});var t,n=w(e.currentTarget.parentElement.children);try{for(n.s();!(t=n.n()).done;){t.value.classList.remove("clicked")}}catch(r){n.e(r)}finally{n.f()}e.currentTarget.classList.add("clicked")}return a.a.useEffect(function(){m.choosed===c?i(function(e){return Object(b.a)({},e,Object(y.a)({},"Q".concat(n),!0))}):i(function(e){return Object(b.a)({},e,Object(y.a)({},"Q".concat(n),!1))})},[m]),a.a.useEffect(function(){var e=Object(h.a)(o),t=Math.floor(Math.random()*e.length);e.splice(t,0,c),E(e)},[t]),a.a.useEffect(function(){!function(){if(l){var e,t=w(document.querySelectorAll(".choices")[n].children);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.className="",r.textContent===c?r.classList.add("right"):r.textContent===m.choosed?r.classList.add("wrong"):r.textContent!==m.choosed&&r.classList.add("notChoosed")}}catch(s){t.e(s)}finally{t.f()}}else{var a,o=w(document.querySelectorAll(".choices")[n].children);try{for(o.s();!(a=o.n()).done;)a.value.className=""}catch(s){o.e(s)}finally{o.f()}}}()},[l]),a.a.createElement("div",{className:"quiz-question"},a.a.createElement("p",{className:"question"},r),a.a.createElement("div",{className:"choices"},a.a.createElement("button",{onClick:k},g[0]),a.a.createElement("button",{onClick:k},g[1]),a.a.createElement("button",{onClick:k},g[2]),a.a.createElement("button",{onClick:k},g[3])),a.a.createElement("hr",{className:"quiz-question-hr"}))}var g=n(8),E=n.n(g);function k(e){var t=a.a.useState(0),n=Object(s.a)(t,2),r=n[0],c=n[1],o=a.a.useState({}),i=Object(s.a)(o,2),l=i[0],u=i[1],f=a.a.useState(!1),m=Object(s.a)(f,2),h=m[0],y=m[1],b=a.a.useState(function(){return d}),w=Object(s.a)(b,2),p=w[0],g=w[1];a.a.useEffect(function(){h||fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple").then(function(e){return e.json()}).then(function(e){return g(e)}).catch(function(e){console.log(e.message)})},[h]);var k=p.results.map(function(e,t){return a.a.createElement(v,{key:t,quiz:p,questionNum:t,question:e.question,incorrectAnswers:e.incorrect_answers,correctAnswer:e.correct_answer,setAnsweredQuestions:u,checkAnswersIsClicked:h})});return a.a.createElement("div",{className:"quiz-page"},r>=p.results.length/2&&a.a.createElement(E.a,null),k,a.a.createElement("div",{className:"checkAnswer-box"},a.a.createElement("p",{className:"scoreMsg",style:{display:h?"block":"none"}},"You scored ".concat(r,"/").concat(p.results.length," correct answers")),a.a.createElement("button",{className:"check-answers",style:{display:h?"none":"inline-block"},onClick:function(e){return function(){var e=0;for(var t in l)l[t]&&++e;c(e),y(function(e){return!e})}()}},"Check answers"),a.a.createElement("button",{className:"check-answers",style:{display:h?"inline-block":"none"},onClick:function(e){return c(0),void y(function(e){return!e})}},"Play again")))}function q(e){var t=a.a.useState(!0),n=Object(s.a)(t,2),r=n[0],c=n[1];return a.a.createElement("main",{className:"main"},a.a.createElement("img",{src:l.a,className:"main--yellow-circle",alt:"yellow-circle"}),r?a.a.createElement(m,{onClick:function(){c(function(e){return!e})}}):a.a.createElement(k,null),a.a.createElement("img",{src:f.a,className:"main--blue-circle",alt:"blue-circle"}))}function C(){return a.a.createElement(q,null)}o.a.createRoot(document.getElementById("root")).render(a.a.createElement(C,null))},6:function(e,t,n){e.exports=n.p+"static/media/yellow-circle.505883c5.svg"},7:function(e,t,n){e.exports=n.p+"static/media/blue-circle.fbc0ef9e.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.47d57edb.chunk.js.map