(this.webpackJsonplolchamptracker=this.webpackJsonplolchamptracker||[]).push([[0],{62:function(e,a,n){},63:function(e,a,n){},69:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(48),o=n.n(r),c=(n(62),n.p,n(63),n(6)),l=n(102),s=n(96),p=n(101),g=n(2);function d(e){var a=Object(t.useState)(0),n=Object(c.a)(a,2),i=(n[0],n[1],Object(t.useState)(!1)),r=Object(c.a)(i,2),o=r[0],d=r[1];return Object(g.jsx)(p.a.div,{whileHover:{scale:1.1},onClick:function(e){var a=e.target.id,n=JSON.parse(localStorage.getItem("played champ"));if(!1===o)n.push(a),localStorage.setItem("played champ",JSON.stringify(n)),d(!0),console.log("you clicked me");else if(!0===o){var t=JSON.parse(localStorage.getItem("played champ"));t=t.filter((function(e){return a!==e})),localStorage.setItem("played champ",JSON.stringify(t)),d(!1)}},id:e.props,children:Object(g.jsxs)(s.a,{margin:"10px",children:[Object(g.jsx)(l.a,{children:Object(g.jsx)("img",{id:e.props,src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.props,"_0.jpg"),height:"225px"})}),Object(g.jsx)(l.a,{sx:{width:"124px",height:"53px",zIndex:1,bgcolor:"rgba(0, 0, 0, 0.5)",marginTop:-60},children:Object(g.jsx)(l.a,{sx:{marginBottom:5},children:Object(g.jsx)("h1",{style:{fontSize:"22px",marginTop:"5px",marginLeft:"10px",color:"white",fontFamily:"Friz Quadrata"},children:e.props})})}),o?Object(g.jsx)(l.a,{sx:{width:"124px",height:"224px",zIndex:1,bgcolor:"rgba(0, 0, 0, 0.8)",marginTop:-220,marginBottom:-5},id:e.props}):null]})})}var h=n(106),x=n(103);function j(e){var a=Object(t.useState)(0),n=Object(c.a)(a,2),i=(n[0],n[1],Object(t.useState)(!0)),r=Object(c.a)(i,2),o=r[0],d=r[1];return Object(g.jsx)(p.a.div,{whileHover:{scale:1.1},onClick:function(e){var a=e.target.id,n=JSON.parse(localStorage.getItem("played champ"));if(!1===o)n.push(a),localStorage.setItem("played champ",JSON.stringify(n)),d(!0),console.log("you clicked me");else if(!0===o){var t=JSON.parse(localStorage.getItem("played champ"));t=t.filter((function(e){return a!==e})),localStorage.setItem("played champ",JSON.stringify(t)),d(!1)}},id:e.props,children:Object(g.jsxs)(s.a,{margin:"10px",children:[Object(g.jsx)(l.a,{children:Object(g.jsx)("img",{id:e.props,src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.props,"_0.jpg"),height:"225px"})}),Object(g.jsx)(l.a,{sx:{width:"124px",height:"53px",zIndex:1,bgcolor:"rgba(0, 0, 0, 0.5)",marginTop:-60},children:Object(g.jsx)(l.a,{sx:{marginBottom:5},children:Object(g.jsx)("h1",{style:{fontSize:"22px",marginTop:"5px",marginLeft:"10px",color:"white",fontFamily:"Friz Quadrata"},children:e.props})})}),o?Object(g.jsx)(l.a,{sx:{width:"124px",height:"220px",zIndex:1,bgcolor:"rgba(0, 0, 0, 0.8)",marginTop:-220,marginBottom:-5},id:e.props}):null]})})}var m=n(107),u=n(104),b=["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","DrMundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","MonkeyKing","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra","Vex"],O=JSON.parse(localStorage.getItem("played champ"));function f(){var e=Object(t.useState)(""),a=Object(c.a)(e,2),n=a[0],i=a[1],r=b.filter((function(e){return e.toLowerCase().startsWith(n.toLowerCase())}));console.log(r);var o=Object(t.useState)(!1),s=Object(c.a)(o,2),p=s[0],f=s[1],y=Object(t.useState)(!0),S=Object(c.a)(y,2),k=S[0],v=S[1],w=Object(t.useState)(!0),z=Object(c.a)(w,2),T=z[0],F=z[1],I=Object(t.useState)(!1),L=Object(c.a)(I,2),C=L[0],J=L[1],N=Object(t.useState)(!1),R=Object(c.a)(N,2),K=R[0],M=R[1],A=Object(t.useState)(0),V=Object(c.a)(A,2),B=V[0],Q=V[1],G=Math.floor(Math.random()*b.length);return Object(g.jsxs)(l.a,{children:[Object(g.jsx)(l.a,{sx:{flexGrow:1},align:"center",style:{position:"fixed",top:0,width:"100%",height:"145px",backgroundColor:"#121c40",zIndex:10,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},boxShadow:"initial",children:Object(g.jsxs)(h.a,{container:!0,justifyContent:"center",spacing:0,children:[Object(g.jsx)(h.a,{marginTop:"45px",marginLeft:"-100px",marginRight:"20px",children:Object(g.jsx)(x.a,{size:"large",onClick:function(){window.location.reload(!1)},variant:"contained",children:Object(g.jsx)("span",{style:{fontFamily:"Friz Quadrata"},children:"Lock In "})})}),Object(g.jsx)(h.a,{item:!0,xs:0,marginTop:"45px",marginRight:"100px",children:Object(g.jsx)(x.a,{size:"large",onClick:function(){M(!1),G=Math.floor(Math.random()*b.length),M(!0),Q(b[G]),console.log(b[G])},variant:"contained",children:Object(g.jsx)("span",{style:{fontFamily:"Friz Quadrata"},children:"Random"})})}),Object(g.jsxs)(h.a,{marginTop:"5px",width:"90px",height:"90px",marginLeft:"-50px",marginRight:"53px",children:[Object(g.jsx)(l.a,{width:"90px",height:"90px",marginLeft:"50px",marginRight:"50px",children:K?Object(g.jsx)("img",{height:"90px",src:"http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/".concat(B,".png")}):null}),Object(g.jsx)(l.a,{margin:"10px",children:Object(g.jsx)(m.a,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:160},children:Object(g.jsx)(u.a,{sx:{ml:1,flex:1},placeholder:"Search Champions",inputProps:{"aria-label":"search google maps"},onChange:function(e){i(e.target.value)}})})})]}),Object(g.jsx)(h.a,{marginTop:"45px",marginLeft:"100px",children:Object(g.jsx)(x.a,{size:"large",onClick:function(){O=[],localStorage.setItem("played champ",JSON.stringify(O)),window.location.reload(!1)},variant:"contained",children:Object(g.jsx)("span",{style:{fontFamily:"Friz Quadrata"},children:"Reset"})})}),T?Object(g.jsx)(h.a,{marginTop:"45px",marginLeft:"20px",marginRight:"-100px",children:Object(g.jsx)(x.a,{size:"large",onClick:function(){v(!1),f(!0),F(!1),J(!0)},variant:"contained",children:Object(g.jsx)("span",{style:{fontFamily:"Friz Quadrata"},children:"Played"})})}):null,C?Object(g.jsx)(h.a,{marginTop:"45px",marginLeft:"20px",marginRight:"-100px",children:Object(g.jsx)(x.a,{size:"large",onClick:function(){v(!0),f(!1),F(!0),J(!1)},variant:"contained",children:Object(g.jsx)("span",{style:{fontFamily:"Friz Quadrata"},children:"Unplayed"})})}):null]})}),k?Object(g.jsx)(h.a,{display:"flex",flexWrap:"wrap",marginLeft:"25px",marginTop:"150px",children:r.map((function(e){return Object(g.jsx)(d,{props:e})}))}):null,p?Object(g.jsx)(h.a,{display:"flex",flexWrap:"wrap",marginLeft:"12px",marginTop:"150px",children:O.map((function(e){return Object(g.jsx)(j,{props:e})}))}):null]})}console.log(O),b=b.filter((function(e){return!O.includes(e)})),console.log(b);var y=function(){return Object(g.jsx)(f,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(a){var n=a.getCLS,t=a.getFID,i=a.getFCP,r=a.getLCP,o=a.getTTFB;n(e),t(e),i(e),r(e),o(e)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.244914df.chunk.js.map