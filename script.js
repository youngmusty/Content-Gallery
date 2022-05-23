function myfunction(imgs) {
  var expand = document.getElementById("expands");
  var img = document.getElementById("image");
  expand.src = imgs.src;
  img.innerHTML = imgs.alt;
  expand.parentElement.style.display = "block";
}