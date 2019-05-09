var ROOT = "http://localhost/learnlite";
$(function(){


    // Navigation Modal Start
    $("#img-thumbnail").click(function(){
       $("#nav-modal").show();
    })
    $("#nav-modal>ul>li").click(function(){
        $("#nav-modal").hide();
    })
    $("#nav-modal").mouseleave(function(){
        $(this).hide();
    })
    $(".paginate-list>li").hover(function(){
        $(".paginate-list>a").css("color","#fff");
    })
    // Navigation Modal Start



    // Like and Unlike Constants
    const likeimg = ROOT+"/img/like.png";
    const unlikeimg = ROOT+"/img/unlike.png";
    //Like and unlike events
    $(".like").click(function(){
        var divId = $(this).closest(".also-like").attr("data-id");
        var likeState = $(this).closest(".also-like").attr("data-like");
        console.log(likeState); 
        let attribute = $(this).attr("src");
        if(attribute == likeimg){
            $(this).attr("src", unlikeimg);
            $(this).addClass("hover");
        }else{
            $(this).attr("src", likeimg);
            $(this).removeClass("hover");
        }
    })
    

    
    //  Payment Form
    $(".subscribe-btn").click(function(){
        $(".payment-holder").fadeIn(500,function(){
            $(".course-info-body").css('box-shadow','none')
        }).css('display','flex');
        $(".return").click(function(){
            $(".course-info-body").css('box-shadow', '0px 2px 10px var(--box-shadows-3)');
            $(".payment-holder").fadeOut(500);
        })
        $(document).on("keyup",function(){
            if(event.which == 27){
                $(".course-info-body").css('box-shadow', '0px 2px 10px var(--box-shadows-3)');
                $(".payment-holder").fadeOut(500)
            }
        })
    });



    // Numeric Validation
    $(".cvv,.cardnumber").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        
    });



    //Maxlength Attribute Declaration
    $(".cvv").attr('maxlength','1');
    $(".cardnumber").attr('maxlength','4');



    //Cardnumber Autofocus After Previous
    $(".cardnumber").on("keyup keypress",function(){
        let inputattr = $(this).attr('maxlength');
        let inputlength = $(this).val().length;
        if (inputlength == inputattr){
            $(this).next().focus();
            if($(this).last().val().length == inputattr){
                $(this).css('border-color','transparent');
            }
        }
    })



    // Cardnumber On Blur
    $("input[maxlength = 4]").on("keyup blur", function () {
        if ($(this).val().length == $(this).attr('maxlength')) {
            $(this).css('border-color', 'transparent');
        } else if ($(this).val().length <= $(this).attr('maxlength')) {
            $(this).css('border', '1.5px var(--faded-border) solid');
        } else if ($(this).val().length <= 0) {
            $(this).css('border', '1.5px var(--faded-border) solid');
            $(this).first().css('border', '1.5px var(--faded-border) solid');
        }
    })



    // CVV Autofocus
    $(".cvv").on("keyup keypress",function(){
        if($(this).val().length == $(this).attr('maxlength')){
            $(this).next().focus();
        }
    })

    

    // Delete/Clear Button
    $(".cardnumber,.cvv").on("keydown keypress",function(){
        if (event.which == 8 && $(this).val().length == 0) {
            $(this).prev().focus();
        }
    })



    // Cardholder Name Length Resizer
    let cardholder_name = $(".creditcard-name>div").html().length;
    if (cardholder_name <= 30 && cardholder_name >= 21){
        $(".creditcard-name>div").css('font-size','18px');
    } else if (cardholder_name <= 37 && cardholder_name >=30){
        $(".creditcard-name>div").css('font-size', '12px');
    } else if (cardholder_name > 37){
        $(".creditcard-name>div").css('font-size', '16px');
    }
    else{
        $(".creditcard-name>div").css('font-size', '25px');
    }



    $(".select").click(function(){
        // $(".option").fadeIn(1000);
        preventDefault()
    })


   
            

    // $(".").keyup(function (event) {
    //     $(".payment-submit").append("<br>Mouse button pressed: " + event.which);
    //     });
    
});