(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  function openMenu(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
  function closeMenu(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
  if(t&&d&&o){
    t.addEventListener('click',function(){if(t.getAttribute('aria-expanded')==='true'){closeMenu();}else{openMenu();}});
    if(c){c.addEventListener('click',closeMenu);}
    o.addEventListener('click',closeMenu);
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMenu();}});
    window.addEventListener('resize',function(){if(window.innerWidth>768){closeMenu();}});
    d.querySelectorAll('.drawer-group-btn').forEach(function(b){
      b.addEventListener('click',function(){
        var sub=document.getElementById(b.getAttribute('aria-controls'));
        var open=b.getAttribute('aria-expanded')==='true';
        b.setAttribute('aria-expanded',open?'false':'true');
        if(open){sub.setAttribute('hidden','');}else{sub.removeAttribute('hidden');}
        b.lastElementChild.textContent=open?'+':'−';
      });
    });
  }
  document.querySelectorAll('.faq-q').forEach(function(b){
    b.addEventListener('click',function(){
      var item=b.closest('.faq-item');var open=item.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
    });
  });
  var fab=document.querySelector('.sticky-cta'),ft=document.querySelector('.site-footer');
  if(fab&&ft&&'IntersectionObserver' in window&&window.innerWidth>768){
    new IntersectionObserver(function(es){es.forEach(function(e){fab.classList.toggle('hide',e.isIntersecting);});},{threshold:0.05}).observe(ft);
  }
})();
