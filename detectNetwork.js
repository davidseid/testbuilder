// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.slice(0,2);
  
  //Diner's Club
  if ((prefix == '38' || prefix == '39') && cardNumber.length == 14) {
    return "Diner's Club";
  }
  
  // Amex
  if ((prefix == '34' || prefix == '37') && cardNumber.length == 15) {
    return 'American Express';
  }
  
  // Visa
  if ((cardNumber.slice(0,1) == '4') && (cardNumber.length == 13 || cardNumber.length == 16 ||cardNumber.length == 19)) {
    return "Visa";
  }
  
  // Mastercard
  if ((prefix == '51' ||
      prefix == '52' ||
      prefix == '53' ||
      prefix == '54' ||
      prefix == '55') && cardNumber.length == 16) {
        return "MasterCard";
  }
  
  // Discover
  if ((cardNumber.slice(0,4) == '6011' ||
      cardNumber.slice(0,3) == '644' ||
      cardNumber.slice(0,3) == '645' ||
      cardNumber.slice(0,3) == '646' ||
      cardNumber.slice(0,3) == '647' ||
      cardNumber.slice(0,3) == '648' ||
      cardNumber.slice(0,3) == '649' || 
      cardNumber.slice(0,2) == '65') && (cardNumber.length == 16 || cardNumber.length == 19)) {
    return "Discover";
  }
  
  // Maestro
  if ((12 <= cardNumber.length && cardNumber.length <= 19) &&
     (cardNumber.slice(0,4) == '5018' ||
     cardNumber.slice(0,4) == '5020' ||
     cardNumber.slice(0,4) == '5038' ||
     cardNumber.slice(0,4) == '6304')) {
       return 'Maestro';
  }
  
  
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


