var Lat;
var Lng;
function getLatLong(address) {
    var geocoder = new google.maps.Geocoder();
   geocoder.geocode( { 'address': address }, function (results, status){
           if (status == google.maps.GeocoderStatus.OK) {
           Lat=results[0].geometry.location.lat();
           Lng=results[0].geometry.location.lng();
           }
    });
}

function getDistance(fromAddress,toAddress){
    var p1;
    var p2;
    getLatLong(fromAddress);
    setTimeout(function(){p1= new google.maps.LatLng(Lat, Lng);},3000)
    setTimeout(function(){getLatLong(toAddress)},3000);
    setTimeout(function(){p2= new google.maps.LatLng(Lat, Lng);},4000)
    setTimeout(function(){
    var data = {from_address:fromAddress,to_address:toAddress,distance:calcDistance(p1, p2)};
    var templateScript = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(templateScript);
    var divContents = template(data);
    document.getElementById("content").innerHTML = divContents;
    },5000);
}

function calcDistance(p1, p2){
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)/1000).toFixed(2);
}