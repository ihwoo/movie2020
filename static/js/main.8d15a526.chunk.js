(this.webpackJsonpreact_test_20=this.webpackJsonpreact_test_20||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=(a(37),a(7)),i=a(1),m=a(9),l=a(10),u=a(12),p=a(11),d=(a(38),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.async=!0,e.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=e8847edd20be9265c187564da07be13f&autoload=false",document.head.appendChild(e),e.onload=function(){kakao.maps.load((function(){var e=document.getElementById("map");new kakao.maps.Map(e,{center:new kakao.maps.Coords(523951.25,1085073.75)})}))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"Map",id:"map"})}}]),a}(r.a.Component)),v=a(15),f=a.n(v),y=a(29),h=a(30),E=a.n(h);a(57);var b=function(e){var t=e.year,a=e.title,n=e.summary,o=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie_data"},r.a.createElement(s.b,{to:{pathname:"movie-detail",state:{year:t,title:a,summary:n,poster:o,genres:c}}},r.a.createElement("img",{src:o,alt:a,title:a}),r.a.createElement("div",null,r.a.createElement("h2",{className:"movie_title"},a),r.a.createElement("h2",{className:"movie_year"},"From: ",t),r.a.createElement("h4",{className:"movie_summary"},"Summary: ",n.slice(0,180),"..."),r.a.createElement("ul",{className:"Movie_genres"},c.map((function(e,t){return r.a.createElement("li",{className:"movie_gnere",key:t},e)}))))))},k=(a(63),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(y.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading....")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0==t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props,t=e.location;e.history;return void 0==t.state?null:r.a.createElement("span",null,t.state.title)}}]),a}(r.a.Component);a(64);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))};var _=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:k}),r.a.createElement(i.a,{path:"/about",component:d}),r.a.createElement(i.a,{path:"/movie-detail",component:g}))};c.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8d15a526.chunk.js.map