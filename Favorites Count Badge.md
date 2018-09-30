
## JSP PART 
```JSP
      <div class="navbarFavBadge">
          <a href="/profile/favorites/listOfFavorites">
              <img id="headerFavIcon" src="/_ui/responsive/theme-blue/images/mobile-details-unclicked-fav.png">
              <span class="favBadge" data-total="${listOfFavoritesTotal}"></span>
          </a>
      </div>
```

This is the division which you can go the favorited items list. There is an image exist for anchor. Also, its badge exist
and the badges mission is showing quantity of favorited items list total. favBadges data-total property is defined for 
saving data which came from model "listOfFavoritesTotal". At first there is no value between span tags butit will be 
filled from javascript
```Javascript
      $(document).on("ready",function () {
          var e = $('.favBadge').attr("data-total");
          if (e > 0) {
              $('.favBadge').html(e);
              $('.favBadge').show();
          } else {
              $('.favBadge').hide();
          }
      });
```
This code for works badge when every page loaded. Data-totals value copied e and this value putted between span tags. 
 This model attribute comes a controller which works before every page loading. So, when we add an item to favorites, 
 this value cant change. We must to increase and decrase it when it required.
```Javascript

      $(document).on("click","#addFav",function (e) {
          var productCode = $(this).attr("data-productcode");

          $.ajax({
              url: '/profile/favorites/add/' + productCode,
              type: 'POST',
              success: function (data) {
                  $("#addFav").attr("id","removeFav");
                  $(".favDetailIcon").attr("src","/x/y/z/addedImage.png");
                  $(".favBadge").show();
                  var tmp = $(".favBadge").attr("data-total");
                  tmp++;
                  $(".favBadge").attr("data-total", tmp);
                  $(".favBadge").html(tmp);
                  $("#alertW3").attr("style","display:block;");
                  setTimeout(function () {
                      $("#alertW3").slideUp();
                  },1000);
              }, error: function (e) {
                  alert("ADD ERROR");
              }
          });
      });
```
 
 This code is for addition, when we want to start remove process, the code will like this but "tmp" variable must be 
 decreased and also added/removed notifications must be different for issues.
