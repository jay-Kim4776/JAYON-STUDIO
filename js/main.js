(() => {
 'use strict';
 const c=window.JSOLUTION_CONFIG;
 const base=`https://github.com/${c.owner}/${c.repository}`;
 const status=document.querySelector('#release-status');
 const labels={solution:'통합 설치 파일 다운로드 ↓',simulator:'시뮬레이터 다운로드 ↓',fieldscope:'Android APK 다운로드 ↓'};
 function apply(tag,assets=null,date='확인된 배포본',keys=Object.keys(c.files)){
  for(const key of keys){
   const file=c.files[key];
   const available=!assets||assets.some(a=>a.name===file&&a.state==='uploaded');
   const url=`${base}/releases/download/${encodeURIComponent(tag||c.tags?.[key]||c.tag)}/${encodeURIComponent(file)}`;
   document.querySelectorAll(`[data-download="${key}"]`).forEach(el=>{if(available){el.href=url;el.removeAttribute('aria-disabled');}else{el.removeAttribute('href');el.setAttribute('aria-disabled','true');}if(el.classList.contains('download-action'))el.textContent=available?labels[key]:'배포 준비 중';});
   document.querySelectorAll(`[data-version="${key}"]`).forEach(el=>el.textContent=`Version ${c.versions[key]}`);
   document.querySelectorAll(`[data-date="${key}"]`).forEach(el=>el.textContent=date);
   document.querySelectorAll(`[data-checksum="${key}"]`).forEach(el=>el.href=url+'.sha256');
  }
 }
 apply(null);
 document.querySelectorAll('[data-release-link]').forEach(el=>el.href=base+'/releases'+(el.dataset.releaseLink==='latest'?'/latest':''));
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
 const close=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');document.querySelectorAll('.product-menu[open]').forEach(el=>el.open=false);};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
 nav.querySelectorAll('a').forEach(el=>el.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 const current=location.pathname.split('/').pop()||'index.html';nav.querySelectorAll('a').forEach(el=>{if(el.getAttribute('href')===current)el.setAttribute('aria-current','page');});
 async function load(tag,keys,primary){const abort=new AbortController(),timer=setTimeout(()=>abort.abort(),c.timeoutMs);try{
  const response=await fetch(`https://api.github.com/repos/${c.owner}/${c.repository}/releases/tags/${encodeURIComponent(tag)}`,{signal:abort.signal,headers:{Accept:'application/vnd.github+json'}});
  if(!response.ok)throw new Error('release unavailable');const release=await response.json();if(release.draft||!Array.isArray(release.assets))throw new Error('invalid release');
  apply(release.tag_name,release.assets,new Date(release.published_at).toLocaleDateString('ko-KR',{timeZone:'Asia/Seoul'}),keys);
  if(primary){const title=document.querySelector('#release-title'),body=document.querySelector('#release-body');if(title)title.textContent=release.name;if(body)body.textContent=release.body||'';}
  return true;
 }catch{return false;}finally{clearTimeout(timer);}}
 if(document.querySelector('[data-download],#release-status')){
  const groups=new Map();for(const key of Object.keys(c.files)){const tag=c.tags?.[key]||c.tag;if(!groups.has(tag))groups.set(tag,[]);groups.get(tag).push(key);}
  Promise.all([...groups].map(([tag,keys])=>load(tag,keys,tag===c.tag))).then(results=>{if(status)status.textContent=results.every(Boolean)?`JSolution ${c.versions.solution} · PLC Simulator ${c.versions.simulator} · FieldScope ${c.versions.fieldscope} · GitHub Releases`:'실시간 조회가 지연되어 확인된 배포 파일 링크를 제공합니다. GitHub 릴리스 안내에서 상태를 확인하세요.';});
 }
})();
