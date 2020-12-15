function onSrollPage() {
    let element = document.getElementsByClassName('cube')
    // console.log("pageYOffset: " + window.pageYOffset);
    if(window.pageYOffset > 300){
        // console.log('gaga');
        for(let i = 0; i < element.length; i++) {
            element[i].classList.add('flip-title');
        }
    } else{
        for(let i = 0; i < element.length; i++) {
            element[i].classList.remove('flip-title');
        }
    }
}


$(function(){
   $.scrollify({
    section : ".panel",
    //sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
     // setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
})