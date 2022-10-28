var mid_idx = 0;
function fn_mid_libs() {
  var i;
  var x = document.getElementsByClassName("mid_libs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  mid_idx++;
  if (mid_idx > x.length) {mid_idx = 1;}
  x[mid_idx-1].style.display = "block";
  setTimeout(fn_mid_libs, 6500);
}

var left_idx = 0;
function fn_left_libs() {
  var i;
  var x = document.getElementsByClassName("left_libs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  left_idx++;
  if (left_idx > x.length) {left_idx = 1;}
  x[left_idx-1].style.display = "block";
  setTimeout(fn_left_libs, 17000);
}

var right_idx = 0;
function fn_right_libs() {
  var i;
  var x = document.getElementsByClassName("right_libs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  right_idx++;
  if (right_idx > x.length) {right_idx = 1;}
  x[right_idx-1].style.display = "block";
  setTimeout(fn_right_libs, 2000);
}

// function show_movie() {
//   var elem = document.getElementById("vshow");
//   elem.style.display = "block";
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }