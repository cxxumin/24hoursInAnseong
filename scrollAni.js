let windowWidth;
let windowHeight;

let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currenScene = 0;


let prevDurations = 0;
let pixelDuration = 0;

let animationKeyframes = [
   
    { // contentsC video
        animationVal:{
            time:[0, 29.5]
        }
    }
]

let elemBody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{
    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration+prevDurations)
    {
        prevDurations += pixelDuration;
        currenScene++;
    }
    else if(scrollY < prevDurations)
    {
        currenScene--;
        prevDurations -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDurations;

    render(currenScene);
}

function resizeHandler()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    totalScrollHeight = 0;
    pixelDuration = windowHeight * 30;

    for( let i = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';
}

function render(nowState) {
    let targetElem = document.querySelectorAll('.container');

    switch (nowState) {
        case 0: {
            let timeVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            
            timeVal = calcAni(animationKeyframes[0].animationVal.time);

            let myVideo = document.querySelector('#myVideo');
            myVideo.currentTime = timeVal;
        } break;
       
    }
}


function calcAni(value)
{
    return( relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}

init();

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var whiteRectangle = document.getElementById('whiteRectangle');
    
    var maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    var currentWidth = (scrollPosition / maxHeight) * 60;
    
    currentWidth = Math.min(currentWidth, 60);

    whiteRectangle.style.width = currentWidth + '%';
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var whiteRectangle = document.getElementById('grayRectangle');
    
    var maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    var currentWidth = (scrollPosition / maxHeight) * 60;
    
    currentWidth = Math.min(currentWidth, 60);

    whiteRectangle.style.width = currentWidth + '%';
});


function redirectToIndexPage() {
    window.location.href = 'index.html';
}