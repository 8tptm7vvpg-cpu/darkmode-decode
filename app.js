/* DARKMODE DECODE — Version 2. No external dependencies or services. */
(() => {
'use strict';
const {terms,categories}=window.DECODE_DATA;
const $=s=>document.querySelector(s), results=$('#results'), search=$('#search'), dialog=$('#detail');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ').trim();
let category=-1,selected=null,introTimer;
const menu=$('#disciplines');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target);}});},{root:$('.workspace'),threshold:0.06}):null;
const records=terms.map(t=>({...t,haystack:normalize([t.term,t.expansion,t.definition,t.keywords,...t.categories.map(c=>categories[c])].join(' '))}));
const tagMarkup=t=>t.categories.map(c=>`<span class="tag">${escape(categories[c])}</span>`).join('');
function drawCategories(){
 $('#categories').innerHTML=[[-1,'All disciplines'],...categories.map((c,i)=>[i,c])].map(([i,c])=>`<button data-category="${i}" class="${category===i?'active':''}" aria-pressed="${category===i}"><span class="cat-no">${i===-1?'◇':String(i+1).padStart(2,'0')}</span><span>${escape(c)}</span><span class="cat-count">${i===-1?terms.length:terms.filter(t=>t.categories.includes(i)).length}</span></button>`).join('');
}
function render(){
 if(revealObserver)revealObserver.disconnect();
 const q=normalize(search.value),words=q.split(' ').filter(Boolean);
 const found=records.filter(t=>(category===-1||t.categories.includes(category))&&words.every(w=>t.haystack.includes(w)));
 const score=t=>normalize(t.term)===q?100:normalize(t.expansion)===q?90:normalize(t.term).startsWith(q)?60:normalize(t.expansion).startsWith(q)?50:10;
 const sort=$('#sort').value;
 found.sort((a,b)=>sort==='za'?b.term.localeCompare(a.term):sort==='az'?a.term.localeCompare(b.term):q?score(b)-score(a)||a.term.localeCompare(b.term):(['CMS','Brand identity','GSM','CTA','UI','SEO'].indexOf(a.term)+1||100)-(['CMS','Brand identity','GSM','CTA','UI','SEO'].indexOf(b.term)+1||100)||a.term.localeCompare(b.term));
 $('#results-title').textContent=search.value.trim()?'Search results':category===-1?'All terminology':categories[category];
 $('#count').textContent=`${found.length} ${found.length===1?'term':'terms'}`;
 $('#clear').hidden=!search.value;
 results.innerHTML=found.length?found.map(t=>`<button class="term-card" data-term="${t.id}" aria-label="Read ${escape(t.term)}${t.expansion?': '+escape(t.expansion):''}"><div class="card-top"><h3>${escape(t.term)}</h3><span class="arrow" aria-hidden="true">↗</span></div>${t.expansion?`<div class="expansion">${escape(t.expansion)}</div>`:''}<p>${escape(t.definition)}</p><div class="tags">${tagMarkup(t)}</div></button>`).join(''):`<div class="empty"><h3>No matching terms yet.</h3><p>Try a shorter phrase or search across all disciplines.</p><button id="reset-results">Reset search & filters</button></div>`;
 watchCards();
}
function watchCards(){if(revealObserver&&!reduceMotion.matches)document.querySelectorAll('.term-card').forEach((card,i)=>{card.classList.add('reveal-card');card.style.setProperty('--reveal-delay',`${Math.min(i%3,2)*45}ms`);revealObserver.observe(card);});}
function reset(){category=-1;$('#discipline-toggle span').textContent='All Disciplines';search.value='';$('#sort').value='az';drawCategories();render();$('.workspace').scrollTop=0;}
function readTerm(id){
 const t=terms.find(t=>t.id===id);if(!t)return;selected=t;
 $('#detail-content').innerHTML=`<h2>${escape(t.term)}</h2>${t.expansion?`<div class="expansion">${escape(t.expansion)}</div>`:''}<div class="tags">${tagMarkup(t)}</div><h3>WHAT IT MEANS</h3><p>${escape(t.definition)}</p><h3>IN PRACTICE</h3><p>${escape(t.example)}</p>${t.confusion?`<h3>COMMON CONFUSION</h3><p>${escape(t.confusion)}</p>`:''}${t.related.length?`<h3>KEEP DECODING</h3><div class="related">${t.related.map(name=>terms.filter(x=>x.term===name).map(x=>`<button data-term="${x.id}">${escape(x.term)} ↗</button>`).join('')).join('')}</div>`:''}`;
 $('#copy-status').textContent='';
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;
}
function route(){const id=new URLSearchParams(location.hash.slice(1)).get('term');if(id){hideIntro(false);if(terms.some(t=>t.id===id))readTerm(id);else{if(dialog.open)dialog.close();reset();$('#results-title').textContent='Entry not found';}}else if(dialog.open)dialog.close();}
function goTerm(id){if(location.hash===`#term=${id}`)readTerm(id);else location.hash=`term=${id}`;}
function clearRoute(){if(location.hash.startsWith('#term='))history.replaceState(null,'',location.pathname+location.search);}
function hideIntro(focus=false){clearTimeout(introTimer);$('#intro').classList.add('done');$('#intro').inert=true;$('#app').inert=false;if(focus&&!dialog.open)search.focus({preventScroll:true});}
function showIntro(){if(dialog.open)dialog.close();$('#app').inert=true;$('#intro').inert=false;$('#intro').classList.remove('done');document.querySelector('#intro .fullscreen').focus();introTimer=setTimeout(()=>hideIntro(),window.matchMedia('(prefers-reduced-motion: reduce)').matches?800:3400);}

$('#search-form').onsubmit=e=>e.preventDefault();search.oninput=render;
$('#clear').onclick=()=>{search.value='';render();search.focus();};$('#sort').onchange=render;
$('#categories').onclick=e=>{const b=e.target.closest('[data-category]');if(b){category=Number(b.dataset.category);drawCategories();render();$('.workspace').scrollTop=0;$('#discipline-toggle span').textContent=category===-1?'All Disciplines':categories[category];menu.close();}};
$('#home').onclick=()=>{reset();$('#discipline-toggle span').textContent='All Disciplines';};
$('#focus-search').onclick=()=>{search.focus();$('.workspace').scrollTop=0;};
 document.addEventListener('click',e=>{const t=e.target.closest('[data-term]');if(t)goTerm(t.dataset.term);const q=e.target.closest('[data-query]');if(q){category=-1;$('#discipline-toggle span').textContent='All Disciplines';search.value=q.dataset.query;drawCategories();render();search.focus();}if(e.target.closest('#reset-results'))reset();});
$('#close-detail').onclick=()=>dialog.close();dialog.addEventListener('close',clearRoute);
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
$('#copy-link').onclick=async()=>{if(!selected)return;const url=new URL(location.href);url.hash=`term=${selected.id}`;try{if(location.protocol==='file:')throw Error('local');await navigator.clipboard.writeText(url.href);$('#copy-status').textContent='Link copied';}catch{$('#copy-status').textContent=location.protocol==='file:'?'Publish the files to share links.':'Copy the entry URL from your address bar.';}};
document.addEventListener('keydown',e=>{const editing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);if(e.key==='/'&&!editing&&!dialog.open&&!menu.open){e.preventDefault();hideIntro(false);search.focus();$('.workspace').scrollTop=0;}if(e.key==='Escape'&&!$('#intro').classList.contains('done'))hideIntro();});
// Menu is a native modal: keyboard focus is contained and Escape closes it.
$('#discipline-toggle').onclick=()=>{menu.showModal();$('#discipline-toggle').setAttribute('aria-expanded','true');};
$('#close-disciplines').onclick=()=>menu.close();
menu.addEventListener('close',()=>$('#discipline-toggle').setAttribute('aria-expanded','false'));
// Fullscreen is only reported after the browser confirms the state.
const expanded=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
function syncFullscreen(){document.querySelectorAll('.fullscreen').forEach(button=>{const active=expanded();button.querySelector('span').textContent=active?'Exit Fullscreen':'Full Screen';button.setAttribute('aria-pressed',String(active));button.querySelector('path').setAttribute('d',active?'M3 8h5V3m8 0v5h5M8 21v-5H3m13 5v-5h5':'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5');});}
let fullscreenNoticeTimer;
document.querySelectorAll('.fullscreen').forEach(button=>button.onclick=async()=>{try{if(expanded()){const leave=document.exitFullscreen||document.webkitExitFullscreen;await leave.call(document);}else{const enter=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;if(!enter)throw new Error('unsupported');await enter.call(document.documentElement);}syncFullscreen();}catch{const notice=$('#fullscreen-status');notice.textContent='Fullscreen is unavailable in this browser. On iPhone, use Safari → Share → Add to Home Screen for an app-style view.';notice.classList.add('visible');clearTimeout(fullscreenNoticeTimer);fullscreenNoticeTimer=setTimeout(()=>notice.classList.remove('visible'),9000);}});
document.addEventListener('fullscreenchange',syncFullscreen);document.addEventListener('webkitfullscreenchange',syncFullscreen);syncFullscreen();
// Scroll-linked ambient light moves more slowly than content for subtle parallax.
let scrollFrame=0;$('.workspace').addEventListener('scroll',()=>{if(reduceMotion.matches||scrollFrame)return;scrollFrame=requestAnimationFrame(()=>{$('.workspace').style.setProperty('--parallax',`${Math.min($('.workspace').scrollTop*.12,180)}px`);scrollFrame=0;});},{passive:true});
window.addEventListener('hashchange',route);
drawCategories();render();if(location.hash.startsWith('#term='))route();else showIntro();
})();
