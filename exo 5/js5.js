function button(){
  var prems = parseInt(document.getElementById("firstNumber").value);
  var second = Number(document.getElementById("secondNumber").value);
  var total = Number(prems * second);
  document.getElementById("total").value = total;
  alert("total : " + total);
}
