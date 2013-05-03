var LatLng1;
var LatLng2;
function whetherBothResultsHaveBeenFetched() {
    return (undefined != LatLng1 && undefined != LatLng2 );
}

function getLatLong(address, successCallback) {
    var geocoder = new google.maps.Geocoder();
     geocoder.geocode( { 'address': address }, successCallback);
}

function whetherResultSuccessful( status) {
    return status == google.maps.GeocoderStatus.OK;
}

var callback1 = function (results, status){
    if (whetherResultSuccessful(status)) {
        LatLng1 = results[0].geometry.location;
        triggerCalculation();
    }
}

var callback2 = function (results, status){
    if (whetherResultSuccessful(status)) {
        LatLng2 = results[0].geometry.location;
        triggerCalculation();
    }
}

function triggerCalculation() {
     if(whetherBothResultsHaveBeenFetched())
         callback();
}

var callback = function(){
      var p1 = new google.maps.LatLng(LatLng1.lat(), LatLng1.lng());
      var p2 = new google.maps.LatLng(LatLng2.lat(), LatLng2.lng());
      var data = {distance:calcDistance(p1, p2)};
      var templateScript = document.getElementById("template").innerHTML;
      var template = Handlebars.compile(templateScript);
      var divContents = template(data);
      document.getElementById("content").innerHTML = divContents;
}

function getDistance(fromAddress, toAddress){
    getLatLong(fromAddress, callback1);
    getLatLong(toAddress,callback2);
}

function calcDistance(p1, p2){
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}
