let arrowLeft = document.querySelector('.arrow-left');
let arrowRight  = document.querySelector('.arrow-right');

let recommendedWrapper = document.querySelector('.recommended-wrapper');

arrowRight.addEventListener('click', function(){
    recommendedWrapper.scrollLeft += 185;
})

arrowLeft.addEventListener('click', function(){
    recommendedWrapper.scrollLeft -= 185;
})

