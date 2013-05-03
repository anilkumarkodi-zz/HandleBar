function getLatLong(address)
{
var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var theData = {latitude: results[0].geometry.location.lat(), longitude: results[0].geometry.location.lng()};
            var theTemplateScript = document.getElementById("template").innerHTML;
            var theTemplate = Handlebars.compile(theTemplateScript);
            var divContents = theTemplate(theData);
            document.getElementById("content").innerHTML = divContents;
         }
    });
}
