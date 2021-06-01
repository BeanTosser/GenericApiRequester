export default function requestHttp(url, callback, shouldParse) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log("Got a response?");
    if (this.readyState === 4 && this.status === 200) {
      // Typical action to be performed when the document is ready:
      if (shouldParse) {
        callback(JSON.parse(xhttp.responseText));
      } else {
        callback(xhttp.responseText);
      }
    } else {
      console.log("Something went wrong");
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
