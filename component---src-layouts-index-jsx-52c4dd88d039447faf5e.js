webpackJsonp([79611799117203,60335399758886],{95:function(e,t){e.exports={data:{site:{siteMetadata:{SEOTitle:"前端技术博客",navbar:{showDefaultItems:!0,brand:"首页",external:[{name:"GitHub",to:"https://github.com/konglingwen94"}]},keyword:"frontend,html,css, javascript,vue",description:"A technology sharing blog",url:"https://konglingwen94.github.io",thumbnail:"",language:"zh-cmn-Hans",aboutPage:{show:!0},friends:[{name:"GitHub",to:"https://github.com/konglingwen94"},{name:"FETalk",to:"https://www.zhihu.com/people/kong-ling-wen-55"}],externalItemOfFooter:{title:"Open Source",list:[{name:"konglingwen94.github.io",to:"https://github.com/konglingwen94"},{name:"vue-music",to:"https://github.com/konglingwen94/vue-music"},{name:"element-resize-event-polyfill",to:"https://github.com/konglingwen94/element-resize-event-polyfill"},{name:"anydirectory",to:"https://github.com/konglingwen94/anydirectory"},{name:"egg-nuxt",to:"https://github.com/konglingwen94/egg-nuxt-blog"}]},contact:[{name:"Mail",value:"794430774@qq.com"}],analytics:{google:""}}}},layoutContext:{}}},153:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),l=a(o),i=n(163),u=a(i),c=n(95),s=a(c);t.default=function(e){return l.default.createElement(u.default,r({},e,s.default))},e.exports=t.default},133:function(e,t,n){var a=n(134),r=a.Symbol;e.exports=r},313:function(e,t,n){function a(e){return null==e?void 0===e?u:i:c&&c in Object(e)?o(e):l(e)}var r=n(133),o=n(315),l=n(316),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=a},314:function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},315:function(e,t,n){function a(e){var t=l.call(e,u),n=e[u];try{e[u]=void 0;var a=!0}catch(e){}var r=i.call(e);return a&&(t?e[u]=n:delete e[u]),r}var r=n(133),o=Object.prototype,l=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=a},316:function(e,t){function n(e){return r.call(e)}var a=Object.prototype,r=a.toString;e.exports=n},134:function(e,t,n){var a=n(314),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();e.exports=o},317:function(e,t,n){function a(e,t,n){function a(t){var n=b,a=y;return b=y=void 0,O=t,w=e.apply(a,n)}function s(e){return O=e,_=setTimeout(m,t),k?a(e):w}function f(e){var n=e-x,a=e-O,r=t-n;return T?c(r,E-a):r}function d(e){var n=e-x,a=e-O;return void 0===x||n>=t||n<0||T&&a>=E}function m(){var e=o();return d(e)?p(e):void(_=setTimeout(m,f(e)))}function p(e){return _=void 0,j&&b?a(e):(b=y=void 0,w)}function g(){void 0!==_&&clearTimeout(_),O=0,b=x=y=_=void 0}function v(){return void 0===_?w:p(o())}function h(){var e=o(),n=d(e);if(b=arguments,y=this,x=e,n){if(void 0===_)return s(x);if(T)return clearTimeout(_),_=setTimeout(m,t),a(x)}return void 0===_&&(_=setTimeout(m,t)),w}var b,y,E,w,_,x,O=0,k=!1,T=!1,j=!0;if("function"!=typeof e)throw new TypeError(i);return t=l(t)||0,r(n)&&(k=!!n.leading,T="maxWait"in n,E=T?u(l(n.maxWait)||0,t):E,j="trailing"in n?!!n.trailing:j),h.cancel=g,h.flush=v,h}var r=n(96),o=n(320),l=n(322),i="Expected a function",u=Math.max,c=Math.min;e.exports=a},96:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},318:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},319:function(e,t,n){function a(e){return"symbol"==typeof e||o(e)&&r(e)==l}var r=n(313),o=n(318),l="[object Symbol]";e.exports=a},320:function(e,t,n){var a=n(134),r=function(){return a.Date.now()};e.exports=r},321:function(e,t,n){function a(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(l);return o(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),r(e,t,{leading:a,maxWait:t,trailing:i})}var r=n(317),o=n(96),l="Expected a function";e.exports=a},322:function(e,t,n){function a(e){if("number"==typeof e)return e;if(o(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=c.test(e);return n||s.test(e)?f(e.slice(2),n?2:8):u.test(e)?l:+e}var r=n(96),o=n(319),l=NaN,i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;e.exports=a},156:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=n(10),i=a(l),u=function(e){var t=e.google,n=[];return t&&(n.push(o.default.createElement("script",{key:"ga-script-1",async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+t})),n.push(o.default.createElement("script",{key:"ga-script-2"},"\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', '"+t+"');\n        "))),o.default.createElement(i.default,null,t&&n)};t.default=u,e.exports=t.default},258:function(e,t){},157:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=n(2),i=a(l);n(258);var u=function(e){var t=e.friends,n=e.externalItemOfFooter,a=e.contact;return o.default.createElement("footer",{className:"footer"},o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("ul",{className:"row"},o.default.createElement("li",{className:"col-md-3"},o.default.createElement("h2",null,"友情链接"),t.map(function(e,t){return o.default.createElement("div",{key:e+"-"+t},o.default.createElement("a",{href:e.to,target:"_blank"},e.name))})),o.default.createElement("li",{className:"col-md-3"},o.default.createElement("h2",null,n.title),n.list.map(function(e,t){return o.default.createElement("div",{key:e+"-"+t},o.default.createElement("a",{href:e.to,target:"_blank"},e.name))})),o.default.createElement("li",{className:"col-md-3"},o.default.createElement("h2",null,"联系方式"),a.map(function(e,t){return o.default.createElement("div",{key:e+"-"+t},o.default.createElement("a",{href:"javascript:;"},e.name)," - ",e.value)})),o.default.createElement("li",{className:"col-md-3"},o.default.createElement("h2",null,"内容许可"),o.default.createElement("div",null,"除特别说明外，本站所有内容均采用"," ",o.default.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh",target:"_blank"},"署名-非商业性使用-禁止演绎 4.0 国际 (CC BY-NC-ND 4.0)")," ","进行许可。"))))))};u.propTypes={friends:i.default.array.isRequired,contact:i.default.array.isRequired,externalItemOfFooter:i.default.shape({title:i.default.string.isRequired,list:i.default.array.isRequired}).isRequired},t.default=u,e.exports=t.default},158:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(157),o=a(r);t.default=o.default,e.exports=t.default},260:function(e,t){},160:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=a(i),c=n(2),s=a(c),f=n(12),d=a(f),m=n(15),p=a(m),g=n(321),v=a(g);n(260);var h=0,b=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.state={direction:"",isOnTop:!0},a.handlePageScroll=a.handlePageScroll.bind(a),a}return l(t,e),t.prototype.getScrollTop=function(){return window.document.body.scrollTop||window.document.documentElement.scrollTop},t.prototype.handlePageScroll=function(){var e=this.getScrollTop(),t=e>h?"up":"down",n=e<10;t!==this.state.direction&&this.setState({direction:t}),n!==this.state.isOnTop&&this.setState({isOnTop:n}),h=e},t.prototype.componentDidMount=function(){h=this.getScrollTop(),document.body.onscroll=(0,v.default)(this.handlePageScroll,300)},t.prototype.componentWillUnmount=function(){document.body.onscroll=null},t.prototype.render=function(){var e=this.props,t=e.brand,n=e.showDefaultItems,a=e.external,r=e.showAboutPage,o=this.state,l=o.direction,i=o.isOnTop,c=(0,p.default)({"navbar--is-visible":!i&&"down"===l,"navbar--is-on-top":i}),s=[];return n&&s.push(u.default.createElement("li",{key:"navbar__item-categories",className:"nav-item"},u.default.createElement(d.default,{className:"nav-link",to:"/categories/"},"categories")),u.default.createElement("li",{key:"navbar__item-tags",className:"nav-item"},u.default.createElement(d.default,{className:"nav-link",to:"/tags/"},"Tags"))),r&&s.push(u.default.createElement("li",{key:"navbar__item-about",className:"nav-item"},u.default.createElement(d.default,{className:"nav-link",to:"/about"},"about"))),a.length&&a.forEach(function(e,t){e.to.startsWith("http")?s.push(u.default.createElement("li",{key:"navbar__item-"+e+"-"+t,className:"nav-item"},u.default.createElement("a",{className:"nav-link",href:e.to,target:"_blank"},e.name))):s.push(u.default.createElement("li",{key:"navbar__item-"+e+"-"+t,className:"nav-item"},u.default.createElement(d.default,{className:"nav-link",to:e.to},e.name)))}),u.default.createElement("nav",{className:"navbar navbar-expand-sm fixed-top navbar-custom "+c},u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"collapse navbar-collapse justify-content-between"},u.default.createElement(d.default,{className:"navbar-brand",to:"/"},t),u.default.createElement("ul",{className:"nav navbar-nav navbar-right text-uppercase"},s))))},t}(u.default.Component);b.propTypes={brand:s.default.string.isRequired,showDefaultItems:s.default.bool,external:s.default.array.isRequired,showAboutPage:s.default.bool},b.defaultProps={showDefaultItems:!0,showAboutPage:!0},t.default=b,e.exports=t.default},161:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(160),o=a(r);t.default=o.default,e.exports=t.default},163:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),l=a(o),i=n(2),u=a(i),c=n(10),s=a(c),f=n(161),d=a(f),m=n(158),p=a(m),g=n(156),v=a(g),h=function(e){var t=e.data.site.siteMetadata,n=t.navbar,a=t.aboutPage,o=t.friends,i=t.externalItemOfFooter,u=t.contact,c=t.analytics;return l.default.createElement("div",null,l.default.createElement(s.default,null,l.default.createElement("html",{lang:t.language}),l.default.createElement("meta",{name:"keyword",content:t.keyword}),l.default.createElement("meta",{name:"description",content:t.description}),l.default.createElement("meta",{itemprop:"name",content:t.SEOTitle}),l.default.createElement("meta",{itemprop:"description",content:t.description}),l.default.createElement("meta",{itemprop:"image",content:t.thumbnail}),l.default.createElement("meta",{property:"og:url",content:t.url}),l.default.createElement("meta",{property:"og:type",content:"website"}),l.default.createElement("meta",{property:"og:title",content:t.SEOTitle}),l.default.createElement("meta",{property:"og:description",content:t.description}),l.default.createElement("meta",{property:"og:image",content:t.thumbnail}),l.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.default.createElement("meta",{name:"twitter:title",content:t.SEOTitle}),l.default.createElement("meta",{name:"twitter:description",content:t.description}),l.default.createElement("meta",{name:"twitter:image",content:t.thumbnail})),l.default.createElement(d.default,r({},n,{showAboutPage:a.show})),e.children(),l.default.createElement(p.default,{friends:o,externalItemOfFooter:i,contact:u}),l.default.createElement(v.default,{google:c.google}))};h.propTypes={children:u.default.func,data:u.default.object.isRequired},t.default=h;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-jsx-52c4dd88d039447faf5e.js.map