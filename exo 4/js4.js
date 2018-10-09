function reg1(valeur) {
  var reg = new RegExp('^[a-zA-Zàâäãçéèêëìîïòôöõùûüñ\s-]+$');
  return !reg.test(valeur)
}

// le script s'execute avant de remplir le formulaire
// les valeurs sont vides

function button(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var city = document.getElementById("city").value;

  console.log("TEST: "+reg1(firstname))
  console.log("TEST: "+reg1(lastname))
  console.log("TEST: "+reg1(city))
  if(reg1(firstname) == false && reg1(lastname) == false && reg1(city) == false){
    alert("Nom: "+lastname+"\nPrénom: "+firstname+"\nVille: "+city);
    console.log("marche")
  }else{
    alert("Les chiffres ne sont pas accepter");
    console.log("marche pas")
  }
  return false;
}
