
  This code written for solving mapping problem. If you want to listing products in a category page you should load products    images for every items of list. When you hover on this image, should come one more bigger image and it should has x-y coordinates and when you move on first image, for focus, other one must move,too. When I add a button for favorites on this first image's div, the code think its a new mapping area. I consider that button act like unvisible in this div and hereby this solution generated. 

```Javascript
$(document).on("mouseover",".addFavIcon",function () {
    $(this).parents(".thumb").children("a").children("img.zoomedImg").removeClass("active");
});

$(".addFavIcon").mouseout(function(){
    $(this).parents(".thumb").children("a").children("img.zoomedImg").addClass("active");
});

$(document).on("mouseover",".removeFavIcon",function () {
    $(this).parents(".thumb").children("a").children("img.zoomedImg").removeClass("active");
});

$(".removeFavICon").mouseout(function(){
    $(this).parents(".thumb").children("a").children("img.zoomedImg").addClass("active");
});
```
 Differences between "$(document).on("mouseout","#e",function(){})" and "$("#e").mouseout()" is important !!!

