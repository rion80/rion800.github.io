let scrollAnimationElm = document.querySelectorAll('.solilo');
let scrollAnimationFunc = () => {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 200;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
