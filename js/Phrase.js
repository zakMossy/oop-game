/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }                                                 //sets the phrase parameter to lower case
  addPhraseToDisplay() {
    let html = ``;
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        html += `<li class="space"> </li>`;
      } else {
        html += `<li class="hide letter ${this.phrase[i]}">${
          this.phrase[i]
        }</li>`;
      }
    }
    $("#phrase ul").append(html);
  }                                                       //displays the phrase in the game
  checkLetter(letter) {
    if (this.phrase.indexOf(letter) != -1) {
      return true;
    } else {
      return false;
    }
  }                                                       //checks if the letter chosen is in the phrase
  showMatchedLetter(letter) {
    $(`.${letter}`)
      .addClass("show spin")
      .removeClass("hide");
  }
}                                                        //displays the letter on the screen
