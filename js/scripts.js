console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tooltip');

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.height = '100%';
  mobileNav.style.transition = '.5s ease'
  content.style.opacity = '.1';
});

closeBtn.addEventListener('click', function(){
  mobileNav.style.width = '0';
  mobileNav.style.transition = '.5s ease'
  content.style.opacity = '1';
});

moreInfoText.addEventListener('mouseenter', function(){
  tooltip.style.opacity = '1';
  var x = event.screenX;     // Get the horizontal coordinate
  var y = event.screenY;     // Get the vertical coordinate
  console.log(x);
  tooltip.style.top = y + 'px';
  tooltip.style.left = x + 'px';
});

moreInfoText.addEventListener('mouseleave', function(){
  tooltip.style.opacity = '0';
});
