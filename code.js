let navlink = document.querySelector("#navlink");
let links = document.querySelectorAll("#navlink ul li a");
function hidemenu() {
  navlink.style.right = "-200px";
}
function showmenu() {
  navlink.style.right = "0px";
}

links.forEach(function (link) {
  link.onclick = function () {
    navlink.style.right = "-200px";
  };
});
