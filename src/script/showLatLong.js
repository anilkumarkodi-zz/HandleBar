var geocoder = new google.maps.Geocoder();
var result = "";
function getLatLong(address)
{
    geocoder.geocode( { 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var theData = {LatLong:results[0].geometry.location };
            var theTemplateScript = document.getElementById("template").innerHTML;
            var theTemplate = Handlebars.compile (theTemplateScript);
            var divContents = theTemplate (theData);
            document.getElementById("content").innerHTML = divContents;
         }
    });
}