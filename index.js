module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Define a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();;
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    let lettersRegEx = /[a-z]/gi
    return (content.match(lettersRegEx) || []).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false
    }
  }
}
