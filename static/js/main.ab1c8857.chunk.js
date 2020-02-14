(this["webpackJsonpmovie-database-crud"]=this["webpackJsonpmovie-database-crud"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),o=a.n(r),l=(a(31),a(8)),c=a(12),s=a(2),m=a(3),u=a(6),d=a(4),v=a(5),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.imagePath,r=e.id;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card movie-card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:n}),i.a.createElement("span",{className:"card-title"},t)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card-action"},i.a.createElement(l.b,{to:"/my-movie-crud/movies/".concat(r)}," VER DETALHES ")))))}}]),t}(i.a.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),t}(n.Component),b=a(25),f=a(15),g=function(){return JSON.parse(localStorage.getItem("movies"))},E=function(e){return localStorage.setItem("movies",JSON.stringify(e))},y=function(e){var t=g().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movies:[],loading:!0},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){setTimeout((function(){var t=g();e(t)}),2e3)})).then((function(t){return e.setState({movies:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies;return e.loading?i.a.createElement(p,null):i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",{className:"header"},"Rotten Tomatoes")),i.a.createElement("div",{className:"movie-list"},t.map((function(e){return i.a.createElement(h,{key:e.title,movie:e})}))),i.a.createElement("footer",null,i.a.createElement(l.b,{to:"/my-movie-crud/movies/new",className:"btn"},"ADICIONAR CART\xc3O")))}}]),t}(n.Component),N=a(16),j=a(11),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state=Object(f.a)({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(N.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_title"},"T\xedtulo")))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_subtitle"},"Subt\xedtulo")))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_image"},"Imagem")))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("textarea",{id:"movie_storyline",className:"materialize-textarea",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_storyline"},"Sinopse")))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"row col"},i.a.createElement("label",{htmlFor:"movie_genre"},"Genre Select"),i.a.createElement("select",{className:"browser-default",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",className:"form-control",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_rating"},"Avalia\xe7\xe3o")))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("button",{className:"btn waves-effect waves-light",type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"movie-form"},i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"col s12"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton())))}}]),t}(i.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={movie:[],loading:!0},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;y(this.props.match.params.id).then((function(t){return e.setState({movie:t,loading:!1})}))}},{key:"render",value:function(){var e=this;if(this.state.loading)return i.a.createElement(p,null);var t=this.state.movie,a=t.title,n=t.storyline,r=t.imagePath,o=t.genre,c=t.rating,s=t.subtitle;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(r)}),i.a.createElement("span",{className:"card-title"},a)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,"Subtitle: ".concat(s)),i.a.createElement("p",null,"Storyline: ".concat(n)),i.a.createElement("p",null,"Genre: ".concat(o)),i.a.createElement("p",null,"Rating: ".concat(c))),i.a.createElement("div",{className:"card-action"},i.a.createElement(l.b,{to:"/my-movie-crud/movies/".concat(this.props.match.params.id,"/edit")}," EDITAR "),i.a.createElement(l.b,{to:"/my-movie-crud/"}," VOLTAR "),i.a.createElement(l.b,{to:"/my-movie-crud/",onClick:function(){return function(e){var t=g();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),E(t),new Promise((function(e){setTimeout((function(){e({status:"OK"})}),1e3)}))}(e.props.match.params.id)}},"DELETAR")))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.state={shouldRedirect:!1},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){(function(e){var t=g(),a=t[t.length-1].id+1,n=Object(f.a)({},e,{id:a});return t=[].concat(Object(b.a)(t),[n]),E(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))})(e).then(this.setState({shouldRedirect:!0}))}},{key:"render",value:function(){return this.state.shouldRedirect.teste?i.a.createElement(c.a,{to:"/my-movie-crud/"}):i.a.createElement(S,{onSubmit:this.handleSubmit})}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={status:"loading",shouldRedirect:!1,movie:[]},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;y(this.props.match.params.id).then((function(t){return e.setState({status:"",movie:t})}))}},{key:"handleSubmit",value:function(e){var t=this;(function(e){var t=g().map((function(t){return t.id===parseInt(e.id,10)?Object(f.a)({},t,{},e):t}));return E(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))})(e).then((function(e){return t.setState({shouldRedirect:!0,movie:e})}))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/my-movie-crud/"}):"loading"===t?i.a.createElement(p,null):i.a.createElement(S,{movie:n,onSubmit:this.handleSubmit})}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"not-found header"},"P\xe1gina n\xe3o encontrada")}}]),t}(n.Component);a(37);var _=function(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/my-movie-crud/",component:O}),i.a.createElement(c.b,{exact:!0,path:"/my-movie-crud/movies/new/",component:w}),i.a.createElement(c.b,{path:"/my-movie-crud/movies/:id/",component:k}),i.a.createElement(c.b,{path:"/my-movie-crud/movies/:id/edit/",component:I}),i.a.createElement(c.b,{component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(R)),o.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ab1c8857.chunk.js.map