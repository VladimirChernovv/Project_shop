(this.webpackJsonpproject_2=this.webpackJsonpproject_2||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(7),r=n.n(i),s=(n(13),n(0));function o(){return Object(s.jsx)("nav",{className:"green lighten-3",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"#",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"!#",children:"Repo"})})})]})})}var l=n(8),d=n(1),j=n(3);function u(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function m(e){var t=e.mainId,n=e.displayName,c=e.displayAssets,a=e.displayDescription,i=e.price,r=e.addToBasket,o=void 0===r?Function.prototype:r;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:c[0].url,alt:n})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:n}),Object(s.jsx)("p",{children:a})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({mainId:t,displayName:n,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i.finalPrice," \u0440\u0443\u0431."]})]})]})}function b(e){var t=e.goods,n=void 0===t?[]:t,c=e.addToBasket,a=void 0===c?Function.prototype:c;return n.length?Object(s.jsx)("div",{className:"goods",children:n.map((function(e){return Object(s.jsx)(m,Object(d.a)(Object(d.a)({},e),{},{addToBasket:a}),e.mainId)}))}):Object(s.jsx)("h3",{children:"There is nothing here."})}function h(e){var t=e.quantity,n=void 0===t?0:t,c=e.handleBasketShow,a=void 0===c?Function.prototype:c;return Object(s.jsxs)("div",{className:"cart orange darken-3 white-text",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"add_shopping_cart"}),n?Object(s.jsx)("span",{className:"cart-quantity",children:n}):null]})}function O(e){var t=e.mainId,n=e.displayName,c=e.price,a=e.quantity,i=e.removeFromBasket,r=void 0===i?Function.prototype:i,o=e.incrementQuantity,l=void 0===o?Function.prototype:o,d=e.decrementQuantity,j=void 0===d?Function.prototype:d;return Object(s.jsxs)("li",{className:"collection-item",children:[n," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return j(t)},children:"remove"}),"x",a," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"add"})," = ",c.regularPrice*a," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return r(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})}function p(e){var t=e.order,n=void 0===t?[]:t,c=e.handleBasketShow,a=void 0===c?Function.prototype:c,i=e.removeFromBasket,r=void 0===i?Function.prototype:i,o=e.incrementQuantity,l=e.decrementQuantity,j=n.reduce((function(e,t){return e+t.price.regularPrice*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(e){return Object(s.jsx)(O,Object(d.a)({removeFromBasket:r,incrementQuantity:o,decrementQuantity:l},e),e.mainId)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",j," \u0440\u0443\u0431."]}),Object(s.jsx)("li",{className:"collection-item",children:Object(s.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:a,children:"close"})]})}function x(e){var t=e.displayName,n=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(c.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[n]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[n," \u0434\u0430\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function f(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!0),r=Object(j.a)(i,2),o=r[0],m=r[1],O=Object(c.useState)([]),f=Object(j.a)(O,2),v=f[0],y=f[1],N=Object(c.useState)(!1),g=Object(j.a)(N,2),k=g[0],F=g[1],q=Object(c.useState)(""),B=Object(j.a)(q,2),I=B[0],S=B[1],w=function(){F(!k)};return Object(c.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"b71a22de-e816c967-45531c93-a7f7717a"}}).then((function(e){return e.json()})).then((function(e){a(e.shop),m(!1),console.log(e)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(h,{quantity:v.length,handleBasketShow:w}),o?Object(s.jsx)(u,{}):Object(s.jsx)(b,{goods:n,addToBasket:function(e){var t=v.findIndex((function(t){return t.mainId===e.mainId}));if(t<0){var n=Object(d.a)(Object(d.a)({},e),{},{quantity:1});y([].concat(Object(l.a)(v),[n]))}else{var c=v.map((function(e,n){return n===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));y(c)}S(e.displayName)}}),k&&Object(s.jsx)(p,{order:v,handleBasketShow:w,removeFromBasket:function(e){var t=v.filter((function(t){return t.mainId!==e}));y(t)},incrementQuantity:function(e){var t=v.map((function(t){if(t.mainId===e){var n=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:n})}return t}));y(t)},decrementQuantity:function(e){var t=v.map((function(t){if(t.mainId===e){var n=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:n>=0?n:0})}return t}));y(t)}}),I&&Object(s.jsx)(x,{displayName:I,closeAlert:function(){S("")}})]})}function v(){return Object(s.jsx)("footer",{className:"page-footer green lighten-1",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(f,{}),Object(s.jsx)(v,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9dc166bc.chunk.js.map