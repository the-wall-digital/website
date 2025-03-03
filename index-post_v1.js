"use strict";(()=>{var dv=Object.defineProperty;var fv=(s,e,t)=>e in s?dv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var He=(s,e,t)=>fv(s,typeof e!="symbol"?e+"":e,t);function $n(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yr={duration:.5,overwrite:!1,delay:0},Fu,ui,Lt,an=1e8,St=1/an,Su=Math.PI*2,pv=Su/4,mv=0,Rp=Math.sqrt,gv=Math.cos,_v=Math.sin,Kt=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},Kn=function(e){return typeof e=="number"},dl=function(e){return typeof e>"u"},On=function(e){return typeof e=="object"},Oi=function(e){return e!==!1},Nu=function(){return typeof window<"u"},nl=function(e){return zt(e)||Kt(e)},Ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hi=Array.isArray,Mu=/(?:-?\.?\d|\.)+/gi,Ou=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uu=/[+-]=-?[.\d]+/,Lp=/[^,'"\[\]\s]+/gi,vv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Fn,Eu,Bu,$i={},ol={},Fp,Np=function(e){return(ol=ar(e,$i))&&di},fl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qa=function(e,t){return!t&&console.warn(e)},Op=function(e,t){return e&&($i[e]=t)&&ol&&(ol[e]=t)||$i},eo=function(){return 0},xv={suppressEvents:!0,isStart:!0,kill:!1},sl={suppressEvents:!0,kill:!1},yv={suppressEvents:!0},zu={},Ms=[],Tu={},Up,Fi={},_u={},Sp=30,rl=[],ku="",Vu=function(e){var t=e[0],i,n;if(On(t)||zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=rl.length;n--&&!rl[n].targetTest(t););i=rl[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Wu(e[n],i)))||e.splice(n,1);return e},Es=function(e){return e._gsap||Vu(on(e))[0]._gsap},Hu=function(e,t,i){return(i=e[t])&&zt(i)?e[t]():dl(i)&&e.getAttribute&&e.getAttribute(t)||i},wi=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},ti=function(e){return Math.round(e*1e7)/1e7||0},lr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},wv=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},ll=function(){var e=Ms.length,t=Ms.slice(0),i,n;for(Tu={},Ms.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Bp=function(e,t,i,n){Ms.length&&!ui&&ll(),e.render(t,i,n||ui&&t<0&&(e._initted||e._startAt)),Ms.length&&!ui&&ll()},zp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Lp).length<2?t:Kt(e)?e.trim():e},kp=function(e){return e},ln=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},bv=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ar=function(e,t){for(var i in t)e[i]=t[i];return e},Mp=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=On(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},cl=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Ka=function(e){var t=e.parent||Ot,i=e.keyframes?bv(hi(e.keyframes)):ln;if(Oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Sv=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Vp=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},pl=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Ts=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},nr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Mv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Au=function(e,t,i,n){return e._startAt&&(ui?e._startAt.revert(sl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Ev=function s(e){return!e||e._ts&&s(e.parent)},Ep=function(e){return e._repeat?qr(e._tTime,e=e.duration()+e._rDelay)*e:0},qr=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},ul=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ml=function(e){return e._end=ti(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},gl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ti(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ml(e),i._dirty||nr(i,e)),e},Hp=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ul(e.rawTime(),t),(!t._dur||no(0,t.totalDuration(),i)-t._tTime>St)&&t.render(i,!0)),nr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-St}},Nn=function(e,t,i,n){return t.parent&&Ts(t),t._start=ti((Kn(i)?i:i||e!==Ot?rn(e,i,t):e._time)+t._delay),t._end=ti(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vp(e,t,"_first","_last",e._sort?"_start":0),Cu(t)||(e._recent=t),n||Hp(e,t),e._ts<0&&gl(e,e._tTime),e},Gp=function(e,t){return($i.ScrollTrigger||fl("scrollTrigger",t))&&$i.ScrollTrigger.create(t,e)},Wp=function(e,t,i,n,r){if(qu(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!ui&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Up!==Ni.frame)return Ms.push(e),e._lazy=[r,n],1},Tv=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Cu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Av=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&Tv(e)&&!(!e._initted&&Cu(e))||(e._ts<0||e._dp._ts<0)&&!Cu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=no(0,e._tDur,t),u=qr(l,o),e._yoyo&&u&1&&(a=1-a),u!==qr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||ui||n||e._zTime===St||!t&&e._zTime){if(!e._initted&&Wp(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?St:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Au(e,t,i,!0),e._onUpdate&&!i&&qi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&qi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ts(e,1),!i&&!ui&&(qi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Cv=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},$r=function(e,t,i,n){var r=e._repeat,a=ti(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ti(a*(r+1)+e._rDelay*r):a,o>0&&!n&&gl(e,e._tTime=e._tDur*o),e.parent&&ml(e),i||nr(e.parent,e),e},Tp=function(e){return e instanceof yi?nr(e):$r(e,e._dur)},Dv={_start:0,endTime:eo,totalDuration:eo},rn=function s(e,t,i){var n=e.labels,r=e._recent||Dv,a=e.duration()>=an?r.endTime(!1):e._dur,o,l,c;return Kt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(hi(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Ja=function(e,t,i){var n=Kn(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Oi(l.vars.inherit)&&l.parent;a.immediateRender=Oi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Xt(t[0],a,t[r+1])},As=function(e,t){return e||e===0?t(e):t},no=function(e,t,i){return i<e?e:i>t?t:i},li=function(e,t){return!Kt(e)||!(t=vv.exec(e))?"":t[1]},Pv=function(e,t,i){return As(i,function(n){return no(e,t,n)})},Du=[].slice,Xp=function(e,t){return e&&On(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&On(e[0]))&&!e.nodeType&&e!==Fn},Rv=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Kt(n)&&!t||Xp(n,1)?(r=i).push.apply(r,on(n)):i.push(n)})||i},on=function(e,t,i){return Lt&&!t&&Lt.selector?Lt.selector(e):Kt(e)&&!i&&(Eu||!Zr())?Du.call((t||Bu).querySelectorAll(e),0):hi(e)?Rv(e,i):Xp(e)?Du.call(e,0):e?[e]:[]},Pu=function(e){return e=on(e)[0]||Qa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return on(t,i.querySelectorAll?i:i===e?Qa("Invalid scope")||Bu.createElement("div"):e)}},Yp=function(e){return e.sort(function(){return .5-Math.random()})},qp=function(e){if(zt(e))return e;var t=On(e)?e:{each:e},i=sr(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,h=n;return Kt(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],h=n[1]),function(f,d,m){var p=(m||t).length,g=a[p],_,x,v,w,E,M,S,A,D;if(!g){if(D=t.grid==="auto"?0:(t.grid||[1,an])[1],!D){for(S=-an;S<(S=m[D++].getBoundingClientRect().left)&&D<p;);D<p&&D--}for(g=a[p]=[],_=l?Math.min(D,p)*u-.5:n%D,x=D===an?0:l?p*h/D-.5:n/D|0,S=0,A=an,M=0;M<p;M++)v=M%D-_,w=x-(M/D|0),g[M]=E=c?Math.abs(c==="y"?w:v):Rp(v*v+w*w),E>S&&(S=E),E<A&&(A=E);n==="random"&&Yp(g),g.max=S-A,g.min=A,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(D>p?p-1:c?c==="y"?p/D:D:Math.max(D,p/D))||0)*(n==="edges"?-1:1),g.b=p<0?r-p:r,g.u=li(t.amount||t.each)||0,i=i&&p<0?im(i):i}return p=(g[f]-g.min)/g.max||0,ti(g.b+(i?i(p):p)*g.v)+g.u}},Ru=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ti(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Kn(i)?0:li(i))}},$p=function(e,t){var i=hi(e),n,r;return!i&&On(e)&&(n=i=e.radius||an,e.values?(e=on(e.values),(r=!Kn(e[0]))&&(n*=n)):e=Ru(e.increment)),As(t,i?zt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=an,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!n||c<=n?e[u]:a,r||u===a||Kn(a)?u:u+li(a)}:Ru(e))},Zp=function(e,t,i,n){return As(hi(e)?!t:i===!0?!!(i=0):!n,function(){return hi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Iv=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},Lv=function(e,t){return function(i){return e(parseFloat(i))+(t||li(i))}},Fv=function(e,t,i){return Jp(e,t,0,1,i)},Kp=function(e,t,i){return As(i,function(n){return e[~~t(n)]})},Nv=function s(e,t,i){var n=t-e;return hi(e)?Kp(e,s(0,e.length),t):As(i,function(r){return(n+(r-e)%n)%n+e})},Ov=function s(e,t,i){var n=t-e,r=n*2;return hi(e)?Kp(e,s(0,e.length-1),t):As(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},Kr=function(e){for(var t=0,i="",n,r,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(o?Lp:Mu),i+=e.substr(t,n-t)+Zp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Jp=function(e,t,i,n,r){var a=t-e,o=n-i;return As(r,function(l){return i+((l-e)/a*o||0)})},Uv=function s(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Kt(e),o={},l,c,u,h,f;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(hi(e)&&!hi(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(m){m*=h;var p=Math.min(f,~~m);return u[p](m-p)},i=t}else n||(e=ar(hi(e)?[]:{},e));if(!u){for(l in t)Xu.call(o,e,l,"get",t[l]);r=function(m){return Ku(m,o)||(a?e.p:e)}}}return As(i,r)},Ap=function(e,t,i){var n=e.labels,r=an,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},qi=function(e,t,i){var n=e.vars,r=n[t],a=Lt,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ms.length&&ll(),o&&(Lt=o),u=l?r.apply(c,l):r.call(c),Lt=a,u},$a=function(e){return Ts(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ui),e.progress()<1&&qi(e,"onInterrupt"),e},Xr,jp=[],Qp=function(e){if(e)if(e=!e.name&&e.default||e,Nu()||e.headless){var t=e.name,i=zt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:eo,render:Ku,add:Xu,kill:Qv,modifier:jv,rawVars:0},a={targetTest:0,get:0,getSetter:_l,aliases:{},register:0};if(Zr(),e!==n){if(Fi[t])return;ln(n,ln(cl(e,r),a)),ar(n.prototype,ar(r,cl(e,a))),Fi[n.prop=t]=n,e.targetTest&&(rl.push(n),zu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Op(t,n),e.register&&e.register(di,n,bi)}else jp.push(e)},wt=255,Za={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},vu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},em=function(e,t,i){var n=e?Kn(e)?[e>>16,e>>8&wt,e&wt]:0:Za.black,r,a,o,l,c,u,h,f,d,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Za[e])n=Za[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&wt,n&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Mu),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,n.length>3&&(n[3]*=1),n[0]=vu(l+1/3,r,a),n[1]=vu(l,r,a),n[2]=vu(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(Ou),i&&n.length<4&&(n[3]=1),n}else n=e.match(Mu)||Za.transparent;n=n.map(Number)}return t&&!m&&(r=n[0]/wt,a=n[1]/wt,o=n[2]/wt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},tm=function(e){var t=[],i=[],n=-1;return e.split(Zn).forEach(function(r){var a=r.match(or)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Cp=function(e,t,i){var n="",r=(e+n).match(Zn),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=em(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=tm(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Zn,"1").split(or),h=c.length-1;o<h;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Zn),h=c.length-1;o<h;o++)n+=c[o]+r[o];return n+c[h]},Zn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Za)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Bv=/hsl[a]?\(/,Gu=function(e){var t=e.join(" "),i;if(Zn.lastIndex=0,Zn.test(t))return i=Bv.test(t),e[1]=Cp(e[1],i),e[0]=Cp(e[0],i,tm(e[1])),!0},to,Ni=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,u,h,f,d,m=function p(g){var _=s()-n,x=g===!0,v,w,E,M;if((_>e||_<0)&&(i+=_-t),n+=_,E=n-i,v=E-a,(v>0||x)&&(M=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=v+(v>=r?4:r-v),w=1),x||(l=c(p)),w)for(d=0;d<o.length;d++)o[d](E,f,M,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Fp&&(!Eu&&Nu()&&(Fn=Eu=window,Bu=Fn.document||{},$i.gsap=di,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(di.version),Np(ol||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),jp.forEach(Qp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,a-h.time*1e3+1|0)},to=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),to=0,c=eo},lagSmoothing:function(g,_){e=g||1/0,t=Math.min(_||33,e)},fps:function(g){r=1e3/(g||240),a=h.time*1e3+r},add:function(g,_,x){var v=_?function(w,E,M,S){g(w,E,M,S),h.remove(v)}:g;return h.remove(g),o[x?"unshift":"push"](v),Zr(),v},remove:function(g,_){~(_=o.indexOf(g))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},h}(),Zr=function(){return!to&&Ni.wake()},ut={},zv=/^[\d.\-M][\d.\-,\s]/,kv=/["']/g,Vv=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(kv,"").trim():+c,n=l.substr(o+1).trim();return t},Hv=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Gv=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Vv(t[1])]:Hv(e).split(",").map(zp)):ut._CE&&zv.test(e)?ut._CE("",e):i},im=function(e){return function(t){return 1-e(1-t)}},nm=function s(e,t){for(var i=e._first,n;i;)i instanceof yi?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},sr=function(e,t){return e&&(zt(e)?e:ut[e]||Gv(e))||t},cr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return wi(e,function(o){ut[o]=$i[o]=r,ut[a=o.toLowerCase()]=i;for(var l in r)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=r[l]}),r},sm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xu=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Su*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*_v((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:sm(o);return r=Su/r,l.config=function(c,u){return s(e,c,u)},l},yu=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:sm(i);return n.config=function(r){return s(e,r)},n};wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;cr(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;cr("Elastic",xu("in"),xu("out"),xu());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};cr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);cr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});cr("Circ",function(s){return-(Rp(1-s*s)-1)});cr("Sine",function(s){return s===1?1:-gv(s*pv)+1});cr("Back",yu("in"),yu("out"),yu());ut.SteppedEase=ut.steps=$i.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-St;return function(o){return((n*no(0,a,o)|0)+r)*i}}};Yr.ease=ut["quad.out"];wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ku+=s+","+s+"Params,"});var Wu=function(e,t){this.id=mv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Hu,this.set=t?t.getSetter:_l},io=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$r(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),to||Ni.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,$r(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Zr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gl(this,i),!r._dp||r.parent||Hp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===St||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Bp(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ep(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ep(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?qr(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?ul(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-St?0:this._rts,this.totalTime(no(-Math.abs(this._delay),this._tDur,r),n!==!1),ml(this),Mv(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Nn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ul(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=yv);var n=ui;return ui=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ui=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Tp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Tp(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(rn(this,i),Oi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Oi(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-St)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=zt(i)?i:kp,o=function(){var c=n.then;n.then=null,zt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),r(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){$a(this)},s}();ln(io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var yi=function(s){Pp(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Oi(i.sortChildren),Ot&&Nn(i.parent||Ot,$n(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Gp($n(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return Ja(0,arguments,this),this},t.from=function(n,r,a){return Ja(1,arguments,this),this},t.fromTo=function(n,r,a,o){return Ja(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Ka(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Xt(n,r,rn(this,a),1),this},t.call=function(n,r,a){return Nn(this,Xt.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Xt(n,a,rn(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,u){return a.runBackwards=1,Ka(a).immediateRender=Oi(a.immediateRender),this.staggerTo(n,r,a,o,l,c,u)},t.staggerFromTo=function(n,r,a,o,l,c,u,h){return o.startAt=a,Ka(o).immediateRender=Oi(o.immediateRender),this.staggerTo(n,r,o,l,c,u,h)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:ti(n),h=this._zTime<0!=n<0&&(this._initted||!c),f,d,m,p,g,_,x,v,w,E,M,S;if(this!==Ot&&u>l&&n>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),f=u,w=this._start,v=this._ts,_=!v,h&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,g=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(g*100+n,r,a);if(f=ti(u%g),u===l?(p=this._repeat,f=c):(p=~~(u/g),p&&p===u/g&&(f=c,p--),f>c&&(f=c)),E=qr(this._tTime,g),!o&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),M&&p&1&&(f=c-f,S=1),p!==E&&!this._lock){var A=M&&E&1,D=A===(M&&p&1);if(p<E&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(S?0:ti(p*g)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&qi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,D&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;nm(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Cv(this,ti(o),ti(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&f&&!r&&!p&&(qi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&n>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!_){x=0,m&&(u+=this._zTime=-St);break}}d=m}else{d=this._last;for(var y=n<0?n:f;d;){if(m=d._prev,(d._act||y<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,a||ui&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){x=0,m&&(u+=this._zTime=y?-St:St);break}}d=m}}if(x&&!r&&(this.pause(),x.render(f>=o?0:-St)._zTime=f>=o?1:-1,this._ts))return this._start=w,ml(this),this.render(n,r,a);this._onUpdate&&!r&&qi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(w===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ts(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(qi(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Kn(r)||(r=rn(this,r,n)),!(n instanceof io)){if(hi(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Kt(n))return this.addLabel(n,r);if(zt(n))n=Xt.delayedCall(0,n);else return this}return this!==n?Nn(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-an);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xt?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Kt(n)?this.removeLabel(n):zt(n)?this.killTweensOf(n):(pl(this,n),n===this._recent&&(this._recent=this._last),nr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ti(Ni.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=rn(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=Xt.delayedCall(0,r||eo,a);return o.data="isPause",this._hasPause=1,Nn(this,o,rn(this,n))},t.removePause=function(n){var r=this._first;for(n=rn(this,n);r;)r._start===n&&r.data==="isPause"&&Ts(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Ss!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=on(n),l=this._first,c=Kn(r),u;l;)l instanceof Xt?wv(l._targets,o)&&(c?(!Ss||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=rn(a,n),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=Xt.to(a,ln({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!d){var g=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==g&&$r(m,g,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,ln({startAt:{time:rn(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Ap(this,rn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Ap(this,rn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return nr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),nr(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=an,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;$r(a,a===Ot&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Ot._ts&&(Bp(Ot,ul(n,Ot)),Up=Ni.frame),Ni.frame>=Sp){Sp+=Ui.autoSleep||120;var r=Ot._first;if((!r||!r._ts)&&Ui.autoSleep&&Ni._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ni.sleep()}}},e}(io);ln(yi.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wv=function(e,t,i,n,r,a,o){var l=new bi(this._pt,e,t,0,1,Zu,null,r),c=0,u=0,h,f,d,m,p,g,_,x;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=Kr(n)),a&&(x=[i,n],a(x,e,t),i=x[0],n=x[1]),f=i.match(gu)||[];h=gu.exec(n);)m=h[0],p=n.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:m.charAt(1)==="="?lr(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=gu.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Uu.test(n)||_)&&(l.e=0),this._pt=l,l},Xu=function(e,t,i,n,r,a,o,l,c,u){zt(n)&&(n=n(r||0,e,a));var h=e[t],f=i!=="get"?i:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?Zv:om:$u,m;if(Kt(n)&&(~n.indexOf("random(")&&(n=Kr(n)),n.charAt(1)==="="&&(m=lr(f,n)+(li(f)||0),(m||m===0)&&(n=m))),!u||f!==n||Iu)return!isNaN(f*n)&&n!==""?(m=new bi(this._pt,e,t,+f||0,n-(f||0),typeof h=="boolean"?Jv:lm,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&fl(t,n),Wv.call(this,e,t,f,n,d,l||Ui.stringFilter,c))},Xv=function(e,t,i,n,r){if(zt(e)&&(e=ja(e,r,t,i,n)),!On(e)||e.style&&e.nodeType||hi(e)||Ip(e))return Kt(e)?ja(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=ja(e[o],r,t,i,n);return a},Yu=function(e,t,i,n,r,a){var o,l,c,u;if(Fi[e]&&(o=new Fi[e]).init(r,o.rawVars?t[e]:Xv(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new bi(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Xr))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ss,Iu,qu=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,m=e._dur,p=e._startAt,g=e._targets,_=e.parent,x=_&&_.data==="nested"?_.vars.targets:g,v=e._overwrite==="auto"&&!Fu,w=e.timeline,E,M,S,A,D,y,b,R,C,I,U,B,F;if(w&&(!f||!r)&&(r="none"),e._ease=sr(r,Yr.ease),e._yEase=h?im(sr(h===!0?r:h,Yr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!w&&!!n.runBackwards,!w||f&&!n.stagger){if(R=g[0]?Es(g[0]).harness:0,B=R&&n[R.prop],E=cl(n,zu),p&&(p._zTime<0&&p.progress(1),t<0&&u&&o&&!d?p.render(-1,!0):p.revert(u&&m?sl:xv),p._lazy=0),a){if(Ts(e._startAt=Xt.set(g,ln({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&Oi(l),startAt:null,delay:0,onUpdate:c&&function(){return qi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ui||!o&&!d)&&e._startAt.revert(sl),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!p){if(t&&(o=!1),S=ln({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Oi(l),immediateRender:o,stagger:0,parent:_},E),B&&(S[R.prop]=B),Ts(e._startAt=Xt.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ui?e._startAt.revert(sl):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Oi(l)||l&&!m,M=0;M<g.length;M++){if(D=g[M],b=D._gsap||Vu(g)[M]._gsap,e._ptLookup[M]=I={},Tu[b.id]&&Ms.length&&ll(),U=x===g?M:x.indexOf(D),R&&(C=new R).init(D,B||E,e,U,x)!==!1&&(e._pt=A=new bi(e._pt,D,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(L){I[L]=A}),C.priority&&(y=1)),!R||B)for(S in E)Fi[S]&&(C=Yu(S,E,e,U,D,x))?C.priority&&(y=1):I[S]=A=Xu.call(e,D,S,"get",E[S],U,x,0,n.stringFilter);e._op&&e._op[M]&&e.kill(D,e._op[M]),v&&e._pt&&(Ss=e,Ot.killTweensOf(D,I,e.globalTime(t)),F=!e.parent,Ss=0),e._pt&&l&&(Tu[b.id]=1)}y&&Ju(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&w.render(an,!0,!0)},Yv=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Iu=1,e.vars[t]="+=0",qu(e,o),Iu=0,l?Qa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(n||n===0)&&!r?n:u.s+(n||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=kt(i)+li(h.e)),h.b&&(h.b=u.s+li(h.b))},qv=function(e,t){var i=e[0]?Es(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=ar({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},$v=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(hi(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ja=function(e,t,i,n,r){return zt(e)?e.call(t,i,n,r):Kt(e)&&~e.indexOf("random(")?Kr(e):e},rm=ku+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",am={};wi(rm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return am[s]=1});var Xt=function(s){Pp(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:Ka(n))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,p=l.defaults,g=l.scrollTrigger,_=l.yoyoEase,x=n.parent||Ot,v=(hi(i)||Ip(i)?Kn(i[0]):"length"in n)?[i]:on(i),w,E,M,S,A,D,y,b;if(o._targets=v.length?Vu(v):Qa("GSAP target "+i+" not found. https://gsap.com",!Ui.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,m||f||nl(c)||nl(u)){if(n=o.vars,w=o.timeline=new yi({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:v}),w.kill(),w.parent=w._dp=$n(o),w._start=0,f||nl(c)||nl(u)){if(S=v.length,y=f&&qp(f),On(f))for(A in f)~rm.indexOf(A)&&(b||(b={}),b[A]=f[A]);for(E=0;E<S;E++)M=cl(n,am),M.stagger=0,_&&(M.yoyoEase=_),b&&ar(M,b),D=v[E],M.duration=+ja(c,$n(o),E,D,v),M.delay=(+ja(u,$n(o),E,D,v)||0)-o._delay,!f&&S===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),w.to(D,M,y?y(E,D,v):0),w._ease=ut.none;w.duration()?c=u=0:o.timeline=0}else if(m){Ka(ln(w.vars.defaults,{ease:"none"})),w._ease=sr(m.ease||n.ease||"none");var R=0,C,I,U;if(hi(m))m.forEach(function(B){return w.to(v,B,">")}),w.duration();else{M={};for(A in m)A==="ease"||A==="easeEach"||$v(A,m[A],M,m.easeEach);for(A in M)for(C=M[A].sort(function(B,F){return B.t-F.t}),R=0,E=0;E<C.length;E++)I=C[E],U={ease:I.e,duration:(I.t-(E?C[E-1].t:0))/100*c},U[A]=I.v,w.to(v,U,R),R+=U.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return d===!0&&!Fu&&(Ss=$n(o),Ot.killTweensOf(v),Ss=0),Nn(x,$n(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(h||!c&&!m&&o._start===ti(x._time)&&Oi(h)&&Ev($n(o))&&x.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-u)||0)),g&&Gp($n(o),g),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-St&&!u?l:n<St?0:n,f,d,m,p,g,_,x,v,w;if(!c)Av(this,n,r,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+n,r,a);if(f=ti(h%p),h===l?(m=this._repeat,f=c):(m=~~(h/p),m&&m===ti(h/p)&&(f=c,m--),f>c&&(f=c)),_=this._yoyo&&m&1,_&&(w=this._yEase,f=c-f),g=qr(this._tTime,p),f===o&&!a&&this._initted&&m===g)return this._tTime=h,this;m!==g&&(v&&this._yEase&&nm(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==p&&this._initted&&(this._lock=a=1,this.render(ti(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(Wp(this,u?n:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(w||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!o&&!r&&!m&&(qi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(n<0?n:v._dur*v._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&Au(this,n,r,a),qi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!r&&this.parent&&qi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Au(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ts(this,1),!r&&!(u&&!o)&&(h||o||_)&&(qi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){to||Ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||qu(this,c),u=this._ease(c/this._dur),Yv(this,n,r,a,o,u,c,l)?this.resetTo(n,r,a,o,1):(gl(this,0),this.parent||Vp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ss&&Ss.vars.overwrite!==!0)._first||$a(this),this.parent&&a!==this.timeline.totalDuration()&&$r(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?on(n):o,c=this._ptLookup,u=this._pt,h,f,d,m,p,g,_;if((!r||r==="all")&&Sv(o,l))return r==="all"&&(this._pt=0),$a(this);for(h=this._op=this._op||[],r!=="all"&&(Kt(r)&&(p={},wi(r,function(x){return p[x]=1}),r=p),r=qv(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],r==="all"?(h[_]=r,m=f,d={}):(d=h[_]=h[_]||{},m=r);for(p in m)g=f&&f[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&pl(this,g,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&$a(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Ja(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return Ja(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return Ot.killTweensOf(n,r,a)},e}(io);ln(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wi("staggerTo,staggerFrom,staggerFromTo",function(s){Xt[s]=function(){var e=new yi,t=Du.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var $u=function(e,t,i){return e[t]=i},om=function(e,t,i){return e[t](i)},Zv=function(e,t,i,n){return e[t](n.fp,i)},Kv=function(e,t,i){return e.setAttribute(t,i)},_l=function(e,t){return zt(e[t])?om:dl(e[t])&&e.setAttribute?Kv:$u},lm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zu=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Ku=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},jv=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},Qv=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?pl(this,t,"_pt"):t.dep||(i=1),t=n;return!i},ex=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Ju=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},bi=function(){function s(t,i,n,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||lm,this.d=l||this,this.set=c||$u,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=ex,this.m=i,this.mt=r,this.tween=n},s}();wi(ku+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return zu[s]=1});$i.TweenMax=$i.TweenLite=Xt;$i.TimelineLite=$i.TimelineMax=yi;Ot=new yi({sortChildren:!1,defaults:Yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ui.stringFilter=Gu;var rr=[],al={},tx=[],Dp=0,ix=0,wu=function(e){return(al[e]||tx).map(function(t){return t()})},Lu=function(){var e=Date.now(),t=[];e-Dp>2&&(wu("matchMediaInit"),rr.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=Fn.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),wu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Dp=e,wu("matchMedia"))},cm=function(){function s(t,i){this.selector=i&&Pu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ix++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){zt(i)&&(r=n,n=i,i=zt);var a=this,o=function(){var c=Lt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Pu(r)),Lt=a,h=n.apply(a,arguments),zt(h)&&a._r.push(h),Lt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===zt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=Lt;Lt=null,i(this),Lt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Xt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof yi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=rr.length;a--;)rr[a].id===this.id&&rr.splice(a,1)},e.revert=function(i){this.kill(i||{})},s}(),nx=function(){function s(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){On(i)||(i={matches:i});var a=new cm(0,r||this.scope),o=a.conditions={},l,c,u;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?u=1:(l=Fn.matchMedia(i[c]),l&&(rr.indexOf(a)<0&&rr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lu):l.addEventListener("change",Lu)));return u&&n(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),hl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Qp(n)})},timeline:function(e){return new yi(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,n){Kt(e)&&(e=on(e)[0]);var r=Es(e||{}).get,a=i?kp:zp;return i==="native"&&(i=""),e&&(t?a((Fi[t]&&Fi[t].get||r)(e,t,i,n)):function(o,l,c){return a((Fi[o]&&Fi[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=on(e),e.length>1){var n=e.map(function(u){return di.quickSetter(u,t,i)}),r=n.length;return function(u){for(var h=r;h--;)n[h](u)}}e=e[0]||{};var a=Fi[t],o=Es(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Xr._pt=0,h.init(e,i?u+i:u,Xr,0,[e]),h.render(1,h),Xr._pt&&Ku(1,Xr)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=di.to(e,ar((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=sr(e.ease,Yr.ease)),Mp(Yr,e||{})},config:function(e){return Mp(Ui,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Fi[o]&&!$i[o]&&Qa(t+" effect requires "+o+" plugin.")}),_u[t]=function(o,l,c){return i(on(o),ln(l||{},r),c)},a&&(yi.prototype[t]=function(o,l,c){return this.add(_u[t](o,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=sr(t)},parseEase:function(e,t){return arguments.length?sr(e,t):ut},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new yi(e),n,r;for(i.smoothChildTiming=Oi(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,n=Ot._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Xt&&n.vars.onComplete===n._targets[0]))&&Nn(i,n,n._start-n._delay),n=r;return Nn(Ot,i,0),i},context:function(e,t){return e?new cm(e,t):Lt},matchMedia:function(e){return new nx(e)},matchMediaRefresh:function(){return rr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Lu()},addEventListener:function(e,t){var i=al[e]||(al[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=al[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Nv,wrapYoyo:Ov,distribute:qp,random:Zp,snap:$p,normalize:Fv,getUnit:li,clamp:Pv,splitColor:em,toArray:on,selector:Pu,mapRange:Jp,pipe:Iv,unitize:Lv,interpolate:Uv,shuffle:Yp},install:Np,effects:_u,ticker:Ni,updateRoot:yi.updateRoot,plugins:Fi,globalTimeline:Ot,core:{PropTween:bi,globals:Op,Tween:Xt,Timeline:yi,Animation:io,getCache:Es,_removeLinkedListItem:pl,reverting:function(){return ui},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Fu=e}}};wi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return hl[s]=Xt[s]});Ni.add(yi.updateRoot);Xr=hl.to({},{duration:0});var sx=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},rx=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=sx(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},bu=function(e,t){return{name:e,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Kt(r)&&(l={},wi(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}rx(o,r)}}}},di=hl.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)ui?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},bu("roundProps",Ru),bu("modifiers"),bu("snap",$p))||hl;Xt.version=yi.version=di.version="3.12.5";Fp=1;Nu()&&Zr();var H1=ut.Power0,G1=ut.Power1,W1=ut.Power2,X1=ut.Power3,Y1=ut.Power4,q1=ut.Linear,$1=ut.Quad,Z1=ut.Cubic,K1=ut.Quart,J1=ut.Quint,j1=ut.Strong,Q1=ut.Elastic,eA=ut.Back,tA=ut.SteppedEase,iA=ut.Bounce,nA=ut.Sine,sA=ut.Expo,rA=ut.Circ;var um,Cs,jr,sh,fr,ax,hm,rh,ox=function(){return typeof window<"u"},jn={},dr=180/Math.PI,Qr=Math.PI/180,Jr=Math.atan2,dm=1e8,ah=/([A-Z])/g,lx=/(left|right|width|margin|padding|x)/i,cx=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ux=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dx=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},xm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ym=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fx=function(e,t,i){return e.style[t]=i},px=function(e,t,i){return e.style.setProperty(t,i)},mx=function(e,t,i){return e._gsap[t]=i},gx=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},_x=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},vx=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},Ut="transform",Bi=Ut+"Origin",xx=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in jn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Un[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Jn(n,o)}):this.tfm[e]=a.x?a[e]:Jn(n,e),e===Bi&&(this.tfm.zOrigin=a.zOrigin);else return Un.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Bi,t,"")),e=Ut}(r||t)&&this.props.push(e,t,r[e])},wm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},yx=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ah,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=rh(),(!r||!r.isStart)&&!i[Ut]&&(wm(i),n.zOrigin&&i[Bi]&&(i[Bi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},bm=function(e,t){var i={target:e,props:[],revert:yx,save:xx};return e._gsap||di.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},Sm,th=function(e,t){var i=Cs.createElementNS?Cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cs.createElement(e);return i&&i.style?i:Cs.createElement(e)},Bn=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(ah,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,ea(t)||t,1)||""},fm="O,Moz,ms,Ms,Webkit".split(","),ea=function(e,t,i){var n=t||fr,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(fm[a]+e in r););return a<0?null:(a===3?"ms":a>=0?fm[a]:"")+e},ih=function(){ox()&&window.document&&(um=window,Cs=um.document,jr=Cs.documentElement,fr=th("div")||{style:{}},ax=th("div"),Ut=ea(Ut),Bi=Ut+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sm=!!ea("perspective"),rh=di.core.reverting,sh=1)},ju=function s(e){var t=th("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,a;if(jr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),jr.removeChild(t),this.style.cssText=r,a},pm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Mm=function(e){var t;try{t=e.getBBox()}catch{t=ju.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ju||(t=ju.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+pm(e,["x","cx","x1"])||0,y:+pm(e,["y","cy","y1"])||0,width:0,height:0}:t},Em=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mm(e))},pr=function(e,t){if(t){var i=e.style,n;t in jn&&t!==Bi&&(t=Ut),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(ah,"-$1").toLowerCase())):i.removeAttribute(t)}},Ds=function(e,t,i,n,r,a){var o=new bi(e._pt,t,i,0,1,a?ym:xm);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},mm={deg:1,rad:1,turn:1},wx={grid:1,flex:1},Ps=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=fr.style,l=lx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",m,p,g,_;if(n===a||!r||mm[n]||mm[a])return r;if(a!=="px"&&!f&&(r=s(e,t,i,"px")),_=e.getCTM&&Em(e),(d||a==="%")&&(jn[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[u],kt(d?r/m*h:r/100*m);if(o[l?"width":"height"]=h+(f?a:n),p=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Cs||!p.appendChild)&&(p=Cs.body),g=p._gsap,g&&d&&g.width&&l&&g.time===Ni.time&&!g.uncache)return kt(r/g.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+n,m=e[u],x?e.style[t]=x:pr(e,t)}else(d||a==="%")&&!wx[Bn(p,"display")]&&(o.position=Bn(e,"position")),p===e&&(o.position="static"),p.appendChild(fr),m=fr[u],p.removeChild(fr),o.position="absolute";return l&&d&&(g=Es(p),g.time=Ni.time,g.width=p[u]),kt(f?m*r/h:m&&r?h/m*r:0)},Jn=function(e,t,i,n){var r;return sh||ih(),t in Un&&t!=="transform"&&(t=Un[t],~t.indexOf(",")&&(t=t.split(",")[0])),jn[t]&&t!=="transform"?(r=ao(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:xl(Bn(e,Bi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=vl[t]&&vl[t](e,t,i)||Bn(e,t)||Hu(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Ps(e,t,r,i)+i:r},bx=function(e,t,i,n){if(!i||i==="none"){var r=ea(t,e,1),a=r&&Bn(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=Bn(e,"borderTopColor"))}var o=new bi(this._pt,e.style,t,0,1,Zu),l=0,c=0,u,h,f,d,m,p,g,_,x,v,w,E;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(p=e.style[t],e.style[t]=n,n=Bn(e,t)||n,p?e.style[t]=p:pr(e,t)),u=[i,n],Gu(u),i=u[0],n=u[1],f=i.match(or)||[],E=n.match(or)||[],E.length){for(;h=or.exec(n);)g=h[0],x=n.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(p=f[c++]||"")&&(d=parseFloat(p)||0,w=p.substr((d+"").length),g.charAt(1)==="="&&(g=lr(d,g)+w),_=parseFloat(g),v=g.substr((_+"").length),l=or.lastIndex-v.length,v||(v=v||Ui.units[t]||w,l===n.length&&(n+=v,o.e+=v)),w!==v&&(d=Ps(e,t,p,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:_-d,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?ym:xm;return Uu.test(n)&&(o.e=0),this._pt=o,o},gm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sx=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=gm[i]||i,t[1]=gm[n]||n,t.join(" ")},Mx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],jn[o]&&(l=1,o=o==="transformOrigin"?Bi:Ut),pr(i,o);l&&(pr(i,Ut),a&&(a.svg&&i.removeAttribute("transform"),ao(i,1),a.uncache=1,wm(n)))}},vl={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new bi(e._pt,t,i,0,0,Mx);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},ro=[1,0,0,1,0,0],Tm={},Am=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_m=function(e){var t=Bn(e,Ut);return Am(t)?ro:t.substr(7).match(Ou).map(kt)},oh=function(e,t){var i=e._gsap||Es(e),n=e.style,r=_m(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ro:r):(r===ro&&!e.offsetParent&&e!==jr&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,jr.appendChild(e)),r=_m(e),l?n.display=l:pr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):jr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},nh=function(e,t,i,n,r,a){var o=e._gsap,l=r||oh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],m=l[1],p=l[2],g=l[3],_=l[4],x=l[5],v=t.split(" "),w=parseFloat(v[0])||0,E=parseFloat(v[1])||0,M,S,A,D;i?l!==ro&&(S=d*g-m*p)&&(A=w*(g/S)+E*(-p/S)+(p*x-g*_)/S,D=w*(-m/S)+E*(d/S)-(d*x-m*_)/S,w=A,E=D):(M=Mm(e),w=M.x+(~v[0].indexOf("%")?w/100*M.width:w),E=M.y+(~(v[1]||v[0]).indexOf("%")?E/100*M.height:E)),n||n!==!1&&o.smooth?(_=w-c,x=E-u,o.xOffset=h+(_*d+x*p)-_,o.yOffset=f+(_*m+x*g)-x):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=E,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Bi]="0px 0px",a&&(Ds(a,o,"xOrigin",c,w),Ds(a,o,"yOrigin",u,E),Ds(a,o,"xOffset",h,o.xOffset),Ds(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",w+" "+E)},ao=function(e,t){var i=e._gsap||new Wu(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Bn(e,Bi)||"0",u,h,f,d,m,p,g,_,x,v,w,E,M,S,A,D,y,b,R,C,I,U,B,F,L,k,N,ie,he,Fe,j,V;return u=h=f=p=g=_=x=v=w=0,d=m=1,i.svg=!!(e.getCTM&&Em(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),n.scale=n.rotate=n.translate="none"),S=oh(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),c=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),nh(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,S)),E=i.xOrigin||0,M=i.yOrigin||0,S!==ro&&(b=S[0],R=S[1],C=S[2],I=S[3],u=U=S[4],h=B=S[5],S.length===6?(d=Math.sqrt(b*b+R*R),m=Math.sqrt(I*I+C*C),p=b||R?Jr(R,b)*dr:0,x=C||I?Jr(C,I)*dr+p:0,x&&(m*=Math.abs(Math.cos(x*Qr))),i.svg&&(u-=E-(E*b+M*C),h-=M-(E*R+M*I))):(V=S[6],Fe=S[7],N=S[8],ie=S[9],he=S[10],j=S[11],u=S[12],h=S[13],f=S[14],A=Jr(V,he),g=A*dr,A&&(D=Math.cos(-A),y=Math.sin(-A),F=U*D+N*y,L=B*D+ie*y,k=V*D+he*y,N=U*-y+N*D,ie=B*-y+ie*D,he=V*-y+he*D,j=Fe*-y+j*D,U=F,B=L,V=k),A=Jr(-C,he),_=A*dr,A&&(D=Math.cos(-A),y=Math.sin(-A),F=b*D-N*y,L=R*D-ie*y,k=C*D-he*y,j=I*y+j*D,b=F,R=L,C=k),A=Jr(R,b),p=A*dr,A&&(D=Math.cos(A),y=Math.sin(A),F=b*D+R*y,L=U*D+B*y,R=R*D-b*y,B=B*D-U*y,b=F,U=L),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,_=180-_),d=kt(Math.sqrt(b*b+R*R+C*C)),m=kt(Math.sqrt(B*B+V*V)),A=Jr(U,B),x=Math.abs(A)>2e-4?A*dr:0,w=j?1/(j<0?-j:j):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Am(Bn(e,Ut)),F&&e.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=kt(d),i.scaleY=kt(m),i.rotation=kt(p)+o,i.rotationX=kt(g)+o,i.rotationY=kt(_)+o,i.skewX=x+o,i.skewY=v+o,i.transformPerspective=w+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Bi]=xl(c)),i.xOffset=i.yOffset=0,i.force3D=Ui.force3D,i.renderTransform=i.svg?Tx:Sm?Cm:Ex,i.uncache=0,i},xl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qu=function(e,t,i){var n=li(t);return kt(parseFloat(t)+parseFloat(Ps(e,"x",i+"px",n)))+n},Ex=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cm(e,t)},ur="0deg",so="0px",hr=") ",Cm=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,m=i.scaleX,p=i.scaleY,g=i.transformPerspective,_=i.force3D,x=i.target,v=i.zOrigin,w="",E=_==="auto"&&e&&e!==1||_===!0;if(v&&(h!==ur||u!==ur)){var M=parseFloat(u)*Qr,S=Math.sin(M),A=Math.cos(M),D;M=parseFloat(h)*Qr,D=Math.cos(M),a=Qu(x,a,S*D*-v),o=Qu(x,o,-Math.sin(M)*-v),l=Qu(x,l,A*D*-v+v)}g!==so&&(w+="perspective("+g+hr),(n||r)&&(w+="translate("+n+"%, "+r+"%) "),(E||a!==so||o!==so||l!==so)&&(w+=l!==so||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+hr),c!==ur&&(w+="rotate("+c+hr),u!==ur&&(w+="rotateY("+u+hr),h!==ur&&(w+="rotateX("+h+hr),(f!==ur||d!==ur)&&(w+="skew("+f+", "+d+hr),(m!==1||p!==1)&&(w+="scale("+m+", "+p+hr),x.style[Ut]=w||"translate(0, 0)"},Tx=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,m=i.xOrigin,p=i.yOrigin,g=i.xOffset,_=i.yOffset,x=i.forceCSS,v=parseFloat(a),w=parseFloat(o),E,M,S,A,D;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Qr,c*=Qr,E=Math.cos(l)*h,M=Math.sin(l)*h,S=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=Qr,D=Math.tan(c-u),D=Math.sqrt(1+D*D),S*=D,A*=D,u&&(D=Math.tan(u),D=Math.sqrt(1+D*D),E*=D,M*=D)),E=kt(E),M=kt(M),S=kt(S),A=kt(A)):(E=h,A=f,M=S=0),(v&&!~(a+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(v=Ps(d,"x",a,"px"),w=Ps(d,"y",o,"px")),(m||p||g||_)&&(v=kt(v+m-(m*E+p*S)+g),w=kt(w+p-(m*M+p*A)+_)),(n||r)&&(D=d.getBBox(),v=kt(v+n/100*D.width),w=kt(w+r/100*D.height)),D="matrix("+E+","+M+","+S+","+A+","+v+","+w+")",d.setAttribute("transform",D),x&&(d.style[Ut]=D)},Ax=function(e,t,i,n,r){var a=360,o=Kt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?dr:1),c=l-n,u=n+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*dm)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*dm)%a-~~(c/a)*a)),e._pt=f=new bi(e._pt,t,i,n,c,ux),f.e=u,f.u="deg",e._props.push(i),f},vm=function(e,t){for(var i in t)e[i]=t[i];return e},Cx=function(e,t,i){var n=vm({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,d,m;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Ut]=t,o=ao(i,1),pr(i,Ut),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ut],a[Ut]=t,o=ao(i,1),a[Ut]=c);for(l in jn)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=li(c),m=li(u),h=d!==m?Ps(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new bi(e._pt,o,l,h,f-h,eh),e._pt.u=m||0,e._props.push(l));vm(o,n)};wi("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});vl[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(m){return Jn(o,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(m,p){return d[m]=f[p]=f[p]||f[(p-1)/2|0]}),o.init(l,d,h)}});var lh={name:"css",register:ih,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,d,m,p,g,_,x,v,w,E,M,S,A;sh||ih(),this.styles=this.styles||bm(e),A=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Fi[p]&&Yu(p,t,i,n,e,r)))){if(d=typeof u,m=vl[p],d==="function"&&(u=u.call(i,n,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Kr(u)),m)m(this,e,p,u,i)&&(S=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Zn.lastIndex=0,Zn.test(c)||(g=li(c),_=li(u)),_?g!==_&&(c=Ps(e,p,c,_)+_):g&&(u+=g),this.add(o,"setProperty",c,u,n,r,0,0,p),a.push(p),A.push(p,0,o[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Kt(c)&&~c.indexOf("random(")&&(c=Kr(c)),li(c+"")||c==="auto"||(c+=Ui.units[p]||li(Jn(e,p))||""),(c+"").charAt(1)==="="&&(c=Jn(e,p))):c=Jn(e,p),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),p in Un&&(p==="autoAlpha"&&(f===1&&Jn(e,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,o.visibility),Ds(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Un[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in jn,v){if(this.styles.save(p),w||(E=e._gsap,E.renderTransform&&!t.parseTransform||ao(e,t.parseTransform),M=t.smoothOrigin!==!1&&E.smooth,w=this._pt=new bi(this._pt,o,Ut,0,1,E.renderTransform,E,0,-1),w.dep=1),p==="scale")this._pt=new bi(this._pt,E,"scaleY",E.scaleY,(x?lr(E.scaleY,x+h):h)-E.scaleY||0,eh),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){A.push(Bi,0,o[Bi]),u=Sx(u),E.svg?nh(e,u,0,M,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==E.zOrigin&&Ds(this,E,"zOrigin",E.zOrigin,_),Ds(this,o,p,xl(c),xl(u)));continue}else if(p==="svgOrigin"){nh(e,u,1,M,0,this);continue}else if(p in Tm){Ax(this,E,p,f,x?lr(f,x+u):u);continue}else if(p==="smoothOrigin"){Ds(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){Cx(this,u,e);continue}}else p in o||(p=ea(p)||p);if(v||(h||h===0)&&(f||f===0)&&!cx.test(u)&&p in o)g=(c+"").substr((f+"").length),h||(h=0),_=li(u)||(p in Ui.units?Ui.units[p]:g),g!==_&&(f=Ps(e,p,c,_)),this._pt=new bi(this._pt,v?E:o,p,f,(x?lr(f,x+h):h)-f,!v&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?dx:eh),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=hx);else if(p in o)bx.call(this,e,p,c,x?x+u:u);else if(p in e)this.add(e,p,c||e[p],x?x+u:u,n,r);else if(p!=="parseTransform"){fl(p,u);continue}v||(p in o?A.push(p,0,o[p]):A.push(p,1,c||e[p])),a.push(p)}}S&&Ju(this)},render:function(e,t){if(t.tween._time||!rh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Jn,aliases:Un,getSetter:function(e,t,i){var n=Un[t];return n&&n.indexOf(",")<0&&(t=n),t in jn&&t!==Bi&&(e._gsap.x||Jn(e,"x"))?i&&hm===i?t==="scale"?gx:mx:(hm=i||{})&&(t==="scale"?_x:vx):e.style&&!dl(e.style[t])?fx:~t.indexOf("-")?px:_l(e,t)},core:{_removeProperty:pr,_getMatrix:oh}};di.utils.checkPrefix=ea;di.core.getStyleSaver=bm;(function(s,e,t,i){var n=wi(s+","+e+","+t,function(r){jn[r]=1});wi(e,function(r){Ui.units[r]="deg",Tm[r]=1}),Un[n[13]]=s+","+e,wi(i,function(r){var a=r.split(":");Un[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ui.units[s]="px"});di.registerPlugin(lh);var Qn,mr,dh,bl,oo,yl,wl,lo,yn="transform",hh=yn+"Origin",Dm,Sl=function(e){var t=e.ownerDocument||e;for(!(yn in e.style)&&("msTransform"in e.style)&&(yn="msTransform",hh=yn+"Origin");t.parentNode&&(t=t.parentNode););if(mr=window,wl=new Rs,t){Qn=t,dh=t.documentElement,bl=t.body,lo=Qn.createElementNS("http://www.w3.org/2000/svg","g"),lo.style.transform="none";var i=t.createElement("div"),n=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(i),i.appendChild(n),i.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Dm=n.offsetParent!==i,r.removeChild(i))}return t},Dx=function(e){for(var t,i;e&&e!==bl;)i=e._gsap,i&&i.uncache&&i.get(e,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),t?t.push(i):t=[i]),e=e.parentNode;return t},Pm=[],Rm=[],Ml=function(){return mr.pageYOffset||Qn.scrollTop||dh.scrollTop||bl.scrollTop||0},El=function(){return mr.pageXOffset||Qn.scrollLeft||dh.scrollLeft||bl.scrollLeft||0},fh=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},Px=function s(e){if(mr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},ch=function s(e,t){if(e.parentNode&&(Qn||Sl(e))){var i=fh(e),n=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=i?t?"rect":"g":"div",a=t!==2?0:100,o=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=Qn.createElementNS?Qn.createElementNS(n.replace(/^https/,"http"),r):Qn.createElement(r);return t&&(i?(yl||(yl=s(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+a+","+o+")"),yl.appendChild(c)):(oo||(oo=s(e),oo.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+o+"px;left:"+a+"px",oo.appendChild(c))),c}throw"Need document and parent."},Rx=function(e){for(var t=new Rs,i=0;i<e.numberOfItems;i++)t.multiply(e.getItem(i).matrix);return t},ph=function(e){var t=e.getCTM(),i;return t||(i=e.style[yn],e.style[yn]="none",e.appendChild(lo),t=lo.getCTM(),e.removeChild(lo),i?e.style[yn]=i:e.style.removeProperty(yn.replace(/([A-Z])/g,"-$1").toLowerCase())),t||wl.clone()},Ix=function(e,t){var i=fh(e),n=e===i,r=i?Pm:Rm,a=e.parentNode,o,l,c,u,h,f;if(e===mr)return e;if(r.length||r.push(ch(e,1),ch(e,2),ch(e,3)),o=i?yl:oo,i)n?(c=ph(e),u=-c.e/c.a,h=-c.f/c.d,l=wl):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?Rx(l):l.getItem(0).matrix:wl,u=l.a*c.x+l.c*c.y,h=l.b*c.x+l.d*c.y):(l=new Rs,u=h=0),t&&e.tagName.toLowerCase()==="g"&&(u=h=0),(n?i:a).appendChild(o),o.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+u)+","+(l.f+h)+")");else{if(u=h=0,Dm)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(mr.getComputedStyle(c)[yn]+"").length>4&&(u=c.offsetLeft,h=c.offsetTop,c=0);if(f=mr.getComputedStyle(e),f.position!=="absolute"&&f.position!=="fixed")for(l=e.offsetParent;a&&a!==l;)u+=a.scrollLeft||0,h+=a.scrollTop||0,a=a.parentNode;c=o.style,c.top=e.offsetTop-h+"px",c.left=e.offsetLeft-u+"px",c[yn]=f[yn],c[hh]=f[hh],c.position=f.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(o)}return o},uh=function(e,t,i,n,r,a,o){return e.a=t,e.b=i,e.c=n,e.d=r,e.e=a,e.f=o,e},Rs=function(){function s(t,i,n,r,a,o){t===void 0&&(t=1),i===void 0&&(i=0),n===void 0&&(n=0),r===void 0&&(r=1),a===void 0&&(a=0),o===void 0&&(o=0),uh(this,t,i,n,r,a,o)}var e=s.prototype;return e.inverse=function(){var i=this.a,n=this.b,r=this.c,a=this.d,o=this.e,l=this.f,c=i*a-n*r||1e-10;return uh(this,a/c,-n/c,-r/c,i/c,(r*l-a*o)/c,-(i*l-n*o)/c)},e.multiply=function(i){var n=this.a,r=this.b,a=this.c,o=this.d,l=this.e,c=this.f,u=i.a,h=i.c,f=i.b,d=i.d,m=i.e,p=i.f;return uh(this,u*n+f*a,u*r+f*o,h*n+d*a,h*r+d*o,l+m*n+p*a,c+m*r+p*o)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(i){var n=this.a,r=this.b,a=this.c,o=this.d,l=this.e,c=this.f;return n===i.a&&r===i.b&&a===i.c&&o===i.d&&l===i.e&&c===i.f},e.apply=function(i,n){n===void 0&&(n={});var r=i.x,a=i.y,o=this.a,l=this.b,c=this.c,u=this.d,h=this.e,f=this.f;return n.x=r*o+a*c+h||0,n.y=r*l+a*u+f||0,n},s}();function wn(s,e,t,i){if(!s||!s.parentNode||(Qn||Sl(s)).documentElement===s)return new Rs;var n=Dx(s),r=fh(s),a=r?Pm:Rm,o=Ix(s,t),l=a[0].getBoundingClientRect(),c=a[1].getBoundingClientRect(),u=a[2].getBoundingClientRect(),h=o.parentNode,f=!i&&Px(s),d=new Rs((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:El()),l.top+(f?0:Ml()));if(h.removeChild(o),n)for(l=n.length;l--;)c=n[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}var Lx=1,sa,fi,Tt,co,Is,es,wh,Im=function(e,t){return e.actions.forEach(function(i){return i.vars[t]&&i.vars[t](i)})},bh={},Lm=180/Math.PI,Fx=Math.PI/180,Cl={},Fm={},Rl={},Mh=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},Nx=Mh("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Il=Mh("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),uo=function(e){return sa(e)[0]||console.warn("Element not found:",e)},ta=function(e){return Math.round(e*1e4)/1e4||0},mh=function(e,t,i){return e.forEach(function(n){return n.classList[i](t)})},Nm={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},km={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Vm=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},ia=function(e,t){var i={},n;for(n in e)t[n]||(i[n]=e[n]);return i},Eh={},Hm=function(e){var t=Eh[e]=Mh(e);return Rl[e]=t.concat(Il),t},Ox=function(e){var t=e._gsap||fi.core.getCache(e);return t.gmCache===fi.ticker.frame?t.gMatrix:(t.gmCache=fi.ticker.frame,t.gMatrix=wn(e,!0,!1,!0))},Ux=function s(e,t,i){i===void 0&&(i=0);for(var n=e.parentNode,r=1e3*Math.pow(10,i)*(t?-1:1),a=t?-r*900:0;e;)a+=r,e=e.previousSibling;return n?a+s(n,t,i+1):a},Dl=function(e,t,i){return e.forEach(function(n){return n.d=Ux(i?n.element:n.t,t)}),e.sort(function(n,r){return n.d-r.d}),e},ho=function(e,t){for(var i=e.element.style,n=e.css=e.css||[],r=t.length,a,o;r--;)a=t[r],o=i[a]||i.getPropertyValue(a),n.push(o?a:Fm[a]||(Fm[a]=Vm(a)),o);return i},Pl=function(e){var t=e.css,i=e.element.style,n=0;for(e.cache.uncache=1;n<t.length;n+=2)t[n+1]?i[t[n]]=t[n+1]:i.removeProperty(t[n]);!t[t.indexOf("transform")+1]&&i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))},Om=function(e,t){e.forEach(function(i){return i.a.cache.uncache=1}),t||e.finalStates.forEach(Pl)},gh="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Th=function(e,t,i){var n=e.element,r=e.width,a=e.height,o=e.uncache,l=e.getProp,c=n.style,u=4,h,f,d;if(typeof t!="object"&&(t=e),Tt&&i!==1)return Tt._abs.push({t:n,b:e,a:e,sd:0}),Tt._final.push(function(){return(e.cache.uncache=1)&&Pl(e)}),n;for(f=l("display")==="none",(!e.isVisible||f)&&(f&&(ho(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=r=e.width||t.width,e.height=a=e.height||t.height),ho(e,gh),d=window.getComputedStyle(n);u--;)c[gh[u]]=d[gh[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=r+"px",c.height=a+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),o)h=new gr(n);else if(h=ia(e,Cl),h.position="absolute",e.simple){var m=n.getBoundingClientRect();h.matrix=new Rs(1,0,0,1,m.left+El(),m.top+Ml())}else h.matrix=wn(n,!1,!1,!0);return h=na(h,e,!0),e.x=es(h.x,.01),e.y=es(h.y,.01),n},Um=function(e,t){return t!==!0&&(t=sa(t),e=e.filter(function(i){if(t.indexOf((i.sd<0?i.b:i.a).element)!==-1)return!0;i.t._gsap.renderTransform(1),i.b.isVisible&&(i.t.style.width=i.b.width+"px",i.t.style.height=i.b.height+"px")})),e},Gm=function(e){return Dl(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Th(t.sd<0?t.b:t.a,t.b,1)})},Bx=function(e,t){return t&&e.idLookup[Sh(t).id]||e.elementStates[0]},Sh=function(e,t,i,n){return e instanceof gr?e:e instanceof bn?Bx(e,n):new gr(typeof e=="string"?uo(e)||console.warn(e+" not found"):e,t,i)},zx=function(e,t){for(var i=fi.getProperty(e.element,null,"native"),n=e.props={},r=t.length;r--;)n[t[r]]=(i(t[r])+"").trim();return n.zIndex&&(n.zIndex=parseFloat(n.zIndex)||0),e},Wm=function(e,t){var i=e.style||e,n;for(n in t)i[n]=t[n]},kx=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+Lx++),t},Xm=function(e){return e.map(function(t){return t.element})},Bm=function(e,t,i){return e&&t.length&&i.add(e(Xm(t),i,new bn(t,0,!0)),0)},na=function(e,t,i,n,r,a){var o=e.element,l=e.cache,c=e.parent,u=e.x,h=e.y,f=t.width,d=t.height,m=t.scaleX,p=t.scaleY,g=t.rotation,_=t.bounds,x=a&&wh&&wh(o,"transform"),v=e,w=t.matrix,E=w.e,M=w.f,S=e.bounds.width!==_.width||e.bounds.height!==_.height||e.scaleX!==m||e.scaleY!==p||e.rotation!==g,A=!S&&e.simple&&t.simple&&!r,D,y,b,R,C,I,U;return A||!c?(m=p=1,g=D=0):(C=Ox(c),I=C.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),g=ta(Math.atan2(I.b,I.a)*Lm),D=ta(Math.atan2(I.c,I.d)*Lm+g)%360,m=Math.sqrt(Math.pow(I.a,2)+Math.pow(I.b,2)),p=Math.sqrt(Math.pow(I.c,2)+Math.pow(I.d,2))*Math.cos(D*Fx),r&&(r=sa(r)[0],R=fi.getProperty(r),U=r.getBBox&&typeof r.getBBox=="function"&&r.getBBox(),v={scaleX:R("scaleX"),scaleY:R("scaleY"),width:U?U.width:Math.ceil(parseFloat(R("width","px"))),height:U?U.height:parseFloat(R("height","px"))}),l.rotation=g+"deg",l.skewX=D+"deg"),i?(m*=f===v.width||!v.width?1:f/v.width,p*=d===v.height||!v.height?1:d/v.height,l.scaleX=m,l.scaleY=p):(f=es(f*m/v.scaleX,0),d=es(d*p/v.scaleY,0),o.style.width=f+"px",o.style.height=d+"px"),n&&Wm(o,t.props),A||!c?(u+=E-e.matrix.e,h+=M-e.matrix.f):S||c!==t.parent?(l.renderTransform(1,l),I=wn(r||o,!1,!1,!0),y=C.apply({x:I.e,y:I.f}),b=C.apply({x:E,y:M}),u+=b.x-y.x,h+=b.y-y.y):(C.e=C.f=0,b=C.apply({x:E-e.matrix.e,y:M-e.matrix.f}),u+=b.x,h+=b.y),u=es(u,.02),h=es(h,.02),a&&!(a instanceof gr)?x&&x.revert():(l.x=u+"px",l.y=h+"px",l.renderTransform(1,l)),a&&(a.x=u,a.y=h,a.rotation=g,a.skewX=D,i?(a.scaleX=m,a.scaleY=p):(a.width=f,a.height=d)),a||l},_h=function(e,t){return e instanceof bn?e:new bn(e,t)},Ym=function(e,t,i){var n=e.idLookup[i],r=e.alt[i];return r.isVisible&&(!(t.getElementState(r.element)||r).isVisible||!n.isVisible)?r:n},vh=[],xh="width,height,overflowX,overflowY".split(","),Tl,zm=function(e){if(e!==Tl){var t=Is.style,i=Is.clientWidth===window.outerWidth,n=Is.clientHeight===window.outerHeight,r=4;if(e&&(i||n)){for(;r--;)vh[r]=t[xh[r]];i&&(t.width=Is.clientWidth+"px",t.overflowY="hidden"),n&&(t.height=Is.clientHeight+"px",t.overflowX="hidden"),Tl=e}else if(Tl){for(;r--;)vh[r]?t[xh[r]]=vh[r]:t.removeProperty(Vm(xh[r]));Tl=e}}},yh=function(e,t,i,n){e instanceof bn&&t instanceof bn||console.warn("Not a valid state object."),i=i||{};var r=i,a=r.clearProps,o=r.onEnter,l=r.onLeave,c=r.absolute,u=r.absoluteOnLeave,h=r.custom,f=r.delay,d=r.paused,m=r.repeat,p=r.repeatDelay,g=r.yoyo,_=r.toggleClass,x=r.nested,v=r.zIndex,w=r.scale,E=r.fade,M=r.stagger,S=r.spin,A=r.prune,D=("props"in i?i:e).props,y=ia(i,Nm),b=fi.timeline({delay:f,paused:d,repeat:m,repeatDelay:p,yoyo:g,data:"isFlip"}),R=y,C=[],I=[],U=[],B=[],F=S===!0?1:S||0,L=typeof S=="function"?S:function(){return F},k=e.interrupted||t.interrupted,N=b[n!==1?"to":"from"],ie,he,Fe,j,V,H,X,oe,de,Pe,Ae,Re,z,Me;for(he in t.idLookup)Ae=t.alt[he]?Ym(t,e,he):t.idLookup[he],V=Ae.element,Pe=e.idLookup[he],e.alt[he]&&V===Pe.element&&(e.alt[he].isVisible||!Ae.isVisible)&&(Pe=e.alt[he]),Pe?(H={t:V,b:Pe,a:Ae,sd:Pe.element===V?0:Ae.isVisible?1:-1},U.push(H),H.sd&&(H.sd<0&&(H.b=Ae,H.a=Pe),k&&ho(H.b,D?Rl[D]:Il),E&&U.push(H.swap={t:Pe.element,b:H.b,a:H.a,sd:-H.sd,swap:H})),V._flip=Pe.element._flip=Tt?Tt.timeline:b):Ae.isVisible&&(U.push({t:V,b:ia(Ae,{isVisible:1}),a:Ae,sd:0,entering:1}),V._flip=Tt?Tt.timeline:b);if(D&&(Eh[D]||Hm(D)).forEach(function(Y){return y[Y]=function(Ve){return U[Ve].a.props[Y]}}),U.finalStates=de=[],Re=function(){for(Dl(U),zm(!0),j=0;j<U.length;j++)H=U[j],z=H.a,Me=H.b,A&&!z.isDifferent(Me)&&!H.entering?U.splice(j--,1):(V=H.t,x&&!(H.sd<0)&&j&&(z.matrix=wn(V,!1,!1,!0)),Me.isVisible&&z.isVisible?(H.sd<0?(X=new gr(V,D,e.simple),na(X,z,w,0,0,X),X.matrix=wn(V,!1,!1,!0),X.css=H.b.css,H.a=z=X,E&&(V.style.opacity=k?Me.opacity:z.opacity),M&&B.push(V)):H.sd>0&&E&&(V.style.opacity=k?z.opacity-Me.opacity:"0"),na(z,Me,w,D)):Me.isVisible!==z.isVisible&&(Me.isVisible?z.isVisible||(Me.css=z.css,I.push(Me),U.splice(j--,1),c&&x&&na(z,Me,w,D)):(z.isVisible&&C.push(z),U.splice(j--,1))),w||(V.style.maxWidth=Math.max(z.width,Me.width)+"px",V.style.maxHeight=Math.max(z.height,Me.height)+"px",V.style.minWidth=Math.min(z.width,Me.width)+"px",V.style.minHeight=Math.min(z.height,Me.height)+"px"),x&&_&&V.classList.add(_)),de.push(z);var Ve;if(_&&(Ve=de.map(function(T){return T.element}),x&&Ve.forEach(function(T){return T.classList.remove(_)})),zm(!1),w?(y.scaleX=function(T){return U[T].a.scaleX},y.scaleY=function(T){return U[T].a.scaleY}):(y.width=function(T){return U[T].a.width+"px"},y.height=function(T){return U[T].a.height+"px"},y.autoRound=i.autoRound||!1),y.x=function(T){return U[T].a.x+"px"},y.y=function(T){return U[T].a.y+"px"},y.rotation=function(T){return U[T].a.rotation+(S?L(T,oe[T],oe)*360:0)},y.skewX=function(T){return U[T].a.skewX},oe=U.map(function(T){return T.t}),(v||v===0)&&(y.modifiers={zIndex:function(){return v}},y.zIndex=v,y.immediateRender=i.immediateRender!==!1),E&&(y.opacity=function(T){return U[T].sd<0?0:U[T].sd>0?U[T].a.opacity:"+=0"}),B.length){M=fi.utils.distribute(M);var De=oe.slice(B.length);y.stagger=function(T,Z){return M(~B.indexOf(Z)?oe.indexOf(U[T].swap.t):T,Z,De)}}if(Nx.forEach(function(T){return i[T]&&b.eventCallback(T,i[T],i[T+"Params"])}),h&&oe.length){R=ia(y,Nm),"scale"in h&&(h.scaleX=h.scaleY=h.scale,delete h.scale);for(he in h)ie=ia(h[he],km),ie[he]=y[he],!("duration"in ie)&&"duration"in y&&(ie.duration=y.duration),ie.stagger=y.stagger,N.call(b,oe,ie,0),delete R[he]}(oe.length||I.length||C.length)&&(_&&b.add(function(){return mh(Ve,_,b._zTime<0?"remove":"add")},0)&&!d&&mh(Ve,_,"add"),oe.length&&N.call(b,oe,R,0)),Bm(o,C,b),Bm(l,I,b);var O=Tt&&Tt.timeline;O&&(O.add(b,0),Tt._final.push(function(){return Om(U,!a)})),Fe=b.duration(),b.call(function(){var T=b.time()>=Fe;T&&!O&&Om(U,!a),_&&mh(Ve,_,T?"remove":"add")})},u&&(c=U.filter(function(Y){return!Y.sd&&!Y.a.isVisible&&Y.b.isVisible}).map(function(Y){return Y.a.element})),Tt){var Ce;c&&(Ce=Tt._abs).push.apply(Ce,Um(U,c)),Tt._run.push(Re)}else c&&Gm(Um(U,c)),Re();var Ue=Tt?Tt.timeline:b;return Ue.revert=function(){return Ah(Ue,1,1)},Ue},Vx=function s(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(s)},Ah=function(e,t,i){if(e&&e.progress()<1&&(!e.paused()||i))return t&&(Vx(e),t<2&&e.progress(1),e.kill()),!0},Al=function(e){for(var t=e.idLookup={},i=e.alt={},n=e.elementStates,r=n.length,a;r--;)a=n[r],t[a.id]?i[a.id]=a:t[a.id]=a},bn=function(){function s(t,i,n){if(this.props=i&&i.props,this.simple=!!(i&&i.simple),n)this.targets=Xm(t),this.elementStates=t,Al(this);else{this.targets=sa(t);var r=i&&(i.kill===!1||i.batch&&!i.kill);Tt&&!r&&Tt._kill.push(this),this.update(r||!!Tt)}}var e=s.prototype;return e.update=function(i){var n=this;return this.elementStates=this.targets.map(function(r){return new gr(r,n.props,n.simple)}),Al(this),this.interrupt(i),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Al(this),this},e.fit=function(i,n,r){for(var a=Dl(this.elementStates.slice(0),!1,!0),o=(i||this).idLookup,l=0,c,u;l<a.length;l++)c=a[l],r&&(c.matrix=wn(c.element,!1,!1,!0)),u=o[c.id],u&&na(c,u,n,!0,0,c),c.matrix=wn(c.element,!1,!1,!0);return this},e.getProperty=function(i,n){var r=this.getElementState(i)||Cl;return(n in r?r:r.props||Cl)[n]},e.add=function(i){for(var n=i.targets.length,r=this.idLookup,a=this.alt,o,l,c;n--;)l=i.elementStates[n],c=r[l.id],c&&(l.element===c.element||a[l.id]&&a[l.id].element===l.element)?(o=this.elementStates.indexOf(l.element===c.element?c:a[l.id]),this.targets.splice(o,1,i.targets[n]),this.elementStates.splice(o,1,l)):(this.targets.push(i.targets[n]),this.elementStates.push(l));return i.interrupted&&(this.interrupted=!0),i.simple||(this.simple=!1),Al(this),this},e.compare=function(i){var n=i.idLookup,r=this.idLookup,a=[],o=[],l=[],c=[],u=[],h=i.alt,f=this.alt,d=function(A,D,y){return(A.isVisible!==D.isVisible?A.isVisible?l:c:A.isVisible?o:a).push(y)&&u.push(y)},m=function(A,D,y){return u.indexOf(y)<0&&d(A,D,y)},p,g,_,x,v,w,E,M;for(_ in n)v=h[_],w=f[_],p=v?Ym(i,this,_):n[_],x=p.element,g=r[_],w?(M=g.isVisible||!w.isVisible&&x===g.element?g:w,E=v&&!p.isVisible&&!v.isVisible&&M.element===v.element?v:p,E.isVisible&&M.isVisible&&E.element!==M.element?((E.isDifferent(M)?o:a).push(E.element,M.element),u.push(E.element,M.element)):d(E,M,E.element),v&&E.element===v.element&&(v=n[_]),m(E.element!==g.element&&v?v:E,g,g.element),m(v&&v.element===w.element?v:E,w,w.element),v&&m(v,w.element===v.element?w:g,v.element)):(g?g.isDifferent(p)?d(p,g,x):a.push(x):l.push(x),v&&m(v,g,v.element));for(_ in r)n[_]||(c.push(r[_].element),f[_]&&c.push(f[_].element));return{changed:o,unchanged:a,enter:l,leave:c}},e.recordInlineStyles=function(){for(var i=Rl[this.props]||Il,n=this.elementStates.length;n--;)ho(this.elementStates[n],i)},e.interrupt=function(i){var n=this,r=[];this.targets.forEach(function(a){var o=a._flip,l=Ah(o,i?0:1);i&&l&&r.indexOf(o)<0&&o.add(function(){return n.updateVisibility()}),l&&r.push(o)}),!i&&r.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!r.length)},e.updateVisibility=function(){this.elementStates.forEach(function(i){var n=i.element.getBoundingClientRect();i.isVisible=!!(n.width||n.height||n.top||n.left),i.uncache=1})},e.getElementState=function(i){return this.elementStates[this.targets.indexOf(uo(i))]},e.makeAbsolute=function(){return Dl(this.elementStates.slice(0),!0,!0).map(Th)},s}(),gr=function(){function s(t,i,n){this.element=t,this.update(i,n)}var e=s.prototype;return e.isDifferent=function(i){var n=this.bounds,r=i.bounds;return n.top!==r.top||n.left!==r.left||n.width!==r.width||n.height!==r.height||!this.matrix.equals(i.matrix)||this.opacity!==i.opacity||this.props&&i.props&&JSON.stringify(this.props)!==JSON.stringify(i.props)},e.update=function(i,n){var r=this,a=r.element,o=fi.getProperty(a),l=fi.core.getCache(a),c=a.getBoundingClientRect(),u=a.getBBox&&typeof a.getBBox=="function"&&a.nodeName.toLowerCase()!=="svg"&&a.getBBox(),h=n?new Rs(1,0,0,1,c.left+El(),c.top+Ml()):wn(a,!1,!1,!0);r.getProp=o,r.element=a,r.id=kx(a),r.matrix=h,r.cache=l,r.bounds=c,r.isVisible=!!(c.width||c.height||c.left||c.top),r.display=o("display"),r.position=o("position"),r.parent=a.parentNode,r.x=o("x"),r.y=o("y"),r.scaleX=l.scaleX,r.scaleY=l.scaleY,r.rotation=o("rotation"),r.skewX=o("skewX"),r.opacity=o("opacity"),r.width=u?u.width:es(o("width","px"),.04),r.height=u?u.height:es(o("height","px"),.04),i&&zx(r,Eh[i]||Hm(i)),r.ctm=a.getCTM&&a.nodeName.toLowerCase()==="svg"&&ph(a).inverse(),r.simple=n||ta(h.a)===1&&!ta(h.b)&&!ta(h.c)&&ta(h.d)===1,r.uncache=0},s}(),Hx=function(){function s(t,i){this.vars=t,this.batch=i,this.states=[],this.timeline=i.timeline}var e=s.prototype;return e.getStateById=function(i){for(var n=this.states.length;n--;)if(this.states[n].idLookup[i])return this.states[n]},e.kill=function(){this.batch.remove(this)},s}(),Gx=function(){function s(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new bn,this.timeline=fi.timeline()}var e=s.prototype;return e.add=function(i){var n=this.actions.filter(function(r){return r.vars===i});return n.length?n[0]:(n=new Hx(typeof i=="function"?{animate:i}:i,this),this.actions.push(n),n)},e.remove=function(i){var n=this.actions.indexOf(i);return n>=0&&this.actions.splice(n,1),this},e.getState=function(i){var n=this,r=Tt,a=co;return Tt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(o){o.vars.getState&&(o.states.length=0,co=o,o.state=o.vars.getState(o)),i&&o.states.forEach(function(l){return n.state.add(l)})}),co=a,Tt=r,this.killConflicts(),this},e.animate=function(){var i=this,n=Tt,r=this.timeline,a=this.actions.length,o,l;for(Tt=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,h=c.vars.onLeave,f=c.targets,d,m;f&&f.length&&(u||h)&&(d=new bn,c.states.forEach(function(p){return d.add(p)}),m=d.compare(ra.getState(f)),m.enter.length&&u&&u(m.enter),m.leave.length&&h&&h(m.leave))}),Gm(this._abs),this._run.forEach(function(c){return c()}),l=r.duration(),o=this._final.slice(0),r.add(function(){l<=r.time()&&(o.forEach(function(c){return c()}),Im(i,"onComplete"))}),Tt=n;a--;)this.actions[a].vars.once&&this.actions[a].kill();return Im(this,"onStart"),r.restart(),this},e.loadState=function(i){i||(i=function(){return 0});var n=[];return this.actions.forEach(function(r){if(r.vars.loadState){var a,o=function l(c){c&&(r.targets=c),a=n.indexOf(l),~a&&(n.splice(a,1),n.length||i())};n.push(o),r.vars.loadState(o)}}),n.length||i(),this},e.setState=function(){return this.actions.forEach(function(i){return i.targets=i.vars.setState&&i.vars.setState(i)}),this},e.killConflicts=function(i){return this.state.interrupt(i),this._kill.forEach(function(n){return n.interrupt(i)}),this},e.run=function(i,n){var r=this;return this!==Tt&&(i||this.getState(n),this.loadState(function(){r._killed||(r.setState(),r.animate())})),this},e.clear=function(i){this.state.clear(),i||(this.actions.length=0)},e.getStateById=function(i){for(var n=this.actions.length,r;n--;)if(r=this.actions[n].getStateById(i),r)return r;return this.state.idLookup[i]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete bh[this.id]},s}(),ra=function(){function s(){}return s.getState=function(t,i){var n=_h(t,i);return co&&co.states.push(n),i&&i.batch&&s.batch(i.batch).state.add(n),n},s.from=function(t,i){return i=i||{},"clearProps"in i||(i.clearProps=!0),yh(t,_h(i.targets||t.targets,{props:i.props||t.props,simple:i.simple,kill:!!i.kill}),i,-1)},s.to=function(t,i){return yh(t,_h(i.targets||t.targets,{props:i.props||t.props,simple:i.simple,kill:!!i.kill}),i,1)},s.fromTo=function(t,i,n){return yh(t,i,n)},s.fit=function(t,i,n){var r=n?ia(n,km):{},a=n||r,o=a.absolute,l=a.scale,c=a.getVars,u=a.props,h=a.runBackwards,f=a.onComplete,d=a.simple,m=n&&n.fitChild&&uo(n.fitChild),p=Sh(i,u,d,t),g=Sh(t,0,d,p),_=u?Rl[u]:Il,x=fi.context();return u&&Wm(r,p.props),ho(g,_),h&&("immediateRender"in r||(r.immediateRender=!0),r.onComplete=function(){Pl(g),f&&f.apply(this,arguments)}),o&&Th(g,p),r=na(g,p,l||m,u,m,r.duration||c?r:0),x&&!c&&x.add(function(){return function(){return Pl(g)}}),c?r:r.duration?fi.to(g.element,r):null},s.makeAbsolute=function(t,i){return(t instanceof bn?t:new bn(t,i)).makeAbsolute()},s.batch=function(t){return t||(t="default"),bh[t]||(bh[t]=new Gx(t))},s.killFlipsOf=function(t,i){(t instanceof bn?t.targets:sa(t)).forEach(function(n){return n&&Ah(n._flip,i!==!1?1:2)})},s.isFlipping=function(t){var i=s.getByTarget(t);return!!i&&i.isActive()},s.getByTarget=function(t){return(uo(t)||Cl)._flip},s.getElementState=function(t,i){return new gr(uo(t),i)},s.convertCoordinates=function(t,i,n){var r=wn(i,!0,!0).multiply(wn(t));return n?r.apply(n):r},s.register=function(t){if(Is=typeof document<"u"&&document.body,Is){fi=t,Sl(Is),sa=fi.utils.toArray,wh=fi.core.getStyleSaver;var i=fi.utils.snap(.1);es=function(r,a){return i(parseFloat(r)+a)}}},s}();ra.version="3.12.5";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(ra);function qm(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Wx(s,e,t){return e&&qm(s.prototype,e),t&&qm(s,t),s}var ci,Nl,Xx,Zi,Ls,Fs,oa,Zm,_r,po,Km,ts,Sn,Jm,jm=function(){return ci||typeof window<"u"&&(ci=window.gsap)&&ci.registerPlugin&&ci},Qm=1,aa=[],nt=[],Mn=[],mo=Date.now,Ch=function(e,t){return t},Yx=function(){var e=po.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,nt),n.push.apply(n,Mn),nt=i,Mn=n,Ch=function(a,o){return t[a](o)}},ns=function(e,t){return~Mn.indexOf(e)&&Mn[Mn.indexOf(e)+1][t]},go=function(e){return!!~Km.indexOf(e)},Mi=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},Si=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ll="scrollLeft",Fl="scrollTop",Dh=function(){return ts&&ts.isPressed||nt.cache++},Ol=function(e,t){var i=function n(r){if(r||r===0){Qm&&(Zi.history.scrollRestoration="manual");var a=ts&&ts.isPressed;r=n.v=Math.round(r)||(ts&&ts.iOS?1:0),e(r),n.cacheID=nt.cache,a&&Ch("ss",r)}else(t||nt.cache!==n.cacheID||Ch("ref"))&&(n.cacheID=nt.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},pi={s:Ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ol(function(s){return arguments.length?Zi.scrollTo(s,Yt.sc()):Zi.pageXOffset||Ls[Ll]||Fs[Ll]||oa[Ll]||0})},Yt={s:Fl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pi,sc:Ol(function(s){return arguments.length?Zi.scrollTo(pi.sc(),s):Zi.pageYOffset||Ls[Fl]||Fs[Fl]||oa[Fl]||0})},Ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||ci.utils.toArray)(e)[0]||(typeof e=="string"&&ci.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},is=function(e,t){var i=t.s,n=t.sc;go(e)&&(e=Ls.scrollingElement||Fs);var r=nt.indexOf(e),a=n===Yt.sc?1:2;!~r&&(r=nt.push(e)-1),nt[r+a]||Mi(e,"scroll",Dh);var o=nt[r+a],l=o||(nt[r+a]=Ol(ns(e,i),!0)||(go(e)?n:Ol(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=ci.getProperty(e,"scrollBehavior")==="smooth"),l},Ul=function(e,t,i){var n=e,r=e,a=mo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(m,p){var g=mo();p||g-a>l?(r=n,n=m,o=a,a=g):i?n+=m:n=r+(m-r)/(g-o)*(a-o)},h=function(){r=n=i?0:n,o=a=0},f=function(m){var p=o,g=r,_=mo();return(m||m===0)&&m!==n&&u(m),a===o||_-o>c?0:(n+(i?g:-g))/((i?_:a)-p)*1e3};return{update:u,reset:h,getVelocity:f}},fo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},$m=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},eg=function(){po=ci.core.globals().ScrollTrigger,po&&po.core&&Yx()},tg=function(e){return ci=e||jm(),!Nl&&ci&&typeof document<"u"&&document.body&&(Zi=window,Ls=document,Fs=Ls.documentElement,oa=Ls.body,Km=[Zi,Ls,Fs,oa],Xx=ci.utils.clamp,Jm=ci.core.context||function(){},_r="onpointerenter"in oa?"pointer":"mouse",Zm=Vt.isTouch=Zi.matchMedia&&Zi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Sn=Vt.eventTypes=("ontouchstart"in Fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qm=0},500),eg(),Nl=1),Nl};pi.op=Yt;nt.cache=0;var Vt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Nl||tg(ci)||console.warn("Please gsap.registerPlugin(Observer)"),po||eg();var n=i.tolerance,r=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,m=i.wheelSpeed,p=i.event,g=i.onDragStart,_=i.onDragEnd,x=i.onDrag,v=i.onPress,w=i.onRelease,E=i.onRight,M=i.onLeft,S=i.onUp,A=i.onDown,D=i.onChangeX,y=i.onChangeY,b=i.onChange,R=i.onToggleX,C=i.onToggleY,I=i.onHover,U=i.onHoverEnd,B=i.onMove,F=i.ignoreCheck,L=i.isNormalizer,k=i.onGestureStart,N=i.onGestureEnd,ie=i.onWheel,he=i.onEnable,Fe=i.onDisable,j=i.onClick,V=i.scrollSpeed,H=i.capture,X=i.allowClicks,oe=i.lockAxis,de=i.onLockAxis;this.target=o=Ei(o)||Fs,this.vars=i,d&&(d=ci.utils.toArray(d)),n=n||1e-9,r=r||0,m=m||1,V=V||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Zi.getComputedStyle(oa).lineHeight)||22);var Pe,Ae,Re,z,Me,Ce,Ue,Y=this,Ve=0,De=0,O=i.passive||!u,T=is(o,pi),Z=is(o,Yt),ne=T(),re=Z(),te=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Sn[0]==="pointerdown",be=go(o),le=o.ownerDocument||Ls,fe=[0,0,0],$e=[0,0,0],ce=0,Se=function(){return ce=mo()},Ee=function(Ie,dt){return(Y.event=Ie)&&d&&~d.indexOf(Ie.target)||dt&&te&&Ie.pointerType!=="touch"||F&&F(Ie,dt)},Ge=function(){Y._vx.reset(),Y._vy.reset(),Ae.pause(),h&&h(Y)},we=function(){var Ie=Y.deltaX=$m(fe),dt=Y.deltaY=$m($e),ve=Math.abs(Ie)>=n,We=Math.abs(dt)>=n;b&&(ve||We)&&b(Y,Ie,dt,fe,$e),ve&&(E&&Y.deltaX>0&&E(Y),M&&Y.deltaX<0&&M(Y),D&&D(Y),R&&Y.deltaX<0!=Ve<0&&R(Y),Ve=Y.deltaX,fe[0]=fe[1]=fe[2]=0),We&&(A&&Y.deltaY>0&&A(Y),S&&Y.deltaY<0&&S(Y),y&&y(Y),C&&Y.deltaY<0!=De<0&&C(Y),De=Y.deltaY,$e[0]=$e[1]=$e[2]=0),(z||Re)&&(B&&B(Y),Re&&(x(Y),Re=!1),z=!1),Ce&&!(Ce=!1)&&de&&de(Y),Me&&(ie(Y),Me=!1),Pe=0},Je=function(Ie,dt,ve){fe[ve]+=Ie,$e[ve]+=dt,Y._vx.update(Ie),Y._vy.update(dt),c?Pe||(Pe=requestAnimationFrame(we)):we()},Ye=function(Ie,dt){oe&&!Ue&&(Y.axis=Ue=Math.abs(Ie)>Math.abs(dt)?"x":"y",Ce=!0),Ue!=="y"&&(fe[2]+=Ie,Y._vx.update(Ie,!0)),Ue!=="x"&&($e[2]+=dt,Y._vy.update(dt,!0)),c?Pe||(Pe=requestAnimationFrame(we)):we()},lt=function(Ie){if(!Ee(Ie,1)){Ie=fo(Ie,u);var dt=Ie.clientX,ve=Ie.clientY,We=dt-Y.x,Be=ve-Y.y,qe=Y.isDragging;Y.x=dt,Y.y=ve,(qe||Math.abs(Y.startX-dt)>=r||Math.abs(Y.startY-ve)>=r)&&(x&&(Re=!0),qe||(Y.isDragging=!0),Ye(We,Be),qe||g&&g(Y))}},G=Y.onPress=function(Oe){Ee(Oe,1)||Oe&&Oe.button||(Y.axis=Ue=null,Ae.pause(),Y.isPressed=!0,Oe=fo(Oe),Ve=De=0,Y.startX=Y.x=Oe.clientX,Y.startY=Y.y=Oe.clientY,Y._vx.reset(),Y._vy.reset(),Mi(L?o:le,Sn[1],lt,O,!0),Y.deltaX=Y.deltaY=0,v&&v(Y))},ae=Y.onRelease=function(Oe){if(!Ee(Oe,1)){Si(L?o:le,Sn[1],lt,!0);var Ie=!isNaN(Y.y-Y.startY),dt=Y.isDragging,ve=dt&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),We=fo(Oe);!ve&&Ie&&(Y._vx.reset(),Y._vy.reset(),u&&X&&ci.delayedCall(.08,function(){if(mo()-ce>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(le.createEvent){var Be=le.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Zi,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Be)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&dt&&!L&&Ae.restart(!0),_&&dt&&_(Y),w&&w(Y,ve)}},ee=function(Ie){return Ie.touches&&Ie.touches.length>1&&(Y.isGesturing=!0)&&k(Ie,Y.isDragging)},se=function(){return(Y.isGesturing=!1)||N(Y)},pe=function(Ie){if(!Ee(Ie)){var dt=T(),ve=Z();Je((dt-ne)*V,(ve-re)*V,1),ne=dt,re=ve,h&&Ae.restart(!0)}},me=function(Ie){if(!Ee(Ie)){Ie=fo(Ie,u),ie&&(Me=!0);var dt=(Ie.deltaMode===1?l:Ie.deltaMode===2?Zi.innerHeight:1)*m;Je(Ie.deltaX*dt,Ie.deltaY*dt,0),h&&!L&&Ae.restart(!0)}},je=function(Ie){if(!Ee(Ie)){var dt=Ie.clientX,ve=Ie.clientY,We=dt-Y.x,Be=ve-Y.y;Y.x=dt,Y.y=ve,z=!0,h&&Ae.restart(!0),(We||Be)&&Ye(We,Be)}},xt=function(Ie){Y.event=Ie,I(Y)},Rt=function(Ie){Y.event=Ie,U(Y)},rt=function(Ie){return Ee(Ie)||fo(Ie,u)&&j(Y)};Ae=Y._dc=ci.delayedCall(f||.25,Ge).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Ul(0,50,!0),Y._vy=Ul(0,50,!0),Y.scrollX=T,Y.scrollY=Z,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Jm(this),Y.enable=function(Oe){return Y.isEnabled||(Mi(be?le:o,"scroll",Dh),a.indexOf("scroll")>=0&&Mi(be?le:o,"scroll",pe,O,H),a.indexOf("wheel")>=0&&Mi(o,"wheel",me,O,H),(a.indexOf("touch")>=0&&Zm||a.indexOf("pointer")>=0)&&(Mi(o,Sn[0],G,O,H),Mi(le,Sn[2],ae),Mi(le,Sn[3],ae),X&&Mi(o,"click",Se,!0,!0),j&&Mi(o,"click",rt),k&&Mi(le,"gesturestart",ee),N&&Mi(le,"gestureend",se),I&&Mi(o,_r+"enter",xt),U&&Mi(o,_r+"leave",Rt),B&&Mi(o,_r+"move",je)),Y.isEnabled=!0,Oe&&Oe.type&&G(Oe),he&&he(Y)),Y},Y.disable=function(){Y.isEnabled&&(aa.filter(function(Oe){return Oe!==Y&&go(Oe.target)}).length||Si(be?le:o,"scroll",Dh),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Si(L?o:le,Sn[1],lt,!0)),Si(be?le:o,"scroll",pe,H),Si(o,"wheel",me,H),Si(o,Sn[0],G,H),Si(le,Sn[2],ae),Si(le,Sn[3],ae),Si(o,"click",Se,!0),Si(o,"click",rt),Si(le,"gesturestart",ee),Si(le,"gestureend",se),Si(o,_r+"enter",xt),Si(o,_r+"leave",Rt),Si(o,_r+"move",je),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Fe&&Fe(Y))},Y.kill=Y.revert=function(){Y.disable();var Oe=aa.indexOf(Y);Oe>=0&&aa.splice(Oe,1),ts===Y&&(ts=0)},aa.push(Y),L&&go(o)&&(ts=Y),Y.enable(p)},Wx(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Vt.version="3.12.5";Vt.create=function(s){return new Vt(s)};Vt.register=tg;Vt.getAll=function(){return aa.slice()};Vt.getById=function(s){return aa.filter(function(e){return e.vars.id===s})[0]};jm()&&ci.registerPlugin(Vt);var Te,ua,ht,Bt,En,At,xg,Ql,Do,So,vo,Bl,mi,nc,Uh,Ai,ig,ng,ha,yg,Ph,wg,Ti,Bh,bg,Sg,Ns,zh,Wh,da,Xh,ec,kh,Rh,zl=1,gi=Date.now,Ih=gi(),hn=0,xo=0,sg=function(e,t,i){var n=Ji(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},rg=function(e,t){return t&&(!Ji(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},qx=function s(){return xo&&requestAnimationFrame(s)},ag=function(){return nc=1},og=function(){return nc=0},zn=function(e){return e},yo=function(e){return Math.round(e*1e5)/1e5||0},Mg=function(){return typeof window<"u"},Eg=function(){return Te||Mg()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Sr=function(e){return!!~xg.indexOf(e)},Tg=function(e){return(e==="Height"?Xh:ht["inner"+e])||En["client"+e]||At["client"+e]},Ag=function(e){return ns(e,"getBoundingClientRect")||(Sr(e)?function(){return jl.width=ht.innerWidth,jl.height=Xh,jl}:function(){return ss(e)})},$x=function(e,t,i){var n=i.d,r=i.d2,a=i.a;return(a=ns(e,"getBoundingClientRect"))?function(){return a()[n]}:function(){return(t?Tg(r):e["client"+r])||0}},Zx=function(e,t){return!t||~Mn.indexOf(e)?Ag(e):function(){return jl}},kn=function(e,t){var i=t.s,n=t.d2,r=t.d,a=t.a;return Math.max(0,(i="scroll"+n)&&(a=ns(e,i))?a()-Ag(e)()[r]:Sr(e)?(En[i]||At[i])-Tg(n):e[i]-e["offset"+n])},kl=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},Ji=function(e){return typeof e=="string"},Di=function(e){return typeof e=="function"},wo=function(e){return typeof e=="number"},vr=function(e){return typeof e=="object"},_o=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Lh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},la=Math.abs,Cg="left",Dg="top",Yh="right",qh="bottom",yr="width",wr="height",Mo="Right",Eo="Left",To="Top",Ao="Bottom",qt="padding",cn="margin",pa="Width",$h="Height",Jt="px",un=function(e){return ht.getComputedStyle(e)},Kx=function(e){var t=un(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},lg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},ss=function(e,t){var i=t&&un(e)[Uh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},tc=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Pg=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},Jx=function(e){return function(t){return Te.utils.snap(Pg(e),t)}},Zh=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,a){a===void 0&&(a=.001);var o;if(!r)return t(n);if(r>0){for(n-=a,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=a;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,r,a){a===void 0&&(a=.001);var o=t(n);return!r||Math.abs(o-n)<a||o-n<0==r<0?o:t(r<0?n-e:n+e)}},jx=function(e){return function(t,i){return Zh(Pg(e))(t,i.direction)}},Vl=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},ni=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},ii=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Hl=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},cg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Gl={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},$l=function(e,t){if(Ji(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in ic?ic[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Wl=function(e,t,i,n,r,a,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,m=Bt.createElement("div"),p=Sr(i)||ns(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,_=p?At:i,x=e.indexOf("start")!==-1,v=x?c:u,w="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((g||l)&&p?"fixed;":"absolute;"),(g||l||!p)&&(w+=(n===Yt?Yh:qh)+":"+(a+parseFloat(f))+"px;"),o&&(w+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=w,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+n.op.d2],Zl(m,0,n,x),m},Zl=function(e,t,i,n){var r={display:"block"},a=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+a+pa]=1,r["border"+o+pa]=0,r[i.p]=t+"px",Te.set(e,r)},st=[],Vh={},Po,ug=function(){return gi()-hn>34&&(Po||(Po=requestAnimationFrame(rs)))},ca=function(){(!Ti||!Ti.isPressed||Ti.startX>At.clientWidth)&&(nt.cache++,Ti?Po||(Po=requestAnimationFrame(rs)):rs(),hn||Er("scrollStart"),hn=gi())},Fh=function(){Sg=ht.innerWidth,bg=ht.innerHeight},bo=function(){nt.cache++,!mi&&!wg&&!Bt.fullscreenElement&&!Bt.webkitFullscreenElement&&(!Bh||Sg!==ht.innerWidth||Math.abs(ht.innerHeight-bg)>ht.innerHeight*.25)&&Ql.restart(!0)},Mr={},Qx=[],Rg=function s(){return ii(Ke,"scrollEnd",s)||xr(!0)},Er=function(e){return Mr[e]&&Mr[e].map(function(t){return t()})||Qx},Ki=[],Ig=function(e){for(var t=0;t<Ki.length;t+=5)(!e||Ki[t+4]&&Ki[t+4].query===e)&&(Ki[t].style.cssText=Ki[t+1],Ki[t].getBBox&&Ki[t].setAttribute("transform",Ki[t+2]||""),Ki[t+3].uncache=1)},Kh=function(e,t){var i;for(Ai=0;Ai<st.length;Ai++)i=st[Ai],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ec=!0,t&&Ig(t),t||Er("revert")},Lg=function(e,t){nt.cache++,(t||!Ci)&&nt.forEach(function(i){return Di(i)&&i.cacheID++&&(i.rec=0)}),Ji(e)&&(ht.history.scrollRestoration=Wh=e)},Ci,br=0,hg,ey=function(){if(hg!==br){var e=hg=br;requestAnimationFrame(function(){return e===br&&xr(!0)})}},Fg=function(){At.appendChild(da),Xh=!Ti&&da.offsetHeight||ht.innerHeight,At.removeChild(da)},dg=function(e){return Do(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xr=function(e,t){if(hn&&!e&&!ec){ni(Ke,"scrollEnd",Rg);return}Fg(),Ci=Ke.isRefreshing=!0,nt.forEach(function(n){return Di(n)&&++n.cacheID&&(n.rec=n())});var i=Er("refreshInit");yg&&Ke.sort(),t||Kh(),nt.forEach(function(n){Di(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),st.slice(0).forEach(function(n){return n.refresh()}),ec=!1,st.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-a),n.refresh()}}),kh=1,dg(!0),st.forEach(function(n){var r=kn(n.scroller,n._dir),a=n.vars.end==="max"||n._endClamp&&n.end>r,o=n._startClamp&&n.start>=r;(a||o)&&n.setPositions(o?r-1:n.start,a?Math.max(o?r:n.start+1,r):n.end,!0)}),dg(!1),kh=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),nt.forEach(function(n){Di(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Lg(Wh,1),Ql.pause(),br++,Ci=2,rs(2),st.forEach(function(n){return Di(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Ci=Ke.isRefreshing=!1,Er("refresh")},Hh=0,Kl=1,Co,rs=function(e){if(e===2||!Ci&&!ec){Ke.isUpdating=!0,Co&&Co.update(0);var t=st.length,i=gi(),n=i-Ih>=50,r=t&&st[0].scroll();if(Kl=Hh>r?-1:1,Ci||(Hh=r),n&&(hn&&!nc&&i-hn>200&&(hn=0,Er("scrollEnd")),vo=Ih,Ih=i),Kl<0){for(Ai=t;Ai-- >0;)st[Ai]&&st[Ai].update(0,n);Kl=1}else for(Ai=0;Ai<t;Ai++)st[Ai]&&st[Ai].update(0,n);Ke.isUpdating=!1}Po=0},Gh=[Cg,Dg,qh,Yh,cn+Ao,cn+Mo,cn+To,cn+Eo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Jl=Gh.concat([yr,wr,"boxSizing","max"+pa,"max"+$h,"position",cn,qt,qt+To,qt+Mo,qt+Ao,qt+Eo]),ty=function(e,t,i){fa(i);var n=e._gsap;if(n.spacerIsNative)fa(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Nh=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=Gh.length,a=t.style,o=e.style,l;r--;)l=Gh[r],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[qh]=o[Yh]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[yr]=tc(e,pi)+Jt,a[wr]=tc(e,Yt)+Jt,a[qt]=o[cn]=o[Dg]=o[Cg]="0",fa(n),o[yr]=o["max"+pa]=i[yr],o[wr]=o["max"+$h]=i[wr],o[qt]=i[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},iy=/([A-Z])/g,fa=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;n<i;n+=2)a=e[n+1],r=e[n],a?t[r]=a:t[r]&&t.removeProperty(r.replace(iy,"-$1").toLowerCase())}},Xl=function(e){for(var t=Jl.length,i=e.style,n=[],r=0;r<t;r++)n.push(Jl[r],i[Jl[r]]);return n.t=e,n},ny=function(e,t,i){for(var n=[],r=e.length,a=i?8:0,o;a<r;a+=2)o=e[a],n.push(o,o in t?t[o]:e[a+1]);return n.t=e.t,n},jl={left:0,top:0},fg=function(e,t,i,n,r,a,o,l,c,u,h,f,d,m){Di(e)&&(e=e(l)),Ji(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?$l("0"+e.substr(3),i):0));var p=d?d.time():0,g,_,x;if(d&&d.seek(0),isNaN(e)||(e=+e),wo(e))d&&(e=Te.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Zl(o,i,n,!0);else{Di(t)&&(t=t(l));var v=(e||"0").split(" "),w,E,M,S;x=Ei(t,l)||At,w=ss(x)||{},(!w||!w.left&&!w.top)&&un(x).display==="none"&&(S=x.style.display,x.style.display="block",w=ss(x),S?x.style.display=S:x.style.removeProperty("display")),E=$l(v[0],w[n.d]),M=$l(v[1]||"0",i),e=w[n.p]-c[n.p]-u+E+r-M,o&&Zl(o,M,n,i-M<20||o._isStart&&M>20),i-=i-M}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var A=e+i,D=a._isStart;g="scroll"+n.d2,Zl(a,A,n,D&&A>20||!D&&(h?Math.max(At[g],En[g]):a.parentNode[g])<=A+1),h&&(c=ss(o),h&&(a.style[n.op.p]=c[n.op.p]-n.op.m-a._offset+Jt))}return d&&x&&(g=ss(x),d.seek(f),_=ss(x),d._caScrollDist=g[n.p]-_[n.p],e=e/d._caScrollDist*f),d&&d.seek(p),d?e:Math.round(e)},sy=/(webkit|moz|length|cssText|inset)/i,pg=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,a,o;if(t===At){e._stOrig=r.cssText,o=un(e);for(a in o)!+a&&!sy.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=i,r.left=n}else r.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},Ng=function(e,t,i){var n=t,r=n;return function(a){var o=Math.round(e());return o!==n&&o!==r&&Math.abs(o-n)>3&&Math.abs(o-r)>3&&(a=o,i&&i()),r=n,n=a,a}},Yl=function(e,t,i){var n={};n[t.p]="+="+i,Te.set(e,n)},mg=function(e,t){var i=is(e,t),n="_scroll"+t.p2,r=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,m={};c=c||i();var p=Ng(i,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[n]=o,l.inherit=!1,l.modifiers=m,m[n]=function(){return p(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,a.tween&&rs()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Te.to(e,l),f};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ni(e,"wheel",i.wheelHandler),Ke.isTouch&&ni(e,"touchmove",i.wheelHandler),r},Ke=function(){function s(t,i){ua||s.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zh(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xo){this.update=this.refresh=this.kill=zn;return}i=lg(Ji(i)||wo(i)||i.nodeType?{trigger:i}:i,Gl);var r=i,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,m=r.pinSpacing,p=r.invalidateOnRefresh,g=r.anticipatePin,_=r.onScrubComplete,x=r.onSnapComplete,v=r.once,w=r.snap,E=r.pinReparent,M=r.pinSpacer,S=r.containerAnimation,A=r.fastScrollEnd,D=r.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?pi:Yt,b=!h&&h!==0,R=Ei(i.scroller||ht),C=Te.core.getCache(R),I=Sr(R),U=("pinType"in i?i.pinType:ns(R,"pinType")||I&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=b&&i.toggleActions.split(" "),L="markers"in i?i.markers:Gl.markers,k=I?0:parseFloat(un(R)["border"+y.p2+pa])||0,N=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(N)},he=$x(R,I,y),Fe=Zx(R,I),j=0,V=0,H=0,X=is(R,y),oe,de,Pe,Ae,Re,z,Me,Ce,Ue,Y,Ve,De,O,T,Z,ne,re,te,be,le,fe,$e,ce,Se,Ee,Ge,we,Je,Ye,lt,G,ae,ee,se,pe,me,je,xt,Rt;if(N._startClamp=N._endClamp=!1,N._dir=y,g*=45,N.scroller=R,N.scroll=S?S.time.bind(S):X,Ae=X(),N.vars=i,n=n||i.animation,"refreshPriority"in i&&(yg=1,i.refreshPriority===-9999&&(Co=N)),C.tweenScroll=C.tweenScroll||{top:mg(R,Yt),left:mg(R,pi)},N.tweenTo=oe=C.tweenScroll[y.p],N.scrubDuration=function(ve){ee=wo(ve)&&ve,ee?ae?ae.duration(ve):ae=Te.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return _&&_(N)}}):(ae&&ae.progress(1).kill(),ae=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(h),lt=0,l||(l=n.vars.id)),w&&((!vr(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in At.style&&Te.set(I?[At,En]:R,{scrollBehavior:"auto"}),nt.forEach(function(ve){return Di(ve)&&ve.target===(I?Bt.scrollingElement||En:R)&&(ve.smooth=!1)}),Pe=Di(w.snapTo)?w.snapTo:w.snapTo==="labels"?Jx(n):w.snapTo==="labelsDirectional"?jx(n):w.directional!==!1?function(ve,We){return Zh(w.snapTo)(ve,gi()-V<500?0:We.direction)}:Te.utils.snap(w.snapTo),se=w.duration||{min:.1,max:2},se=vr(se)?So(se.min,se.max):So(se,se),pe=Te.delayedCall(w.delay||ee/2||.1,function(){var ve=X(),We=gi()-V<500,Be=oe.tween;if((We||Math.abs(N.getVelocity())<10)&&!Be&&!nc&&j!==ve){var qe=(ve-z)/T,Ht=n&&!b?n.totalProgress():qe,et=We?0:(Ht-G)/(gi()-vo)*1e3||0,It=Te.utils.clamp(-qe,1-qe,la(et/2)*et/.185),Gt=qe+(w.inertia===!1?0:It),Mt,yt,gt=w,Xi=gt.onStart,Et=gt.onInterrupt,P=gt.onComplete;if(Mt=Pe(Gt,N),wo(Mt)||(Mt=Gt),yt=Math.round(z+Mt*T),ve<=Me&&ve>=z&&yt!==ve){if(Be&&!Be._initted&&Be.data<=la(yt-ve))return;w.inertia===!1&&(It=Mt-qe),oe(yt,{duration:se(la(Math.max(la(Gt-Ht),la(Mt-Ht))*.185/et/.05||0)),ease:w.ease||"power3",data:la(yt-ve),onInterrupt:function(){return pe.restart(!0)&&Et&&Et(N)},onComplete:function(){N.update(),j=X(),n&&(ae?ae.resetTo("totalProgress",Mt,n._tTime/n._tDur):n.progress(Mt)),lt=G=n&&!b?n.totalProgress():N.progress,x&&x(N),P&&P(N)}},ve,It*T,yt-ve-It*T),Xi&&Xi(N,oe.tween)}}else N.isActive&&j!==ve&&pe.restart(!0)}).pause()),l&&(Vh[l]=N),f=N.trigger=Ei(f||d!==!0&&d),Rt=f&&f._gsap&&f._gsap.stRevert,Rt&&(Rt=Rt(N)),d=d===!0?f:Ei(d),Ji(o)&&(o={targets:f,className:o}),d&&(m===!1||m===cn||(m=!m&&d.parentNode&&d.parentNode.style&&un(d.parentNode).display==="flex"?!1:qt),N.pin=d,de=Te.core.getCache(d),de.spacer?Z=de.pinState:(M&&(M=Ei(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),de.spacerIsNative=!!M,M&&(de.spacerState=Xl(M))),de.spacer=te=M||Bt.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),de.pinState=Z=Xl(d)),i.force3D!==!1&&Te.set(d,{force3D:!0}),N.spacer=te=de.spacer,Ye=un(d),Se=Ye[m+y.os2],le=Te.getProperty(d),fe=Te.quickSetter(d,y.a,Jt),Nh(d,te,Ye),re=Xl(d)),L){De=vr(L)?lg(L,cg):cg,Y=Wl("scroller-start",l,R,y,De,0),Ve=Wl("scroller-end",l,R,y,De,0,Y),be=Y["offset"+y.op.d2];var rt=Ei(ns(R,"content")||R);Ce=this.markerStart=Wl("start",l,rt,y,De,be,0,S),Ue=this.markerEnd=Wl("end",l,rt,y,De,be,0,S),S&&(xt=Te.quickSetter([Ce,Ue],y.a,Jt)),!U&&!(Mn.length&&ns(R,"fixedMarkers")===!0)&&(Kx(I?At:R),Te.set([Y,Ve],{force3D:!0}),Ge=Te.quickSetter(Y,y.a,Jt),Je=Te.quickSetter(Ve,y.a,Jt))}if(S){var Oe=S.vars.onUpdate,Ie=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){N.update(0,0,1),Oe&&Oe.apply(S,Ie||[])})}if(N.previous=function(){return st[st.indexOf(N)-1]},N.next=function(){return st[st.indexOf(N)+1]},N.revert=function(ve,We){if(!We)return N.kill(!0);var Be=ve!==!1||!N.enabled,qe=mi;Be!==N.isReverted&&(Be&&(me=Math.max(X(),N.scroll.rec||0),H=N.progress,je=n&&n.progress()),Ce&&[Ce,Ue,Y,Ve].forEach(function(Ht){return Ht.style.display=Be?"none":"block"}),Be&&(mi=N,N.update(Be)),d&&(!E||!N.isActive)&&(Be?ty(d,te,Z):Nh(d,te,un(d),Ee)),Be||N.update(Be),mi=qe,N.isReverted=Be)},N.refresh=function(ve,We,Be,qe){if(!((mi||!N.enabled)&&!We)){if(d&&ve&&hn){ni(s,"scrollEnd",Rg);return}!Ci&&ie&&ie(N),mi=N,oe.tween&&!Be&&(oe.tween.kill(),oe.tween=0),ae&&ae.pause(),p&&n&&n.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Ht=he(),et=Fe(),It=S?S.duration():kn(R,y),Gt=T<=.01,Mt=0,yt=qe||0,gt=vr(Be)?Be.end:i.end,Xi=i.endTrigger||f,Et=vr(Be)?Be.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),P=N.pinnedContainer=i.pinnedContainer&&Ei(i.pinnedContainer,N),q=f&&Math.max(0,st.indexOf(N))||0,K=q,J,W,ue,ye,_e,ge,Ne,Xe,Le,ct,at,_t,ei;for(L&&vr(Be)&&(_t=Te.getProperty(Y,y.p),ei=Te.getProperty(Ve,y.p));K--;)ge=st[K],ge.end||ge.refresh(0,1)||(mi=N),Ne=ge.pin,Ne&&(Ne===f||Ne===d||Ne===P)&&!ge.isReverted&&(ct||(ct=[]),ct.unshift(ge),ge.revert(!0,!0)),ge!==st[K]&&(q--,K--);for(Di(Et)&&(Et=Et(N)),Et=sg(Et,"start",N),z=fg(Et,f,Ht,y,X(),Ce,Y,N,et,k,U,It,S,N._startClamp&&"_startClamp")||(d?-.001:0),Di(gt)&&(gt=gt(N)),Ji(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Ji(Et)?Et.split(" ")[0]:"")+gt:(Mt=$l(gt.substr(2),Ht),gt=Ji(Et)?Et:(S?Te.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,z):z)+Mt,Xi=f)),gt=sg(gt,"end",N),Me=Math.max(z,fg(gt||(Xi?"100% 0":It),Xi,Ht,y,X()+Mt,Ue,Ve,N,et,k,U,It,S,N._endClamp&&"_endClamp"))||-.001,Mt=0,K=q;K--;)ge=st[K],Ne=ge.pin,Ne&&ge.start-ge._pinPush<=z&&!S&&ge.end>0&&(J=ge.end-(N._startClamp?Math.max(0,ge.start):ge.start),(Ne===f&&ge.start-ge._pinPush<z||Ne===P)&&isNaN(Et)&&(Mt+=J*(1-ge.progress)),Ne===d&&(yt+=J));if(z+=Mt,Me+=Mt,N._startClamp&&(N._startClamp+=Mt),N._endClamp&&!Ci&&(N._endClamp=Me||-.001,Me=Math.min(Me,kn(R,y))),T=Me-z||(z-=.01)&&.001,Gt&&(H=Te.utils.clamp(0,1,Te.utils.normalize(z,Me,me))),N._pinPush=yt,Ce&&Mt&&(J={},J[y.a]="+="+Mt,P&&(J[y.p]="-="+X()),Te.set([Ce,Ue],J)),d&&!(kh&&N.end>=kn(R,y)))J=un(d),ye=y===Yt,ue=X(),$e=parseFloat(le(y.a))+yt,!It&&Me>1&&(at=(I?Bt.scrollingElement||En:R).style,at={style:at,value:at["overflow"+y.a.toUpperCase()]},I&&un(At)["overflow"+y.a.toUpperCase()]!=="scroll"&&(at.style["overflow"+y.a.toUpperCase()]="scroll")),Nh(d,te,J),re=Xl(d),W=ss(d,!0),Xe=U&&is(R,ye?pi:Yt)(),m?(Ee=[m+y.os2,T+yt+Jt],Ee.t=te,K=m===qt?tc(d,y)+T+yt:0,K&&(Ee.push(y.d,K+Jt),te.style.flexBasis!=="auto"&&(te.style.flexBasis=K+Jt)),fa(Ee),P&&st.forEach(function(ot){ot.pin===P&&ot.vars.pinSpacing!==!1&&(ot._subPinOffset=!0)}),U&&X(me)):(K=tc(d,y),K&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=K+Jt)),U&&(_e={top:W.top+(ye?ue-z:Xe)+Jt,left:W.left+(ye?Xe:ue-z)+Jt,boxSizing:"border-box",position:"fixed"},_e[yr]=_e["max"+pa]=Math.ceil(W.width)+Jt,_e[wr]=_e["max"+$h]=Math.ceil(W.height)+Jt,_e[cn]=_e[cn+To]=_e[cn+Mo]=_e[cn+Ao]=_e[cn+Eo]="0",_e[qt]=J[qt],_e[qt+To]=J[qt+To],_e[qt+Mo]=J[qt+Mo],_e[qt+Ao]=J[qt+Ao],_e[qt+Eo]=J[qt+Eo],ne=ny(Z,_e,E),Ci&&X(0)),n?(Le=n._initted,Ph(1),n.render(n.duration(),!0,!0),ce=le(y.a)-$e+T+yt,we=Math.abs(T-ce)>1,U&&we&&ne.splice(ne.length-2,2),n.render(0,!0,!0),Le||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ph(0)):ce=T,at&&(at.value?at.style["overflow"+y.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+y.a));else if(f&&X()&&!S)for(W=f.parentNode;W&&W!==At;)W._pinOffset&&(z-=W._pinOffset,Me-=W._pinOffset),W=W.parentNode;ct&&ct.forEach(function(ot){return ot.revert(!1,!0)}),N.start=z,N.end=Me,Ae=Re=Ci?me:X(),!S&&!Ci&&(Ae<me&&X(me),N.scroll.rec=0),N.revert(!1,!0),V=gi(),pe&&(j=-1,pe.restart(!0)),mi=0,n&&b&&(n._initted||je)&&n.progress()!==je&&n.progress(je||0,!0).render(n.time(),!0,!0),(Gt||H!==N.progress||S||p)&&(n&&!b&&n.totalProgress(S&&z<-.001&&!H?Te.utils.normalize(z,Me,0):H,!0),N.progress=Gt||(Ae-z)/T===H?0:H),d&&m&&(te._pinOffset=Math.round(N.progress*ce)),ae&&ae.invalidate(),isNaN(_t)||(_t-=Te.getProperty(Y,y.p),ei-=Te.getProperty(Ve,y.p),Yl(Y,y,_t),Yl(Ce,y,_t-(qe||0)),Yl(Ve,y,ei),Yl(Ue,y,ei-(qe||0))),Gt&&!Ci&&N.update(),u&&!Ci&&!O&&(O=!0,u(N),O=!1)}},N.getVelocity=function(){return(X()-Re)/(gi()-vo)*1e3||0},N.endAnimation=function(){_o(N.callbackAnimation),n&&(ae?ae.progress(1):n.paused()?b||_o(n,N.direction<0,1):_o(n,n.reversed()))},N.labelToScroll=function(ve){return n&&n.labels&&(z||N.refresh()||z)+n.labels[ve]/n.duration()*T||0},N.getTrailing=function(ve){var We=st.indexOf(N),Be=N.direction>0?st.slice(0,We).reverse():st.slice(We+1);return(Ji(ve)?Be.filter(function(qe){return qe.vars.preventOverlaps===ve}):Be).filter(function(qe){return N.direction>0?qe.end<=z:qe.start>=Me})},N.update=function(ve,We,Be){if(!(S&&!Be&&!ve)){var qe=Ci===!0?me:N.scroll(),Ht=ve?0:(qe-z)/T,et=Ht<0?0:Ht>1?1:Ht||0,It=N.progress,Gt,Mt,yt,gt,Xi,Et,P,q;if(We&&(Re=Ae,Ae=S?X():qe,w&&(G=lt,lt=n&&!b?n.totalProgress():et)),g&&d&&!mi&&!zl&&hn&&(!et&&z<qe+(qe-Re)/(gi()-vo)*g?et=1e-4:et===1&&Me>qe+(qe-Re)/(gi()-vo)*g&&(et=.9999)),et!==It&&N.enabled){if(Gt=N.isActive=!!et&&et<1,Mt=!!It&&It<1,Et=Gt!==Mt,Xi=Et||!!et!=!!It,N.direction=et>It?1:-1,N.progress=et,Xi&&!mi&&(yt=et&&!It?0:et===1?1:It===1?2:3,b&&(gt=!Et&&F[yt+1]!=="none"&&F[yt+1]||F[yt],q=n&&(gt==="complete"||gt==="reset"||gt in n))),D&&(Et||q)&&(q||h||!n)&&(Di(D)?D(N):N.getTrailing(D).forEach(function(ue){return ue.endAnimation()})),b||(ae&&!mi&&!zl?(ae._dp._time-ae._start!==ae._time&&ae.render(ae._dp._time-ae._start),ae.resetTo?ae.resetTo("totalProgress",et,n._tTime/n._tDur):(ae.vars.totalProgress=et,ae.invalidate().restart())):n&&n.totalProgress(et,!!(mi&&(V||ve)))),d){if(ve&&m&&(te.style[m+y.os2]=Se),!U)fe(yo($e+ce*et));else if(Xi){if(P=!ve&&et>It&&Me+1>qe&&qe+1>=kn(R,y),E)if(!ve&&(Gt||P)){var K=ss(d,!0),J=qe-z;pg(d,At,K.top+(y===Yt?J:0)+Jt,K.left+(y===Yt?0:J)+Jt)}else pg(d,te);fa(Gt||P?ne:re),we&&et<1&&Gt||fe($e+(et===1&&!P?ce:0))}}w&&!oe.tween&&!mi&&!zl&&pe.restart(!0),o&&(Et||v&&et&&(et<1||!Rh))&&Do(o.targets).forEach(function(ue){return ue.classList[Gt||v?"add":"remove"](o.className)}),a&&!b&&!ve&&a(N),Xi&&!mi?(b&&(q&&(gt==="complete"?n.pause().totalProgress(1):gt==="reset"?n.restart(!0).pause():gt==="restart"?n.restart(!0):n[gt]()),a&&a(N)),(Et||!Rh)&&(c&&Et&&Lh(N,c),B[yt]&&Lh(N,B[yt]),v&&(et===1?N.kill(!1,1):B[yt]=0),Et||(yt=et===1?1:3,B[yt]&&Lh(N,B[yt]))),A&&!Gt&&Math.abs(N.getVelocity())>(wo(A)?A:2500)&&(_o(N.callbackAnimation),ae?ae.progress(1):_o(n,gt==="reverse"?1:!et,1))):b&&a&&!mi&&a(N)}if(Je){var W=S?qe/S.duration()*(S._caScrollDist||0):qe;Ge(W+(Y._isFlipped?1:0)),Je(W)}xt&&xt(-qe/S.duration()*(S._caScrollDist||0))}},N.enable=function(ve,We){N.enabled||(N.enabled=!0,ni(R,"resize",bo),I||ni(R,"scroll",ca),ie&&ni(s,"refreshInit",ie),ve!==!1&&(N.progress=H=0,Ae=Re=j=X()),We!==!1&&N.refresh())},N.getTween=function(ve){return ve&&oe?oe.tween:ae},N.setPositions=function(ve,We,Be,qe){if(S){var Ht=S.scrollTrigger,et=S.duration(),It=Ht.end-Ht.start;ve=Ht.start+It*ve/et,We=Ht.start+It*We/et}N.refresh(!1,!1,{start:rg(ve,Be&&!!N._startClamp),end:rg(We,Be&&!!N._endClamp)},qe),N.update()},N.adjustPinSpacing=function(ve){if(Ee&&ve){var We=Ee.indexOf(y.d)+1;Ee[We]=parseFloat(Ee[We])+ve+Jt,Ee[1]=parseFloat(Ee[1])+ve+Jt,fa(Ee)}},N.disable=function(ve,We){if(N.enabled&&(ve!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,We||ae&&ae.pause(),me=0,de&&(de.uncache=1),ie&&ii(s,"refreshInit",ie),pe&&(pe.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!I)){for(var Be=st.length;Be--;)if(st[Be].scroller===R&&st[Be]!==N)return;ii(R,"resize",bo),I||ii(R,"scroll",ca)}},N.kill=function(ve,We){N.disable(ve,We),ae&&!We&&ae.kill(),l&&delete Vh[l];var Be=st.indexOf(N);Be>=0&&st.splice(Be,1),Be===Ai&&Kl>0&&Ai--,Be=0,st.forEach(function(qe){return qe.scroller===N.scroller&&(Be=1)}),Be||Ci||(N.scroll.rec=0),n&&(n.scrollTrigger=null,ve&&n.revert({kill:!1}),We||n.kill()),Ce&&[Ce,Ue,Y,Ve].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Co===N&&(Co=0),d&&(de&&(de.uncache=1),Be=0,st.forEach(function(qe){return qe.pin===d&&Be++}),Be||(de.spacer=0)),i.onKill&&i.onKill(N)},st.push(N),N.enable(!1,!1),Rt&&Rt(N),n&&n.add&&!T){var dt=N.update;N.update=function(){N.update=dt,z||Me||N.refresh()},Te.delayedCall(.01,N.update),T=.01,z=Me=0}else N.refresh();d&&ey()},s.register=function(i){return ua||(Te=i||Eg(),Mg()&&window.document&&s.enable(),ua=xo),ua},s.defaults=function(i){if(i)for(var n in i)Gl[n]=i[n];return Gl},s.disable=function(i,n){xo=0,st.forEach(function(a){return a[n?"kill":"disable"](i)}),ii(ht,"wheel",ca),ii(Bt,"scroll",ca),clearInterval(Bl),ii(Bt,"touchcancel",zn),ii(At,"touchstart",zn),Vl(ii,Bt,"pointerdown,touchstart,mousedown",ag),Vl(ii,Bt,"pointerup,touchend,mouseup",og),Ql.kill(),kl(ii);for(var r=0;r<nt.length;r+=3)Hl(ii,nt[r],nt[r+1]),Hl(ii,nt[r],nt[r+2])},s.enable=function(){if(ht=window,Bt=document,En=Bt.documentElement,At=Bt.body,Te&&(Do=Te.utils.toArray,So=Te.utils.clamp,zh=Te.core.context||zn,Ph=Te.core.suppressOverwrites||zn,Wh=ht.history.scrollRestoration||"auto",Hh=ht.pageYOffset,Te.core.globals("ScrollTrigger",s),At)){xo=1,da=document.createElement("div"),da.style.height="100vh",da.style.position="absolute",Fg(),qx(),Vt.register(Te),s.isTouch=Vt.isTouch,Ns=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bh=Vt.isTouch===1,ni(ht,"wheel",ca),xg=[ht,Bt,En,At],Te.matchMedia?(s.matchMedia=function(l){var c=Te.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Te.addEventListener("matchMediaInit",function(){return Kh()}),Te.addEventListener("matchMediaRevert",function(){return Ig()}),Te.addEventListener("matchMedia",function(){xr(0,1),Er("matchMedia")}),Te.matchMedia("(orientation: portrait)",function(){return Fh(),Fh})):console.warn("Requires GSAP 3.11.0 or later"),Fh(),ni(Bt,"scroll",ca);var i=At.style,n=i.borderTopStyle,r=Te.core.Animation.prototype,a,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ss(At),Yt.m=Math.round(a.top+Yt.sc())||0,pi.m=Math.round(a.left+pi.sc())||0,n?i.borderTopStyle=n:i.removeProperty("border-top-style"),Bl=setInterval(ug,250),Te.delayedCall(.5,function(){return zl=0}),ni(Bt,"touchcancel",zn),ni(At,"touchstart",zn),Vl(ni,Bt,"pointerdown,touchstart,mousedown",ag),Vl(ni,Bt,"pointerup,touchend,mouseup",og),Uh=Te.utils.checkPrefix("transform"),Jl.push(Uh),ua=gi(),Ql=Te.delayedCall(.2,xr).pause(),ha=[Bt,"visibilitychange",function(){var l=ht.innerWidth,c=ht.innerHeight;Bt.hidden?(ig=l,ng=c):(ig!==l||ng!==c)&&bo()},Bt,"DOMContentLoaded",xr,ht,"load",xr,ht,"resize",bo],kl(ni),st.forEach(function(l){return l.enable(0,1)}),o=0;o<nt.length;o+=3)Hl(ii,nt[o],nt[o+1]),Hl(ii,nt[o],nt[o+2])}},s.config=function(i){"limitCallbacks"in i&&(Rh=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Bl)||(Bl=n)&&setInterval(ug,n),"ignoreMobileResize"in i&&(Bh=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(kl(ii)||kl(ni,i.autoRefreshEvents||"none"),wg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=Ei(i),a=nt.indexOf(r),o=Sr(r);~a&&nt.splice(a,o?6:2),n&&(o?Mn.unshift(ht,n,At,n,En,n):Mn.unshift(r,n))},s.clearMatchMedia=function(i){st.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var a=(Ji(i)?Ei(i):i).getBoundingClientRect(),o=a[r?yr:wr]*n||0;return r?a.right-o>0&&a.left+o<ht.innerWidth:a.bottom-o>0&&a.top+o<ht.innerHeight},s.positionInViewport=function(i,n,r){Ji(i)&&(i=Ei(i));var a=i.getBoundingClientRect(),o=a[r?yr:wr],l=n==null?o/2:n in ic?ic[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return r?(a.left+l)/ht.innerWidth:(a.top+l)/ht.innerHeight},s.killAll=function(i){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Mr.killAll||[];Mr={},n.forEach(function(r){return r()})}},s}();Ke.version="3.12.5";Ke.saveStyles=function(s){return s?Do(s).forEach(function(e){if(e&&e.style){var t=Ki.indexOf(e);t>=0&&Ki.splice(t,5),Ki.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),zh())}}):Ki};Ke.revert=function(s,e){return Kh(!s,e)};Ke.create=function(s,e){return new Ke(s,e)};Ke.refresh=function(s){return s?bo():(ua||Ke.register())&&xr(!0)};Ke.update=function(s){return++nt.cache&&rs(s===!0?2:0)};Ke.clearScrollMemory=Lg;Ke.maxScroll=function(s,e){return kn(s,e?pi:Yt)};Ke.getScrollFunc=function(s,e){return is(Ei(s),e?pi:Yt)};Ke.getById=function(s){return Vh[s]};Ke.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!hn};Ke.snapDirectional=Zh;Ke.addEventListener=function(s,e){var t=Mr[s]||(Mr[s]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(s,e){var t=Mr[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ke.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Te.delayedCall(n,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),r<=h.length&&d.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Di(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Di(r)&&(r=r(),ni(Ke,"refresh",function(){return r=e.batchMax()})),Do(s).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(Ke.create(c))}),t};var gg=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Oh=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===En&&s(At,t)},ql={auto:1,scroll:1},ry=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Te.core.getCache(r),o=gi(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ql[(l=un(r)).overflowY]||ql[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==i&&!Sr(r)&&(ql[(l=un(r)).overflowY]||ql[l.overflowX]),a._isScrollT=o}(a._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Og=function(e,t,i,n){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&ry,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&ni(Bt,Vt.eventTypes[0],vg,!1,!0)},onDisable:function(){return ii(Bt,Vt.eventTypes[0],vg,!0)}})},ay=/(input|label|select|textarea)/i,_g,vg=function(e){var t=ay.test(e.target.tagName);(t||_g)&&(e._gsapAllow=!0,_g=t)},oy=function(e){vr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=Ei(e.target)||En,u=Te.core.globals().ScrollSmoother,h=u&&u.get(),f=Ns&&(e.content&&Ei(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=is(c,Yt),m=is(c,pi),p=1,g=(Vt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,_=0,x=Di(n)?function(){return n(o)}:function(){return n||2.8},v,w,E=Og(c,e.type,!0,r),M=function(){return w=!1},S=zn,A=zn,D=function(){l=kn(c,Yt),A=So(Ns?1:0,l),i&&(S=So(0,kn(c,pi))),v=br},y=function(){f._gsap.y=yo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},b=function(){if(w){requestAnimationFrame(M);var L=yo(o.deltaY/2),k=A(d.v-L);if(f&&k!==d.v+d.offset){d.offset=k-d.v;var N=yo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=nt.cache,rs()}return!0}d.offset&&y(),w=!0},R,C,I,U,B=function(){D(),R.isActive()&&R.vars.scrollY>l&&(d()>l?R.progress(1)&&d(l):R.resetTo("scrollY",l))};return f&&Te.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return Ns&&F.type==="touchmove"&&b(F)||p>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){w=!1;var F=p;p=yo((ht.visualViewport&&ht.visualViewport.scale||1)/g),R.pause(),F!==p&&Oh(c,p>1.01?!0:i?!1:"x"),C=m(),I=d(),D(),v=br},e.onRelease=e.onGestureStart=function(F,L){if(d.offset&&y(),!L)U.restart(!0);else{nt.cache++;var k=x(),N,ie;i&&(N=m(),ie=N+k*.05*-F.velocityX/.227,k*=gg(m,N,ie,kn(c,pi)),R.vars.scrollX=S(ie)),N=d(),ie=N+k*.05*-F.velocityY/.227,k*=gg(d,N,ie,kn(c,Yt)),R.vars.scrollY=A(ie),R.invalidate().duration(k).play(.01),(Ns&&R.vars.scrollY>=l||N>=l-1)&&Te.to({},{onUpdate:B,duration:k})}a&&a(F)},e.onWheel=function(){R._ts&&R.pause(),gi()-_>1e3&&(v=0,_=gi())},e.onChange=function(F,L,k,N,ie){if(br!==v&&D(),L&&i&&m(S(N[2]===L?C+(F.startX-F.x):m()+L-N[1])),k){d.offset&&y();var he=ie[2]===k,Fe=he?I+F.startY-F.y:d()+k-ie[1],j=A(Fe);he&&Fe!==j&&(I+=j-Fe),d(j)}(k||L)&&rs()},e.onEnable=function(){Oh(c,i?!1:"x"),Ke.addEventListener("refresh",B),ni(ht,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),E.enable()},e.onDisable=function(){Oh(c,!0),ii(ht,"resize",B),Ke.removeEventListener("refresh",B),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Vt(e),o.iOS=Ns,Ns&&!d()&&d(1),Ns&&Te.ticker.add(zn),U=o._dc,R=Te.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ng(d,d(),function(){return R.pause()})},onUpdate:rs,onComplete:U.vars.onComplete}),o};Ke.sort=function(s){return st.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(s){return new Vt(s)};Ke.normalizeScroll=function(s){if(typeof s>"u")return Ti;if(s===!0&&Ti)return Ti.enable();if(s===!1){Ti&&Ti.kill(),Ti=s;return}var e=s instanceof Vt?s:oy(s);return Ti&&Ti.target===e.target&&Ti.kill(),Sr(e.target)&&(Ti=e),e};Ke.core={_getVelocityProp:Ul,_inputObserver:Og,_scrollers:nt,_proxies:Mn,bridge:{ss:function(){hn||Er("scrollStart"),hn=gi()},ref:function(){return mi}}};Eg()&&Te.registerPlugin(Ke);var Ug=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Jh(s){var e=s.nodeType,t="";if(e===1||e===9||e===11){if(typeof s.textContent=="string")return s.textContent;for(s=s.firstChild;s;s=s.nextSibling)t+=Jh(s)}else if(e===3||e===4)return s.nodeValue;return t}var ma,Qh,kg,Ro,Vg,sc,ly=/(?:\r|\n|\t\t)/g,cy=/(?:\s\s+)/g,uy="\xA0",Hg=function(e){ma=document,Qh=window,Ro=Ro||e||Qh.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),Ro&&(sc=Ro.utils.toArray,Vg=Ro.core.context||function(){},kg=1)},hy=1,Gg=function(e){return Qh.getComputedStyle(e)},ed=function(e){return e.position==="absolute"||e.absolute===!0},dy=function(e,t){for(var i=t.length,n;--i>-1;)if(n=t[i],e.substr(0,n.length)===n)return n.length},fy=" style='position:relative;display:inline-block;'",Bg=function(e,t){e===void 0&&(e="");var i=~e.indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+fy+(e?" class='"+e+(i?n++:"")+"'>":">")}},Wg=function s(e,t,i){var n=e.nodeType;if(n===1||n===9||n===11)for(e=e.firstChild;e;e=e.nextSibling)s(e,t,i);else(n===3||n===4)&&(e.nodeValue=e.nodeValue.split(t).join(i))},jh=function(e,t){for(var i=t.length;--i>-1;)e.push(t[i])},zg=function(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling,n)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}},py=function s(e){var t=sc(e.childNodes),i=t.length,n,r;for(n=0;n<i;n++)r=t[n],r._isSplit?s(r):n&&r.previousSibling&&r.previousSibling.nodeType===3?(r.previousSibling.nodeValue+=r.nodeType===3?r.nodeValue:r.firstChild.nodeValue,e.removeChild(r)):r.nodeType!==3&&(e.insertBefore(r.firstChild,r),e.removeChild(r))},Vn=function(e,t){return parseFloat(t[e])||0},my=function(e,t,i,n,r,a,o){var l=Gg(e),c=Vn("paddingLeft",l),u=-999,h=Vn("borderBottomWidth",l)+Vn("borderTopWidth",l),f=Vn("borderLeftWidth",l)+Vn("borderRightWidth",l),d=Vn("paddingTop",l)+Vn("paddingBottom",l),m=Vn("paddingLeft",l)+Vn("paddingRight",l),p=Vn("fontSize",l)*(t.lineThreshold||.2),g=l.textAlign,_=[],x=[],v=[],w=t.wordDelimiter||" ",E=t.tag?t.tag:t.span?"span":"div",M=t.type||t.split||"chars,words,lines",S=r&&~M.indexOf("lines")?[]:null,A=~M.indexOf("words"),D=~M.indexOf("chars"),y=ed(t),b=t.linesClass,R=~(b||"").indexOf("++"),C=[],I=l.display==="flex",U=e.style.display,B,F,L,k,N,ie,he,Fe,j,V,H,X;for(R&&(b=b.split("++").join("")),I&&(e.style.display="block"),F=e.getElementsByTagName("*"),L=F.length,N=[],B=0;B<L;B++)N[B]=F[B];if(S||y)for(B=0;B<L;B++)k=N[B],ie=k.parentNode===e,(ie||y||D&&!A)&&(X=k.offsetTop,S&&ie&&Math.abs(X-u)>p&&(k.nodeName!=="BR"||B===0)&&(he=[],S.push(he),u=X),y&&(k._x=k.offsetLeft,k._y=X,k._w=k.offsetWidth,k._h=k.offsetHeight),S&&((k._isSplit&&ie||!D&&ie||A&&ie||!A&&k.parentNode.parentNode===e&&!k.parentNode._isSplit)&&(he.push(k),k._x-=c,zg(k,e,w)&&(k._wordEnd=!0)),k.nodeName==="BR"&&(k.nextSibling&&k.nextSibling.nodeName==="BR"||B===0)&&S.push([])));for(B=0;B<L;B++){if(k=N[B],ie=k.parentNode===e,k.nodeName==="BR"){S||y?(k.parentNode&&k.parentNode.removeChild(k),N.splice(B--,1),L--):A||e.appendChild(k);continue}if(y&&(j=k.style,!A&&!ie&&(k._x+=k.parentNode._x,k._y+=k.parentNode._y),j.left=k._x+"px",j.top=k._y+"px",j.position="absolute",j.display="block",j.width=k._w+1+"px",j.height=k._h+"px"),!A&&D)if(k._isSplit)for(k._next=F=k.nextSibling,k.parentNode.appendChild(k);F&&F.nodeType===3&&F.textContent===" ";)k._next=F.nextSibling,k.parentNode.appendChild(F),F=F.nextSibling;else k.parentNode._isSplit?(k._parent=k.parentNode,!k.previousSibling&&k.firstChild&&(k.firstChild._isFirst=!0),k.nextSibling&&k.nextSibling.textContent===" "&&!k.nextSibling.nextSibling&&C.push(k.nextSibling),k._next=k.nextSibling&&k.nextSibling._isFirst?null:k.nextSibling,k.parentNode.removeChild(k),N.splice(B--,1),L--):ie||(X=!k.nextSibling&&zg(k.parentNode,e,w),k.parentNode._parent&&k.parentNode._parent.appendChild(k),X&&k.parentNode.appendChild(ma.createTextNode(" ")),E==="span"&&(k.style.display="inline"),_.push(k));else k.parentNode._isSplit&&!k._isSplit&&k.innerHTML!==""?x.push(k):D&&!k._isSplit&&(E==="span"&&(k.style.display="inline"),_.push(k))}for(B=C.length;--B>-1;)C[B].parentNode.removeChild(C[B]);if(S){for(y&&(V=ma.createElement(E),e.appendChild(V),H=V.offsetWidth+"px",X=V.offsetParent===e?0:e.offsetLeft,e.removeChild(V)),j=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(Fe=w===" "&&(!y||!A&&!D),B=0;B<S.length;B++){for(he=S[B],V=ma.createElement(E),V.style.cssText="display:block;text-align:"+g+";position:"+(y?"absolute;":"relative;"),b&&(V.className=b+(R?B+1:"")),v.push(V),L=he.length,F=0;F<L;F++)he[F].nodeName!=="BR"&&(k=he[F],V.appendChild(k),Fe&&k._wordEnd&&V.appendChild(ma.createTextNode(" ")),y&&(F===0&&(V.style.top=k._y+"px",V.style.left=c+X+"px"),k.style.top="0px",X&&(k.style.left=k._x-X+"px")));L===0?V.innerHTML="&nbsp;":!A&&!D&&(py(V),Wg(V,"\xA0"," ")),y&&(V.style.width=H,V.style.height=k._h+"px"),e.appendChild(V)}e.style.cssText=j}y&&(o>e.clientHeight&&(e.style.height=o-d+"px",e.clientHeight<o&&(e.style.height=o+h+"px")),a>e.clientWidth&&(e.style.width=a-m+"px",e.clientWidth<a&&(e.style.width=a+f+"px"))),I&&(U?e.style.display=U:e.style.removeProperty("display")),jh(i,_),A&&jh(n,x),jh(r,v)},gy=function(e,t,i,n){var r=t.tag?t.tag:t.span?"span":"div",a=t.type||t.split||"chars,words,lines",o=~a.indexOf("chars"),l=ed(t),c=t.wordDelimiter||" ",u=function(y){return y===c||y===uy&&c===" "},h=c!==" "?"":l?"&#173; ":" ",f="</"+r+">",d=1,m=t.specialChars?typeof t.specialChars=="function"?t.specialChars:dy:null,p,g,_,x,v,w,E,M,S=ma.createElement("div"),A=e.parentNode;for(A.insertBefore(S,e),S.textContent=e.nodeValue,A.removeChild(e),e=S,p=Jh(e),E=p.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(p=p.replace(cy," ").replace(ly,"")),E&&(p=p.split("<").join("{{LT}}")),v=p.length,g=(p.charAt(0)===" "?h:"")+i(),_=0;_<v;_++)if(w=p.charAt(_),m&&(M=m(p.substr(_),t.specialChars)))w=p.substr(_,M||1),g+=o&&w!==" "?n()+w+"</"+r+">":w,_+=M-1;else if(u(w)&&!u(p.charAt(_-1))&&_){for(g+=d?f:"",d=0;u(p.charAt(_+1));)g+=h,_++;_===v-1?g+=h:p.charAt(_+1)!==")"&&(g+=h+i(),d=1)}else w==="{"&&p.substr(_,6)==="{{LT}}"?(g+=o?n()+"{{LT}}</"+r+">":"{{LT}}",_+=5):w.charCodeAt(0)>=55296&&w.charCodeAt(0)<=56319||p.charCodeAt(_+1)>=65024&&p.charCodeAt(_+1)<=65039?(x=((p.substr(_,12).split(Ug)||[])[1]||"").length||2,g+=o&&w!==" "?n()+p.substr(_,x)+"</"+r+">":p.substr(_,x),_+=x-1):g+=o&&w!==" "?n()+w+"</"+r+">":w;e.outerHTML=g+(d?f:""),E&&Wg(A,"{{LT}}","<")},_y=function s(e,t,i,n){var r=sc(e.childNodes),a=r.length,o=ed(t),l,c;if(e.nodeType!==3||a>1){for(t.absolute=!1,l=0;l<a;l++)c=r[l],c._next=c._isFirst=c._parent=c._wordEnd=null,(c.nodeType!==3||/\S+/.test(c.nodeValue))&&(o&&c.nodeType!==3&&Gg(c).display==="inline"&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,s(c,t,i,n));t.absolute=o,e._isSplit=!0;return}gy(e,t,i,n)},Io=function(){function s(t,i){kg||Hg(),this.elements=sc(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=i||{},Vg(this),hy&&this.split(i)}var e=s.prototype;return e.split=function(i){this.isSplit&&this.revert(),this.vars=i=i||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var n=this.elements.length,r=i.tag?i.tag:i.span?"span":"div",a=Bg(i.wordsClass,r),o=Bg(i.charsClass,r),l,c,u;--n>-1;)u=this.elements[n],this._originals[n]={html:u.innerHTML,style:u.getAttribute("style")},l=u.clientHeight,c=u.clientWidth,_y(u,i,a,o),my(u,i,this.chars,this.words,this.lines,c,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var i=this._originals;if(!i)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(n,r){n.innerHTML=i[r].html,n.setAttribute("style",i[r].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},s.create=function(i,n){return new s(i,n)},s}();Io.version="3.12.5";Io.register=Hg;var dn=di.registerPlugin(lh)||di,bA=dn.core.Tween;dn.registerPlugin(Ke,Io);window.addEventListener("DOMContentLoaded",s=>{let e=document.querySelectorAll("[text-split]");e.length>0&&e.forEach(a=>{let o=new Io(a,{types:"words, chars",tagName:"span"});a._splitTextInstance=o});function t(a,o){Ke.create({trigger:a,start:"top bottom",onLeaveBack:()=>{o.progress(0),o.pause()}}),Ke.create({trigger:a,start:"top 66%",onEnter:()=>{o.play()}})}document.querySelectorAll("[letters-fade-in-random]").forEach(a=>{let o=a._splitTextInstance;if(o){let l=dn.timeline({paused:!0});l.from(o.chars,{opacity:0,duration:.03,ease:"power1.out",stagger:{amount:.4,from:"random"}}),t(a,l)}}),document.querySelectorAll("[words-slide-from-right]").forEach(a=>{let o=a._splitTextInstance;if(o){let l=dn.timeline({paused:!0});l.from(o.words,{opacity:0,x:"1em",duration:.6,ease:"power2.out",stagger:{amount:.2}}),t(a,l)}}),document.querySelectorAll("[letter-in]").forEach(a=>{let o=a._splitTextInstance;if(o){let l=dn.timeline({paused:!0});l.from(o.chars,{opacity:.3,duration:.6,ease:"power2.out",stagger:{amount:.2}}),t(a,l)}}),document.querySelectorAll("[opacity-change]").forEach(a=>{let o=dn.timeline({paused:!0}),l=a.children;l.length>0&&(o.fromTo(l,{opacity:0},{opacity:1,duration:1,ease:"power1.out",stagger:{amount:.75}}),t(a,o))});let i=document.querySelector(".line_animated"),n=document.getElementById("services");function r(){let a=n.getBoundingClientRect(),o=window.innerHeight;a.top>=0&&a.bottom<=o?i.style.width="100%":(a.top>o||a.bottom<0)&&(i.style.width="0%")}window.addEventListener("scroll",r)});dn.set("[text-split]",{opacity:1});document.querySelectorAll(".nav-wrapper_mobile").forEach(function(s){let e=s.querySelector(".nav_menu-button"),t=s.querySelectorAll(".nav_menu-line"),i=s.querySelector(".nav_menu-contain"),n=s.querySelector(".nav_menu-button-base"),r=s.querySelector(".nav_menu-wrapper"),a=s.querySelector(".nav_menu-base"),o=s.querySelectorAll(".nav_menu-link, .nav_menu-title"),l=s.querySelectorAll(".nav_icon-wrapper_menu, .menu_line"),c=.6;function u(d){let m=ra.getState(n);d?i.appendChild(n):e.appendChild(n),ra.from(m,{duration:c})}let h=dn.timeline({paused:!0});h.set(r,{display:"flex"}),h.set(i,{clearProps:"all"}),h.from(a,{opacity:0,borderRadius:11,duration:c,ease:"none",onStart:()=>{u(!0)}}),h.to(t[0],{y:4,duration:c},"<"),h.to(t[1],{y:-4,duration:c},"<"),h.from(o,{opacity:0,borderRadius:11,yPercent:50,duration:.2,stagger:{amount:.2},onReverseComplete:()=>{u(!1)}}),h.from(l,{opacity:0,yPercent:50,duration:.2,stagger:{amount:.2},onReverseComplete:()=>{u(!1)}});function f(d){h.isActive()||(d?(h.play(),e.classList.add("nav-open"),e.classList.add("stop-scroll")):(h.reverse(),e.classList.remove("nav-open"),e.classList.remove("stop-scroll")))}e.addEventListener("click",function(){e.classList.contains("nav-open")?f(!1):f(!0)}),a.addEventListener("mouseenter",function(){f(!1)}),a.addEventListener("click",function(){f(!1)}),document.addEventListener("keydown",function(d){d.key==="Escape"&&f(!1)})});function Xg(){console.log("Text animation logic initialized")}var vy="1.1.14";function qg(s,e,t){return Math.max(s,Math.min(e,t))}function xy(s,e,t){return(1-t)*s+t*e}function yy(s,e,t,i){return xy(s,e,1-Math.exp(-t*i))}function wy(s,e){return(s%e+e)%e}var by=class{constructor(){He(this,"isRunning",!1);He(this,"value",0);He(this,"from",0);He(this,"to",0);He(this,"currentTime",0);He(this,"lerp");He(this,"duration");He(this,"easing");He(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=qg(0,this.currentTime/this.duration,1);e=t>=1;let i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=yy(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:a}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=a}};function Sy(s,e){let t;return function(...i){let n=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(n,i)},e)}}var My=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){He(this,"width",0);He(this,"height",0);He(this,"scrollHeight",0);He(this,"scrollWidth",0);He(this,"debouncedResize");He(this,"wrapperResizeObserver");He(this,"contentResizeObserver");He(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});He(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});He(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Sy(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$g=class{constructor(){He(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let i=0,n=t.length;i<n;i++)t[i]?.(...e)}on(s,e){return this.events[s]?.push(e)||(this.events[s]=[e]),()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Yg=100/6,Os={passive:!1},Ey=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){He(this,"touchStart",{x:0,y:0});He(this,"lastDelta",{x:0,y:0});He(this,"window",{width:0,height:0});He(this,"emitter",new $g);He(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});He(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});He(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});He(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s,n=i===1?Yg:i===2?this.window.width:1,r=i===1?Yg:i===2?this.window.height:1;e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});He(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Os),this.element.addEventListener("touchstart",this.onTouchStart,Os),this.element.addEventListener("touchmove",this.onTouchMove,Os),this.element.addEventListener("touchend",this.onTouchEnd,Os)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Os),this.element.removeEventListener("touchstart",this.onTouchStart,Os),this.element.removeEventListener("touchmove",this.onTouchMove,Os),this.element.removeEventListener("touchend",this.onTouchEnd,Os)}},Zg=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=w=>Math.min(1,1.001-Math.pow(2,-10*w)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:p=!0,prevent:g,virtualScroll:_,overscroll:x=!0,__experimental__naiveDimensions:v=!1}={}){He(this,"_isScrolling",!1);He(this,"_isStopped",!1);He(this,"_isLocked",!1);He(this,"_preventNextNativeScrollEvent",!1);He(this,"_resetVelocityTimeout",null);He(this,"isTouching");He(this,"time",0);He(this,"userData",{});He(this,"lastVelocity",0);He(this,"velocity",0);He(this,"direction",0);He(this,"options");He(this,"targetScroll");He(this,"animatedScroll");He(this,"animate",new by);He(this,"emitter",new $g);He(this,"dimensions");He(this,"virtualScroll");He(this,"onPointerDown",s=>{s.button===1&&this.reset()});He(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(this.isTouching=i.type==="touchstart"||i.type==="touchmove",this.options.syncTouch&&n&&i.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}let o=e===0&&t===0,l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let u=this.options.prevent;if(c.find(g=>g instanceof HTMLElement&&(typeof u=="function"&&u?.(g)||g.hasAttribute?.("data-lenis-prevent")||n&&g.hasAttribute?.("data-lenis-prevent-touch")||r&&g.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.preventDefault();let d=n&&this.options.syncTouch,p=n&&i.type==="touchend"&&Math.abs(f)>5;p&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});He(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});window.lenisVersion=vy,(!s||s===document.documentElement||s===document.body)&&(s=window),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:m,autoResize:p,prevent:g,virtualScroll:_,overscroll:x,__experimental__naiveDimensions:v},this.dimensions=new My(s,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Ey(t,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}setScroll(s){this.isHorizontal?this.rootElement.scrollLeft=s:this.rootElement.scrollTop=s}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(s){let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001)}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof s=="string"&&["top","left","start"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let f;if(typeof s=="string"?f=document.querySelector(s):s instanceof HTMLElement&&s?.nodeType&&(f=s),f){if(this.options.wrapper!==window){let m=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?m.left:m.top}let d=f.getBoundingClientRect();s=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):s=qg(0,s,this.limit),s===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}u||(this.targetScroll=s),this.animate.fromTo(this.animatedScroll,s,{duration:n,easing:r,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?wy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var td=new Zg({lerp:.05,wheelMultiplier:1});function Kg(s){td.raf(s),requestAnimationFrame(Kg)}requestAnimationFrame(Kg);$("[data-lenis-toggle]").on("click",function(){$(this).toggleClass("stop-scroll"),$(this).hasClass("stop-scroll")?td.stop():td.start()});function Jg(){console.log("Lenis Scroll initialized")}dn.registerPlugin(Ke);document.addEventListener("DOMContentLoaded",function(){let s=document.querySelector('[scroll-section="true"]');if(!s){console.error("Error: Element with scroll-section attribute not found on the page.");return}Ke.create({trigger:s,start:"bottom bottom",onEnter:()=>{e()}});function e(){let t=document.querySelector(".next-project-link");if(!t){console.error("Error: Next project link not found!");return}window.location.href=t.href}});document.addEventListener("DOMContentLoaded",function(){let s=document.querySelector('[scroll-bar="true"]'),e=document.querySelector('[scroll-section="true"]');s&&e?dn.fromTo(s,{width:"0%"},{width:"100%",ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom bottom",scrub:!0}}):console.error("Error: Element with scroll-bar or scroll-section attribute not found!")});function jg(){console.log("Next Page initialized")}function Qg(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function id(s,e){s===void 0&&(s={}),e===void 0&&(e={});let t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]>"u"?s[i]=e[i]:Qg(e[i])&&Qg(s[i])&&Object.keys(e[i]).length>0&&id(s[i],e[i])})}var e0={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function bt(){let s=typeof document<"u"?document:{};return id(s,e0),s}var Ty={document:e0,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function ft(){let s=typeof window<"u"?window:{};return id(s,Ty),s}function as(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function t0(s){let e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Tn(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function Pi(){return Date.now()}function Ay(s){let e=ft(),t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Lo(s,e){e===void 0&&(e="x");let t=ft(),i,n,r,a=Ay(s);return t.WebKitCSSMatrix?(n=a.transform||a.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=r.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?n=r.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function ga(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function Cy(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function zi(){let s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){let i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!Cy(i)){let n=Object.keys(Object(i)).filter(r=>e.indexOf(r)<0);for(let r=0,a=n.length;r<a;r+=1){let o=n[r],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(ga(s[o])&&ga(i[o])?i[o].__swiper__?s[o]=i[o]:zi(s[o],i[o]):!ga(s[o])&&ga(i[o])?(s[o]={},i[o].__swiper__?s[o]=i[o]:zi(s[o],i[o])):s[o]=i[o])}}}return s}function Tr(s,e,t){s.style.setProperty(e,t)}function nd(s){let{swiper:e,targetPosition:t,side:i}=s,n=ft(),r=-e.translate,a=null,o,l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);let c=t>r?"next":"prev",u=(f,d)=>c==="next"&&f>=d||c==="prev"&&f<=d,h=()=>{o=new Date().getTime(),a===null&&(a=o);let f=Math.max(Math.min((o-a)/l,1),0),d=.5-Math.cos(f*Math.PI)/2,m=r+d*(t-r);if(u(m,t)&&(m=t),e.wrapperEl.scrollTo({[i]:m}),u(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(h)};h()}function ki(s){return s.querySelector(".swiper-slide-transform")||s.shadowRoot&&s.shadowRoot.querySelector(".swiper-slide-transform")||s}function Ft(s,e){e===void 0&&(e="");let t=ft(),i=[...s.children];return t.HTMLSlotElement&&s instanceof HTMLSlotElement&&i.push(...s.assignedElements()),e?i.filter(n=>n.matches(e)):i}function Dy(s,e){let t=[e];for(;t.length>0;){let i=t.shift();if(s===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function i0(s,e){let t=ft(),i=e.contains(s);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(s),i||(i=Dy(s,e))),i}function Fo(s){try{console.warn(s);return}catch{}}function $t(s,e){e===void 0&&(e=[]);let t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:as(e)),t}function Ar(s){let e=ft(),t=bt(),i=s.getBoundingClientRect(),n=t.body,r=s.clientTop||n.clientTop||0,a=s.clientLeft||n.clientLeft||0,o=s===e?e.scrollY:s.scrollTop,l=s===e?e.scrollX:s.scrollLeft;return{top:i.top+o-r,left:i.left+l-a}}function n0(s,e){let t=[];for(;s.previousElementSibling;){let i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function s0(s,e){let t=[];for(;s.nextElementSibling;){let i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function os(s,e){return ft().getComputedStyle(s,null).getPropertyValue(e)}function Us(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function An(s,e){let t=[],i=s.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Bs(s,e){function t(i){i.target===s&&(e.call(s,i),s.removeEventListener("transitionend",t))}e&&s.addEventListener("transitionend",t)}function No(s,e,t){let i=ft();return t?s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):s.offsetWidth}function Qe(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}function zs(s){return e=>Math.abs(e)>0&&s.browser&&s.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}var sd;function Py(){let s=ft(),e=bt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function u0(){return sd||(sd=Py()),sd}var rd;function Ry(s){let{userAgent:e}=s===void 0?{}:s,t=u0(),i=ft(),n=i.navigator.platform,r=e||i.navigator.userAgent,a={ios:!1,android:!1},o=i.screen.width,l=i.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/),u=r.match(/(iPad).*OS\s([\d_]+)/),h=r.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d=n==="Win32",m=n==="MacIntel",p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&t.touch&&p.indexOf(`${o}x${l}`)>=0&&(u=r.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),c&&!d&&(a.os="android",a.android=!0),(u||f||h)&&(a.os="ios",a.ios=!0),a}function h0(s){return s===void 0&&(s={}),rd||(rd=Ry(s)),rd}var ad;function Iy(){let s=ft(),e=h0(),t=!1;function i(){let o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){let o=String(s.navigator.userAgent);if(o.includes("Version/")){let[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}let n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=i(),a=r||n&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:n}}function d0(){return ad||(ad=Iy()),ad}function Ly(s){let{swiper:e,on:t,emit:i}=s,n=ft(),r=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(h=>{a=n.requestAnimationFrame(()=>{let{width:f,height:d}=e,m=f,p=d;h.forEach(g=>{let{contentBoxSize:_,contentRect:x,target:v}=g;v&&v!==e.el||(m=x?x.width:(_[0]||_).inlineSize,p=x?x.height:(_[0]||_).blockSize)}),(m!==f||p!==d)&&o()})}),r.observe(e.el))},c=()=>{a&&n.cancelAnimationFrame(a),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},u=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",u)})}function Fy(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r=[],a=ft(),o=function(u,h){h===void 0&&(h={});let f=a.MutationObserver||a.WebkitMutationObserver,d=new f(m=>{if(e.__preventObserver__)return;if(m.length===1){n("observerUpdate",m[0]);return}let p=function(){n("observerUpdate",m[0])};a.requestAnimationFrame?a.requestAnimationFrame(p):a.setTimeout(p,0)});d.observe(u,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:e.isElement||(typeof h.childList>"u"?!0:h).childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),r.push(d)},l=()=>{if(e.params.observer){if(e.params.observeParents){let u=An(e.hostEl);for(let h=0;h<u.length;h+=1)o(u[h])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(u=>{u.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var Ny={on(s,e,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;let n=t?"unshift":"push";return s.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][n](e)}),i},once(s,e,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function n(){i.off(s,n),n.__emitterProxy&&delete n.__emitterProxy;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];e.apply(i,a)}return n.__emitterProxy=e,i.on(s,n,t)},onAny(s,e){let t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;let i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){let t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,r)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(){let s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,i;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),i=s):(e=r[0].events,t=r[0].data,i=r[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),s}};function Oy(){let s=this,e,t,i=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(os(i,"padding-left")||0,10)-parseInt(os(i,"padding-right")||0,10),t=t-parseInt(os(i,"padding-top")||0,10)-parseInt(os(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function Uy(){let s=this;function e(y,b){return parseFloat(y.getPropertyValue(s.getDirectionLabel(b))||0)}let t=s.params,{wrapperEl:i,slidesEl:n,size:r,rtlTranslate:a,wrongRTL:o}=s,l=s.virtual&&t.virtual.enabled,c=l?s.virtual.slides.length:s.slides.length,u=Ft(n,`.${s.params.slideClass}, swiper-slide`),h=l?s.virtual.slides.length:u.length,f=[],d=[],m=[],p=t.slidesOffsetBefore;typeof p=="function"&&(p=t.slidesOffsetBefore.call(s));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(s));let _=s.snapGrid.length,x=s.slidesGrid.length,v=t.spaceBetween,w=-p,E=0,M=0;if(typeof r>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*r:typeof v=="string"&&(v=parseFloat(v)),s.virtualSize=-v,u.forEach(y=>{a?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Tr(i,"--swiper-centered-offset-before",""),Tr(i,"--swiper-centered-offset-after",""));let S=t.grid&&t.grid.rows>1&&s.grid;S?s.grid.initSlides(u):s.grid&&s.grid.unsetSlides();let A,D=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<h;y+=1){A=0;let b;if(u[y]&&(b=u[y]),S&&s.grid.updateSlide(y,b,u),!(u[y]&&os(b,"display")==="none")){if(t.slidesPerView==="auto"){D&&(u[y].style[s.getDirectionLabel("width")]="");let R=getComputedStyle(b),C=b.style.transform,I=b.style.webkitTransform;if(C&&(b.style.transform="none"),I&&(b.style.webkitTransform="none"),t.roundLengths)A=s.isHorizontal()?No(b,"width",!0):No(b,"height",!0);else{let U=e(R,"width"),B=e(R,"padding-left"),F=e(R,"padding-right"),L=e(R,"margin-left"),k=e(R,"margin-right"),N=R.getPropertyValue("box-sizing");if(N&&N==="border-box")A=U+L+k;else{let{clientWidth:ie,offsetWidth:he}=b;A=U+B+F+L+k+(he-ie)}}C&&(b.style.transform=C),I&&(b.style.webkitTransform=I),t.roundLengths&&(A=Math.floor(A))}else A=(r-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(A=Math.floor(A)),u[y]&&(u[y].style[s.getDirectionLabel("width")]=`${A}px`);u[y]&&(u[y].swiperSlideSize=A),m.push(A),t.centeredSlides?(w=w+A/2+E/2+v,E===0&&y!==0&&(w=w-r/2-v),y===0&&(w=w-r/2-v),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),M%t.slidesPerGroup===0&&f.push(w),d.push(w)):(t.roundLengths&&(w=Math.floor(w)),(M-Math.min(s.params.slidesPerGroupSkip,M))%s.params.slidesPerGroup===0&&f.push(w),d.push(w),w=w+A+v),s.virtualSize+=A+v,E=A,M+=1}}if(s.virtualSize=Math.max(s.virtualSize,r)+g,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+v}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+v}px`),S&&s.grid.updateWrapperSize(A,f),!t.centeredSlides){let y=[];for(let b=0;b<f.length;b+=1){let R=f[b];t.roundLengths&&(R=Math.floor(R)),f[b]<=s.virtualSize-r&&y.push(R)}f=y,Math.floor(s.virtualSize-r)-Math.floor(f[f.length-1])>1&&f.push(s.virtualSize-r)}if(l&&t.loop){let y=m[0]+v;if(t.slidesPerGroup>1){let b=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),R=y*t.slidesPerGroup;for(let C=0;C<b;C+=1)f.push(f[f.length-1]+R)}for(let b=0;b<s.virtual.slidesBefore+s.virtual.slidesAfter;b+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+y),d.push(d[d.length-1]+y),s.virtualSize+=y}if(f.length===0&&(f=[0]),v!==0){let y=s.isHorizontal()&&a?"marginLeft":s.getDirectionLabel("marginRight");u.filter((b,R)=>!t.cssMode||t.loop?!0:R!==u.length-1).forEach(b=>{b.style[y]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let y=0;m.forEach(R=>{y+=R+(v||0)}),y-=v;let b=y>r?y-r:0;f=f.map(R=>R<=0?-p:R>b?b+g:R)}if(t.centerInsufficientSlides){let y=0;m.forEach(R=>{y+=R+(v||0)}),y-=v;let b=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(y+b<r){let R=(r-y-b)/2;f.forEach((C,I)=>{f[I]=C-R}),d.forEach((C,I)=>{d[I]=C+R})}}if(Object.assign(s,{slides:u,snapGrid:f,slidesGrid:d,slidesSizesGrid:m}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Tr(i,"--swiper-centered-offset-before",`${-f[0]}px`),Tr(i,"--swiper-centered-offset-after",`${s.size/2-m[m.length-1]/2}px`);let y=-s.snapGrid[0],b=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(R=>R+y),s.slidesGrid=s.slidesGrid.map(R=>R+b)}if(h!==c&&s.emit("slidesLengthChange"),f.length!==_&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),d.length!==x&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){let y=`${t.containerModifierClass}backface-hidden`,b=s.el.classList.contains(y);h<=t.maxBackfaceHiddenSlides?b||s.el.classList.add(y):b&&s.el.classList.remove(y)}}function By(s){let e=this,t=[],i=e.virtual&&e.params.virtual.enabled,n=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);let a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){let o=e.activeIndex+r;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){let o=t[r].offsetHeight;n=o>n?o:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function zy(){let s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}var r0=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function ky(s){s===void 0&&(s=this&&this.translate||0);let e=this,t=e.params,{slides:i,rtlTranslate:n,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-s;n&&(a=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){let c=i[l],u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);let h=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),f=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),d=-(a-u),m=d+e.slidesSizesGrid[l],p=d>=0&&d<=e.size-e.slidesSizesGrid[l],g=d>=0&&d<e.size-1||m>1&&m<=e.size||d<=0&&m>=e.size;g&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),r0(c,g,t.slideVisibleClass),r0(c,p,t.slideFullyVisibleClass),c.progress=n?-h:h,c.originalProgress=n?-f:f}}function Vy(s){let e=this;if(typeof s>"u"){let u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}let t=e.params,i=e.maxTranslate()-e.minTranslate(),{progress:n,isBeginning:r,isEnd:a,progressLoop:o}=e,l=r,c=a;if(i===0)n=0,r=!0,a=!0;else{n=(s-e.minTranslate())/i;let u=Math.abs(s-e.minTranslate())<1,h=Math.abs(s-e.maxTranslate())<1;r=u||n<=0,a=h||n>=1,u&&(n=0),h&&(n=1)}if(t.loop){let u=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],d=e.slidesGrid[h],m=e.slidesGrid[e.slidesGrid.length-1],p=Math.abs(s);p>=f?o=(p-f)/m:o=(p+m-d)/m,o>1&&(o-=1)}Object.assign(e,{progress:n,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",n)}var od=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function Hy(){let s=this,{slides:e,params:t,slidesEl:i,activeIndex:n}=s,r=s.virtual&&t.virtual.enabled,a=s.grid&&t.grid&&t.grid.rows>1,o=h=>Ft(i,`.${t.slideClass}${h}, swiper-slide${h}`)[0],l,c,u;if(r)if(t.loop){let h=n-s.virtual.slidesBefore;h<0&&(h=s.virtual.slides.length+h),h>=s.virtual.slides.length&&(h-=s.virtual.slides.length),l=o(`[data-swiper-slide-index="${h}"]`)}else l=o(`[data-swiper-slide-index="${n}"]`);else a?(l=e.find(h=>h.column===n),u=e.find(h=>h.column===n+1),c=e.find(h=>h.column===n-1)):l=e[n];l&&(a||(u=s0(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=n0(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(h=>{od(h,h===l,t.slideActiveClass),od(h,h===u,t.slideNextClass),od(h,h===c,t.slidePrevClass)}),s.emitSlidesClasses()}var rc=(s,e)=>{if(!s||s.destroyed||!s.params)return;let t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let n=i.querySelector(`.${s.params.lazyPreloaderClass}`);!n&&s.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},ld=(s,e)=>{if(!s.slides[e])return;let t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},hd=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext,t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);let i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),n=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){let a=n,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+i+c)),s.slides.forEach((l,c)=>{o.includes(l.column)&&ld(s,c)});return}let r=n+i-1;if(s.params.rewind||s.params.loop)for(let a=n-e;a<=r+e;a+=1){let o=(a%t+t)%t;(o<n||o>r)&&ld(s,o)}else for(let a=Math.max(n-e,0);a<=Math.min(r+e,t-1);a+=1)a!==n&&(a>r||a<n)&&ld(s,a)};function Gy(s){let{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate,n;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?n=r:i>=e[r]&&i<e[r+1]&&(n=r+1):i>=e[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Wy(s){let e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:n,activeIndex:r,realIndex:a,snapIndex:o}=e,l=s,c,u=d=>{let m=d-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=Gy(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{let d=Math.min(n.slidesPerGroupSkip,l);c=d+Math.floor((l-d)/n.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}let h=e.grid&&n.grid&&n.grid.rows>1,f;if(e.virtual&&n.virtual.enabled&&n.loop)f=u(l);else if(h){let d=e.slides.find(p=>p.column===l),m=parseInt(d.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(d),0)),f=Math.floor(m/n.grid.rows)}else if(e.slides[l]){let d=e.slides[l].getAttribute("data-swiper-slide-index");d?f=parseInt(d,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:f,previousIndex:r,activeIndex:l}),e.initialized&&hd(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function Xy(s,e){let t=this,i=t.params,n=s.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(n=o)});let r=!1,a;if(n){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===n){r=!0,a=o;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Yy={updateSize:Oy,updateSlides:Uy,updateAutoHeight:By,updateSlidesOffset:zy,updateSlidesProgress:ky,updateProgress:Vy,updateSlidesClasses:Hy,updateActiveIndex:Wy,updateClickedSlide:Xy};function qy(s){s===void 0&&(s=this.isHorizontal()?"x":"y");let e=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=e;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let a=Lo(r,s);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function $y(s,e){let t=this,{rtlTranslate:i,params:n,wrapperEl:r,progress:a}=t,o=0,l=0,c=0;t.isHorizontal()?o=i?-s:s:l=s,n.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:n.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u,h=t.maxTranslate()-t.minTranslate();h===0?u=0:u=(s-t.minTranslate())/h,u!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function Zy(){return-this.snapGrid[0]}function Ky(){return-this.snapGrid[this.snapGrid.length-1]}function Jy(s,e,t,i,n){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);let r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;let l=r.minTranslate(),c=r.maxTranslate(),u;if(i&&s>l?u=l:i&&s<c?u=c:u=s,r.updateProgress(u),a.cssMode){let h=r.isHorizontal();if(e===0)o[h?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return nd({swiper:r,targetPosition:-u,side:h?"left":"top"}),!0;o.scrollTo({[h?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(f){!r||r.destroyed||f.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var jy={getTranslate:qy,setTranslate:$y,minTranslate:Zy,maxTranslate:Ky,translateTo:Jy};function Qy(s,e){let t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function f0(s){let{swiper:e,runCallbacks:t,direction:i,step:n}=s,{activeIndex:r,previousIndex:a}=e,o=i;if(o||(r>a?o="next":r<a?o="prev":o="reset"),e.emit(`transition${n}`),t&&r!==a){if(o==="reset"){e.emit(`slideResetTransition${n}`);return}e.emit(`slideChangeTransition${n}`),o==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}function ew(s,e){s===void 0&&(s=!0);let t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),f0({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function tw(s,e){s===void 0&&(s=!0);let t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),f0({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var iw={setTransition:Qy,transitionStart:ew,transitionEnd:tw};function nw(s,e,t,i,n){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));let r=this,a=s;a<0&&(a=0);let{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:f,wrapperEl:d,enabled:m}=r;if(!m&&!i&&!n||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);let p=Math.min(r.params.slidesPerGroupSkip,a),g=p+Math.floor((a-p)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1);let _=-l[g];if(o.normalizeSlideIndex)for(let S=0;S<c.length;S+=1){let A=-Math.floor(_*100),D=Math.floor(c[S]*100),y=Math.floor(c[S+1]*100);typeof c[S+1]<"u"?A>=D&&A<y-(y-D)/2?a=S:A>=D&&A<y&&(a=S+1):A>=D&&(a=S)}if(r.initialized&&a!==h&&(!r.allowSlideNext&&(f?_>r.translate&&_>r.minTranslate():_<r.translate&&_<r.minTranslate())||!r.allowSlidePrev&&_>r.translate&&_>r.maxTranslate()&&(h||0)!==a))return!1;a!==(u||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(_);let x;a>h?x="next":a<h?x="prev":x="reset";let v=r.virtual&&r.params.virtual.enabled;if(!(v&&n)&&(f&&-_===r.translate||!f&&_===r.translate))return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(_),x!=="reset"&&(r.transitionStart(t,x),r.transitionEnd(t,x)),!1;if(o.cssMode){let S=r.isHorizontal(),A=f?_:-_;if(e===0)v&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),v&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{d[S?"scrollLeft":"scrollTop"]=A})):d[S?"scrollLeft":"scrollTop"]=A,v&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return nd({swiper:r,targetPosition:A,side:S?"left":"top"}),!0;d.scrollTo({[S?"left":"top"]:A,behavior:"smooth"})}return!0}let M=d0().isSafari;return v&&!n&&M&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(e),r.setTranslate(_),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,x),e===0?r.transitionEnd(t,x):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(A){!r||r.destroyed||A.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,x))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function sw(s,e,t,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));let n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.grid&&n.params.grid&&n.params.grid.rows>1,a=s;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)a=a+n.virtual.slidesBefore;else{let o;if(r){let f=a*n.params.grid.rows;o=n.slides.find(d=>d.getAttribute("data-swiper-slide-index")*1===f).column}else o=n.getSlideIndexByData(a);let l=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params,u=n.params.slidesPerView;u==="auto"?u=n.slidesPerViewDynamic():(u=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let h=l-o<u;if(c&&(h=h||o<Math.ceil(u/2)),i&&c&&n.params.slidesPerView!=="auto"&&!r&&(h=!1),h){let f=c?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?o+1:o-l+1,slideRealIndex:f==="next"?n.realIndex:void 0})}if(r){let f=a*n.params.grid.rows;a=n.slides.find(d=>d.getAttribute("data-swiper-slide-index")*1===f).column}else a=n.getSlideIndexByData(a)}return requestAnimationFrame(()=>{n.slideTo(a,e,t,i)}),n}function rw(s,e,t){e===void 0&&(e=!0);let i=this,{enabled:n,params:r,animating:a}=i;if(!n||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));let l=i.activeIndex<r.slidesPerGroupSkip?1:o,c=i.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,s,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+l,s,e,t)}function aw(s,e,t){e===void 0&&(e=!0);let i=this,{params:n,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let u=i.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}let h=o?i.translate:-i.translate;function f(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}let d=f(h),m=r.map(x=>f(x)),p=n.freeMode&&n.freeMode.enabled,g=r[m.indexOf(d)-1];if(typeof g>"u"&&(n.cssMode||p)){let x;r.forEach((v,w)=>{d>=v&&(x=w)}),typeof x<"u"&&(g=p?r[x]:r[x>0?x-1:x])}let _=0;if(typeof g<"u"&&(_=a.indexOf(g),_<0&&(_=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(_=_-i.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),n.rewind&&i.isBeginning){let x=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(x,s,e,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(_,s,e,t)}),!0;return i.slideTo(_,s,e,t)}function ow(s,e,t){e===void 0&&(e=!0);let i=this;if(!i.destroyed)return typeof s>"u"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function lw(s,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);let n=this;if(n.destroyed)return;typeof s>"u"&&(s=n.params.speed);let r=n.activeIndex,a=Math.min(n.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[o]){let c=n.snapGrid[o],u=n.snapGrid[o+1];l-c>(u-c)*i&&(r+=n.params.slidesPerGroup)}else{let c=n.snapGrid[o-1],u=n.snapGrid[o];l-c<=(u-c)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,s,e,t)}function cw(){let s=this;if(s.destroyed)return;let{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView,n=s.clickedIndex,r,a=s.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n<s.loopedSlides-i/2||n>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),n=s.getSlideIndex(Ft(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Tn(()=>{s.slideTo(n)})):s.slideTo(n):n>s.slides.length-i?(s.loopFix(),n=s.getSlideIndex(Ft(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Tn(()=>{s.slideTo(n)})):s.slideTo(n)}else s.slideTo(n)}var uw={slideTo:nw,slideToLoop:sw,slideNext:rw,slidePrev:aw,slideReset:ow,slideToClosest:lw,slideToClickedSlide:cw};function hw(s){let e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;let n=()=>{Ft(i,`.${t.slideClass}, swiper-slide`).forEach((h,f)=>{h.setAttribute("data-swiper-slide-index",f)})},r=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(r?t.grid.rows:1),o=e.slides.length%a!==0,l=r&&e.slides.length%t.grid.rows!==0,c=u=>{for(let h=0;h<u;h+=1){let f=e.isElement?$t("swiper-slide",[t.slideBlankClass]):$t("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(f)}};if(o){if(t.loopAddBlankSlides){let u=a-e.slides.length%a;c(u),e.recalcSlides(),e.updateSlides()}else Fo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(l){if(t.loopAddBlankSlides){let u=t.grid.rows-e.slides.length%t.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else Fo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();e.loopFix({slideRealIndex:s,direction:t.centeredSlides?void 0:"next"})}function dw(s){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:n,activeSlideIndex:r,byController:a,byMousewheel:o}=s===void 0?{}:s,l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");let{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:f,params:d}=l,{centeredSlides:m}=d;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&d.virtual.enabled){t&&(!d.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):d.centeredSlides&&l.snapIndex<d.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,l.emit("loopFix");return}let p=d.slidesPerView;p==="auto"?p=l.slidesPerViewDynamic():(p=Math.ceil(parseFloat(d.slidesPerView,10)),m&&p%2===0&&(p=p+1));let g=d.slidesPerGroupAuto?p:d.slidesPerGroup,_=g;_%g!==0&&(_+=g-_%g),_+=d.loopAdditionalSlides,l.loopedSlides=_;let x=l.grid&&d.grid&&d.grid.rows>1;c.length<p+_?Fo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&d.grid.fill==="row"&&Fo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let v=[],w=[],E=l.activeIndex;typeof r>"u"?r=l.getSlideIndex(c.find(C=>C.classList.contains(d.slideActiveClass))):E=r;let M=i==="next"||!i,S=i==="prev"||!i,A=0,D=0,y=x?Math.ceil(c.length/d.grid.rows):c.length,R=(x?c[r].column:r)+(m&&typeof n>"u"?-p/2+.5:0);if(R<_){A=Math.max(_-R,g);for(let C=0;C<_-R;C+=1){let I=C-Math.floor(C/y)*y;if(x){let U=y-I-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===U&&v.push(B)}else v.push(y-I-1)}}else if(R+p>y-_){D=Math.max(R-(y-_*2),g);for(let C=0;C<D;C+=1){let I=C-Math.floor(C/y)*y;x?c.forEach((U,B)=>{U.column===I&&w.push(B)}):w.push(I)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),S&&v.forEach(C=>{c[C].swiperLoopMoveDOM=!0,f.prepend(c[C]),c[C].swiperLoopMoveDOM=!1}),M&&w.forEach(C=>{c[C].swiperLoopMoveDOM=!0,f.append(c[C]),c[C].swiperLoopMoveDOM=!1}),l.recalcSlides(),d.slidesPerView==="auto"?l.updateSlides():x&&(v.length>0&&S||w.length>0&&M)&&l.slides.forEach((C,I)=>{l.grid.updateSlide(I,C,l.slides)}),d.watchSlidesProgress&&l.updateSlidesOffset(),t){if(v.length>0&&S){if(typeof e>"u"){let C=l.slidesGrid[E],U=l.slidesGrid[E+A]-C;o?l.setTranslate(l.translate-U):(l.slideTo(E+Math.ceil(A),0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(n){let C=x?v.length/d.grid.rows:v.length;l.slideTo(l.activeIndex+C,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&M)if(typeof e>"u"){let C=l.slidesGrid[E],U=l.slidesGrid[E-D]-C;o?l.setTranslate(l.translate-U):(l.slideTo(E-D,0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{let C=x?w.length/d.grid.rows:w.length;l.slideTo(l.activeIndex-C,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!a){let C={slideRealIndex:e,direction:i,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...C,slideTo:I.params.slidesPerView===d.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...C,slideTo:l.controller.control.params.slidesPerView===d.slidesPerView?t:!1})}l.emit("loopFix")}function fw(){let s=this,{params:e,slidesEl:t}=s;if(!e.loop||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();let i=[];s.slides.forEach(n=>{let r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[r]=n}),s.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var pw={loopCreate:hw,loopFix:dw,loopDestroy:fw};function mw(s){let e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function gw(){let s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var _w={setGrabCursor:mw,unsetGrabCursor:gw};function vw(s,e){e===void 0&&(e=this);function t(i){if(!i||i===bt()||i===ft())return null;i.assignedSlot&&(i=i.assignedSlot);let n=i.closest(s);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(e)}function a0(s,e,t){let i=ft(),{params:n}=s,r=n.edgeSwipeDetection,a=n.edgeSwipeThreshold;return r&&(t<=a||t>=i.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function xw(s){let e=this,t=bt(),i=s;i.originalEvent&&(i=i.originalEvent);let n=e.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){a0(e,i,i.targetTouches[0].pageX);return}let{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i.target;if(r.touchEventsTarget==="wrapper"&&!i0(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;let c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);let h=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,f=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(f?vw(h,l):l.closest(h))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;let d=a.currentX,m=a.currentY;if(!a0(e,i,d))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=d,a.startY=m,n.touchStartTime=Pi(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let p=!0;l.matches(n.focusableElements)&&(p=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&t.activeElement.blur();let g=p&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||g)&&!l.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function yw(s){let e=bt(),t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!n.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(M=>M.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}let u=c.pageX,h=c.pageY;if(l.preventedByNestedSwiper){r.startX=u,r.startY=h;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:u,startY:h,currentX:u,currentY:h}),i.touchStartTime=Pi());return}if(n.touchReleaseOnEdges&&!n.loop){if(t.isVertical()){if(h<r.startY&&t.translate<=t.maxTranslate()||h>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(u<r.startX&&t.translate<=t.maxTranslate()||u>r.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=h;let f=r.currentX-r.startX,d=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(f**2+d**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:f*f+d*d>=25&&(M=Math.atan2(Math.abs(d),Math.abs(f))*180/Math.PI,i.isScrolling=t.isHorizontal()?M>n.touchAngle:90-M>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let m=t.isHorizontal()?f:d,p=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),p=Math.abs(p)*(a?1:-1)),r.diff=m,m*=n.touchRatio,a&&(m=-m,p=-p);let g=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=p>0?"prev":"next";let _=t.params.loop&&!n.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(_&&x&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),n._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&g!==t.touchesDirection&&_&&x&&Math.abs(m)>=1){Object.assign(r,{startX:u,startY:h,currentX:u,currentY:h,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let w=!0,E=n.resistanceRatio;if(n.touchReleaseOnEdges&&(E=0),m>0?(_&&x&&!v&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(w=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**E))):m<0&&(_&&x&&!v&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(w=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**E))),w&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(m)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function ww(s){let e=this,t=e.touchEventsData,i=s;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].find(E=>E.identifier===t.touchId),!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;let{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let h=Pi(),f=h-t.touchStartTime;if(e.allowClick){let E=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(E&&E[0]||i.target,E),e.emit("tap click",i),f<300&&h-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Pi(),Tn(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let d;if(a.followFinger?d=l?e.translate:-e.translate:d=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:d});return}let m=d>=-e.maxTranslate()&&!e.params.loop,p=0,g=e.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){let M=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[E+M]<"u"?(m||d>=c[E]&&d<c[E+M])&&(p=E,g=c[E+M]-c[E]):(m||d>=c[E])&&(p=E,g=c[c.length-1]-c[c.length-2])}let _=null,x=null;a.rewind&&(e.isBeginning?x=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(_=0));let v=(d-c[p])/g,w=p<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?_:p+w):e.slideTo(p)),e.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?e.slideTo(p+w):x!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?e.slideTo(x):e.slideTo(p))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(p+w):e.slideTo(p):(e.swipeDirection==="next"&&e.slideTo(_!==null?_:p+w),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:p))}}function o0(){let s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();let{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=s,a=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();let o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!a?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=n,s.allowSlideNext=i,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function bw(s){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function Sw(){let s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let n,r=s.maxTranslate()-s.minTranslate();r===0?n=0:n=(s.translate-s.minTranslate())/r,n!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function Mw(s){let e=this;rc(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Ew(){let s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}var p0=(s,e)=>{let t=bt(),{params:i,el:n,wrapperEl:r,device:a}=s,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!n||typeof n=="string"||(t[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),n[l]("touchstart",s.onTouchStart,{passive:!1}),n[l]("pointerdown",s.onTouchStart,{passive:!1}),t[l]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",s.onTouchEnd,{passive:!0}),t[l]("pointerup",s.onTouchEnd,{passive:!0}),t[l]("pointercancel",s.onTouchEnd,{passive:!0}),t[l]("touchcancel",s.onTouchEnd,{passive:!0}),t[l]("pointerout",s.onTouchEnd,{passive:!0}),t[l]("pointerleave",s.onTouchEnd,{passive:!0}),t[l]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[l]("click",s.onClick,!0),i.cssMode&&r[l]("scroll",s.onScroll),i.updateOnWindowResize?s[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",o0,!0):s[c]("observerUpdate",o0,!0),n[l]("load",s.onLoad,{capture:!0}))};function Tw(){let s=this,{params:e}=s;s.onTouchStart=xw.bind(s),s.onTouchMove=yw.bind(s),s.onTouchEnd=ww.bind(s),s.onDocumentTouchStart=Ew.bind(s),e.cssMode&&(s.onScroll=Sw.bind(s)),s.onClick=bw.bind(s),s.onLoad=Mw.bind(s),p0(s,"on")}function Aw(){p0(this,"off")}var Cw={attachEvents:Tw,detachEvents:Aw},l0=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function Dw(){let s=this,{realIndex:e,initialized:t,params:i,el:n}=s,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;let a=bt(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?s.el:a.querySelector(i.breakpointsBase),c=s.getBreakpoint(r,o,l);if(!c||s.currentBreakpoint===c)return;let h=(c in r?r[c]:void 0)||s.originalParams,f=l0(s,i),d=l0(s,h),m=s.params.grabCursor,p=h.grabCursor,g=i.enabled;f&&!d?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!f&&d&&(n.classList.add(`${i.containerModifierClass}grid`),(h.grid.fill&&h.grid.fill==="column"||!h.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),m&&!p?s.unsetGrabCursor():!m&&p&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(M=>{if(typeof h[M]>"u")return;let S=i[M]&&i[M].enabled,A=h[M]&&h[M].enabled;S&&!A&&s[M].disable(),!S&&A&&s[M].enable()});let _=h.direction&&h.direction!==i.direction,x=i.loop&&(h.slidesPerView!==i.slidesPerView||_),v=i.loop;_&&t&&s.changeDirection(),zi(s.params,h);let w=s.params.enabled,E=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),g&&!w?s.disable():!g&&w&&s.enable(),s.currentBreakpoint=c,s.emit("_beforeBreakpoint",h),t&&(x?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!v&&E?(s.loopCreate(e),s.updateSlides()):v&&!E&&s.loopDestroy()),s.emit("breakpoint",h)}function Pw(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1,n=ft(),r=e==="window"?n.innerHeight:t.clientHeight,a=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){let l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){let{point:l,value:c}=a[o];e==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var Rw={setBreakpoint:Dw,getBreakpoint:Pw};function Iw(s,e){let t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(e+n)}):typeof i=="string"&&t.push(e+i)}),t}function Lw(){let s=this,{classNames:e,params:t,rtl:i,el:n,device:r}=s,a=Iw(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),n.classList.add(...e),s.emitContainerClasses()}function Fw(){let s=this,{el:e,classNames:t}=s;!e||typeof e=="string"||(e.classList.remove(...t),s.emitContainerClasses())}var Nw={addClasses:Lw,removeClasses:Fw};function Ow(){let s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){let n=s.slides.length-1,r=s.slidesGrid[n]+s.slidesSizesGrid[n]+i*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Uw={checkOverflow:Ow},c0={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Bw(s,e){return function(i){i===void 0&&(i={});let n=Object.keys(i)[0],r=i[n];if(typeof r!="object"||r===null){zi(e,i);return}if(s[n]===!0&&(s[n]={enabled:!0}),n==="navigation"&&s[n]&&s[n].enabled&&!s[n].prevEl&&!s[n].nextEl&&(s[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&s[n]&&s[n].enabled&&!s[n].el&&(s[n].auto=!0),!(n in s&&"enabled"in r)){zi(e,i);return}typeof s[n]=="object"&&!("enabled"in s[n])&&(s[n].enabled=!0),s[n]||(s[n]={enabled:!1}),zi(e,i)}}var cd={eventsEmitter:Ny,update:Yy,translate:jy,transition:iw,slide:uw,loop:pw,grabCursor:_w,events:Cw,breakpoints:Rw,checkOverflow:Uw,classes:Nw},ud={},ks=class s{constructor(){let e,t;for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?t=n[0]:[e,t]=n,t||(t={}),t=zi({},t),e&&!t.el&&(t.el=e);let a=bt();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){let u=[];return a.querySelectorAll(t.el).forEach(h=>{let f=zi({},t,{el:h});u.push(new s(f))}),u}let o=this;o.__swiper__=!0,o.support=u0(),o.device=h0({userAgent:t.userAgent}),o.browser=d0(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);let l={};o.modules.forEach(u=>{u({params:t,swiper:o,extendParams:Bw(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});let c=zi({},c0,l);return o.params=zi({},c,ud,t),o.originalParams=zi({},o.params),o.passedParams=zi({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(u=>{o.on(u,o.params.on[u])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){let{slidesEl:t,params:i}=this,n=Ft(t,`.${i.slideClass}, swiper-slide`),r=Us(n[0]);return Us(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}recalcSlides(){let e=this,{slidesEl:t,params:i}=e;e.slides=Ft(t,`.${i.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){let i=this;e=Math.min(Math.max(e,0),1);let n=i.minTranslate(),a=(i.maxTranslate()-n)*e+n;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(i=>{let n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);let i=this,{params:n,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=i,u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let h=r[c]?Math.ceil(r[c].swiperSlideSize):0,f;for(let d=c+1;d<r.length;d+=1)r[d]&&!f&&(h+=Math.ceil(r[d].swiperSlideSize),u+=1,h>l&&(f=!0));for(let d=c-1;d>=0;d-=1)r[d]&&!f&&(h+=r[d].swiperSlideSize,u+=1,h>l&&(f=!0))}else if(e==="current")for(let h=c+1;h<r.length;h+=1)(t?a[h]+o[h]-a[c]<l:a[h]-a[c]<l)&&(u+=1);else for(let h=c-1;h>=0;h-=1)a[c]-a[h]<l&&(u+=1);return u}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&rc(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){let a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){let a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||n()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);let i=this,n=i.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){let t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){let t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):Ft(i,n())[0];return!a&&t.params.createElements&&(a=$t("div",t.params.wrapperClass),i.append(a),Ft(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||os(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||os(i,"direction")==="rtl"),wrongRTL:os(a,"display")==="-webkit-box"}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();let n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?rc(t,r):r.addEventListener("load",a=>{rc(t,a.target)})}),hd(t),t.initialized=!0,hd(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);let i=this,{params:n,el:r,wrapperEl:a,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),t0(i)),i.destroyed=!0),null}static extendDefaults(e){zi(ud,e)}static get extendedDefaults(){return ud}static get defaults(){return c0}static installModule(e){s.prototype.__modules__||(s.prototype.__modules__=[]);let t=s.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>s.installModule(t)),s):(s.installModule(e),s)}};Object.keys(cd).forEach(s=>{Object.keys(cd[s]).forEach(e=>{ks.prototype[e]=cd[s][e]})});ks.use([Ly,Fy]);function m0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let r,a=bt();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};let o=a.createElement("div");function l(m,p){let g=e.params.virtual;if(g.cache&&e.virtual.cache[p])return e.virtual.cache[p];let _;return g.renderSlide?(_=g.renderSlide.call(e,m,p),typeof _=="string"&&(o.innerHTML=_,_=o.children[0])):e.isElement?_=$t("swiper-slide"):_=$t("div",e.params.slideClass),_.setAttribute("data-swiper-slide-index",p),g.renderSlide||(_.innerHTML=m),g.cache&&(e.virtual.cache[p]=_),_}function c(m,p,g){let{slidesPerView:_,slidesPerGroup:x,centeredSlides:v,loop:w,initialSlide:E}=e.params;if(p&&!w&&E>0)return;let{addSlidesBefore:M,addSlidesAfter:S}=e.params.virtual,{from:A,to:D,slides:y,slidesGrid:b,offset:R}=e.virtual;e.params.cssMode||e.updateActiveIndex();let C=typeof g>"u"?e.activeIndex||0:g,I;e.rtlTranslate?I="right":I=e.isHorizontal()?"left":"top";let U,B;v?(U=Math.floor(_/2)+x+S,B=Math.floor(_/2)+x+M):(U=_+(x-1)+S,B=(w?_:x)+M);let F=C-B,L=C+U;w||(F=Math.max(F,0),L=Math.min(L,y.length-1));let k=(e.slidesGrid[F]||0)-(e.slidesGrid[0]||0);w&&C>=B?(F-=B,v||(k+=e.slidesGrid[0])):w&&C<B&&(F=-B,v&&(k+=e.slidesGrid[0])),Object.assign(e.virtual,{from:F,to:L,offset:k,slidesGrid:e.slidesGrid,slidesBefore:B,slidesAfter:U});function N(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n("virtualUpdate")}if(A===F&&D===L&&!m){e.slidesGrid!==b&&k!==R&&e.slides.forEach(H=>{H.style[I]=`${k-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),n("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:k,from:F,to:L,slides:function(){let X=[];for(let oe=F;oe<=L;oe+=1)X.push(y[oe]);return X}()}),e.params.virtual.renderExternalUpdate?N():n("virtualUpdate");return}let ie=[],he=[],Fe=H=>{let X=H;return H<0?X=y.length+H:X>=y.length&&(X=X-y.length),X};if(m)e.slides.filter(H=>H.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(H=>{H.remove()});else for(let H=A;H<=D;H+=1)if(H<F||H>L){let X=Fe(H);e.slides.filter(oe=>oe.matches(`.${e.params.slideClass}[data-swiper-slide-index="${X}"], swiper-slide[data-swiper-slide-index="${X}"]`)).forEach(oe=>{oe.remove()})}let j=w?-y.length:0,V=w?y.length*2:y.length;for(let H=j;H<V;H+=1)if(H>=F&&H<=L){let X=Fe(H);typeof D>"u"||m?he.push(X):(H>D&&he.push(X),H<A&&ie.push(X))}if(he.forEach(H=>{e.slidesEl.append(l(y[H],H))}),w)for(let H=ie.length-1;H>=0;H-=1){let X=ie[H];e.slidesEl.prepend(l(y[X],X))}else ie.sort((H,X)=>X-H),ie.forEach(H=>{e.slidesEl.prepend(l(y[H],H))});Ft(e.slidesEl,".swiper-slide, swiper-slide").forEach(H=>{H.style[I]=`${k-Math.abs(e.cssOverflowAdjustment())}px`}),N()}function u(m){if(typeof m=="object"&&"length"in m)for(let p=0;p<m.length;p+=1)m[p]&&e.virtual.slides.push(m[p]);else e.virtual.slides.push(m);c(!0)}function h(m){let p=e.activeIndex,g=p+1,_=1;if(Array.isArray(m)){for(let x=0;x<m.length;x+=1)m[x]&&e.virtual.slides.unshift(m[x]);g=p+m.length,_=m.length}else e.virtual.slides.unshift(m);if(e.params.virtual.cache){let x=e.virtual.cache,v={};Object.keys(x).forEach(w=>{let E=x[w],M=E.getAttribute("data-swiper-slide-index");M&&E.setAttribute("data-swiper-slide-index",parseInt(M,10)+_),v[parseInt(w,10)+_]=E}),e.virtual.cache=v}c(!0),e.slideTo(g,0)}function f(m){if(typeof m>"u"||m===null)return;let p=e.activeIndex;if(Array.isArray(m))for(let g=m.length-1;g>=0;g-=1)e.params.virtual.cache&&(delete e.virtual.cache[m[g]],Object.keys(e.virtual.cache).forEach(_=>{_>m&&(e.virtual.cache[_-1]=e.virtual.cache[_],e.virtual.cache[_-1].setAttribute("data-swiper-slide-index",_-1),delete e.virtual.cache[_])})),e.virtual.slides.splice(m[g],1),m[g]<p&&(p-=1),p=Math.max(p,0);else e.params.virtual.cache&&(delete e.virtual.cache[m],Object.keys(e.virtual.cache).forEach(g=>{g>m&&(e.virtual.cache[g-1]=e.virtual.cache[g],e.virtual.cache[g-1].setAttribute("data-swiper-slide-index",g-1),delete e.virtual.cache[g])})),e.virtual.slides.splice(m,1),m<p&&(p-=1),p=Math.max(p,0);c(!0),e.slideTo(p,0)}function d(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}i("beforeInit",()=>{if(!e.params.virtual.enabled)return;let m;if(typeof e.passedParams.virtual.slides>"u"){let p=[...e.slidesEl.children].filter(g=>g.matches(`.${e.params.slideClass}, swiper-slide`));p&&p.length&&(e.virtual.slides=[...p],m=!0,p.forEach((g,_)=>{g.setAttribute("data-swiper-slide-index",_),e.virtual.cache[_]=g,g.remove()}))}m||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c(!1,!0)}),i("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(r),r=setTimeout(()=>{c()},100)):c())}),i("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&Tr(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:u,prependSlide:h,removeSlide:f,removeAllSlides:d,update:c})}function g0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r=bt(),a=ft();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(u){if(!e.enabled)return;let{rtlTranslate:h}=e,f=u;f.originalEvent&&(f=f.originalEvent);let d=f.keyCode||f.charCode,m=e.params.keyboard.pageUpDown,p=m&&d===33,g=m&&d===34,_=d===37,x=d===39,v=d===38,w=d===40;if(!e.allowSlideNext&&(e.isHorizontal()&&x||e.isVertical()&&w||g)||!e.allowSlidePrev&&(e.isHorizontal()&&_||e.isVertical()&&v||p))return!1;if(!(f.shiftKey||f.altKey||f.ctrlKey||f.metaKey)&&!(r.activeElement&&r.activeElement.nodeName&&(r.activeElement.nodeName.toLowerCase()==="input"||r.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(p||g||_||x||v||w)){let E=!1;if(An(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&An(e.el,`.${e.params.slideActiveClass}`).length===0)return;let M=e.el,S=M.clientWidth,A=M.clientHeight,D=a.innerWidth,y=a.innerHeight,b=Ar(M);h&&(b.left-=M.scrollLeft);let R=[[b.left,b.top],[b.left+S,b.top],[b.left,b.top+A],[b.left+S,b.top+A]];for(let C=0;C<R.length;C+=1){let I=R[C];if(I[0]>=0&&I[0]<=D&&I[1]>=0&&I[1]<=y){if(I[0]===0&&I[1]===0)continue;E=!0}}if(!E)return}e.isHorizontal()?((p||g||_||x)&&(f.preventDefault?f.preventDefault():f.returnValue=!1),((g||x)&&!h||(p||_)&&h)&&e.slideNext(),((p||_)&&!h||(g||x)&&h)&&e.slidePrev()):((p||g||v||w)&&(f.preventDefault?f.preventDefault():f.returnValue=!1),(g||w)&&e.slideNext(),(p||v)&&e.slidePrev()),n("keyPress",d)}}function l(){e.keyboard.enabled||(r.addEventListener("keydown",o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(r.removeEventListener("keydown",o),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&l()}),i("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:l,disable:c})}function _0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r=ft();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let a,o=Pi(),l,c=[];function u(v){let S=0,A=0,D=0,y=0;return"detail"in v&&(A=v.detail),"wheelDelta"in v&&(A=-v.wheelDelta/120),"wheelDeltaY"in v&&(A=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(S=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(S=A,A=0),D=S*10,y=A*10,"deltaY"in v&&(y=v.deltaY),"deltaX"in v&&(D=v.deltaX),v.shiftKey&&!D&&(D=y,y=0),(D||y)&&v.deltaMode&&(v.deltaMode===1?(D*=40,y*=40):(D*=800,y*=800)),D&&!S&&(S=D<1?-1:1),y&&!A&&(A=y<1?-1:1),{spinX:S,spinY:A,pixelX:D,pixelY:y}}function h(){e.enabled&&(e.mouseEntered=!0)}function f(){e.enabled&&(e.mouseEntered=!1)}function d(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&Pi()-o<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&Pi()-o<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),n("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),n("scroll",v.raw)),o=new r.Date().getTime(),!1)}function m(v){let w=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&w.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&w.releaseOnEdges)return!0;return!1}function p(v){let w=v,E=!0;if(!e.enabled||v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;let M=e.params.mousewheel;e.params.cssMode&&w.preventDefault();let S=e.el;e.params.mousewheel.eventsTarget!=="container"&&(S=document.querySelector(e.params.mousewheel.eventsTarget));let A=S&&S.contains(w.target);if(!e.mouseEntered&&!A&&!M.releaseOnEdges)return!0;w.originalEvent&&(w=w.originalEvent);let D=0,y=e.rtlTranslate?-1:1,b=u(w);if(M.forceToAxis)if(e.isHorizontal())if(Math.abs(b.pixelX)>Math.abs(b.pixelY))D=-b.pixelX*y;else return!0;else if(Math.abs(b.pixelY)>Math.abs(b.pixelX))D=-b.pixelY;else return!0;else D=Math.abs(b.pixelX)>Math.abs(b.pixelY)?-b.pixelX*y:-b.pixelY;if(D===0)return!0;M.invert&&(D=-D);let R=e.getTranslate()+D*M.sensitivity;if(R>=e.minTranslate()&&(R=e.minTranslate()),R<=e.maxTranslate()&&(R=e.maxTranslate()),E=e.params.loop?!0:!(R===e.minTranslate()||R===e.maxTranslate()),E&&e.params.nested&&w.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){let C={time:Pi(),delta:Math.abs(D),direction:Math.sign(D),raw:v};c.length>=2&&c.shift();let I=c.length?c[c.length-1]:void 0;if(c.push(C),I?(C.direction!==I.direction||C.delta>I.delta||C.time>I.time+150)&&d(C):d(C),m(C))return!0}else{let C={time:Pi(),delta:Math.abs(D),direction:Math.sign(D)},I=l&&C.time<l.time+500&&C.delta<=l.delta&&C.direction===l.direction;if(!I){l=void 0;let U=e.getTranslate()+D*M.sensitivity,B=e.isBeginning,F=e.isEnd;if(U>=e.minTranslate()&&(U=e.minTranslate()),U<=e.maxTranslate()&&(U=e.maxTranslate()),e.setTransition(0),e.setTranslate(U),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!B&&e.isBeginning||!F&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:C.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(a),a=void 0,c.length>=15&&c.shift();let L=c.length?c[c.length-1]:void 0,k=c[0];if(c.push(C),L&&(C.delta>L.delta||C.direction!==L.direction))c.splice(0);else if(c.length>=15&&C.time-k.time<500&&k.delta-C.delta>=1&&C.delta<=6){let N=D>0?.8:.2;l=C,c.splice(0),a=Tn(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,N)},0)}a||(a=Tn(()=>{if(e.destroyed||!e.params)return;let N=.5;l=C,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,N)},500))}if(I||n("scroll",w),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),M.releaseOnEdges&&(U===e.minTranslate()||U===e.maxTranslate()))return!0}}return w.preventDefault?w.preventDefault():w.returnValue=!1,!1}function g(v){let w=e.el;e.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(e.params.mousewheel.eventsTarget)),w[v]("mouseenter",h),w[v]("mouseleave",f),w[v]("wheel",p)}function _(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",p),!0):e.mousewheel.enabled?!1:(g("addEventListener"),e.mousewheel.enabled=!0,!0)}function x(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,p),!0):e.mousewheel.enabled?(g("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}i("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&x(),e.params.mousewheel.enabled&&_()}),i("destroy",()=>{e.params.cssMode&&_(),e.mousewheel.enabled&&x()}),Object.assign(e.mousewheel,{enable:_,disable:x})}function _a(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=Ft(s.el,`.${i[n]}`)[0];r||(r=$t("div",i[n]),r.className=i[n],s.el.append(r)),t[n]=r,e[n]=r}}),t}function v0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(m){let p;return m&&typeof m=="string"&&e.isElement&&(p=e.el.querySelector(m)||e.hostEl.querySelector(m),p)?p:(m&&(typeof m=="string"&&(p=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&p&&p.length>1&&e.el.querySelectorAll(m).length===1?p=e.el.querySelector(m):p&&p.length===1&&(p=p[0])),m&&!p?m:p)}function a(m,p){let g=e.params.navigation;m=Qe(m),m.forEach(_=>{_&&(_.classList[p?"add":"remove"](...g.disabledClass.split(" ")),_.tagName==="BUTTON"&&(_.disabled=p),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass))})}function o(){let{nextEl:m,prevEl:p}=e.navigation;if(e.params.loop){a(p,!1),a(m,!1);return}a(p,e.isBeginning&&!e.params.rewind),a(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function c(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function u(){let m=e.params.navigation;if(e.params.navigation=_a(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let p=r(m.nextEl),g=r(m.prevEl);Object.assign(e.navigation,{nextEl:p,prevEl:g}),p=Qe(p),g=Qe(g);let _=(x,v)=>{x&&x.addEventListener("click",v==="next"?c:l),!e.enabled&&x&&x.classList.add(...m.lockClass.split(" "))};p.forEach(x=>_(x,"next")),g.forEach(x=>_(x,"prev"))}function h(){let{nextEl:m,prevEl:p}=e.navigation;m=Qe(m),p=Qe(p);let g=(_,x)=>{_.removeEventListener("click",x==="next"?c:l),_.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(_=>g(_,"next")),p.forEach(_=>g(_,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?d():(u(),o())}),i("toEdge fromEdge lock unlock",()=>{o()}),i("destroy",()=>{h()}),i("enable disable",()=>{let{nextEl:m,prevEl:p}=e.navigation;if(m=Qe(m),p=Qe(p),e.enabled){o();return}[...m,...p].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),i("click",(m,p)=>{let{nextEl:g,prevEl:_}=e.navigation;g=Qe(g),_=Qe(_);let x=p.target,v=_.includes(x)||g.includes(x);if(e.isElement&&!v){let w=p.path||p.composedPath&&p.composedPath();w&&(v=w.find(E=>g.includes(E)||_.includes(E)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let w;g.length?w=g[0].classList.contains(e.params.navigation.hiddenClass):_.length&&(w=_[0].classList.contains(e.params.navigation.hiddenClass)),n(w===!0?"navigationShow":"navigationHide"),[...g,..._].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});let f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},d=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:f,disable:d,update:o,init:u,destroy:h})}function fn(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function x0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:x=>x,formatFractionTotal:x=>x,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(x,v){let{bulletActiveClass:w}=e.params.pagination;x&&(x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&(x.classList.add(`${w}-${v}`),x=x[`${v==="prev"?"previous":"next"}ElementSibling`],x&&x.classList.add(`${w}-${v}-${v}`)))}function u(x,v,w){if(x=x%w,v=v%w,v===x+1)return"next";if(v===x-1)return"previous"}function h(x){let v=x.target.closest(fn(e.params.pagination.bulletClass));if(!v)return;x.preventDefault();let w=Us(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;let E=u(e.realIndex,w,e.slides.length);E==="next"?e.slideNext():E==="previous"?e.slidePrev():e.slideToLoop(w)}else e.slideTo(w)}function f(){let x=e.rtl,v=e.params.pagination;if(l())return;let w=e.pagination.el;w=Qe(w);let E,M,S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,A=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(M=e.previousRealIndex||0,E=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(E=e.snapIndex,M=e.previousSnapIndex):(M=e.previousIndex||0,E=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){let D=e.pagination.bullets,y,b,R;if(v.dynamicBullets&&(a=No(D[0],e.isHorizontal()?"width":"height",!0),w.forEach(C=>{C.style[e.isHorizontal()?"width":"height"]=`${a*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&M!==void 0&&(o+=E-(M||0),o>v.dynamicMainBullets-1?o=v.dynamicMainBullets-1:o<0&&(o=0)),y=Math.max(E-o,0),b=y+(Math.min(D.length,v.dynamicMainBullets)-1),R=(b+y)/2),D.forEach(C=>{let I=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${v.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();C.classList.remove(...I)}),w.length>1)D.forEach(C=>{let I=Us(C);I===E?C.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&C.setAttribute("part","bullet"),v.dynamicBullets&&(I>=y&&I<=b&&C.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),I===y&&c(C,"prev"),I===b&&c(C,"next"))});else{let C=D[E];if(C&&C.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&D.forEach((I,U)=>{I.setAttribute("part",U===E?"bullet-active":"bullet")}),v.dynamicBullets){let I=D[y],U=D[b];for(let B=y;B<=b;B+=1)D[B]&&D[B].classList.add(...`${v.bulletActiveClass}-main`.split(" "));c(I,"prev"),c(U,"next")}}if(v.dynamicBullets){let C=Math.min(D.length,v.dynamicMainBullets+4),I=(a*C-a)/2-R*a,U=x?"right":"left";D.forEach(B=>{B.style[e.isHorizontal()?U:"top"]=`${I}px`})}}w.forEach((D,y)=>{if(v.type==="fraction"&&(D.querySelectorAll(fn(v.currentClass)).forEach(b=>{b.textContent=v.formatFractionCurrent(E+1)}),D.querySelectorAll(fn(v.totalClass)).forEach(b=>{b.textContent=v.formatFractionTotal(A)})),v.type==="progressbar"){let b;v.progressbarOpposite?b=e.isHorizontal()?"vertical":"horizontal":b=e.isHorizontal()?"horizontal":"vertical";let R=(E+1)/A,C=1,I=1;b==="horizontal"?C=R:I=R,D.querySelectorAll(fn(v.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${I})`,U.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(D.innerHTML=v.renderCustom(e,E+1,A),y===0&&n("paginationRender",D)):(y===0&&n("paginationRender",D),n("paginationUpdate",D)),e.params.watchOverflow&&e.enabled&&D.classList[e.isLocked?"add":"remove"](v.lockClass)})}function d(){let x=e.params.pagination;if(l())return;let v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,w=e.pagination.el;w=Qe(w);let E="";if(x.type==="bullets"){let M=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&M>v&&(M=v);for(let S=0;S<M;S+=1)x.renderBullet?E+=x.renderBullet.call(e,S,x.bulletClass):E+=`<${x.bulletElement} ${e.isElement?'part="bullet"':""} class="${x.bulletClass}"></${x.bulletElement}>`}x.type==="fraction"&&(x.renderFraction?E=x.renderFraction.call(e,x.currentClass,x.totalClass):E=`<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`),x.type==="progressbar"&&(x.renderProgressbar?E=x.renderProgressbar.call(e,x.progressbarFillClass):E=`<span class="${x.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach(M=>{x.type!=="custom"&&(M.innerHTML=E||""),x.type==="bullets"&&e.pagination.bullets.push(...M.querySelectorAll(fn(x.bulletClass)))}),x.type!=="custom"&&n("paginationRender",w[0])}function m(){e.params.pagination=_a(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let x=e.params.pagination;if(!x.el)return;let v;typeof x.el=="string"&&e.isElement&&(v=e.el.querySelector(x.el)),!v&&typeof x.el=="string"&&(v=[...document.querySelectorAll(x.el)]),v||(v=x.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof x.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(x.el)],v.length>1&&(v=v.find(w=>An(w,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Qe(v),v.forEach(w=>{x.type==="bullets"&&x.clickable&&w.classList.add(...(x.clickableClass||"").split(" ")),w.classList.add(x.modifierClass+x.type),w.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.type==="bullets"&&x.dynamicBullets&&(w.classList.add(`${x.modifierClass}${x.type}-dynamic`),o=0,x.dynamicMainBullets<1&&(x.dynamicMainBullets=1)),x.type==="progressbar"&&x.progressbarOpposite&&w.classList.add(x.progressbarOppositeClass),x.clickable&&w.addEventListener("click",h),e.enabled||w.classList.add(x.lockClass)}))}function p(){let x=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Qe(v),v.forEach(w=>{w.classList.remove(x.hiddenClass),w.classList.remove(x.modifierClass+x.type),w.classList.remove(e.isHorizontal()?x.horizontalClass:x.verticalClass),x.clickable&&(w.classList.remove(...(x.clickableClass||"").split(" ")),w.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...x.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;let x=e.params.pagination,{el:v}=e.pagination;v=Qe(v),v.forEach(w=>{w.classList.remove(x.horizontalClass,x.verticalClass),w.classList.add(e.isHorizontal()?x.horizontalClass:x.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?_():(m(),d(),f())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&f()}),i("snapIndexChange",()=>{f()}),i("snapGridLengthChange",()=>{d(),f()}),i("destroy",()=>{p()}),i("enable disable",()=>{let{el:x}=e.pagination;x&&(x=Qe(x),x.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{f()}),i("click",(x,v)=>{let w=v.target,E=Qe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;let M=E[0].classList.contains(e.params.pagination.hiddenClass);n(M===!0?"paginationShow":"paginationHide"),E.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});let g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=Qe(x),x.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),m(),d(),f()},_=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:x}=e.pagination;x&&(x=Qe(x),x.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),p()};Object.assign(e.pagination,{enable:g,disable:_,render:d,update:f,init:m,destroy:p})}function y0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r=bt(),a=!1,o=null,l=null,c,u,h,f;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function d(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:R,rtlTranslate:C}=e,{dragEl:I,el:U}=R,B=e.params.scrollbar,F=e.params.loop?e.progressLoop:e.progress,L=u,k=(h-u)*F;C?(k=-k,k>0?(L=u-k,k=0):-k+u>h&&(L=h+k)):k<0?(L=u+k,k=0):k+u>h&&(L=h-k),e.isHorizontal()?(I.style.transform=`translate3d(${k}px, 0, 0)`,I.style.width=`${L}px`):(I.style.transform=`translate3d(0px, ${k}px, 0)`,I.style.height=`${L}px`),B.hide&&(clearTimeout(o),U.style.opacity=1,o=setTimeout(()=>{U.style.opacity=0,U.style.transitionDuration="400ms"},1e3))}function m(R){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${R}ms`)}function p(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:R}=e,{dragEl:C,el:I}=R;C.style.width="",C.style.height="",h=e.isHorizontal()?I.offsetWidth:I.offsetHeight,f=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?u=h*f:u=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?C.style.width=`${u}px`:C.style.height=`${u}px`,f>=1?I.style.display="none":I.style.display="",e.params.scrollbar.hide&&(I.style.opacity=0),e.params.watchOverflow&&e.enabled&&R.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function g(R){return e.isHorizontal()?R.clientX:R.clientY}function _(R){let{scrollbar:C,rtlTranslate:I}=e,{el:U}=C,B;B=(g(R)-Ar(U)[e.isHorizontal()?"left":"top"]-(c!==null?c:u/2))/(h-u),B=Math.max(Math.min(B,1),0),I&&(B=1-B);let F=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*B;e.updateProgress(F),e.setTranslate(F),e.updateActiveIndex(),e.updateSlidesClasses()}function x(R){let C=e.params.scrollbar,{scrollbar:I,wrapperEl:U}=e,{el:B,dragEl:F}=I;a=!0,c=R.target===F?g(R)-R.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,R.preventDefault(),R.stopPropagation(),U.style.transitionDuration="100ms",F.style.transitionDuration="100ms",_(R),clearTimeout(l),B.style.transitionDuration="0ms",C.hide&&(B.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),n("scrollbarDragStart",R)}function v(R){let{scrollbar:C,wrapperEl:I}=e,{el:U,dragEl:B}=C;a&&(R.preventDefault&&R.cancelable?R.preventDefault():R.returnValue=!1,_(R),I.style.transitionDuration="0ms",U.style.transitionDuration="0ms",B.style.transitionDuration="0ms",n("scrollbarDragMove",R))}function w(R){let C=e.params.scrollbar,{scrollbar:I,wrapperEl:U}=e,{el:B}=I;a&&(a=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",U.style.transitionDuration=""),C.hide&&(clearTimeout(l),l=Tn(()=>{B.style.opacity=0,B.style.transitionDuration="400ms"},1e3)),n("scrollbarDragEnd",R),C.snapOnRelease&&e.slideToClosest())}function E(R){let{scrollbar:C,params:I}=e,U=C.el;if(!U)return;let B=U,F=I.passiveListeners?{passive:!1,capture:!1}:!1,L=I.passiveListeners?{passive:!0,capture:!1}:!1;if(!B)return;let k=R==="on"?"addEventListener":"removeEventListener";B[k]("pointerdown",x,F),r[k]("pointermove",v,F),r[k]("pointerup",w,L)}function M(){!e.params.scrollbar.el||!e.scrollbar.el||E("on")}function S(){!e.params.scrollbar.el||!e.scrollbar.el||E("off")}function A(){let{scrollbar:R,el:C}=e;e.params.scrollbar=_a(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});let I=e.params.scrollbar;if(!I.el)return;let U;if(typeof I.el=="string"&&e.isElement&&(U=e.el.querySelector(I.el)),!U&&typeof I.el=="string"){if(U=r.querySelectorAll(I.el),!U.length)return}else U||(U=I.el);e.params.uniqueNavElements&&typeof I.el=="string"&&U.length>1&&C.querySelectorAll(I.el).length===1&&(U=C.querySelector(I.el)),U.length>0&&(U=U[0]),U.classList.add(e.isHorizontal()?I.horizontalClass:I.verticalClass);let B;U&&(B=U.querySelector(fn(e.params.scrollbar.dragClass)),B||(B=$t("div",e.params.scrollbar.dragClass),U.append(B))),Object.assign(R,{el:U,dragEl:B}),I.draggable&&M(),U&&U.classList[e.enabled?"remove":"add"](...as(e.params.scrollbar.lockClass))}function D(){let R=e.params.scrollbar,C=e.scrollbar.el;C&&C.classList.remove(...as(e.isHorizontal()?R.horizontalClass:R.verticalClass)),S()}i("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;let R=e.params.scrollbar,{el:C}=e.scrollbar;C=Qe(C),C.forEach(I=>{I.classList.remove(R.horizontalClass,R.verticalClass),I.classList.add(e.isHorizontal()?R.horizontalClass:R.verticalClass)})}),i("init",()=>{e.params.scrollbar.enabled===!1?b():(A(),p(),d())}),i("update resize observerUpdate lock unlock changeDirection",()=>{p()}),i("setTranslate",()=>{d()}),i("setTransition",(R,C)=>{m(C)}),i("enable disable",()=>{let{el:R}=e.scrollbar;R&&R.classList[e.enabled?"remove":"add"](...as(e.params.scrollbar.lockClass))}),i("destroy",()=>{D()});let y=()=>{e.el.classList.remove(...as(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...as(e.params.scrollbar.scrollbarDisabledClass)),A(),p(),d()},b=()=>{e.el.classList.add(...as(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...as(e.params.scrollbar.scrollbarDisabledClass)),D()};Object.assign(e.scrollbar,{enable:y,disable:b,updateSize:p,setTranslate:d,init:A,destroy:D})}function w0(s){let{swiper:e,extendParams:t,on:i}=s;t({parallax:{enabled:!1}});let n="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(l,c)=>{let{rtl:u}=e,h=u?-1:1,f=l.getAttribute("data-swiper-parallax")||"0",d=l.getAttribute("data-swiper-parallax-x"),m=l.getAttribute("data-swiper-parallax-y"),p=l.getAttribute("data-swiper-parallax-scale"),g=l.getAttribute("data-swiper-parallax-opacity"),_=l.getAttribute("data-swiper-parallax-rotate");if(d||m?(d=d||"0",m=m||"0"):e.isHorizontal()?(d=f,m="0"):(m=f,d="0"),d.indexOf("%")>=0?d=`${parseInt(d,10)*c*h}%`:d=`${d*c*h}px`,m.indexOf("%")>=0?m=`${parseInt(m,10)*c}%`:m=`${m*c}px`,typeof g<"u"&&g!==null){let v=g-(g-1)*(1-Math.abs(c));l.style.opacity=v}let x=`translate3d(${d}, ${m}, 0px)`;if(typeof p<"u"&&p!==null){let v=p-(p-1)*(1-Math.abs(c));x+=` scale(${v})`}if(_&&typeof _<"u"&&_!==null){let v=_*c*-1;x+=` rotate(${v}deg)`}l.style.transform=x},a=()=>{let{el:l,slides:c,progress:u,snapGrid:h,isElement:f}=e,d=Ft(l,n);e.isElement&&d.push(...Ft(e.hostEl,n)),d.forEach(m=>{r(m,u)}),c.forEach((m,p)=>{let g=m.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(g+=Math.ceil(p/2)-u*(h.length-1)),g=Math.min(Math.max(g,-1),1),m.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach(_=>{r(_,g)})})},o=function(l){l===void 0&&(l=e.params.speed);let{el:c,hostEl:u}=e,h=[...c.querySelectorAll(n)];e.isElement&&h.push(...u.querySelectorAll(n)),h.forEach(f=>{let d=parseInt(f.getAttribute("data-swiper-parallax-duration"),10)||l;l===0&&(d=0),f.style.transitionDuration=`${d}ms`})};i("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),i("init",()=>{e.params.parallax.enabled&&a()}),i("setTranslate",()=>{e.params.parallax.enabled&&a()}),i("setTransition",(l,c)=>{e.params.parallax.enabled&&o(c)})}function b0(s){let{swiper:e,extendParams:t,on:i,emit:n}=s,r=ft();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let a=1,o=!1,l=!1,c={x:0,y:0},u=-3,h,f,d=[],m={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},p={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},_=1;Object.defineProperty(e.zoom,"scale",{get(){return _},set(V){if(_!==V){let H=m.imageEl,X=m.slideEl;n("zoomChange",V,H,X)}_=V}});function x(){if(d.length<2)return 1;let V=d[0].pageX,H=d[0].pageY,X=d[1].pageX,oe=d[1].pageY;return Math.sqrt((X-V)**2+(oe-H)**2)}function v(){let V=e.params.zoom,H=m.imageWrapEl.getAttribute("data-swiper-zoom")||V.maxRatio;if(V.limitToOriginalSize&&m.imageEl&&m.imageEl.naturalWidth){let X=m.imageEl.naturalWidth/m.imageEl.offsetWidth;return Math.min(X,H)}return H}function w(){if(d.length<2)return{x:null,y:null};let V=m.imageEl.getBoundingClientRect();return[(d[0].pageX+(d[1].pageX-d[0].pageX)/2-V.x-r.scrollX)/a,(d[0].pageY+(d[1].pageY-d[0].pageY)/2-V.y-r.scrollY)/a]}function E(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function M(V){let H=E();return!!(V.target.matches(H)||e.slides.filter(X=>X.contains(V.target)).length>0)}function S(V){let H=`.${e.params.zoom.containerClass}`;return!!(V.target.matches(H)||[...e.hostEl.querySelectorAll(H)].filter(X=>X.contains(V.target)).length>0)}function A(V){if(V.pointerType==="mouse"&&d.splice(0,d.length),!M(V))return;let H=e.params.zoom;if(h=!1,f=!1,d.push(V),!(d.length<2)){if(h=!0,m.scaleStart=x(),!m.slideEl){m.slideEl=V.target.closest(`.${e.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=e.slides[e.activeIndex]);let X=m.slideEl.querySelector(`.${H.containerClass}`);if(X&&(X=X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=X,X?m.imageWrapEl=An(m.imageEl,`.${H.containerClass}`)[0]:m.imageWrapEl=void 0,!m.imageWrapEl){m.imageEl=void 0;return}m.maxRatio=v()}if(m.imageEl){let[X,oe]=w();m.originX=X,m.originY=oe,m.imageEl.style.transitionDuration="0ms"}o=!0}}function D(V){if(!M(V))return;let H=e.params.zoom,X=e.zoom,oe=d.findIndex(de=>de.pointerId===V.pointerId);oe>=0&&(d[oe]=V),!(d.length<2)&&(f=!0,m.scaleMove=x(),m.imageEl&&(X.scale=m.scaleMove/m.scaleStart*a,X.scale>m.maxRatio&&(X.scale=m.maxRatio-1+(X.scale-m.maxRatio+1)**.5),X.scale<H.minRatio&&(X.scale=H.minRatio+1-(H.minRatio-X.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${X.scale})`))}function y(V){if(!M(V)||V.pointerType==="mouse"&&V.type==="pointerout")return;let H=e.params.zoom,X=e.zoom,oe=d.findIndex(de=>de.pointerId===V.pointerId);oe>=0&&d.splice(oe,1),!(!h||!f)&&(h=!1,f=!1,m.imageEl&&(X.scale=Math.max(Math.min(X.scale,m.maxRatio),H.minRatio),m.imageEl.style.transitionDuration=`${e.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${X.scale})`,a=X.scale,o=!1,X.scale>1&&m.slideEl?m.slideEl.classList.add(`${H.zoomedSlideClass}`):X.scale<=1&&m.slideEl&&m.slideEl.classList.remove(`${H.zoomedSlideClass}`),X.scale===1&&(m.originX=0,m.originY=0,m.slideEl=void 0)))}let b;function R(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function C(){clearTimeout(b),e.touchEventsData.preventTouchMoveFromPointerMove=!0,b=setTimeout(()=>{e.destroyed||R()})}function I(V){let H=e.device;if(!m.imageEl||p.isTouched)return;H.android&&V.cancelable&&V.preventDefault(),p.isTouched=!0;let X=d.length>0?d[0]:V;p.touchesStart.x=X.pageX,p.touchesStart.y=X.pageY}function U(V){let X=V.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!M(V)||!S(V))return;let oe=e.zoom;if(!m.imageEl)return;if(!p.isTouched||!m.slideEl){X&&L(V);return}if(X){L(V);return}p.isMoved||(p.width=m.imageEl.offsetWidth||m.imageEl.clientWidth,p.height=m.imageEl.offsetHeight||m.imageEl.clientHeight,p.startX=Lo(m.imageWrapEl,"x")||0,p.startY=Lo(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");let de=p.width*oe.scale,Pe=p.height*oe.scale;if(p.minX=Math.min(m.slideWidth/2-de/2,0),p.maxX=-p.minX,p.minY=Math.min(m.slideHeight/2-Pe/2,0),p.maxY=-p.minY,p.touchesCurrent.x=d.length>0?d[0].pageX:V.pageX,p.touchesCurrent.y=d.length>0?d[0].pageY:V.pageY,Math.max(Math.abs(p.touchesCurrent.x-p.touchesStart.x),Math.abs(p.touchesCurrent.y-p.touchesStart.y))>5&&(e.allowClick=!1),!p.isMoved&&!o){if(e.isHorizontal()&&(Math.floor(p.minX)===Math.floor(p.startX)&&p.touchesCurrent.x<p.touchesStart.x||Math.floor(p.maxX)===Math.floor(p.startX)&&p.touchesCurrent.x>p.touchesStart.x)){p.isTouched=!1,R();return}if(!e.isHorizontal()&&(Math.floor(p.minY)===Math.floor(p.startY)&&p.touchesCurrent.y<p.touchesStart.y||Math.floor(p.maxY)===Math.floor(p.startY)&&p.touchesCurrent.y>p.touchesStart.y)){p.isTouched=!1,R();return}}V.cancelable&&V.preventDefault(),V.stopPropagation(),C(),p.isMoved=!0;let Re=(oe.scale-a)/(m.maxRatio-e.params.zoom.minRatio),{originX:z,originY:Me}=m;p.currentX=p.touchesCurrent.x-p.touchesStart.x+p.startX+Re*(p.width-z*2),p.currentY=p.touchesCurrent.y-p.touchesStart.y+p.startY+Re*(p.height-Me*2),p.currentX<p.minX&&(p.currentX=p.minX+1-(p.minX-p.currentX+1)**.8),p.currentX>p.maxX&&(p.currentX=p.maxX-1+(p.currentX-p.maxX+1)**.8),p.currentY<p.minY&&(p.currentY=p.minY+1-(p.minY-p.currentY+1)**.8),p.currentY>p.maxY&&(p.currentY=p.maxY-1+(p.currentY-p.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=p.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=p.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(p.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(p.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(p.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(p.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=p.touchesCurrent.x,g.prevPositionY=p.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${p.currentX}px, ${p.currentY}px,0)`}function B(){let V=e.zoom;if(d.length=0,!m.imageEl)return;if(!p.isTouched||!p.isMoved){p.isTouched=!1,p.isMoved=!1;return}p.isTouched=!1,p.isMoved=!1;let H=300,X=300,oe=g.x*H,de=p.currentX+oe,Pe=g.y*X,Ae=p.currentY+Pe;g.x!==0&&(H=Math.abs((de-p.currentX)/g.x)),g.y!==0&&(X=Math.abs((Ae-p.currentY)/g.y));let Re=Math.max(H,X);p.currentX=de,p.currentY=Ae;let z=p.width*V.scale,Me=p.height*V.scale;p.minX=Math.min(m.slideWidth/2-z/2,0),p.maxX=-p.minX,p.minY=Math.min(m.slideHeight/2-Me/2,0),p.maxY=-p.minY,p.currentX=Math.max(Math.min(p.currentX,p.maxX),p.minX),p.currentY=Math.max(Math.min(p.currentY,p.maxY),p.minY),m.imageWrapEl.style.transitionDuration=`${Re}ms`,m.imageWrapEl.style.transform=`translate3d(${p.currentX}px, ${p.currentY}px,0)`}function F(){let V=e.zoom;m.slideEl&&e.activeIndex!==e.slides.indexOf(m.slideEl)&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),m.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),V.scale=1,a=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0,m.originX=0,m.originY=0)}function L(V){if(a<=1||!m.imageWrapEl||!M(V)||!S(V))return;let H=r.getComputedStyle(m.imageWrapEl).transform,X=new r.DOMMatrix(H);if(!l){l=!0,c.x=V.clientX,c.y=V.clientY,p.startX=X.e,p.startY=X.f,p.width=m.imageEl.offsetWidth||m.imageEl.clientWidth,p.height=m.imageEl.offsetHeight||m.imageEl.clientHeight,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight;return}let oe=(V.clientX-c.x)*u,de=(V.clientY-c.y)*u,Pe=p.width*a,Ae=p.height*a,Re=m.slideWidth,z=m.slideHeight,Me=Math.min(Re/2-Pe/2,0),Ce=-Me,Ue=Math.min(z/2-Ae/2,0),Y=-Ue,Ve=Math.max(Math.min(p.startX+oe,Ce),Me),De=Math.max(Math.min(p.startY+de,Y),Ue);m.imageWrapEl.style.transitionDuration="0ms",m.imageWrapEl.style.transform=`translate3d(${Ve}px, ${De}px, 0)`,c.x=V.clientX,c.y=V.clientY,p.startX=Ve,p.startY=De}function k(V){let H=e.zoom,X=e.params.zoom;if(!m.slideEl){V&&V.target&&(m.slideEl=V.target.closest(`.${e.params.slideClass}, swiper-slide`)),m.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?m.slideEl=Ft(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:m.slideEl=e.slides[e.activeIndex]);let fe=m.slideEl.querySelector(`.${X.containerClass}`);fe&&(fe=fe.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=fe,fe?m.imageWrapEl=An(m.imageEl,`.${X.containerClass}`)[0]:m.imageWrapEl=void 0}if(!m.imageEl||!m.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${X.zoomedSlideClass}`);let oe,de,Pe,Ae,Re,z,Me,Ce,Ue,Y,Ve,De,O,T,Z,ne,re,te;typeof p.touchesStart.x>"u"&&V?(oe=V.pageX,de=V.pageY):(oe=p.touchesStart.x,de=p.touchesStart.y);let be=typeof V=="number"?V:null;a===1&&be&&(oe=void 0,de=void 0,p.touchesStart.x=void 0,p.touchesStart.y=void 0);let le=v();H.scale=be||le,a=be||le,V&&!(a===1&&be)?(re=m.slideEl.offsetWidth,te=m.slideEl.offsetHeight,Pe=Ar(m.slideEl).left+r.scrollX,Ae=Ar(m.slideEl).top+r.scrollY,Re=Pe+re/2-oe,z=Ae+te/2-de,Ue=m.imageEl.offsetWidth||m.imageEl.clientWidth,Y=m.imageEl.offsetHeight||m.imageEl.clientHeight,Ve=Ue*H.scale,De=Y*H.scale,O=Math.min(re/2-Ve/2,0),T=Math.min(te/2-De/2,0),Z=-O,ne=-T,Me=Re*H.scale,Ce=z*H.scale,Me<O&&(Me=O),Me>Z&&(Me=Z),Ce<T&&(Ce=T),Ce>ne&&(Ce=ne)):(Me=0,Ce=0),be&&H.scale===1&&(m.originX=0,m.originY=0),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${Me}px, ${Ce}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${H.scale})`}function N(){let V=e.zoom,H=e.params.zoom;if(!m.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?m.slideEl=Ft(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:m.slideEl=e.slides[e.activeIndex];let X=m.slideEl.querySelector(`.${H.containerClass}`);X&&(X=X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=X,X?m.imageWrapEl=An(m.imageEl,`.${H.containerClass}`)[0]:m.imageWrapEl=void 0}!m.imageEl||!m.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),V.scale=1,a=1,p.touchesStart.x=void 0,p.touchesStart.y=void 0,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${H.zoomedSlideClass}`),m.slideEl=void 0,m.originX=0,m.originY=0,e.params.zoom.panOnMouseMove&&(c={x:0,y:0},l&&(l=!1,p.startX=0,p.startY=0)))}function ie(V){let H=e.zoom;H.scale&&H.scale!==1?N():k(V)}function he(){let V=e.params.passiveListeners?{passive:!0,capture:!1}:!1,H=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:V,activeListenerWithCapture:H}}function Fe(){let V=e.zoom;if(V.enabled)return;V.enabled=!0;let{passiveListener:H,activeListenerWithCapture:X}=he();e.wrapperEl.addEventListener("pointerdown",A,H),e.wrapperEl.addEventListener("pointermove",D,X),["pointerup","pointercancel","pointerout"].forEach(oe=>{e.wrapperEl.addEventListener(oe,y,H)}),e.wrapperEl.addEventListener("pointermove",U,X)}function j(){let V=e.zoom;if(!V.enabled)return;V.enabled=!1;let{passiveListener:H,activeListenerWithCapture:X}=he();e.wrapperEl.removeEventListener("pointerdown",A,H),e.wrapperEl.removeEventListener("pointermove",D,X),["pointerup","pointercancel","pointerout"].forEach(oe=>{e.wrapperEl.removeEventListener(oe,y,H)}),e.wrapperEl.removeEventListener("pointermove",U,X)}i("init",()=>{e.params.zoom.enabled&&Fe()}),i("destroy",()=>{j()}),i("touchStart",(V,H)=>{e.zoom.enabled&&I(H)}),i("touchEnd",(V,H)=>{e.zoom.enabled&&B()}),i("doubleTap",(V,H)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&ie(H)}),i("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&F()}),i("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&F()}),Object.assign(e.zoom,{enable:Fe,disable:j,in:k,out:N,toggle:ie})}function S0(s){let{swiper:e,extendParams:t,on:i}=s;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function n(c,u){let h=function(){let p,g,_;return(x,v)=>{for(g=-1,p=x.length;p-g>1;)_=p+g>>1,x[_]<=v?g=_:p=_;return p}}();this.x=c,this.y=u,this.lastIndex=c.length-1;let f,d;return this.interpolate=function(p){return p?(d=h(this.x,p),f=d-1,(p-this.x[f])*(this.y[d]-this.y[f])/(this.x[d]-this.x[f])+this.y[f]):0},this}function r(c){e.controller.spline=e.params.loop?new n(e.slidesGrid,c.slidesGrid):new n(e.snapGrid,c.snapGrid)}function a(c,u){let h=e.controller.control,f,d,m=e.constructor;function p(g){if(g.destroyed)return;let _=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(r(g),d=-e.controller.spline.interpolate(-_)),(!d||e.params.controller.by==="container")&&(f=(g.maxTranslate()-g.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(f)||!Number.isFinite(f))&&(f=1),d=(_-e.minTranslate())*f+g.minTranslate()),e.params.controller.inverse&&(d=g.maxTranslate()-d),g.updateProgress(d),g.setTranslate(d,e),g.updateActiveIndex(),g.updateSlidesClasses()}if(Array.isArray(h))for(let g=0;g<h.length;g+=1)h[g]!==u&&h[g]instanceof m&&p(h[g]);else h instanceof m&&u!==h&&p(h)}function o(c,u){let h=e.constructor,f=e.controller.control,d;function m(p){p.destroyed||(p.setTransition(c,e),c!==0&&(p.transitionStart(),p.params.autoHeight&&Tn(()=>{p.updateAutoHeight()}),Bs(p.wrapperEl,()=>{f&&p.transitionEnd()})))}if(Array.isArray(f))for(d=0;d<f.length;d+=1)f[d]!==u&&f[d]instanceof h&&m(f[d]);else f instanceof h&&u!==f&&m(f)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}i("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(u=>{if(e.controller.control||(e.controller.control=[]),u&&u.swiper)e.controller.control.push(u.swiper);else if(u){let h=`${e.params.eventsPrefix}init`,f=d=>{e.controller.control.push(d.detail[0]),e.update(),u.removeEventListener(h,f)};u.addEventListener(h,f)}});return}e.controller.control=e.params.controller.control}),i("update",()=>{l()}),i("resize",()=>{l()}),i("observerUpdate",()=>{l()}),i("setTranslate",(c,u,h)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(u,h)}),i("setTransition",(c,u,h)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(u,h)}),Object.assign(e.controller,{setTranslate:a,setTransition:o})}function M0(s){let{swiper:e,extendParams:t,on:i}=s;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let n=null,r,a,o=new Date().getTime();function l(F){let L=n;L.length!==0&&(L.innerHTML="",L.innerHTML=F)}function c(F){F===void 0&&(F=16);let L=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(F).replace(/x/g,L)}function u(F){F=Qe(F),F.forEach(L=>{L.setAttribute("tabIndex","0")})}function h(F){F=Qe(F),F.forEach(L=>{L.setAttribute("tabIndex","-1")})}function f(F,L){F=Qe(F),F.forEach(k=>{k.setAttribute("role",L)})}function d(F,L){F=Qe(F),F.forEach(k=>{k.setAttribute("aria-roledescription",L)})}function m(F,L){F=Qe(F),F.forEach(k=>{k.setAttribute("aria-controls",L)})}function p(F,L){F=Qe(F),F.forEach(k=>{k.setAttribute("aria-label",L)})}function g(F,L){F=Qe(F),F.forEach(k=>{k.setAttribute("id",L)})}function _(F,L){F=Qe(F),F.forEach(k=>{k.setAttribute("aria-live",L)})}function x(F){F=Qe(F),F.forEach(L=>{L.setAttribute("aria-disabled",!0)})}function v(F){F=Qe(F),F.forEach(L=>{L.setAttribute("aria-disabled",!1)})}function w(F){if(F.keyCode!==13&&F.keyCode!==32)return;let L=e.params.a11y,k=F.target;if(!(e.pagination&&e.pagination.el&&(k===e.pagination.el||e.pagination.el.contains(F.target))&&!F.target.matches(fn(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){let N=Qe(e.navigation.prevEl);Qe(e.navigation.nextEl).includes(k)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?l(L.lastSlideMessage):l(L.nextSlideMessage)),N.includes(k)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?l(L.firstSlideMessage):l(L.prevSlideMessage))}e.pagination&&k.matches(fn(e.params.pagination.bulletClass))&&k.click()}}function E(){if(e.params.loop||e.params.rewind||!e.navigation)return;let{nextEl:F,prevEl:L}=e.navigation;L&&(e.isBeginning?(x(L),h(L)):(v(L),u(L))),F&&(e.isEnd?(x(F),h(F)):(v(F),u(F)))}function M(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function S(){return M()&&e.params.pagination.clickable}function A(){let F=e.params.a11y;M()&&e.pagination.bullets.forEach(L=>{e.params.pagination.clickable&&(u(L),e.params.pagination.renderBullet||(f(L,"button"),p(L,F.paginationBulletMessage.replace(/\{\{index\}\}/,Us(L)+1)))),L.matches(fn(e.params.pagination.bulletActiveClass))?L.setAttribute("aria-current","true"):L.removeAttribute("aria-current")})}let D=(F,L,k)=>{u(F),F.tagName!=="BUTTON"&&(f(F,"button"),F.addEventListener("keydown",w)),p(F,k),m(F,L)},y=F=>{a&&a!==F.target&&!a.contains(F.target)&&(r=!0),e.a11y.clicked=!0},b=()=>{r=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},R=F=>{o=new Date().getTime()},C=F=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-o<100)return;let L=F.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!L||!e.slides.includes(L))return;a=L;let k=e.slides.indexOf(L)===e.activeIndex,N=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(L);k||N||F.sourceCapabilities&&F.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{r||(e.params.loop?e.slideToLoop(parseInt(L.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(L),0),r=!1)}))},I=()=>{let F=e.params.a11y;F.itemRoleDescriptionMessage&&d(e.slides,F.itemRoleDescriptionMessage),F.slideRole&&f(e.slides,F.slideRole);let L=e.slides.length;F.slideLabelMessage&&e.slides.forEach((k,N)=>{let ie=e.params.loop?parseInt(k.getAttribute("data-swiper-slide-index"),10):N,he=F.slideLabelMessage.replace(/\{\{index\}\}/,ie+1).replace(/\{\{slidesLength\}\}/,L);p(k,he)})},U=()=>{let F=e.params.a11y;e.el.append(n);let L=e.el;F.containerRoleDescriptionMessage&&d(L,F.containerRoleDescriptionMessage),F.containerMessage&&p(L,F.containerMessage),F.containerRole&&f(L,F.containerRole);let k=e.wrapperEl,N=F.id||k.getAttribute("id")||`swiper-wrapper-${c(16)}`,ie=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";g(k,N),_(k,ie),I();let{nextEl:he,prevEl:Fe}=e.navigation?e.navigation:{};he=Qe(he),Fe=Qe(Fe),he&&he.forEach(V=>D(V,N,F.nextSlideMessage)),Fe&&Fe.forEach(V=>D(V,N,F.prevSlideMessage)),S()&&Qe(e.pagination.el).forEach(H=>{H.addEventListener("keydown",w)}),bt().addEventListener("visibilitychange",R),e.el.addEventListener("focus",C,!0),e.el.addEventListener("focus",C,!0),e.el.addEventListener("pointerdown",y,!0),e.el.addEventListener("pointerup",b,!0)};function B(){n&&n.remove();let{nextEl:F,prevEl:L}=e.navigation?e.navigation:{};F=Qe(F),L=Qe(L),F&&F.forEach(N=>N.removeEventListener("keydown",w)),L&&L.forEach(N=>N.removeEventListener("keydown",w)),S()&&Qe(e.pagination.el).forEach(ie=>{ie.removeEventListener("keydown",w)}),bt().removeEventListener("visibilitychange",R),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",C,!0),e.el.removeEventListener("pointerdown",y,!0),e.el.removeEventListener("pointerup",b,!0))}i("beforeInit",()=>{n=$t("span",e.params.a11y.notificationClass),n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true")}),i("afterInit",()=>{e.params.a11y.enabled&&U()}),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&I()}),i("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&E()}),i("paginationUpdate",()=>{e.params.a11y.enabled&&A()}),i("destroy",()=>{e.params.a11y.enabled&&B()})}function E0(s){let{swiper:e,extendParams:t,on:i}=s;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let n=!1,r={},a=d=>d.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=d=>{let m=ft(),p;d?p=new URL(d):p=m.location;let g=p.pathname.slice(1).split("/").filter(w=>w!==""),_=g.length,x=g[_-2],v=g[_-1];return{key:x,value:v}},l=(d,m)=>{let p=ft();if(!n||!e.params.history.enabled)return;let g;e.params.url?g=new URL(e.params.url):g=p.location;let _=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${m}"]`):e.slides[m],x=a(_.getAttribute("data-history"));if(e.params.history.root.length>0){let w=e.params.history.root;w[w.length-1]==="/"&&(w=w.slice(0,w.length-1)),x=`${w}/${d?`${d}/`:""}${x}`}else g.pathname.includes(d)||(x=`${d?`${d}/`:""}${x}`);e.params.history.keepQuery&&(x+=g.search);let v=p.history.state;v&&v.value===x||(e.params.history.replaceState?p.history.replaceState({value:x},null,x):p.history.pushState({value:x},null,x))},c=(d,m,p)=>{if(m)for(let g=0,_=e.slides.length;g<_;g+=1){let x=e.slides[g];if(a(x.getAttribute("data-history"))===m){let w=e.getSlideIndex(x);e.slideTo(w,d,p)}}else e.slideTo(0,d,p)},u=()=>{r=o(e.params.url),c(e.params.speed,r.value,!1)},h=()=>{let d=ft();if(e.params.history){if(!d.history||!d.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(n=!0,r=o(e.params.url),!r.key&&!r.value){e.params.history.replaceState||d.addEventListener("popstate",u);return}c(0,r.value,e.params.runCallbacksOnInit),e.params.history.replaceState||d.addEventListener("popstate",u)}},f=()=>{let d=ft();e.params.history.replaceState||d.removeEventListener("popstate",u)};i("init",()=>{e.params.history.enabled&&h()}),i("destroy",()=>{e.params.history.enabled&&f()}),i("transitionEnd _freeModeNoMomentumRelease",()=>{n&&l(e.params.history.key,e.activeIndex)}),i("slideChange",()=>{n&&e.params.cssMode&&l(e.params.history.key,e.activeIndex)})}function T0(s){let{swiper:e,extendParams:t,emit:i,on:n}=s,r=!1,a=bt(),o=ft();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(f,d){if(e.virtual&&e.params.virtual.enabled){let m=e.slides.find(g=>g.getAttribute("data-hash")===d);return m?parseInt(m.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(Ft(e.slidesEl,`.${e.params.slideClass}[data-hash="${d}"], swiper-slide[data-hash="${d}"]`)[0])}}});let l=()=>{i("hashChange");let f=a.location.hash.replace("#",""),d=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],m=d?d.getAttribute("data-hash"):"";if(f!==m){let p=e.params.hashNavigation.getSlideIndex(e,f);if(typeof p>"u"||Number.isNaN(p))return;e.slideTo(p)}},c=()=>{if(!r||!e.params.hashNavigation.enabled)return;let f=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],d=f?f.getAttribute("data-hash")||f.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState?(o.history.replaceState(null,null,`#${d}`||""),i("hashSet")):(a.location.hash=d||"",i("hashSet"))},u=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;r=!0;let f=a.location.hash.replace("#","");if(f){let m=e.params.hashNavigation.getSlideIndex(e,f);e.slideTo(m||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&o.addEventListener("hashchange",l)},h=()=>{e.params.hashNavigation.watchState&&o.removeEventListener("hashchange",l)};n("init",()=>{e.params.hashNavigation.enabled&&u()}),n("destroy",()=>{e.params.hashNavigation.enabled&&h()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{r&&c()}),n("slideChange",()=>{r&&e.params.cssMode&&c()})}function A0(s){let{swiper:e,extendParams:t,on:i,emit:n,params:r}=s;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,u,h=new Date().getTime(),f,d,m,p,g,_,x;function v(L){!e||e.destroyed||!e.wrapperEl||L.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",v),!(x||L.detail&&L.detail.bySwiperTouchMove)&&y())}let w=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(c=u,f=!1);let L=e.autoplay.paused?u:h+c-new Date().getTime();e.autoplay.timeLeft=L,n("autoplayTimeLeft",L,L/l),o=requestAnimationFrame(()=>{w()})},E=()=>{let L;return e.virtual&&e.params.virtual.enabled?L=e.slides.find(N=>N.classList.contains("swiper-slide-active")):L=e.slides[e.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},M=L=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),w();let k=typeof L>"u"?e.params.autoplay.delay:L;l=e.params.autoplay.delay,c=e.params.autoplay.delay;let N=E();!Number.isNaN(N)&&N>0&&typeof L>"u"&&(k=N,l=N,c=N),u=k;let ie=e.params.speed,he=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ie,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,ie,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ie,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,ie,!0,!0),n("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return k>0?(clearTimeout(a),a=setTimeout(()=>{he()},k)):requestAnimationFrame(()=>{he()}),k},S=()=>{h=new Date().getTime(),e.autoplay.running=!0,M(),n("autoplayStart")},A=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),n("autoplayStop")},D=(L,k)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),L||(_=!0);let N=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",v):y()};if(e.autoplay.paused=!0,k){g&&(u=e.params.autoplay.delay),g=!1,N();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),N())},y=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),_?(_=!1,M(u)):M(),e.autoplay.paused=!1,n("autoplayResume"))},b=()=>{if(e.destroyed||!e.autoplay.running)return;let L=bt();L.visibilityState==="hidden"&&(_=!0,D(!0)),L.visibilityState==="visible"&&y()},R=L=>{L.pointerType==="mouse"&&(_=!0,x=!0,!(e.animating||e.autoplay.paused)&&D(!0))},C=L=>{L.pointerType==="mouse"&&(x=!1,e.autoplay.paused&&y())},I=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",R),e.el.addEventListener("pointerleave",C))},U=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",R),e.el.removeEventListener("pointerleave",C))},B=()=>{bt().addEventListener("visibilitychange",b)},F=()=>{bt().removeEventListener("visibilitychange",b)};i("init",()=>{e.params.autoplay.enabled&&(I(),B(),S())}),i("destroy",()=>{U(),F(),e.autoplay.running&&A()}),i("_freeModeStaticRelease",()=>{(m||_)&&y()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?A():D(!0,!0)}),i("beforeTransitionStart",(L,k,N)=>{e.destroyed||!e.autoplay.running||(N||!e.params.autoplay.disableOnInteraction?D(!0,!0):A())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){A();return}d=!0,m=!1,_=!1,p=setTimeout(()=>{_=!0,m=!0,D(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!d)){if(clearTimeout(p),clearTimeout(a),e.params.autoplay.disableOnInteraction){m=!1,d=!1;return}m&&e.params.cssMode&&y(),m=!1,d=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(g=!0)}),Object.assign(e.autoplay,{start:S,stop:A,pause:D,resume:y})}function C0(s){let{swiper:e,extendParams:t,on:i}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let n=!1,r=!1;e.thumbs={swiper:null};function a(){let c=e.thumbs.swiper;if(!c||c.destroyed)return;let u=c.clickedIndex,h=c.clickedSlide;if(h&&h.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof u>"u"||u===null)return;let f;c.params.loop?f=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):f=u,e.params.loop?e.slideToLoop(f):e.slideTo(f)}function o(){let{thumbs:c}=e.params;if(n)return!1;n=!0;let u=e.constructor;if(c.swiper instanceof u)e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(ga(c.swiper)){let h=Object.assign({},c.swiper);Object.assign(h,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new u(h),r=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",a),!0}function l(c){let u=e.thumbs.swiper;if(!u||u.destroyed)return;let h=u.params.slidesPerView==="auto"?u.slidesPerViewDynamic():u.params.slidesPerView,f=1,d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(f=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(f=1),f=Math.floor(f),u.slides.forEach(g=>g.classList.remove(d)),u.params.loop||u.params.virtual&&u.params.virtual.enabled)for(let g=0;g<f;g+=1)Ft(u.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(_=>{_.classList.add(d)});else for(let g=0;g<f;g+=1)u.slides[e.realIndex+g]&&u.slides[e.realIndex+g].classList.add(d);let m=e.params.thumbs.autoScrollOffset,p=m&&!u.params.loop;if(e.realIndex!==u.realIndex||p){let g=u.activeIndex,_,x;if(u.params.loop){let v=u.slides.find(w=>w.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);_=u.slides.indexOf(v),x=e.activeIndex>e.previousIndex?"next":"prev"}else _=e.realIndex,x=_>e.previousIndex?"next":"prev";p&&(_+=x==="next"?m:-1*m),u.visibleSlidesIndexes&&u.visibleSlidesIndexes.indexOf(_)<0&&(u.params.centeredSlides?_>g?_=_-Math.floor(h/2)+1:_=_+Math.floor(h/2)-1:_>g&&u.params.slidesPerGroup,u.slideTo(_,c?0:void 0))}}i("beforeInit",()=>{let{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){let u=bt(),h=()=>{let d=typeof c.swiper=="string"?u.querySelector(c.swiper):c.swiper;if(d&&d.swiper)c.swiper=d.swiper,o(),l(!0);else if(d){let m=`${e.params.eventsPrefix}init`,p=g=>{c.swiper=g.detail[0],d.removeEventListener(m,p),o(),l(!0),c.swiper.update(),e.update()};d.addEventListener(m,p)}return d},f=()=>{if(e.destroyed)return;h()||requestAnimationFrame(f)};requestAnimationFrame(f)}else o(),l(!0)}),i("slideChange update resize observerUpdate",()=>{l()}),i("setTransition",(c,u)=>{let h=e.thumbs.swiper;!h||h.destroyed||h.setTransition(u)}),i("beforeDestroy",()=>{let c=e.thumbs.swiper;!c||c.destroyed||r&&c.destroy()}),Object.assign(e.thumbs,{init:o,update:l})}function D0(s){let{swiper:e,extendParams:t,emit:i,once:n}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function r(){if(e.params.cssMode)return;let l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;let{touchEventsData:l,touches:c}=e;l.velocities.length===0&&l.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:Pi()})}function o(l){let{currentPos:c}=l;if(e.params.cssMode)return;let{params:u,wrapperEl:h,rtlTranslate:f,snapGrid:d,touchEventsData:m}=e,g=Pi()-m.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);return}if(u.freeMode.momentum){if(m.velocities.length>1){let A=m.velocities.pop(),D=m.velocities.pop(),y=A.position-D.position,b=A.time-D.time;e.velocity=y/b,e.velocity/=2,Math.abs(e.velocity)<u.freeMode.minimumVelocity&&(e.velocity=0),(b>150||Pi()-A.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=u.freeMode.momentumVelocityRatio,m.velocities.length=0;let _=1e3*u.freeMode.momentumRatio,x=e.velocity*_,v=e.translate+x;f&&(v=-v);let w=!1,E,M=Math.abs(e.velocity)*20*u.freeMode.momentumBounceRatio,S;if(v<e.maxTranslate())u.freeMode.momentumBounce?(v+e.maxTranslate()<-M&&(v=e.maxTranslate()-M),E=e.maxTranslate(),w=!0,m.allowMomentumBounce=!0):v=e.maxTranslate(),u.loop&&u.centeredSlides&&(S=!0);else if(v>e.minTranslate())u.freeMode.momentumBounce?(v-e.minTranslate()>M&&(v=e.minTranslate()+M),E=e.minTranslate(),w=!0,m.allowMomentumBounce=!0):v=e.minTranslate(),u.loop&&u.centeredSlides&&(S=!0);else if(u.freeMode.sticky){let A;for(let D=0;D<d.length;D+=1)if(d[D]>-v){A=D;break}Math.abs(d[A]-v)<Math.abs(d[A-1]-v)||e.swipeDirection==="next"?v=d[A]:v=d[A-1],v=-v}if(S&&n("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(f?_=Math.abs((-v-e.translate)/e.velocity):_=Math.abs((v-e.translate)/e.velocity),u.freeMode.sticky){let A=Math.abs((f?-v:v)-e.translate),D=e.slidesSizesGrid[e.activeIndex];A<D?_=u.speed:A<2*D?_=u.speed*1.5:_=u.speed*2.5}}else if(u.freeMode.sticky){e.slideToClosest();return}u.freeMode.momentumBounce&&w?(e.updateProgress(E),e.setTransition(_),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Bs(h,()=>{!e||e.destroyed||!m.allowMomentumBounce||(i("momentumBounce"),e.setTransition(u.speed),setTimeout(()=>{e.setTranslate(E),Bs(h,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(v),e.setTransition(_),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Bs(h,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(v),e.updateActiveIndex(),e.updateSlidesClasses()}else if(u.freeMode.sticky){e.slideToClosest();return}else u.freeMode&&i("_freeModeNoMomentumRelease");(!u.freeMode.momentum||g>=u.longSwipesMs)&&(i("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:r,onTouchMove:a,onTouchEnd:o}})}function P0(s){let{swiper:e,extendParams:t,on:i}=s;t({grid:{rows:1,fill:"column"}});let n,r,a,o,l=()=>{let p=e.params.spaceBetween;return typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*e.size:typeof p=="string"&&(p=parseFloat(p)),p},c=p=>{let{slidesPerView:g}=e.params,{rows:_,fill:x}=e.params.grid,v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:p.length;a=Math.floor(v/_),Math.floor(v/_)===v/_?n=v:n=Math.ceil(v/_)*_,g!=="auto"&&x==="row"&&(n=Math.max(n,g*_)),r=n/_},u=()=>{e.slides&&e.slides.forEach(p=>{p.swiperSlideGridSet&&(p.style.height="",p.style[e.getDirectionLabel("margin-top")]="")})},h=(p,g,_)=>{let{slidesPerGroup:x}=e.params,v=l(),{rows:w,fill:E}=e.params.grid,M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:_.length,S,A,D;if(E==="row"&&x>1){let y=Math.floor(p/(x*w)),b=p-w*x*y,R=y===0?x:Math.min(Math.ceil((M-y*w*x)/w),x);D=Math.floor(b/R),A=b-D*R+y*x,S=A+D*n/w,g.style.order=S}else E==="column"?(A=Math.floor(p/w),D=p-A*w,(A>a||A===a&&D===w-1)&&(D+=1,D>=w&&(D=0,A+=1))):(D=Math.floor(p/r),A=p-D*r);g.row=D,g.column=A,g.style.height=`calc((100% - ${(w-1)*v}px) / ${w})`,g.style[e.getDirectionLabel("margin-top")]=D!==0?v&&`${v}px`:"",g.swiperSlideGridSet=!0},f=(p,g)=>{let{centeredSlides:_,roundLengths:x}=e.params,v=l(),{rows:w}=e.params.grid;if(e.virtualSize=(p+v)*n,e.virtualSize=Math.ceil(e.virtualSize/w)-v,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),_){let E=[];for(let M=0;M<g.length;M+=1){let S=g[M];x&&(S=Math.floor(S)),g[M]<e.virtualSize+g[0]&&E.push(S)}g.splice(0,g.length),g.push(...E)}},d=()=>{o=e.params.grid&&e.params.grid.rows>1},m=()=>{let{params:p,el:g}=e,_=p.grid&&p.grid.rows>1;o&&!_?(g.classList.remove(`${p.containerModifierClass}grid`,`${p.containerModifierClass}grid-column`),a=1,e.emitContainerClasses()):!o&&_&&(g.classList.add(`${p.containerModifierClass}grid`),p.grid.fill==="column"&&g.classList.add(`${p.containerModifierClass}grid-column`),e.emitContainerClasses()),o=_};i("init",d),i("update",m),e.grid={initSlides:c,unsetSlides:u,updateSlide:h,updateWrapperSize:f}}function zw(s){let e=this,{params:t,slidesEl:i}=e;t.loop&&e.loopDestroy();let n=r=>{if(typeof r=="string"){let a=document.createElement("div");a.innerHTML=r,i.append(a.children[0]),a.innerHTML=""}else i.append(r)};if(typeof s=="object"&&"length"in s)for(let r=0;r<s.length;r+=1)s[r]&&n(s[r]);else n(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function kw(s){let e=this,{params:t,activeIndex:i,slidesEl:n}=e;t.loop&&e.loopDestroy();let r=i+1,a=o=>{if(typeof o=="string"){let l=document.createElement("div");l.innerHTML=o,n.prepend(l.children[0]),l.innerHTML=""}else n.prepend(o)};if(typeof s=="object"&&"length"in s){for(let o=0;o<s.length;o+=1)s[o]&&a(s[o]);r=i+s.length}else a(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(r,0,!1)}function Vw(s,e){let t=this,{params:i,activeIndex:n,slidesEl:r}=t,a=n;i.loop&&(a-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());let o=t.slides.length;if(s<=0){t.prependSlide(e);return}if(s>=o){t.appendSlide(e);return}let l=a>s?a+1:a,c=[];for(let u=o-1;u>=s;u-=1){let h=t.slides[u];h.remove(),c.unshift(h)}if(typeof e=="object"&&"length"in e){for(let u=0;u<e.length;u+=1)e[u]&&r.append(e[u]);l=a>s?a+e.length:a}else r.append(e);for(let u=0;u<c.length;u+=1)r.append(c[u]);t.recalcSlides(),i.loop&&t.loopCreate(),(!i.observer||t.isElement)&&t.update(),i.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function Hw(s){let e=this,{params:t,activeIndex:i}=e,n=i;t.loop&&(n-=e.loopedSlides,e.loopDestroy());let r=n,a;if(typeof s=="object"&&"length"in s){for(let o=0;o<s.length;o+=1)a=s[o],e.slides[a]&&e.slides[a].remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=s,e.slides[a]&&e.slides[a].remove(),a<r&&(r-=1),r=Math.max(r,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(r+e.loopedSlides,0,!1):e.slideTo(r,0,!1)}function Gw(){let s=this,e=[];for(let t=0;t<s.slides.length;t+=1)e.push(t);s.removeSlide(e)}function R0(s){let{swiper:e}=s;Object.assign(e,{appendSlide:zw.bind(e),prependSlide:kw.bind(e),addSlide:Vw.bind(e),removeSlide:Hw.bind(e),removeAllSlides:Gw.bind(e)})}function pn(s){let{effect:e,swiper:t,on:i,setTranslate:n,setTransition:r,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=s;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);let h=a?a():{};Object.assign(t.params,h),Object.assign(t.originalParams,h)}),i("setTranslate",()=>{t.params.effect===e&&n()}),i("setTransition",(h,f)=>{t.params.effect===e&&r(f)}),i("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(h=>{h.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let u;i("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(n(),u=!1)}))})}function Hn(s,e){let t=ki(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Vs(s){let{swiper:e,duration:t,transformElements:i,allSlides:n}=s,{activeIndex:r}=e,a=o=>o.parentElement?o.parentElement:e.slides.find(c=>c.shadowRoot&&c.shadowRoot===o.parentNode);if(e.params.virtualTranslate&&t!==0){let o=!1,l;n?l=i:l=i.filter(c=>{let u=c.classList.contains("swiper-slide-transform")?a(c):c;return e.getSlideIndex(u)===r}),l.forEach(c=>{Bs(c,()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;let u=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(u)})})}}function I0(s){let{swiper:e,extendParams:t,on:i}=s;t({fadeEffect:{crossFade:!1}}),pn({effect:"fade",swiper:e,on:i,setTranslate:()=>{let{slides:a}=e,o=e.params.fadeEffect;for(let l=0;l<a.length;l+=1){let c=e.slides[l],h=-c.swiperSlideOffset;e.params.virtualTranslate||(h-=e.translate);let f=0;e.isHorizontal()||(f=h,h=0);let d=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),m=Hn(o,c);m.style.opacity=d,m.style.transform=`translate3d(${h}px, ${f}px, 0px)`}},setTransition:a=>{let o=e.slides.map(l=>ki(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`}),Vs({swiper:e,duration:a,transformElements:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function L0(s){let{swiper:e,extendParams:t,on:i}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});let n=(l,c,u)=>{let h=u?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),f=u?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");h||(h=$t("div",`swiper-slide-shadow-cube swiper-slide-shadow-${u?"left":"top"}`.split(" ")),l.append(h)),f||(f=$t("div",`swiper-slide-shadow-cube swiper-slide-shadow-${u?"right":"bottom"}`.split(" ")),l.append(f)),h&&(h.style.opacity=Math.max(-c,0)),f&&(f.style.opacity=Math.max(c,0))};pn({effect:"cube",swiper:e,on:i,setTranslate:()=>{let{el:l,wrapperEl:c,slides:u,width:h,height:f,rtlTranslate:d,size:m,browser:p}=e,g=zs(e),_=e.params.cubeEffect,x=e.isHorizontal(),v=e.virtual&&e.params.virtual.enabled,w=0,E;_.shadow&&(x?(E=e.wrapperEl.querySelector(".swiper-cube-shadow"),E||(E=$t("div","swiper-cube-shadow"),e.wrapperEl.append(E)),E.style.height=`${h}px`):(E=l.querySelector(".swiper-cube-shadow"),E||(E=$t("div","swiper-cube-shadow"),l.append(E))));for(let S=0;S<u.length;S+=1){let A=u[S],D=S;v&&(D=parseInt(A.getAttribute("data-swiper-slide-index"),10));let y=D*90,b=Math.floor(y/360);d&&(y=-y,b=Math.floor(-y/360));let R=Math.max(Math.min(A.progress,1),-1),C=0,I=0,U=0;D%4===0?(C=-b*4*m,U=0):(D-1)%4===0?(C=0,U=-b*4*m):(D-2)%4===0?(C=m+b*4*m,U=m):(D-3)%4===0&&(C=-m,U=3*m+m*4*b),d&&(C=-C),x||(I=C,C=0);let B=`rotateX(${g(x?0:-y)}deg) rotateY(${g(x?y:0)}deg) translate3d(${C}px, ${I}px, ${U}px)`;R<=1&&R>-1&&(w=D*90+R*90,d&&(w=-D*90-R*90)),A.style.transform=B,_.slideShadows&&n(A,R,x)}if(c.style.transformOrigin=`50% 50% -${m/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${m/2}px`,_.shadow)if(x)E.style.transform=`translate3d(0px, ${h/2+_.shadowOffset}px, ${-h/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${_.shadowScale})`;else{let S=Math.abs(w)-Math.floor(Math.abs(w)/90)*90,A=1.5-(Math.sin(S*2*Math.PI/360)/2+Math.cos(S*2*Math.PI/360)/2),D=_.shadowScale,y=_.shadowScale/A,b=_.shadowOffset;E.style.transform=`scale3d(${D}, 1, ${y}) translate3d(0px, ${f/2+b}px, ${-f/2/y}px) rotateX(-89.99deg)`}let M=(p.isSafari||p.isWebView)&&p.needPerspectiveFix?-m/2:0;c.style.transform=`translate3d(0px,0,${M}px) rotateX(${g(e.isHorizontal()?0:w)}deg) rotateY(${g(e.isHorizontal()?-w:0)}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${M}px`)},setTransition:l=>{let{el:c,slides:u}=e;if(u.forEach(h=>{h.style.transitionDuration=`${l}ms`,h.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${l}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){let h=c.querySelector(".swiper-cube-shadow");h&&(h.style.transitionDuration=`${l}ms`)}},recreateShadows:()=>{let l=e.isHorizontal();e.slides.forEach(c=>{let u=Math.max(Math.min(c.progress,1),-1);n(c,u,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Gn(s,e,t){let i=`swiper-slide-shadow${t?`-${t}`:""}${s?` swiper-slide-shadow-${s}`:""}`,n=ki(e),r=n.querySelector(`.${i.split(" ").join(".")}`);return r||(r=$t("div",i.split(" ")),n.append(r)),r}function F0(s){let{swiper:e,extendParams:t,on:i}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0}});let n=(l,c)=>{let u=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),h=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");u||(u=Gn("flip",l,e.isHorizontal()?"left":"top")),h||(h=Gn("flip",l,e.isHorizontal()?"right":"bottom")),u&&(u.style.opacity=Math.max(-c,0)),h&&(h.style.opacity=Math.max(c,0))};pn({effect:"flip",swiper:e,on:i,setTranslate:()=>{let{slides:l,rtlTranslate:c}=e,u=e.params.flipEffect,h=zs(e);for(let f=0;f<l.length;f+=1){let d=l[f],m=d.progress;e.params.flipEffect.limitRotation&&(m=Math.max(Math.min(d.progress,1),-1));let p=d.swiperSlideOffset,_=-180*m,x=0,v=e.params.cssMode?-p-e.translate:-p,w=0;e.isHorizontal()?c&&(_=-_):(w=v,v=0,x=-_,_=0),d.style.zIndex=-Math.abs(Math.round(m))+l.length,u.slideShadows&&n(d,m);let E=`translate3d(${v}px, ${w}px, 0px) rotateX(${h(x)}deg) rotateY(${h(_)}deg)`,M=Hn(u,d);M.style.transform=E}},setTransition:l=>{let c=e.slides.map(u=>ki(u));c.forEach(u=>{u.style.transitionDuration=`${l}ms`,u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>{h.style.transitionDuration=`${l}ms`})}),Vs({swiper:e,duration:l,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(l=>{let c=l.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(l.progress,1),-1)),n(l,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function N0(s){let{swiper:e,extendParams:t,on:i}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),pn({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{let{width:a,height:o,slides:l,slidesSizesGrid:c}=e,u=e.params.coverflowEffect,h=e.isHorizontal(),f=e.translate,d=h?-f+a/2:-f+o/2,m=h?u.rotate:-u.rotate,p=u.depth,g=zs(e);for(let _=0,x=l.length;_<x;_+=1){let v=l[_],w=c[_],E=v.swiperSlideOffset,M=(d-E-w/2)/w,S=typeof u.modifier=="function"?u.modifier(M):M*u.modifier,A=h?m*S:0,D=h?0:m*S,y=-p*Math.abs(S),b=u.stretch;typeof b=="string"&&b.indexOf("%")!==-1&&(b=parseFloat(u.stretch)/100*w);let R=h?0:b*S,C=h?b*S:0,I=1-(1-u.scale)*Math.abs(S);Math.abs(C)<.001&&(C=0),Math.abs(R)<.001&&(R=0),Math.abs(y)<.001&&(y=0),Math.abs(A)<.001&&(A=0),Math.abs(D)<.001&&(D=0),Math.abs(I)<.001&&(I=0);let U=`translate3d(${C}px,${R}px,${y}px)  rotateX(${g(D)}deg) rotateY(${g(A)}deg) scale(${I})`,B=Hn(u,v);if(B.style.transform=U,v.style.zIndex=-Math.abs(Math.round(S))+1,u.slideShadows){let F=h?v.querySelector(".swiper-slide-shadow-left"):v.querySelector(".swiper-slide-shadow-top"),L=h?v.querySelector(".swiper-slide-shadow-right"):v.querySelector(".swiper-slide-shadow-bottom");F||(F=Gn("coverflow",v,h?"left":"top")),L||(L=Gn("coverflow",v,h?"right":"bottom")),F&&(F.style.opacity=S>0?S:0),L&&(L.style.opacity=-S>0?-S:0)}}},setTransition:a=>{e.slides.map(l=>ki(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function O0(s){let{swiper:e,extendParams:t,on:i}=s;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let n=o=>typeof o=="string"?o:`${o}px`;pn({effect:"creative",swiper:e,on:i,setTranslate:()=>{let{slides:o,wrapperEl:l,slidesSizesGrid:c}=e,u=e.params.creativeEffect,{progressMultiplier:h}=u,f=e.params.centeredSlides,d=zs(e);if(f){let m=c[0]/2-e.params.slidesOffsetBefore||0;l.style.transform=`translateX(calc(50% - ${m}px))`}for(let m=0;m<o.length;m+=1){let p=o[m],g=p.progress,_=Math.min(Math.max(p.progress,-u.limitProgress),u.limitProgress),x=_;f||(x=Math.min(Math.max(p.originalProgress,-u.limitProgress),u.limitProgress));let v=p.swiperSlideOffset,w=[e.params.cssMode?-v-e.translate:-v,0,0],E=[0,0,0],M=!1;e.isHorizontal()||(w[1]=w[0],w[0]=0);let S={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};_<0?(S=u.next,M=!0):_>0&&(S=u.prev,M=!0),w.forEach((I,U)=>{w[U]=`calc(${I}px + (${n(S.translate[U])} * ${Math.abs(_*h)}))`}),E.forEach((I,U)=>{let B=S.rotate[U]*Math.abs(_*h);E[U]=B}),p.style.zIndex=-Math.abs(Math.round(g))+o.length;let A=w.join(", "),D=`rotateX(${d(E[0])}deg) rotateY(${d(E[1])}deg) rotateZ(${d(E[2])}deg)`,y=x<0?`scale(${1+(1-S.scale)*x*h})`:`scale(${1-(1-S.scale)*x*h})`,b=x<0?1+(1-S.opacity)*x*h:1-(1-S.opacity)*x*h,R=`translate3d(${A}) ${D} ${y}`;if(M&&S.shadow||!M){let I=p.querySelector(".swiper-slide-shadow");if(!I&&S.shadow&&(I=Gn("creative",p)),I){let U=u.shadowPerProgress?_*(1/u.limitProgress):_;I.style.opacity=Math.min(Math.max(Math.abs(U),0),1)}}let C=Hn(u,p);C.style.transform=R,C.style.opacity=b,S.origin&&(C.style.transformOrigin=S.origin)}},setTransition:o=>{let l=e.slides.map(c=>ki(c));l.forEach(c=>{c.style.transitionDuration=`${o}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(u=>{u.style.transitionDuration=`${o}ms`})}),Vs({swiper:e,duration:o,transformElements:l,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function U0(s){let{swiper:e,extendParams:t,on:i}=s;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),pn({effect:"cards",swiper:e,on:i,setTranslate:()=>{let{slides:a,activeIndex:o,rtlTranslate:l}=e,c=e.params.cardsEffect,{startTranslate:u,isTouched:h}=e.touchEventsData,f=l?-e.translate:e.translate;for(let d=0;d<a.length;d+=1){let m=a[d],p=m.progress,g=Math.min(Math.max(p,-4),4),_=m.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(_-=a[0].swiperSlideOffset);let x=e.params.cssMode?-_-e.translate:-_,v=0,w=-100*Math.abs(g),E=1,M=-c.perSlideRotate*g,S=c.perSlideOffset-Math.abs(g)*.75,A=e.virtual&&e.params.virtual.enabled?e.virtual.from+d:d,D=(A===o||A===o-1)&&g>0&&g<1&&(h||e.params.cssMode)&&f<u,y=(A===o||A===o+1)&&g<0&&g>-1&&(h||e.params.cssMode)&&f>u;if(D||y){let I=(1-Math.abs((Math.abs(g)-.5)/.5))**.5;M+=-28*g*I,E+=-.5*I,S+=96*I,v=`${-25*I*Math.abs(g)}%`}if(g<0?x=`calc(${x}px ${l?"-":"+"} (${S*Math.abs(g)}%))`:g>0?x=`calc(${x}px ${l?"-":"+"} (-${S*Math.abs(g)}%))`:x=`${x}px`,!e.isHorizontal()){let I=v;v=x,x=I}let b=g<0?`${1+(1-E)*g}`:`${1-(1-E)*g}`,R=`
        translate3d(${x}, ${v}, ${w}px)
        rotateZ(${c.rotate?l?-M:M:0}deg)
        scale(${b})
      `;if(c.slideShadows){let I=m.querySelector(".swiper-slide-shadow");I||(I=Gn("cards",m)),I&&(I.style.opacity=Math.min(Math.max((Math.abs(g)-.5)/.5,0),1))}m.style.zIndex=-Math.abs(Math.round(p))+a.length;let C=Hn(c,m);C.style.transform=R}},setTransition:a=>{let o=e.slides.map(l=>ki(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${a}ms`})}),Vs({swiper:e,duration:a,transformElements:o})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:3,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}var Ww=[m0,g0,_0,v0,x0,y0,w0,b0,S0,M0,E0,T0,A0,C0,D0,P0,R0,I0,L0,F0,N0,O0,U0];ks.use(Ww);function B0(){document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[swiper-main]").forEach(e=>{if(e&&e instanceof Element)try{let t=new ks(e,{spaceBetween:16,grabCursor:!0,a11y:!1,freeMode:!0,speed:11e3,loop:!0,slidesPerView:"auto",autoplay:{delay:0,disableOnInteraction:!1},breakpoints:{0:{spaceBetween:30},480:{spaceBetween:30},767:{spaceBetween:40},992:{spaceBetween:40}}});console.log("Swiper initialized for element:",e),t.autoplay?(console.log("Autoplay available:",t.autoplay),t.autoplay.start(),console.log("Autoplay started for swiper element:",e)):console.warn("Autoplay is not available for this swiper instance.")}catch(t){console.error("Swiper initialization failed for element:",e,t)}else console.error("Swiper element not found or invalid element.")})})}var lp="169";var Xw=0,z0=1,Yw=2;var z_=1,qw=2,fs=3,Ks=0,Gi=1,ms=2,ri=0,Fa=1,Fc=2,k0=3,V0=4,nu=5,Yn=100,$w=101,Zw=102,Kw=103,Jw=104,su=200,jw=201,Qw=202,eb=203,Xd=204,Yd=205,cp=206,tb=207,up=208,ib=209,nb=210,sb=211,rb=212,ab=213,ob=214,qd=0,$d=1,Zd=2,Ba=3,Kd=4,Jd=5,jd=6,Qd=7,k_=0,lb=1,cb=2,Zs=0,ub=1,hb=2,db=3,fb=4,pb=5,mb=6,gb=7;var V_=300,za=301,ka=302,ef=303,tf=304,ru=306,nf=1e3,Ur=1001,sf=1002,Ii=1003,_b=1004;var ac=1005;var Rn=1006,dd=1007;var Br=1008;var vs=1009,H_=1010,G_=1011,Xo=1012,hp=1013,zr=1014,gs=1015,Wi=1016,dp=1017,fp=1018,Js=1020,W_=35902,X_=1021,Y_=1022,In=1023,q_=1024,$_=1025,Na=1026,js=1027,Z_=1028,pp=1029,K_=1030,mp=1031;var gp=1033,Cc=33776,Dc=33777,Pc=33778,Rc=33779,rf=35840,af=35841,of=35842,lf=35843,cf=36196,uf=37492,hf=37496,df=37808,ff=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,yf=37816,wf=37817,bf=37818,Sf=37819,Mf=37820,Ef=37821,Ic=36492,Tf=36494,Af=36495,J_=36283,Cf=36284,Df=36285,Pf=36286;var Nc=2300,Rf=2301,fd=2302,H0=2400,G0=2401,W0=2402;var vb=3200,xb=3201;var j_=0,yb=1,$s="",Wn="srgb",tr="srgb-linear",_p="display-p3",au="display-p3-linear",Oc="linear",Ct="srgb",Uc="rec709",Bc="p3";var va=7680;var X0=519,wb=512,bb=513,Sb=514,Q_=515,Mb=516,Eb=517,Tb=518,Ab=519,Y0=35044;var q0="300 es",_s=2e3,zc=2001,Qs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},_i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pd=Math.PI/180,If=180/Math.PI;function jo(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_i[s&255]+_i[s>>8&255]+_i[s>>16&255]+_i[s>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[t&63|128]+_i[t>>8&255]+"-"+_i[t>>16&255]+_i[t>>24&255]+_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]).toLowerCase()}function Hi(s,e,t){return Math.max(e,Math.min(t,s))}function Cb(s,e){return(s%e+e)%e}function md(s,e,t){return(1-t)*s+t*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ke=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Hi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class s{constructor(e,t,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],p=n[0],g=n[3],_=n[6],x=n[1],v=n[4],w=n[7],E=n[2],M=n[5],S=n[8];return r[0]=a*p+o*x+l*E,r[3]=a*g+o*v+l*M,r[6]=a*_+o*w+l*S,r[1]=c*p+u*x+h*E,r[4]=c*g+u*v+h*M,r[7]=c*_+u*w+h*S,r[2]=f*p+d*x+m*E,r[5]=f*g+d*v+m*M,r[8]=f*_+d*w+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,m=t*h+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=h*p,e[1]=(n*c-u*i)*p,e[2]=(o*i-n*a)*p,e[3]=f*p,e[4]=(u*t-n*l)*p,e[5]=(n*r-o*t)*p,e[6]=d*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gd.makeScale(e,t)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gd=new it;function ev(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Db(){let s=Yo("canvas");return s.style.display="block",s}var $0={};function Lc(s){s in $0||($0[s]=!0,console.warn(s))}function Pb(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Rb(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ib(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Z0=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),K0=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[tr]:{transfer:Oc,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Wn]:{transfer:Ct,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[au]:{transfer:Oc,primaries:Bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(K0),fromReference:s=>s.applyMatrix3(Z0)},[_p]:{transfer:Ct,primaries:Bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(K0),fromReference:s=>s.applyMatrix3(Z0).convertLinearToSRGB()}},Lb=new Set([tr,au]),mt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lb.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=Uo[e].toReference,n=Uo[t].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Uo[s].primaries},getTransfer:function(s){return s===$s?Oc:Uo[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Uo[e].luminanceCoefficients)}};function Oa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _d(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xa,Lf=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xa===void 0&&(xa=Yo("canvas")),xa.width=e.width,xa.height=e.height;let i=xa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Oa(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oa(t[i]/255)*255):t[i]=Oa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fb=0,kc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(vd(n[a].image)):r.push(vd(n[a]))}else r=vd(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nb=0,tn=class s extends Qs{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=Ur,n=Ur,r=Rn,a=Br,o=In,l=vs,c=s.DEFAULT_ANISOTROPY,u=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=jo(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=V_;tn.DEFAULT_ANISOTROPY=1;var vt=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],p=l[2],g=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(d+1)/2,E=(_+1)/2,M=(u+f)/4,S=(h+p)/4,A=(m+g)/4;return v>w&&v>E?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=M/i,r=S/i):w>E?w<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(w),i=M/n,r=A/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=S/r,n=A/r),this.set(i,n,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-p)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ff=class extends Qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new tn(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Ff{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vc=class extends tn{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nf=class extends tn{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],f=r[a+0],d=r[a+1],m=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==m){let g=1-o,_=l*f+c*d+u*m+h*p,x=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){let E=Math.sqrt(v),M=Math.atan2(E,_*x);g=Math.sin(g*M)/E,o=Math.sin(o*M)/E}let w=o*x;if(l=l*g+f*w,c=c*g+d*w,u=u*g+m*w,h=h*g+p*w,g===1-o){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),f=l(i/2),d=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Hi(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(J0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(J0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Hi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xd=new Q,J0=new er,kr=class{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),lc.subVectors(this.max,Bo),ya.subVectors(e.a,Bo),wa.subVectors(e.b,Bo),ba.subVectors(e.c,Bo),Hs.subVectors(wa,ya),Gs.subVectors(ba,wa),Cr.subVectors(ya,ba);let t=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-Cr.z,Cr.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,Cr.z,0,-Cr.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-Cr.y,Cr.x,0];return!yd(t,ya,wa,ba,lc)||(t=[1,0,0,0,1,0,0,0,1],!yd(t,ya,wa,ba,lc))?!1:(cc.crossVectors(Hs,Gs),t=[cc.x,cc.y,cc.z],yd(t,ya,wa,ba,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ls=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Cn=new Q,oc=new kr,ya=new Q,wa=new Q,ba=new Q,Hs=new Q,Gs=new Q,Cr=new Q,Bo=new Q,lc=new Q,cc=new Q,Dr=new Q;function yd(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Dr.fromArray(s,r);let o=n.x*Math.abs(Dr.x)+n.y*Math.abs(Dr.y)+n.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=i.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ob=new kr,zo=new Q,wd=new Q,qo=class{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ob.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);let t=zo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(zo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(wd)),this.expandByPoint(zo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cs=new Q,bd=new Q,uc=new Q,Ws=new Q,Sd=new Q,hc=new Q,Md=new Q,Of=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){bd.copy(e).add(t).multiplyScalar(.5),uc.copy(t).sub(e).normalize(),Ws.copy(this.origin).sub(bd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(uc),o=Ws.dot(this.direction),l=-Ws.dot(uc),c=Ws.lengthSq(),u=Math.abs(1-a*a),h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let p=1/u;h*=p,f*=p,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(bd).addScaledVector(uc,f),d}intersectSphere(e,t){cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),n=cs.dot(cs)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,n,r){Sd.subVectors(t,e),hc.subVectors(i,e),Md.crossVectors(Sd,hc);let a=this.direction.dot(Md),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ws.subVectors(this.origin,e);let l=o*this.direction.dot(hc.crossVectors(Ws,hc));if(l<0)return null;let c=o*this.direction.dot(Sd.cross(Ws));if(c<0||l+c>a)return null;let u=-o*Ws.dot(Md);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class s{constructor(e,t,i,n,r,a,o,l,c,u,h,f,d,m,p,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,h,f,d,m,p,g)}set(e,t,i,n,r,a,o,l,c,u,h,f,d,m,p,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=m,_[11]=p,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Sa.setFromMatrixColumn(e,0).length(),r=1/Sa.setFromMatrixColumn(e,1).length(),a=1/Sa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,d=a*h,m=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,p=c*h;t[0]=f+p*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=p+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,p=c*h;t[0]=f-p*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=p-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,d=a*h,m=o*u,p=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,p=o*c;t[0]=l*u,t[4]=p-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-p*h}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Bb)}lookAt(e,t,i){let n=this.elements;return ji.subVectors(e,t),ji.lengthSq()===0&&(ji.z=1),ji.normalize(),Xs.crossVectors(i,ji),Xs.lengthSq()===0&&(Math.abs(i.z)===1?ji.x+=1e-4:ji.z+=1e-4,ji.normalize(),Xs.crossVectors(i,ji)),Xs.normalize(),dc.crossVectors(ji,Xs),n[0]=Xs.x,n[4]=dc.x,n[8]=ji.x,n[1]=Xs.y,n[5]=dc.y,n[9]=ji.y,n[2]=Xs.z,n[6]=dc.z,n[10]=ji.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],p=i[6],g=i[10],_=i[14],x=i[3],v=i[7],w=i[11],E=i[15],M=n[0],S=n[4],A=n[8],D=n[12],y=n[1],b=n[5],R=n[9],C=n[13],I=n[2],U=n[6],B=n[10],F=n[14],L=n[3],k=n[7],N=n[11],ie=n[15];return r[0]=a*M+o*y+l*I+c*L,r[4]=a*S+o*b+l*U+c*k,r[8]=a*A+o*R+l*B+c*N,r[12]=a*D+o*C+l*F+c*ie,r[1]=u*M+h*y+f*I+d*L,r[5]=u*S+h*b+f*U+d*k,r[9]=u*A+h*R+f*B+d*N,r[13]=u*D+h*C+f*F+d*ie,r[2]=m*M+p*y+g*I+_*L,r[6]=m*S+p*b+g*U+_*k,r[10]=m*A+p*R+g*B+_*N,r[14]=m*D+p*C+g*F+_*ie,r[3]=x*M+v*y+w*I+E*L,r[7]=x*S+v*b+w*U+E*k,r[11]=x*A+v*R+w*B+E*N,r[15]=x*D+v*C+w*F+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],p=e[7],g=e[11],_=e[15];return m*(+r*l*h-n*c*h-r*o*f+i*c*f+n*o*d-i*l*d)+p*(+t*l*d-t*c*f+r*a*f-n*a*d+n*c*u-r*l*u)+g*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+_*(-n*o*u-t*l*h+t*o*f+n*a*h-i*a*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],p=e[13],g=e[14],_=e[15],x=h*g*c-p*f*c+p*l*d-o*g*d-h*l*_+o*f*_,v=m*f*c-u*g*c-m*l*d+a*g*d+u*l*_-a*f*_,w=u*p*c-m*h*c+m*o*d-a*p*d-u*o*_+a*h*_,E=m*h*l-u*p*l-m*o*f+a*p*f+u*o*g-a*h*g,M=t*x+i*v+n*w+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/M;return e[0]=x*S,e[1]=(p*f*r-h*g*r-p*n*d+i*g*d+h*n*_-i*f*_)*S,e[2]=(o*g*r-p*l*r+p*n*c-i*g*c-o*n*_+i*l*_)*S,e[3]=(h*l*r-o*f*r-h*n*c+i*f*c+o*n*d-i*l*d)*S,e[4]=v*S,e[5]=(u*g*r-m*f*r+m*n*d-t*g*d-u*n*_+t*f*_)*S,e[6]=(m*l*r-a*g*r-m*n*c+t*g*c+a*n*_-t*l*_)*S,e[7]=(a*f*r-u*l*r+u*n*c-t*f*c-a*n*d+t*l*d)*S,e[8]=w*S,e[9]=(m*h*r-u*p*r-m*i*d+t*p*d+u*i*_-t*h*_)*S,e[10]=(a*p*r-m*o*r+m*i*c-t*p*c-a*i*_+t*o*_)*S,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*S,e[12]=E*S,e[13]=(u*p*n-m*h*n+m*i*f-t*p*f-u*i*g+t*h*g)*S,e[14]=(m*o*n-a*p*n-m*i*l+t*p*l+a*i*g-t*o*g)*S,e[15]=(a*h*n-u*o*n+u*i*l-t*h*l-a*i*f+t*o*f)*S,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,m=r*h,p=a*u,g=a*h,_=o*h,x=l*c,v=l*u,w=l*h,E=i.x,M=i.y,S=i.z;return n[0]=(1-(p+_))*E,n[1]=(d+w)*E,n[2]=(m-v)*E,n[3]=0,n[4]=(d-w)*M,n[5]=(1-(f+_))*M,n[6]=(g+x)*M,n[7]=0,n[8]=(m+v)*S,n[9]=(g-x)*S,n[10]=(1-(f+p))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=Sa.set(n[0],n[1],n[2]).length(),a=Sa.set(n[4],n[5],n[6]).length(),o=Sa.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Dn.copy(this);let c=1/r,u=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=_s){let l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n),d,m;if(o===_s)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===zc)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=_s){let l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(a-r),f=(t+e)*c,d=(i+n)*u,m,p;if(o===_s)m=(a+r)*h,p=-2*h;else if(o===zc)m=r*h,p=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=p,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Sa=new Q,Dn=new Dt,Ub=new Q(0,0,0),Bb=new Q(1,1,1),Xs=new Q,dc=new Q,ji=new Q,j0=new Dt,Q0=new er,xs=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Hi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Hi(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Hi(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Hi(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Hi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Hi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xs.DEFAULT_ORDER="XYZ";var Hc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zb=0,e_=new Q,Ma=new er,us=new Dt,fc=new Q,ko=new Q,kb=new Q,Vb=new er,t_=new Q(1,0,0),i_=new Q(0,1,0),n_=new Q(0,0,1),s_={type:"added"},Hb={type:"removed"},Ea={type:"childadded",child:null},Ed={type:"childremoved",child:null},vn=class s extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new Q,t=new xs,i=new er,n=new Q(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Dt},normalMatrix:{value:new it}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,t){return e_.copy(e).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fc.copy(e):fc.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(ko,fc,this.up):us.lookAt(fc,ko,this.up),this.quaternion.setFromRotationMatrix(us),n&&(us.extractRotation(n.matrixWorld),Ma.setFromRotationMatrix(us),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hb),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};vn.DEFAULT_UP=new Q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new Q,hs=new Q,Td=new Q,ds=new Q,Ta=new Q,Aa=new Q,r_=new Q,Ad=new Q,Cd=new Q,Dd=new Q,Pd=new vt,Rd=new vt,Id=new vt,Nr=class s{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Pn.subVectors(e,t),n.cross(Pn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Pn.subVectors(n,t),hs.subVectors(i,t),Td.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(hs),l=Pn.dot(Td),c=hs.dot(hs),u=hs.dot(Td),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ds.x),l.addScaledVector(a,ds.y),l.addScaledVector(o,ds.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Pd.setScalar(0),Rd.setScalar(0),Id.setScalar(0),Pd.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Pd,r.x),a.addScaledVector(Rd,r.y),a.addScaledVector(Id,r.z),a}static isFrontFacing(e,t,i,n){return Pn.subVectors(i,t),hs.subVectors(e,t),Pn.cross(hs).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Pn.cross(hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Ta.subVectors(n,i),Aa.subVectors(r,i),Ad.subVectors(e,i);let l=Ta.dot(Ad),c=Aa.dot(Ad);if(l<=0&&c<=0)return t.copy(i);Cd.subVectors(e,n);let u=Ta.dot(Cd),h=Aa.dot(Cd);if(u>=0&&h<=u)return t.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ta,a);Dd.subVectors(e,r);let d=Ta.dot(Dd),m=Aa.dot(Dd);if(m>=0&&d<=m)return t.copy(r);let p=d*c-l*m;if(p<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Aa,o);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return r_.subVectors(r,n),o=(h-u)/(h-u+(d-m)),t.copy(n).addScaledVector(r_,o);let _=1/(g+p+f);return a=p*_,o=f*_,t.copy(i).addScaledVector(Ta,a).addScaledVector(Aa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=mt.workingColorSpace){if(e=Cb(e,1),t=Hi(t,0,1),i=Hi(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ld(a,r,e+1/3),this.g=Ld(a,r,e),this.b=Ld(a,r,e-1/3)}return mt.toWorkingColorSpace(this,n),this}setStyle(e,t=Wn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){let i=tv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=_d(e.r),this.g=_d(e.g),this.b=_d(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return mt.fromWorkingColorSpace(vi.copy(this),e),Math.round(Hi(vi.r*255,0,255))*65536+Math.round(Hi(vi.g*255,0,255))*256+Math.round(Hi(vi.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(vi.copy(this),t);let i=vi.r,n=vi.g,r=vi.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=Wn){mt.fromWorkingColorSpace(vi.copy(this),e);let t=vi.r,i=vi.g,n=vi.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(pc);let i=md(Ys.h,pc.h,t),n=md(Ys.s,pc.s,t),r=md(Ys.l,pc.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vi=new Ze;Ze.NAMES=tv;var Gb=0,Vr=class extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Fa,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Yd,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(i.blending=this.blending),this.side!==Ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==va&&(i.stencilFail=this.stencilFail),this.stencilZFail!==va&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==va&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Va=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=k_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new Q,mc=new ke,gn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Y0,this.updateRanges=[],this.gpuType=gs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vi(t,this.array),i=Vi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Vi(t,this.array),i=Vi(i,this.array),n=Vi(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Vi(t,this.array),i=Vi(i,this.array),n=Vi(n,this.array),r=Vi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y0&&(e.usage=this.usage),e}};var Gc=class extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Wc=class extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var _n=class extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wb=0,mn=new Dt,Fd=new vn,Ca=new Q,Qi=new kr,Vo=new kr,si=new Q,ys=class s extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?Wc:Gc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Qi.setFromBufferAttribute(r),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){let i=this.boundingSphere.center;if(Qi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Vo.setFromBufferAttribute(o),this.morphTargetsRelative?(si.addVectors(Qi.min,Vo.min),Qi.expandByPoint(si),si.addVectors(Qi.max,Vo.max),Qi.expandByPoint(si)):(Qi.expandByPoint(Vo.min),Qi.expandByPoint(Vo.max))}Qi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)si.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(si));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)si.fromBufferAttribute(o,c),l&&(Ca.fromBufferAttribute(e,c),si.add(Ca)),n=Math.max(n,i.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new Q,l[A]=new Q;let c=new Q,u=new Q,h=new Q,f=new ke,d=new ke,m=new ke,p=new Q,g=new Q;function _(A,D,y){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,y),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let b=1/(d.x*m.y-m.x*d.y);isFinite(b)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(b),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(b),o[A].add(p),o[D].add(p),o[y].add(p),l[A].add(g),l[D].add(g),l[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,D=x.length;A<D;++A){let y=x[A],b=y.start,R=y.count;for(let C=b,I=b+R;C<I;C+=3)_(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new Q,w=new Q,E=new Q,M=new Q;function S(A){E.fromBufferAttribute(n,A),M.copy(E);let D=o[A];v.copy(D),v.sub(E.multiplyScalar(E.dot(D))).normalize(),w.crossVectors(M,D);let b=w.dot(l[A])<0?-1:1;a.setXYZW(A,v.x,v.y,v.z,b)}for(let A=0,D=x.length;A<D;++A){let y=x[A],b=y.start,R=y.count;for(let C=b,I=b+R;C<I;C+=3)S(e.getX(C+0)),S(e.getX(C+1)),S(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new Q,r=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)si.fromBufferAttribute(e,t),si.normalize(),e.setXYZ(t,si.x,si.y,si.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let p=0,g=l.length;p<g;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*u;for(let _=0;_<u;_++)f[m++]=c[d++]}return new gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},a_=new Dt,Pr=new Of,gc=new qo,o_=new Q,_c=new Q,vc=new Q,xc=new Q,Nd=new Q,yc=new Q,l_=new Q,wc=new Q,en=class extends vn{constructor(e=new ys,t=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){yc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Nd.fromBufferAttribute(h,e),a?yc.addScaledVector(Nd,u):yc.addScaledVector(Nd.sub(t),u))}t.add(yc)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(r),Pr.copy(e.ray).recast(e.near),!(gc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(gc,o_)===null||Pr.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(a_.copy(r).invert(),Pr.copy(e.ray).applyMatrix4(a_),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,p=f.length;m<p;m++){let g=f[m],_=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let w=x,E=v;w<E;w+=3){let M=o.getX(w),S=o.getX(w+1),A=o.getX(w+2);n=bc(this,_,e,i,c,u,h,M,S,A),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let g=m,_=p;g<_;g+=3){let x=o.getX(g),v=o.getX(g+1),w=o.getX(g+2);n=bc(this,a,e,i,c,u,h,x,v,w),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,p=f.length;m<p;m++){let g=f[m],_=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let w=x,E=v;w<E;w+=3){let M=w,S=w+1,A=w+2;n=bc(this,_,e,i,c,u,h,M,S,A),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let g=m,_=p;g<_;g+=3){let x=g,v=g+1,w=g+2;n=bc(this,a,e,i,c,u,h,x,v,w),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}};function Xb(s,e,t,i,n,r,a,o){let l;if(e.side===Gi?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Ks,o),l===null)return null;wc.copy(o),wc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(wc);return c<t.near||c>t.far?null:{distance:c,point:wc.clone(),object:s}}function bc(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,_c),s.getVertexPosition(l,vc),s.getVertexPosition(c,xc);let u=Xb(s,e,t,i,_c,vc,xc,l_);if(u){let h=new Q;Nr.getBarycoord(l_,_c,vc,xc,h),n&&(u.uv=Nr.getInterpolatedAttribute(n,o,l,c,h,new ke)),r&&(u.uv1=Nr.getInterpolatedAttribute(r,o,l,c,h,new ke)),a&&(u.normal=Nr.getInterpolatedAttribute(a,o,l,c,h,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new Q,materialIndex:0};Nr.getNormal(_c,vc,xc,f.normal),u.face=f,u.barycoord=h}return u}var $o=class s extends ys{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function m(p,g,_,x,v,w,E,M,S,A,D){let y=w/S,b=E/A,R=w/2,C=E/2,I=M/2,U=S+1,B=A+1,F=0,L=0,k=new Q;for(let N=0;N<B;N++){let ie=N*b-C;for(let he=0;he<U;he++){let Fe=he*y-R;k[p]=Fe*x,k[g]=ie*v,k[_]=I,c.push(k.x,k.y,k.z),k[p]=0,k[g]=0,k[_]=M>0?1:-1,u.push(k.x,k.y,k.z),h.push(he/S),h.push(1-N/A),F+=1}}for(let N=0;N<A;N++)for(let ie=0;ie<S;ie++){let he=f+ie+U*N,Fe=f+ie+U*(N+1),j=f+(ie+1)+U*(N+1),V=f+(ie+1)+U*N;l.push(he,Fe,V),l.push(Fe,j,V),L+=6}o.addGroup(d,L,D),d+=L,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ha(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ri(s){let e={};for(let t=0;t<s.length;t++){let i=Ha(s[t]);for(let n in i)e[n]=i[n]}return e}function Yb(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function iv(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var nn={clone:Ha,merge:Ri},qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qb,this.fragmentShader=$b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ha(e.uniforms),this.uniformsGroups=Yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Xc=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=_s}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qs=new Q,c_=new ke,u_=new ke,xi=class extends Xc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=If*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return If*2*Math.atan(Math.tan(pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qs.x,qs.y).multiplyScalar(-e/qs.z),qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qs.x,qs.y).multiplyScalar(-e/qs.z)}getViewSize(e,t){return this.getViewBounds(e,c_,u_),t.subVectors(u_,c_)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pd*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Da=-90,Pa=1,Uf=class extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new xi(Da,Pa,e,t);n.layers=this.layers,this.add(n);let r=new xi(Da,Pa,e,t);r.layers=this.layers,this.add(r);let a=new xi(Da,Pa,e,t);a.layers=this.layers,this.add(a);let o=new xi(Da,Pa,e,t);o.layers=this.layers,this.add(o);let l=new xi(Da,Pa,e,t);l.layers=this.layers,this.add(l);let c=new xi(Da,Pa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_s)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Yc=class extends tn{constructor(e,t,i,n,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:za,super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bf=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Yc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new $o(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gi,blending:ri});r.uniforms.tEquirect.value=t;let a=new en(n,r),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=Rn),new Uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},Od=new Q,Zb=new Q,Kb=new it,ps=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Od.subVectors(i,t).cross(Zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Od),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kb.getNormalMatrix(e),n=this.coplanarPoint(Od).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rr=new qo,Sc=new Q,Zo=class{constructor(e=new ps,t=new ps,i=new ps,n=new ps,r=new ps,a=new ps){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_s){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],m=n[9],p=n[10],g=n[11],_=n[12],x=n[13],v=n[14],w=n[15];if(i[0].setComponents(l-r,f-c,g-d,w-_).normalize(),i[1].setComponents(l+r,f+c,g+d,w+_).normalize(),i[2].setComponents(l+a,f+u,g+m,w+x).normalize(),i[3].setComponents(l-a,f-u,g-m,w-x).normalize(),i[4].setComponents(l-o,f-h,g-p,w-v).normalize(),t===_s)i[5].setComponents(l+o,f+h,g+p,w+v).normalize();else if(t===zc)i[5].setComponents(o,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Sc.x=n.normal.x>0?e.max.x:e.min.x,Sc.y=n.normal.y>0?e.max.y:e.min.y,Sc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nv(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jb(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],p=h[d];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++f,h[f]=p)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let p=h[d];s.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var qc=class s extends ys{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],p=[],g=[];for(let _=0;_<u;_++){let x=_*f-a;for(let v=0;v<c;v++){let w=v*h-r;m.push(w,-x,0),p.push(0,0,1),g.push(v/o),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){let v=x+c*_,w=x+c*(_+1),E=x+1+c*(_+1),M=x+1+c*_;d.push(v,w,M),d.push(w,E,M)}this.setIndex(d),this.setAttribute("position",new _n(m,3)),this.setAttribute("normal",new _n(p,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:jb,alphahash_pars_fragment:Qb,alphamap_fragment:eS,alphamap_pars_fragment:tS,alphatest_fragment:iS,alphatest_pars_fragment:nS,aomap_fragment:sS,aomap_pars_fragment:rS,batching_pars_vertex:aS,batching_vertex:oS,begin_vertex:lS,beginnormal_vertex:cS,bsdfs:uS,iridescence_fragment:hS,bumpmap_pars_fragment:dS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:pS,clipping_planes_pars_vertex:mS,clipping_planes_vertex:gS,color_fragment:_S,color_pars_fragment:vS,color_pars_vertex:xS,color_vertex:yS,common:wS,cube_uv_reflection_fragment:bS,defaultnormal_vertex:SS,displacementmap_pars_vertex:MS,displacementmap_vertex:ES,emissivemap_fragment:TS,emissivemap_pars_fragment:AS,colorspace_fragment:CS,colorspace_pars_fragment:DS,envmap_fragment:PS,envmap_common_pars_fragment:RS,envmap_pars_fragment:IS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:WS,envmap_vertex:FS,fog_vertex:NS,fog_pars_vertex:OS,fog_fragment:US,fog_pars_fragment:BS,gradientmap_pars_fragment:zS,lightmap_pars_fragment:kS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:HS,lights_pars_begin:GS,lights_toon_fragment:XS,lights_toon_pars_fragment:YS,lights_phong_fragment:qS,lights_phong_pars_fragment:$S,lights_physical_fragment:ZS,lights_physical_pars_fragment:KS,lights_fragment_begin:JS,lights_fragment_maps:jS,lights_fragment_end:QS,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:nM,map_fragment:sM,map_pars_fragment:rM,map_particle_fragment:aM,map_particle_pars_fragment:oM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:uM,morphcolor_vertex:hM,morphnormal_vertex:dM,morphtarget_pars_vertex:fM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:_M,normal_pars_vertex:vM,normal_vertex:xM,normalmap_pars_fragment:yM,clearcoat_normal_fragment_begin:wM,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:MM,opaque_fragment:EM,packing:TM,premultiplied_alpha_fragment:AM,project_vertex:CM,dithering_fragment:DM,dithering_pars_fragment:PM,roughnessmap_fragment:RM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:LM,shadowmap_pars_vertex:FM,shadowmap_vertex:NM,shadowmask_pars_fragment:OM,skinbase_vertex:UM,skinning_pars_vertex:BM,skinning_vertex:zM,skinnormal_vertex:kM,specularmap_fragment:VM,specularmap_pars_fragment:HM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:YM,uv_pars_fragment:qM,uv_pars_vertex:$M,uv_vertex:ZM,worldpos_vertex:KM,background_vert:JM,background_frag:jM,backgroundCube_vert:QM,backgroundCube_frag:eE,cube_vert:tE,cube_frag:iE,depth_vert:nE,depth_frag:sE,distanceRGBA_vert:rE,distanceRGBA_frag:aE,equirect_vert:oE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:hE,meshbasic_frag:dE,meshlambert_vert:fE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:_E,meshnormal_frag:vE,meshphong_vert:xE,meshphong_frag:yE,meshphysical_vert:wE,meshphysical_frag:bE,meshtoon_vert:SE,meshtoon_frag:ME,points_vert:EE,points_frag:TE,shadow_vert:AE,shadow_frag:CE,sprite_vert:DE,sprite_frag:PE},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Xn={basic:{uniforms:Ri([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Ri([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Ri([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Ri([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Ri([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Ri([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Ri([xe.points,xe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Ri([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Ri([xe.common,xe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Ri([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Ri([xe.sprite,xe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Ri([xe.common,xe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Ri([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Xn.physical={uniforms:Ri([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Mc={r:0,b:0,g:0},Ir=new xs,RE=new Dt;function IE(s,e,t,i,n,r,a){let o=new Ze(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function p(x){let v=!1,w=m(x);w===null?_(o,l):w&&w.isColor&&(_(w,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){let w=m(v);w&&(w.isCubeTexture||w.mapping===ru)?(u===void 0&&(u=new en(new $o(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Ha(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Ir.copy(v.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RE.makeRotationFromEuler(Ir)),u.material.toneMapped=mt.getTransfer(w.colorSpace)!==Ct,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new en(new qc(2,2),new Pt({name:"BackgroundMaterial",uniforms:Ha(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(w.colorSpace)!==Ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function _(x,v){x.getRGB(Mc,iv(s)),i.buffers.color.setClear(Mc.r,Mc.g,Mc.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,_(o,l)},render:p,addToRenderList:g}}function LE(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,a=!1;function o(y,b,R,C,I){let U=!1,B=h(C,R,b);r!==B&&(r=B,c(r.object)),U=d(y,C,R,I),U&&m(y,C,R,I),I!==null&&e.update(I,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,w(y,b,R,C),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,b,R){let C=R.wireframe===!0,I=i[y.id];I===void 0&&(I={},i[y.id]=I);let U=I[b.id];U===void 0&&(U={},I[b.id]=U);let B=U[C];return B===void 0&&(B=f(l()),U[C]=B),B}function f(y){let b=[],R=[],C=[];for(let I=0;I<t;I++)b[I]=0,R[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:R,attributeDivisors:C,object:y,attributes:{},index:null}}function d(y,b,R,C){let I=r.attributes,U=b.attributes,B=0,F=R.getAttributes();for(let L in F)if(F[L].location>=0){let N=I[L],ie=U[L];if(ie===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),N===void 0||N.attribute!==ie||ie&&N.data!==ie.data)return!0;B++}return r.attributesNum!==B||r.index!==C}function m(y,b,R,C){let I={},U=b.attributes,B=0,F=R.getAttributes();for(let L in F)if(F[L].location>=0){let N=U[L];N===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(N=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(N=y.instanceColor));let ie={};ie.attribute=N,N&&N.data&&(ie.data=N.data),I[L]=ie,B++}r.attributes=I,r.attributesNum=B,r.index=C}function p(){let y=r.newAttributes;for(let b=0,R=y.length;b<R;b++)y[b]=0}function g(y){_(y,0)}function _(y,b){let R=r.newAttributes,C=r.enabledAttributes,I=r.attributeDivisors;R[y]=1,C[y]===0&&(s.enableVertexAttribArray(y),C[y]=1),I[y]!==b&&(s.vertexAttribDivisor(y,b),I[y]=b)}function x(){let y=r.newAttributes,b=r.enabledAttributes;for(let R=0,C=b.length;R<C;R++)b[R]!==y[R]&&(s.disableVertexAttribArray(R),b[R]=0)}function v(y,b,R,C,I,U,B){B===!0?s.vertexAttribIPointer(y,b,R,I,U):s.vertexAttribPointer(y,b,R,C,I,U)}function w(y,b,R,C){p();let I=C.attributes,U=R.getAttributes(),B=b.defaultAttributeValues;for(let F in U){let L=U[F];if(L.location>=0){let k=I[F];if(k===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(k=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(k=y.instanceColor)),k!==void 0){let N=k.normalized,ie=k.itemSize,he=e.get(k);if(he===void 0)continue;let Fe=he.buffer,j=he.type,V=he.bytesPerElement,H=j===s.INT||j===s.UNSIGNED_INT||k.gpuType===hp;if(k.isInterleavedBufferAttribute){let X=k.data,oe=X.stride,de=k.offset;if(X.isInstancedInterleavedBuffer){for(let Pe=0;Pe<L.locationSize;Pe++)_(L.location+Pe,X.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Pe=0;Pe<L.locationSize;Pe++)g(L.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Pe=0;Pe<L.locationSize;Pe++)v(L.location+Pe,ie/L.locationSize,j,N,oe*V,(de+ie/L.locationSize*Pe)*V,H)}else{if(k.isInstancedBufferAttribute){for(let X=0;X<L.locationSize;X++)_(L.location+X,k.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let X=0;X<L.locationSize;X++)g(L.location+X);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let X=0;X<L.locationSize;X++)v(L.location+X,ie/L.locationSize,j,N,ie*V,ie/L.locationSize*X*V,H)}}else if(B!==void 0){let N=B[F];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(L.location,N);break;case 3:s.vertexAttrib3fv(L.location,N);break;case 4:s.vertexAttrib4fv(L.location,N);break;default:s.vertexAttrib1fv(L.location,N)}}}}x()}function E(){A();for(let y in i){let b=i[y];for(let R in b){let C=b[R];for(let I in C)u(C[I].object),delete C[I];delete b[R]}delete i[y]}}function M(y){if(i[y.id]===void 0)return;let b=i[y.id];for(let R in b){let C=b[R];for(let I in C)u(C[I].object),delete C[I];delete b[R]}delete i[y.id]}function S(y){for(let b in i){let R=i[b];if(R[y.id]===void 0)continue;let C=R[y.id];for(let I in C)u(C[I].object),delete C[I];delete R[y.id]}}function A(){D(),a=!0,r!==n&&(r=n,c(r.object))}function D(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:p,enableAttribute:g,disableUnusedAttributes:x}}function FE(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];for(let p=0;p<f.length;p++)t.update(m,i,f[p])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NE(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(S){return!(S!==In&&i.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let A=S===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==vs&&i.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==gs&&!A)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:E,maxSamples:M}}function OE(s){let e=this,t=null,i=0,n=!1,r=!1,a=new ps,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,p=h.clipIntersection,g=h.clipShadows,_=s.get(h);if(!n||m===null||m.length===0||r&&!g)r?u(null):c();else{let x=r?0:i,v=x*4,w=_.clippingState||null;l.value=w,w=u(m,f,v,d);for(let E=0;E!==v;++E)w[E]=t[E];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){let p=h!==null?h.length:0,g=null;if(p!==0){if(g=l.value,m!==!0||g===null){let _=d+p*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<_)&&(g=new Float32Array(_));for(let v=0,w=d;v!==p;++v,w+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function UE(s){let e=new WeakMap;function t(a,o){return o===ef?a.mapping=za:o===tf&&(a.mapping=ka),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ef||o===tf)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Bf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ko=class extends Xc{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ia=4,h_=[.125,.215,.35,.446,.526,.582],Or=20,Ud=new Ko,d_=new Ze,Bd=null,zd=0,kd=0,Vd=!1,Fr=(1+Math.sqrt(5))/2,Ra=1/Fr,f_=[new Q(-Fr,Ra,0),new Q(Fr,Ra,0),new Q(-Ra,0,Fr),new Q(Ra,0,Fr),new Q(0,Fr,-Ra),new Q(0,Fr,Ra),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],Ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Bd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,zd,kd),this._renderer.xr.enabled=Vd,e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===za||e.mapping===ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Wi,format:In,colorSpace:tr,depthBuffer:!1},n=p_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BE(r)),this._blurMaterial=zE(r,e,t)}return n}_compileMaterial(e){let t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,i,n){let o=new xi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(d_),u.toneMapping=Zs,u.autoClear=!1;let d=new Va({name:"PMREM.Background",side:Gi,depthWrite:!1,depthTest:!1}),m=new en(new $o,d),p=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(d_),p=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):x===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));let v=this._cubeSize;Ec(n,x*v,_>2?v:0,v,v),u.setRenderTarget(n),p&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===za||e.mapping===ka;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ec(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ud)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=f_[(n-r-1)%f_.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new en(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Or-1),p=r/m,g=isFinite(r)?1+Math.floor(u*p):Or;g>Or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Or}`);let _=[],x=0;for(let S=0;S<Or;++S){let A=S/p,D=Math.exp(-A*A/2);_.push(D),S===0?x+=D:S<g&&(x+=2*D)}for(let S=0;S<_.length;S++)_[S]=_[S]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;let w=this._sizeLods[n],E=3*w*(n>v-Ia?n-v+Ia:0),M=4*(this._cubeSize-w);Ec(t,E,M,3*w,2*w),l.setRenderTarget(t),l.render(h,Ud)}};function BE(s){let e=[],t=[],i=[],n=s,r=s-Ia+1+h_.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);t.push(o);let l=1/o;a>s-Ia?l=h_[a-s+Ia-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,p=3,g=2,_=1,x=new Float32Array(p*m*d),v=new Float32Array(g*m*d),w=new Float32Array(_*m*d);for(let M=0;M<d;M++){let S=M%3*2/3-1,A=M>2?0:-1,D=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];x.set(D,p*m*M),v.set(f,g*m*M);let y=[M,M,M,M,M,M];w.set(y,_*m*M)}let E=new ys;E.setAttribute("position",new gn(x,p)),E.setAttribute("uv",new gn(v,g)),E.setAttribute("faceIndex",new gn(w,_)),e.push(E),n>Ia&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function p_(s,e,t){let i=new ai(s,e,t);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ec(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function zE(s,e,t){let i=new Float32Array(Or),n=new Q(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function m_(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function g_(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function vp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kE(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ef||l===tf,u=l===za||l===ka;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ga(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Ga(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function VE(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Lc("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function HE(s,e,t,i){let n={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let p=f.morphAttributes[m];for(let g=0,_=p.length;g<_;g++)e.remove(p[g])}f.removeEventListener("dispose",a),delete n[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)e.update(f[m],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let m in d){let p=d[m];for(let g=0,_=p.length;g<_;g++)e.update(p[g],s.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,m=h.attributes.position,p=0;if(d!==null){let x=d.array;p=d.version;for(let v=0,w=x.length;v<w;v+=3){let E=x[v+0],M=x[v+1],S=x[v+2];f.push(E,M,M,S,S,E)}}else if(m!==void 0){let x=m.array;p=m.version;for(let v=0,w=x.length/3-1;v<w;v+=3){let E=v+0,M=v+1,S=v+2;f.push(E,M,M,S,S,E)}}else return;let g=new(ev(f)?Wc:Gc)(f,1);g.version=p;let _=r.get(h);_&&e.remove(_),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function GE(s,e,t){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(i,d,r,f*a,m),t.update(d,i,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let _=0;_<m;_++)g+=d[_];t.update(g,i,1)}function h(f,d,m,p){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f.length;_++)c(f[_]/a,d[_],p[_]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,p,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];for(let x=0;x<p.length;x++)t.update(_,i,p[x])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function WE(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function XE(s,e,t){let i=new WeakMap,n=new vt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==h){let D=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),p===!0&&(v=3);let w=o.attributes.position.count*v,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let M=new Float32Array(w*E*4*h),S=new Vc(M,w,E,h);S.type=gs,S.needsUpdate=!0;let A=v*4;for(let y=0;y<h;y++){let b=g[y],R=_[y],C=x[y],I=w*E*4*y;for(let U=0;U<b.count;U++){let B=U*A;d===!0&&(n.fromBufferAttribute(b,U),M[I+B+0]=n.x,M[I+B+1]=n.y,M[I+B+2]=n.z,M[I+B+3]=0),m===!0&&(n.fromBufferAttribute(R,U),M[I+B+4]=n.x,M[I+B+5]=n.y,M[I+B+6]=n.z,M[I+B+7]=0),p===!0&&(n.fromBufferAttribute(C,U),M[I+B+8]=n.x,M[I+B+9]=n.y,M[I+B+10]=n.z,M[I+B+11]=C.itemSize===4?n.w:1)}}f={count:h,texture:S,size:new ke(w,E)},i.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let p=0;p<c.length;p++)d+=c[p];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function YE(s,e,t,i){let n=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Wa=class extends tn{constructor(e,t,i,n,r,a,o,l,c,u=Na){if(u!==Na&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Na&&(i=zr),i===void 0&&u===js&&(i=Js),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ii,this.minFilter=l!==void 0?l:Ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sv=new tn,__=new Wa(1,1),rv=new Vc,av=new Nf,ov=new Yc,v_=[],x_=[],y_=new Float32Array(16),w_=new Float32Array(9),b_=new Float32Array(4);function Ya(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=v_[n];if(r===void 0&&(r=new Float32Array(n),v_[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ou(s,e){let t=x_[e];t===void 0&&(t=new Int32Array(e),x_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function qE(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $E(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function ZE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function KE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function JE(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;b_.set(i),s.uniformMatrix2fv(this.addr,!1,b_),Qt(t,i)}}function jE(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;w_.set(i),s.uniformMatrix3fv(this.addr,!1,w_),Qt(t,i)}}function QE(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;y_.set(i),s.uniformMatrix4fv(this.addr,!1,y_),Qt(t,i)}}function eT(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function iT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function nT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function sT(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function aT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function oT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function lT(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(__.compareFunction=Q_,r=__):r=sv,t.setTexture2D(e||r,n)}function cT(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||av,n)}function uT(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ov,n)}function hT(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||rv,n)}function dT(s){switch(s){case 5126:return qE;case 35664:return $E;case 35665:return ZE;case 35666:return KE;case 35674:return JE;case 35675:return jE;case 35676:return QE;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return iT;case 35669:case 35673:return nT;case 5125:return sT;case 36294:return rT;case 36295:return aT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return hT}}function fT(s,e){s.uniform1fv(this.addr,e)}function pT(s,e){let t=Ya(e,this.size,2);s.uniform2fv(this.addr,t)}function mT(s,e){let t=Ya(e,this.size,3);s.uniform3fv(this.addr,t)}function gT(s,e){let t=Ya(e,this.size,4);s.uniform4fv(this.addr,t)}function _T(s,e){let t=Ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vT(s,e){let t=Ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xT(s,e){let t=Ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yT(s,e){s.uniform1iv(this.addr,e)}function wT(s,e){s.uniform2iv(this.addr,e)}function bT(s,e){s.uniform3iv(this.addr,e)}function ST(s,e){s.uniform4iv(this.addr,e)}function MT(s,e){s.uniform1uiv(this.addr,e)}function ET(s,e){s.uniform2uiv(this.addr,e)}function TT(s,e){s.uniform3uiv(this.addr,e)}function AT(s,e){s.uniform4uiv(this.addr,e)}function CT(s,e,t){let i=this.cache,n=e.length,r=ou(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||sv,r[a])}function DT(s,e,t){let i=this.cache,n=e.length,r=ou(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||av,r[a])}function PT(s,e,t){let i=this.cache,n=e.length,r=ou(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ov,r[a])}function RT(s,e,t){let i=this.cache,n=e.length,r=ou(t,n);jt(i,r)||(s.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||rv,r[a])}function IT(s){switch(s){case 5126:return fT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return yT;case 35667:case 35671:return wT;case 35668:case 35672:return bT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return ET;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return RT}}var zf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dT(t.type)}},kf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IT(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Hd=/(\w+)(\])?(\[|\.)?/g;function S_(s,e){s.seq.push(e),s.map[e.id]=e}function LT(s,e,t){let i=s.name,n=i.length;for(Hd.lastIndex=0;;){let r=Hd.exec(i),a=Hd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){S_(t,c===void 0?new zf(o,s,e):new kf(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Vf(o),S_(t,h)),t=h}}}var Ua=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);LT(r,a,this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function M_(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var FT=37297,NT=0;function OT(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function UT(s){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(s),i;switch(e===t?i="":e===Bc&&t===Uc?i="LinearDisplayP3ToLinearSRGB":e===Uc&&t===Bc&&(i="LinearSRGBToLinearDisplayP3"),s){case tr:case au:return[i,"LinearTransferOETF"];case Wn:case _p:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function E_(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+OT(s.getShaderSource(e),a)}else return n}function BT(s,e){let t=UT(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zT(s,e){let t;switch(e){case ub:t="Linear";break;case hb:t="Reinhard";break;case db:t="Cineon";break;case fb:t="ACESFilmic";break;case mb:t="AgX";break;case gb:t="Neutral";break;case pb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tc=new Q;function kT(){mt.getLuminanceCoefficients(Tc);let s=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function HT(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GT(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Go(s){return s!==""}function T_(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(s){return s.replace(WT,YT)}var XT=new Map;function YT(s,e){let t=tt[e];if(t===void 0){let i=XT.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(t)}var qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(s){return s.replace(qT,$T)}function $T(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function D_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qw?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fs&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case za:case ka:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ka:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case k_:e="ENVMAP_BLENDING_MULTIPLY";break;case lb:e="ENVMAP_BLENDING_MIX";break;case cb:e="ENVMAP_BLENDING_ADD";break}return e}function QT(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function e1(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ZT(t),c=KT(t),u=JT(t),h=jT(t),f=QT(t),d=VT(t),m=HT(r),p=n.createProgram(),g,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Go).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(g=[D_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[D_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zs?"#define TONE_MAPPING":"",t.toneMapping!==Zs?tt.tonemapping_pars_fragment:"",t.toneMapping!==Zs?zT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,BT("linearToOutputTexel",t.outputColorSpace),kT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),a=Hf(a),a=T_(a,t),a=A_(a,t),o=Hf(o),o=T_(o,t),o=A_(o,t),a=C_(a),o=C_(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=x+g+a,w=x+_+o,E=M_(n,n.VERTEX_SHADER,v),M=M_(n,n.FRAGMENT_SHADER,w);n.attachShader(p,E),n.attachShader(p,M),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function S(b){if(s.debug.checkShaderErrors){let R=n.getProgramInfoLog(p).trim(),C=n.getShaderInfoLog(E).trim(),I=n.getShaderInfoLog(M).trim(),U=!0,B=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,E,M);else{let F=E_(n,E,"vertex"),L=E_(n,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+R+`
`+F+`
`+L)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(C===""||I==="")&&(B=!1);B&&(b.diagnostics={runnable:U,programLog:R,vertexShader:{log:C,prefix:g},fragmentShader:{log:I,prefix:_}})}n.deleteShader(E),n.deleteShader(M),A=new Ua(n,p),D=GT(n,p)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let D;this.getAttributes=function(){return D===void 0&&S(this),D};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(p,FT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=M,this}var t1=0,Gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wf(e),t.set(e,i)),i}},Wf=class{constructor(e){this.id=t1++,this.code=e,this.usedTimes=0}};function i1(s,e,t,i,n,r,a){let o=new Hc,l=new Gf,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.reverseDepthBuffer,d=n.vertexTextures,m=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,b,R,C,I){let U=C.fog,B=I.geometry,F=y.isMeshStandardMaterial?C.environment:null,L=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),k=L&&L.mapping===ru?L.image.height:null,N=p[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=ie!==void 0?ie.length:0,Fe=0;B.morphAttributes.position!==void 0&&(Fe=1),B.morphAttributes.normal!==void 0&&(Fe=2),B.morphAttributes.color!==void 0&&(Fe=3);let j,V,H,X;if(N){let Oe=Xn[N];j=Oe.vertexShader,V=Oe.fragmentShader}else j=y.vertexShader,V=y.fragmentShader,l.update(y),H=l.getVertexShaderID(y),X=l.getFragmentShaderID(y);let oe=s.getRenderTarget(),de=I.isInstancedMesh===!0,Pe=I.isBatchedMesh===!0,Ae=!!y.map,Re=!!y.matcap,z=!!L,Me=!!y.aoMap,Ce=!!y.lightMap,Ue=!!y.bumpMap,Y=!!y.normalMap,Ve=!!y.displacementMap,De=!!y.emissiveMap,O=!!y.metalnessMap,T=!!y.roughnessMap,Z=y.anisotropy>0,ne=y.clearcoat>0,re=y.dispersion>0,te=y.iridescence>0,be=y.sheen>0,le=y.transmission>0,fe=Z&&!!y.anisotropyMap,$e=ne&&!!y.clearcoatMap,ce=ne&&!!y.clearcoatNormalMap,Se=ne&&!!y.clearcoatRoughnessMap,Ee=te&&!!y.iridescenceMap,Ge=te&&!!y.iridescenceThicknessMap,we=be&&!!y.sheenColorMap,Je=be&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,lt=!!y.specularColorMap,G=!!y.specularIntensityMap,ae=le&&!!y.transmissionMap,ee=le&&!!y.thicknessMap,se=!!y.gradientMap,pe=!!y.alphaMap,me=y.alphaTest>0,je=!!y.alphaHash,xt=!!y.extensions,Rt=Zs;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Rt=s.toneMapping);let rt={shaderID:N,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:V,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&I._colorsTexture!==null,instancing:de,instancingColor:de&&I.instanceColor!==null,instancingMorph:de&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tr,alphaToCoverage:!!y.alphaToCoverage,map:Ae,matcap:Re,envMap:z,envMapMode:z&&L.mapping,envMapCubeUVHeight:k,aoMap:Me,lightMap:Ce,bumpMap:Ue,normalMap:Y,displacementMap:d&&Ve,emissiveMap:De,normalMapObjectSpace:Y&&y.normalMapType===yb,normalMapTangentSpace:Y&&y.normalMapType===j_,metalnessMap:O,roughnessMap:T,anisotropy:Z,anisotropyMap:fe,clearcoat:ne,clearcoatMap:$e,clearcoatNormalMap:ce,clearcoatRoughnessMap:Se,dispersion:re,iridescence:te,iridescenceMap:Ee,iridescenceThicknessMap:Ge,sheen:be,sheenColorMap:we,sheenRoughnessMap:Je,specularMap:Ye,specularColorMap:lt,specularIntensityMap:G,transmission:le,transmissionMap:ae,thicknessMap:ee,gradientMap:se,opaque:y.transparent===!1&&y.blending===Fa&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:je,combine:y.combine,mapUv:Ae&&g(y.map.channel),aoMapUv:Me&&g(y.aoMap.channel),lightMapUv:Ce&&g(y.lightMap.channel),bumpMapUv:Ue&&g(y.bumpMap.channel),normalMapUv:Y&&g(y.normalMap.channel),displacementMapUv:Ve&&g(y.displacementMap.channel),emissiveMapUv:De&&g(y.emissiveMap.channel),metalnessMapUv:O&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:fe&&g(y.anisotropyMap.channel),clearcoatMapUv:$e&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&g(y.sheenRoughnessMap.channel),specularMapUv:Ye&&g(y.specularMap.channel),specularColorMapUv:lt&&g(y.specularColorMap.channel),specularIntensityMapUv:G&&g(y.specularIntensityMap.channel),transmissionMapUv:ae&&g(y.transmissionMap.channel),thicknessMapUv:ee&&g(y.thicknessMap.channel),alphaMapUv:pe&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Y||Z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ae||pe),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ms,flipSided:y.side===Gi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(v(b,y),w(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function w(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),y.push(o.mask)}function E(y){let b=p[y.type],R;if(b){let C=Xn[b];R=nn.clone(C.uniforms)}else R=y.uniforms;return R}function M(y,b){let R;for(let C=0,I=u.length;C<I;C++){let U=u[C];if(U.cacheKey===b){R=U,++R.usedTimes;break}}return R===void 0&&(R=new e1(s,b,y,r),u.push(R)),R}function S(y){if(--y.usedTimes===0){let b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:E,acquireProgram:M,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:D}}function n1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function s1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function P_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function R_(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,f,d,m,p,g){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:p,group:g},s[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=m,_.renderOrder=h.renderOrder,_.z=p,_.group=g),e++,_}function o(h,f,d,m,p,g){let _=a(h,f,d,m,p,g);d.transmission>0?i.push(_):d.transparent===!0?n.push(_):t.push(_)}function l(h,f,d,m,p,g){let _=a(h,f,d,m,p,g);d.transmission>0?i.unshift(_):d.transparent===!0?n.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||s1),i.length>1&&i.sort(f||P_),n.length>1&&n.sort(f||P_)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function r1(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new R_,s.set(i,[a])):n>=r.length?(a=new R_,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function a1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ze};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function o1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var l1=0;function c1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function u1(s){let e=new a1,t=o1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);let n=new Q,r=new Dt,a=new Dt;function o(c){let u=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,p=0,g=0,_=0,x=0,v=0,w=0,E=0,M=0,S=0;c.sort(c1);for(let D=0,y=c.length;D<y;D++){let b=c[D],R=b.color,C=b.intensity,I=b.distance,U=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=R.r*C,h+=R.g*C,f+=R.b*C;else if(b.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(b.sh.coefficients[B],C);S++}else if(b.isDirectionalLight){let B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let F=b.shadow,L=t.get(b);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.directionalShadow[d]=L,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=b.shadow.matrix,x++}i.directional[d]=B,d++}else if(b.isSpotLight){let B=e.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(R).multiplyScalar(C),B.distance=I,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,i.spot[p]=B;let F=b.shadow;if(b.map&&(i.spotLightMap[E]=b.map,E++,F.updateMatrices(b),b.castShadow&&M++),i.spotLightMatrix[p]=F.matrix,b.castShadow){let L=t.get(b);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.spotShadow[p]=L,i.spotShadowMap[p]=U,w++}p++}else if(b.isRectAreaLight){let B=e.get(b);B.color.copy(R).multiplyScalar(C),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=B,g++}else if(b.isPointLight){let B=e.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){let F=b.shadow,L=t.get(b);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,L.shadowCameraNear=F.camera.near,L.shadowCameraFar=F.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=b.shadow.matrix,v++}i.point[m]=B,m++}else if(b.isHemisphereLight){let B=e.get(b);B.skyColor.copy(b.color).multiplyScalar(C),B.groundColor.copy(b.groundColor).multiplyScalar(C),i.hemi[_]=B,_++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let A=i.hash;(A.directionalLength!==d||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==g||A.hemiLength!==_||A.numDirectionalShadows!==x||A.numPointShadows!==v||A.numSpotShadows!==w||A.numSpotMaps!==E||A.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=p,i.rectArea.length=g,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=w+E-M,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=S,A.directionalLength=d,A.pointLength=m,A.spotLength=p,A.rectAreaLength=g,A.hemiLength=_,A.numDirectionalShadows=x,A.numPointShadows=v,A.numSpotShadows=w,A.numSpotMaps=E,A.numLightProbes=S,i.version=l1++)}function l(c,u){let h=0,f=0,d=0,m=0,p=0,g=u.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){let v=c[_];if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),h++}else if(v.isSpotLight){let w=i.spot[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let w=i.rectArea[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function I_(s){let e=new u1(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function h1(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new I_(s),e.set(n,[o])):r>=a.length?(o=new I_(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Xf=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yf=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p1(s,e,t){let i=new Zo,n=new ke,r=new ke,a=new vt,o=new Xf({depthPacking:xb}),l=new Yf,c={},u=t.maxTextureSize,h={[Ks]:Gi,[Gi]:Ks,[ms]:ms},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:d1,fragmentShader:f1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ys;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new en(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z_;let _=this.type;this.render=function(M,S,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let D=s.getRenderTarget(),y=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),R=s.state;R.setBlending(ri),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let C=_!==fs&&this.type===fs,I=_===fs&&this.type!==fs;for(let U=0,B=M.length;U<B;U++){let F=M[U],L=F.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;n.copy(L.mapSize);let k=L.getFrameExtents();if(n.multiply(k),r.copy(L.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/k.x),n.x=r.x*k.x,L.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/k.y),n.y=r.y*k.y,L.mapSize.y=r.y)),L.map===null||C===!0||I===!0){let ie=this.type!==fs?{minFilter:Ii,magFilter:Ii}:{};L.map!==null&&L.map.dispose(),L.map=new ai(n.x,n.y,ie),L.map.texture.name=F.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();let N=L.getViewportCount();for(let ie=0;ie<N;ie++){let he=L.getViewport(ie);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),R.viewport(a),L.updateMatrices(F,ie),i=L.getFrustum(),w(S,A,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===fs&&x(L,A),L.needsUpdate=!1}_=this.type,g.needsUpdate=!1,s.setRenderTarget(D,y,b)};function x(M,S){let A=e.update(p);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ai(n.x,n.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(S,null,A,f,p,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(S,null,A,d,p,null)}function v(M,S,A,D){let y=null,b=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)y=b;else if(y=A.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let R=y.uuid,C=S.uuid,I=c[R];I===void 0&&(I={},c[R]=I);let U=I[C];U===void 0&&(U=y.clone(),I[C]=U,S.addEventListener("dispose",E)),y=U}if(y.visible=S.visible,y.wireframe=S.wireframe,D===fs?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:h[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let R=s.properties.get(y);R.light=A}return y}function w(M,S,A,D,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===fs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let C=e.update(M),I=M.material;if(Array.isArray(I)){let U=C.groups;for(let B=0,F=U.length;B<F;B++){let L=U[B],k=I[L.materialIndex];if(k&&k.visible){let N=v(M,k,D,y);M.onBeforeShadow(s,M,S,A,C,N,L),s.renderBufferDirect(A,null,C,N,M,L),M.onAfterShadow(s,M,S,A,C,N,L)}}}else if(I.visible){let U=v(M,I,D,y);M.onBeforeShadow(s,M,S,A,C,U,null),s.renderBufferDirect(A,null,C,U,M,null),M.onAfterShadow(s,M,S,A,C,U,null)}}let R=M.children;for(let C=0,I=R.length;C<I;C++)w(R[C],S,A,D,y)}function E(M){M.target.removeEventListener("dispose",E);for(let A in c){let D=c[A],y=M.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}var m1={[qd]:$d,[Zd]:jd,[Kd]:Qd,[Ba]:Jd,[$d]:qd,[jd]:Zd,[Qd]:Kd,[Jd]:Ba};function g1(s){function e(){let G=!1,ae=new vt,ee=null,se=new vt(0,0,0,0);return{setMask:function(pe){ee!==pe&&!G&&(s.colorMask(pe,pe,pe,pe),ee=pe)},setLocked:function(pe){G=pe},setClear:function(pe,me,je,xt,Rt){Rt===!0&&(pe*=xt,me*=xt,je*=xt),ae.set(pe,me,je,xt),se.equals(ae)===!1&&(s.clearColor(pe,me,je,xt),se.copy(ae))},reset:function(){G=!1,ee=null,se.set(-1,0,0,0)}}}function t(){let G=!1,ae=!1,ee=null,se=null,pe=null;return{setReversed:function(me){ae=me},setTest:function(me){me?H(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(me){ee!==me&&!G&&(s.depthMask(me),ee=me)},setFunc:function(me){if(ae&&(me=m1[me]),se!==me){switch(me){case qd:s.depthFunc(s.NEVER);break;case $d:s.depthFunc(s.ALWAYS);break;case Zd:s.depthFunc(s.LESS);break;case Ba:s.depthFunc(s.LEQUAL);break;case Kd:s.depthFunc(s.EQUAL);break;case Jd:s.depthFunc(s.GEQUAL);break;case jd:s.depthFunc(s.GREATER);break;case Qd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=me}},setLocked:function(me){G=me},setClear:function(me){pe!==me&&(s.clearDepth(me),pe=me)},reset:function(){G=!1,ee=null,se=null,pe=null}}}function i(){let G=!1,ae=null,ee=null,se=null,pe=null,me=null,je=null,xt=null,Rt=null;return{setTest:function(rt){G||(rt?H(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!G&&(s.stencilMask(rt),ae=rt)},setFunc:function(rt,Oe,Ie){(ee!==rt||se!==Oe||pe!==Ie)&&(s.stencilFunc(rt,Oe,Ie),ee=rt,se=Oe,pe=Ie)},setOp:function(rt,Oe,Ie){(me!==rt||je!==Oe||xt!==Ie)&&(s.stencilOp(rt,Oe,Ie),me=rt,je=Oe,xt=Ie)},setLocked:function(rt){G=rt},setClear:function(rt){Rt!==rt&&(s.clearStencil(rt),Rt=rt)},reset:function(){G=!1,ae=null,ee=null,se=null,pe=null,me=null,je=null,xt=null,Rt=null}}}let n=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,f=[],d=null,m=!1,p=null,g=null,_=null,x=null,v=null,w=null,E=null,M=new Ze(0,0,0),S=0,A=!1,D=null,y=null,b=null,R=null,C=null,I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,B=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=B>=2);let L=null,k={},N=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),he=new vt().fromArray(N),Fe=new vt().fromArray(ie);function j(G,ae,ee,se){let pe=new Uint8Array(4),me=s.createTexture();s.bindTexture(G,me),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<ee;je++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(ae+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return me}let V={};V[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),V[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),V[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),H(s.DEPTH_TEST),r.setFunc(Ba),Ce(!1),Ue(z0),H(s.CULL_FACE),z(ri);function H(G){c[G]!==!0&&(s.enable(G),c[G]=!0)}function X(G){c[G]!==!1&&(s.disable(G),c[G]=!1)}function oe(G,ae){return u[G]!==ae?(s.bindFramebuffer(G,ae),u[G]=ae,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ae),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function de(G,ae){let ee=f,se=!1;if(G){ee=h.get(ae),ee===void 0&&(ee=[],h.set(ae,ee));let pe=G.textures;if(ee.length!==pe.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let me=0,je=pe.length;me<je;me++)ee[me]=s.COLOR_ATTACHMENT0+me;ee.length=pe.length,se=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,se=!0);se&&s.drawBuffers(ee)}function Pe(G){return d!==G?(s.useProgram(G),d=G,!0):!1}let Ae={[Yn]:s.FUNC_ADD,[$w]:s.FUNC_SUBTRACT,[Zw]:s.FUNC_REVERSE_SUBTRACT};Ae[Kw]=s.MIN,Ae[Jw]=s.MAX;let Re={[su]:s.ZERO,[jw]:s.ONE,[Qw]:s.SRC_COLOR,[Xd]:s.SRC_ALPHA,[nb]:s.SRC_ALPHA_SATURATE,[up]:s.DST_COLOR,[cp]:s.DST_ALPHA,[eb]:s.ONE_MINUS_SRC_COLOR,[Yd]:s.ONE_MINUS_SRC_ALPHA,[ib]:s.ONE_MINUS_DST_COLOR,[tb]:s.ONE_MINUS_DST_ALPHA,[sb]:s.CONSTANT_COLOR,[rb]:s.ONE_MINUS_CONSTANT_COLOR,[ab]:s.CONSTANT_ALPHA,[ob]:s.ONE_MINUS_CONSTANT_ALPHA};function z(G,ae,ee,se,pe,me,je,xt,Rt,rt){if(G===ri){m===!0&&(X(s.BLEND),m=!1);return}if(m===!1&&(H(s.BLEND),m=!0),G!==nu){if(G!==p||rt!==A){if((g!==Yn||v!==Yn)&&(s.blendEquation(s.FUNC_ADD),g=Yn,v=Yn),rt)switch(G){case Fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fc:s.blendFunc(s.ONE,s.ONE);break;case k0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case V0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case k0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case V0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,x=null,w=null,E=null,M.set(0,0,0),S=0,p=G,A=rt}return}pe=pe||ae,me=me||ee,je=je||se,(ae!==g||pe!==v)&&(s.blendEquationSeparate(Ae[ae],Ae[pe]),g=ae,v=pe),(ee!==_||se!==x||me!==w||je!==E)&&(s.blendFuncSeparate(Re[ee],Re[se],Re[me],Re[je]),_=ee,x=se,w=me,E=je),(xt.equals(M)===!1||Rt!==S)&&(s.blendColor(xt.r,xt.g,xt.b,Rt),M.copy(xt),S=Rt),p=G,A=!1}function Me(G,ae){G.side===ms?X(s.CULL_FACE):H(s.CULL_FACE);let ee=G.side===Gi;ae&&(ee=!ee),Ce(ee),G.blending===Fa&&G.transparent===!1?z(ri):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),n.setMask(G.colorWrite);let se=G.stencilWrite;a.setTest(se),se&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?H(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(G){D!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),D=G)}function Ue(G){G!==Xw?(H(s.CULL_FACE),G!==y&&(G===z0?s.cullFace(s.BACK):G===Yw?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),y=G}function Y(G){G!==b&&(U&&s.lineWidth(G),b=G)}function Ve(G,ae,ee){G?(H(s.POLYGON_OFFSET_FILL),(R!==ae||C!==ee)&&(s.polygonOffset(ae,ee),R=ae,C=ee)):X(s.POLYGON_OFFSET_FILL)}function De(G){G?H(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function O(G){G===void 0&&(G=s.TEXTURE0+I-1),L!==G&&(s.activeTexture(G),L=G)}function T(G,ae,ee){ee===void 0&&(L===null?ee=s.TEXTURE0+I-1:ee=L);let se=k[ee];se===void 0&&(se={type:void 0,texture:void 0},k[ee]=se),(se.type!==G||se.texture!==ae)&&(L!==ee&&(s.activeTexture(ee),L=ee),s.bindTexture(G,ae||V[G]),se.type=G,se.texture=ae)}function Z(){let G=k[L];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(G){he.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),he.copy(G))}function we(G){Fe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Fe.copy(G))}function Je(G,ae){let ee=l.get(ae);ee===void 0&&(ee=new WeakMap,l.set(ae,ee));let se=ee.get(G);se===void 0&&(se=s.getUniformBlockIndex(ae,G.name),ee.set(G,se))}function Ye(G,ae){let se=l.get(ae).get(G);o.get(ae)!==se&&(s.uniformBlockBinding(ae,se,G.__bindingPointIndex),o.set(ae,se))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},L=null,k={},u={},h=new WeakMap,f=[],d=null,m=!1,p=null,g=null,_=null,x=null,v=null,w=null,E=null,M=new Ze(0,0,0),S=0,A=!1,D=null,y=null,b=null,R=null,C=null,he.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:H,disable:X,bindFramebuffer:oe,drawBuffers:de,useProgram:Pe,setBlending:z,setMaterial:Me,setFlipSided:Ce,setCullFace:Ue,setLineWidth:Y,setPolygonOffset:Ve,setScissorTest:De,activeTexture:O,bindTexture:T,unbindTexture:Z,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:Se,texImage3D:Ee,updateUBOMapping:Je,uniformBlockBinding:Ye,texStorage2D:$e,texStorage3D:ce,texSubImage2D:te,texSubImage3D:be,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ge,viewport:we,reset:lt}}function L_(s,e,t,i){let n=_1(i);switch(t){case X_:return s*e;case q_:return s*e;case $_:return s*e*2;case Z_:return s*e/n.components*n.byteLength;case pp:return s*e/n.components*n.byteLength;case K_:return s*e*2/n.components*n.byteLength;case mp:return s*e*2/n.components*n.byteLength;case Y_:return s*e*3/n.components*n.byteLength;case In:return s*e*4/n.components*n.byteLength;case gp:return s*e*4/n.components*n.byteLength;case Cc:case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:case lf:return Math.max(s,16)*Math.max(e,8)/4;case rf:case of:return Math.max(s,8)*Math.max(e,8)/2;case cf:case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Tf:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case J_:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Df:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _1(s){switch(s){case vs:case H_:return{byteLength:1,components:1};case Xo:case G_:case Wi:return{byteLength:2,components:1};case dp:case fp:return{byteLength:2,components:4};case zr:case hp:case gs:return{byteLength:4,components:1};case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function v1(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(O,T){return d?new OffscreenCanvas(O,T):Yo("canvas")}function p(O,T,Z){let ne=1,re=De(O);if((re.width>Z||re.height>Z)&&(ne=Z/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let te=Math.floor(ne*re.width),be=Math.floor(ne*re.height);h===void 0&&(h=m(te,be));let le=T?m(te,be):h;return le.width=te,le.height=be,le.getContext("2d").drawImage(O,0,0,te,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+be+")."),le}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),O;return O}function g(O){return O.generateMipmaps&&O.minFilter!==Ii&&O.minFilter!==Rn}function _(O){s.generateMipmap(O)}function x(O,T,Z,ne,re=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let te=T;if(T===s.RED&&(Z===s.FLOAT&&(te=s.R32F),Z===s.HALF_FLOAT&&(te=s.R16F),Z===s.UNSIGNED_BYTE&&(te=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(te=s.R8UI),Z===s.UNSIGNED_SHORT&&(te=s.R16UI),Z===s.UNSIGNED_INT&&(te=s.R32UI),Z===s.BYTE&&(te=s.R8I),Z===s.SHORT&&(te=s.R16I),Z===s.INT&&(te=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(te=s.RG32F),Z===s.HALF_FLOAT&&(te=s.RG16F),Z===s.UNSIGNED_BYTE&&(te=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(te=s.RG8UI),Z===s.UNSIGNED_SHORT&&(te=s.RG16UI),Z===s.UNSIGNED_INT&&(te=s.RG32UI),Z===s.BYTE&&(te=s.RG8I),Z===s.SHORT&&(te=s.RG16I),Z===s.INT&&(te=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(te=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(te=s.RGB16UI),Z===s.UNSIGNED_INT&&(te=s.RGB32UI),Z===s.BYTE&&(te=s.RGB8I),Z===s.SHORT&&(te=s.RGB16I),Z===s.INT&&(te=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),Z===s.UNSIGNED_INT&&(te=s.RGBA32UI),Z===s.BYTE&&(te=s.RGBA8I),Z===s.SHORT&&(te=s.RGBA16I),Z===s.INT&&(te=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),T===s.RGBA){let be=re?Oc:mt.getTransfer(ne);Z===s.FLOAT&&(te=s.RGBA32F),Z===s.HALF_FLOAT&&(te=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(te=be===Ct?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(O,T){let Z;return O?T===null||T===zr||T===Js?Z=s.DEPTH24_STENCIL8:T===gs?Z=s.DEPTH32F_STENCIL8:T===Xo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zr||T===Js?Z=s.DEPTH_COMPONENT24:T===gs?Z=s.DEPTH_COMPONENT32F:T===Xo&&(Z=s.DEPTH_COMPONENT16),Z}function w(O,T){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ii&&O.minFilter!==Rn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function E(O){let T=O.target;T.removeEventListener("dispose",E),S(T),T.isVideoTexture&&u.delete(T)}function M(O){let T=O.target;T.removeEventListener("dispose",M),D(T)}function S(O){let T=i.get(O);if(T.__webglInit===void 0)return;let Z=O.source,ne=f.get(Z);if(ne){let re=ne[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(O),Object.keys(ne).length===0&&f.delete(Z)}i.remove(O)}function A(O){let T=i.get(O);s.deleteTexture(T.__webglTexture);let Z=O.source,ne=f.get(Z);delete ne[T.__cacheKey],a.memory.textures--}function D(O){let T=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let re=0;re<T.__webglFramebuffer[ne].length;re++)s.deleteFramebuffer(T.__webglFramebuffer[ne][re]);else s.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)s.deleteFramebuffer(T.__webglFramebuffer[ne]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Z=O.textures;for(let ne=0,re=Z.length;ne<re;ne++){let te=i.get(Z[ne]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(Z[ne])}i.remove(O)}let y=0;function b(){y=0}function R(){let O=y;return O>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+n.maxTextures),y+=1,O}function C(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function I(O,T){let Z=i.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){let ne=O.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(Z,O,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function U(O,T){let Z=i.get(O);if(O.version>0&&Z.__version!==O.version){Fe(Z,O,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function B(O,T){let Z=i.get(O);if(O.version>0&&Z.__version!==O.version){Fe(Z,O,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function F(O,T){let Z=i.get(O);if(O.version>0&&Z.__version!==O.version){j(Z,O,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}let L={[nf]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[sf]:s.MIRRORED_REPEAT},k={[Ii]:s.NEAREST,[_b]:s.NEAREST_MIPMAP_NEAREST,[ac]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[dd]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},N={[wb]:s.NEVER,[Ab]:s.ALWAYS,[bb]:s.LESS,[Q_]:s.LEQUAL,[Sb]:s.EQUAL,[Tb]:s.GEQUAL,[Mb]:s.GREATER,[Eb]:s.NOTEQUAL};function ie(O,T){if(T.type===gs&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Rn||T.magFilter===dd||T.magFilter===ac||T.magFilter===Br||T.minFilter===Rn||T.minFilter===dd||T.minFilter===ac||T.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,L[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,L[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,L[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,k[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,k[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ii||T.minFilter!==ac&&T.minFilter!==Br||T.type===gs&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function he(O,T){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",E));let ne=T.source,re=f.get(ne);re===void 0&&(re={},f.set(ne,re));let te=C(T);if(te!==O.__cacheKey){re[te]===void 0&&(re[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),re[te].usedTimes++;let be=re[O.__cacheKey];be!==void 0&&(re[O.__cacheKey].usedTimes--,be.usedTimes===0&&A(T)),O.__cacheKey=te,O.__webglTexture=re[te].texture}return Z}function Fe(O,T,Z){let ne=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=s.TEXTURE_3D);let re=he(O,T),te=T.source;t.bindTexture(ne,O.__webglTexture,s.TEXTURE0+Z);let be=i.get(te);if(te.version!==be.__version||re===!0){t.activeTexture(s.TEXTURE0+Z);let le=mt.getPrimaries(mt.workingColorSpace),fe=T.colorSpace===$s?null:mt.getPrimaries(T.colorSpace),$e=T.colorSpace===$s||le===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ce=p(T.image,!1,n.maxTextureSize);ce=Ve(T,ce);let Se=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type),Ge=x(T.internalFormat,Se,Ee,T.colorSpace,T.isVideoTexture);ie(ne,T);let we,Je=T.mipmaps,Ye=T.isVideoTexture!==!0,lt=be.__version===void 0||re===!0,G=te.dataReady,ae=w(T,ce);if(T.isDepthTexture)Ge=v(T.format===js,T.type),lt&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,Ge,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Ge,ce.width,ce.height,0,Se,Ee,null));else if(T.isDataTexture)if(Je.length>0){Ye&&lt&&t.texStorage2D(s.TEXTURE_2D,ae,Ge,Je[0].width,Je[0].height);for(let ee=0,se=Je.length;ee<se;ee++)we=Je[ee],Ye?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,we.width,we.height,Se,Ee,we.data):t.texImage2D(s.TEXTURE_2D,ee,Ge,we.width,we.height,0,Se,Ee,we.data);T.generateMipmaps=!1}else Ye?(lt&&t.texStorage2D(s.TEXTURE_2D,ae,Ge,ce.width,ce.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,Se,Ee,ce.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,ce.width,ce.height,0,Se,Ee,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ye&&lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ge,Je[0].width,Je[0].height,ce.depth);for(let ee=0,se=Je.length;ee<se;ee++)if(we=Je[ee],T.format!==In)if(Se!==null)if(Ye){if(G)if(T.layerUpdates.size>0){let pe=L_(we.width,we.height,T.format,T.type);for(let me of T.layerUpdates){let je=we.data.subarray(me*pe/we.data.BYTES_PER_ELEMENT,(me+1)*pe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,me,we.width,we.height,1,Se,je,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,we.width,we.height,ce.depth,Se,we.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ge,we.width,we.height,ce.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,we.width,we.height,ce.depth,Se,Ee,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ge,we.width,we.height,ce.depth,0,Se,Ee,we.data)}else{Ye&&lt&&t.texStorage2D(s.TEXTURE_2D,ae,Ge,Je[0].width,Je[0].height);for(let ee=0,se=Je.length;ee<se;ee++)we=Je[ee],T.format!==In?Se!==null?Ye?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,we.width,we.height,Se,Ee,we.data):t.texImage2D(s.TEXTURE_2D,ee,Ge,we.width,we.height,0,Se,Ee,we.data)}else if(T.isDataArrayTexture)if(Ye){if(lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ge,ce.width,ce.height,ce.depth),G)if(T.layerUpdates.size>0){let ee=L_(ce.width,ce.height,T.format,T.type);for(let se of T.layerUpdates){let pe=ce.data.subarray(se*ee/ce.data.BYTES_PER_ELEMENT,(se+1)*ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,Se,Ee,pe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,Ee,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,ce.width,ce.height,ce.depth,0,Se,Ee,ce.data);else if(T.isData3DTexture)Ye?(lt&&t.texStorage3D(s.TEXTURE_3D,ae,Ge,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,Ee,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,ce.width,ce.height,ce.depth,0,Se,Ee,ce.data);else if(T.isFramebufferTexture){if(lt)if(Ye)t.texStorage2D(s.TEXTURE_2D,ae,Ge,ce.width,ce.height);else{let ee=ce.width,se=ce.height;for(let pe=0;pe<ae;pe++)t.texImage2D(s.TEXTURE_2D,pe,Ge,ee,se,0,Se,Ee,null),ee>>=1,se>>=1}}else if(Je.length>0){if(Ye&&lt){let ee=De(Je[0]);t.texStorage2D(s.TEXTURE_2D,ae,Ge,ee.width,ee.height)}for(let ee=0,se=Je.length;ee<se;ee++)we=Je[ee],Ye?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Se,Ee,we):t.texImage2D(s.TEXTURE_2D,ee,Ge,Se,Ee,we);T.generateMipmaps=!1}else if(Ye){if(lt){let ee=De(ce);t.texStorage2D(s.TEXTURE_2D,ae,Ge,ee.width,ee.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Ee,ce)}else t.texImage2D(s.TEXTURE_2D,0,Ge,Se,Ee,ce);g(T)&&_(ne),be.__version=te.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function j(O,T,Z){if(T.image.length!==6)return;let ne=he(O,T),re=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Z);let te=i.get(re);if(re.version!==te.__version||ne===!0){t.activeTexture(s.TEXTURE0+Z);let be=mt.getPrimaries(mt.workingColorSpace),le=T.colorSpace===$s?null:mt.getPrimaries(T.colorSpace),fe=T.colorSpace===$s||be===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let $e=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!$e&&!ce?Se[se]=p(T.image[se],!0,n.maxCubemapSize):Se[se]=ce?T.image[se].image:T.image[se],Se[se]=Ve(T,Se[se]);let Ee=Se[0],Ge=r.convert(T.format,T.colorSpace),we=r.convert(T.type),Je=x(T.internalFormat,Ge,we,T.colorSpace),Ye=T.isVideoTexture!==!0,lt=te.__version===void 0||ne===!0,G=re.dataReady,ae=w(T,Ee);ie(s.TEXTURE_CUBE_MAP,T);let ee;if($e){Ye&&lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Je,Ee.width,Ee.height);for(let se=0;se<6;se++){ee=Se[se].mipmaps;for(let pe=0;pe<ee.length;pe++){let me=ee[pe];T.format!==In?Ge!==null?Ye?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,me.width,me.height,Ge,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,me.width,me.height,Ge,we,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,Je,me.width,me.height,0,Ge,we,me.data)}}}else{if(ee=T.mipmaps,Ye&&lt){ee.length>0&&ae++;let se=De(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Je,se.width,se.height)}for(let se=0;se<6;se++)if(ce){Ye?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Ge,we,Se[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Se[se].width,Se[se].height,0,Ge,we,Se[se].data);for(let pe=0;pe<ee.length;pe++){let je=ee[pe].image[se].image;Ye?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,je.width,je.height,Ge,we,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,Je,je.width,je.height,0,Ge,we,je.data)}}else{Ye?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ge,we,Se[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Ge,we,Se[se]);for(let pe=0;pe<ee.length;pe++){let me=ee[pe];Ye?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,Ge,we,me.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,Je,Ge,we,me.image[se])}}}g(T)&&_(s.TEXTURE_CUBE_MAP),te.__version=re.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function V(O,T,Z,ne,re,te){let be=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),fe=x(Z.internalFormat,be,le,Z.colorSpace);if(!i.get(T).__hasExternalTextures){let ce=Math.max(1,T.width>>te),Se=Math.max(1,T.height>>te);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,te,fe,ce,Se,T.depth,0,be,le,null):t.texImage2D(re,te,fe,ce,Se,0,be,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),Ue(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,re,i.get(Z).__webglTexture,0,Ce(T)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,re,i.get(Z).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function H(O,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){let ne=T.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,te=v(T.stencilBuffer,re),be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Ce(T);Ue(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,te,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,te,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,te,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,O)}else{let ne=T.textures;for(let re=0;re<ne.length;re++){let te=ne[re],be=r.convert(te.format,te.colorSpace),le=r.convert(te.type),fe=x(te.internalFormat,be,le,te.colorSpace),$e=Ce(T);Z&&Ue(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,fe,T.width,T.height):Ue(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function X(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);let ne=i.get(T.depthTexture).__webglTexture,re=Ce(T);if(T.depthTexture.format===Na)Ue(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(T.depthTexture.format===js)Ue(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function oe(O){let T=i.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let ne=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){let re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=ne}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");X(T.__webglFramebuffer,O)}else if(Z){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=s.createRenderbuffer(),H(T.__webglDepthbuffer[ne],O,!1);else{let re=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),H(T.__webglDepthbuffer,O,!1);else{let ne=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(O,T,Z){let ne=i.get(O);T!==void 0&&V(ne.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&oe(O)}function Pe(O){let T=O.texture,Z=i.get(O),ne=i.get(T);O.addEventListener("dispose",M);let re=O.textures,te=O.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=T.version,a.memory.textures++),te){Z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[le]=[];for(let fe=0;fe<T.mipmaps.length;fe++)Z.__webglFramebuffer[le][fe]=s.createFramebuffer()}else Z.__webglFramebuffer[le]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)Z.__webglFramebuffer[le]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(be)for(let le=0,fe=re.length;le<fe;le++){let $e=i.get(re[le]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),a.memory.textures++)}if(O.samples>0&&Ue(O)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){let fe=re[le];Z.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[le]);let $e=r.convert(fe.format,fe.colorSpace),ce=r.convert(fe.type),Se=x(fe.internalFormat,$e,ce,fe.colorSpace,O.isXRRenderTarget===!0),Ee=Ce(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Se,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,Z.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),H(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)V(Z.__webglFramebuffer[le][fe],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else V(Z.__webglFramebuffer[le],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let le=0,fe=re.length;le<fe;le++){let $e=re[le],ce=i.get($e);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),ie(s.TEXTURE_2D,$e),V(Z.__webglFramebuffer,O,$e,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),g($e)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(le=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),ie(le,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)V(Z.__webglFramebuffer[fe],O,T,s.COLOR_ATTACHMENT0,le,fe);else V(Z.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,le,0);g(T)&&_(le),t.unbindTexture()}O.depthBuffer&&oe(O)}function Ae(O){let T=O.textures;for(let Z=0,ne=T.length;Z<ne;Z++){let re=T[Z];if(g(re)){let te=O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,be=i.get(re).__webglTexture;t.bindTexture(te,be),_(te),t.unbindTexture()}}}let Re=[],z=[];function Me(O){if(O.samples>0){if(Ue(O)===!1){let T=O.textures,Z=O.width,ne=O.height,re=s.COLOR_BUFFER_BIT,te=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=i.get(O),le=T.length>1;if(le)for(let fe=0;fe<T.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);let $e=i.get(T[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,re,s.NEAREST),l===!0&&(Re.length=0,z.length=0,Re.push(s.COLOR_ATTACHMENT0+fe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Re.push(te),z.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<T.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);let $e=i.get(T[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){let T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ce(O){return Math.min(n.maxSamples,O.samples)}function Ue(O){let T=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(O){let T=a.render.frame;u.get(O)!==T&&(u.set(O,T),O.update())}function Ve(O,T){let Z=O.colorSpace,ne=O.format,re=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==tr&&Z!==$s&&(mt.getTransfer(Z)===Ct?(ne!==In||re!==vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function De(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=b,this.setTexture2D=I,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=de,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Ue}function x1(s,e){function t(i,n=$s){let r,a=mt.getTransfer(n);if(i===vs)return s.UNSIGNED_BYTE;if(i===dp)return s.UNSIGNED_SHORT_4_4_4_4;if(i===fp)return s.UNSIGNED_SHORT_5_5_5_1;if(i===W_)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===H_)return s.BYTE;if(i===G_)return s.SHORT;if(i===Xo)return s.UNSIGNED_SHORT;if(i===hp)return s.INT;if(i===zr)return s.UNSIGNED_INT;if(i===gs)return s.FLOAT;if(i===Wi)return s.HALF_FLOAT;if(i===X_)return s.ALPHA;if(i===Y_)return s.RGB;if(i===In)return s.RGBA;if(i===q_)return s.LUMINANCE;if(i===$_)return s.LUMINANCE_ALPHA;if(i===Na)return s.DEPTH_COMPONENT;if(i===js)return s.DEPTH_STENCIL;if(i===Z_)return s.RED;if(i===pp)return s.RED_INTEGER;if(i===K_)return s.RG;if(i===mp)return s.RG_INTEGER;if(i===gp)return s.RGBA_INTEGER;if(i===Cc||i===Dc||i===Pc||i===Rc)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rf||i===af||i===of||i===lf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===af)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===of)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===uf||i===hf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cf||i===uf)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===df||i===ff||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf||i===wf||i===bf||i===Sf||i===Mf||i===Ef)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===df)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ff)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_f)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mf)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ef)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===Tf||i===Af)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ic)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Af)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===J_||i===Cf||i===Df||i===Pf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ic)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Df)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var qf=class extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},La=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},y1={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let p of e.hand.values()){let g=t.getJointPose(p,i),_=this._getHandJoint(c,p);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new tn,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pt({vertexShader:w1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zf=class extends Qs{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,p=new $f,g=t.getContextAttributes(),_=null,x=null,v=[],w=[],E=new ke,M=null,S=new xi;S.layers.enable(1),S.viewport=new vt;let A=new xi;A.layers.enable(2),A.viewport=new vt;let D=[S,A],y=new qf;y.layers.enable(1),y.layers.enable(2);let b=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let V=v[j];return V===void 0&&(V=new Wo,v[j]=V),V.getTargetRaySpace()},this.getControllerGrip=function(j){let V=v[j];return V===void 0&&(V=new Wo,v[j]=V),V.getGripSpace()},this.getHand=function(j){let V=v[j];return V===void 0&&(V=new Wo,v[j]=V),V.getHandSpace()};function C(j){let V=w.indexOf(j.inputSource);if(V===-1)return;let H=v[V];H!==void 0&&(H.update(j.inputSource,j.frame,c||a),H.dispatchEvent({type:j.type,data:j.inputSource}))}function I(){n.removeEventListener("select",C),n.removeEventListener("selectstart",C),n.removeEventListener("selectend",C),n.removeEventListener("squeeze",C),n.removeEventListener("squeezestart",C),n.removeEventListener("squeezeend",C),n.removeEventListener("end",I),n.removeEventListener("inputsourceschange",U);for(let j=0;j<v.length;j++){let V=w[j];V!==null&&(w[j]=null,v[j].disconnect(V))}b=null,R=null,p.reset(),e.setRenderTarget(_),d=null,f=null,h=null,n=null,x=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",C),n.addEventListener("selectstart",C),n.addEventListener("selectend",C),n.addEventListener("squeeze",C),n.addEventListener("squeezestart",C),n.addEventListener("squeezeend",C),n.addEventListener("end",I),n.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),n.renderState.layers===void 0){let V={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,V),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ai(d.framebufferWidth,d.framebufferHeight,{format:In,type:vs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let V=null,H=null,X=null;g.depth&&(X=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=g.stencil?js:Na,H=g.stencil?Js:zr);let oe={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(oe),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ai(f.textureWidth,f.textureHeight,{format:In,type:vs,depthTexture:new Wa(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Fe.setContext(n),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(j){for(let V=0;V<j.removed.length;V++){let H=j.removed[V],X=w.indexOf(H);X>=0&&(w[X]=null,v[X].disconnect(H))}for(let V=0;V<j.added.length;V++){let H=j.added[V],X=w.indexOf(H);if(X===-1){for(let de=0;de<v.length;de++)if(de>=w.length){w.push(H),X=de;break}else if(w[de]===null){w[de]=H,X=de;break}if(X===-1)break}let oe=v[X];oe&&oe.connect(H)}}let B=new Q,F=new Q;function L(j,V,H){B.setFromMatrixPosition(V.matrixWorld),F.setFromMatrixPosition(H.matrixWorld);let X=B.distanceTo(F),oe=V.projectionMatrix.elements,de=H.projectionMatrix.elements,Pe=oe[14]/(oe[10]-1),Ae=oe[14]/(oe[10]+1),Re=(oe[9]+1)/oe[5],z=(oe[9]-1)/oe[5],Me=(oe[8]-1)/oe[0],Ce=(de[8]+1)/de[0],Ue=Pe*Me,Y=Pe*Ce,Ve=X/(-Me+Ce),De=Ve*-Me;if(V.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),oe[10]===-1)j.projectionMatrix.copy(V.projectionMatrix),j.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let O=Pe+Ve,T=Ae+Ve,Z=Ue-De,ne=Y+(X-De),re=Re*Ae/T*O,te=z*Ae/T*O;j.projectionMatrix.makePerspective(Z,ne,re,te,O,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function k(j,V){V===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(V.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let V=j.near,H=j.far;p.texture!==null&&(p.depthNear>0&&(V=p.depthNear),p.depthFar>0&&(H=p.depthFar)),y.near=A.near=S.near=V,y.far=A.far=S.far=H,(b!==y.near||R!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,R=y.far);let X=j.parent,oe=y.cameras;k(y,X);for(let de=0;de<oe.length;de++)k(oe[de],X);oe.length===2?L(y,S,A):y.projectionMatrix.copy(S.projectionMatrix),N(j,y,X)};function N(j,V,H){H===null?j.matrix.copy(V.matrixWorld):(j.matrix.copy(H.matrixWorld),j.matrix.invert(),j.matrix.multiply(V.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(V.projectionMatrix),j.projectionMatrixInverse.copy(V.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=If*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(y)};let ie=null;function he(j,V){if(u=V.getViewerPose(c||a),m=V,u!==null){let H=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let X=!1;H.length!==y.cameras.length&&(y.cameras.length=0,X=!0);for(let de=0;de<H.length;de++){let Pe=H[de],Ae=null;if(d!==null)Ae=d.getViewport(Pe);else{let z=h.getViewSubImage(f,Pe);Ae=z.viewport,de===0&&(e.setRenderTargetTextures(x,z.colorTexture,f.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(x))}let Re=D[de];Re===void 0&&(Re=new xi,Re.layers.enable(de),Re.viewport=new vt,D[de]=Re),Re.matrix.fromArray(Pe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Pe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),de===0&&(y.matrix.copy(Re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),X===!0&&y.cameras.push(Re)}let oe=n.enabledFeatures;if(oe&&oe.includes("depth-sensing")){let de=h.getDepthInformation(H[0]);de&&de.isValid&&de.texture&&p.init(e,de,n.renderState)}}for(let H=0;H<v.length;H++){let X=w[H],oe=v[H];X!==null&&oe!==void 0&&oe.update(X,V,c||a)}ie&&ie(j,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),m=null}let Fe=new nv;Fe.setAnimationLoop(he),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}},Lr=new xs,S1=new Dt;function M1(s,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,iv(s)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function n(g,_,x,v,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(g,_):_.isMeshToonMaterial?(r(g,_),h(g,_)):_.isMeshPhongMaterial?(r(g,_),u(g,_)):_.isMeshStandardMaterial?(r(g,_),f(g,_),_.isMeshPhysicalMaterial&&d(g,_,w)):_.isMeshMatcapMaterial?(r(g,_),m(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),p(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?l(g,_,x,v):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Gi&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Gi&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let x=e.get(_),v=x.envMap,w=x.envMapRotation;v&&(g.envMap.value=v,Lr.copy(w),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),g.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Lr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,x,v){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*x,g.scale.value=v*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function h(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function f(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function d(g,_,x){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gi&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,_){_.matcap&&(g.matcap.value=_.matcap)}function p(g,_){let x=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function E1(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let w=v.program;i.uniformBlockBinding(x,w)}function c(x,v){let w=n[x.id];w===void 0&&(m(x),w=u(x),n[x.id]=w,x.addEventListener("dispose",g));let E=v.program;i.updateUBOMapping(x,E);let M=e.render.frame;r[x.id]!==M&&(f(x),r[x.id]=M)}function u(x){let v=h();x.__bindingPointIndex=v;let w=s.createBuffer(),E=x.__size,M=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,E,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let v=n[x.id],w=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let M=0,S=w.length;M<S;M++){let A=Array.isArray(w[M])?w[M]:[w[M]];for(let D=0,y=A.length;D<y;D++){let b=A[D];if(d(b,M,D,E)===!0){let R=b.__offset,C=Array.isArray(b.value)?b.value:[b.value],I=0;for(let U=0;U<C.length;U++){let B=C[U],F=p(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,R+I,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,I),I+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,w,E){let M=x.value,S=v+"_"+w;if(E[S]===void 0)return typeof M=="number"||typeof M=="boolean"?E[S]=M:E[S]=M.clone(),!0;{let A=E[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return E[S]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function m(x){let v=x.uniforms,w=0,E=16;for(let S=0,A=v.length;S<A;S++){let D=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,b=D.length;y<b;y++){let R=D[y],C=Array.isArray(R.value)?R.value:[R.value];for(let I=0,U=C.length;I<U;I++){let B=C[I],F=p(B),L=w%E,k=L%F.boundary,N=L+k;w+=k,N!==0&&E-N<F.storage&&(w+=E-N),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=F.storage}}}let M=w%E;return M>0&&(w+=E-M),x.__size=w,x.__cache={},this}function p(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function _(){for(let x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:l,update:c,dispose:_}}var $c=class{constructor(e={}){let{canvas:t=Db(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let d=new Uint32Array(4),m=new Int32Array(4),p=null,g=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Zs,this.toneMappingExposure=1;let v=this,w=!1,E=0,M=0,S=null,A=-1,D=null,y=new vt,b=new vt,R=null,C=new Ze(0),I=0,U=t.width,B=t.height,F=1,L=null,k=null,N=new vt(0,0,U,B),ie=new vt(0,0,U,B),he=!1,Fe=new Zo,j=!1,V=!1,H=new Dt,X=new Dt,oe=new Q,de=new vt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Re(){return S===null?F:1}let z=i;function Me(P,q){return t.getContext(P,q)}try{let P={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lp}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){let q="webgl2";if(z=Me(q,P),z===null)throw Me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ce,Ue,Y,Ve,De,O,T,Z,ne,re,te,be,le,fe,$e,ce,Se,Ee,Ge,we,Je,Ye,lt,G;function ae(){Ce=new VE(z),Ce.init(),Ye=new x1(z,Ce),Ue=new NE(z,Ce,e,Ye),Y=new g1(z),Ue.reverseDepthBuffer&&Y.buffers.depth.setReversed(!0),Ve=new WE(z),De=new n1,O=new v1(z,Ce,Y,De,Ue,Ye,Ve),T=new UE(v),Z=new kE(v),ne=new Jb(z),lt=new LE(z,ne),re=new HE(z,ne,Ve,lt),te=new YE(z,re,ne,Ve),Ge=new XE(z,Ue,O),ce=new OE(De),be=new i1(v,T,Z,Ce,Ue,lt,ce),le=new M1(v,De),fe=new r1,$e=new h1(Ce),Ee=new IE(v,T,Z,Y,te,f,l),Se=new p1(v,te,Ue),G=new E1(z,Ve,Ue,Y),we=new FE(z,Ce,Ve),Je=new GE(z,Ce,Ve),Ve.programs=be.programs,v.capabilities=Ue,v.extensions=Ce,v.properties=De,v.renderLists=fe,v.shadowMap=Se,v.state=Y,v.info=Ve}ae();let ee=new Zf(v,z);this.xr=ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let P=Ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(U,B,!1))},this.getSize=function(P){return P.set(U,B)},this.setSize=function(P,q,K=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,B=q,t.width=Math.floor(P*F),t.height=Math.floor(q*F),K===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(U*F,B*F).floor()},this.setDrawingBufferSize=function(P,q,K){U=P,B=q,F=K,t.width=Math.floor(P*K),t.height=Math.floor(q*K),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,q,K,J){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,q,K,J),Y.viewport(y.copy(N).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,q,K,J){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,q,K,J),Y.scissor(b.copy(ie).multiplyScalar(F).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(P){Y.setScissorTest(he=P)},this.setOpaqueSort=function(P){L=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(P=!0,q=!0,K=!0){let J=0;if(P){let W=!1;if(S!==null){let ue=S.texture.format;W=ue===gp||ue===mp||ue===pp}if(W){let ue=S.texture.type,ye=ue===vs||ue===zr||ue===Xo||ue===Js||ue===dp||ue===fp,_e=Ee.getClearColor(),ge=Ee.getClearAlpha(),Ne=_e.r,Xe=_e.g,Le=_e.b;ye?(d[0]=Ne,d[1]=Xe,d[2]=Le,d[3]=ge,z.clearBufferuiv(z.COLOR,0,d)):(m[0]=Ne,m[1]=Xe,m[2]=Le,m[3]=ge,z.clearBufferiv(z.COLOR,0,m))}else J|=z.COLOR_BUFFER_BIT}q&&(J|=z.DEPTH_BUFFER_BIT,z.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),fe.dispose(),$e.dispose(),De.dispose(),T.dispose(),Z.dispose(),te.dispose(),lt.dispose(),G.dispose(),be.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",dt),ee.removeEventListener("sessionend",ve),We.stop()};function se(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=Ve.autoReset,q=Se.enabled,K=Se.autoUpdate,J=Se.needsUpdate,W=Se.type;ae(),Ve.autoReset=P,Se.enabled=q,Se.autoUpdate=K,Se.needsUpdate=J,Se.type=W}function me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function je(P){let q=P.target;q.removeEventListener("dispose",je),xt(q)}function xt(P){Rt(P),De.remove(P)}function Rt(P){let q=De.get(P).programs;q!==void 0&&(q.forEach(function(K){be.releaseProgram(K)}),P.isShaderMaterial&&be.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,K,J,W,ue){q===null&&(q=Pe);let ye=W.isMesh&&W.matrixWorld.determinant()<0,_e=gt(P,q,K,J,W);Y.setMaterial(J,ye);let ge=K.index,Ne=1;if(J.wireframe===!0){if(ge=re.getWireframeAttribute(K),ge===void 0)return;Ne=2}let Xe=K.drawRange,Le=K.attributes.position,ct=Xe.start*Ne,at=(Xe.start+Xe.count)*Ne;ue!==null&&(ct=Math.max(ct,ue.start*Ne),at=Math.min(at,(ue.start+ue.count)*Ne)),ge!==null?(ct=Math.max(ct,0),at=Math.min(at,ge.count)):Le!=null&&(ct=Math.max(ct,0),at=Math.min(at,Le.count));let _t=at-ct;if(_t<0||_t===1/0)return;lt.setup(W,J,_e,K,ge);let ei,ot=we;if(ge!==null&&(ei=ne.get(ge),ot=Je,ot.setIndex(ei)),W.isMesh)J.wireframe===!0?(Y.setLineWidth(J.wireframeLinewidth*Re()),ot.setMode(z.LINES)):ot.setMode(z.TRIANGLES);else if(W.isLine){let ze=J.linewidth;ze===void 0&&(ze=1),Y.setLineWidth(ze*Re()),W.isLineSegments?ot.setMode(z.LINES):W.isLineLoop?ot.setMode(z.LINE_LOOP):ot.setMode(z.LINE_STRIP)}else W.isPoints?ot.setMode(z.POINTS):W.isSprite&&ot.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ze=W._multiDrawStarts,oi=W._multiDrawCounts,pt=W._multiDrawCount,xn=ge?ne.get(ge).bytesPerElement:1,Wr=De.get(J).currentProgram.getUniforms();for(let Yi=0;Yi<pt;Yi++)Wr.setValue(z,"_gl_DrawID",Yi),ot.render(ze[Yi]/xn,oi[Yi])}else if(W.isInstancedMesh)ot.renderInstances(ct,_t,W.count);else if(K.isInstancedBufferGeometry){let ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,oi=Math.min(K.instanceCount,ze);ot.renderInstances(ct,_t,oi)}else ot.render(ct,_t)};function rt(P,q,K){P.transparent===!0&&P.side===ms&&P.forceSinglePass===!1?(P.side=Gi,P.needsUpdate=!0,Gt(P,q,K),P.side=Ks,P.needsUpdate=!0,Gt(P,q,K),P.side=ms):Gt(P,q,K)}this.compile=function(P,q,K=null){K===null&&(K=P),g=$e.get(K),g.init(q),x.push(g),K.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),P!==K&&P.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();let J=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ue=W.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let _e=ue[ye];rt(_e,K,W),J.add(_e)}else rt(ue,K,W),J.add(ue)}),x.pop(),g=null,J},this.compileAsync=function(P,q,K=null){let J=this.compile(P,q,K);return new Promise(W=>{function ue(){if(J.forEach(function(ye){De.get(ye).currentProgram.isReady()&&J.delete(ye)}),J.size===0){W(P);return}setTimeout(ue,10)}Ce.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Oe=null;function Ie(P){Oe&&Oe(P)}function dt(){We.stop()}function ve(){We.start()}let We=new nv;We.setAnimationLoop(Ie),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(P){Oe=P,ee.setAnimationLoop(P),P===null?We.stop():We.start()},ee.addEventListener("sessionstart",dt),ee.addEventListener("sessionend",ve),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(q),q=ee.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,q,S),g=$e.get(P,x.length),g.init(q),x.push(g),X.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Fe.setFromProjectionMatrix(X),V=this.localClippingEnabled,j=ce.init(this.clippingPlanes,V),p=fe.get(P,_.length),p.init(),_.push(p),ee.enabled===!0&&ee.isPresenting===!0){let ue=v.xr.getDepthSensingMesh();ue!==null&&Be(ue,q,-1/0,v.sortObjects)}Be(P,q,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(L,k),Ae=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ae&&Ee.addToRenderList(p,P),this.info.render.frame++,j===!0&&ce.beginShadows();let K=g.state.shadowsArray;Se.render(K,P,q),j===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=p.opaque,W=p.transmissive;if(g.setupLights(),q.isArrayCamera){let ue=q.cameras;if(W.length>0)for(let ye=0,_e=ue.length;ye<_e;ye++){let ge=ue[ye];Ht(J,W,P,ge)}Ae&&Ee.render(P);for(let ye=0,_e=ue.length;ye<_e;ye++){let ge=ue[ye];qe(p,P,ge,ge.viewport)}}else W.length>0&&Ht(J,W,P,q),Ae&&Ee.render(P),qe(p,P,q);S!==null&&(O.updateMultisampleRenderTarget(S),O.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(v,P,q),lt.resetDefaultState(),A=-1,D=null,x.pop(),x.length>0?(g=x[x.length-1],j===!0&&ce.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Be(P,q,K,J){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Fe.intersectsSprite(P)){J&&de.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);let ye=te.update(P),_e=P.material;_e.visible&&p.push(P,ye,_e,K,de.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Fe.intersectsObject(P))){let ye=te.update(P),_e=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),de.copy(P.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),de.copy(ye.boundingSphere.center)),de.applyMatrix4(P.matrixWorld).applyMatrix4(X)),Array.isArray(_e)){let ge=ye.groups;for(let Ne=0,Xe=ge.length;Ne<Xe;Ne++){let Le=ge[Ne],ct=_e[Le.materialIndex];ct&&ct.visible&&p.push(P,ye,ct,K,de.z,Le)}}else _e.visible&&p.push(P,ye,_e,K,de.z,null)}}let ue=P.children;for(let ye=0,_e=ue.length;ye<_e;ye++)Be(ue[ye],q,K,J)}function qe(P,q,K,J){let W=P.opaque,ue=P.transmissive,ye=P.transparent;g.setupLightsView(K),j===!0&&ce.setGlobalState(v.clippingPlanes,K),J&&Y.viewport(y.copy(J)),W.length>0&&et(W,q,K),ue.length>0&&et(ue,q,K),ye.length>0&&et(ye,q,K),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ht(P,q,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new ai(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Wi:vs,minFilter:Br,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let ue=g.state.transmissionRenderTarget[J.id],ye=J.viewport||y;ue.setSize(ye.z,ye.w);let _e=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(C),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear(),Ae&&Ee.render(K);let ge=v.toneMapping;v.toneMapping=Zs;let Ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),j===!0&&ce.setGlobalState(v.clippingPlanes,J),et(P,K,J),O.updateMultisampleRenderTarget(ue),O.updateRenderTargetMipmap(ue),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Le=0,ct=q.length;Le<ct;Le++){let at=q[Le],_t=at.object,ei=at.geometry,ot=at.material,ze=at.group;if(ot.side===ms&&_t.layers.test(J.layers)){let oi=ot.side;ot.side=Gi,ot.needsUpdate=!0,It(_t,K,J,ei,ot,ze),ot.side=oi,ot.needsUpdate=!0,Xe=!0}}Xe===!0&&(O.updateMultisampleRenderTarget(ue),O.updateRenderTargetMipmap(ue))}v.setRenderTarget(_e),v.setClearColor(C,I),Ne!==void 0&&(J.viewport=Ne),v.toneMapping=ge}function et(P,q,K){let J=q.isScene===!0?q.overrideMaterial:null;for(let W=0,ue=P.length;W<ue;W++){let ye=P[W],_e=ye.object,ge=ye.geometry,Ne=J===null?ye.material:J,Xe=ye.group;_e.layers.test(K.layers)&&It(_e,q,K,ge,Ne,Xe)}}function It(P,q,K,J,W,ue){P.onBeforeRender(v,q,K,J,W,ue),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(v,q,K,J,P,ue),W.transparent===!0&&W.side===ms&&W.forceSinglePass===!1?(W.side=Gi,W.needsUpdate=!0,v.renderBufferDirect(K,q,J,W,P,ue),W.side=Ks,W.needsUpdate=!0,v.renderBufferDirect(K,q,J,W,P,ue),W.side=ms):v.renderBufferDirect(K,q,J,W,P,ue),P.onAfterRender(v,q,K,J,W,ue)}function Gt(P,q,K){q.isScene!==!0&&(q=Pe);let J=De.get(P),W=g.state.lights,ue=g.state.shadowsArray,ye=W.state.version,_e=be.getParameters(P,W.state,ue,q,K),ge=be.getProgramCacheKey(_e),Ne=J.programs;J.environment=P.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(P.isMeshStandardMaterial?Z:T).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Ne===void 0&&(P.addEventListener("dispose",je),Ne=new Map,J.programs=Ne);let Xe=Ne.get(ge);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===ye)return yt(P,_e),Xe}else _e.uniforms=be.getUniforms(P),P.onBeforeCompile(_e,v),Xe=be.acquireProgram(_e,ge),Ne.set(ge,Xe),J.uniforms=_e.uniforms;let Le=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Le.clippingPlanes=ce.uniform),yt(P,_e),J.needsLights=Et(P),J.lightsStateVersion=ye,J.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function Mt(P){if(P.uniformsList===null){let q=P.currentProgram.getUniforms();P.uniformsList=Ua.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function yt(P,q){let K=De.get(P);K.outputColorSpace=q.outputColorSpace,K.batching=q.batching,K.batchingColor=q.batchingColor,K.instancing=q.instancing,K.instancingColor=q.instancingColor,K.instancingMorph=q.instancingMorph,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function gt(P,q,K,J,W){q.isScene!==!0&&(q=Pe),O.resetTextureUnits();let ue=q.fog,ye=J.isMeshStandardMaterial?q.environment:null,_e=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:tr,ge=(J.isMeshStandardMaterial?Z:T).get(J.envMap||ye),Ne=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Le=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,at=!!K.morphAttributes.color,_t=Zs;J.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_t=v.toneMapping);let ei=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=ei!==void 0?ei.length:0,ze=De.get(J),oi=g.state.lights;if(j===!0&&(V===!0||P!==D)){let sn=P===D&&J.id===A;ce.setState(J,P,sn)}let pt=!1;J.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==oi.state.version||ze.outputColorSpace!==_e||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==ge||J.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ce.numPlanes||ze.numIntersection!==ce.numIntersection)||ze.vertexAlphas!==Ne||ze.vertexTangents!==Xe||ze.morphTargets!==Le||ze.morphNormals!==ct||ze.morphColors!==at||ze.toneMapping!==_t||ze.morphTargetsCount!==ot)&&(pt=!0):(pt=!0,ze.__version=J.version);let xn=ze.currentProgram;pt===!0&&(xn=Gt(J,q,W));let Wr=!1,Yi=!1,fu=!1,Wt=xn.getUniforms(),bs=ze.uniforms;if(Y.useProgram(xn.program)&&(Wr=!0,Yi=!0,fu=!0),J.id!==A&&(A=J.id,Yi=!0),Wr||D!==P){Ue.reverseDepthBuffer?(H.copy(P.projectionMatrix),Rb(H),Ib(H),Wt.setValue(z,"projectionMatrix",H)):Wt.setValue(z,"projectionMatrix",P.projectionMatrix),Wt.setValue(z,"viewMatrix",P.matrixWorldInverse);let sn=Wt.map.cameraPosition;sn!==void 0&&sn.setValue(z,oe.setFromMatrixPosition(P.matrixWorld)),Ue.logarithmicDepthBuffer&&Wt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Wt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),D!==P&&(D=P,Yi=!0,fu=!0)}if(W.isSkinnedMesh){Wt.setOptional(z,W,"bindMatrix"),Wt.setOptional(z,W,"bindMatrixInverse");let sn=W.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Wt.setValue(z,"boneTexture",sn.boneTexture,O))}W.isBatchedMesh&&(Wt.setOptional(z,W,"batchingTexture"),Wt.setValue(z,"batchingTexture",W._matricesTexture,O),Wt.setOptional(z,W,"batchingIdTexture"),Wt.setValue(z,"batchingIdTexture",W._indirectTexture,O),Wt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&Wt.setValue(z,"batchingColorTexture",W._colorsTexture,O));let pu=K.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0)&&Ge.update(W,K,xn),(Yi||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,Wt.setValue(z,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bs.envMap.value=ge,bs.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(bs.envMapIntensity.value=q.environmentIntensity),Yi&&(Wt.setValue(z,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Xi(bs,fu),ue&&J.fog===!0&&le.refreshFogUniforms(bs,ue),le.refreshMaterialUniforms(bs,J,F,B,g.state.transmissionRenderTarget[P.id]),Ua.upload(z,Mt(ze),bs,O)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ua.upload(z,Mt(ze),bs,O),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Wt.setValue(z,"center",W.center),Wt.setValue(z,"modelViewMatrix",W.modelViewMatrix),Wt.setValue(z,"normalMatrix",W.normalMatrix),Wt.setValue(z,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let sn=J.uniformsGroups;for(let mu=0,hv=sn.length;mu<hv;mu++){let bp=sn[mu];G.update(bp,xn),G.bind(bp,xn)}}return xn}function Xi(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Et(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,q,K){De.get(P.texture).__webglTexture=q,De.get(P.depthTexture).__webglTexture=K;let J=De.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){let K=De.get(P);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,K=0){S=P,E=q,M=K;let J=!0,W=null,ue=!1,ye=!1;if(P){let ge=De.get(P);if(ge.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(z.FRAMEBUFFER,null),J=!1;else if(ge.__webglFramebuffer===void 0)O.setupRenderTarget(P);else if(ge.__hasExternalTextures)O.rebindTextures(P,De.get(P.texture).__webglTexture,De.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Le=P.depthTexture;if(ge.__boundDepthTexture!==Le){if(Le!==null&&De.has(Le)&&(P.width!==Le.image.width||P.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(P)}}let Ne=P.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);let Xe=De.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?W=Xe[q][K]:W=Xe[q],ue=!0):P.samples>0&&O.useMultisampledRTT(P)===!1?W=De.get(P).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[K]:W=Xe,y.copy(P.viewport),b.copy(P.scissor),R=P.scissorTest}else y.copy(N).multiplyScalar(F).floor(),b.copy(ie).multiplyScalar(F).floor(),R=he;if(Y.bindFramebuffer(z.FRAMEBUFFER,W)&&J&&Y.drawBuffers(P,W),Y.viewport(y),Y.scissor(b),Y.setScissorTest(R),ue){let ge=De.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge.__webglTexture,K)}else if(ye){let ge=De.get(P.texture),Ne=q||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ge.__webglTexture,K||0,Ne)}A=-1},this.readRenderTargetPixels=function(P,q,K,J,W,ue,ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ye!==void 0&&(_e=_e[ye]),_e){Y.bindFramebuffer(z.FRAMEBUFFER,_e);try{let ge=P.texture,Ne=ge.format,Xe=ge.type;if(!Ue.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-J&&K>=0&&K<=P.height-W&&z.readPixels(q,K,J,W,Ye.convert(Ne),Ye.convert(Xe),ue)}finally{let ge=S!==null?De.get(S).__webglFramebuffer:null;Y.bindFramebuffer(z.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(P,q,K,J,W,ue,ye){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ye!==void 0&&(_e=_e[ye]),_e){let ge=P.texture,Ne=ge.format,Xe=ge.type;if(!Ue.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-J&&K>=0&&K<=P.height-W){Y.bindFramebuffer(z.FRAMEBUFFER,_e);let Le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.bufferData(z.PIXEL_PACK_BUFFER,ue.byteLength,z.STREAM_READ),z.readPixels(q,K,J,W,Ye.convert(Ne),Ye.convert(Xe),0);let ct=S!==null?De.get(S).__webglFramebuffer:null;Y.bindFramebuffer(z.FRAMEBUFFER,ct);let at=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Pb(z,at,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ue),z.deleteBuffer(Le),z.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,q=null,K=0){P.isTexture!==!0&&(Lc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);let J=Math.pow(2,-K),W=Math.floor(P.image.width*J),ue=Math.floor(P.image.height*J),ye=q!==null?q.x:0,_e=q!==null?q.y:0;O.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,ye,_e,W,ue),Y.unbindTexture()},this.copyTextureToTexture=function(P,q,K=null,J=null,W=0){P.isTexture!==!0&&(Lc("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],q=arguments[2],W=arguments[3]||0,K=null);let ue,ye,_e,ge,Ne,Xe;K!==null?(ue=K.max.x-K.min.x,ye=K.max.y-K.min.y,_e=K.min.x,ge=K.min.y):(ue=P.image.width,ye=P.image.height,_e=0,ge=0),J!==null?(Ne=J.x,Xe=J.y):(Ne=0,Xe=0);let Le=Ye.convert(q.format),ct=Ye.convert(q.type);O.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let at=z.getParameter(z.UNPACK_ROW_LENGTH),_t=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ei=z.getParameter(z.UNPACK_SKIP_PIXELS),ot=z.getParameter(z.UNPACK_SKIP_ROWS),ze=z.getParameter(z.UNPACK_SKIP_IMAGES),oi=P.isCompressedTexture?P.mipmaps[W]:P.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,oi.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oi.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_e),z.pixelStorei(z.UNPACK_SKIP_ROWS,ge),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,Ne,Xe,ue,ye,Le,ct,oi.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,Ne,Xe,oi.width,oi.height,Le,oi.data):z.texSubImage2D(z.TEXTURE_2D,W,Ne,Xe,ue,ye,Le,ct,oi),z.pixelStorei(z.UNPACK_ROW_LENGTH,at),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ei),z.pixelStorei(z.UNPACK_SKIP_ROWS,ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze),W===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(P,q,K=null,J=null,W=0){P.isTexture!==!0&&(Lc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,P=arguments[2],q=arguments[3],W=arguments[4]||0);let ue,ye,_e,ge,Ne,Xe,Le,ct,at,_t=P.isCompressedTexture?P.mipmaps[W]:P.image;K!==null?(ue=K.max.x-K.min.x,ye=K.max.y-K.min.y,_e=K.max.z-K.min.z,ge=K.min.x,Ne=K.min.y,Xe=K.min.z):(ue=_t.width,ye=_t.height,_e=_t.depth,ge=0,Ne=0,Xe=0),J!==null?(Le=J.x,ct=J.y,at=J.z):(Le=0,ct=0,at=0);let ei=Ye.convert(q.format),ot=Ye.convert(q.type),ze;if(q.isData3DTexture)O.setTexture3D(q,0),ze=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)O.setTexture2DArray(q,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let oi=z.getParameter(z.UNPACK_ROW_LENGTH),pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xn=z.getParameter(z.UNPACK_SKIP_PIXELS),Wr=z.getParameter(z.UNPACK_SKIP_ROWS),Yi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe),P.isDataTexture||P.isData3DTexture?z.texSubImage3D(ze,W,Le,ct,at,ue,ye,_e,ei,ot,_t.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(ze,W,Le,ct,at,ue,ye,_e,ei,_t.data):z.texSubImage3D(ze,W,Le,ct,at,ue,ye,_e,ei,ot,_t),z.pixelStorei(z.UNPACK_ROW_LENGTH,oi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Wr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yi),W===0&&q.generateMipmaps&&z.generateMipmap(ze),Y.unbindTexture()},this.initRenderTarget=function(P){De.get(P).__webglFramebuffer===void 0&&O.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?O.setTextureCube(P,0):P.isData3DTexture?O.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?O.setTexture2DArray(P,0):O.setTexture2D(P,0),Y.unbindTexture()},this.resetState=function(){E=0,M=0,S=null,Y.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _s}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_p?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===au?"display-p3":"srgb"}};var Zc=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Kc=class extends Vr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Ac(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function T1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Xa=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kf=class extends Xa{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:H0,endingEnd:H0}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case G0:r=e,o=2*t-i;break;case W0:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case G0:a=e,l=2*i-t;break;case W0:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(n-t),p=m*m,g=p*m,_=-f*g+2*f*p-f*m,x=(1+f)*g+(-1.5-2*f)*p+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*p+.5*m,w=d*g-d*p;for(let E=0;E!==o;++E)r[E]=_*a[u+E]+x*a[c+E]+v*a[l+E]+w*a[h+E];return r}},Jf=class extends Xa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},jf=class extends Xa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nc:t=this.InterpolantFactoryMethodDiscrete;break;case Rf:t=this.InterpolantFactoryMethodLinear;break;case fd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nc;case this.InterpolantFactoryMethodLinear:return Rf;case this.InterpolantFactoryMethodSmooth:return fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&T1(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fd,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){let p=t[h+m];if(p!==t[f+m]||p!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Rf;var Hr=class extends Ln{constructor(e,t,i){super(e,t,i)}};Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Nc;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qf=class extends Ln{};Qf.prototype.ValueTypeName="color";var ep=class extends Ln{};ep.prototype.ValueTypeName="number";var tp=class extends Xa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let u=c+o;c!==u;c+=4)er.slerpFlat(r,0,a,c-o,a,c,l);return r}},Jc=class extends Ln{InterpolantFactoryMethodLinear(e){return new tp(this.times,this.values,this.getValueSize(),e)}};Jc.prototype.ValueTypeName="quaternion";Jc.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends Ln{constructor(e,t,i){super(e,t,i)}};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Nc;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var ip=class extends Ln{};ip.prototype.ValueTypeName="vector";var F_={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},np=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}},A1=new np,Jo=class{constructor(e){this.manager=e!==void 0?e:A1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var sp=class extends Jo{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=F_.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Yo("img");function l(){u(),F_.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var jc=class extends Jo{constructor(e){super(e)}load(e,t,i,n){let r=new tn,a=new sp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Qc=class extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Gd=new Dt,N_=new Q,O_=new Q,rp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;N_.setFromMatrixPosition(e.matrixWorld),t.position.copy(N_),O_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(O_),t.updateMatrixWorld(),Gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var U_=new Dt,Ho=new Q,Wd=new Q,ap=class extends rp{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ho),Wd.copy(i.position),Wd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wd),i.updateMatrixWorld(),n.makeTranslation(-Ho.x,-Ho.y,-Ho.z),U_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(U_)}},eu=class extends Qc{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var tu=class extends Qc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var iu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=B_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=B_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function B_(){return performance.now()}var xp="\\[\\]\\.:\\/",C1=new RegExp("["+xp+"]","g"),yp="[^"+xp+"]",D1="[^"+xp.replace("\\.","")+"]",P1=/((?:WC+[\/:])*)/.source.replace("WC",yp),R1=/(WCOD+)?/.source.replace("WCOD",D1),I1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yp),L1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yp),F1=new RegExp("^"+P1+R1+I1+L1+"$"),N1=["material","materials","bones","map"],op=class{constructor(e,t,i){let n=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C1,"")}static parseTrackName(e){let t=F1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);N1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=op;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bP=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);var Li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U1=new Ko(-1,1,1,-1,0,1),wp=class extends ys{constructor(){super(),this.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _n([0,2,0,0,2,0],2))}},B1=new wp,qn=class{constructor(e){this._mesh=new en(B1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var lu=class extends Li{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qo=class extends Li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},cu=class extends Li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var uu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ke);this._width=i.width,this._height=i.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lu(ir),this.copyPass.material.blending=ri,this.clock=new iu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(a instanceof Qo?i=!0:a instanceof cu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var lv={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};var hu=class extends Li{constructor(e=.5,t=!1){super();let i=lv;this.uniforms=nn.clone(i.uniforms),this.material=new Pt({name:i.name,uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this.fsQuad=new qn(this.material)}render(e,t,i,n){this.uniforms.tDiffuse.value=i.texture,this.uniforms.time.value+=n,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var du=class extends Li{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var el={name:"SAOShader",defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new ke(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Dt},cameraInverseProjectionMatrix:{value:new Dt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform highp sampler2D tDepth;
		uniform highp sampler2D tNormal;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`};var ws={name:"DepthLimitedBlurShader",defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new ke(512,512)},sampleUvOffsets:{value:[new ke(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},tl={createSampleWeights:function(s,e){let t=[];for(let i=0;i<=s;i++)t.push(z1(i,e));return t},createSampleOffsets:function(s,e){let t=[];for(let i=0;i<=s;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(s,e,t,i){s.defines.KERNEL_RADIUS=e,s.uniforms.sampleUvOffsets.value=tl.createSampleOffsets(e,i),s.uniforms.sampleWeights.value=tl.createSampleWeights(e,t),s.needsUpdate=!0}};function z1(s,e){return Math.exp(-(s*s)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}var il=class s extends Li{constructor(e,t,i=new ke(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.originalClearColor=new Ze,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new ke(i.x,i.y),this.saoRenderTarget=new ai(this.resolution.x,this.resolution.y,{type:Wi}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();let n=new Wa;n.format=js,n.type=Js,this.normalRenderTarget=new ai(this.resolution.x,this.resolution.y,{minFilter:Ii,magFilter:Ii,type:Wi,depthTexture:n}),this.normalMaterial=new Kc,this.normalMaterial.blending=ri,this.saoMaterial=new Pt({defines:Object.assign({},el.defines),fragmentShader:el.fragmentShader,vertexShader:el.vertexShader,uniforms:nn.clone(el.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=n,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=ri,this.vBlurMaterial=new Pt({uniforms:nn.clone(ws.uniforms),defines:Object.assign({},ws.defines),vertexShader:ws.vertexShader,fragmentShader:ws.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=n,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=ri,this.hBlurMaterial=new Pt({uniforms:nn.clone(ws.uniforms),defines:Object.assign({},ws.defines),vertexShader:ws.vertexShader,fragmentShader:ws.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=n,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=ri,this.materialCopy=new Pt({uniforms:nn.clone(ir.uniforms),vertexShader:ir.vertexShader,fragmentShader:ir.fragmentShader,blending:ri}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=nu,this.materialCopy.blendSrc=up,this.materialCopy.blendDst=su,this.materialCopy.blendEquation=Yn,this.materialCopy.blendSrcAlpha=cp,this.materialCopy.blendDstAlpha=su,this.materialCopy.blendEquationAlpha=Yn,this.fsQuad=new qn(null)}render(e,t,i){this.renderToScreen&&(this.materialCopy.blending=ri,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let n=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;let r=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=r,this.hBlurMaterial.uniforms.depthCutoff.value=r,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(tl.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ke(0,1)),tl.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new ke(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let a=this.materialCopy;this.params.output===s.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===s.OUTPUT.Default?a.blending=nu:a.blending=ri,this.renderPass(e,a,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}renderPass(e,t,i,n,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,i,n,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,r=t.clearAlpha||r,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}};il.OUTPUT={Default:0,SAO:1,Normal:2};var cv={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qa=class s extends Li{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(r,a,{type:Wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new ai(r,a,{type:Wi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new ai(r,a,{type:Wi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=cv;this.highPassUniforms=nn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ke(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ir;this.copyUniforms=nn.clone(u.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Fc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new Va,this.fsQuad=new qn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};qa.BlurDirectionX=new ke(1,0);qa.BlurDirectionY=new ke(0,1);function k1(){let s=document.querySelector(".threejs-wrapper");if(!s)return;let e=new Zc;e.background=new Ze("#d3d3d3");let t=new xi(75,s.offsetWidth/s.offsetHeight,.1,1e3);t.position.set(0,0,1.9);let i=new $c({antialias:!0,alpha:!0});i.setSize(s.offsetWidth,s.offsetHeight),i.setPixelRatio(window.devicePixelRatio>1.5?1.5:1),s.appendChild(i.domElement);let n=new uu(i);n.addPass(new du(e,t));let r=new qa(new ke(window.innerWidth,window.innerHeight),.5,.4,.85);n.addPass(r);let a=new il(e,t,!1,!0);a.params.saoIntensity=.2,a.params.saoScale=100,n.addPass(a);let o=new hu(.37,.025,648,!1);n.addPass(o);let l=new eu(16711680,2);l.position.set(0,0,0),l.castShadow=!0,e.add(l);let c=new tu(4210752,40);c.position.set(10,-10,-10),c.castShadow=!1,e.add(c),new jc().load("https://cdn.jsdelivr.net/gh/the-wall-digital/website@main/brown_photostudio_02_4k%20(1).jpg",function(f){let m=new Ga(i).fromEquirectangular(f).texture;e.environment=m});function h(){n.render(),requestAnimationFrame(h)}h()}k1();function uv(){console.log("Three.js homepage initialized")}uv();Xg();Jg();B0();jg();})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/strings.js:
  (*!
   * strings: 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText: 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
