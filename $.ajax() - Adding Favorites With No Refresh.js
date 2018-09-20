
$(document).on("click","#addFav",function (e) {
    var productCode = $(this).attr("data-productcode");
    //This data comes from controller and we put it in button's "data-productcode" attribute which is created by me 
    
    $.ajax({
        url: '/profile/favorites/add/' + productCode,
        type: 'POST',
        //Post method for controller. This must be defined as required as "POST" in controller.
        success: function (data) {
            $("#addFav").attr("id","removeFav");
            //BUTTON SWITCHING
            $(".favDetailIcon").attr("src","/x/y/z/addedImage.png");
            $("#alertW1").attr("style","display:block;");
            setTimeout(function () {
                $("#alertW1").slideUp();
            },1000);

            $("#alertW3").attr("style","display:block;");
            setTimeout(function () {
                $("#alertW3").slideUp();
            },1000);

        }, error: function (e) {
            alert("ADD ERROR");
        }
    });


});


$(document).on("click","#removeFav",function (e) {
    var productCode = $(this).attr("data-productcode");

    $.ajax({
        url: '/profile/favorites/delete/' + productCode,
        type: 'POST',
        success: function (data) {

            $("#removeFav").attr("id","addFav");
            $(".favDetailIcon").attr("src","/x/y/z/removedImage.png");
            $("#alertW").attr("style","display:block;");
            setTimeout(function () {
                $("#alertW").slideUp();
            },1000);

            $("#alertW2").attr("style","display:block;");
            setTimeout(function () {
                $("#alertW2").slideUp();
            },1000);
        }, error: function (e) {
            alert("REMOVE ERROR");
        }
    });
});

//Controller Example (INSIDE OF /profile CONTROLLER)

@RequestMapping(value = "/add/{productCode}", method = RequestMethod.POST)
    @RequireHardLogIn
    @ResponseBody
    public String addToList(@PathVariable("productCode") final String code, final ReviewForm form, final Model model,
                            final HttpServletRequest request)
    {
        final String referrer = request.getHeader("referer");
        customerFacade.addProductToWishlist(code);
        return REDIRECT_PREFIX + referrer;
    }
  // THE KEY POINT IS "AJAX MUST SEND URL WHAT THE CONTROLLER WANTS"
  // AND POPULATORS MUST BE EXIST OF COURSE TO USE DATA AGAIN
