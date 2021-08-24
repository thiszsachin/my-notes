(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),c=n.n(r),s=(n(92),n(93),n(8)),o=(n(94),n(146)),i=n(140),l=n(147),u=n(145),j=n(76),d=n(144),p=n(7),b=n(11),h=n(29),O=n(10),f=n.n(O),x=n(17),g=n(24),m=n.n(g),y="USER_LOGIN_REQUEST",v="USER_LOGIN_SUCCESS",S="USER_LOGIN_FAIL",E="USER_LOGIN_LOGOUT",C="USER_REGISTER_REQUEST",w="USER_REGISTER_SUCCESS",I="USER_REGISTER_FAIL",N="USER_UPDATE_REQUEST",L="USER_UPDATE_SUCCESS",_="USER_UPDATE_FAIL",T=function(e,t){return function(){var n=Object(x.a)(f.a.mark((function n(a){var r,c,s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:y}),r={headers:{"Content-type":"application/json"}},n.next=5,m.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:v,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:S,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},k=function(e,t,n,a){return function(){var r=Object(x.a)(f.a.mark((function r(c){var s,o,i;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:C}),s={headers:{"Content-type":"application/json"}},r.next=5,m.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:w,payload:i}),c({type:v,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:I,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},R=n(1),U=function(e){var t=e.setSearch,n=Object(b.useHistory)(),a=Object(p.b)(),r=Object(p.c)((function(e){return e.userLogin})).userInfo;return Object(R.jsx)(o.a,{bg:"primary",expand:"lg",variant:"dark",children:Object(R.jsxs)(i.a,{children:[Object(R.jsx)(o.a.Brand,{children:Object(R.jsx)(h.b,{to:"/",children:"Notes App"})}),Object(R.jsx)(o.a.Toggle,{"aria-controls":"navbarScroll"}),Object(R.jsxs)(o.a.Collapse,{id:"navbarScroll",children:[Object(R.jsx)(l.a,{className:"m-auto",children:Object(R.jsx)(u.a,{className:"d-flex",children:Object(R.jsx)(j.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search",onChange:function(e){return t(e.target.value)}})})}),Object(R.jsx)(l.a,{children:r?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(l.a.Link,{href:"/mynotes",children:"My Notes"}),Object(R.jsxs)(d.a,{title:null===r||void 0===r?void 0:r.name,id:"navbarScrollingDropdown",children:[Object(R.jsx)(d.a.Item,{href:"/profile",children:"My Profile"}),Object(R.jsx)(d.a.Divider,{}),Object(R.jsx)(d.a.Item,{onClick:function(){a(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:E});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.push("/")},children:"Logout"})]})]}):Object(R.jsx)(l.a.Link,{href:"/login",children:"Login"})})]})]})})},P=n(141),A=n(77),D=function(){return Object(R.jsx)("footer",{style:{backgroundColor:"grey",color:"white",width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(R.jsx)(i.a,{children:Object(R.jsx)(P.a,{children:Object(R.jsx)(A.a,{className:"text-center py-3",children:"Copyright \xa9 Notes App 2021"})})})})},G=n(79),B=n(34),F=(n(126),function(){var e=Object(b.useHistory)();return Object(a.useEffect)((function(){localStorage.getItem("userInfo")&&e.push("/myNotes")}),[e]),Object(R.jsx)("div",{className:"main",children:Object(R.jsx)(i.a,{children:Object(R.jsx)(P.a,{children:Object(R.jsxs)("div",{className:"intor-text",children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{className:"title",children:"Welcome To My Notes App"}),Object(R.jsx)("h4",{className:"subtitle",children:"One Safe Place for all your Notes..."})]}),Object(R.jsxs)("div",{className:"buttonContainer",children:[Object(R.jsx)(B.Link,{to:"/login",children:Object(R.jsx)(G.a,{size:"lg",className:"landingbotton",children:"Login"})}),Object(R.jsx)(B.Link,{to:"/register",children:Object(R.jsx)(G.a,{size:"lg",className:"landingbotton",variant:"outline-primary",children:"Register"})})]})]})})})})}),z=n(148),H=n(150),Q=n(143),J=(n(127),function(e){var t=e.title,n=e.children;return Object(R.jsx)("div",{className:"mainBack",children:Object(R.jsx)(i.a,{children:Object(R.jsx)(P.a,{children:Object(R.jsxs)("div",{className:"page",children:[t&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h1",{className:"heading",children:t}),Object(R.jsx)("hr",{})]}),n]})})})})}),M="NOTE_LIST_REQUEST",q="NOTE_LIST_SUCCESS",W="NOTE_LIST_FAIL",K="NOTES_CREATE_REQUEST",V="NOTES_CREATE_SUCCESS",X="NOTES_CREATE_FAIL",Y="NOTES_UPDATE_REQUEST",Z="NOTES_UPDATE_SUCCESS",$="NOTES_UPDATE_FAIL",ee="NOTES_DELETE_REQUEST",te="NOTES_DELETE_SUCCESS",ne="NOTES_DELETE_FAIL",ae=function(e){return function(){var t=Object(x.a)(f.a.mark((function t(n,a){var r,c,s,o,i,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:ee}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,m.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:te,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:ne,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},re=n(142),ce=function(e){var t=e.size,n=void 0===t?100:t;return Object(R.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center",width:"100%",height:"100%"},children:Object(R.jsx)(re.a,{style:{width:n,height:n},animation:"border"})})},se=n(149),oe=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(R.jsx)(se.a,{variant:n,style:{fontSize:20},children:Object(R.jsx)("strong",{children:a})})},ie=function(e){var t=e.search,n=Object(p.b)(),r=Object(p.c)((function(e){return e.noteList})),c=r.loading,s=r.error,o=r.notes,i=Object(p.c)((function(e){return e.userLogin})).userInfo,l=Object(p.c)((function(e){return e.noteCreate})).success,u=Object(p.c)((function(e){return e.noteUpdate})).success,j=Object(p.c)((function(e){return e.noteDelete})),d=j.loading,O=j.error,g=j.success,y=Object(b.useHistory)();return Object(a.useEffect)((function(){n(function(){var e=Object(x.a)(f.a.mark((function e(t,n){var a,r,c,s,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:M}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,m.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:q,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.response,t({type:W,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),i||y.push("/")}),[n,l,y,i,u,g]),Object(R.jsxs)(J,{title:"Welcome Back ".concat(i&&i.name,"..."),children:[Object(R.jsx)(h.b,{to:"/createnote",children:Object(R.jsx)(G.a,{style:{marginLeft:"10px",marginBottom:"6"},size:"lg",children:"Create New Notes"})}),O&&Object(R.jsx)(oe,{variant:"danger",children:O}),d&&Object(R.jsx)(ce,{}),s&&Object(R.jsx)(oe,{variant:"danger",children:s}),c&&Object(R.jsx)(ce,{}),null===o||void 0===o?void 0:o.reverse().filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(R.jsx)(z.a,{children:Object(R.jsxs)(H.a,{style:{margin:10},children:[Object(R.jsxs)(H.a.Header,{style:{display:"flex"},children:[Object(R.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(R.jsx)(z.a.Toggle,{as:H.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(R.jsxs)("div",{children:[Object(R.jsx)(G.a,{href:"/notes/".concat(e._id),children:"Edit"}),Object(R.jsx)(G.a,{className:"mx-2",variant:"danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&n(ae(t)));var t},children:"Delete"})]})]}),Object(R.jsx)(z.a.Collapse,{eventKey:"0",children:Object(R.jsxs)(H.a.Body,{children:[Object(R.jsx)("h4",{children:Object(R.jsxs)(Q.a,{variant:"success",children:["Category - ",e.category]})}),Object(R.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(R.jsx)("p",{children:e.content}),Object(R.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(R.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]})},e._id)}))]})},le=(n(128),function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1],b=Object(p.b)(),h=Object(p.c)((function(e){return e.userLogin})),O=h.loading,g=h.error,m=h.userInfo;Object(a.useEffect)((function(){m&&t.push("/mynotes")}));var y=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),b(T(c,j));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsx)(J,{title:"Login here...",children:Object(R.jsxs)("div",{className:"loginContainer",children:[g&&Object(R.jsx)(oe,{variant:"danger",children:g}),O&&Object(R.jsx)(ce,{}),Object(R.jsxs)(u.a,{onSubmit:y,children:[Object(R.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(R.jsx)(u.a.Label,{children:"Email Address"}),Object(R.jsx)(u.a.Control,{value:c,onChange:function(e){return o(e.target.value)},type:"email",placeholder:"Enter Email"})]}),Object(R.jsxs)(u.a.Group,{controlId:"formBasicPAssword",children:[Object(R.jsx)(u.a.Label,{children:"Password"}),Object(R.jsx)(u.a.Control,{value:j,onChange:function(e){return d(e.target.value)},type:"password",placeholder:"Enter Password"})]}),Object(R.jsx)(G.a,{variant:"primary",type:"submit",children:"Login"})]}),Object(R.jsx)(P.a,{className:"py-3",children:Object(R.jsxs)(A.a,{children:["New User ?",Object(R.jsx)(B.Link,{style:{color:"blue"},to:"/register",children:"Register here"})]})})]})})}),ue=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),i=o[0],l=o[1],j=Object(a.useState)(""),d=Object(s.a)(j,2),h=d[0],O=d[1],g=Object(a.useState)(""),m=Object(s.a)(g,2),y=m[0],v=m[1],S=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),E=Object(s.a)(S,2),C=E[0],w=E[1],I=Object(a.useState)(null),N=Object(s.a)(I,2),L=N[0],_=N[1],T=Object(a.useState)(null),U=Object(s.a)(T,2),D=U[0],F=U[1],z=Object(b.useHistory)(),H=Object(p.b)(),Q=Object(p.c)((function(e){return e.userRegister})),M=Q.loading,q=Q.error,W=Q.userInfo;Object(a.useEffect)((function(){W&&z.push("/mynotes")}),[z,W]);var K=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h!==y?_("Password do not match"):H(k(n,i,h,C));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(J,{title:"REGISTER here...",children:[q&&Object(R.jsx)(oe,{variant:"danger",children:q}),L&&Object(R.jsx)(oe,{variant:"danger",children:L}),M&&Object(R.jsx)(ce,{}),Object(R.jsxs)("div",{className:"loginContainer",children:[Object(R.jsxs)(u.a,{onSubmit:K,children:[Object(R.jsxs)(u.a.Group,{controlId:"name",children:[Object(R.jsx)(u.a.Label,{children:"Name"}),Object(R.jsx)(u.a.Control,{type:"name",placeholder:"Enter Name",onChange:function(e){return r(e.target.value)},value:n})]}),Object(R.jsxs)(u.a.Group,{controlId:"formBasicEmail",children:[Object(R.jsx)(u.a.Label,{children:"Email Address"}),Object(R.jsx)(u.a.Control,{type:"email",placeholder:"Enter Email",onChange:function(e){return l(e.target.value)},value:i})]}),Object(R.jsxs)(u.a.Group,{controlId:"formBasicPassword",children:[Object(R.jsx)(u.a.Label,{children:"Password"}),Object(R.jsx)(u.a.Control,{type:"password",placeholder:"Enter Password",onChange:function(e){return O(e.target.value)},value:h})]}),Object(R.jsxs)(u.a.Group,{controlId:"formBasicCPassword",children:[Object(R.jsx)(u.a.Label,{children:"Confirm Password"}),Object(R.jsx)(u.a.Control,{type:"password",placeholder:"Confirm Password",onChange:function(e){return v(e.target.value)},value:y})]}),D&&Object(R.jsx)(oe,{variant:"danger",children:D}),Object(R.jsxs)(u.a.Group,{controlId:"pic",children:[Object(R.jsx)(u.a.Label,{children:"Profile Picture"}),Object(R.jsx)(u.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return F("Please select an Image");if(F(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return F("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","mynotes"),t.append("cloud_name","mynotes"),fetch("https://api.cloudinary.com/v1_1/mynotes/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){console.log(e),w(e.url.toString())})).catch((function(e){return console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(R.jsx)(G.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(R.jsx)(P.a,{className:"py-3",children:Object(R.jsxs)(A.a,{children:["Already Have an Account ?",Object(R.jsx)(B.Link,{style:{color:"blue"},to:"/login",children:"Login here"})]})})]})]})},je=n(55);var de=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),O=h[0],g=h[1],y=Object(p.b)(),v=Object(p.c)((function(e){return e.noteCreate})),S=v.loading,E=v.error,C=function(){o(""),d(""),g("")};return Object(R.jsx)(J,{title:"Create a Note",children:Object(R.jsxs)(H.a,{children:[Object(R.jsx)(H.a.Header,{children:"Create a new Note"}),Object(R.jsx)(H.a.Body,{children:Object(R.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),c&&j&&O&&(y(function(e,t,n){return function(){var a=Object(x.a)(f.a.mark((function a(r,c){var s,o,i,l,u,j;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:K}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,m.a.post("api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:V,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.response,r({type:X,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(c,j,O)),C(),t.push("/myNotes"))},children:[E&&Object(R.jsx)(oe,{variant:"danger",children:E}),Object(R.jsxs)(u.a.Group,{controlId:"title",children:[Object(R.jsx)(u.a.Label,{children:"Title"}),Object(R.jsx)(u.a.Control,{type:"title",value:c,placeholder:"Enter title",onChange:function(e){return o(e.target.value)}})]}),Object(R.jsxs)(u.a.Group,{controlId:"content",children:[Object(R.jsx)(u.a.Label,{children:"Content"}),Object(R.jsx)(u.a.Control,{as:"textarea",value:j,rows:4,placeholder:"Enter Content",onChange:function(e){return d(e.target.value)}})]}),j&&Object(R.jsxs)(H.a,{children:[Object(R.jsx)(H.a.Header,{children:"Note Preview"}),Object(R.jsx)(H.a.Body,{children:Object(R.jsx)(je.a,{children:j})})]}),Object(R.jsxs)(u.a.Group,{controlId:"content",children:[Object(R.jsx)(u.a.Label,{children:"Category"}),Object(R.jsx)(u.a.Control,{type:"content",value:O,placeholder:"Enter Category",onChange:function(e){return g(e.target.value)}})]}),S&&Object(R.jsx)(ce,{size:50}),Object(R.jsx)(G.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(R.jsx)(G.a,{className:"mx-2",onClick:C,variant:"danger",children:"Reset Fields"})]})}),Object(R.jsxs)(H.a.Footer,{className:"text-muted",children:["Created on - ",(new Date).toLocaleDateString()]})]})})};var pe=function(e){var t=e.match,n=e.history,r=Object(a.useState)(""),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],h=Object(a.useState)(""),O=Object(s.a)(h,2),g=O[0],y=O[1],v=Object(a.useState)(""),S=Object(s.a)(v,2),E=S[0],C=S[1],w=Object(p.b)(),I=Object(p.c)((function(e){return e.noteUpdate})),N=I.loading,L=I.error,_=Object(p.c)((function(e){return e.noteDelete})),T=_.loading,k=_.error;return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(f.a.mark((function e(){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,i(a.title),b(a.content),y(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,E]),Object(R.jsx)(J,{title:"Edit Note",children:Object(R.jsxs)(H.a,{children:[Object(R.jsx)(H.a.Header,{children:"Edit your Note"}),Object(R.jsx)(H.a.Body,{children:Object(R.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),w(function(e,t,n,a){return function(){var r=Object(x.a)(f.a.mark((function r(c,s){var o,i,l,u,j,d;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:Y}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,m.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:Z,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.response,c({type:$,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,o,d,g)),o&&d&&g&&(i(""),y(""),b(""),n.push("/mynotes"))},children:[T&&Object(R.jsx)(ce,{}),L&&Object(R.jsx)(oe,{variant:"danger",children:L}),k&&Object(R.jsx)(oe,{variant:"danger",children:k}),Object(R.jsxs)(u.a.Group,{controlId:"title",children:[Object(R.jsx)(u.a.Label,{children:"Title"}),Object(R.jsx)(u.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(R.jsxs)(u.a.Group,{controlId:"content",children:[Object(R.jsx)(u.a.Label,{children:"Content"}),Object(R.jsx)(u.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:d,onChange:function(e){return b(e.target.value)}})]}),d&&Object(R.jsxs)(H.a,{children:[Object(R.jsx)(H.a.Header,{children:"Note Preview"}),Object(R.jsx)(H.a.Body,{children:Object(R.jsx)(je.a,{children:d})})]}),Object(R.jsxs)(u.a.Group,{controlId:"content",children:[Object(R.jsx)(u.a.Label,{children:"Category"}),Object(R.jsx)(u.a.Control,{type:"category",placeholder:"Enter the Category",value:g,onChange:function(e){return y(e.target.value)}})]}),N&&Object(R.jsx)(ce,{size:50}),Object(R.jsx)(G.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(R.jsx)(G.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&w(ae(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(R.jsxs)(H.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})})},be=(n(131),function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],d=l[1],b=Object(a.useState)(),h=Object(s.a)(b,2),O=h[0],g=h[1],y=Object(a.useState)(""),S=Object(s.a)(y,2),E=S[0],C=S[1],w=Object(a.useState)(""),I=Object(s.a)(w,2),T=I[0],k=I[1],U=Object(a.useState)(),D=Object(s.a)(U,2),B=D[0],F=D[1],z=Object(p.b)(),H=Object(p.c)((function(e){return e.userLogin})).userInfo,Q=Object(p.c)((function(e){return e.userUpdate})),M=Q.loading,q=Q.error,W=Q.success;Object(a.useEffect)((function(){H?(o(H.name),d(H.email),g(H.pic)):t.push("/")}),[t,H]);return Object(R.jsx)(J,{title:"EDIT PROFILE",children:Object(R.jsx)("div",{children:Object(R.jsxs)(P.a,{className:"profileContainer",children:[Object(R.jsx)(A.a,{md:6,children:Object(R.jsxs)(u.a,{onSubmit:function(e){var t;e.preventDefault(),E===T&&z((t={name:c,email:j,password:E,pic:O},function(){var e=Object(x.a)(f.a.mark((function e(n,a){var r,c,s,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:N}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,m.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:L,payload:i}),n({type:v,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[M&&Object(R.jsx)(ce,{}),W&&Object(R.jsx)(oe,{variant:"success",children:"Updated Successfully"}),q&&Object(R.jsx)(oe,{variant:"danger",children:q}),Object(R.jsxs)(u.a.Group,{controlId:"name",children:[Object(R.jsx)(u.a.Label,{children:"Name"}),Object(R.jsx)(u.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(R.jsxs)(u.a.Group,{controlId:"email",children:[Object(R.jsx)(u.a.Label,{children:"Email Address"}),Object(R.jsx)(u.a.Control,{type:"email",placeholder:"Enter Email",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(R.jsxs)(u.a.Group,{controlId:"password",children:[Object(R.jsx)(u.a.Label,{children:"Password"}),Object(R.jsx)(u.a.Control,{type:"password",placeholder:"Enter Password",value:E,onChange:function(e){return C(e.target.value)}})]}),Object(R.jsxs)(u.a.Group,{controlId:"confirmPassword",children:[Object(R.jsx)(u.a.Label,{children:"Confirm Password"}),Object(R.jsx)(u.a.Control,{type:"password",placeholder:"Confirm Password",value:T,onChange:function(e){return k(e.target.value)}})]})," ",B&&Object(R.jsx)(oe,{variant:"danger",children:B}),Object(R.jsxs)(u.a.Group,{controlId:"pic",children:[Object(R.jsx)(u.a.Label,{children:"Change Profile Picture"}),Object(R.jsx)(u.a.File,{onChange:function(e){return function(e){if(F(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return F("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){g(e.url.toString()),console.log(O)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(R.jsx)(G.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(R.jsx)(A.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(R.jsx)("img",{src:O,alt:c,className:"profilePic"})})]})})})});var he=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(R.jsxs)(h.a,{children:[Object(R.jsx)(U,{setSearch:r}),Object(R.jsxs)("main",{children:[Object(R.jsx)(b.Route,{exact:!0,path:"/",component:F}),Object(R.jsx)(b.Route,{path:"/login",component:le}),Object(R.jsx)(b.Route,{path:"/profile",component:be}),Object(R.jsx)(b.Route,{path:"/register",component:ue}),Object(R.jsx)(b.Route,{path:"/createnote",component:de}),Object(R.jsx)(b.Route,{path:"/notes/:id",component:pe}),Object(R.jsx)(b.Route,{path:"/mynotes",component:function(){return Object(R.jsx)(ie,{search:n})}})]}),Object(R.jsx)(D,{})]})},Oe=n(45),fe=n(84),xe=n(85),ge=Object(Oe.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case S:return{loading:!1,error:t.payload};case E:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case w:return{loading:!1,userInfo:t.payload};case I:return{loading:!1,error:t.payload};default:return e}},noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case q:return{loading:!1,notes:t.payload};case W:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case V:return{loading:!1,success:!0};case X:return{loading:!1,error:t.payload};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case Z:return{loading:!1,success:!0};case $:return{loading:!1,error:t.payload,success:!1};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return{loading:!0};case te:return{loading:!1,success:!0};case ne:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case L:return{loading:!1,userInfo:t.payload,success:!0};case _:return{loading:!1,error:t.payload,success:!1};default:return e}}}),me={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ye=[fe.a],ve=Object(Oe.createStore)(ge,me,Object(xe.composeWithDevTools)(Oe.applyMiddleware.apply(void 0,ye)));c.a.render(Object(R.jsx)(p.a,{store:ve,children:Object(R.jsx)(he,{})}),document.getElementById("root"))},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.a2455ac9.chunk.js.map