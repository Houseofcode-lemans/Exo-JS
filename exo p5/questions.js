var languagesArrayCreation = function () {
  var tablng = ["Html", "CSS", "Java", "PHP"];
  return tablng;
}

var numbersArrayCreation = function () {
  var numbers = [ 0, 1, 2, 3, 4, 5 ];
    return numbers;
}

var ElementReplacement = function (languages) {
  languages.splice(2, 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.splice(4, 0, 'Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.splice(0, 0, -2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  // languages.splice(0, 1, );
  languages.shift()
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {
  socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  languagesInString = languages.join(',');
  return languagesInString;
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
}
