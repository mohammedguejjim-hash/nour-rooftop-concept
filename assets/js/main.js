// Nour Rooftop — concept homepage interactions
(function(){
  'use strict';

  // Sticky nav state
  var nav = document.getElementById('nav');
  function onScroll(){ nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Scroll reveals
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Mobile menu
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  burger.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open'); burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Respect reduced-data: don't force the hero video
  try{
    var v = document.querySelector('.hero-video');
    if(v && window.matchMedia && matchMedia('(prefers-reduced-data: reduce)').matches){
      v.removeAttribute('autoplay'); v.pause();
    }
  }catch(err){/* video decorative only */}
})();
