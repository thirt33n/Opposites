if(screen.width < 600){
  
head.innerHTML = "This does not work in mobile phones yet!";
content.innerHTML="Sorry for the inconvenience";
msg.innerHTML="Try this in your Computer!";
}
else{
  but1.addEventListener('click',locator);
  but2.addEventListener('click',refresher);

  function refresher(){
      window.location.reload();
  }
  function output(x,y){
      const l1 = document.getElementById("latitude");
      const l2 = document.getElementById("longitude");
      l1.value = x;
      l2.value = y;
      var ax,ay;
      ax=-1*x;
      ay = -1*(180-Math.abs(y));
      const l3 = document.getElementById("alatitude");
      const l4 = document.getElementById("alongitude");
      l3.value = ax;
      l4.value = ay;
      main();
      //loadMap2(ax,ay);
      loadMap(x,y,ax,ay);
  }

  function locator(){
          console.log("Works");
          navigator.geolocation.getCurrentPosition((position)=>{
          output(position.coords.latitude,position.coords.longitude);
          content.innerHTML = "Found your location";
          $("#curloc").fadeIn(1000);
          
      });
      
  }
  function main(){
      $(".three").fadeIn(1000);
      $("#anloc").fadeIn(1000);
      $(".three").css({"padding-top": "110px",
      "margin-left": "-341px"});
      
  }

  function loadMap(x,y,ax,ay) {
        
      var mapOptions = {
        center: new google.maps.LatLng(x,y), 
        zoom:12, 
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var mapOptions2 = {
          center: new google.maps.LatLng(ax,ay), 
          zoom:3, 
          mapTypeId:google.maps.MapTypeId.ROADMAP
      };
          
      var map = new google.maps.Map(document.getElementById("sample"),mapOptions);
      google.maps.event.addDomListener(window, 'load', loadMap);
      var map2 = new google.maps.Map(document.getElementById("sample2"),mapOptions2);

      var markerOptions = {
          position : new google.maps.LatLng(x,y),
          map:map
      };

      var markerOptions2 = {
          position : new google.maps.LatLng(ax,ay),
          map:map2
      };

      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);

      var marker2 = new google.maps.Marker(markerOptions2);
      marker2.setMap(map2);
      $("#sample").fadeIn(1000);
      $("sample2").fadeIn(1000);
  }
}