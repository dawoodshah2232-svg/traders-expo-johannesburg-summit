// Countdown to 19 Feb 2027, 09:00 Africa/Johannesburg (+02:00)
const target = new Date('2027-02-19T09:00:00+02:00').getTime();
function tick(){
  const el=document.getElementById('d'); if(!el) return;
  let diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000); diff-=d*86400000;
  const h=Math.floor(diff/3600000); diff-=h*3600000;
  const m=Math.floor(diff/60000); const s=Math.floor((diff-m*60000)/1000);
  document.getElementById('d').textContent=d; document.getElementById('h').textContent=h;
  document.getElementById('m').textContent=m; document.getElementById('s').textContent=s;
}
tick(); setInterval(tick,1000);
// Role tabs
document.querySelectorAll('.tab[data-t]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.tab[data-t]').forEach(x=>x.classList.remove('on')); b.classList.add('on');
  document.querySelectorAll('.tabp').forEach(p=>p.classList.add('hide'));
  document.getElementById('t-'+b.dataset.t).classList.remove('hide');
}));
// Gallery filter
document.querySelectorAll('.tab[data-f]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.tab[data-f]').forEach(x=>x.classList.remove('on')); b.classList.add('on');
  const f=b.dataset.f;
  document.querySelectorAll('.gal figure').forEach(fig=>{ fig.style.display=(f==='all'||fig.dataset.cat===f)?'':'none'; });
}));
