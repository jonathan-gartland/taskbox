var bt=Object.defineProperty;var _t=(e,t,r)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ae=(e,t,r)=>_t(e,typeof t!="symbol"?t+"":t,r);import{j as w}from"./jsx-runtime-BlAj40OV.js";import{T as wt,D as F}from"./Task.stories-DmhCiUYQ.js";import{r as x}from"./index-Cs7sjTYM.js";var Ye={exports:{}},Qe={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=x;function St(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:St,gt=G.useSyncExternalStore,vt=G.useRef,Et=G.useEffect,xt=G.useMemo,Tt=G.useDebugValue;Qe.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var o=vt(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=xt(function(){function a(y){if(!f){if(f=!0,u=y,y=n(y),s!==void 0&&i.hasValue){var p=i.value;if(s(p,y))return l=p}return l=y}if(p=l,kt(u,y))return p;var P=n(y);return s!==void 0&&s(p,P)?(u=y,p):(u=y,l=P)}var f=!1,u,l,d=r===void 0?null:r;return[function(){return a(t())},d===null?void 0:function(){return a(d())}]},[t,r,n,s]);var c=gt(e,o[0],o[1]);return Et(function(){i.hasValue=!0,i.value=c},[c]),Tt(c),c};Ye.exports=Qe;var Ct=Ye.exports;function Pt(e){e()}function Rt(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Pt(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var xe={notify(){},get:()=>[]};function Mt(e,t){let r,n=xe,s=0,o=!1;function i(P){u();const _=n.subscribe(P);let k=!1;return()=>{k||(k=!0,_(),l())}}function c(){n.notify()}function a(){p.onStateChange&&p.onStateChange()}function f(){return o}function u(){s++,r||(r=e.subscribe(a),n=Rt())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=xe)}function d(){o||(o=!0,u())}function y(){o&&(o=!1,l())}const p={addNestedSub:i,notifyNestedSubs:c,handleChangeWrapper:a,isSubscribed:f,trySubscribe:d,tryUnsubscribe:y,getListeners:()=>n};return p}var Ot=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jt=Ot(),At=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Dt=At(),Nt=()=>jt||Dt?x.useLayoutEffect:x.useEffect,It=Nt(),ce=Symbol.for("react-redux-context"),ue=typeof globalThis<"u"?globalThis:{};function zt(){if(!x.createContext)return{};const e=ue[ce]??(ue[ce]=new Map);let t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var D=zt();function Ft(e){const{children:t,context:r,serverState:n,store:s}=e,o=x.useMemo(()=>{const a=Mt(s);return{store:s,subscription:a,getServerState:n?()=>n:void 0}},[s,n]),i=x.useMemo(()=>s.getState(),[s]);It(()=>{const{subscription:a}=o;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),i!==s.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[o,i]);const c=r||D;return x.createElement(c.Provider,{value:o},t)}var Lt=Ft;function ke(e=D){return function(){return x.useContext(e)}}var Je=ke();function Ze(e=D){const t=e===D?Je:ke(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var Bt=Ze();function Kt(e=D){const t=e===D?Bt:Ze(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Wt=Kt(),$t=(e,t)=>e===t;function Ut(e=D){const t=e===D?Je:ke(e),r=(n,s={})=>{const{equalityFn:o=$t}=typeof s=="function"?{equalityFn:s}:s,i=t(),{store:c,subscription:a,getServerState:f}=i;x.useRef(!0);const u=x.useCallback({[n.name](d){return n(d)}}[n.name],[n]),l=Ct.useSyncExternalStoreWithSelector(a.addNestedSub,c.getState,f||c.getState,u,o);return x.useDebugValue(l),l};return Object.assign(r,{withTypes:()=>r}),r}var Te=Ut();function E(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Vt=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ce=Vt,fe=()=>Math.random().toString(36).substring(7).split("").join("."),Ht={INIT:`@@redux/INIT${fe()}`,REPLACE:`@@redux/REPLACE${fe()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fe()}`},Q=Ht;function ge(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function et(e,t,r){if(typeof e!="function")throw new Error(E(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(E(1));return r(et)(e,t)}let n=e,s=t,o=new Map,i=o,c=0,a=!1;function f(){i===o&&(i=new Map,o.forEach((_,k)=>{i.set(k,_)}))}function u(){if(a)throw new Error(E(3));return s}function l(_){if(typeof _!="function")throw new Error(E(4));if(a)throw new Error(E(5));let k=!0;f();const S=c++;return i.set(S,_),function(){if(k){if(a)throw new Error(E(6));k=!1,f(),i.delete(S),o=null}}}function d(_){if(!ge(_))throw new Error(E(7));if(typeof _.type>"u")throw new Error(E(8));if(typeof _.type!="string")throw new Error(E(17));if(a)throw new Error(E(9));try{a=!0,s=n(s,_)}finally{a=!1}return(o=i).forEach(S=>{S()}),_}function y(_){if(typeof _!="function")throw new Error(E(10));n=_,d({type:Q.REPLACE})}function p(){const _=l;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(E(11));function S(){const m=k;m.next&&m.next(u())}return S(),{unsubscribe:_(S)}},[Ce](){return this}}}return d({type:Q.INIT}),{dispatch:d,subscribe:l,getState:u,replaceReducer:y,[Ce]:p}}function Xt(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Q.INIT})>"u")throw new Error(E(12));if(typeof r(void 0,{type:Q.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(E(13))})}function qt(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const i=t[o];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let s;try{Xt(r)}catch(o){s=o}return function(i={},c){if(s)throw s;let a=!1;const f={};for(let u=0;u<n.length;u++){const l=n[u],d=r[l],y=i[l],p=d(y,c);if(typeof p>"u")throw c&&c.type,new Error(E(14));f[l]=p,a=a||p!==y}return a=a||n.length!==Object.keys(i).length,a?f:i}}function J(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Gt(...e){return t=>(r,n)=>{const s=t(r,n);let o=()=>{throw new Error(E(15))};const i={getState:s.getState,dispatch:(a,...f)=>o(a,...f)},c=e.map(a=>a(i));return o=J(...c)(s.dispatch),{...s,dispatch:o}}}function Yt(e){return ge(e)&&"type"in e&&typeof e.type=="string"}var tt=Symbol.for("immer-nothing"),Pe=Symbol.for("immer-draftable"),T=Symbol.for("immer-state");function M(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var L=Object.getPrototypeOf;function I(e){return!!e&&!!e[T]}function j(e){var t;return e?rt(e)||Array.isArray(e)||!!e[Pe]||!!((t=e.constructor)!=null&&t[Pe])||ne(e)||se(e):!1}var Qt=Object.prototype.constructor.toString();function rt(e){if(!e||typeof e!="object")return!1;const t=L(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Qt}function Z(e,t){re(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function re(e){const t=e[T];return t?t.type_:Array.isArray(e)?1:ne(e)?2:se(e)?3:0}function he(e,t){return re(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function nt(e,t,r){const n=re(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Jt(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ne(e){return e instanceof Map}function se(e){return e instanceof Set}function N(e){return e.copy_||e.base_}function me(e,t){if(ne(e))return new Map(e);if(se(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=rt(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[T];let s=Reflect.ownKeys(n);for(let o=0;o<s.length;o++){const i=s[o],c=n[i];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[i]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[i]})}return Object.create(L(e),n)}else{const n=L(e);if(n!==null&&r)return{...e};const s=Object.create(n);return Object.assign(s,e)}}function ve(e,t=!1){return oe(e)||I(e)||!j(e)||(re(e)>1&&(e.set=e.add=e.clear=e.delete=Zt),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>ve(n,!0))),e}function Zt(){M(2)}function oe(e){return Object.isFrozen(e)}var er={};function z(e){const t=er[e];return t||M(0,e),t}var X;function st(){return X}function tr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Re(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function be(e){_e(e),e.drafts_.forEach(rr),e.drafts_=null}function _e(e){e===X&&(X=e.parent_)}function Me(e){return X=tr(X,e)}function rr(e){const t=e[T];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Oe(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[T].modified_&&(be(t),M(4)),j(e)&&(e=ee(t,e),t.parent_||te(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[T].base_,e,t.patches_,t.inversePatches_)):e=ee(t,r,[]),be(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==tt?e:void 0}function ee(e,t,r){if(oe(t))return t;const n=t[T];if(!n)return Z(t,(s,o)=>je(e,n,t,s,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return te(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let o=s,i=!1;n.type_===3&&(o=new Set(s),s.clear(),i=!0),Z(o,(c,a)=>je(e,n,s,c,a,r,i)),te(e,s,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function je(e,t,r,n,s,o,i){if(I(s)){const c=o&&t&&t.type_!==3&&!he(t.assigned_,n)?o.concat(n):void 0,a=ee(e,s,c);if(nt(r,n,a),I(a))e.canAutoFreeze_=!1;else return}else i&&r.add(s);if(j(s)&&!oe(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ee(e,s),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&te(e,s)}}function te(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ve(t,r)}function nr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:st(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=Ee;r&&(s=[n],o=q);const{revoke:i,proxy:c}=Proxy.revocable(s,o);return n.draft_=c,n.revoke_=i,c}var Ee={get(e,t){if(t===T)return e;const r=N(e);if(!he(r,t))return sr(e,r,t);const n=r[t];return e.finalized_||!j(n)?n:n===le(e.base_,t)?(de(e),e.copy_[t]=Se(n,e)):n},has(e,t){return t in N(e)},ownKeys(e){return Reflect.ownKeys(N(e))},set(e,t,r){const n=ot(N(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=le(N(e),t),o=s==null?void 0:s[T];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Jt(r,s)&&(r!==void 0||he(e.base_,t)))return!0;de(e),we(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return le(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,de(e),we(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=N(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){M(11)},getPrototypeOf(e){return L(e.base_)},setPrototypeOf(){M(12)}},q={};Z(Ee,(e,t)=>{q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});q.deleteProperty=function(e,t){return q.set.call(this,e,t,void 0)};q.set=function(e,t,r){return Ee.set.call(this,e[0],t,r,e[0])};function le(e,t){const r=e[T];return(r?N(r):e)[t]}function sr(e,t,r){var s;const n=ot(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function ot(e,t){if(!(t in e))return;let r=L(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=L(r)}}function we(e){e.modified_||(e.modified_=!0,e.parent_&&we(e.parent_))}function de(e){e.copy_||(e.copy_=me(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var or=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const i=this;return function(a=o,...f){return i.produce(a,u=>r.call(this,u,...f))}}typeof r!="function"&&M(6),n!==void 0&&typeof n!="function"&&M(7);let s;if(j(t)){const o=Me(this),i=Se(t,void 0);let c=!0;try{s=r(i),c=!1}finally{c?be(o):_e(o)}return Re(o,n),Oe(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===tt&&(s=void 0),this.autoFreeze_&&ve(s,!0),n){const o=[],i=[];z("Patches").generateReplacementPatches_(t,s,o,i),n(o,i)}return s}else M(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...c)=>this.produceWithPatches(i,a=>t(a,...c));let n,s;return[this.produce(t,r,(i,c)=>{n=i,s=c}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){j(e)||M(8),I(e)&&(e=ir(e));const t=Me(this),r=Se(e,void 0);return r[T].isManual_=!0,_e(t),r}finishDraft(e,t){const r=e&&e[T];(!r||!r.isManual_)&&M(9);const{scope_:n}=r;return Re(n,t),Oe(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=z("Patches").applyPatches_;return I(e)?n(e,t):this.produce(e,s=>n(s,t))}};function Se(e,t){const r=ne(e)?z("MapSet").proxyMap_(e,t):se(e)?z("MapSet").proxySet_(e,t):nr(e,t);return(t?t.scope_:st()).drafts_.push(r),r}function ir(e){return I(e)||M(10,e),it(e)}function it(e){if(!j(e)||oe(e))return e;const t=e[T];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=me(e,t.scope_.immer_.useStrictShallowCopy_)}else r=me(e,!0);return Z(r,(n,s)=>{nt(r,n,it(s))}),t&&(t.finalized_=!1),r}var C=new or,at=C.produce;C.produceWithPatches.bind(C);C.setAutoFreeze.bind(C);C.setUseStrictShallowCopy.bind(C);C.applyPatches.bind(C);C.createDraft.bind(C);C.finishDraft.bind(C);function ct(e){return({dispatch:r,getState:n})=>s=>o=>typeof o=="function"?o(r,n,e):s(o)}var ar=ct(),cr=ct,ur=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?J:J.apply(null,arguments)},fr=e=>e&&typeof e.match=="function";function H(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(O(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Yt(n)&&n.type===e,r}var ut=class K extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,K.prototype)}static get[Symbol.species](){return K}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new K(...t[0].concat(this)):new K(...t.concat(this))}};function Ae(e){return j(e)?at(e,()=>{}):e}function De(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function lr(e){return typeof e=="boolean"}var dr=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:o=!0}=t??{};let i=new ut;return r&&(lr(r)?i.push(ar):i.push(cr(r.extraArgument))),i},yr="RTK_autoBatch",Ne=e=>t=>{setTimeout(t,e)},pr=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,o=!1,i=!1;const c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ne(10):e.type==="callback"?e.queueNotification:Ne(e.timeout),f=()=>{i=!1,o&&(o=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>s&&u(),d=n.subscribe(l);return c.add(u),()=>{d(),c.delete(u)}},dispatch(u){var l;try{return s=!((l=u==null?void 0:u.meta)!=null&&l[yr]),o=!s,o&&(i||(i=!0,a(f))),n.dispatch(u)}finally{s=!0}}})},hr=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new ut(e);return n&&s.push(pr(typeof n=="object"?n:void 0)),s};function ft(e){const t=dr(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:o=void 0,enhancers:i=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ge(r))c=qt(r);else throw new Error(O(1));let a;typeof n=="function"?a=n(t):a=t();let f=J;s&&(f=ur({trace:!1,...typeof s=="object"&&s}));const u=Gt(...a),l=hr(u);let d=typeof i=="function"?i(l):l();const y=f(...d);return et(c,o,y)}function lt(e){const t={},r=[];let n;const s={addCase(o,i){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(O(28));if(c in t)throw new Error(O(29));return t[c]=i,s},addMatcher(o,i){return r.push({matcher:o,reducer:i}),s},addDefaultCase(o){return n=o,s}};return e(s),[t,r,n]}function mr(e){return typeof e=="function"}function br(e,t){let[r,n,s]=lt(t),o;if(mr(e))o=()=>Ae(e());else{const c=Ae(e);o=()=>c}function i(c=o(),a){let f=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[s]),f.reduce((u,l)=>{if(l)if(I(u)){const y=l(u,a);return y===void 0?u:y}else{if(j(u))return at(u,d=>l(d,a));{const d=l(u,a);if(d===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return d}}return u},c)}return i.getInitialState=o,i}var _r=(e,t)=>fr(e)?e.match(t):e(t);function wr(...e){return t=>e.some(r=>_r(r,t))}var Sr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",kr=(e=21)=>{let t="",r=e;for(;r--;)t+=Sr[Math.random()*64|0];return t},gr=["name","message","stack","code"],ye=class{constructor(e,t){ae(this,"_type");this.payload=e,this.meta=t}},Ie=class{constructor(e,t){ae(this,"_type");this.payload=e,this.meta=t}},vr=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of gr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Er=(()=>{function e(t,r,n){const s=H(t+"/fulfilled",(a,f,u,l)=>({payload:a,meta:{...l||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),o=H(t+"/pending",(a,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:a,requestStatus:"pending"}})),i=H(t+"/rejected",(a,f,u,l,d)=>({payload:l,error:(n&&n.serializeError||vr)(a||"Rejected"),meta:{...d||{},arg:u,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"}}));function c(a){return(f,u,l)=>{const d=n!=null&&n.idGenerator?n.idGenerator(a):kr(),y=new AbortController;let p,P;function _(S){P=S,y.abort()}const k=async function(){var m,v;let S;try{let g=(m=n==null?void 0:n.condition)==null?void 0:m.call(n,a,{getState:u,extra:l});if(Tr(g)&&(g=await g),g===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const R=new Promise((b,A)=>{p=()=>{A({name:"AbortError",message:P||"Aborted"})},y.signal.addEventListener("abort",p)});f(o(d,a,(v=n==null?void 0:n.getPendingMeta)==null?void 0:v.call(n,{requestId:d,arg:a},{getState:u,extra:l}))),S=await Promise.race([R,Promise.resolve(r(a,{dispatch:f,getState:u,extra:l,requestId:d,signal:y.signal,abort:_,rejectWithValue:(b,A)=>new ye(b,A),fulfillWithValue:(b,A)=>new Ie(b,A)})).then(b=>{if(b instanceof ye)throw b;return b instanceof Ie?s(b.payload,d,a,b.meta):s(b,d,a)})])}catch(g){S=g instanceof ye?i(null,d,a,g.payload,g.meta):i(g,d,a)}finally{p&&y.signal.removeEventListener("abort",p)}return n&&!n.dispatchConditionRejection&&i.match(S)&&S.meta.condition||f(S),S}();return Object.assign(k,{abort:_,requestId:d,arg:a,unwrap(){return k.then(xr)}})}}return Object.assign(c,{pending:o,rejected:i,fulfilled:s,settled:wr(i,s),typePrefix:t})}return e.withTypes=()=>e,e})();function xr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Tr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Cr=Symbol.for("rtk-slice-createasyncthunk");function Pr(e,t){return`${e}/${t}`}function Rr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Cr];return function(s){const{name:o,reducerPath:i=o}=s;if(!o)throw new Error(O(11));typeof process<"u";const c=(typeof s.reducers=="function"?s.reducers(Or()):s.reducers)||{},a=Object.keys(c),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(h,m){const v=typeof h=="string"?h:h.type;if(!v)throw new Error(O(12));if(v in f.sliceCaseReducersByType)throw new Error(O(13));return f.sliceCaseReducersByType[v]=m,u},addMatcher(h,m){return f.sliceMatchers.push({matcher:h,reducer:m}),u},exposeAction(h,m){return f.actionCreators[h]=m,u},exposeCaseReducer(h,m){return f.sliceCaseReducersByName[h]=m,u}};a.forEach(h=>{const m=c[h],v={reducerName:h,type:Pr(o,h),createNotation:typeof s.reducers=="function"};Ar(m)?Nr(v,m,u,t):jr(v,m,u)});function l(){const[h={},m=[],v=void 0]=typeof s.extraReducers=="function"?lt(s.extraReducers):[s.extraReducers],g={...h,...f.sliceCaseReducersByType};return br(s.initialState,R=>{for(let b in g)R.addCase(b,g[b]);for(let b of f.sliceMatchers)R.addMatcher(b.matcher,b.reducer);for(let b of m)R.addMatcher(b.matcher,b.reducer);v&&R.addDefaultCase(v)})}const d=h=>h,y=new Map;let p;function P(h,m){return p||(p=l()),p(h,m)}function _(){return p||(p=l()),p.getInitialState()}function k(h,m=!1){function v(R){let b=R[h];return typeof b>"u"&&m&&(b=_()),b}function g(R=d){const b=De(y,m,()=>new WeakMap);return De(b,R,()=>{const A={};for(const[ht,mt]of Object.entries(s.selectors??{}))A[ht]=Mr(mt,R,_,m);return A})}return{reducerPath:h,getSelectors:g,get selectors(){return g(v)},selectSlice:v}}const S={name:o,reducer:P,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:_,...k(i),injectInto(h,{reducerPath:m,...v}={}){const g=m??i;return h.inject({reducerPath:g,reducer:P},v),{...S,...k(g,!0)}}};return S}}function Mr(e,t,r,n){function s(o,...i){let c=t(o);return typeof c>"u"&&n&&(c=r()),e(c,...i)}return s.unwrapped=e,s}var dt=Rr();function Or(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function jr({type:e,reducerName:t,createNotation:r},n,s){let o,i;if("reducer"in n){if(r&&!Dr(n))throw new Error(O(17));o=n.reducer,i=n.prepare}else o=n;s.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,i?H(e,i):H(e))}function Ar(e){return e._reducerDefinitionType==="asyncThunk"}function Dr(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Nr({type:e,reducerName:t},r,n,s){if(!s)throw new Error(O(18));const{payloadCreator:o,fulfilled:i,pending:c,rejected:a,settled:f,options:u}=r,l=s(e,o,u);n.exposeAction(t,l),i&&n.addCase(l.fulfilled,i),c&&n.addCase(l.pending,c),a&&n.addCase(l.rejected,a),f&&n.addMatcher(l.settled,f),n.exposeCaseReducer(t,{fulfilled:i||Y,pending:c||Y,rejected:a||Y,settled:f||Y})}function Y(){}function O(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ir={tasks:[],status:"idle",error:null},pe=Er("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),yt=dt({name:"taskbox",initialState:Ir,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(o=>o.id===r);s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(pe.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(pe.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(pe.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:ze}=yt.actions,$r=ft({reducer:{taskbox:yt.reducer}});function pt(){const e=Te(i=>[...i.taskbox.tasks.filter(f=>f.state==="TASK_PINNED"),...i.taskbox.tasks.filter(f=>f.state!=="TASK_PINNED")].filter(f=>f.state==="TASK_INBOX"||f.state==="TASK_PINNED")),{status:t}=Te(i=>i.taskbox),r=Wt(),n=i=>{r(ze({id:i,newTaskState:"TASK_PINNED"}))},s=i=>{r(ze({id:i,newTaskState:"TASK_ARCHIVED"}))},o=w.jsxs("div",{className:"loading-item",children:[w.jsx("span",{className:"glow-checkbox"}),w.jsxs("span",{className:"glow-text",children:[w.jsx("span",{children:"Loading"})," ",w.jsx("span",{children:"cool"})," ",w.jsx("span",{children:"state"})]})]});return t==="loading"?w.jsxs("div",{className:"list-items","data-testid":"loading",children:[o,o,o,o,o,o]},"loading"):e.length===0?w.jsx("div",{className:"list-items","data-testid":"empty",children:w.jsxs("div",{className:"wrapper-message",children:[w.jsx("span",{className:"icon-check"}),w.jsx("p",{className:"title-message",children:"You have no tasks"}),w.jsx("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):w.jsx("div",{className:"list-items","data-testid":"success",children:e.map(i=>w.jsx(wt,{task:i,onPinTask:c=>n(c),onArchiveTask:c=>s(c)},i.id))},"success")}pt.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const B={tasks:[{...F.args.task,id:"1",title:"Task 1"},{...F.args.task,id:"2",title:"Task 2"},{...F.args.task,id:"3",title:"Task 3"},{...F.args.task,id:"4",title:"Task 4"},{...F.args.task,id:"5",title:"Task 5"},{...F.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},ie=({taskboxState:e,children:t})=>w.jsx(Lt,{store:ft({reducer:{taskbox:dt({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:o}=n.payload,i=r.tasks.findIndex(c=>c.id===s);i>=0&&(r.tasks[i].state=o)}}}).reducer}}),children:t}),zr={component:pt,title:"TaskList",decorators:[e=>w.jsx("div",{style:{margin:"3rem"},children:e()})],tags:["autodocs"],excludeStories:/.*MockedState$/},W={decorators:[e=>w.jsx(ie,{taskboxState:B,children:e()})]},$={decorators:[e=>{const t=[...B.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return w.jsx(ie,{taskboxState:{...B,tasks:t},children:e()})}]},U={decorators:[e=>w.jsx(ie,{taskboxState:{...B,status:"loading"},children:e()})]},V={decorators:[e=>w.jsx(ie,{taskboxState:{...B,tasks:[]},children:e()})]};var Fe,Le,Be;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(Be=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Ke,We,$e;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
                    {story()}
                </Mockstore>;
  }]
}`,...($e=(We=$.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Ue,Ve,He;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: 'loading'
  }}>
                {story()}
            </Mockstore>]
}`,...(He=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Xe,qe,Ge;V.parameters={...V.parameters,docs:{...(Xe=V.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
                {story()}
            </Mockstore>]
}`,...(Ge=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};const Fr=["MockedState","Default","WithPinnedTasks","Loading","Empty"],Ur=Object.freeze(Object.defineProperty({__proto__:null,Default:W,Empty:V,Loading:U,MockedState:B,WithPinnedTasks:$,__namedExportsOrder:Fr,default:zr},Symbol.toStringTag,{value:"Module"}));export{B as M,Lt as P,pt as T,Te as a,Ur as b,pe as f,$r as s,Wt as u};
