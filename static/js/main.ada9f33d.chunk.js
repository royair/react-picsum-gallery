(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,n){e.exports=n(335)},200:function(e,t,n){},201:function(e,t,n){},335:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(16),o=n.n(i),c=(n(200),n(26)),l=n(27),s=n(45),u=n(44),h=n(46),m=(n(201),n(78)),d=n.n(m),g=n(115),f=n(9),p=function(){function e(){Object(c.a)(this,e),this.isGrayMode=!1,this.images=[]}return Object(l.a)(e,[{key:"getImages",value:function(){var e=Object(g.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://picsum.photos/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.images=n.slice(0,30);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"toggleGrayMode",value:function(){this.isGrayMode=!this.isGrayMode}}]),e}();Object(f.h)(p,{images:f.m,isGrayMode:f.m,toggleGrayMode:f.d});var y=p,v=n(34),b=n(28),j=function(e){var t=e.picture,n=e.isGreyMode?"Picture grey":"Picture",a="https://picsum.photos/300/300?image=".concat(t.id);return r.a.createElement(b.a,{className:n},r.a.createElement("img",{src:a}),r.a.createElement(b.b,null,r.a.createElement("div",{className:"Author-name"},t.author)))},O=n(43),G=n.n(O),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).filter="",n.handelChangeGreyMode=function(){n.props.galleryStore.toggleGrayMode()},n.handleFilter=function(e){n.filter=e.target.value},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.galleryStore.getImages()}},{key:"render",value:function(){var e=this,t=this.images.map(function(t){return r.a.createElement(j,{key:t.id,picture:t,isGreyMode:e.props.galleryStore.isGrayMode})});return r.a.createElement("div",{className:"Gallery"},r.a.createElement("header",null,r.a.createElement(b.d,{id:"outlined-name",label:"Filter",onChange:this.handleFilter,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement(G.a,{control:r.a.createElement(b.c,{checked:this.props.galleryStore.isGrayMode,onChange:this.handelChangeGreyMode,value:"Grey filter"}),label:"Grey filter"})),r.a.createElement("section",{className:"Images"},t.length?t:"No result found"))}},{key:"images",get:function(){var e=this;return""===this.filter?this.props.galleryStore.images:this.props.galleryStore.images.filter(function(t){return t.author===e.filter})}}]),t}(a.Component);Object(f.h)(w,{images:f.e,filter:f.m,handleFilter:f.d});var E=Object(v.b)("galleryStore")(Object(v.c)(w)),M={galleryStore:new y},k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,M,r.a.createElement(E,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[195,1,2]]]);
//# sourceMappingURL=main.ada9f33d.chunk.js.map