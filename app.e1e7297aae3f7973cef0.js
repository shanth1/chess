(()=>{"use strict";const e=class{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._element=document.createElement(e);for(const[e,t]of Object.entries(n))this._element.setAttribute(e,t)}get element(){return this._element}subscribe(e,n){e.subscribe(n),n()}},n=class extends e{constructor(e){super("div"),this._element.innerText=e,this._element.classList.add("header")}updateText(e){this._element.innerText=e}},t=class extends e{constructor(e,n){super("button"),this._element.innerText=e,this._element.classList.add("button"),this._element.onclick=n}},a=class extends e{constructor(){super("input"),this._element.classList.add("X6UxfUUG")}},o=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"page";!(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&console.log("url routing is not available now"),this.pageId=e,window.addEventListener("hashchange",(e=>{this._resolve()})),window.addEventListener("DOMContentLoaded",(()=>{this._resolve()}))}initRoutes(e){this._routes=e}initPageContainer(e){this._pageContainer=e,this._pageContainer.id="page-container"}_activeClassResolver(e,n){window.addEventListener(e,(()=>{""===location.hash?n("#"):n(location.hash)}))}updateActiveClass(e){this._activeClassResolver("hashchange",e),this._activeClassResolver("DOMContentLoaded",e)}navigate(e){location.hash=e}isActive(e){return!location.hash&&"#"===e||location.hash===e}_updatePage(e){this._pageContainer.innerHTML="",this._pageContainer.appendChild(e)}_resolve(){if(""===location.hash){const e=this._routes["/"];return void(e&&this._updatePage(e()))}const e=this._routes[location.hash.replace("#","/")];e?this._updatePage(e()):this._pageContainer.innerHTML="404 | Not Found"}},i={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"}]},s=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const o=new e("div").element;o.classList.add("j2362cLf");const i=new n(t);return o.appendChild(i.element),a.forEach((e=>o.appendChild(e))),o};window.addEventListener("load",(()=>{(async()=>{if(navigator.serviceWorker)try{const e=await navigator.serviceWorker.register("./sw.js");console.log("SW register success",e)}catch(e){console.error("SW register failed:",e)}})()}));const r=document.getElementById("root");o.initPageContainer(r),o.initRoutes({"/":()=>{const e=document.createElement("div"),n=new t("p2p",(()=>{o.navigate("connect")})).element,a=new t("offline").element;a.disabled=!0;const i=[n,a];return e.appendChild(s("Menu",i)),e},"/alice":()=>{const e=document.createElement("div"),n=new RTCPeerConnection(i),a=(()=>{const e=document.createElement("div");return e.style.padding="8px",e.style.fontSize="22px",e.innerText="Статус: ожидаем offer",e})(),s=new t("Paste",(()=>{navigator.clipboard.readText().then((e=>{console.log("paste"),(async(e,n,t)=>{e.onicecandidate=()=>{t.innerText="Статус: создан answer"},e.setRemoteDescription(JSON.parse(n)),window.dataChannel,e.ondatachannel=e=>{window.dataChannel=e.channel,window.dataChannel.onopen=()=>{o.navigate("game")}};const a=await e.createAnswer();e.setLocalDescription(a)})(n,e,a)})).catch(console.error)})).element,r=new t("Copy",(()=>{const e=JSON.stringify(n.localDescription);e&&navigator.clipboard.writeText(e).then((()=>{a.innerText="Статус: скопировано, ждем открытия канала"})).catch(console.error)})).element;return e.appendChild(a),e.appendChild(s),e.appendChild(r),e},"/bob":()=>{const e=document.createElement("div"),n=new RTCPeerConnection(i),a=(()=>{const e=document.createElement("div");return e.style.padding="8px",e.style.fontSize="22px",e.innerText="Статус:",e})();(async(e,n)=>{window.dataChannel=e.createDataChannel("channel-name"),window.dataChannel.onopen=()=>{console.log("Канал открыт"),o.navigate("game")};const t=await e.createOffer();e.setLocalDescription(t),e.onicecandidate=e=>{n.innerText="Статус: создан offer"}})(n,a);const s=new t("Copy",(()=>{const e=JSON.stringify(n.localDescription);e&&navigator.clipboard.writeText(e).then((()=>{console.log("copied"),a.innerText="Статус: скопировано, ожидаем answer"})).catch(console.error)})).element,r=new t("Paste",(()=>{navigator.clipboard.readText().then((e=>{console.log("paste"),((e,n)=>{e.setRemoteDescription(JSON.parse(n))})(n,e)})).catch(console.error)})).element;return e.appendChild(a),e.appendChild(s),e.appendChild(r),e},"/connect":()=>{const e=document.createElement("div"),n=[new t("Bob",(()=>{o.navigate("bob")})).element,new t("Alice",(()=>{o.navigate("alice")})).element,new t("Go back",(()=>{o.navigate("")})).element];return e.appendChild(s("Choose the role",n)),e},"/game":()=>{const e=document.createElement("div"),n=document.createElement("form");n.onsubmit=e=>e.preventDefault();const o=document.createElement("div");window.dataChannel&&(window.dataChannel.onmessage=e=>{const n=document.createElement("div");n.innerText=`[${(new Date).toUTCString()}]: ${e.data}`,n.style.color="grey",o.appendChild(n)});const i=(new a).element,s=new t("Send",(()=>{if(i.value){const e=document.createElement("div");e.innerText=`[${(new Date).toUTCString()}]: ${i.value}`,o.appendChild(e),window.dataChannel&&dataChannel.send(i.value),i.value=""}})).element;return n.appendChild(i),n.appendChild(s),e.appendChild(n),e.appendChild(o),e}})})();
//# sourceMappingURL=app.e1e7297aae3f7973cef0.js.map