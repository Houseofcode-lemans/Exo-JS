submit.addEventListener("click", function(){
  var shoesize = Number(document.getElementById("shoeSize").value);
  var birthday = Number(document.getElementById("yearOfBirth").value);
  var result = shoesize * 2;
  result = result + 5;
  result = result * 50;
  result = result - birthday;
  result = result + 1766;
  total.value = result;
  alert(result);
});
