function L(){let e=document.createElement("script");e.setAttribute("src","https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"),document.head.appendChild(e)}var l="twaAddClassForm",d="twaAddClassInput";function D(e){e.classList.add(document.getElementById(d).value),M()}function w(e){document.getElementById(l).addEventListener("submit",function(t){t.preventDefault(),D(e)})}function M(){document.getElementById(d).value=""}var c="twaClassInputsRender";function x(){return[...document.querySelectorAll("[data-class]")]}function I(e){U(),e.forEach(function(t){document.getElementById(c).innerHTML+=H(t)})}function C(e){x().forEach(t=>{t.addEventListener("input",()=>{e.classList.toggle(t.name),document.querySelector(`[for='${t.id}']`).classList.toggle("opacity-25")})})}function U(){document.getElementById(c).innerHTML=""}function H(e){return`
    <div class="flex items-center">
        <input type="checkbox" id="${e}" name="${e}" checked data-class class="sr-only peer" />

        <label
            for="${e}"
            class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
        >
            <span class="select-none text-xs leading-none font-medium">${e}</span>
        </label>
    </div>
    `}var p={640:"sm",768:"md",1024:"lg",1280:"xl",1536:"2xl"},P=Object.values(p);function E(){let e=window.innerWidth,t=Object.keys(p).filter(n=>n<e).at(-1);return p[t]||"Default"}function h(e){return{"2xl":[...e.classList].filter(t=>t.startsWith("2xl:")),xl:[...e.classList].filter(t=>t.startsWith("xl:")),lg:[...e.classList].filter(t=>t.startsWith("lg:")),md:[...e.classList].filter(t=>t.startsWith("md:")),sm:[...e.classList].filter(t=>t.startsWith("sm:")),dark:[...e.classList].filter(t=>t.startsWith("dark:"))}}var u="twaBreakpointInputsRender";function v(){return[...document.querySelectorAll("[data-breakpoint]")]}function y(){q(),P.forEach(function(e){document.getElementById(u).innerHTML+=F(e)})}function k(e,t){v().forEach(n=>{n.addEventListener("input",()=>{document.querySelector(`[for='${n.getAttribute("id")}']`).classList.toggle("opacity-25"),t[n.name].forEach(function(o){e.classList.toggle(o),document.querySelector(`[for='${o}']`).classList.toggle("opacity-25")})})})}function q(){document.getElementById(u).innerHTML=""}function F(e){return`
    <div>
      <input type="checkbox" id="${e}" name="${e}" checked data-breakpoint class="sr-only peer" />

      <label
        for="${e}"
        class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5"
      >
      <span class="select-none text-xs leading-none font-medium">${e}</span>
      </label>
    </div>
    `}var m="twaPopupPositionsWrapper";function A(e,t){e.classList.add("fixed"),t.forEach(n=>e.classList.add(n)),document.body.appendChild(e)}function j(){return[...document.querySelectorAll("[data-position]")]}function S(){K(),G.forEach(function(e){document.getElementById(m).innerHTML+=z(e.name,e.classNames)})}function K(){document.getElementById(m).innerHTML=""}function T(e,t){j().forEach(n=>{n.addEventListener("click",()=>{t.forEach(s=>e.classList.remove(s)),t=n.getAttribute("data-position").split(","),t.forEach(s=>e.classList.add(s))})})}function z(e,t){return`
      <div>
        <button data-position="${t}" class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5">
          <span class="select-none text-xs leading-none font-medium">${e}</span>
        </button>
      </div>
    `}var G=[{name:"Top Left",classNames:["top-4","left-4"]},{name:"Top Right",classNames:["top-4","right-4"]},{name:"Bottom Left",classNames:["bottom-4","left-4"]},{name:"Bottom Right",classNames:["bottom-4","right-4"]}];function a(e){let t=document.getElementById("twaError");t.removeAttribute("hidden"),t.innerText=e,setTimeout(()=>t.setAttribute("hidden",!0),3e3)}var J=["prev","next","child","parent"],f="twaElementButtonsRender";function Q(){return[...document.querySelectorAll("[data-relative]")]}function $(){V(),J.forEach(function(e){document.getElementById(f).innerHTML+=X(e)})}function R(e){Q().forEach(t=>{t.addEventListener("click",()=>{let n,s=t.getAttribute("data-relative");s==="parent"&&(n=e.parentElement?e.parentElement:e,!e.parentElement&&a("No parent element")),s==="prev"&&(n=e.previousElementSibling?e.previousElementSibling:e,!e.previousElementSibling&&a("No previous sibling element")),s==="next"&&(n=e.nextElementSibling?e.nextElementSibling:e,!e.nextElementSibling&&a("No next sibling element")),s==="child"&&(n=e.firstElementChild?e.firstElementChild:e,!e.firstElementChild&&a("No child element")),document.dispatchEvent(new CustomEvent("twa:updated-target",{bubbles:!0,detail:{newTarget:n}}))})})}function V(){document.getElementById(f).innerHTML=""}function X(e){return`
    <div>
      <button data-relative="${e}" class="bg-slate-800 rounded flex hover:ring peer-focus:ring peer-focus:ring-teal-500 text-white px-2.5 py-1.5">
      <span class="select-none text-xs leading-none font-medium capitalize">${e}</span>
      </button>
    </div>
    `}function _(){let e=["right-4","bottom-4"],t=document.createElement("div");L(),A(t,e);let n=i=>`
      <strong class="text-slate-400 font-medium text-sm select-none">
        ${i}
      </strong>
    `;t.innerHTML=`
      <details id="twaPopup" class="relative bg-slate-900 shadow-lg rounded-lg group overflow-hidden max-w-sm open:w-screen">
        <summary class="flex items-center gap-1 justify-center h-10 w-10 group-open:h-12 group-open:w-full group-open:bg-slate-800/50 cursor-pointer text-white focus:ring focus:ring-inset focus:ring-teal-500 focus:outline-none">
          <span class="select-none">
            \u{1F916}
          </span>

          <span class="group-open:block hidden text-white text-sm font-medium select-none">
            - Tailwind CSS Assistant
          </span>
        </summary>

        <div class="p-4 space-y-4">
          <p class="text-center text-xs text-slate-400 select-none">
            Open element CSS information with <span class="font-medium">CMD + Click</span>.
          </p>

          <div class="space-y-2">
            ${n("Classes")}

            <form id="${l}">
              <div class="flex gap-2">
                <input type="text" id="${d}" placeholder="Add Tailwind CSS Class" class="border-slate-700 bg-slate-800 text-slate-300 rounded w-full text-xs focus:ring focus:ring-teal-500 focus:outline-none focus:border-slate-700" />

                <button class="bg-teal-600 text-white rounded px-3 py-1.5 text-xs font-medium shrink-0 focus:outline-none focus:ring focus:ring-teal-500 hover:ring hover:ring-teal-600">
                  <span class="select-none">Add</span>
                </button>
              </div>
            </form>

            <fieldset id="${c}" class="flex flex-wrap gap-2"></fieldset>
          </div>

          <div class="space-y-2">
            ${n("Toggle Breakpoints")}

            <fieldset id="${u}" class="flex flex-wrap gap-2"></fieldset>

            <small class="text-xs font-medium text-slate-500 block">
              Active Breakpoint: <span id="twaBreakpoint" class="uppercase"></span>
            </small>
          </div>

          <div class="space-y-2">
            ${n("Change Element")}

            <div id="${f}" class="flex flex-wrap gap-2"></div>

            <div id="twaError" class="text-red-500 text-sm font-medium select-none" hidden></div>
          </div>

          <div class="space-y-2">
            ${n("Popup Position")}

            <div id="${m}" class="flex flex-wrap gap-2"></div>
          </div>
        </div>
      </details>
    `;let s,o=document.getElementById("twaBreakpoint"),r,B=[];document.addEventListener("click",i=>{twaPopup.contains(i.target)||(twaPopup.open=!1),i.metaKey&&(i.preventDefault(),twaPopup.open=!0,s=i.target,o.innerText=E(),r=h(s),N(),g(),b(),O(),W())});function N(){w(s),document.getElementById(l).addEventListener("submit",g)}function g(){B=[...s.classList],I(B),twaClassInputs=x(),C(s)}function b(){y(),twaBreakpointInputs=v(),k(s,r)}function O(){S(),T(t,e)}function W(){$(),R(s)}document.addEventListener("twa:updated-target",function(i){s=i.detail.newTarget,r=h(s),g(),b()}),window.addEventListener("resize",function(){o.innerText=E()})}var be=_;export{be as default};
