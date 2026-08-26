(function(){
  'use strict';
  var root=document.querySelector('.jewel-lp-root');
  if(!root)return;
  var items=root.querySelectorAll('.jewel-lp-reveal');
  if(!('IntersectionObserver' in window)){items.forEach(function(el){el.classList.add('is-visible');});return;}
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.12,rootMargin:'0px 0px -40px'});
  items.forEach(function(el){observer.observe(el);});
})();
