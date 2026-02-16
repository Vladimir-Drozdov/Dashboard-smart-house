(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const N=globalThis,V=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),J=new WeakMap;let dt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const vt=o=>new dt(typeof o=="string"?o:o+"",void 0,K),f=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new dt(e,o,K)},$t=(o,t)=>{if(V)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},Y=V?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return vt(e)})(o):o;const{is:xt,defineProperty:bt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:_t,getOwnPropertySymbols:At,getPrototypeOf:wt}=Object,j=globalThis,Q=j.trustedTypes,Et=Q?Q.emptyScript:"",kt=j.reactiveElementPolyfillSupport,M=(o,t)=>o,D={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ht=(o,t)=>!xt(o,t),tt={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&bt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=yt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const c=s?.call(this);r?.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,i=[..._t(e),...At(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Y(s))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:D;this._$Em=s;const c=n.fromAttribute(e,r.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){const n=this.constructor;if(s===!1&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??ht)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:n}=r,c=this[s];n!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,r,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[M("elementProperties")]=new Map,E[M("finalized")]=new Map,kt?.({ReactiveElement:E}),(j.reactiveElementVersions??=[]).push("2.1.2");const X=globalThis,et=o=>o,H=X.trustedTypes,it=H?H.createPolicy("lit-html",{createHTML:o=>o}):void 0,pt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+x,St=`<${ut}>`,w=document,U=()=>w.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",Z=Array.isArray,Ct=o=>Z(o)||typeof o?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,ot=/>/g,b=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,nt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Pt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=Pt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),at=new WeakMap,_=w.createTreeWalker(w,129);function ft(o,t){if(!Z(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Mt=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",n=P;for(let c=0;c<e;c++){const a=o[c];let d,h,l=-1,m=0;for(;m<a.length&&(n.lastIndex=m,h=n.exec(a),h!==null);)m=n.lastIndex,n===P?h[1]==="!--"?n=st:h[1]!==void 0?n=ot:h[2]!==void 0?(gt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=b):h[3]!==void 0&&(n=b):n===b?h[0]===">"?(n=s??P,l=-1):h[1]===void 0?l=-2:(l=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?b:h[3]==='"'?nt:rt):n===nt||n===rt?n=b:n===st||n===ot?n=P:(n=b,s=void 0);const v=n===b&&o[c+1].startsWith("/>")?" ":"";r+=n===P?a+St:l>=0?(i.push(d),a.slice(0,l)+pt+a.slice(l)+x+v):a+x+(l===-2?c:v)}return[ft(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const c=t.length-1,a=this.parts,[d,h]=Mt(t,e);if(this.el=F.createElement(d,i),_.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=_.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(pt)){const m=h[n++],v=s.getAttribute(l).split(x),R=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:R[2],strings:v,ctor:R[1]==="."?Tt:R[1]==="?"?Ft:R[1]==="@"?Ot:L}),s.removeAttribute(l)}else l.startsWith(x)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(gt.test(s.tagName)){const l=s.textContent.split(x),m=l.length-1;if(m>0){s.textContent=H?H.emptyScript:"";for(let v=0;v<m;v++)s.append(l[v],U()),_.nextNode(),a.push({type:2,index:++r});s.append(l[m],U())}}}else if(s.nodeType===8)if(s.data===ut)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(x,l+1))!==-1;)a.push({type:7,index:r}),l+=x.length-1}r++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function C(o,t,e=o,i){if(t===S)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const r=T(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=C(o,s._$AS(o,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??w).importNode(e,!0);_.currentNode=s;let r=_.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new O(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Rt(r,this,t)),this._$AV.push(d),a=i[++c]}n!==a?.index&&(r=_.nextNode(),n++)}return _.currentNode=w,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),T(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=F.createElement(ft(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const r=new Ut(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new F(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=et(t).nextSibling;et(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=C(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const c=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=C(this,c[i+a],e,a),d===S&&(d=this._$AH[a]),n||=!T(d)||d!==this._$AH[a],d===u?t=u:t!==u&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Ft extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Ot extends L{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??u)===S)return;const i=this._$AH,s=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Nt=X.litHtmlPolyfillSupport;Nt?.(F,O),(X.litHtmlVersions??=[]).push("3.3.2");const Ht=(o,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const r=e?.renderBefore??null;i._$litPart$=s=new O(t.insertBefore(U(),r),r,void 0,e??{})}return s._$AI(o),s};const G=globalThis;class g extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}}g._$litElement$=!0,g.finalized=!0,G.litElementHydrateSupport?.({LitElement:g});const zt=G.litElementPolyfillSupport;zt?.({LitElement:g});(G.litElementVersions??=[]).push("4.2.2");const q="/Dashboard-smart-house/";class jt extends g{static styles=f`
    :host {
      display: block;
      width: 100%;
      height: 100%; 
    }

    .quick-actions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(132.57px, 1fr));
      gap: 8px;
      width: 100%;
      height: 100%; 
      align-content: start; 
    }

    .action-btn {
      position: relative;
      background: #343239;
      border-radius: 24px;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      transition: all 0.2s ease;
      height: 168px;
      width: 100%;
      min-width: 0;
    }

    .action-btn.active {
      background: rgba(230, 83, 50, 0.2);
    }

    .icon-bg {
      position: absolute;
      height: 64px;
      left: 8px;
      right: 7.57px;
      top: 8px;
      background: #1C1B1F;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action-btn.active .icon-bg {
      background: #E65332;
    }

    .icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon img {
      width: 24px;
      height: 24px;
      filter: brightness(0) invert(1);
      object-fit: contain;
    }

    .label {
      position: absolute;
      left: 4px;
      right: 3.57px;
      bottom: 24px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
      white-space: pre-line;
      margin: 0;
    }

    .label.single-line {
      bottom: 40px;
    }
  `;constructor(){super(),this.actions=[{id:"left",icon:"/icons/door_front.png",label:"Ушли из дома",lines:1,group:"presence"},{id:"arrived",icon:"/icons/door_open.png",label:"Пришли домой",lines:1,group:"presence"},{id:"yard-light",icon:"/icons/lightbulb_outline.png",label:`Освещение
во дворе`,lines:2,group:null},{id:"gate",icon:"/icons/view_carousel.png",label:`Заблокировать
ворота`,lines:2,group:null},{id:"comfort1",icon:"/icons/device_thermostat.png",label:`«Комфорт»
в детской №1`,lines:2,group:null},{id:"comfort2",icon:"/icons/device_thermostat.png",label:`«Комфорт»
в детской №2`,lines:2,group:null},{id:"comfort3",icon:"/icons/device_thermostat.png",label:`«Комфорт»
в детской №3`,lines:2,group:null}],this.activeActions=new Set}handleClick(t){const e=this.actions.find(i=>i.id===t);e.group?this.activeActions.has(t)?this.activeActions.delete(t):(this.actions.forEach(i=>{i.group===e.group&&this.activeActions.delete(i.id)}),this.activeActions.add(t)):this.activeActions.has(t)?this.activeActions.delete(t):this.activeActions.add(t),this.requestUpdate()}render(){return p`
      <div class="quick-actions">
        ${this.actions.map(t=>{const e=this.activeActions.has(t.id);let i="label";return t.lines===1&&(i+=" single-line"),p`
            <button
              class="action-btn ${e?"active":""}"
              @click=${()=>this.handleClick(t.id)}
            >
              <div class="icon-bg">
                <div class="icon">
                  <img src=${q}${t.icon} alt="">
                </div>
              </div>
              <span class="${i}">${t.label}</span>
            </button>
          `})}
      </div>
    `}}customElements.define("quick-actions",jt);class Lt extends g{static styles=f`
    :host {
      display: block;
      height: 100%;
    }

    .header {
        height:100%;
        box-sizing:border-box;
        position: relative;
        background-image: 
        linear-gradient(90deg, #222222 17.93%, rgba(34, 34, 34, 0) 98.51%),
        url('/images/renessans-park6.png');
        background-size: cover;
        background-position: center;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border:1px solid green;
    }

    .title {
      position: relative;
      z-index: 2;
      color: white;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
      margin-left: 14px;
      margin-top: 14px;
    }

    .title h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 29.8338px;
      line-height: 36px;
      margin: 0;
      color: #FFFFFF;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      letter-spacing: -0.5px;
    }

    .image-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 8px;
      width: 100%;
    }

    .extra-images {
      display: flex;
      gap: 0;
    }

    .extra-images div {
      width: 64px;
      height: 64px;
      border-radius: 100px;
      background: rgba(230, 83, 50, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 -8px;
      overflow: visible;
      background-image: inherit;
    }

    .extra-images img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 100px;
      position: relative;
      z-index: 2;
      border: 1px solid red;
    }

    .extra-images div::after {
      content: '';
      position: absolute;
      width: 69px;
      height: 69px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-image: inherit;
      background-size: cover;
      background-position: center;
      filter: blur(4px);
      border-radius: 100px;
      z-index: 1;
    }

    .extra-icons {
      display: flex;
      gap: 8px;
    }

    .extra-icon {
      width: 60px;
      height: 60px;
      background: rgba(40, 40, 40, 0.04);
      backdrop-filter: blur(13px);
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .extra-icon img {
      width: 28px;
      height: 28px;
      object-fit: contain;
      filter: brightness(0) invert(1);
      opacity: 0.9;
    }
  `;render(){return p`
      <div class="header">
        <div class="title">
          <h2>Гостиная</h2>
        </div>

        <div class="image-container">
          <div class="extra-images">
            <div>
              <img src="/images/person1.png" alt="Аватарка №1">
            </div>
            <div>
              <img src="/images/person2.png" alt="Аватарка №2">
            </div>
          </div>

          <div class="extra-icons">
            <div class="extra-icon">
              <img src="/images/add.png" alt="add">
            </div>
            <div class="extra-icon">
              <img src="/images/video.png" alt="video">
            </div>
            <div class="extra-icon">
              <img src="/images/shield-tick.png" alt="shield-tick">
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("living-room-header",Lt);class Bt extends g{static styles=f`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100%;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .card {
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .header-wrapper {
      flex: 1 1 auto;
      min-height: 0;
      height:250px;
      margin-bottom: 16px;
      border:1px solid red;
    }

    .actions-wrapper {
      flex: 1 1 auto;
      min-height: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .actions-wrapper ::slotted(quick-actions),
    quick-actions {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    .actions-wrapper ::slotted(quick-actions .quick-actions),
    quick-actions .quick-actions {
      flex: 1 1 auto;
      align-content: start; 
    }
  `;render(){return p`
      <div class="card">
        <div class="header-wrapper">
          <living-room-header></living-room-header>
        </div>
        <div class="actions-wrapper">
          <quick-actions></quick-actions>
        </div>
      </div>
    `}}customElements.define("living-room-card",Bt);class Dt extends g{static styles=f`
    :host {
      display: block;
      width: 100%;
    }

    .tabs {
      display: grid;
      grid-template-columns: repeat(3, minmax(120px, 1fr));
      gap: 8px;
      width: 100%;
    }

    .tab-btn {
      position: relative;
      height: 64px;
      background: #343239;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      padding: 0 12px;
      width: 100%;
    }

    .tab-btn.active {
      background: #E65332;
    }

    .tab-btn span {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      text-align: center;
      white-space: nowrap;
    }

    .tab-btn:not(.active):hover {
      background: #3d3a44;
    }

    @media (max-width: 700px) {
      .tabs {
        grid-template-columns: repeat(2, 1fr); 
      }

    }

    @media (max-width: 450px) {
      .tabs {
        grid-template-columns: 1fr;
      }
      
      .tab-btn:last-child {
        grid-column: auto;
      }
    }
  `;constructor(){super(),this.tabs=[{id:"floor1",label:"Первый этаж"},{id:"floor2",label:"Второй этаж"},{id:"yard",label:"Дворовая территория"}],this.activeTab="floor1"}handleClick(t){this.activeTab=t,this.requestUpdate(),this.dispatchEvent(new CustomEvent("tab-change",{detail:{tabId:t},bubbles:!0,composed:!0}))}render(){return p`
      <div class="tabs">
        ${this.tabs.map(t=>p`
          <button 
            class="tab-btn ${this.activeTab===t.id?"active":""}"
            @click=${()=>this.handleClick(t.id)}
          >
            <span>${t.label}</span>
          </button>
        `)}
      </div>
    `}}customElements.define("floor-tabs",Dt);class A extends g{static properties={active:{type:Boolean},title:{type:String},room:{type:String}};static styles=f`
    .card {
      background: #343239;
      border-radius: 24px;
      padding: 16px;
      position: relative;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 20px;
      background-color: #1c1b1f;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon img {
      width: 30%;
      height: 30%;
      object-fit: contain;
    }


    .icon.active {
      background-color: #e65332;
    }

    .info {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-weight: 600;
    }

    .room {
      opacity: 0.6;
      font-size: 14px;
    }

    .more {
      margin-left: auto;
      width: 64px;
      height: 64px;
      border-radius: 20px;
      background-image: url("${q}/climate-icons/icon_more.png");
      border: 1px solid #4d4a54;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  `;constructor(){super(),this.active=!1}toggle=()=>this.active=!this.active;header(){return p`
      <div class="header">
        <div class="icon ${this.active?"active":""}" @click=${this.toggle}>
          <img src="${q}/climate-icons/device_thermostat.png" alt="">
        </div>
        <div class="info">
          <div class="title">${this.title}</div>
          <div class="room">${this.room}</div>
        </div>
        <div class="more"></div>
      </div>
    `}}customElements.define("base-card",A);const $=10,k=30,mt=120,y=180+mt/2,I=540-mt/2,ct=I-y,W=(o,t,e)=>Math.min(e,Math.max(t,o)),z=(o,t,e,i)=>{const s=(i-90)*Math.PI/180;return{x:o+e*Math.cos(s),y:t+e*Math.sin(s)}},lt=(o,t,e)=>{const i=z(120,120,o,t),s=z(120,120,o,e),r=e-t>180?1:0;return`M ${i.x} ${i.y} A ${o} ${o} 0 ${r} 1 ${s.x} ${s.y}`};class qt extends A{static properties={...A.properties,temp:{type:Number}};static styles=[A.styles,f`
      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-top: 16px;
        width: 100%;
      }

      button {
        flex: 1 1 0; 
        min-width: 0;
        max-width: 100px; 
        height: 64px;
        border-radius: 20px;
        background: #4d4a54;
        color: #ffffff;
        font-size: 24px;
        border: none;
        cursor: pointer;
      }

      button:disabled {
        opacity: 0.4;
        cursor: default;
      }

      .temp-pill {
        flex: 1 1 0; 
        min-width: 0;
        max-width: 100px; 
        height: 64px;
        padding: 0 8px;
        border-radius: 32px;
        background: #1c1b1f;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
      }
    `];constructor(){super(),this.temp=24}change(t){this.active&&(this.temp=W(this.temp+t,$,k))}render(){return p`
      <div class="card">
        ${this.header()}

        <div class="controls">
          <button
            ?disabled=${!this.active}
            @click=${()=>this.change(-1)}
          >
            −
          </button>

          <div class="temp-pill">
            ${this.temp}°C
          </div>

          <button
            ?disabled=${!this.active}
            @click=${()=>this.change(1)}
          >
            +
          </button>
        </div>
      </div>
    `}}customElements.define("radiator-card",qt);class It extends A{static properties={...A.properties,temp:{type:Number}};static styles=[A.styles,f`
      :host { position: relative; display: block; }

      .card {
        background: #343239;
        border-radius: 24px;        
        padding: 16px;
        position: relative;
      }

      svg {
        width: 260px;
        height: 260px;
        display: block;
        margin: 0 auto;
        touch-action: none;
      }

      .center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        transform: translateY(-10px);
      }

      .value { 
        font-size: 64px; 
        font-weight: 600; 
        line-height: 1; 
        color: white;
      }
      
      .target { 
        opacity: 0.5; 
        font-size: 20px; 
        color: white;
      }

      .controls {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 16px;
        width: 140px;
        justify-content: center;
      }
      .controls div{
        display:flex;
        flex-direction:row;
        align-items:center;
      }
      .controls div > :first-child {
        margin-right: 16px;
      }


      .btn {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #4d4a54;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        color: white;
        transition: background 0.2s;
      }

      .btn:active { background: #5d5a64; }
      .btn.disabled { opacity: 0.4; pointer-events: none; }
      @media (max-width: 500px) {
        .card {
          padding: 12px;
        }
        
        .value {
          font-size: 48px; 
        }
        
        svg {
          width: 200px;
          height: 200px;
        }
        
        .controls {
          bottom: 8px;
        }
      }
    `];constructor(){super(),this.temp=20,this._svg=null}firstUpdated(){this._svg=this.renderRoot.querySelector("svg")}angleFromTemp(t){return y+(t-$)/(k-$)*ct}tempFromEvent(t){if(!this._svg)return this.temp;const e=this._svg.getBoundingClientRect(),i=e.width/2,s=e.height/2,r=t.clientX-e.left-i,n=t.clientY-e.top-s;let c=Math.atan2(n,r)*180/Math.PI+90;c<0&&(c+=360),c>=360&&(c-=360);let a=c;if(a<y&&(a+=360),a<y||a>I)return this.temp;const d=a-y,h=Math.round($+d/ct*(k-$));return W(h,$,k)}startDrag(t){if(!this.active)return;const e=s=>{s.preventDefault(),this.temp=this.tempFromEvent(s)},i=()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i)};window.addEventListener("pointermove",e),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i),this.temp=this.tempFromEvent(t)}change(t){this.active&&(this.temp=W(this.temp+t,$,k))}render(){const t=this.angleFromTemp(this.temp),e=z(120,120,100,t),i=this.angleFromTemp(22),s=z(120,120,100,i),r=this.active?"btn":"btn disabled";return p`
      <div class="card">
        ${this.header()}

        <div style="position:relative;">
          <svg viewBox="0 0 240 240" @pointerdown=${this.startDrag}>
            <path d="${lt(100,y,I)}" stroke="#4d4a54" stroke-width="14" fill="none" stroke-linecap="round"/>
            <path d="${lt(100,y,t)}" stroke="#e65332" stroke-width="14" fill="none" stroke-linecap="round"/>
            <circle cx=${s.x} cy=${s.y} r="7" fill="gray" opacity="0.6" />
            <circle cx=${e.x} cy=${e.y} r="11" fill="white" stroke="#e65332" stroke-width="2" />
          </svg>

          <div class="center">
            <div class="value">${this.temp}°</div>
            <div class="target">22°</div>
          </div>

          <div class="controls">
            <div>
              <div>${$}°</div>
              <div class="${r}" @click=${()=>this.change(-1)}>−</div>
            </div>
            <div>              
              <div class="${r}" @click=${()=>this.change(1)}>+</div>
              <div>${k}°</div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("convector-card",It);class Wt extends g{static properties={floor:{type:String}};static styles=f`
    :host {
      display: block;
      background: #1c1b1f;
      color: white;
      font-family: Roboto, sans-serif;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .radiators {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    radiator-card, convector-card {
      width: 100%;
    }

    @media (max-width: 960px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 680px) {
      .grid {
        grid-template-columns: 1fr;
        justify-items: center;
      }
      
      .radiators,
      convector-card {
        max-width: 400px;
        width: 100%;
      }
    }
  `;constructor(){super(),this.floor="floor1"}getFloorConfig(){const t={floor1:{radiators:[{room:"Кладовая"},{room:"Гардероб"}],convectors:[{room:"Гостиная"},{room:"Гостевая спальня"}]},floor2:{radiators:[{room:"Кладовая"},{room:"Гардероб"}],convectors:[{room:"Гостиная"},{room:"Гостевая спальня"}]},yard:{radiators:[],convectors:[]}};return t[this.floor]||t.floor1}render(){const t=this.getFloorConfig();return p`
      <div class="grid">
        ${this.floor==="floor1"?p`
          <div class="radiators">
            ${t.radiators.map(e=>p`
              <radiator-card title="Радиатор" room=${e.room}></radiator-card>
            `)}
          </div>
          
          ${t.convectors.map(e=>p`
            <convector-card title="Конвектор" room=${e.room}></convector-card>
          `)}
        `:this.floor==="floor2"?p`
          <convector-card title="Конвектор" room=${t.convectors[0].room}></convector-card>
          
          <div class="radiators">
            ${t.radiators.map(e=>p`
              <radiator-card title="Радиатор" room=${e.room}></radiator-card>
            `)}
          </div>
          
          <convector-card title="Конвектор" room=${t.convectors[1].room}></convector-card>
        `:p`
          <div style="grid-column: 1/-1; text-align: center; padding: 50px; background: #2a2a2a; border-radius: 24px;">
            <span style="font-size: 48px;">🌳</span>
            <h3 style="color: white;">Дворовая территория</h3>
            <p style="color: rgba(255,255,255,0.5);">Скоро здесь появятся датчики освещения, полива и погоды</p>
          </div>
        `}
      </div>
    `}}customElements.define("climate-block",Wt);class Vt extends g{static properties={currentFloor:{type:String}};static styles=f`
    :host {
      display: block;
    }

    .card {
      border-radius: 24px;
      padding: 24px 24px 24px 0px;
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      color: #FFFFFF;
      margin: 20px 0 20px 0;
    }
  `;constructor(){super(),this.currentFloor="floor1"}handleTabChange(t){this.currentFloor=t.detail.tabId}render(){return p`
      <div class="card">
        <floor-tabs @tab-change=${this.handleTabChange}></floor-tabs>
        <h2>Климат</h2>
        <climate-block floor=${this.currentFloor}></climate-block>
      </div>
    `}}customElements.define("climate-card",Vt);class Kt extends g{static styles=f`
    :host {
    }

    .wrapper{
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 20px;
      max-width: 1200px; 
      background:#1C1B1F;
      margin: 0 auto;
      box-sizing:border-box;
    }
 
    .grid {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `;render(){return p`
      <div class="wrapper">    
        <div class="grid">
          <living-room-card></living-room-card>
          <climate-card></climate-card>
        </div>
      </div>
    `}}customElements.define("smart-home",Kt);
