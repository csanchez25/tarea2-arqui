(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,4,5],{304:function(t,e,l){"use strict";l.r(e);var n={methods:{goHome:function(){window.location.href="/"}}},r=l(50),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-[15px]"},[e("button",{staticClass:"w-full bg-blue-500 text-white py-2 px-4 rounded",on:{click:t.goHome}},[t._v("\n    TOP MÚSICA JAZZ\n  ")])])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,l){"use strict";l.r(e);var n=l(50),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"mt-[15px]"},[t("button",{staticClass:"w-full bg-blue-500 text-white py-2 px-4 rounded",attrs:{disabled:""}},[this._v("\n    © 2024 - Jazz Catalog by Jacksem y Caleb\n  ")])])}],!1,null,null,null);e.default=component.exports},309:function(t,e,l){"use strict";l.r(e);var n={name:"AlbumCard",props:{album:{type:Object,required:!0}}},r=l(50),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"},[e("img",{staticClass:"w-full h-48 object-cover",attrs:{src:t.album.image,alt:t.album.title}}),t._v(" "),e("div",{staticClass:"p-4"},[e("h3",{staticClass:"text-xl font-semibold mb-2"},[t._v(t._s(t.album.title))]),t._v(" "),e("p",{staticClass:"text-gray-700 mb-1"},[e("strong",[t._v("Artista:")]),t._v(" "+t._s(t.album.artist))]),t._v(" "),e("p",{staticClass:"text-gray-700 mb-1"},[e("strong",[t._v("Año de lanzamiento:")]),t._v(" "+t._s(t.album.release_year))]),t._v(" "),e("nuxt-link",{staticClass:"text-blue-500 hover:underline mt-2 inline-block",attrs:{to:"/albums/".concat(t.album.id)}},[t._v("Ver detalles")])],1)])}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,l){"use strict";l.r(e);var n=l(12),r=(l(51),l(304)),o=l(305),c=l(309),d={components:{HeaderView:r.default,FooterView:o.default,AlbumCard:c.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,e.next=3,l("albums").fetch();case 3:return n=e.sent,e.abrupt("return",{albums:n});case 5:case"end":return e.stop()}}),e)})))()}},m=d,f=l(50),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"min-h-screen flex flex-col"},[e("HeaderView"),t._v(" "),e("main",{staticClass:"flex-grow container mx-auto px-4 py-6"},[e("h1",{staticClass:"text-3xl font-bold mb-6 text-center"},[t._v("Álbumes de Jazz")]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},t._l(t.albums,(function(t){return e("AlbumCard",{key:t.id,attrs:{album:t}})})),1)]),t._v(" "),e("FooterView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderView:l(304).default,AlbumCard:l(309).default,FooterView:l(305).default})}}]);