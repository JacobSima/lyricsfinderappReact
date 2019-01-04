(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/spinner.078aa3f0.gif"},21:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),l=a(5),i=a(6),o=a(8),m=a(7),u=a(9),p=(a(27),function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"LyricFinder"))}),h=a(36),d=a(38),b=a(37),k=a(10),f=a.n(k),y=a(11),E=a(18),g=r.a.createContext(),v=function(e,t){switch(t.type){case"SEARC_TRACKS":return Object(E.a)({},e,{trackList:t.payload,heading:"Search Results"});default:return e}},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={trackList:[],heading:"Top 10 Tracks",showSpinner:!0,dispatch:function(e){return a.setState(function(t){return v(t,e)})}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=2d16a9ba11078dd085c304c62ac525a8");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({trackList:a.message.body.track_list,showSpinner:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.Provider,{value:this.state},this.props.children))}}]),t}(n.Component),j=g.Consumer,x=a(19),O=a.n(x),N=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:O.a,alt:"loading...",style:_}))},_={width:"200px",margin:"40px auto",display:"block"},S=a(35),C=function(e){var t=e.track;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,t.artist_name),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,r.a.createElement("i",{className:"fas fa-play"}),"Track"),":",t.track_name,r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("i",{className:"fas fa-compact-disc"}),"Album"),":",t.track_name),r.a.createElement(S.a,{to:"/lyrics/track/".concat(t.track_id),className:"btn btn-dark btn-block"},r.a.createElement("i",{className:"fas-da-chevron-right"},"View Lyrics")))))},T=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,function(e){var t=e.trackList,a=e.showSpinner,n=e.heading;return a?r.a.createElement(N,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center mb-4"},n),r.a.createElement("div",{className:"row"},t.map(function(e){return r.a.createElement(C,{key:e.track.track_id,track:e.track})})))})}}]),t}(n.Component),A=a(12),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={trackTitle:""},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.findTrack=function(){var e=Object(y.a)(f.a.mark(function e(t,n){var r,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(a.state.trackTitle,"&page_size=10&page=1&s_track_rating=desc&apikey=2d16a9ba11078dd085c304c62ac525a8"));case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,t({type:"SEARC_TRACKS",payload:c.message.body.track_list}),a.setState({trackTitle:""});case 9:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(j,null,function(t){var a=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-4 p-4"},r.a.createElement("h1",{className:"display-4 text-center"},r.a.createElement("i",{className:"fas fa-music"}),"Search For a Song"),r.a.createElement("p",{className:"lead text-center"},"Get The lyrics for any songs"),r.a.createElement("form",{onSubmit:e.findTrack.bind(e,a)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Song title...",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange})),r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block mb-5",type:"submit"},"Get Track Lyrics")))})}}]),t}(n.Component),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(T,null))},R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={track:{},lyrics:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t,a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=2d16a9ba11078dd085c304c62ac525a8"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,this.setState({lyrics:a.message.body.lyrics}),e.next=10,fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(this.props.match.params.id,"&apikey=2d16a9ba11078dd085c304c62ac525a8"));case 10:return n=e.sent,e.next=13,n.json();case 13:r=e.sent,this.setState({track:r.message.body.track}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[0,17]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return console.log(t),void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?r.a.createElement(N,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{to:"/",className:"btn btn-dark btn-sm mb-4"},"GO Back"),r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},t.track_name," by ",r.a.createElement("span",{className:"text-secondary"},t.artist_name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},a.lyrics_body))),r.a.createElement("ul",{className:"list-group mt-3"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Album ID"),": ",t.album_id),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Song Genre"),": ",t.primary_genres.music_genre_list[0].music_genre.music_genre_name)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Explicit Words"),": ",0===t.explicit?"NO":"YES"))}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:F}),r.a.createElement(b.a,{exact:!0,path:"/lyrics/track/:id",component:R}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.09074ddb.chunk.js.map