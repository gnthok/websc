function slider(){
    $curr = $('.imgSlider img.active');
    if($curr.length == 0){
        $('.imgSlider img:first-child').addClass('active');
    }else{
        $next = $curr.removeClass('active').next();
        if($next.length == 0){
        $('.imgSlider img:first-child').addClass('active');
    }else{
        $next.addClass('active');
    }
    }
}
$('.menu .choosen').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})

function textChange(){
    let baVal = 0;
    let ba = [
        "Joe Taslim",
        "Cristiano Ronaldo",
        "KSHMR",
        "Hrithik Roshan",
        "DJ Alok",
        "Lucas Silva",
    ];
    setInterval(() => {
        if(baVal == 5){
            baVal = 0;
        }
        $('.kiri').html(ba[baVal]);
        ++baVal;
    },2000)
    let ytVal = 0;
    let yt = [
        "Nguyen Thu Wann",
        "Kemas Pake Z",
        "Dyland Pros",
        "Rendy Rangers",
        "Frontal Gaming",
        "Idang Nia",
        "LetDa Hyper",
        "Wawan MKS",
        "Meri Olivia",
    ];
    setInterval(() => {
        if(ytVal == 8){
            ytVal = 0;
        }
        $('.youtuber').html(yt[ytVal]);
        ++ytVal;
    },2000)
}
textChange()
setInterval(slider,3000);