var theData = {headerTitle:"Shop Page", weekDay:"Thursday"};
var theTemplateScript = document.getElementById("template").innerHTML;
var theTemplate = Handlebars.compile (theTemplateScript);
var divContents = theTemplate (theData);
document.getElementById("content").innerHTML = divContents;

//var theBioData = {name:"Anil kuamr", gender:"Male"};
//var theTemplateBioDataScript = document.getElementById("bio-data").innerHTML;
//var theTemplate = Handlebars.compile (theTemplateBioDataScript);
//var divContents = theTemplate (theBioData);
//document.getElementById("content1").innerHTML = divContents;
//   <div id="bio-data">
//          <b>Name: {{ name }}
//              Gender: {{gender}}</b>
//      </div>