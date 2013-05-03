function getLatLong(address, callback){
    var geocoder = new google.maps.Geocoder();
     geocoder.geocode( { 'address': address }, callback);
}
function getDistance(fromAddress, toAddress){
    var LatLng;
    var callback1 = function (results, status){
        if (status == google.maps.GeocoderStatus.OK) {
            LatLng = results[0].geometry.location;
            getLatLong(toAddress, callback2);
        }
    }
    var callback2 = function (results, status){
        var LatLng2;
        if (status == google.maps.GeocoderStatus.OK) {
            LatLng2 = results[0].geometry.location;
            var p1 = new google.maps.LatLng(LatLng.lat(), LatLng.lng());
            var p2 = new google.maps.LatLng(LatLng2.lat(), LatLng2.lng());
            var data = {from_address:fromAddress,to_address:toAddress,distance:calcDistance(p1, p2)};
            var templateScript = document.getElementById("template").innerHTML;
            var template = Handlebars.compile(templateScript);
            var divContents = template(data);
            document.getElementById("content").innerHTML = divContents;
        }
    }
    getLatLong(fromAddress, callback1);
}

function calcDistance(p1, p2){
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}