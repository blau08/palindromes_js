var splitIt = function(word) {
  return word.split("");
};

var reverseIt = function(word) {
  return splitIt(word).reverse();
};

var palindrome = function(word) {
  var test_word = reverseIt(word).join("");

  if (test_word === word) {
    return "it is a palindrome";
  } else {
    return "it is not a palindrome";
  };
};
