//REQUIRES JQUERY 1.11.2 MIN
//JS Call function to import all JS files from an array list
function jscall(jsarray) {
    var i = 0;
    for (i = 0; i < jsarray.length; i++) {
        var file = jsarray[i];
        document.write('<script type="text/javascript" src="')
        document.write(file)
        document.write('"></script>')
    }
}

//CSS Call function to import all CSS files from an array list
function csscall(cssarray) {
    var i = 0;
    for (i = 0; i < cssarray.length; i++) {
        var file = cssarray[i];
        document.write('<link rel="stylesheet" type="text/css" href="')
        document.write(file)
        document.write('"/>')
    }
}

//redirect function when called redirects to {URL}
function redirector(url) {
    window.location=url;
}

//download function embeds a download interface for a (file)
function downloader(file, name) {
    document.write('\
    <h3>Download Prepared</h3>\
    <p>')
    document.write(name)
    document.write('\
    </p>\
    <button><a href="')
    document.write(file)
    document.write('">Download</a></button>')
}

function dodownload(file) {
    window.location=file;
}

//embedurl embeds a given url in an iframe of (width) and (height)
function embedurl(url, width, height) {
    document.write('\
    <iframe src="')
    document.write(url)
    document.write('\
    " width="')
    document.write(width)
    document.write('\
    " height="')
    document.write(height)
    document.write('\
    "></iframe>')
}

//elementangle angles the element at (deg)
function elementangle() {
    var angle=document.getElementsByTagName("angle")[0].getAttribute("deg");
    
}

//IMPORT HEADER FROM HTML FILE
function impHead(file){
    document.write('\
    <script src="');
    document.write(file);
    document.write('\
    "></script>');
}

//JavaScript Sleep Function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
