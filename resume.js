function displayMore(id) {
    var moreText = document.getElementById(id);
  
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
    } else {
      moreText.style.display = "inline";
    }
}