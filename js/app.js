/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;
let phrase = null;                  // declares the game and phrase objects
$("#btn__reset").on("click", () => {    // this function starts/resets the game
  $("#phrase ul li").remove();
  $("#overlay")
    .removeClass()
    .addClass("start");                 //gets rid of the old phrase
  $("#qwerty button")
    .addClass("key")
    .removeClass("wrong chosen")
    .prop("disabled", false);             //gets rid of any elements added to button in the previous game
  $(".tries img")
    .attr("src", "images/liveHeart.png")
    .removeClass("redLife");              //gives back all lives
  game = new Game();                      //creates a new game
  game.startGame();                       //starts the game
});
$("#qwerty").on("click", e => {
  let button = e.target.innerHTML;
  validateButton(button);
});                                       //checks which button was clicked and stores it so that it can be validated
const validateButton = button => {
  let regex = /^[a-z]$/;
  if (regex.test(button)) {
    game.handleInteraction(button);
  }
};                                        //validates if the letter selected is in the phrase
