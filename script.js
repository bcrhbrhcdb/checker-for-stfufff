const textInput = document.getElementById('text-input').value;
const button = document.getElementById('check-btn');
const results = document.getElementById('result');
let input = '';

// format stuff ig
function string(str){
  const clean = str.toLowerCase().match(/[a-z0-9]/g).join("");
  const reverse = clean.split('').reverse().join(''); // Reverse the clean string

  // Check if the clean string is a palindrome
  if (clean === reverse) {
    results.innerHTML = `${str} is a palindrome`; // Update the #result element with the palindrome message
  } else {
    results.innerHTML = `${str} is not a palindrome`; // Update the #result element with the non-palindrome message
  }
}

// see if input = empty
function empty(){
  input = document.getElementById('text-input').value; // Get the value of the text input field
  if (input === ''){
    alert("Please input a value");
    return;
  } else {
    string(input); // Call the string function with the input value
  }
}

button.addEventListener("click", empty);
