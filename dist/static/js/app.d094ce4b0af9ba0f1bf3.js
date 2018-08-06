webpackJsonp([1],{"1/oy":function(t,o){},"3jXW":function(t,o,e){t.exports=e.p+"static/img/books.c6ad5e7.jpg"},"9M+g":function(t,o){},GfHa:function(t,o){},Id91:function(t,o){},Jmt5:function(t,o){},Jo1k:function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=e("7+uW"),n=e("e6fC"),s={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{src:e("3jXW")}}),this._v(" "),o("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},s,!1,function(t){e("URTW")},null,null).exports,a=e("/ocq"),l=e("fZjL"),u=e.n(l),b=e("mtWM"),c=e.n(b),d={name:"BookList",data:function(){return{fields:{isbn:{label:"ISBN",sortable:!0,class:"text-center"},title:{label:"Book Title",sortable:!0},actions:{label:"Action",class:"text-center"}},books:[],errors:[]}},created:function(){var t=this;c.a.defaults.headers.common.Authorization=localStorage.getItem("jwtToken"),this.$store.dispatch("loadBook").then(function(){var o=t.$store.getters;t.books=o[u()(o)[0]]}).catch(function(o){t.errors.push(o),401===o.response.status&&t.$router.push({name:"Login"})})},computed:{books:function(){return this.$store.getters.books}},methods:{details:function(t){this.$router.push({name:"ShowBook",params:{id:t._id}})},logout:function(){localStorage.removeItem("jwtToken"),this.$router.push({name:"Login"})}}},p={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("h2",[t._v("\n        Book List\n        "),e("b-link",{attrs:{href:"#/add-book"}},[t._v("(Add Book)")]),t._v(" "),e("b-link",{on:{click:function(o){t.logout()}}},[t._v("(Logout)")])],1),t._v(" "),e("b-table",{attrs:{striped:"",hover:"",items:t.books,fields:t.fields},scopedSlots:t._u([{key:"actions",fn:function(o){return[e("b-btn",{attrs:{size:"sm"},on:{click:function(e){e.stopPropagation(),t.details(o.item)}}},[t._v("Details")])]}}])}),t._v(" "),t.errors&&t.errors.length?e("ul",t._l(t.errors,function(o,r){return e("li",{key:r},[t._v("\n          "+t._s(o.message)+"\n        ")])})):t._e()],1)],1)},staticRenderFns:[]},m=e("VU/8")(d,p,!1,null,null,null).exports,f={name:"Login",data:function(){return{login:{},errors:[]}},methods:{onSubmit:function(t){var o=this;t.preventDefault(),c.a.post("/api/auth/login/",this.login).then(function(t){localStorage.setItem("jwtToken",t.data.token),o.$router.push({name:"BookList"})}).catch(function(t){console.log(t),o.errors.push(t)})},register:function(){this.$router.push({name:"Register"})}}},h={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{cols:"6"}},[t.errors&&t.errors.length?e("div",t._l(t.errors,function(o,r){return e("div",{key:r},[e("b-alert",{attrs:{show:""}},[t._v(t._s(o.message))])],1)})):t._e(),t._v(" "),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Username"}},[e("b-form-input",{attrs:{id:"username",state:t.state},model:{value:t.login.username,callback:function(o){t.$set(t.login,"username","string"==typeof o?o.trim():o)},expression:"login.username"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Password"}},[e("b-form-input",{attrs:{type:"password",id:"password",state:t.state},model:{value:t.login.password,callback:function(o){t.$set(t.login,"password","string"==typeof o?o.trim():o)},expression:"login.password"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")]),t._v(" "),e("b-button",{attrs:{type:"button",variant:"success"},on:{click:function(o){o.stopPropagation(),t.register()}}},[t._v("Register")])],1)],1)],1)},staticRenderFns:[]},k=e("VU/8")(f,h,!1,null,null,null).exports,v={name:"Register",data:function(){return{register:{},errors:[]}},methods:{onSubmit:function(t){var o=this;t.preventDefault(),c.a.post("/api/auth/register/",this.register).then(function(t){alert("Registered successfully"),o.$router.push({name:"Login"})}).catch(function(t){console.log(t),o.errors.push(t)})}}},_={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{cols:"6"}},[e("h2",[t._v("Please Register")]),t._v(" "),t.errors&&t.errors.length?e("div",t._l(t.errors,function(o,r){return e("div",{key:r},[e("b-alert",{attrs:{show:""}},[t._v(t._s(o.message))])],1)})):t._e(),t._v(" "),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Username"}},[e("b-form-input",{attrs:{id:"username",state:t.state},model:{value:t.register.username,callback:function(o){t.$set(t.register,"username","string"==typeof o?o.trim():o)},expression:"register.username"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Password"}},[e("b-form-input",{attrs:{type:"password",id:"password",state:t.state},model:{value:t.register.password,callback:function(o){t.$set(t.register,"password","string"==typeof o?o.trim():o)},expression:"register.password"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Register")]),t._v(" "),e("b-button",{attrs:{type:"button",variant:"success"},on:{click:function(o){t.$router.go(-1)}}},[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]},g=e("VU/8")(v,_,!1,null,null,null).exports,y={name:"ShowBook",data:function(){return{book:[]}},created:function(){var t=this;c.a.get("/book/"+this.$route.params.id).then(function(o){t.book=o.data}).catch(function(o){t.errors.push(o)})},methods:{editbook:function(t){this.$router.push({name:"EditBook",params:{id:t}})},deletebook:function(t){var o=this;c.a.delete("/book/"+t).then(function(t){o.$router.push({name:"BookList"})}).catch(function(t){o.errors.push(t)})}}},$={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("h2",[t._v("\n      Edit Book\n      "),e("b-link",{attrs:{href:"#/"}},[t._v("(Book List)")])],1),t._v(" "),e("b-jumbotron",[e("template",{slot:"header"},[t._v("\n        "+t._s(t.book.title)+"\n      ")]),t._v(" "),e("template",{slot:"lead"},[t._v("\n        ISBN: "+t._s(t.book.isbn)),e("br"),t._v("\n        Author: "+t._s(t.book.author)),e("br"),t._v("\n        Description: "+t._s(t.book.description)),e("br"),t._v("\n        Published Year: "+t._s(t.book.published_year)),e("br"),t._v("\n        Publisher: "+t._s(t.book.publisher)),e("br")]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("p",[t._v("\n        Updated Date: "+t._s(t.book.updated_date)+"\n      ")]),t._v(" "),e("b-btn",{attrs:{variant:"success"},on:{click:function(o){o.stopPropagation(),t.editbook(t.book._id)}}},[t._v("Edit")]),t._v(" "),e("b-btn",{attrs:{variant:"danger"},on:{click:function(o){o.stopPropagation(),t.deletebook(t.book._id)}}},[t._v("Delete")])],2)],1)],1)},staticRenderFns:[]};var w=e("VU/8")(y,$,!1,function(t){e("Jo1k")},null,null).exports,x={name:"CreateBook",data:function(){return{book:{},id:""}},methods:{onSubmit:function(t){var o=this;t.preventDefault(),this.$store.dispatch("addBook",this.book).then(function(){var t=o.$store.getters;o.id=t[u()(t)[1]],o.$router.push({name:"ShowBook",params:{id:o.id}})}).catch(function(t){o.errors.push(t)})}}},z={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("h2",[t._v("\n      Add Book\n      "),e("b-link",{attrs:{href:"#/"}},[t._v("(Book List)")])],1),t._v(" "),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter ISBN"}},[e("b-form-input",{attrs:{id:"isbn",state:t.state},model:{value:t.book.isbn,callback:function(o){t.$set(t.book,"isbn","string"==typeof o?o.trim():o)},expression:"book.isbn"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[e("b-form-input",{attrs:{id:"title",state:t.state},model:{value:t.book.title,callback:function(o){t.$set(t.book,"title","string"==typeof o?o.trim():o)},expression:"book.title"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[e("b-form-input",{attrs:{id:"author",state:t.state},model:{value:t.book.author,callback:function(o){t.$set(t.book,"author","string"==typeof o?o.trim():o)},expression:"book.author"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[e("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.book.description,callback:function(o){t.$set(t.book,"description",o)},expression:"book.description"}},[t._v(t._s(t.book.description))])],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Publisher Year"}},[e("b-form-input",{attrs:{id:"published_year",state:t.state},model:{value:t.book.published_year,callback:function(o){t.$set(t.book,"published_year","string"==typeof o?o.trim():o)},expression:"book.published_year"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Publisher"}},[e("b-form-input",{attrs:{id:"publisher",state:t.state},model:{value:t.book.publisher,callback:function(o){t.$set(t.book,"publisher","string"==typeof o?o.trim():o)},expression:"book.publisher"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},B=e("VU/8")(x,z,!1,null,null,null).exports,E={name:"EditBook",data:function(){return{book:{}}},created:function(){var t=this;c.a.get("/book/"+this.$route.params.id).then(function(o){t.book=o.data}).catch(function(o){t.errors.push(o)})},methods:{onSubmit:function(t){var o=this;t.preventDefault(),c.a.put("/book/"+this.$route.params.id,this.book).then(function(t){o.$router.push({name:"ShowBook",params:{id:o.$route.params.id}})}).catch(function(t){o.errors.push(t)})}}},S={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("h2",[t._v("\n      Edit Book\n      "),e("router-link",{attrs:{to:{name:"ShowBook",params:{id:t.book._id}}}},[t._v("(Show Book)")])],1),t._v(" "),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter ISBN"}},[e("b-form-input",{attrs:{id:"isbn",state:t.state},model:{value:t.book.isbn,callback:function(o){t.$set(t.book,"isbn","string"==typeof o?o.trim():o)},expression:"book.isbn"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[e("b-form-input",{attrs:{id:"title",state:t.state},model:{value:t.book.title,callback:function(o){t.$set(t.book,"title","string"==typeof o?o.trim():o)},expression:"book.title"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[e("b-form-input",{attrs:{id:"author",state:t.state},model:{value:t.book.author,callback:function(o){t.$set(t.book,"author","string"==typeof o?o.trim():o)},expression:"book.author"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[e("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.book.description,callback:function(o){t.$set(t.book,"description",o)},expression:"book.description"}},[t._v(t._s(t.book.description))])],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Publisher Year"}},[e("b-form-input",{attrs:{id:"published_year",state:t.state},model:{value:t.book.published_year,callback:function(o){t.$set(t.book,"published_year","string"==typeof o?o.trim():o)},expression:"book.published_year"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Publisher"}},[e("b-form-input",{attrs:{id:"publisher",state:t.state},model:{value:t.book.publisher,callback:function(o){t.$set(t.book,"publisher","string"==typeof o?o.trim():o)},expression:"book.publisher"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")])],1)],1)],1)},staticRenderFns:[]},H=e("VU/8")(E,S,!1,null,null,null).exports;r.a.use(a.a);var L=new a.a({routes:[{path:"/",name:"BookList",component:m},{path:"/login",name:"Login",component:k},{path:"/register",name:"Register",component:g},{path:"/show-book/:id",name:"ShowBook",component:w},{path:"/add-book",name:"CreateBook",component:B},{path:"/edit-book/:id",name:"EditBook",component:H}]}),R=e("//Fk"),P=e.n(R),U=e("NYxO");r.a.use(U.a);var j=new U.a.Store({state:{books:[],id:""},getters:{books:function(t){return t.books},id:function(t){return t.id}},mutations:{load:function(t,o){t.books=o},add:function(t,o){t.books.push(o),t.id=o._id},edit:function(t,o){t.books[t.books.indexOf(o)]=o},delete:function(t,o){t.books.splice(t.books.indexOf(o),1)}},actions:{loadBook:function(t){var o=this,e=t.commit;return new P.a(function(t){c.a.get("/book").then(function(t){return t.data}).then(function(o){e("load",o),t()}).catch(function(t){o.errors.push(t),401===t.response.status&&o.$router.push({name:"Login"})})})},addBook:function(t,o){var e=this,r=t.commit;return new P.a(function(t){c.a.post("/book",o).then(function(o){r("add",o.data),t()}).catch(function(t){e.errors.push(t)})})},editBook:function(t,o){var e=t.context,r=o.id;this.$axios.post("/book/"+r),e.commit("edit",response)}}});e("Jmt5"),e("9M+g");r.a.config.productionTip=!1,r.a.use(n.a),new r.a({el:"#app",store:j,router:L,components:{App:i},template:"<App/>"})},URTW:function(t,o){},zj2Q:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.d094ce4b0af9ba0f1bf3.js.map