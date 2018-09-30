
Örnek olarak bir gönderinin/ürünün/makalenin favorilere eklenmesi işlemini ele alalım. Favorilere eklendiğinde başka 
bir linke post işlemi olduğunu ve ajax kullanılmadığını farz edelim, işlem gerçekleşince sayfa yenilenmesi söz konusu. 
Bu yüzden "favorilere eklendi" veya "favorilerden çıkarıldı" gibi bir dialog message ı buton tıklandığında event verirsek,
işlem gerçekleştikten hemen sonra sayfa yenilendiğinden görülemez. Bu yüzden favorilere ekle butonuna basıldığında ve 
işlem tamamlanıp, sayfa yenilendiğinde message basılmalı. onun için localstorage kullanırız;

```Javascript
                      if ($('.RemoveFavIcon').length > 0) {
                          $('.RemoveFavIcon').click(function(e) {
                              localStorage.setItem("eDelete","true");
                          });
                      }

                      if ($('.AddFavIcon').length > 0) {
                          $('.AddFavIcon').click(function() {
                              localStorage.setItem("eAdd","true");
                          });
                      }

                      if ($('#removeFavorites').length > 0) {
                          $('#removeFavorites').click(function() {
                              localStorage.setItem("eDelete","true");
                          });
                      }

                      if ($('#addFav').length > 0) {
                          $('#addFav').click(function() {
                              localStorage.setItem("eAdd","true");
                          });
                      }
```

Çeşitli sayfalardaki favorilere ekleme ve çıkarma işlemi yapan butonların idleri ve classları dolar ile seçtik. 
Bu butonlara tıklandığında, local storage a eventleri ve bool değerlerini set ettik. 

```Javascript
                      $(document).on("ready",function () {
                          var eControl = localStorage.getItem("eDelete");
                          var eAddition = localStorage.getItem("eAdd");
                           if(eControl == "true"){
                                 $("#alertX").attr("style","display:block;");
                                 setTimeout(function () {
                                     $("#alertX").slideUp();
                                 },3000);

                                 $("#alertX2").attr("style","display:block;");
                                 setTimeout(function () {
                                     $("#alertX2").slideUp();
                                 },3000);
                          }
                           if(eAddition == "true"){
                                 $("#alertX1").attr("style","display:block;");
                                 setTimeout(function () {
                                     $("#alertX1").slideUp();
                                 },3000);

                                 $("#alertX3").attr("style","display:block;");
                                 setTimeout(function () {
                                     $("#alertX3").slideUp();
                                 },3000);
                           }
                          localStorage.removeItem("eAdd");
                          localStorage.removeItem("eDelete");
                      }

```

buton görevini yapıp gerekli yere post ettikten ve işlemi gerçekleştikten sonr asayfa yenilendiği anda, 
localstorage dan bu bool değerleri okuyup, ona göre mesajı yazdıran, 3000 ms sonra slideUp() ile kaybolan,
ve işlem bittikten sonra, localstorage dan silen kod. Local storage dan silmemizin sebebi, alakalı-alakasız
bütün sayfalarda bu değerleri kontrol edebilecek olmasıdır bu js kodunun. 


