

function MehrAnzeigen(Überschrift){
  var X = document.getElementById(Überschrift);
  if (X.style.display === "none"){
    X.style.display = "block";
  } else {
    X.style.display = "none";
  }
}
