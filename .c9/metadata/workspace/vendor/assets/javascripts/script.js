{"filter":false,"title":"script.js","tooltip":"/vendor/assets/javascripts/script.js","undoManager":{"mark":8,"position":8,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":23}},"text":"function initialize() {"},{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":121,"column":0}},"lines":["","  var $latitude = document.getElementById('latitude');","  var $longitude = document.getElementById('longitude');","  //define the center","  var latitude = 52.626946","  var longitude = 13.408745; ","  var LatLng = new google.maps.LatLng(latitude, longitude);","  var mapOptions = {","    zoom: 8,","    center: LatLng,","    panControl: false,","    mapTypeId: google.maps.MapTypeId.ROADMAP","  }","","    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);","    //use to let window open one at the time ","    var currentInfoWindow = '';","    //marker image","    ","    var image = 'images/pin.png';","    var plusimage = 'images/plusPin.png';","    ","    var markerd = new google.maps.Marker({","      position: LatLng,","      map: map,","      icon:plusimage,","      title: 'Drag Me!',","      draggable: true","    });","    markerd.setMap(null);","    ","        $( \"#toggle\" ).click(function() {","    $( \".nav-left\" ).toggle( \"slow\" );","","    if ($(this).attr('src') === \"images/plus.png\") { ","            $(this).attr(\"src\", \"images/minus.png\"); ","            $(\".map-wrap\").css({\"width\":\"80%\"});","             markerd.setMap(map);","      ","    }","    else { ","            $(this).attr(\"src\", \"images/plus.png\");","            $( \".map-wrap\" ).animate({ width: '100%' }, 610 );","             markerd.setMap(null);","        };","    });","    ","","    ","    google.maps.event.addListener(markerd, 'dragend', function(markerd){","      var latLng = markerd.latLng;","      $latitude.value = latLng.lat();","      $longitude.value = latLng.lng();","    });","","  ","","    ","    //loop through myData","      for (var x in mydata) { ","        var place = mydata[x];","        var location = new google.maps.LatLng(place.lat,place.lng)","        //all  values ","        addMarker(map, place.name,  location, place.description)  ","      } ","  //create markers","      function addMarker(map, name, location) {","        var marker = new google.maps.Marker({","        animation: google.maps.Animation.DROP,","        icon: image,","        position: location,","        map: map","      });","","","       google.maps.event.addListener(map, 'click', function() {","        infowindow.close();","      });","      //create info window","      var infowindow = new google.maps.InfoWindow({","      //hold all the content for the info window ","      content:'<div class=\"infobox\"><h2>' + place.name + '</h2><p>' + place.description + '</p><p>'+ place.lat + \",\" + place.lng +'</p></div>',","","","      }); ","    ","      ","     // click on marker function","      google.maps.event.addListener(marker, 'click', function() {","","         //let open only one window at the time ","        if(currentInfoWindow != '') { ","          currentInfoWindow.close();","          currentInfoWindow = '';","        }","        ","          infowindow.open(map, marker);","          currentInfoWindow = infowindow;","","        //click on open infowindow close it ","         if(!marker.open){","                    infowindow.open(map,marker);","                    marker.open = true;","                }","                else{","                    infowindow.close();","                    marker.open = false;","                }","                //zoom in ","                map.setZoom(12);","                map.setMarker(marker.location());","          });","","   ","","  }"," //markers.push(marker);","","}",""]},{"action":"insertText","range":{"start":{"row":121,"column":0},"end":{"row":121,"column":61}},"text":"google.maps.event.addDomListener(window, 'load', initialize);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":116,"column":0},"end":{"row":116,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":115,"column":0},"end":{"row":116,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":3},"end":{"row":115,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":2},"end":{"row":114,"column":3}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":1},"end":{"row":114,"column":2}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":114,"column":0},"end":{"row":114,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":113,"column":0},"end":{"row":114,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":113,"column":0},"end":{"row":113,"column":4}},"text":"    "}]}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":113,"column":4},"end":{"row":113,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1415703899060,"hash":"ba60e839d0afad6212b45eed63bbbc606bc85855"}