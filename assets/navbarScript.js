function navbarfunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsiveBar";
  } else {
    x.className = "navbar";
  }
}
