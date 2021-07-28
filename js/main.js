// var btnMoon = document.getElementById("moon");
// var cols = document.getElementsByClassName('col1');
// var btnSun = document.getElementsByClassName("fa fa-sun");

// btnMoon.onclick = function() {
//   var cols = document.getElementsByClassName('col1');
//   for(i = 0; i < cols.length; i++) {
//     cols[i].style.backgroundColor = "#232220";
//   }

//   var colorWhite = document.getElementsByClassName('color-w');
//   for(i = 0; i < colorWhite.length; i++) {
//     colorWhite[i].style.color = "#fff";
//   }

//   var bc = document.getElementsByClassName('b-c');
//   for(i = 0; i < bc.length; i++) {
//     bc[i].style.borderColor = "rgba(255, 255, 255, 0.1)";
//   }

//   var icon1 = document.getElementsByClassName('icon');
//   for(i = 0; i < icon1.length; i++) {
//     icon1[i].style.backgroundColor = "#282828";
//   }
//   var numberItem = document.getElementsByClassName('number__item');
//   for(i = 0; i < numberItem.length; i++) {
//     numberItem[i].style.backgroundColor = "#232220";
//     numberItem[i].style.border= "none";
//   }


// }

document.getElementById("switchButton").onclick = function () {
  document.getElementById("body").classList.toggle("dark");
}


