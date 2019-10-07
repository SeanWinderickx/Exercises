var downl = document.getElementById('test');
var downlbtn = document.getElementById("downloadbtn");
var spand = document.getElementById("close");
    
downlbtn.onclick = function(){
console.log('pressed');
// downl.style.visibility = 'visible';
downl.style.display = 'block';
}
// // When the user clicks on <span>, close the downloadwindow
spand.onclick = function() {
// downl.style.visibility = "hidden";
downl.style.display = 'none';
}

// When the user clicks anywhere outside of the downloadwindow, close it
window.onclick = function(event) {
if (event.target == downl) {
downl.style.display = "none";
}
}

var upl = document.getElementById('uploadW');
var uploadbtn = document.getElementById('uploadBtn');
var spanu = document.getElementById('closeU');

uploadbtn.onclick = function(){
console.log('pressed');
// downl.style.visibility = 'visible';
upl.style.display = 'block';
}
// // When the user clicks on <span>, close the uploadwindow
spanu.onclick = function() {
// downl.style.visibility = "hidden";
upl.style.display = 'none';
}

// When the user clicks anywhere outside of the uploadwindow, close it
window.onclick = function(event) {
if (event.target == upl) {
upl.style.display = "none";
}
}
