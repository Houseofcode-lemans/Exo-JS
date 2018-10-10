submit.addEventListener("click", function(){
  var age = Number(document.getElementById("age").value);
  if (age >= 18) {
    console.log("majeur")
    alerte("Vous êtes majeur")
  }else {
    alerte("Vous êtes mineur")
    console.log("mineur")
  }
  console.log(age);
  alert(age);
});
